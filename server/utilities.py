import requests

# static configuration items
CONFIG_FILE="config.yml"
DEBUG=False
TYPE_INFO=0
TYPE_ERROR=1
TYPE_DEBUG=2

def log_print(msg="", type=-1):
  """ Simple and custom log system function"""

  if type == TYPE_INFO:
    print("[INFO] - {0}".format(msg))
  elif type == TYPE_ERROR:
    print("[ERROR] - {0}".format(msg))
  elif type == TYPE_DEBUG:
    print("[DEBUG] - {0}".format(msg))
  else:
    print(msg)

def getJSONData(verb, url, return_value=None, data=None, headers=None):
  """ Send a HTTP request and returns a parsed JSON response """
  no_tries = 0
  while(True):
    try:
        match verb:
          case "GET":
              response = requests.get(url, headers=headers)
          case "POST":
              response = requests.post(url, data=data, headers=headers)
          case _:
              raise ValueError("No valid HTTP term for request")
        if(DEBUG):
          log_print("Verb: {0}".format(verb), TYPE_DEBUG)
          log_print("Request URL: {0}".format(url), TYPE_DEBUG)
          log_print("Request Data: {0}".format(data), TYPE_DEBUG)
          log_print("Response: {0}".format(response), TYPE_DEBUG)
        break;

    except requests.exceptions.ConnectTimeout:
      if(no_tries < 3):
        log_print("Connection Timeout - trying again", TYPE_ERROR)
      else:
        log_print("Connection Timeout - too many tries - exiting", TYPE_ERROR)
        exit(-1)
    except requests.exceptions.JSONDecodeError:
      log_print("Could not decode JSON response from URL {0}".format(url), TYPE_ERROR)
      exit(-1)
    except Exception as e:
      log_print("Unexpected error occured", TYPE_ERROR)
      print(e)
      exit(-1)

  if(response.status_code != 200):
    log_print("Could not get {0} from {1} - see error message below".format(return_value, url), TYPE_ERROR)
    print(response.text)
    exit(-1)

  raw_json = response.json()
  val = None
  if (return_value is not None):
    val = raw_json
    for el in return_value.split("."):
      val = val[el]
  else:
    val = raw_json
  return val