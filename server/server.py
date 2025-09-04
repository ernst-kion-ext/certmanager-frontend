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

    def parse_certamount_parameter(self):
        from urllib.parse import urlparse, parse_qs
        query = urlparse(self.path).query
        params = parse_qs(query)
        self.certamount = None
        if "certamount" in params:
            try:
                self.certamount = int(params["certamount"][0])
            except Exception:
                self.certamount = None
                log_print("Invalid certamount parameter", TYPE_ERROR)

    def do_GET(self):
        log_print(self.path, TYPE_INFO)
        if self.path.startswith('/'):
            # fill self.certamount if it is supplied in the path
            self.parse_certamount_parameter()

            getList = getJSONData(
                "GET",
                "{0}v1/{1}/certs/?list=true".format(configuration["vault_addr"], configuration["pki_mount"]),
                "data.keys",
                None,
                {"X-Vault-Token": vaulttoken}
            )

            log_print(getList, TYPE_INFO)
            log_print("Returned {0} certificates".format(len(getList)), TYPE_INFO)

            allCerts = []
            currentLoop = 0

            for certificate_fingerprint in getList:
                currentLoop += 1
                # If no certamount is supplied via commandline, return all certificates
                # else use the number supplied
                # probably only useful for debugging
                if not self.certamount or currentLoop <= self.certamount:
                    certificate = getCertificate(certificate_fingerprint)
                    certificateDetails = getCertificateDetails(certificate)
                    allCerts.append(certificateDetails)

            self.send_response(200)
            self.send_header('Content-type', 'text/json')
            # TODO: for debugging, should be removed or specified
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(allCerts).encode('utf-8'))


if __name__ == "__main__":

  parser = argparse.ArgumentParser(prog = os.path.basename(__file__), formatter_class=argparse.RawDescriptionHelpFormatter)
  
  parser.add_argument("-t", "--token", type=str, help='Vault Token for authentication. In the format of hvs.CAESIHbIrw4rlu9KHPyYsh5LDeQyQe8kSWLnUrj_AZVbK_9sGh4KHGh2cy5CQ0hPUVpqb0pjb0RIVFFNWllvNEx0N2c It also can be supplied via the environment variable VAULTTOKEN. If not supplied it will be asked interactively')
  parser.add_argument("-f", "--filetoken", type=str, help='Path to the file which contains the vault token')
  parser.add_argument("-e", "--environment", type=str, choices={"prod", "uat", "ernst"}, default="prod", help="Vault environment to use (default: '%(default)s')")
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
