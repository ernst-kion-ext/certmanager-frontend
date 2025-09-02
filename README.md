# Certificate Manager UI

## Overview
The Certificate Manager UI is a web application designed to visualize and manage certificate data. It provides functionalities to list certificates, view their statuses, set up renewal notifications, and display statistics related to certificate issuance and revocation.

## Project Structure
The project consists of the following files and directories:

- `index.html`: The main HTML document for the web application.
- `css/styles.css`: Contains styles for the web application, defining layout, colors, and fonts.
- `js/app.js`: The entry point for JavaScript functionality, managing the overall application flow.
- `js/certificate-list.js`: Handles the logic for listing and filtering certificates by various attributes.
- `js/certificate-stats.js`: Manages the display of certificate statistics, including charts and diagrams.
- `js/notification-manager.js`: Responsible for managing renewal and expiration notifications.

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to view the application.
3. Ensure that the server providing the certificate data is running and accessible.

## Usage
- The application will display a list of certificates with options to filter by Common Name (CN), validity, key usage, and issuer.
- Users can view the status of each certificate (active, revoked, about-to-expire).
- Renewal notifications can be set up to alert users about certificates that require attention.
- Certificate statistics will be displayed visually, showing the number of certificates issued and revoked.

## Features
- List and filter certificates
- View certificate statuses
- Set up renewal notifications
- Visualize certificate statistics

## License
This project is licensed under the MIT License.