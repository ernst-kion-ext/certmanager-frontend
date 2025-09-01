import { getLocalCertificates } from "./getLocalCertificates.js";

const apiUrl = 'http://localhost:8000/'; // URL of the server providing certificate data

document.addEventListener('DOMContentLoaded', function () {

    const certificates = getLocalCertificates()

    let sortDirection = {};
    const columns = [
        { key: "subject", label: "Subject" },
        { key: "notvalidbefore", label: "Valid from" },
        { key: "notvalidafter", label: "Valid until" },
        { key: "keyUsage", label: "Key Usage" },
        { key: "issuer", label: "Issuer" },
        { key: "status", label: "Status" }
    ];

    function getKeyUsage(cert) {
        if (cert.extensions && cert.extensions.keyUsage) {
            return Object.keys(cert.extensions.keyUsage).filter(k => cert.extensions.keyUsage[k]).join(', ');
        }
        return '';
    }

    function getValidity(cert) {
        return `${cert.notvalidbefore} - ${cert.notvalidafter}`;
    }

    // Render table with filtered data
    function renderTable(data) {
        const tbody = document.getElementById('certificates-body');
        if (tbody) {
            tbody.innerHTML = data.map(cert => `
                <tr>
                    <td>${cert.subject}</td>
                    <td>${formatGermanDate(cert.notvalidbefore)}</td>
                    <td>${formatGermanDate(cert.notvalidafter)}</td>
                    <td>${getKeyUsage(cert)}</td>
                    <td>${cert.issuer}</td>
                    <td>${cert.status || ''}</td>
                </tr>
            `).join('');
        }
    }

    // Add search fields under the header
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

    // Filtering logic for all columns
    function getFilteredCertificates() {
        const inputs = document.querySelectorAll('.column-search-input');
        let filters = {};
        inputs.forEach(input => {
            const val = input.value.trim().toLowerCase();
            if (val) filters[input.dataset.colkey] = val;
        });

        return certificates.filter(cert => {
            return columns.every(col => {
                const filterVal = filters[col.key];
                if (!filterVal) return true;
                let cellVal;
                if (col.key === "validity") cellVal = getValidity(cert);
                else if (col.key === "keyUsage") cellVal = getKeyUsage(cert);
                else cellVal = cert[col.key];
                return (cellVal || "").toString().toLowerCase().includes(filterVal);
            });
        });
    }

    // Sorting logic
    function sortByColumn(colKey) {
        let keyFn;
        if (colKey === "validity") keyFn = cert => cert.notvalidbefore;
        else if (colKey === "keyUsage") keyFn = cert => getKeyUsage(cert);
        else keyFn = cert => cert[colKey];

        sortDirection[colKey] = !sortDirection[colKey];
        certificates.sort((a, b) => {
            let valA = keyFn(a) || "";
            let valB = keyFn(b) || "";
            if (valA < valB) return sortDirection[colKey] ? -1 : 1;
            if (valA > valB) return sortDirection[colKey] ? 1 : -1;
            return 0;
        });
        renderTable(getFilteredCertificates());
    }

    // Add click listeners to table headers
    function addHeaderListeners() {
        columns.forEach((col, idx) => {
            const th = document.querySelectorAll('thead th')[idx];
            if (th) {
                th.style.cursor = "pointer";
                th.title = "Click to sort";
                th.addEventListener('click', () => sortByColumn(col.key));
            }
        });
    }

    // Fetch certificates from API
    async function fetchCertificates() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            certificates = await response.json();
        } catch (error) {
            console.error('Error fetching certificates:', error);
            certificates = getLocalCertificates(); // fallback
        }
        renderTable(getFilteredCertificates());
    }

    renderColumnSearchFields();
    addHeaderListeners();

    // Listen for input changes on all column search fields
    document.getElementById('column-search-row').addEventListener('input', function(e) {
        if (e.target.classList.contains('column-search-input')) {
            renderTable(getFilteredCertificates());
        }
    });

    fetchCertificates();
});

// Function to fetch certificates from the server
async function fetchCertificates() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const certificates = await response.json();
        displayCertificates(certificates);
    } catch (error) {
        console.error('Error fetching certificates:', error);
    }
}

