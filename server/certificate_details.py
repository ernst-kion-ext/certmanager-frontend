from cryptography import x509
from cryptography.x509.oid import NameOID
from datetime import datetime, UTC
import json
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import rsa, ec, ed25519, ed448
import base64

from utilities import *

# this whole serialize_public_key function is AI generated as I can't be bothered
# to parse every possibility and string here to have a pretty output
def serialize_public_key(pub):
    info = {
        "pem": pub.public_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PublicFormat.SubjectPublicKeyInfo,
        ).decode()
    }

    # Try OpenSSH (works for RSA/EC/Ed25519/Ed448)
    try:
        info["ssh"] = pub.public_bytes(
            encoding=serialization.Encoding.OpenSSH,
            format=serialization.PublicFormat.OpenSSH,
        ).decode()
    except Exception:
        pass

    if isinstance(pub, rsa.RSAPublicKey):
        nums = pub.public_numbers()
        info.update({
            "type": "RSA",
            "key_size": pub.key_size,
            "modulus_hex": format(nums.n, "x"),
            "exponent": nums.e,
        })
    elif isinstance(pub, ec.EllipticCurvePublicKey):
        nums = pub.public_numbers()
        info.update({
            "type": "EC",
            "curve": pub.curve.name,
            "x_hex": format(nums.x, "x"),
            "y_hex": format(nums.y, "x"),
        })
    elif isinstance(pub, ed25519.Ed25519PublicKey):
        info.update({
            "type": "Ed25519",
            "raw_b64": base64.b64encode(
                pub.public_bytes(
                    encoding=serialization.Encoding.Raw,
                    format=serialization.PublicFormat.Raw,
                )
            ).decode(),
        })
    elif isinstance(pub, ed448.Ed448PublicKey):
        info.update({
            "type": "Ed448",
            "raw_b64": base64.b64encode(
                pub.public_bytes(
                    encoding=serialization.Encoding.Raw,
                    format=serialization.PublicFormat.Raw,
                )
            ).decode(),
        })

    return info

