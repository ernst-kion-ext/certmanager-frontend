const certificateStats = {
    issuedCount: 0,
    revokedCount: 0,
    aboutToExpireCount: 0,

    updateStats: function(certificates) {
        this.issuedCount = certificates.filter(cert => cert.status === 'active').length;
        this.revokedCount = certificates.filter(cert => cert.status === 'revoked').length;
        this.aboutToExpireCount = certificates.filter(cert => cert.isAboutToExpire).length;
    },

    displayStats: function() {
        const statsContainer = document.getElementById('certificate-stats');
        statsContainer.innerHTML = `
            <h3>Certificate Statistics</h3>
            <p>Issued Certificates: ${this.issuedCount}</p>
            <p>Revoked Certificates: ${this.revokedCount}</p>
            <p>About to Expire: ${this.aboutToExpireCount}</p>
        `;
    }
};


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

export default certificateStats;