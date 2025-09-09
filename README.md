# CCPS Certmanager UI

## Overview

The Certificate Manager UI is a web application designed to visualize and manage certificate data. It provides functionalities to list certificates, view their statuses, set up renewal notifications, and display statistics related to certificate issuance and revocation.

## Frontend

This is a frontend website written in HTML, CSS, and vanilla JavaScript without any external libraries or frameworks.

How to use:
1. Run the Backend (see below).
2. Open `index.html` in your browser.
3. Choose a server, enter your API key, and (optionally) set a maximum number of certificates to fetch.
4. Click "Submit" to load and view certificates.

### Features

- Server selection (Production, UAT, Localhost)
- API key authentication (required, sent via HTTP header)
- Limit the number of certificates fetched (optional, via `certamount` header)
- Global and per-column filtering/search
- Sortable columns
- Signature modal with copy-to-clipboard
- Certificate statistics (issued/revoked) display
- No external JS/CSS dependencies

### Security

- The backend requires an API key for all requests, sent via the `apikey` HTTP header.
- The API key is stored in `server/apikey` (plaintext, do not commit secrets).

### TODO

- [ ] Improve error handling and user feedback.
- [ ] Optionally support Vault token input
- [ ] Remove field for limiting the certificates
- [ ] Implement loading indicators for async actions
- [ ] Add links to the vault url on the data
- [ ] Implement pagination for certificate lists
- [ ] Remove signature modal functionality
- [ ] Prettify some UI elements like filter inputs and buttons


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
|-||
| `-t`, `--token`         | Vault Token for authentication. Can also be supplied via the `VAULTTOKEN` environment variable.      |
| `-f`, `--filetoken`     | Path to a file containing the Vault token.                                                           |
| `-e`, `--environment`   | Vault environment to use (`prod`, `uat`, `localhost`). Default: `prod`.                             |

Examples:
```bash
python3 server.py -t <vault_token> -e prod
python3 server.py --filetoken /path/to/tokenfile --environment uat
```

### Patterns & Conventions

- Vault API integration for listing all certificates and certificate details.
- Custom error handling and logging via `utilities.py`.
- Certificate metadata extraction centralized in `certificate_details.py`.
- Environment selection and key lists managed via `config.yml`.
- API key must be specified in plaintext in a file called `apikey` in the `server` folder.

### External Dependencies

- Hashicorp Vault (remote API)
- Python packages: See `requirements.txt` and `config.yml`

### Security

- The backend requires an API key for all requests, sent via the `apikey` HTTP header.
- The API key is stored in `server/apikey` (plaintext, do not commit secrets).
- CORS headers are set to allow frontend access.

### TODO

- [ ] Remove or restrict `Access-Control-Allow-Origin: *` in production.
- [ ] Optionally support Vault token input
