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

export default certificateStats;