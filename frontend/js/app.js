// filepath: /certificate-manager-ui/certificate-manager-ui/js/app.js
document.addEventListener('DOMContentLoaded', function() {
    fetchCertificates();
});

function fetchCertificates() {
    fetch('http://localhost:8000/')
        .then(response => response.json())
        .then(data => {
            displayCertificates(data);
            displayStatistics(data);
            setupNotifications(data);
        })
        .catch(error => console.error('Error fetching certificates:', error));
}

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