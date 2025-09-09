// Show the modal with the given signature
function showSignatureModal(signature) {
    const modal = document.getElementById('signature-modal');
    const text = document.getElementById('signature-modal-text');
    const copied = document.getElementById('signature-modal-copied');
    text.textContent = signature;
    // Store original in a data attribute
    text.dataset.original = signature; 
    copied.style.display = 'none';
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
        const b64 = textElem.textContent.replace(/\s+/g, '');
        const decoded = atob(b64);
        textElem.textContent = decoded;
    } catch (e) {
        alert("Signature is not valid base64 or cannot be decoded.");
    }
}

// Decode base64 and show as hex
function showSignatureAsHex() {
    const textElem = document.getElementById('signature-modal-text');
    try {
        const b64 = textElem.textContent.replace(/\s+/g, '');
        const binary = atob(b64);
        let hex = '';
        for (let i = 0; i < binary.length; i++) {
            hex += ('0' + binary.charCodeAt(i).toString(16)).slice(-2);
            if ((i + 1) % 32 === 0) hex += '\n';
            else if ((i + 1) % 2 === 0) hex += ' ';
        }
        textElem.textContent = hex.trim();
    } catch (e) {
        alert("Signature is not valid base64 or cannot be decoded.");
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
    navigator.clipboard.writeText(text).then(() => {
        document.getElementById('signature-modal-copied').style.display = 'inline';
        setTimeout(() => {
            document.getElementById('signature-modal-copied').style.display = 'none';
        }, 1500);
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
