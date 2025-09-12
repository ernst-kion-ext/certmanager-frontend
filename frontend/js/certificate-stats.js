
function updateStatistics() {
    const certificates = window.certificates || [];

    // 0. Basic Certificate Counts
    let totalCount = certificates.length;
    let validCount = certificates.filter(cert => cert.status === 'valid').length;
    let revokedCount = certificates.filter(cert => cert.status === 'revoked').length;
    let expiredCount = certificates.filter(cert => cert.status === 'expired').length;
    drawSimpleBarChart([
        { label: 'Total', value: totalCount },
        { label: 'Valid', value: validCount },
        { label: 'Revoked', value: revokedCount },
        { label: 'Expired', value: expiredCount }
    ]);

    // 1. Issuer Distribution
    const issuerCounts = {};
    certificates.forEach(cert => {
        const issuer = cert.issuer || 'Unknown';
        issuerCounts[issuer] = (issuerCounts[issuer] || 0) + 1;
    });
    drawHorizontalBarChart('issuer-distribution-chart', issuerCounts, 'Issuer');

    // 2. Certificate Hierarchy (Root, Intermediate, End-Entity)
    let root = 0, intermediate = 0, endEntity = 0;
    certificates.forEach(cert => {
        const isCA = cert.extensions && cert.extensions.basicConstraints && cert.extensions.basicConstraints.ca;
        const hasIssuer = cert.issuer && cert.subject && cert.issuer !== cert.subject;
        if (isCA && !hasIssuer) root++;
        else if (isCA && hasIssuer) intermediate++;
        else endEntity++;
    });
    document.getElementById('hierarchy-summary').innerHTML =
        `<p>Root: ${root}, Intermediate: ${intermediate}, End-Entity: ${endEntity}</p>`;

    // 3. Key Usage Breakdown
    const keyUsageTypes = [
        'digital_signature', 'content_commitment', 'key_encipherment',
        'data_encipherment', 'key_agreement', 'key_cert_sign', 'crl_sign'
    ];
    const keyUsageCounts = {};
    keyUsageTypes.forEach(type => keyUsageCounts[type] = 0);
    certificates.forEach(cert => {
        const usage = cert.extensions && cert.extensions.keyUsage;
        if (usage) {
            keyUsageTypes.forEach(type => {
                if (usage[type]) keyUsageCounts[type]++;
            });
        }
    });
    drawHorizontalBarChart('key-usage-chart', keyUsageCounts, 'Key Usage');

    // 4. Expiration Timeline (by year-quarter)
    const expirationTimeline = {};
    certificates.forEach(cert => {
        if (cert.notvalidafter) {
            const date = new Date(cert.notvalidafter);
            const year = date.getFullYear();
            const quarter = Math.floor(date.getMonth() / 3) + 1;
            const label = `${year}-Q${quarter}`;
            expirationTimeline[label] = (expirationTimeline[label] || 0) + 1;
        }
    });
    drawHorizontalBarChart('expiration-timeline-chart', expirationTimeline, 'Expiration');

    // 5. CA Certificate Statistics
    let caCount = 0, nonCaCount = 0;
    certificates.forEach(cert => {
        const isCA = cert.extensions && cert.extensions.basicConstraints && cert.extensions.basicConstraints.ca;
        if (isCA) caCount++;
        else nonCaCount++;
    });
    document.getElementById('ca-certificate-stats').innerHTML =
        `<p>CA Certificates: ${caCount}<br>End-Entity Certificates: ${nonCaCount}</p>`;
}

function drawHorizontalBarChart(containerId, dataObj, labelPrefix) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const entries = Object.entries(dataObj).filter(([k, v]) => v > 0);
    if (entries.length === 0) {
        container.innerHTML = '<em>No data</em>';
        return;
    }
    const max = Math.max(...entries.map(([k, v]) => v));
    // Sort by time (year-quarter)
    if (containerId === 'expiration-timeline-chart') {
        entries.sort((a, b) => {
            const [ay, aq] = a[0].split('-Q').map(Number);
            const [by, bq] = b[0].split('-Q').map(Number);
            if (ay !== by) return ay - by;
            return aq - bq;
        });
    } else {
        entries.sort((a, b) => b[1] - a[1]);
    }
    entries.forEach(([key, value]) => {
        const row = document.createElement('div');
        row.className = 'horizontal-bar-row';
        const label = document.createElement('span');
        label.className = 'horizontal-bar-label';
        label.textContent = `${key}`;
        const bar = document.createElement('div');
        bar.className = 'horizontal-bar';
        bar.style.width = (value / max * 220) + 'px';
        bar.title = `${value} ${labelPrefix}`;
        const count = document.createElement('span');
        count.className = 'horizontal-bar-count';
        count.textContent = value;
        row.appendChild(label);
        row.appendChild(bar);
        row.appendChild(count);
        container.appendChild(row);
    });
}

function drawSimpleBarChart(data) {
    const container = document.getElementById('simple-bar-chart');
    container.innerHTML = '';
    const max = Math.max(...data.map(d => d.value), 1);
    data.forEach(item => {
        const row = document.createElement('div');
        row.className = 'horizontal-bar-row';
        const label = document.createElement('span');
        label.className = 'horizontal-bar-label';
        label.textContent = item.label;
        const bar = document.createElement('div');
        bar.className = 'horizontal-bar';
        bar.style.width = (item.value / max * 220) + 'px';
        bar.title = `${item.value} ${item.label}`;
        const count = document.createElement('span');
        count.className = 'horizontal-bar-count';
        count.textContent = item.value;
        row.appendChild(label);
        row.appendChild(bar);
        row.appendChild(count);
        container.appendChild(row);
    });
}