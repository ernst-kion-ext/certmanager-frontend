# Copilot Instructions for Certmanager Codesign

## Project Overview
This project manages code signing certificates for the Kion CCPS Team, integrating with Hashicorp Vault. It provides both CLI and HTTP server interfaces for certificate lifecycle management (create, retrieve, check, renew).

## Key Components
- `certmanager_codesign.py`: Main CLI tool for certificate operations. Handles Vault authentication, config loading, and commands (`create`, `retrieve`, `check`, `renew`).
- `server.py`: HTTP server exposing certificate info via REST endpoints. Uses Vault API and local logic to serve certificate details.
- `certificate_details.py`: Extracts and serializes certificate metadata (fingerprint, validity, public key, issuer, extensions, etc.).
- `utilities.py`: Core utility functions for HTTP requests, logging, and JSON parsing. Implements custom error handling and retry logic.
- `config.yml`: Environment-specific Vault configuration and key lists. Supports `prod`, `uat`, and profiles.

## Developer Workflows
- **Install dependencies:**
  ```bash
  pip install -r requirements.txt
  ```
- **Run CLI tool:**
  ```bash
  python certmanager_codesign.py [create|retrieve|check|renew] [options]
  ```
  Options include Vault token (`-t`), environment (`-e`), key name (`-k`), and token file (`-f`).
- **Run HTTP server:**
  ```bash
  python server.py
  ```
  Serves on port 8000. Main endpoint `/` returns certificate details as JSON.

## Patterns & Conventions
- **Vault API Integration:** All certificate operations use Vault HTTP endpoints. Tokens are passed via headers; endpoints and roles are configured in `config.yml`.
- **Error Handling:** All HTTP requests use custom retry and error logic (`getJSONData`). Failures print errors and exit.
- **Logging:** Use `log_print(msg, type)` for info, error, and debug output. Debug mode is toggled via the `DEBUG` variable in `utilities.py`.
- **Certificate Serialization:** Metadata extraction is centralized in `certificate_details.py`. Public key and extension parsing use custom logic for readable output.
- **Configuration:** Environment selection (`prod`, `uat`) is handled via CLI args and `config.yml`. Output directory for certificates is set in config.

## External Dependencies
- Hashicorp Vault (remote API)
- Python packages: `requests`, `PyYAML`, `cryptography`

## Examples
- To renew all certificates for the current environment:
  ```bash
  python certmanager_codesign.py renew -e prod -t <vault_token>
  ```
- To fetch certificate details via HTTP:
  ```bash
  curl http://localhost:8000/
  ```

## Important Files
- `certmanager_codesign.py`, `server.py`, `certificate_details.py`, `utilities.py`, `config.yml`, `requirements.txt`

## AI Agent Guidance
- Always use project-specific config and Vault endpoints.
- Follow the logging and error handling patterns in `utilities.py`.
- For certificate parsing, use the helpers in `certificate_details.py`.
- Respect environment selection and key lists from `config.yml`.
- Avoid generic error handling; use the project's custom logic.

---
If any section is unclear or missing, please provide feedback for further refinement.
