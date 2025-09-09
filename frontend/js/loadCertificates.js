async function getServerCertificates() {

    const url = document.getElementById('server-select').value;
    let apiKey = document.getElementById('api-key-input').value;
    let certAmount = document.getElementById('certamount-input').value;

    if (!url) throw new Error("No server selected");
    if (!apiKey) throw new Error("No API key provided");

    const headers = {};
    if (apiKey) headers['apikey'] = apiKey;
    if (certAmount) headers['certamount'] = certAmount;

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) throw new Error("Network response was not ok");
        return await response.json();
    } catch (error) {
        console.error("Error fetching certificates:", error);
        throw error;
    }
}