async function fetchCertificates() {
    const certificates = await getServerCertificates();
    window.certificates = certificates;
    // TODO currently disabled until implemented
    // displayStatistics(certificates);

    // Trigger table re-render using the certificate-list.js logic:
    if (typeof renderTable === "function" && typeof getFilteredCertificates === "function") {
        renderTable(getFilteredCertificates());
    }
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