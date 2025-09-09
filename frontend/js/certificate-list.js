document.addEventListener('DOMContentLoaded', async function () {

    window.certificates = window.certificates || [];

    columns.forEach((col, idx) => {
        const th = document.querySelectorAll('thead th')[idx];
        if (th) {
            th.style.cursor = "pointer";
            th.title = "Click to sort";
            th.addEventListener('click', () => sortByColumn(col.key));
        }
    });

    renderColumnSearchFields();
    renderTable(getFilteredCertificates());

    document.getElementById('column-search-row').addEventListener('input', function (e) {
        if (e.target.classList.contains('column-search-input')) {
            renderTable(getFilteredCertificates());
        }
    });

    const filterInput = document.getElementById('filter-input');
    if (filterInput) {
        filterInput.addEventListener('input', function () {
            renderTable(getFilteredCertificates());
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
    { key: "signaturehashalgorithm", label: "Signature Hash Algorithm" },
    { key: "publickey_type", label: "Public Key Type" },
    { key: "publickey_size", label: "Key Size" },
    { key: "signature", label: "Signature" }
];

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
        tbody.innerHTML = data.map((cert) => `
            <tr>
                <td>${cert.subject || cert.cn || ''}</td>
                <td>${cert.notvalidbefore || ''}</td>
                <td>${cert.notvalidafter || ''}</td>
                <td>${cert.daysleft !== undefined ? cert.daysleft : ''}</td>
                <td>${getKeyUsage(cert)}</td>
                <td>${cert.issuer || ''}</td>
                <td>${cert.status || ''}</td>
                <td>${cert.fingerprint || ''}</td>
                <td>${cert.signaturehashalgorithm || ''}</td>
                <td>${cert.publickey?.type || ''}</td>
                <td>${cert.publickey?.size || cert.publickey?.key_size || ''}</td>
                <td>
                    <button class="show-signature-btn" data-signature="${cert.signature}" style="padding:2px 8px;">Show</button>
                </td>
            </tr>
        `).join('');
    }
}

function renderColumnSearchFields() {
    const searchRow = document.getElementById('column-search-row');
    if (!searchRow) return;
    searchRow.innerHTML = columns.map(col => `
        <td>
            <input 
                type="text" 
                class="column-search-input" 
                data-colkey="${col.key}" 
                placeholder="Search ${col.label}" 
                style="width: 95%; box-sizing: border-box;"
            >
        </td>
    `).join('');
}

function getFilteredCertificates() {
    const inputs = document.querySelectorAll('.column-search-input');
    let filters = {};
    inputs.forEach(input => {
        const val = input.value.trim().toLowerCase();
        if (val) filters[input.dataset.colkey] = val;
    });

    let filtered = certificates.filter(cert => {
        return columns.every(col => {
            const filterVal = filters[col.key];
            if (!filterVal) return true;
            let cellVal;
            switch (col.key) {
                case "keyUsage":
                    cellVal = getKeyUsage(cert);
                    break;
                case "publickey_type":
                    cellVal = cert.publickey?.type;
                    break;
                case "publickey_size":
                    cellVal = cert.publickey?.key_size;
                    break;
                default:
                    cellVal = cert[col.key];
            }
            return (cellVal || "").toString().toLowerCase().includes(filterVal);
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
                    : (val || '').toString().toLowerCase().includes(q)
            )
        );
    }

    return filtered;
}

function sortByColumn(colKey) {
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
        if (valA < valB) return -1;
        if (valA > valB) return 1;
        return 0;
    });
    renderTable(getFilteredCertificates());
}

