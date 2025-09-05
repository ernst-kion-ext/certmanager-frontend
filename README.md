# CCPS Certmanager UI

## Overview
The Certificate Manager UI is a web application designed to visualize and manage certificate data. It provides functionalities to list certificates, view their statuses, set up renewal notifications, and display statistics related to certificate issuance and revocation.


## Frontend

This is a frontend website written in HTML, CSS and vanilla Javscript without any external libraries or frameworks.
Run the Backend in the same repository and then open the `index.html`. 


### TODO

- Have to make a server choice option in the frontend
- fetchCertificates() should have a configurable server option
- add statistics bars


## Backend

The backend is implemented in Python and provides both CLI and HTTP server interfaces for certificate lifecycle management. It integrates with Hashicorp Vault to manage code signing certificates.

### Developer Workflows

- **Install dependencies:**
  ```bash
  pip install -r requirements.txt
  ```

- **Run HTTP server:**
  ```bash
  python server.py
  ```
  Serves on port 8000. Main endpoint `/` returns certificate details as JSON.

### Patterns & Conventions

- Vault API integration for listing all certificates and certificate details.
- Custom error handling and logging via `utilities.py`.
- Certificate metadata extraction centralized in `certificate_details.py`.
- Environment selection and key lists managed via `config.yml`.

### External Dependencies

- Hashicorp Vault (remote API)
- Python packages: See config.yml

## Todo

- backend should at least ask for a token/api key for frontend requests
- remove self.send_header('Access-Control-Allow-Origin', '*')
