let selectedKeyUsages = [];

// Show the modal with the given signature
function showSignatureModal(signature) {
    const modal = document.getElementById('signature-modal');
    const text = document.getElementById('signature-modal-text');
    text.textContent = signature;
    // Store original in a data attribute
    text.dataset.original = signature; 
    modal.style.display = 'flex';
    document.getElementById('signature-modal-copy').focus();
}

// Hide the modal
function hideSignatureModal() {
    document.getElementById('signature-modal').style.display = 'none';
}

// Decode base64 and show as text
function decodeBase64Signature() {
    const textElem = document.getElementById('signature-modal-text');
    try {
        const b64 = textElem.dataset.original.replace(/\s+/g, '');
        const decoded = atob(b64);
        textElem.textContent = decoded;
    } catch (e) {
        alert("Signature is not valid base64 or cannot be decoded.");
    }
}

// Show as hex
function showSignatureAsHex() {
    const textElem = document.getElementById('signature-modal-text');
    try {
        let hex = '';
        const binary = atob(textElem.dataset.original.replace(/\s+/g, ''));
        for (let i = 0; i < binary.length; i++) {
            hex += ('0' + binary.charCodeAt(i).toString(16)).slice(-2);
            if ((i + 1) % 32 === 0 && i !== binary.length - 1) hex += '\n';
            else if ((i + 1) % 2 === 0) hex += ' ';
        }
        textElem.textContent = hex.trim();
    } catch (e) {
        alert("Signature cannot be converted to hex.");
    }
}

// Restore the original signature
function showOriginalSignature() {
    const textElem = document.getElementById('signature-modal-text');
    if (textElem.dataset.original) {
        textElem.textContent = textElem.dataset.original;
    }
}

// Copy signature to clipboard
function copySignatureToClipboard() {
    const text = document.getElementById('signature-modal-text').textContent;
    const copyButton = document.getElementById('signature-modal-copy');
    const originalButtonText = copyButton.textContent;

    navigator.clipboard.writeText(text).then(() => {
        copyButton.textContent = 'Copied to clipboard!';
        copyButton.classList.add('copied');
        
        setTimeout(() => {
            copyButton.textContent = originalButtonText;
            copyButton.classList.remove('copied');
        }, 2000);
    });
}

// Event delegation for show buttons
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('show-signature-btn')) {
        const signature = decodeURIComponent(e.target.getAttribute('data-signature'));
        showSignatureModal(signature);
    }
});

// Close modal when clicking outside the modal content
function closeModalOnOutsideClick(e) {
    if (e.target === document.getElementById('signature-modal')) hideSignatureModal();
}

// Show the modal with the given public key
function showPublicKeyModal(publicKeyJson) {
    const modal = document.getElementById('publickey-modal');
    const text = document.getElementById('publickey-modal-text');
    if (!modal || !text) return; // Prevent errors if modal is missing
    try {
        const pub = JSON.parse(decodeURIComponent(publicKeyJson));
        let out = '';
        if (typeof pub === 'string') {
            out = pub;
        } else if (typeof pub === 'object' && pub !== null) {
            for (const [k, v] of Object.entries(pub)) {
                out += `${k}: ${typeof v === 'string' ? v : JSON.stringify(v)}\n`;
            }
        } else {
            out = String(pub);
        }
        text.textContent = out.trim();
    } catch (e) {
        text.textContent = "Could not parse public key.";
    }
    modal.style.display = 'flex';
    const copyBtn = document.getElementById('publickey-modal-copy');
    if (copyBtn) copyBtn.focus();
}

function hidePublicKeyModal() {
    document.getElementById('publickey-modal').style.display = 'none';
}

function closePublicKeyModalOnOutsideClick(e) {
    if (e.target === document.getElementById('publickey-modal')) hidePublicKeyModal();
}

function copyPublicKeyToClipboard() {
    const text = document.getElementById('publickey-modal-text').textContent;
    const copyButton = document.getElementById('publickey-modal-copy');
    const originalButtonText = copyButton.textContent;

    navigator.clipboard.writeText(text).then(() => {
        copyButton.textContent = 'Copied to clipboard!';
        copyButton.classList.add('copied');
        setTimeout(() => {
            copyButton.textContent = originalButtonText;
            copyButton.classList.remove('copied');
        }, 2000);
    });
}

// Event delegation for public key show buttons
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('show-publickey-btn')) {
        const publicKey = e.target.getAttribute('data-publickey');
        showPublicKeyModal(publicKey);
    }
});

// Add ESC key support for closing modals
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        // Close signature modal if open
        const sigModal = document.getElementById('signature-modal');
        if (sigModal && sigModal.style.display === 'flex') {
            hideSignatureModal();
        }
        // Close public key modal if open
        const pubModal = document.getElementById('publickey-modal');
        if (pubModal && pubModal.style.display === 'flex') {
            hidePublicKeyModal();
        }
    }
});

// Modal creation and logic for Key Usage filter
function showKeyUsageModal() {
    let modal = document.getElementById('keyusage-modal');
    if (!modal) return;

    modal.style.display = 'block';

    // Only show usages that exist in the current certificate list
    const usagesSet = new Set();
    (window.certificates).forEach(cert => {
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
}

function closeKeyUsageModal() {
    const modal = document.getElementById('keyusage-modal');
    if (modal) modal.style.display = 'none';
}

function closeKeyUsageModalOnOutsideClick(event) {
    const modal = document.getElementById('keyusage-modal');
    if (modal && event.target === modal) modal.style.display = 'none';
}

function applyKeyUsageModal() {
    const modal = document.getElementById('keyusage-modal');
    if (!modal) return;
    const form = modal.querySelector('#keyusage-checkboxes-form');
    // Save checked usages to global variable
    selectedKeyUsages = Array.from(form.querySelectorAll('.keyusage-checkbox:checked')).map(cb => cb.value);
    window.pagination.reset();
    modal.style.display = 'none';
}

function clearKeyUsageModal() {
    const modal = document.getElementById('keyusage-modal');
    if (!modal) return;
    const form = modal.querySelector('#keyusage-checkboxes-form');
    form.querySelectorAll('.keyusage-checkbox').forEach(cb => cb.checked = false);
    selectedKeyUsages = [];
}


// Update filtering logic for keyUsage checkboxes (now only modal checkboxes)
function getFilteredCertificates() {
    const inputs = document.querySelectorAll('.column-search-input');
    let filters = {};
    inputs.forEach(input => {
        const val = input.value.trim();
        if (val) filters[input.dataset.colkey] = val;
    });

    let checkedKeyUsages = selectedKeyUsages;

    let filtered = window.certificates.filter(cert => {
        return columns.every(col => {
            // Key Usage: filter by checked checkboxes
            if (col.key === "keyUsage") {
                if (checkedKeyUsages.length === 0) return true;
                const certUsages = getKeyUsage(cert).split(',').map(s => s.trim()).filter(Boolean);
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

            return value.toString().toLowerCase().includes(filters[col.key].toLowerCase());
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

window.getFilteredCertificates = getFilteredCertificates;