// Function to display certificates in the UI
function displayCertificates(certificates) {
    const certificateList = document.getElementById('certificate-list');
    certificateList.innerHTML = ''; // Clear existing list

    certificates.forEach(cert => {
        const listItem = document.createElement('li');
        listItem.textContent = `CN: ${cert.cn}, Validity: ${cert.validity}, Key Usage: ${cert.keyUsage}, Issuer: ${cert.issuer}`;
        certificateList.appendChild(listItem);
    });
}

// Function to filter certificates based on user input
function filterCertificates() {
    const filterValue = document.getElementById('filter-input').value.toLowerCase();
    const listItems = document.querySelectorAll('#certificate-list li');

    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filterValue) ? '' : 'none';
    });
}

// Event listener for filter input
document.getElementById('filter-input').addEventListener('input', filterCertificates);

// Initialize the application
// fetchCertificatesJson();

document.addEventListener('DOMContentLoaded', function () {
    // Example embedded certificate data for prototyping
    let certificates = getLocalCertificates();

    let sortDirection = {};
    const columns = [
        { key: "subject", label: "Subject" },
        { key: "notvalidbefore", label: "Valid from" },
        { key: "notvalidafter", label: "Valid until" },
        { key: "keyUsage", label: "Key Usage" },
        { key: "issuer", label: "Issuer" },
        { key: "status", label: "Status" }
    ];

    function getKeyUsage(cert) {
        if (cert.extensions && cert.extensions.keyUsage) {
            return Object.keys(cert.extensions.keyUsage).filter(k => cert.extensions.keyUsage[k]).join(', ');
        }
        return '';
    }

    function getValidity(cert) {
        return `${cert.notvalidbefore} - ${cert.notvalidafter}`;
    }

    // Render table with filtered data
    function renderTable(data) {
        const tbody = document.getElementById('certificates-body');
        if (tbody) {
            tbody.innerHTML = data.map(cert => `
                <tr>
                    <td>${cert.subject}</td>
                    <td>${formatGermanDate(cert.notvalidbefore)}</td>
                    <td>${formatGermanDate(cert.notvalidafter)}</td>
                    <td>${getKeyUsage(cert)}</td>
                    <td>${cert.issuer}</td>
                    <td>${cert.status}</td>
                </tr>
            `).join('');
        }
    }

    // Add search fields under the header
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

    // Filtering logic for all columns
    function getFilteredCertificates() {
        const inputs = document.querySelectorAll('.column-search-input');
        let filters = {};
        inputs.forEach(input => {
            const val = input.value.trim().toLowerCase();
            if (val) filters[input.dataset.colkey] = val;
        });

        return certificates.filter(cert => {
            return columns.every(col => {
                const filterVal = filters[col.key];
                if (!filterVal) return true;
                let cellVal;
                if (col.key === "validity") cellVal = getValidity(cert);
                else if (col.key === "keyUsage") cellVal = getKeyUsage(cert);
                else cellVal = cert[col.key];
                return (cellVal || "").toString().toLowerCase().includes(filterVal);
            });
        });
    }

    // Sorting logic
    function sortByColumn(colKey) {
        let keyFn;
        if (colKey === "validity") keyFn = cert => cert.notvalidbefore;
        else if (colKey === "keyUsage") keyFn = cert => getKeyUsage(cert);
        else keyFn = cert => cert[colKey];

        sortDirection[colKey] = !sortDirection[colKey];
        certificates.sort((a, b) => {
            let valA = keyFn(a) || "";
            let valB = keyFn(b) || "";
            if (valA < valB) return sortDirection[colKey] ? -1 : 1;
            if (valA > valB) return sortDirection[colKey] ? 1 : -1;
            return 0;
        });
        renderTable(getFilteredCertificates());
    }

    // Add click listeners to table headers
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

    // Listen for input changes on all column search fields
    document.getElementById('column-search-row').addEventListener('input', function(e) {
        if (e.target.classList.contains('column-search-input')) {
            renderTable(getFilteredCertificates());
        }
    });
});

// Function to format date to German format
function formatGermanDate(dateStr) {
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;
    return date.toLocaleString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}



