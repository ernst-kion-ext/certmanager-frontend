async function fetchCertificates() {
    const btn = document.getElementById('fetch-certificates-btn');
    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = "Loading...";

    try {
        const certificates = await getServerCertificates();
        window.certificates = certificates;
        // Disabled until implementation is complete
        // displayStatistics(certificates);
        if (typeof renderTable === "function" && typeof getFilteredCertificates === "function") {
            renderTable(getFilteredCertificates());
        }
    } catch (error) {
        // Optionally show error to user
        console.error(error);
    } finally {
        btn.disabled = false;
        btn.textContent = originalText;
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