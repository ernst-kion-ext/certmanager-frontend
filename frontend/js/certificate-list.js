document.addEventListener('DOMContentLoaded', async function () {

    window.certificates = window.certificates || [];

    columns.forEach((col, idx) => {
        const th = document.querySelectorAll('thead th')[idx];
        if (th) {
            th.style.cursor = "pointer";
            th.title = "Click to sort";
            th.addEventListener('click', () => {
                // Toggle sort direction if same column, else default to ascending
                if (currentSort.colKey === col.key) {
                    currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
                } else {
                    currentSort.colKey = col.key;
                    currentSort.direction = 'asc';
                }
                sortByColumn(col.key, currentSort.direction);
                updateSortIndicators();
            });
        }
    });

    renderColumnSearchFields();
    renderTable(getFilteredCertificates());
    updateSortIndicators();

    document.getElementById('column-search-row').addEventListener('input', function (e) {
        if (e.target.classList.contains('column-search-input')) {
            renderTable(getFilteredCertificates());
            updateSortIndicators();
        }
    });

    const filterInput = document.getElementById('filter-input');
    if (filterInput) {
        filterInput.addEventListener('input', function () {
            renderTable(getFilteredCertificates());
            updateSortIndicators();
        });
    }

    // Sidebar view switching logic
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

let currentSort = { colKey: null, direction: 'asc' }; // Track current sort column and direction

// Store selected key usages globally for filtering
let selectedKeyUsages = [];

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
        renderTable(getFilteredCertificates());
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

function renderTable(data) {
    const tbody = document.getElementById('certificates-body');

    if (tbody) {
        tbody.innerHTML = data.map((cert) => {
            // Row class for non-valid certificates (expired or revoked)
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
}

function renderColumnSearchFields() {
    const searchRow = document.getElementById('column-search-row');
    if (!searchRow) return;
    searchRow.innerHTML = columns.map(col => {
        // Use date input for Not Valid Before and Not Valid After
        if (col.key === "notvalidbefore" || col.key === "notvalidafter") {
            return `
                <td>
                    <input 
                        type="date" 
                        class="column-search-input" 
                        data-colkey="${col.key}" 
                        placeholder="Search ${col.label}" 
                        style="width: 95%; box-sizing: border-box;"
                    >
                </td>
            `;
        }
        // Use modal trigger for Key Usage
        if (col.key === "keyUsage") {
            return `
                <td>
                    <button type="button" id="keyusage-filter-btn" class="keyusage-filter-btn">Filter...</button>
                </td>
            `;
        }
        return `
            <td>
                <input 
                    type="text" 
                    class="column-search-input" 
                    data-colkey="${col.key}" 
                    placeholder="Search ${col.label}" 
                    style="width: 95%; box-sizing: border-box;"
                >
            </td>
        `;
    }).join('');

    // Modal logic for Key Usage filter
    const btn = document.getElementById('keyusage-filter-btn');
    if (btn) {
        btn.addEventListener('click', showKeyUsageModal);
    }
}

// Modal creation and logic for Key Usage filter
function showKeyUsageModal() {
    let modal = document.getElementById('keyusage-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'keyusage-modal';
        modal.className = 'custom-modal';
        modal.innerHTML = `
            <div class="custom-modal-content">
                <button class="custom-modal-close" id="keyusage-modal-close">&times;</button>
                <h3>Filter by Key Usage</h3>
                <form id="keyusage-checkboxes-form"></form>
                <div style="margin-top:16px;">
                    <button type="button" id="keyusage-modal-apply" class="keyusage-modal-apply">Apply</button>
                    <button type="button" id="keyusage-modal-clear" class="keyusage-modal-clear">Clear</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // Only show usages that exist in the current certificate list
    const usagesSet = new Set();
    (window.certificates || []).forEach(cert => {
        getKeyUsage(cert).split(',').map(s => s.trim()).filter(Boolean).forEach(u => usagesSet.add(u));
    });
    const usages = Array.from(usagesSet);

    const form = modal.querySelector('#keyusage-checkboxes-form');
    form.innerHTML = usages.length === 0
        ? '<div style="color:#888;">No key usages found in current list.</div>'
        : usages.map(usage => `
            <label style="display:block; margin-bottom:4px;">
                <input type="checkbox" class="keyusage-checkbox" value="${usage}">
                ${usage.replace(/_/g, ' ')}
            </label>
        `).join('');

    // Restore checked state from selectedKeyUsages
    form.querySelectorAll('.keyusage-checkbox').forEach(cb => {
        if (selectedKeyUsages.includes(cb.value)) cb.checked = true;
    });

    // Show modal
    modal.style.display = 'block';

    // Close logic
    modal.querySelector('#keyusage-modal-close').onclick = () => { modal.style.display = 'none'; };
    modal.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

    // Apply logic
    modal.querySelector('#keyusage-modal-apply').onclick = () => {
        // Save checked usages to global variable
        selectedKeyUsages = Array.from(form.querySelectorAll('.keyusage-checkbox:checked')).map(cb => cb.value);
        renderTable(getFilteredCertificates());
        updateSortIndicators();
        modal.style.display = 'none';
    };

    // Clear logic
    modal.querySelector('#keyusage-modal-clear').onclick = () => {
        form.querySelectorAll('.keyusage-checkbox').forEach(cb => cb.checked = false);
        selectedKeyUsages = [];
    };
}

// Update filtering logic for keyUsage checkboxes (now only modal checkboxes)
function getFilteredCertificates() {
    const inputs = document.querySelectorAll('.column-search-input');
    let filters = {};
    inputs.forEach(input => {
        const val = input.value.trim();
        if (val) filters[input.dataset.colkey] = val;
    });

    // Use selectedKeyUsages for filtering
    let checkedKeyUsages = selectedKeyUsages || [];

    let filtered = certificates.filter(cert => {
        return columns.every(col => {
            // Key Usage: filter by checked checkboxes
            if (col.key === "keyUsage") {
                if (checkedKeyUsages.length === 0) return true;
                const certUsages = getKeyUsage(cert).split(',').map(s => s.trim()).filter(Boolean);
                // All checked usages must be present in certUsages
                return checkedKeyUsages.every(usage => certUsages.includes(usage));
            }

            if (!filters[col.key]) return true;
            let value;
            if (col.key === "subjectKeyIdentifier") {
                value = cert.extensions?.subjectKeyIdentifier;
            } else if (col.key === "keyUsage") {
                value = getKeyUsage(cert);
            } else if (col.key === "publickey_type") {
                value = cert.publickey?.type;
            } else if (col.key === "publickey_size") {
                value = cert.publickey?.size || cert.publickey?.key_size;
            } else if (col.key === "publickey") {
                value = [
                    cert.publickey?.pem,
                    cert.publickey?.ssh
                ].join(" ");
            } else {
                value = cert[col.key];
            }

            // Special handling for date columns
            if (col.key === "notvalidbefore" || col.key === "notvalidafter") {
                if (!value) return false;
                const certDate = new Date(value);
                const filterDate = new Date(filters[col.key]);
                if (isNaN(certDate) || isNaN(filterDate)) return false;
                if (col.key === "notvalidbefore") {
                    return certDate <= filterDate;
                } else {
                    return certDate >= filterDate;
                }
            }

            return (value).toString().toLowerCase().includes(filters[col.key].toLowerCase());
        });
    });

    // Apply global filter input (search all fields)
    const filterInput = document.getElementById('filter-input');
    if (filterInput && filterInput.value.trim()) {
        const q = filterInput.value.trim().toLowerCase();
        filtered = filtered.filter(cert =>
            Object.values(cert).some(val =>
                (typeof val === "object")
                    ? JSON.stringify(val).toLowerCase().includes(q)
                    : (val).toString().toLowerCase().includes(q)
            )
        );
    }

    return filtered;
}

function updateSortIndicators() {
    const ths = document.querySelectorAll('thead th');
    ths.forEach((th, idx) => {
        // Remove any existing arrow
        th.innerHTML = columns[idx].label;
        if (columns[idx].key === currentSort.colKey) {
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

    certificates.sort((a, b) => {
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
        url = serverValue + 'ui/vault/secrets/' + pki_mount + '/pki/certificates/' + fingerprint + '/details';
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${subject}</a>`;
    } else {
        return subject;
    }
}

function getEngineLink() {
    const serverValue = window.metadata.vault_addr;
    const pki_mount = window.metadata.pki_mount;

    if (serverValue && pki_mount) {
        url = serverValue + 'ui/vault/secrets/' + pki_mount + '/pki/overview';
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