from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import os
import yaml
import argparse
import pprint

from utilities import *
from certificate_details import *

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
    def isValidApikey(self, client_apikey):
        apikey_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "apikey")
        with open(apikey_path) as f:
            try:
                backend_apikey = str(f.read().rstrip())
                if backend_apikey != client_apikey:
                    log_print("client_apikey: {0}".format(client_apikey))
                    log_print("backend_apikey: {0}".format(backend_apikey))
                    log_print("Provided API key does not match the expected API key", TYPE_ERROR)
                    return False
                return True
            except Exception as exc:
                log_print("Error reading file {0}. See following exception for details".format(apikey_path), TYPE_ERROR)
                print(exc)
                return False

    def get_apikey_header(self):
        api_key_header = self.headers.get('apikey')
        if api_key_header:
            return api_key_header
        else:
            log_print("No apikey header provided", TYPE_INFO)
            return None

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
        
        # supplies apikey via client request
        client_apikey = self.get_apikey_header()

        if not self.isValidApikey(client_apikey):
          self.send_response(403)
          self.end_headers()
          self.wfile.write(b'Forbidden: Invalid API key')

        getList = getJSONData(
            "GET",
            "{0}v1/{1}/certs/?list=true".format(configuration["vault_addr"], configuration["pki_mount"]),
            "data.keys",
            None,
            {"X-Vault-Token": vaulttoken}
        )

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
                certificate = getCertificate(certificate_fingerprint)
                certificateDetails = getCertificateDetails(certificate)
                allCerts.append(certificateDetails)

        self.send_response(200)
        self.send_header('Content-type', 'text/json')
        self.end_headers()
        self.wfile.write(json.dumps(allCerts).encode('utf-8'))
            
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def end_headers(self):
        # TODO: for debugging, should be removed or specified
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'apikey, certamount, Content-Type')
        super().end_headers()    


if __name__ == "__main__":

  parser = argparse.ArgumentParser(prog = os.path.basename(__file__), formatter_class=argparse.RawDescriptionHelpFormatter)
  
  parser.add_argument("-t", "--token", type=str, help='Vault Token for authentication. In the format of hvs.CAESIHbIrw4rlu9KHPyYsh5LDeQyQe8kSWLnUrj_AZVbK_9sGh4KHGh2cy5CQ0hPUVpqb0pjb0RIVFFNWllvNEx0N2c It also can be supplied via the environment variable VAULTTOKEN. If not supplied it will be asked interactively')
  parser.add_argument("-f", "--filetoken", type=str, help='Path to the file which contains the vault token')
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

  # handling provided tokens
  if args.token:
    vaulttoken = args.token
  elif os.getenv('VAULTTOKEN'):
    vaulttoken = os.getenv('VAULTTOKEN')
  elif args.filetoken:
    with open(args.filetoken) as f:
      try:
        vaulttoken = str(f.read().rstrip())
      except Exception as exc:
        log_print("Error reading file {0}. See following exception for details".format(config_path), TYPE_ERROR)
        print(exc)
        exit(-1)
  else:
    vaulttoken = input("Please enter the vault token for access:")

  if(DEBUG):
    log_print("Configuration imported from {0}:".format(config_path), TYPE_DEBUG)
    pprint.pprint(configuration)
    pprint.pprint(args)

  httpd = HTTPServer(('', 8000), SimpleHTTPRequestHandler)
  httpd.serve_forever()
