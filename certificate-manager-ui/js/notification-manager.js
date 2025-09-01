function checkCertificateStatus(certificates) {
    const now = new Date();
    const notifications = [];

    certificates.forEach(cert => {
        const expiryDate = new Date(cert.validity.end);
        const status = cert.status;

        if (status === 'active' && (expiryDate - now) < (30 * 24 * 60 * 60 * 1000)) {
            notifications.push(`Certificate ${cert.CN} is about to expire on ${expiryDate.toLocaleDateString()}.`);
        } else if (status === 'revoked') {
            notifications.push(`Certificate ${cert.CN} has been revoked.`);
        }
    });

    return notifications;
}

function displayNotifications(notifications) {
    const notificationContainer = document.getElementById('notification-container');
    notificationContainer.innerHTML = '';

    notifications.forEach(notification => {
        const notificationElement = document.createElement('div');
        notificationElement.className = 'notification';
        notificationElement.textContent = notification;
        notificationContainer.appendChild(notificationElement);
    });
}

function setupRenewalNotifications(certificates) {
    const notifications = checkCertificateStatus(certificates);
    displayNotifications(notifications);
}

export { setupRenewalNotifications };