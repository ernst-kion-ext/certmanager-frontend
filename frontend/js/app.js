async function fetchCertificates() {
    const apiKey = document.getElementById('api-key-input').value;
    const certificates = await getServerCertificates(apiKey);
    displayCertificates(certificates);
    displayStatistics(certificates);
    setupNotifications(certificates);
}

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('fetch-certificates-btn');
    if (btn) {
        btn.addEventListener('click', fetchCertificates);
    }
});

function displayCertificates(certificates) {
    const certificateList = document.getElementById('certificate-list');
    certificateList.innerHTML = '';

    certificates.forEach(cert => {
        const listItem = document.createElement('li');
        listItem.textContent = `CN: ${cert.cn}, Validity: ${cert.validity}, Key Usage: ${cert.keyUsage}, Issuer: ${cert.issuer}`;
        certificateList.appendChild(listItem);
    });
}

function displayStatistics(certificates) {
    const stats = calculateStatistics(certificates);
    const statsContainer = document.getElementById('certificate-stats');
    statsContainer.innerHTML = `Issued: ${stats.issued}, Revoked: ${stats.revoked}`;
}

function calculateStatistics(certificates) {
    let issued = 0;
    let revoked = 0;

    certificates.forEach(cert => {
        if (cert.status === 'active') {
            issued++;
        } else if (cert.status === 'revoked') {
            revoked++;
        }
    });

    return { issued, revoked };
}

function setupNotifications(certificates) {
    certificates.forEach(cert => {
        if (cert.status === 'about-to-expire') {
            alert(`Certificate ${cert.cn} is about to expire!`);
        }
    });
}