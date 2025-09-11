from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import os
import yaml
import argparse
import pprint

from utilities import *
from certificate_details import *

vaulttoken = None

def getCertificate(certificateName):

    certificate = getJSONData(
    "GET",
    "{0}v1/{1}/cert/{2}".format(configuration["vault_addr"], configuration["pki_mount"], certificateName),
    "data.certificate",
    None,
    {"X-Vault-Token": vaulttoken}
    )

    return certificate


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
  
    def get_vaulttoken_header(self):
      vaulttoken_header = self.headers.get('X-Vault-Token')
      if vaulttoken_header:
          return vaulttoken_header
      else:
          log_print("No X-Vault-Token header provided", TYPE_INFO)
          self.answerError("No Vault token provided")
          return
  
    def isValidVaulttoken(self, vaulttoken):
      ttl_duration = getJSONData(
        "GET",
        "{0}v1/auth/token/lookup-self".format(configuration["vault_addr"]),
        "data.ttl",
        None,
        {"X-Vault-Token": vaulttoken}
      )
      # Basically check if the token is valid
      if(ttl_duration and ttl_duration > 100):
          return True
      return False

    def get_certamount_header(self):
        certamount_header = self.headers.get('certamount')
        if certamount_header:
            try:
                return int(certamount_header)
            except ValueError:
                log_print("Invalid certamount header", TYPE_ERROR)
                return None
        return None

    def do_GET(self):
      log_print(self.path, TYPE_INFO)
      if self.path.startswith('/'):
        global vaulttoken
        temp_vaulttoken = self.get_vaulttoken_header()
        
        if self.isValidVaulttoken(temp_vaulttoken):
          vaulttoken = temp_vaulttoken
        else:
          self.answerError("Invalid Vault token") 
          return

        getList = getJSONData(
            "GET",
            "{0}v1/{1}/certs/?list=true".format(configuration["vault_addr"], configuration["pki_mount"]),
            "data.keys",
            None,
            {"X-Vault-Token": vaulttoken}
        )

        if not getList:
          self.answerError("Could not retrieve certificate list")
          return

        log_print(getList, TYPE_INFO)
        log_print("Returned {0} certificates".format(len(getList)), TYPE_INFO)

        max_requested_certificates = self.get_certamount_header()
        allCerts = []
        currentLoop = 0

        for certificate_fingerprint in getList:
            currentLoop += 1
            # If no certamount is supplied, return all certificates
            # else use the number supplied
            # probably only useful for debugging
            if not max_requested_certificates or currentLoop <= max_requested_certificates:
              try:
                certificate = getCertificate(certificate_fingerprint)
                certificateDetails = getCertificateDetails(certificate)
                allCerts.append(certificateDetails)
              except Exception as e:
                self.answerError("Error retrieving certificate {}: {}".format(certificate_fingerprint, e))
                return

            metadata = { "pki_mount": configuration["pki_mount"],
                          "vault_addr": configuration["vault_addr"]
                        }

            returnObject = {
                "metadata": metadata,
                "certificates": allCerts,
            }

        self.send_response(200)
        self.send_header('Content-type', 'text/json')
        self.end_headers()
        self.wfile.write(json.dumps(returnObject).encode('utf-8'))
        
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def end_headers(self):
        # TODO: for debugging, should be removed or specified
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'X-Vault-Token, certamount, Content-Type')
        super().end_headers()    

    def answerError(self, message):
        self.send_response(400)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(message.encode('utf-8'))
        return


if __name__ == "__main__":

  parser = argparse.ArgumentParser(prog = os.path.basename(__file__), formatter_class=argparse.RawDescriptionHelpFormatter)
  
  parser.add_argument("-e", "--environment", type=str, choices={"prod", "uat", "localhost"}, default="prod", help="Vault environment to use (default: '%(default)s')")
  args = parser.parse_args()

  log_print("Start certmanager", TYPE_INFO)

  script_dir = os.path.dirname(os.path.abspath(__file__))
  config_path = os.path.join(script_dir, CONFIG_FILE)

  if not os.path.exists(config_path):
    log_print("Could not find local configuration file '{0}'".format(config_path), TYPE_ERROR)
    exit(-1)

  with open(config_path) as f:
    try:
      conf_dict = yaml.safe_load(f)
      configuration = {}
    except yaml.YAMLError as exc:
      log_print("Error reading file {0}. See following exception for details".format(config_path), TYPE_ERROR)
      print(exc)
      exit(-1)

  conf_dict[args.environment]
  configuration = conf_dict[args.environment]

  if(DEBUG):
    log_print("Configuration imported from {0}:".format(config_path), TYPE_DEBUG)
    pprint.pprint(configuration)
    pprint.pprint(args)

  httpd = HTTPServer(('', 8000), SimpleHTTPRequestHandler)
  httpd.serve_forever()
