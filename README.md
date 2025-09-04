# CCPS Certmanager UI

## Overview
The Certificate Manager UI is a web application designed to visualize and manage certificate data. It provides functionalities to list certificates, view their statuses, set up renewal notifications, and display statistics related to certificate issuance and revocation.



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
