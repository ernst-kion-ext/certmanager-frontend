document.addEventListener('DOMContentLoaded', async function () {

    document.getElementById('column-search-row').addEventListener('input', function (e) {
        if (e.target.classList.contains('column-search-input')) {
            window.pagination.reset();
        }
    });

    const filterInput = document.getElementById('filter-input');
    if (filterInput) {
        filterInput.addEventListener('input', function () {
            window.pagination.reset();
        });
    }

    // Sidebar view content switching logic
    const certificatesBtn = document.getElementById('certificates-btn');
    const statisticsBtn = document.getElementById('statistics-btn');
    const certificatesView = document.getElementById('certificates-view');
    const statisticsView = document.getElementById('statistics-view');

    if (certificatesBtn && statisticsBtn && certificatesView && statisticsView) {
        certificatesBtn.addEventListener('click', function() {
            certificatesView.style.display = 'block';
            statisticsView.style.display = 'none';
            certificatesBtn.classList.add('active');
            statisticsBtn.classList.remove('active');
        });

        statisticsBtn.addEventListener('click', function() {
            certificatesView.style.display = 'none';
            statisticsView.style.display = 'block';
            certificatesBtn.classList.remove('active');
            statisticsBtn.classList.add('active');
            updateStatistics();
        });
    }

    // Initialize pagination
    window.pagination.init();

    setupColumnVisibilityListener();
});

const columns = [
    { key: "subject", label: "Subject" },
    { key: "notvalidbefore", label: "Not Valid Before" },
    { key: "notvalidafter", label: "Not Valid After" },
    { key: "daysleft", label: "Days Left" },
    { key: "keyUsage", label: "Key Usage" },
    { key: "issuer", label: "Issuer" },
    { key: "status", label: "Status" },
    { key: "fingerprint", label: "Fingerprint" },
    { key: "engine", label: "Engine" },
    { key: "signaturehashalgorithm", label: "Signature Hash Algorithm" },
    { key: "publickey_type", label: "Public Key Type" },
    { key: "publickey_size", label: "Public Key Size" },
    { key: "subjectKeyIdentifier", label: "Subject Key Identifier" },
    { key: "publickey", label: "Public Key" },
    { key: "signature", label: "Signature" }
];

let currentSort = { colKey: null, direction: 'asc' };

// Toggle sort direction if same column, else default to ascending
function changeSortOrderForColumn(receivedColumn) {
                if (currentSort.colKey === receivedColumn) {
                    currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
                } else {
                    currentSort.colKey = receivedColumn;
                    currentSort.direction = 'asc';
                }
                sortByColumn(currentSort.colKey, currentSort.direction);
                updateSortIndicators();
}

function renderTable(data) {
    const tbody = document.getElementById('certificates-body');
    window.pagination.updateUI(data);
    const pageData = window.pagination.getCurrentPageData(data);

    if (tbody) {
        tbody.innerHTML = pageData.map(cert => {
            const rowClass = (cert.status !== "valid") ? 'row-not-valid' : '';
            // Careful, the order or columns matters and
            // have to correspond to the index.html
            return `
            <tr class="${rowClass}">
                <td>${getSubjectLink(cert)}</td>
                <td>${cert.notvalidbefore}</td>
                <td>${cert.notvalidafter}</td>
                <td>${cert.daysleft}</td>
                <td>${getKeyUsage(cert)}</td>
                <td>${getIssuerLink(cert)}</td>
                <td>${cert.status}</td>
                <td>${cert.fingerprint}</td>
                <td>${getEngineLink()}</td>
                <td>${cert.signaturehashalgorithm}</td>
                <td>${cert.publickey?.type}</td>
                <td>${cert.publickey?.size || cert.publickey?.key_size}</td>
                <td>${cert.extensions?.subjectKeyIdentifier}</td>
                <td>
                    <button class="show-publickey-btn" data-publickey="${encodeURIComponent(JSON.stringify(cert.publickey.pem))}">Show Pem</button>
                    <button class="show-publickey-btn" data-publickey="${encodeURIComponent(JSON.stringify(cert.publickey.ssh))}">Show SSH</button>
                </td>
                <td>
                    <button class="show-signature-btn" data-signature="${cert.signature}" style="padding:2px 8px;">Show</button>
                </td>
            </tr>
        `}).join('');
    }
    updateColumnVisibility();
    updateSortIndicators();
}

