# CCPS Certmanager UI

## Overview

The Certificate Manager UI is a web application designed to visualize and manage certificate data. It provides functionalities to list certificates, view their statuses, set up renewal notifications, and display statistics related to certificate issuance and revocation.

## Frontend

This is a frontend website written in HTML, CSS, and vanilla JavaScript without any external libraries or frameworks.

How to use:
1. Run the Backend (see below).
2. Open `index.html` in your browser.
3. Choose a server, enter your vault token, and (optionally) set a maximum number of certificates to fetch.
4. Click "Submit" to load and view certificates.

### Features

- Server selection (Production, UAT, Localhost)
- Vault token authentication (required, sent via HTTP header)
- Limit the number of certificates fetched (optional, via `certamount` header)
- Provide certificate status: valid, expired, revoked
- Advanced filtering capabilities:
  - Global search across all fields
  - Per-column filtering/search
  - Specialized key usage filtering modal
- Table customization:
  - Sortable columns (ascending/descending)
  - Column visibility toggles
  - Status-based row highlighting
- Various modals for detail views
  - Signature Modal
  - Public Key Modal
  - Certificate Details Modal
  - Key Usage Modal
- Pagination system
- Dynamic links to the vault
- Statistics visualization
- No external JS/CSS dependencies

### TODO

- [ ] Add status: "about to exire"
- [ ] Create "notification system" for about to expire certificates
- [ ] Improve error handling and user feedback
  - [ ] Display user-friendly error messages
  - [ ] Highlight fields with errors
  - [ ] Show that no token has been entered
- [ ] Remove field for limiting the certificates
- [ ] Implement loading indicators for async actions, possibly progress updates
- [ ] Remove signature modal functionality
- [ ] Prettify some UI elements
  - [ ] Filter inputs
  - [ ] Buttons
  - [ ] statistics page
  - [ ] different browsers and sizes / responsive

## Backend

The backend is implemented in Python and provides both CLI and HTTP server interfaces for certificate lifecycle management. It integrates with Hashicorp Vault to manage code signing certificates.

### Developer Workflows

- Install dependencies:
  ```bash
  pip install -r requirements.txt
  ```

- Run HTTP server:
  ```bash
  python3 server.py [options]
  ```
  Serves on port 8000. Main endpoint `/` returns certificate details as JSON.

### Server Arguments

| Argument                | Description                                                                                          |
|-------------------------|------------------------------------------------------------------------------------------------------|                                                       |
| `-e`, `--environment`   | Vault environment to use (`prod`, `uat`, `localhost`). Default: `prod`.                             |

Examples:
```bash
python3 server.py -e prod
python3 server.py --environment uat
```

### Patterns & Conventions

- Vault API integration for listing all certificates and certificate details.
- Custom error handling and logging via `utilities.py`.
- Certificate metadata extraction centralized in `certificate_details.py`.
- Environment selection and key lists managed via `config.yml`.

### External Dependencies

- Hashicorp Vault (remote API)
- Python packages: See `requirements.txt` and `config.yml`

### Security

- The backend receives the `vaulttoken` from from the user input in the frontend 
- CORS headers are set to allow frontend access.

### Certificate JSON Format

The backend returns certificate data in the following JSON structure:

```jsonc
{
  "metadata": {
    "vault_addr": "<vault server URL>",
    "pki_mount": "<PKI engine mount path>"
  },
  "certificates": [
    {
      "fingerprint": "<certificate fingerprint string>",
      "notvalidbefore": "<start of validity period, e.g. 'Fri Aug 22 11:51:06 2025'>",
      "notvalidafter": "<end of validity period, e.g. 'Fri Aug 29 11:51:36 2025'>",
      "daysleft": <integer, days until expiration>,
      "publickey": {
        "pem": "<PEM-encoded public key>",
        "ssh": "<SSH-formatted public key>",
        "type": "<key type, e.g. 'RSA'>",
        "key_size": <integer, key size in bits>,
        "modulus_hex": "<hexadecimal modulus (for RSA keys)>",
        "exponent": <integer, public exponent (for RSA keys)>
      },
      "issuer": "<issuer name string>",
      "subject": "<subject name string>",
      "signaturehashalgorithm": "<signature hash algorithm, e.g. 'SHA256'>",
      "extensions": {
        "extendedKeyUsage": [
          "<usage1>",
          "<usage2>"
        ],
        "subjectKeyIdentifier": "<subject key identifier string>",
        "authorityKeyIdentifier": {
          "key_identifier": "<authority key identifier string>",
          "authority_cert_issuer": "<issuer info or null>",
          "authority_cert_serial_number": "<serial number or null>"
        },
        "subjectAltName": [
          "<subject alternative name 1>",
          "<subject alternative name 2>"
        ]
      },
      "signature": "<base64-encoded signature string>"
    }
    // ...more certificates
  ]
}
```

### TODO

- [ ] Remove or restrict `Access-Control-Allow-Origin: *` in production.
- [ ] Should the backend support a choice from the frontend about which PKI engine to use and maybe support multiple?
- [ ] List all PKI engines and then get all their certificates
- [ ] Adjust the role for the token creation in the vault for UAT to hand out