def getCertificateDetails(certificate):

    certificateObject = {} 

    # certificate fingerprint
    cert = x509.load_pem_x509_certificate(certificate.encode())

    # binary to a readable hex formatting magic
    hex_serial = f"{cert.serial_number:x}"  # lowercoase hex
    if len(hex_serial) % 2:  # ensure even length for pairing
        hex_serial = "0" + hex_serial
    fingerprint = ":".join(hex_serial[i:i+2] for i in range(0, len(hex_serial), 2))
    certificateObject['fingerprint'] = fingerprint 

    # Not valid before
    notvalidbefore = cert.not_valid_before_utc
    certificateObject['notvalidbefore'] = notvalidbefore.strftime("%c")

    # Not valid after
    notvalidafter = cert.not_valid_after_utc
    certificateObject['notvalidafter'] = notvalidafter.strftime("%c")

    # Shows how much time is left on the certificate
    daysleft = (notvalidafter-datetime.now(UTC)).days
    certificateObject['daysleft'] = daysleft 

    # Public key
    pub = cert.public_key()
    certificateObject["publickey"] = serialize_public_key(pub)

    # Issuer
    issuer = cert.issuer.get_attributes_for_oid(NameOID.COMMON_NAME)[0].value
    certificateObject['issuer'] = str(issuer)

    # subject
    subject = cert.subject.get_attributes_for_oid(NameOID.COMMON_NAME)[0].value
    certificateObject['subject'] = str(subject)

    # signature_hash_algorithm
    signature_hash_algorithm = str(type(cert.signature_hash_algorithm))
    # reverses the string, cuts 2 characters away, look for the first/last dot, take this element and reverses it again
    # it basically just extracts the name of the signature_hash_algorithm
    signature_hash_algorithm = signature_hash_algorithm[::-1][2:].partition(".")[0][::-1]
    certificateObject['signaturehashalgorithm'] = signature_hash_algorithm

    # extensions
    # this whole extensions block is AI generated as I can't be bothered
    # to parse every possibility and string here to have a pretty output
    def _friendly_oid_name(oid):
        return getattr(oid, "_name", None) or oid.dotted_string

    def _serialize_general_name(gn):
        # Keep only raw values; coerce IPs to string
        if isinstance(gn, x509.DNSName):
            return gn.value
        if isinstance(gn, x509.RFC822Name):
            return gn.value
        if isinstance(gn, x509.UniformResourceIdentifier):
            return gn.value
        if isinstance(gn, x509.IPAddress):
            return str(gn.value)
        if isinstance(gn, x509.DirectoryName):
            return gn.value.rfc4514_string()
        return str(getattr(gn, "value", gn))

    def _serialize_extension_value(ext_value):
        # Subject Alternative Name -> list of values
        if isinstance(ext_value, x509.SubjectAlternativeName):
            return [_serialize_general_name(gn) for gn in ext_value]

        # Basic Constraints -> dict
        if isinstance(ext_value, x509.BasicConstraints):
            return {"ca": ext_value.ca, "path_length": ext_value.path_length}

        # Key Usage -> dict of booleans/None
        if isinstance(ext_value, x509.KeyUsage):
            enc_only = None
            dec_only = None
            if ext_value.key_agreement:
                enc_only = ext_value.encipher_only
                dec_only = ext_value.decipher_only
            return {
                "digital_signature": ext_value.digital_signature,
                "content_commitment": ext_value.content_commitment,
                "key_encipherment": ext_value.key_encipherment,
                "data_encipherment": ext_value.data_encipherment,
                "key_agreement": ext_value.key_agreement,
                "key_cert_sign": ext_value.key_cert_sign,
                "crl_sign": ext_value.crl_sign,
                "encipher_only": enc_only,
                "decipher_only": dec_only,
            }

        # Extended Key Usage -> list of names
        if isinstance(ext_value, x509.ExtendedKeyUsage):
            return [_friendly_oid_name(oid) for oid in ext_value]

        # Subject Key Identifier -> hex
        if isinstance(ext_value, x509.SubjectKeyIdentifier):
            return ext_value.digest.hex()

        # Authority Key Identifier -> dict
        if isinstance(ext_value, x509.AuthorityKeyIdentifier):
            return {
                "key_identifier": ext_value.key_identifier.hex() if ext_value.key_identifier else None,
                "authority_cert_issuer": (
                    [_serialize_general_name(n) for n in ext_value.authority_cert_issuer]
                    if ext_value.authority_cert_issuer else None
                ),
                "authority_cert_serial_number": ext_value.authority_cert_serial_number,
            }

        # CRL Distribution Points -> list of lists (URLs/dir names)
        if isinstance(ext_value, x509.CRLDistributionPoints):
            result = []
            for dp in ext_value:
                names = dp.full_name or []
                result.append([_serialize_general_name(n) for n in names])
            return result

        # Authority Information Access -> list of dicts
        if isinstance(ext_value, x509.AuthorityInformationAccess):
            out = []
            for ad in ext_value:
                out.append({
                    "access_method": _friendly_oid_name(ad.access_method),
                    "access_location": _serialize_general_name(ad.access_location),
                })
            return out

        # Certificate Policies -> list of policy identifiers
        if isinstance(ext_value, x509.CertificatePolicies):
            return [_friendly_oid_name(pi.policy_identifier) for pi in ext_value]

        # Default: best-effort plain value
        return str(ext_value)

    # Finally serve the extension object
    result_extensions = {}
    for extension in cert.extensions:
        ext_name = extension.oid._name or extension.oid.dotted_string
        result_extensions[ext_name] = _serialize_extension_value(extension.value)
    certificateObject['extensions'] = result_extensions

    # signature
    signature = cert.signature
    certificateObject['signature'] = str(signature.hex())

    return certificateObject
