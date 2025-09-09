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

function updateStatistics() {
    const certificates = window.certificates || [];

    let totalCount = certificates.length;
    let validCount = certificates.filter(cert =>
        cert.status === 'valid'
    ).length;
    let revokedCount = certificates.filter(cert =>
        cert.status === 'revoked'
    ).length;
    let expiredCount = certificates.filter(cert =>
        cert.status === 'expired'
    ).length;

    document.getElementById('total-certificates').textContent = totalCount;
    document.getElementById('valid-certificates').textContent = validCount;
    document.getElementById('revoked-certificates').textContent = revokedCount;
    document.getElementById('expired-certificates').textContent = expiredCount;

    drawSimpleBarChart([
        { label: 'Total', value: totalCount, color: '#3692eb' },
        { label: 'Valid', value: validCount, color: '#4bc0c0' },
        { label: 'Revoked', value: revokedCount, color: '#ff6384' },
        { label: 'Expired', value: expiredCount, color: '#ff9f40' }
    ]);
}

function drawSimpleBarChart(data) {
    const container = document.getElementById('simple-bar-chart');
    container.innerHTML = '';

    const max = Math.max(...data.map(d => d.value), 1);

    // 60% of viewport height for the tallest bar
    const maxBarHeight = Math.floor(window.innerHeight * 0.6);

    const chartWrapper = document.createElement('div');
    chartWrapper.className = 'vertical-bar-chart-wrapper';

    data.forEach(item => {
        const barCol = document.createElement('div');
        barCol.className = 'vertical-bar-col';

        const bar = document.createElement('div');
        bar.className = 'vertical-bar';
        bar.style.height = (item.value / max * maxBarHeight) + 'px';
        bar.style.background = item.color;

        const value = document.createElement('div');
        value.className = 'vertical-bar-value';
        value.textContent = item.value;

        const label = document.createElement('div');
        label.className = 'vertical-bar-label';
        label.textContent = item.label;

        barCol.appendChild(value);
        barCol.appendChild(bar);
        barCol.appendChild(label);
        chartWrapper.appendChild(barCol);
    });

    container.appendChild(chartWrapper);
}