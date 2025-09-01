const apiUrl = 'http://localhost:8000/'; // URL of the server providing certificate data

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
fetchCertificates();