async function fetchCertificates() {
    const btn = document.getElementById('fetch-certificates-btn');
    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = "Loading...";

    try {
        const data = await getServerCertificates();
        window.metadata = data.metadata;
        const certificates = data.certificates;
        processCertificateStatuses(certificates);
        window.certificates = certificates;
        window.pagination.reset();
    } catch (error) {
        console.error(error);
    } finally {
        btn.disabled = false;
        btn.textContent = originalText;
    }
}

function getKeyUsage(cert) {
    if (cert.keyUsage) return cert.keyUsage;
    if (cert.extensions && cert.extensions.extendedKeyUsage) {
        return cert.extensions.extendedKeyUsage.join(', ');
    }
    if (cert.extensions && cert.extensions.keyUsage) {
        return Object.keys(cert.extensions.keyUsage).filter(k => cert.extensions.keyUsage[k]).join(', ');
    }
    return '';
}

// Sorting functions
function updateSortIndicators() {
    const ths = document.querySelectorAll('thead th');
    ths.forEach((th, index) => {
        // Remove any existing arrow
        th.innerHTML = columns[index].label;
        if (columns[index].key === currentSort.colKey) {
            th.innerHTML += currentSort.direction === 'asc' ? ' &#9650;' : ' &#9660;';
        }
    });
}

function sortByColumn(colKey, direction = 'asc') {
    let keyFn;
    switch (colKey) {
        case "keyUsage":
            keyFn = cert => getKeyUsage(cert);
            break;
        case "publickey_type":
            keyFn = cert => cert.publickey?.type || "";
            break;
        case "publickey_size":
            keyFn = cert => cert.publickey?.key_size || "";
            break;
        default:
            keyFn = cert => cert[colKey];
    }

    window.certificates.sort((a, b) => {
        let valA = keyFn(a) || "";
        let valB = keyFn(b) || "";
        if (valA < valB) return direction === 'asc' ? -1 : 1;
        if (valA > valB) return direction === 'asc' ? 1 : -1;
        return 0;
    });
    renderTable(getFilteredCertificates());
}

/**
 * Processes all certificates and sets the "status" field to:
 * - "expired" if notAfter is in the past and not revoked
 * - "revoked" if cert.status is already "revoked"
 * - "valid" otherwise
 * Call this function after fetching certificates.
 */
function processCertificateStatuses(certificates) {
    const now = new Date();
    certificates.forEach(cert => {
        if (cert.status && cert.status.toLowerCase() === "revoked") {
            cert.status = "revoked";
        } else {
            let notAfter = cert.notAfter || cert.notvalidafter;
            let notAfterDate = notAfter ? new Date(notAfter) : null;
            if (notAfterDate && notAfterDate < now) {
                cert.status = "expired";
            } else {
                cert.status = "valid";
            }
        }
    });
}

function getSubjectLink(cert) {
    // Get current server URL from the metadata

    const serverValue = window.metadata.vault_addr;
    const pki_mount = window.metadata.pki_mount;
    const fingerprint = cert.fingerprint;
    const subject = cert.subject || cert.cn;

    if (subject && fingerprint) {
        const url = serverValue + 'ui/vault/secrets/' + pki_mount + '/pki/certificates/' + fingerprint + '/details';
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${subject}</a>`;
    } else {
        return subject;
    }
}

function getEngineLink() {
    const serverValue = window.metadata.vault_addr;
    const pki_mount = window.metadata.pki_mount;

    if (serverValue && pki_mount) {
        const url = serverValue + 'ui/vault/secrets/' + pki_mount + '/pki/overview';
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${pki_mount}</a>`;
    } else {
        return pki_mount;
    }
}

function getIssuerLink(cert) {
    const issuerSubject = cert.issuer;

    // Search for a certificate with subject === issuer
    const issuerCert = window.certificates.find(cert => cert.subject === issuerSubject);

    if (issuerCert) {
        return getSubjectLink(issuerCert);
    } else {
        // This can happen if we limit the certificates and not receive all of them
        // so the issuer is maybe not within the current set
        return issuerSubject;
    }
}