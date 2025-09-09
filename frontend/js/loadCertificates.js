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

// currently unused, there for local debugging
function getLocalCertificates() {
    return [
        {
            "fingerprint": "02:66:fd:a7:7a:77:a9:08:f7:4a:45:c7:43:1e:7a:45:15:75:bb:2a",
            "notvalidbefore": "Thu Aug 21 13:52:45 2025",
            "notvalidafter": "Mon Nov  7 13:52:19 2033",
            "daysleft": 2992,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1+BmzI2/pzMIDbkcRF/D\nX7V0QeKLNdN7YQU42uoRrMRI87FOxGSM3mz7wXRR5rEso7aDAj4AvChybT5uzQtd\ntp9ekHgT/NmYmamPTVlErubgOL9WWBchwVNzBU1y6VV7S7JKYY+aU8NqfaIIm4n+\nzpMLwVge6ju2zvPTCAhxFyKYksoeUzzcsNzhSJroTrGvEfzH1uHs0VbY2M0wy79e\n/EdqJRsMF3dJhDjjdWvVuGu8zbEcNemhk6NDQitCfcv4QVQH9HmfhpbYpVCB73BA\nCUzuzts584kHtcvM+nS+Lmrs14h/seK4smjJKaaxMRfJXrQOmF4ClXcHdMHRv3Ag\nfwIDAQAB\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDX4GbMjb+nMwgNuRxEX8NftXRB4os103thBTja6hGsxEjzsU7EZIzebPvBdFHmsSyjtoMCPgC8KHJtPm7NC122n16QeBP82ZiZqY9NWUSu5uA4v1ZYFyHBU3MFTXLpVXtLskphj5pTw2p9ogibif7OkwvBWB7qO7bO89MICHEXIpiSyh5TPNyw3OFImuhOsa8R/MfW4ezRVtjYzTDLv178R2olGwwXd0mEOON1a9W4a7zNsRw16aGTo0NCK0J9y/hBVAf0eZ+GltilUIHvcEAJTO7O2znziQe1y8z6dL4uauzXiH+x4riyaMkpprExF8letA6YXgKVdwd0wdG/cCB/",
                "type": "RSA",
                "key_size": 2048,
                "modulus_hex": "d7e066cc8dbfa733080db91c445fc35fb57441e28b35d37b610538daea11acc448f3b14ec4648cde6cfbc17451e6b12ca3b683023e00bc28726d3e6ecd0b5db69f5e907813fcd99899a98f4d5944aee6e038bf56581721c15373054d72e9557b4bb24a618f9a53c36a7da2089b89fece930bc1581eea3bb6cef3d308087117229892ca1e533cdcb0dce1489ae84eb1af11fcc7d6e1ecd156d8d8cd30cbbf5efc476a251b0c1777498438e3756bd5b86bbccdb11c35e9a193a343422b427dcbf8415407f4799f8696d8a55081ef7040094ceecedb39f38907b5cbccfa74be2e6aecd7887fb1e2b8b268c929a6b13117c95eb40e985e0295770774c1d1bf70207f",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "intermediate",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "keyUsage": {
                    "digital_signature": false,
                    "content_commitment": false,
                    "key_encipherment": false,
                    "data_encipherment": false,
                    "key_agreement": false,
                    "key_cert_sign": true,
                    "crl_sign": true,
                    "encipher_only": null,
                    "decipher_only": null
                },
                "basicConstraints": {
                    "ca": true,
                    "path_length": null
                },
                "subjectKeyIdentifier": "b92b111ec5a6e991dfab68733be6acd564cd1768",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "intermediate"
                ]
            },
            "signature": "a4eb7ce21aa0ae5c432dc28c519f30b8bbf8f747fc74f73d4deb69ab14b82e2f9e37a920ae2d2f6b5c4405ae5749630ee388df4993096948d57a112fea9aac4f80225db56accf60ba93653e1a3e87d2c68f2d63dcea40f0f53659c0b2d202a5dbbfe4c9ef883b8dad86f9050915a158c57ede447916076a70747f3ad5b104a12a8e88982943844653bcbf31cf1a1d415b2a4ce28acc8bee4596af6eb8bc139a9c8ac09243fd215dba1cf52033ddeaad3fe187af3aa19f9c2dd52d2ce07823eedf479a380c1b07c571b932d0ee5599b3383fd8b5fc5e826e74fba164dd056735a199c59143dff5a10a776d36b9faee78b548122211c93780763379fe014750d96"
        },
        {
            "fingerprint": "02:77:04:79:88:51:09:f2:3d:93:c7:51:1f:ae:b5:07:dd:ca:50:a2",
            "notvalidbefore": "Fri Aug 22 11:51:06 2025",
            "notvalidafter": "Fri Aug 29 11:51:36 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "test",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "test"
                ]
            },
            "signature": "81c4adb61ac4ea14ef8766ffc4fcab47f632c2efc8ca7ac580c2f267f9a16796a0ddef4fe50debbedf00da25f326796a16d6b223064024556c95655c7b8c14e7e0228d4261c49fc59d5796fe2f9fa2767bc821429eca8eb62271d27c76234ad4917b6ffe5cf5be0349ae86836202e01c4d31f79e484357d74b5c1692a1019265afa2747c200ac26d5aa0c02ae6e33d7c49cb537db9337c9e78383ea015ffe7e57c37fc374e053dfe79441809e2dd057293761384dfbb91817c3d4aa44282e23810d458c780b85a3e3faa56a82e976527a8be93195e642abbe4137cec4438c9a56ed27c23196bb081d183a961104f4079b41e810f25c342169dcfc64667cd2a74"
        },
        {
            "fingerprint": "07:0f:bb:17:35:30:43:ad:61:7b:4d:5f:8e:bd:6a:20:ce:ee:67:29",
            "notvalidbefore": "Mon Aug 25 09:28:21 2025",
            "notvalidafter": "Thu Aug 28 09:28:51 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "fae",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "172b34d99908652326c8ddb77fc1aecbe51cacb4",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "fae"
                ]
            },
            "signature": "10391bd608ccc4b1e315311bc5c27658e77a75a087000cf52692e5e45604a7dd8120947ea58f243ac6190224c11147ab8d79f02c1bd7b479cc356ba07655bc3d0f68002aa8d1b33f90f96f996c1d4fd29e59a5a53fc5277b56d80cffbe681a8a5be97493e694b2e468ef882e0ab1c82545a97cb6c737970ca8edf82771496441ec926fb73aeea843b4f71fbcdb8aca582cd52b37383176e9b276faff3b4002310a237b19e87cc76047a0e1ee0907d7e5c8f14163b42547e02ad88a03166d357a657582104a45354cb646f863dc76b5e8afd30966a0353ddf0ed5bbb18c46726916f8daaa1c59b937e4f9c5b5e255ce25b4cf77d407e5471531217f470d8720af"
        },
        {
            "fingerprint": "07:52:21:d5:8a:0a:85:b6:05:19:96:ab:fa:9e:5f:32:e9:bf:8c:22",
            "notvalidbefore": "Tue Aug 26 06:02:22 2025",
            "notvalidafter": "Thu Aug 28 08:02:52 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "qfe",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "qfe"
                ],
                "cRLDistributionPoints": [
                    [
                        "https://vault.seele-00.asuka-shikinami.club/CRL"
                    ]
                ]
            },
            "signature": "703d5235a8485fcad1f990f7d15acbde2c50a476f9531cfb55f7992b82dacb3049435ab907c05ca75a762b477b416fb54354e9fb07e3b0af11b8ea1eab343b60effb3ca9cda62b7f26fe71dcf7b0ad086094c9b20362464d7156a0f9fb26ce209bd31603d82dac69ea07010fa6b84c557523ed6573c279f5847e72921e54f75cf30e5ff1a1331d71edbc7dc5c1591cdb459805a80f3c12f32752100fed91ee3db18fa6444b50f35f74644c380e4b0e39c491f57affe5f3ca85fd99b66f0eae71d1e6fb089c3a35098dd5f9295325e3aba84b5938779201865bc19b73de9cd539138089f1de56aefd118008b0cb491c64e19581b8cfd85e6cc4c0271f2ed72ef5"
        },
        {
            "fingerprint": "0b:f5:07:2e:71:dd:f0:85:8e:06:8d:2d:be:4c:5d:39:64:83:6f:99",
            "notvalidbefore": "Fri Aug 22 12:07:16 2025",
            "notvalidafter": "Fri Aug 29 12:07:46 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "test",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "test"
                ]
            },
            "signature": "6affd0362dfc4ae2ded5b654922197b01e22c8c62588caf525216dace18f6920241db5dc1646942651fc62e202a62e69469078b3af5c2dd1ae7b5c4450f851484e2fa65aa91fb3c60b7dee976d6013704511df87709075165f44f573494c97cbe7be16025af4fa971c3ee1937532dea56aff0c405f93232bb6c9d3d88c70f896a89ba69b4b7b6fe34cedebc766804edae63e787c0f11538f765ec46a5e28efeaf7c089f7b2f2ace10b0d25693c375fefc6728ecef8856c862b2aca5679ed699c03d09a19fd427a1b9210b1bb1b43e8ff2cc7ce522e98000dfdfb9273499741e550fbe2f230d567948664693d17b1d0406d1bcbf5c8144446d77976a07321398d"
        },
        {
            "fingerprint": "0c:d0:0d:66:f6:cf:2d:0b:b5:16:5a:9e:51:9f:45:32:bc:1e:26:d5",
            "notvalidbefore": "Fri Aug 22 12:02:12 2025",
            "notvalidafter": "Fri Aug 29 12:02:42 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "test",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "test"
                ]
            },
            "signature": "a8734a1ba77167cd216b4b9ecb4f5f4bd9fe3bd09cc342f303f737ab404769ecb93108fd4e4ee19a3b72278e27ab042c15aad8a8339d8a83e71a68f58cf8776423284c47b4abfd4c64b286a687231070c988e90c4376e91f825d1beb2e65bd60f5544b06d6a068e8389e0508d676b1075039dfe10367c063cd2fd8e7474bc593cbf480d5d36fdd9d8ef707445d87bdca731000ce2ad4888e3d8a144f129b9628b50505a77df2955fe7bc929bfb34897e5d7a3121e4577ba78ee8aca253a4f07f3c17a4ab5b3f68250303d4cfb47fd2fd1b45400d9e63c36d431eb329e4783ee733053518eb66c50ba341064e57517ac30f2439eee306c45aa3dab5221bfe5afe"
        },
        {
            "fingerprint": "0c:ff:47:3a:ca:4a:92:bc:cf:2d:4c:cc:b0:21:a0:b7:be:e5:6f:4a",
            "notvalidbefore": "Thu Aug 21 13:51:50 2025",
            "notvalidafter": "Mon Nov  7 13:52:19 2033",
            "daysleft": 2992,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAszgAGHLXQluMhA9ZQiJb\nW1ij0DdmP9FtUoP8uCA7016JVhUxPXg84srBEMW4moHtTxp1FB0PQqrDuf9GqIq3\nHXs3Pe6dqCAIJ7WuSzt0yK4Msqwy7jRw8X8uc8OXyqVM9soF8FOFPIzEYq0Gj9FF\nlNa9qCSBwdcool0EHzNFeWHhgSRHEtgs2n1YeKqnkqvEBlniJpU3MdAcNw8JnE+n\nKcYZt+/Yltm/VpFepDQoOdiyUcbcaEPJasnawIqhVpEaYCiM2OT8U/qGghkIs0Z4\n5syNiOLMoicU7tQWEclBWfbnCP1kbyqEJhBrfi7otbrD+8IZ7ubNpfihOVodpwzq\ngwIDAQAB\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCzOAAYctdCW4yED1lCIltbWKPQN2Y/0W1Sg/y4IDvTXolWFTE9eDziysEQxbiage1PGnUUHQ9CqsO5/0aoircdezc97p2oIAgnta5LO3TIrgyyrDLuNHDxfy5zw5fKpUz2ygXwU4U8jMRirQaP0UWU1r2oJIHB1yiiXQQfM0V5YeGBJEcS2CzafVh4qqeSq8QGWeImlTcx0Bw3DwmcT6cpxhm379iW2b9WkV6kNCg52LJRxtxoQ8lqydrAiqFWkRpgKIzY5PxT+oaCGQizRnjmzI2I4syiJxTu1BYRyUFZ9ucI/WRvKoQmEGt+Lui1usP7whnu5s2l+KE5Wh2nDOqD",
                "type": "RSA",
                "key_size": 2048,
                "modulus_hex": "b338001872d7425b8c840f5942225b5b58a3d037663fd16d5283fcb8203bd35e895615313d783ce2cac110c5b89a81ed4f1a75141d0f42aac3b9ff46a88ab71d7b373dee9da8200827b5ae4b3b74c8ae0cb2ac32ee3470f17f2e73c397caa54cf6ca05f053853c8cc462ad068fd14594d6bda82481c1d728a25d041f33457961e181244712d82cda7d5878aaa792abc40659e226953731d01c370f099c4fa729c619b7efd896d9bf56915ea4342839d8b251c6dc6843c96ac9dac08aa156911a60288cd8e4fc53fa86821908b34678e6cc8d88e2cca22714eed41611c94159f6e708fd646f2a8426106b7e2ee8b5bac3fbc219eee6cda5f8a1395a1da70cea83",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "My Dummy Root CA 1",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "keyUsage": {
                    "digital_signature": false,
                    "content_commitment": false,
                    "key_encipherment": false,
                    "data_encipherment": false,
                    "key_agreement": false,
                    "key_cert_sign": true,
                    "crl_sign": true,
                    "encipher_only": null,
                    "decipher_only": null
                },
                "basicConstraints": {
                    "ca": true,
                    "path_length": null
                },
                "subjectKeyIdentifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                }
            },
            "signature": "9633879f554dfe7f8dccdd1e26736d149321d0a2ff8ad00631a3904607dc6dd6aa6331e87c5565b3eb4360141c44af3377a6c068f27437368417949f64a8d2b36bae1fd3025226a43b48a3ef927c65a5e0cad1a274e355aedc029b2fafebc2410d93c998727fc5f80fc442b3f69d07a7a8c2c4c98f95d09b35e05e065322db2f055a3fa5a9dfc52df906640dc3254fe7aee0a0ac653569dd794e0b09b7e2b4c34e98d2372a23f51c2724f156c8dbb6b43b221ba36dff64b63350898108213145790791481b5bbfd5bd5f46655b16febaac7490672641aba3be00298c12a227a2f6a9fda3ac303f160760d96c0ba15205dd3fcab09cef3f1f95df7adeccf66d0b"
        },
        {
            "fingerprint": "0e:29:a0:5e:d1:c9:4e:b9:eb:07:5c:01:8b:35:8e:bb:37:cf:4c:6b",
            "notvalidbefore": "Tue Aug 26 06:34:46 2025",
            "notvalidafter": "Thu Aug 28 08:35:16 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "test5",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "test5"
                ],
                "cRLDistributionPoints": [
                    [
                        "https://vault.seele-00.asuka-shikinami.club/CRL"
                    ]
                ]
            },
            "signature": "4373b20401c179c4371fdea9a570cf80ba71abe88f6ed6cb2ae8afd9929522fdf922a08ef963735326e86bfbe07cf797f6869aecb54c95db6a6af294b9aaca601935e43e21b22c2e4933b95104e49796443bb6d72a33780388abf29b62adbb4bcf814da9b3229d2565b148d3d8cf5f6b01c8c4b2b6815ffe777f2869fa5b740b5d64b825131bc17784ebeea8d4a089881275ce795cd1e782eb292e76dcebe2235a83d0d12cfb2ca99334ac5c473f200df75aa7aeadbacbf5a86fa287e2bc29b3c705202037aaeefc73e2d5a2e2d294f60202485579d1f0419df33304f2c50f5b1412050b62472a25bb2c84ed8266b871d5a2e31b9c85fb495cc564aec21d4cc2"
        },
        {
            "fingerprint": "0e:4f:9e:7f:0d:ab:d8:b0:d2:09:67:51:0c:0c:90:4a:9d:fa:41:3d",
            "notvalidbefore": "Fri Aug 22 12:59:52 2025",
            "notvalidafter": "Fri Aug 29 13:00:22 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "erhher",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "erhher"
                ]
            },
            "signature": "9f5cd9e185d790af9d5bf65528e0535115dfa11117c7dfeb2a525df4e0e20f7e278a8e63926834f5cf13369adb3be2c17fce43cae983eaa25645c7db8e3d5c1f35e68239110a15f4b0543730233e476aa5347da2f5ee59567555310526b35eb5c20c12ff250e2d66f43c1af9463711c5487ff0737d22e02c3ed1aa49121a27b025c20b29852ef763acf7b8b49215af85fe98f8b8b91b8336c601a9057fcc0bcd8cff243659f5453497659b1efa44b6e2daf27fefbd6b9d83994ee31906378622dc42a36533696e032e8acbaf93673e1a174adcfe15d33ae2b30adcb2918727ca4ba94b71894269aaf44d3756c91944d929c6c232e744578171e615bb375e92af"
        },
        {
            "fingerprint": "0e:a8:01:b3:97:19:4b:78:c8:5b:bc:7f:b5:d3:fe:a8:0e:99:23:3b",
            "notvalidbefore": "Wed Aug 27 09:52:26 2025",
            "notvalidafter": "Thu Aug 27 09:52:56 2026",
            "daysleft": 363,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMCowBQYDK2VwAyEAxm5g5Xi+hQT/GgZXCVgGWIyRnH4tpxMzLaSeiM27jto=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIMZuYOV4voUE/xoGVwlYBliMkZx+LacTMy2knojNu47a",
                "type": "Ed25519",
                "raw_b64": "xm5g5Xi+hQT/GgZXCVgGWIyRnH4tpxMzLaSeiM27jto="
            },
            "issuer": "sub-intermediate",
            "subject": "qeg",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "7ffb41ed1c49a59b284e3aa3e5b34d20227706ce",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "qeg"
                ],
                "cRLDistributionPoints": [
                    [
                        "https://vault.seele-00.asuka-shikinami.club/CRL"
                    ]
                ]
            },
            "signature": "37e03b3338b825abe7df7c935dd0956662bfa2e034d62e5bdb9c2e976d5d82836190eec0e03f0df67d90755679ca2abd8031d91adfa0c1d74eeb5a0765bfa09605187d1c87ab05f2a764f037d1e3d14a13bd0717ddcb88daf9d6541dbb3a43fa7c916756a23551c98b0c6abf53bf52810c24da2a094a69bc2a2b4d622110650d4fb8f729be587c82b1bbca31d54674dacdd67fc60fee151d2087e48acc55ef768df0a84b8a0e0b407e5cc4f29d7560b11173bd56c2d9ddfbcb6d926a3af42df89545d5355153f9ba2eab7ae3b5a34dd96772c3918e2ede336783743e4b8e6e69a8581aa10ad06bdbbed242797bf45a1c25e5d0030b0dc88a201095e530ca5f3c"
        },
        {
            "fingerprint": "11:c6:7f:5d:c7:72:3d:b5:e0:c7:ae:58:94:81:c8:30:da:47:c9:5b",
            "notvalidbefore": "Tue Aug 26 04:48:46 2025",
            "notvalidafter": "Wed Aug 26 04:49:16 2026",
            "daysleft": 362,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "better",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "better"
                ]
            },
            "signature": "17250c2c63c22a793ff2d9d5566b7e2f9656f70ffaf9007494d8ddae728f43349d798d2ed3802e14db4b86a93716e6a707505c8de1dd1b4674de53a4db4b244480288a9226e4d140cbe54b3e541cad3d55216a580d0824faa675f5ec7d990eb0b241bc5142fe2e66c03a6f3fcaecefcecf27d6401dd3840b1a26b2e9698b92358e2b7f881b638aafc1b9989a3a80b5fbe22ac36fe799d3080d87a0f29007c8de27241655aa5fbd2a0ff179e90a57465f3696874a2b1912894853943085e3fdcaba8ff76b8ede30301d75691d9577bddac1b93dd351d001094fd8addd3d29d066d36e89fd1a48aa96ad5e19fe279cdaed3e8b41fcd40f6bab54fc395898a03cf6"
        },
        {
            "fingerprint": "13:8a:0f:31:31:9c:e9:24:b0:f0:44:49:25:08:cb:2f:6e:56:13:6f",
            "notvalidbefore": "Fri Aug 22 12:26:10 2025",
            "notvalidafter": "Fri Aug 29 12:26:40 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "test",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "test"
                ]
            },
            "signature": "8df3c434c07e9a129df93d9bb9071dfbeaa4f5d3c992a3557933c0b03e21742c27a719950f9c42559cdab6e68d828283027388ab08fbcc316601952eba39f8de0eb22e35a67de77d5bce81da72b0fa16b2f9f2af4b3f76b5ca2a29dc6524f38b947b950fb76a6517fb18afd67e0a7f740f9a3affff6d0eafdb0a2915826e864ccf9f32f9dfd139e558d4302588c020de6e001f81f571f1f0ec3fe777f0eeb7655427fe6eba6a144a35444ba36804d02c11f37c86721e14a8f795051133820759b40f25a7cd86b4d4d83f7e8e15b5d60aabe8ba885555c869c32246bac13f18caa4e476cca6de1578197881448d9166769161abdedb321a57015401d0f8a7f0e3"
        },
        {
            "fingerprint": "18:b3:fa:7d:fe:4d:2a:1f:a5:13:fa:8b:17:15:e6:e5:f1:a2:89:d2",
            "notvalidbefore": "Mon Aug 25 08:12:41 2025",
            "notvalidafter": "Mon Sep  1 08:13:11 2025",
            "daysleft": 3,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "net",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "net"
                ]
            },
            "signature": "4e089ea6e940584575356945e0741f65f82185a9ff2d9c0c5a126bd631524afbcdd1be441bf09d3bd879f40a169347b901eb1c486c97a5968e05c7fdeab79c4510ad59095973a829cece5bc84fbd9005b184fd324446427563d102d437c8e66894c3e79d54d00c81071ed047d5825c4dc446b2bb1d33d6bfdc1a6cba1b0fbe889f7c7c39f073df5f333a5abfb3f874d6526f92f3fc8213f0bfb6094b8b3b9652d5d8d23a2c5ed838d51411be663814600f46fb53094d6dc29fcd3fc23b4c784e6b06e3617c4e5a9a2c3426451e7424be457568af6c6847bbecb81898a16940beadbc3e928049287b19e9d91687ee3b801fdb8ac640db97c1f18028f7efcd849b"
        },
        {
            "fingerprint": "19:40:24:a5:fc:ea:5d:a8:55:5e:1f:bd:19:65:96:40:85:e6:68:2e",
            "notvalidbefore": "Fri Aug 22 12:02:02 2025",
            "notvalidafter": "Fri Aug 29 12:02:32 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "test",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "test"
                ]
            },
            "signature": "5dbd02dee3e51e17ac1fa3d0ef75ffdddcc217570bdb78c155fb28a3433f4efb1331c035ad0b0ca4535fbe0a7f79342dd7d149a6dbfdd43f76eda599118b30b1531751d9874e38213309a6439001b986c9baa91e959482e564034d9b9ebdbac9c21e6178bd5f3679e640d2649f43644044560e994ae0b975f03ec07a9218d8e401ad2fed620e54d1a5e178bd96ce7b09b6a83e31791e2bcd726a0ca0983c443bbc15eae922d527addf72323259fa89bf58188fad43354ca51c33cbff0d3fc2fc66837a58d6b19c891b8bd793400ab3838b1f6b2f725c896232e1798aa0e69ed710181a8dc0314bf8bac5d06072a27275c3a7593589ab1da19828e57cc803d126"
        },
        {
            "fingerprint": "1b:e8:d4:ff:24:af:a1:94:f5:b8:f2:6c:22:2b:db:71:42:2a:3c:8d",
            "notvalidbefore": "Mon Aug 25 08:12:23 2025",
            "notvalidafter": "Mon Sep  1 08:12:53 2025",
            "daysleft": 3,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "grw",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "grw"
                ]
            },
            "signature": "02f64875e961e14c30c51381594eec9aff23cbb1168575d48364e6e2597417a6cb56942e06ce72fb663b4a3ce1a7d5e3e3bd501633bf0a4c26f1e72912b24a583424462e4c240ecd51de43a9426e5af3ef825f481ccecd2e35e2b6a6be69f38e239253b7b2b66fce4d5e6b93900f23bcc5a9eec6280d96c5818849018ed775449b9d80c6c769d7a2f442fc1430a97604fe95d051edf3969f6b0ea602152b06f44e8e3d4e73fcea88e26ae684eb1b296da62a5ba3b432ba9f6bfdef670c8acf67a0a96fca7f130f0a79a1314126ac22bcfc42c2ebf98a23b6fe77982fc15dae5b42d74c0c4b3385e3f12148e03e728c7be6b956d7e0f9faa9ac319441e32eafbf"
        },
        {
            "fingerprint": "1e:ef:16:91:dd:c2:90:a9:2c:16:ab:92:e0:e3:1c:30:4b:5b:15:34",
            "notvalidbefore": "Tue Aug 26 04:49:43 2025",
            "notvalidafter": "Wed Aug 26 04:50:13 2026",
            "daysleft": 362,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "gooder",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "gooder"
                ]
            },
            "signature": "9378a6f71abb984237327b5a91fcee9f32dd1ea270b6818e0c7ea96dc238a47424b8016aa0d7c148b6ca67b46b3bd1f62eb6aefc3cb0f582421efc79df541e664720230dd46f685224a2f6b655d6bce3760704dca85573e191208a78776c6bcd0a97b19a6beddd678b3ebd39b310762693cd7acd7f3afd1f06f20692a35f708dc640c5d07e537be414bd6a6f552256652fbf0415b417bbd26fce9940e4dc223c337673c7f3591a7ab97d0d0c2ad6f00564d3ac51d7642755206c0c62ff654a91c8b1707ab75cf2ed28796e5fdfa0e04a2354387d23793d002d608d146e15b47a1645c5c274174c982e577ffa1fa3cf94dc6deccd443a5a95f81a294735c2b99e"
        },
        {
            "fingerprint": "20:f2:ad:eb:10:9c:df:a2:7d:b1:59:15:0e:99:d4:dd:7f:cd:f8:eb",
            "notvalidbefore": "Tue Aug 26 04:44:40 2025",
            "notvalidafter": "Wed Aug 26 04:45:10 2026",
            "daysleft": 362,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "better5",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "better5"
                ]
            },
            "signature": "643cdad55fc760a494ce0689bf80cedf6b40d4a854f725eb8ab4aeb0a3bffc107debacd03a4403f8b6aea7ddb27c7b64f74d345f4ca80769ab10432f90e75ebf313149e73cfa1314d6c312b2837ba2daf91c6026521d866ffdfbca1c9f35790021b5a55eec3f5a0c94516c64ed07133c6b2e35f7e4bbfd98103ecbe4c5ad8416da83ca8d49cd804509b224e71875776e806d22d966c9d34ea65b45cd119e27657b1052553dd44b7178eec14cb6f1744c5280a8087efadc7a54f676cbf079b256bbec7c315ca36754d34515a9163894b193fe8278acbcae592d5d3742cb5c4817ad55a42a862bd030db0e805a856d439640d7d2c202b5c26f38f8f496632adac5"
        },
        {
            "fingerprint": "21:9a:8e:73:1b:f0:2f:6c:71:33:c5:12:5d:e4:9c:2d:67:3c:dd:d0",
            "notvalidbefore": "Tue Aug 26 04:44:30 2025",
            "notvalidafter": "Wed Aug 26 04:45:00 2026",
            "daysleft": 362,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "better4",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "better4"
                ]
            },
            "signature": "14d04ff567930ba568931e940f20ca05453930d7b7486ee6b48179dd27ca4cdf692a6c0beb53db1c77c554f179af68df48dc0e85e8e7702840c312ebfae30ca430babd0170cab1e3a8d44fa5e95a47c8f754c300a5defffed0b850aff2d52e58f0804eb13254a6ba7b2a16bddd4fcbb218aae6be4c198cc534a5dc2f555f87e61cbc93804fbcd764d64d8a65300cb723519bd9c02734d58527d10f914468ad406cb30354ac0780924ce872443b5e5b42e5314025b6fb9ddaf448ebe44645ef8aba6c35b290a407492d5872b261b7c7316385e79807e95a3b8c550e69a7588cd21ba479f953a7f285f9d5562be67aaad89b5d2c12a8cb092be7df54e964763636"
        },
        {
            "fingerprint": "21:d9:9f:3d:87:ba:38:20:50:ed:35:52:81:4f:38:48:18:19:5f:2d",
            "notvalidbefore": "Mon Aug 25 09:31:31 2025",
            "notvalidafter": "Thu Aug 28 09:32:01 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "rwg",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "172b34d99908652326c8ddb77fc1aecbe51cacb4",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "rwg"
                ]
            },
            "signature": "a20fb989476ab21216cf5be5e01fe9bb608a69fb480e7243f996e6945b41da71ba5884a93b7045fb9d8098f4a37e0abdc07009f5be63de498a14983702dcda32bd32c2266336a20f81b7e5443d953db7ca4dbbf3ea426a6c7789142db28a1bb268814a3d3e70cdfe587f9a4ee5d767113b8d53506198b8a20033e028005c58131563bfff3c749b40c4c6f9e818b55353a52d3e53a310774b7ce7af3aba560573936f7609f6349033f89d29027743dddafce2cd2f40eef8c4b608a3569c9f76bd4a19c56f3e214f3ec5638415a4489fb4853cb20dce2f28f9f1bbc16a26070d6592aeac02d5d18e1a2bf14119135c34914d472b74616e37ab8c11a3a0324cc508"
        },
        {
            "fingerprint": "23:f4:04:2d:b0:bc:24:95:e4:9a:01:46:7d:ae:69:fb:33:ad:8c:4a",
            "notvalidbefore": "Fri Aug 22 11:52:00 2025",
            "notvalidafter": "Fri Aug 29 11:52:30 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "f",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "f"
                ]
            },
            "signature": "795bdf42da0229bc55f35e8fe1aef519465c00a9f95e37cb899671edebb581488d3fea41db9ef55224529613023a6c83c59ca9a31e31620be44fe9d5156fb491b8491fcc31aee91fbf2dbb91bb7f1db799e5756181d44510efd14d9dc52ea9cdc7da8ad96c7d76f657948af6e7eef442c2585b9f201b5e411c133e516e028a98c8e7a27a4c9cc06bcc3041250f86fded6f79f992a8d3dc318a89609df2d273a4f2528f81e0e4a0f96f022a029d719cdd4f54036cda0fa33bf94bfcaef75bfe74831142745bb2dfe7a852f9e54942a5a34d85f45e1fd4b9bd08d01391bd829a17b9b3c4c86b113286c1322220e7129701e3f5e67a7cc1b4590e9904db7dfca790"
        },
        {
            "fingerprint": "2c:37:55:c3:b4:87:49:ed:ee:13:f5:50:5d:ce:69:ea:47:a6:fc:c7",
            "notvalidbefore": "Mon Aug 25 11:11:57 2025",
            "notvalidafter": "Thu Aug 28 11:12:27 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "gwwrg",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "172b34d99908652326c8ddb77fc1aecbe51cacb4",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "gwwrg"
                ]
            },
            "signature": "152ac12b2fd8fdbc575bd908be324235afc3015667a2e0475dc6d64748a5fedb036e8e209274e03b387b2e1df04d254cdec182f9af01f663642ca84b72fb4440b4d9868a776d1abe4d082954e4f12608a03d3e397926dd7be777e0a2d50ace5ed9a259037d4814d05fe704e1b9e05211e85dfe93decc7b886e1e85c8596ce87eb428aac59cf6cad550034c68cc3fbe131dbb662641afef9506f06ad169d8691a3e8c942ec8e9ba67a0232e1adcbd5122d768c60d7759481f42113eadbeba49dabfb95db915a4451b24f41dae88a55fe9d0ca2b03806f82c626c8a099060e3d931c949ef22d2190fdc3f5e6670e68dc57b361852994bb85a08efc35ff338c58b7"
        },
        {
            "fingerprint": "2f:0a:2b:f7:ec:fb:89:0e:3a:fb:55:e4:e7:1a:cd:5e:52:f5:18:27",
            "notvalidbefore": "Tue Aug 26 04:42:26 2025",
            "notvalidafter": "Wed Aug 26 04:42:56 2026",
            "daysleft": 362,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "better2",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "better2"
                ]
            },
            "signature": "606d1e4d1ba75c03aadb467f99e8436909a4b0d81d0a721ff386dde216edd1d8f361a46b9c91e2fff39e89f0f0c66a2d58ffcafd7837a0b472a0226f976ece79ce1cce3f5f32f2ef6e075a4239196588b49536f556c62383c4b9bcde6ce2fb9ae8419ea12d5d2e56f0e996a20b30b74d29167f61c86c07a602fb0f78eea92f41f8c919822fdba0903616f9151ce00819425b9dae315f7a830a3594a95c7da6b561f4406f9f9374c299bea814508f9f7a1ce9312980c319306b8253cb235026e401b6ce96dc2b01dcaa22d5ceef6ec3d169826e69e3329663348712a67bde8a964b6b2f9f82adfcd7909c2f120a9b0da837e8370c99782a21e2fb04a14e360fe2"
        },
        {
            "fingerprint": "2f:1e:a3:cc:99:b2:af:a0:98:ff:5e:12:db:7b:1a:c5:80:da:da:6f",
            "notvalidbefore": "Fri Aug 22 11:52:41 2025",
            "notvalidafter": "Fri Aug 29 11:53:11 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "test",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "test"
                ]
            },
            "signature": "029dfc5c7fd507cdbe41c5ae15e4107c7226f7beb1517d9135efe6a4b2c84134be9b840755e4d84d74a2fe7cdde0de97d8da6b3b78a84feb2725e2e8386720e9270b2cbe62def20b7cb75f60b98d9289187ef4c9320bbd547c3a15ebba1c546921ee6fea48d76f3ffe30ec00c0f4d73c4a86df478b58b525ba4f342fb007198b8d8094a870b25010fea08b917ba3a5370f4601fbf2da7114f9d6a7bf947b13b7a8e1428cf7fcadc5fe89576ef2a37a85cfa4f62a6be1c4761e7c9318dda4e6b0fb2a977b2371c25bca92ac9c4372f5885095a1eec62c98a8aa289b637add4d3965957fccce0fa7b1c36951dfa43d5a71ff25bb709509396bd3c45d8d42e210d7"
        },
        {
            "fingerprint": "31:e7:89:b5:10:26:e8:93:85:00:ae:29:96:73:7c:2e:e7:02:17:a1",
            "notvalidbefore": "Tue Aug 26 04:43:05 2025",
            "notvalidafter": "Wed Aug 26 04:43:35 2026",
            "daysleft": 362,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "better3",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "better3"
                ]
            },
            "signature": "1f951285fa6533df73c08a69140d04d1c0697c873c9ca7ef1935452036ca1604bc8c6aff67cef4f2fdb9cf932fc019c9d09f8a0e63bcc988d529bff3b0d04a0237139b86bb03431ad75a6eb1f626ba11d43d4e03af34042010d03cb42f51cd3b5a7fdc6dbe52218bb935695cf42df2c01348f307ac91995cd46aafcffbcd5743a67cdf7921a6b7a3876f3f547c1330d6850d737dc3ebfafdbec8f6a65bb4201d6d2caea27908a826d8d57b3b4221b1d7d2a7e18b37ea5fb9ff547b38a048960089c20f94ba6074c250d989277f5850853bb97725ce8e7d7e6796d34cd30456740cb7f5b3d421932359d8e59419efac765a9c268bb2646ca86a4c4d3e7e527036"
        },
        {
            "fingerprint": "34:48:d9:e9:18:7c:9e:1e:19:d0:b2:4b:35:b8:ed:2b:d3:eb:5b:e6",
            "notvalidbefore": "Mon Aug 25 08:13:31 2025",
            "notvalidafter": "Mon Sep  1 08:14:01 2025",
            "daysleft": 3,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "the",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "the"
                ]
            },
            "signature": "0437f87804998aa56523b5bc2b512324aa8464e33903fe20530131e2ae3dfccc3a7156f0490a369c9d9cc70e2dc1a757f2a1d5a338b962f08962fed333d8c94052522f0ff74f9e0e9ce3e4ff907f57bbc048aa89625c2e3000a1d1b7c652cf64528e264407760bfbad0c22e0df421cad171e5f20bae14fe91385b8eebe60720c5c819522da01d3cebb06ab108fe88b9e612f38fe499c0aa8286f192548c9326d91d2003efdbd433b9a1796bc68abe33665e995ab7f3fe31ffb4ddd96f7be4c00e7c4e632ba9085c751c93444919bc76397ee2acc90b846580829d7d343a832419c3e425de03c0726b3b887e670e326fb4695a73dab652491cf9ce98561148d26"
        },
        {
            "fingerprint": "34:98:c5:80:a1:eb:48:96:69:78:1f:30:b1:9a:9a:7d:a5:13:e0:53",
            "notvalidbefore": "Fri Aug 22 12:59:31 2025",
            "notvalidafter": "Fri Aug 29 13:00:01 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "hte",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "hte"
                ]
            },
            "signature": "6c136afe86cb9ec43894dea27121c097751c603e38921a200fe7121514788ea5bb34fc073f5fb4639db9fdcb1dc1c611e6b68d4312bec2818538b4476289dc2323a20386c2a856a3d4e3618ba61f86c7f0ffac2e0f8e04ff8c53507f805cbe9e911b62dce92c47dedbfeff538775bef765df51a0587ee989168e79b8b285ed40ab4cc34e7226d233873d478b1aa6ab4d61295f0a5dd988eb50474de2b63f640e531fb23db1ea9ce5e32fde3273da409fcb90800bad020831b202b744466ec8c314ef04650c6126d780ca9f0d3bab060d871ff0e81f5694c5032c88c9711ec01ea534c169cd165c46aed5525243ebba6e489d99b16a6d44638d97d44752cf7cc2"
        },
        {
            "fingerprint": "35:48:1d:c9:fb:f3:69:a4:b3:38:ec:8d:d0:38:7f:dc:63:53:0e:56",
            "notvalidbefore": "Tue Aug 26 07:27:59 2025",
            "notvalidafter": "Thu Aug 28 09:28:29 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "newer2",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "newer2"
                ],
                "cRLDistributionPoints": [
                    [
                        "https://vault.seele-00.asuka-shikinami.club/CRL"
                    ]
                ]
            },
            "signature": "114f224b4a651cd5362179111a876ff49ea7be9e4662114c614301adf9516d4ffd0b55d4abd94c3edb4d6e73fe961c9893a5af8b5fefdd90865057c38d2dfa46188d710296b7a9ac6cd42b111b115c224cbacf72ce29c14f74ecffe0bf6e42c7dc4a8676ab8aa32b6a5e928bcd96f19ce2b1f07b97ade5b1e4c5f93c7cd0c3b48f83180dc490b5944012f71ac6085f11594c1ecbef5358df34bc9bb4d2d4a4b473128e8d714a70160786b65b769497b19c79b9d13af22009943a2a4fd5fa42d4c53198c62847cdfa500b0976e734382b02c1c7e12ee2df2d1af312d8cab18c3b7634edc8537c0dd0ed8d4858773bafa23d2c9c382563586d2976c2513ecffac7"
        },
        {
            "fingerprint": "3b:81:bb:db:e1:c2:0d:7d:c7:67:6d:b4:88:88:e0:11:84:f3:de:da",
            "notvalidbefore": "Fri Aug 22 12:44:27 2025",
            "notvalidafter": "Fri Aug 29 12:44:57 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzFi7+Hph66ASxxwPxw53\nfAJPav8l1jN/0BLT9ps+wRAFAMN74W7BAgnbndzaOOIEZ668Bjtzn3ZkwLy0oA1l\n5QVno1oDCkekWRvWlPqiB7Nrcjv8fSm+2W8J3u/syidZKeIjuX6FpcBTLaKMgyM9\nIHSHw+XeDToaKqOvn/LKoK9wHknfPUA7DaboOeLEPaeqb3SkIOurGKgg4VE+VznG\nA1cPuu7y2alkVL9jz1S3gH1EtdZ4UBOaro+Lwf9Y7BJcfuqfA2fvlD3Ln9UsYLFx\nOdsSrWOysaPYXVmU3j+c8vmNb8rRQeyAFn4D7NGog0hsM34ipDx7W63+702iCsBF\n2wIDAQAB\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDMWLv4emHroBLHHA/HDnd8Ak9q/yXWM3/QEtP2mz7BEAUAw3vhbsECCdud3No44gRnrrwGO3OfdmTAvLSgDWXlBWejWgMKR6RZG9aU+qIHs2tyO/x9Kb7Zbwne7+zKJ1kp4iO5foWlwFMtooyDIz0gdIfD5d4NOhoqo6+f8sqgr3AeSd89QDsNpug54sQ9p6pvdKQg66sYqCDhUT5XOcYDVw+67vLZqWRUv2PPVLeAfUS11nhQE5quj4vB/1jsElx+6p8DZ++UPcuf1SxgsXE52xKtY7Kxo9hdWZTeP5zy+Y1vytFB7IAWfgPs0aiDSGwzfiKkPHtbrf7vTaIKwEXb",
                "type": "RSA",
                "key_size": 2048,
                "modulus_hex": "cc58bbf87a61eba012c71c0fc70e777c024f6aff25d6337fd012d3f69b3ec1100500c37be16ec10209db9ddcda38e20467aebc063b739f7664c0bcb4a00d65e50567a35a030a47a4591bd694faa207b36b723bfc7d29bed96f09deefecca275929e223b97e85a5c0532da28c83233d207487c3e5de0d3a1a2aa3af9ff2caa0af701e49df3d403b0da6e839e2c43da7aa6f74a420ebab18a820e1513e5739c603570fbaeef2d9a96454bf63cf54b7807d44b5d67850139aae8f8bc1ff58ec125c7eea9f0367ef943dcb9fd52c60b17139db12ad63b2b1a3d85d5994de3f9cf2f98d6fcad141ec80167e03ecd1a883486c337e22a43c7b5badfeef4da20ac045db",
                "exponent": 65537
            },
            "issuer": "intermediate",
            "subject": "sub-intermediate",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "keyUsage": {
                    "digital_signature": false,
                    "content_commitment": false,
                    "key_encipherment": false,
                    "data_encipherment": false,
                    "key_agreement": false,
                    "key_cert_sign": true,
                    "crl_sign": true,
                    "encipher_only": null,
                    "decipher_only": null
                },
                "basicConstraints": {
                    "ca": true,
                    "path_length": null
                },
                "subjectKeyIdentifier": "172b34d99908652326c8ddb77fc1aecbe51cacb4",
                "authorityKeyIdentifier": {
                    "key_identifier": "b92b111ec5a6e991dfab68733be6acd564cd1768",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "sub-intermediate"
                ]
            },
            "signature": "11ae4ca78865b98c6c055d516a37a1fa188d6083b99ee5da59f57eaa1c28573774ba18f0423bfdaf0ce05c5538649f1f4c4b8100b8a3938b0022d8ea83178efa79f836b9a4682ebe625e42d24fea222723155818dd3e51c46085be4006f99566a975b455f5bbd21f14b2630a372bb12d3face44cc78d24ae05ad4e79bf45537026e11df5311945c95417ed41b2c3256451aed081eca1a6171d7c6667f59bccc790c3fba4795e47fbfbb39183b80192e85f3a9fce79fb8463f6e49fdb8001c288fbd123f2e88062e11173cb9f19d21b40a30bb975acbffad55d9c77290717fdeb41c1034e66b32e4e9bcd1f3dc187a6f43a63220bac882143f345c38827623c38"
        },
        {
            "fingerprint": "3c:6b:53:a1:94:bf:50:5b:69:c9:32:45:86:0e:7d:1b:9f:e8:a0:63",
            "notvalidbefore": "Tue Aug 26 05:00:59 2025",
            "notvalidafter": "Wed Aug 27 05:01:29 2025",
            "daysleft": 1,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "24h",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "24h"
                ]
            },
            "signature": "80a01c76cbb148b24dc662a65626f3132f30f8c49b28302126e5a0b0e6dfadedd74a47b92b5904de151a4eed69d5210ce3d32ff4b604fc542b5ea14ba517125db62f29062c3c76bb99cc9e1ef37047fc3997dda66d5ac508edcc4a95240a6e7488c8698f75d2bb78ee0163d9fc9512d4caf563140a514e03b6c71534d917d7b2d07bcbbeae3f7b5fd52f04a72ca5df55de20c21d9f3fbe92e8a64c3386ea8ca3b9ea52aaf1545f1be571e4bb52bd45e0c79d5d2caff2ccec9d01ca57037783f33497a6304bf1ef942ce6f6d8a3cf56f27e85f4aef1723d9b73814b2d4f22d6bb33a6a94497ffdb4f8d01704aaba5d9ad1f9bdbd286f3161fa02089586afcd89a"
        },
        {
            "fingerprint": "40:3f:8e:47:52:b2:7d:bc:52:ed:c6:4f:ac:c1:2c:67:a7:8d:ba:fc",
            "notvalidbefore": "Tue Aug 26 04:42:00 2025",
            "notvalidafter": "Wed Aug 26 04:42:30 2026",
            "daysleft": 362,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "better",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "better"
                ]
            },
            "signature": "228bd9683a3a3c82971e36652994e551c79e18c797adf06c4aa00240b35fe8cb971b0054aa484fe380e41f7077f8695da24f741090a139d88384e00b8c3e85dc252368d9df58ac6699b1e7fde8fe062bdfe849701c6a8c24fa26ce569f60febeba5306396b3c13527440230aae8593379c3cb606691b6dc9fe44cfa382b7d1c565121d74db0fedeac94f79fe7a10d80900b13c31a3582de1a0a15d5776da3f7fb3f72b5d5e16b3bd4aed664da18d2a010433ead6e1831bbd9069a57ad8583cdef78d325b8c837cd4a83cac7846856b80337478e485896b5c608b5a8c91147bc7f30aa9b821ea59a56065a566fd495b5a26e1a3553468efb7fb8ea19c7fdafcb2"
        },
        {
            "fingerprint": "41:64:fa:da:67:79:34:0a:6e:38:df:98:67:fb:db:85:13:9d:ba:af",
            "notvalidbefore": "Tue Aug 26 05:04:58 2025",
            "notvalidafter": "Sun Feb 22 06:05:28 2026",
            "daysleft": 177,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "fqe",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "fqe"
                ]
            },
            "signature": "2767a34d2af3ea58ecb4e8a6244d348569b68cee4302709260f91d6fe18e85683b088b38277a6febf296d29880e9c41d85a52b64ce7cb5b64fb5638492903f66b12db15a504b27f6bd027a01fbf3201b7ca25ca7324400cf4c93503627c73879585a92d07497dd403d0ca13bb9c460f2d56cdaa1688e6aa058ebc5f4623fd2b7c065cdabc6a0f14189263d7762c505181e838df2141e1b5cd404127d5a3995d8f51c58628e49a7736d609f06c436daa89afe97f4cd80aa764577f6e13af416c9b05302f0f1cc6db7f3f45a0f1e2dd236392c76fde464e58a59918c0b8b68b3be86530657d4ac2d0e27c0011ec33ae8846ae71e513b2e3168d1ba17eb52723eed"
        },
        {
            "fingerprint": "43:6b:57:28:0f:74:61:0a:84:c6:86:68:47:8b:10:c7:95:c4:de:4b",
            "notvalidbefore": "Mon Aug 25 11:03:04 2025",
            "notvalidafter": "Thu Aug 28 11:03:34 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "qfeqfe",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "172b34d99908652326c8ddb77fc1aecbe51cacb4",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "qfeqfe"
                ]
            },
            "signature": "70b36050064bed77b946f0dfd54916417b31fe6aa6766e273543d14afcdddacd48293453cd262314a7202116d4ad1464a3d3ec71f55415a8bc4ecb0e081e75188382b360ce9c9998387a24d39c2c4b5179fa0dce067694ca7681af26f8cf2c050fefbfd10c9379022a36762dec0c544f98652660dcdf2ece96043b9c99343341e3f160875ca1fc5f92ff7b48d4847b22a388a2317e516cf0009d5f96774e524738f5532eef078062ca0c6302a165af107e6c7d8cd8d1146da23468141542365df2c88448a260b742a332cc7a885fa4f31036b19f52dcbb729a9b5422108295cc7d1cad14c5680937d3c35908c55d836255626f5f0e6274c8e48464812c3a7b8c"
        },
        {
            "fingerprint": "43:81:58:15:69:29:e3:e3:37:4c:a2:43:c0:92:75:7f:7e:23:16:fc",
            "notvalidbefore": "Tue Aug 26 05:09:37 2025",
            "notvalidafter": "Thu Aug 28 07:10:07 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "k",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "k"
                ]
            },
            "signature": "4440e2a0603565900c7431df5a748730b8ff40f65207d892bc2ff34c210bead95741ffabf2a2c4d207201356f5c606bb3d885dca4e1fe5e538eb53894aa97b76a1ffb47b4f34ec0519a20411b82b3a52edc99f5db98a6c9bc0d60b6aa21278507bf6afdc042b287cbe479142150f77aee4ed3ab28d89fe3d17fd045a2a93b2d39447fab787aac8ca92f094b8e98a7f390848748ea803f63a2a5fe16e7cb041b30df8b4b937327ea873bcab6ed64e86e41f54dd89dafede9177c2aca9b9705b315223475787566ebce92bad5043bb3bba35a0a9a7185f602ae4b6951112cb3519de8b9044d6218c484a17a8dbc482f512d361ddcbc3cd121a32bdc28cb62d0dab"
        },
        {
            "fingerprint": "49:74:34:9b:b0:1d:24:56:15:73:43:95:6d:03:20:23:fa:ff:f9:87",
            "notvalidbefore": "Mon Aug 25 11:05:48 2025",
            "notvalidafter": "Thu Aug 28 11:06:18 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "qeffqe",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "172b34d99908652326c8ddb77fc1aecbe51cacb4",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "qeffqe"
                ]
            },
            "signature": "65260de2b26971f27825dc8ce77db7355d91879e0679769f64a11fbec599f053c22f70b2d7b1cf97fe67720d0db5774ee5aebc7d8c8023bbd0a1626a58a810b26c2f09ff26dba410f306fec4fd85efb6c4949aa03835187bc69a1481c92e375eea8666edbc2dddc568d6f2dabdc6837a8075ced3b0679804b82ffbf2d3eef1ed0bb1addd45752705a6253595388589707525e0a291667a85652e32c4e20f1d80768054bce675d6533d522fbd09f50bf0957c7fe332fea26cae61cfcea6bb6c5ee0d9abffce9f3736b84b85d6419d39672df758b013312bdf091be9db142b9ac48c651ad4aea52986aa375983bba4995c43e4dbea1ba95c4df413aff785647f24"
        },
        {
            "fingerprint": "4b:a0:32:1a:aa:b8:46:c7:63:9f:07:4c:04:66:16:96:01:73:66:5f",
            "notvalidbefore": "Mon Aug 25 09:30:44 2025",
            "notvalidafter": "Thu Aug 28 09:31:14 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "afe",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "172b34d99908652326c8ddb77fc1aecbe51cacb4",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "afe"
                ]
            },
            "signature": "aa1c104e42f0328302f34da3b7c22a146813983ee1009694f3191109ae5dc316d9bcc79fc8353c3d122f8029e569fc2935a211c8b5de4fef16efe2fb06e360917850b2c453f89c2cbba584f1e1e3aaa958f674f93bc185b48b75a140cd0428be1d90a9c37bcf5e0be49b1a2971daa5e1040eaee6650606daede2d9cb9d49580ba84cc6728b92f80423f1626fdc02dd25e59fc070557c6fa8d56ea40dd81fa2a18ded05bce5b173c3c5879af916a8611a3165d3bf4f541d98d1d60e0ed6d8b0e315b9dd5d5ef8ac5269fcc782b352eb41870f3152aa8e2adb1e19db63ec667847e2d7919b326e090e4d0f99156c450fafa5b6f0842ec25bd283a2a12f44cad6e2"
        },
        {
            "fingerprint": "4e:bb:37:a2:d9:0a:68:9e:90:e4:4f:c8:98:ec:a2:6b:11:27:4e:6d",
            "notvalidbefore": "Tue Aug 26 07:51:54 2025",
            "notvalidafter": "Wed Aug 26 07:52:24 2026",
            "daysleft": 362,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "teste",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "teste"
                ],
                "cRLDistributionPoints": [
                    [
                        "https://vault.seele-00.asuka-shikinami.club/CRL"
                    ]
                ]
            },
            "signature": "9b7f2d223d7b3695dab9a28736f4f0ed8aa7a9f9d42d292ef735ab331eef70ac09fe351c145e6284af91f94bc23862b2bc6d67223d1de471b126f8cdeb23e2e8b02717bbd8dcefbe6d2ae69703c4f798bf15a60e5d5e051b1def7fd81ccffd7524d47f3a80356ece75a5e5d7a54dd03c7a1a1867388b5022c202fb8cb9d7d0d91dcb9fce2d32ea18ae2bdb28676b4789278496b3e46136081d71db1d63e3714aa262eb7af8fcacffb6969ca071f405483936b04ed75f62e145996eafe4adca2575516647d3e36925258d2d0608bbdc4725953252a2e3c6749670d05cc5bbecacdfb54cf3c408ab6578eb275618c75a716547b61cf6ae80b2f82f45198e9936ee"
        },
        {
            "fingerprint": "4f:f9:95:f6:71:1e:44:fc:49:da:a0:24:01:1f:64:ca:b6:26:2e:86",
            "notvalidbefore": "Fri Aug 22 12:58:12 2025",
            "notvalidafter": "Fri Aug 29 12:58:42 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "etsste4",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "etsste4"
                ]
            },
            "signature": "3dd88c46e4cc0fae7ff3c0aa27f82d8cfdcfde095e0e597ddd0c7a0e12a24310aa35e4e7c8d578d2999819987474ef29bc762dcfac9128d9226bc7b7af71245c54b7da28cdb11e2c67109f9a19c306e7ab2ab338fdef212a3a36e788d6aae9764e2dd359b37693a8a64a02c5f12cea5677cbd0ae8ea8ff304171d046106f4285b942f27cb427694467530ae1aea2c033432fd143afb07f0776efde3ca481634ec6281ee64dd60977b81c19917635055eef6cc604b51ec196b78a116e4bf3300d893148b89d8f2f177fda4a9b030000575ee401aab68e46e9415bd0676f1c778f113ca7bfdbef825d3817ad8841ae85293cf7e98236c0b54d52144179b7aaa890"
        },
        {
            "fingerprint": "53:1b:c2:b2:06:ac:0b:a2:be:d9:90:e3:26:e3:01:c8:05:98:a6:dc",
            "notvalidbefore": "Fri Aug 22 13:03:45 2025",
            "notvalidafter": "Fri Aug 29 13:04:15 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "fqe",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "fqe"
                ]
            },
            "signature": "6a6d05ed495d14c8d25a8948db3bd3f477be9c543117e701efd4190702eab12cdff1b07edce9abb251bf2d6a4306ae1be5a5fb9e7da1ad3dd5552a25a39fbbbc83cec45d4d1cc72c77ba4a6d5ea0977e09f5416debfb6b701ab4d55d11ca2cd4d88c5f3bb0f9bfd5bbc9c9f2ebe5d577942cc07724797ac8530b9977780e0b2e7ddc07d9e7daa680cdfd965bb67d3b30e921349700861f14b265abafba4e3928423c52e3652b5be8bd9d57c70dc803873198fececfc041aea979f9b249fa07f252419b6bbdbaaf3c1a1ea84d1cf62cfe91c70a3e3d76f533f8ad3713e4944396ebceadd1440293fd7bbf2966f27094df316ff64732dc969927152087d8c04076"
        },
        {
            "fingerprint": "56:7e:5e:49:94:b3:4d:48:ee:15:88:93:a9:db:a4:9e:95:5b:77:7a",
            "notvalidbefore": "Fri Aug 22 12:04:32 2025",
            "notvalidafter": "Fri Aug 29 12:05:02 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "test",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "test"
                ]
            },
            "signature": "34cf075cb22a573386e739f93ddc3711c38023c56de82ff30e87bb2612cab99d702bf623e585e50c0a8ddb942b404a8975921be247cf478a508e16fbf2cf913f79fddeabf8db01f9cb7b0af75a0b5773f4ac4a0a3f03b5c9ee1c3902c2ce74785ef1cef49fb4416c7b7bf7087152655dccd1e05dcd67ba5e326d625cd8e6450eb7805c06a42f1daf4d033de37d542fd47f800fd6be810283e1ce7759059cbc6870ab3870828e06144ca7d8e88736c8802b8ac0e29eff9c605d89fbf6891b8379651ba55d64f7625414284b7d7e099765f43fbab63d85ff548431fee3187fb62fcabf5fb6919d061e1af3865e90499f7cef5b2bc17a15f2db3f22f4e731cbd3db"
        },
        {
            "fingerprint": "57:62:fb:36:92:46:e4:d4:6a:e9:10:5f:f2:06:de:a8:89:bc:15:d0",
            "notvalidbefore": "Mon Aug 25 08:09:42 2025",
            "notvalidafter": "Mon Sep  1 08:10:12 2025",
            "daysleft": 3,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "gd",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "gd"
                ]
            },
            "signature": "677282b50cfe895e88f4944ee51196b5def69fe904954aa01914059ec3b3d4430d5abe1b8d1804a20293c59c7b440f5a9494bb58300bc3ef5a919903a557845abd87d17caeb4ad1fd8fabe48a0d9e3bfae45c3e3f68c3aa73ace07957bcdcd794de8d7f6ce611b153f227f167acd67cd121e37003d3de6a412e49d2039fa3962c22e321f3f27468123bd1b089013decc91b68cb19ee4d42de15b95343c390e885d02116337f14274dc673384e531e6cf950d538430062d16b4752ea2f531aa4500d861856ae6bb46aaca4f87f4e1fcadb7a4012100c84e5e92cf387470a64b9d0bac01285127fb5a9e79e07c2fd744c9f96ad3a0b45ee9f5414c57c718739ebf"
        },
        {
            "fingerprint": "59:09:b4:82:83:7d:dc:80:2a:4a:07:a0:7e:69:39:6d:89:e2:8f:22",
            "notvalidbefore": "Fri Aug 22 13:07:01 2025",
            "notvalidafter": "Fri Aug 29 13:07:31 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "teste",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "teste"
                ]
            },
            "signature": "7ed046d82bcb637a08aee7834ee5ce8a651daca0f7a05a40552148d43d5ae3721394ab166689169ba792adecdf8d89b22be522031829db265ec83ebfb4b80417d9c273f6e4a4117f72005936fd06d048bf8ba05e0f3989481eca4c424bda52b99a75d2016d22930eff3ba0ea758c2627c3c7f4ffe2d81575076cc64cdf8033fba531191a7a0533a6d4993603a9efabbe8624350214045bcb11e7299a8af763b5c96e6d7068b711977bf1057b09ced5ff4ee78b7ecf46442b820917316ccb9e4f83f9366b17313c552db28c3c53a235870412959d78b3fa6c3c46fc8636276dc2be74e89765b54c7bc920e967bdd7b99d808a434f6abde8d8cd531e9067692784"
        },
        {
            "fingerprint": "5b:30:83:5d:8b:bc:07:06:18:fd:32:0a:13:3b:86:de:7c:ca:25:9f",
            "notvalidbefore": "Fri Aug 22 12:46:43 2025",
            "notvalidafter": "Fri Aug 29 12:47:13 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "test",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "test"
                ]
            },
            "signature": "9658d02f8f531246fd0125821342847989f95a22cddcf0cbbfeb89d7d3850fedad86c8b832213033034db34f53eba7c3e66cce52aa72a9b61437e970db99e2a24f9a0d19514bb1ac8a167f80a81276e16b8f790370a9fa34c4d7c193075788d4d164a19ce0707ac512ef1b863548c2be7b4b4b72039b17bb04acb318557309817e4b90a347e77e9e9e540e49daf6e1abf1c15f0a16b978d1b45595346e08d34476246d874f54971cce2044df9a0d78f52158b68d4f808d5a9e3daf97a3d708b5a28572c50a3f48de706cc827cd125ff8abba722c8c0d6af24a8859afe40410507cb5b15650c92cc06306fe64f0ed05a93713e0304ff8e7d2c2eade3eaffe120c"
        },
        {
            "fingerprint": "5b:a8:5c:2b:7b:bb:d9:8e:11:38:b3:3a:9f:5c:09:8b:d2:87:bf:26",
            "notvalidbefore": "Tue Aug 26 05:27:57 2025",
            "notvalidafter": "Thu Aug 28 07:28:27 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "\u001b[A",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                }
            },
            "signature": "838be878c420979f979273ce6452bafcc01d7b5aef134f56094261e4a68bdc33f88cb15d569f9d0c6a4d8e18b7dc81ca17581d38f8064c23db2bf8f7a9bad7f444f3531e7589ddbd0c50e36527cbc3a64abd739cda168d0664279af6747f6576ce1d8bb1e0ff111561e0310c12e648cbfda3d98e44d5409723f5c312e387a80594f1c8b1facb9f8981a953892c7dd57d9eae9ed45ed294a5ac1e67947044eae9f99f23dcb208ded0d88fc449e845014fc50e09811f47f551c2ce38fec247b23526bf8837fc775de67eeb2549ccba21ecf0968b280e08ac0d185753e0033dd552ce9b1a1d544036f7e35919190d6b9baee341bd222525790cbde38250dc4ecac1"
        },
        {
            "fingerprint": "5d:18:b5:ec:6f:0b:03:61:1c:8e:a6:c5:66:12:9e:c6:21:f5:ee:51",
            "notvalidbefore": "Tue Aug 26 04:47:34 2025",
            "notvalidafter": "Wed Aug 26 04:48:04 2026",
            "daysleft": 362,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "better",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "better"
                ]
            },
            "signature": "80b8eaef6f486b75b2f0125002aefc088c3965f6aed4dba02e0e687ed6b6b873b3a9b40d4ab748abf5a1761c97d68ad9b1383402f61440572cb7370f9254a89237bafc83355b8922e375961608b35625bdc865991d167b4c3d66b2915b10a4f0d7f1da6af9746451b8bc22dc7b83436a6301c13fc473b9d1b2e95a863af483f942e44705d219f9383c2ba706f8e5c23dd3d971a7baca994494ea8b6411b3c08e5516af2f251c5e689d17b3aa327008e1c89d2ce7a8c103df884589d5e726fbca4847117a5fe8e60ca24de67698939d243f039167af174c1cfa0f82492a34ccc1d2d96855b1d88147edbdf3601c7b4846d43b2eb79cf3682e7890faaee71b0cee"
        },
        {
            "fingerprint": "5f:ab:95:3e:9a:a5:b8:45:0e:77:21:d3:5d:1b:3d:bd:a6:2c:25:4e",
            "notvalidbefore": "Tue Aug 26 04:39:23 2025",
            "notvalidafter": "Sun Aug 25 04:39:53 2030",
            "daysleft": 1822,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv36eOvFjT0balvTzlPYA\nMgWjrLZl7lKrd6QJos/uWYGJVifpyl5m69uViGTrDt+pYNEAWdiwIMZ+bmQCDOmL\nIiSBsGE3CswM8GBaEoaIh5z2UYmHXmlnWw5sG0tGaeE1wt5mofPU5Gf1Qqtn7Oc5\n6FPMQoYmEti6mlhRkvvHoh/xMnGqd1CkxeuObQi5S1lOX6SO4fsRx34hoemboY5Q\nEUVvmqHbFstvPFnSmDz4fzj26XPLk0QDe75C5JFBWCXZ6LdZHgN/al7WKn7C8LjN\nKnIz4QO6z7cp+RIEaEO5658MxNTN7HmxcodZPypvziTQsX5OP3FKz7itSM1BQW6/\nTwIDAQAB\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC/fp468WNPRtqW9POU9gAyBaOstmXuUqt3pAmiz+5ZgYlWJ+nKXmbr25WIZOsO36lg0QBZ2LAgxn5uZAIM6YsiJIGwYTcKzAzwYFoShoiHnPZRiYdeaWdbDmwbS0Zp4TXC3mah89TkZ/VCq2fs5znoU8xChiYS2LqaWFGS+8eiH/Eycap3UKTF645tCLlLWU5fpI7h+xHHfiGh6ZuhjlARRW+aodsWy288WdKYPPh/OPbpc8uTRAN7vkLkkUFYJdnot1keA39qXtYqfsLwuM0qcjPhA7rPtyn5EgRoQ7nrnwzE1M3sebFyh1k/Km/OJNCxfk4/cUrPuK1IzUFBbr9P",
                "type": "RSA",
                "key_size": 2048,
                "modulus_hex": "bf7e9e3af1634f46da96f4f394f6003205a3acb665ee52ab77a409a2cfee5981895627e9ca5e66ebdb958864eb0edfa960d10059d8b020c67e6e64020ce98b222481b061370acc0cf0605a128688879cf65189875e69675b0e6c1b4b4669e135c2de66a1f3d4e467f542ab67ece739e853cc42862612d8ba9a585192fbc7a21ff13271aa7750a4c5eb8e6d08b94b594e5fa48ee1fb11c77e21a1e99ba18e5011456f9aa1db16cb6f3c59d2983cf87f38f6e973cb9344037bbe42e491415825d9e8b7591e037f6a5ed62a7ec2f0b8cd2a7233e103bacfb729f912046843b9eb9f0cc4d4cdec79b17287593f2a6fce24d0b17e4e3f714acfb8ad48cd41416ebf4f",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "intermediate",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "keyUsage": {
                    "digital_signature": false,
                    "content_commitment": false,
                    "key_encipherment": false,
                    "data_encipherment": false,
                    "key_agreement": false,
                    "key_cert_sign": true,
                    "crl_sign": true,
                    "encipher_only": null,
                    "decipher_only": null
                },
                "basicConstraints": {
                    "ca": true,
                    "path_length": null
                },
                "subjectKeyIdentifier": "c39badad403daf7e44fedd12f13a6dfeced9a772",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "intermediate"
                ]
            },
            "signature": "196fd56933ced35ff176042023dea6905c5216442cfaf7c32fb29e6e10fc999202a4101da2bb825fd749b56570efd24edec87119e15696d87708758d30e475ccf02436a52fd1e2a80f924bf880faac21dab620df71be3f8cb27ea3fbb8d51c981a7f3e27f6adb93f74561b66de422d402558b9be2df155c391e4ce37a1a052e5fdecae8b5069c17a4ca7b38dd0c50feaefff39c0bb912df443d496d0456a9fae166f90b7a6227e7f34b7043bb48f50b45413d3009a7f30948bb6253092676865543bd856eb7c161c240a18cca5b3536ea9b7f8bec3c584003c2760f886e749d6a4145d7d056d796096de2d6672e93323b82f26c693a72834814c6e4cd48f795a"
        },
        {
            "fingerprint": "64:ea:7e:88:b2:c0:4a:8a:b2:4b:e4:d1:b5:ee:b2:fc:64:9c:a7:7b",
            "notvalidbefore": "Mon Aug 25 11:04:49 2025",
            "notvalidafter": "Thu Aug 28 11:05:19 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "htehte",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "172b34d99908652326c8ddb77fc1aecbe51cacb4",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "htehte"
                ]
            },
            "signature": "b31785796372eb92a89ce735821100fe6ced478ee1d6b24a59924218a65b70f4712382e12082255aca3ff8e68f88d7ae4844657dc99c1a5ad7c680e854ea7b8ea39aac1b7641ca6d7cc17557c8a1b1c10f957900ff151b9f8163a81c663bcce54c271554d4695f5d1d68d5345c9eba44fb3ffe72178161ff580320243a517eeab826ab772273700e1f032d80611c8a02444f0f0239bf84bd5e728c108a16e078894c10b27582915f7346fb1d4d4b6d34a2839a77ee5f9a696241bd23874133a43843267a4f46af2065770699ce3de446b08724c514ab2f18ed5d9968b8ecb174f27461d65f80908a4415325dbd0d692e73865358dfd364f828b090d6360e6267"
        },
        {
            "fingerprint": "65:ab:cd:04:e9:73:5b:2d:f6:cd:41:68:31:4a:61:c1:f1:e6:70:ba",
            "notvalidbefore": "Mon Aug 25 08:12:53 2025",
            "notvalidafter": "Mon Sep  1 08:13:23 2025",
            "daysleft": 3,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "eth",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "eth"
                ]
            },
            "signature": "24f2c3982978d4e04fef0324a6f6671e8ff677af4c8271afce3c9ad2d880d7d27ccc294a01d86b8b140519a5afb6bf596f5252ef2426add64d5601d98bb1aa6a102ed4326acae6af8a1a09409316cee80ec3a462a68f72728853a10ebb434d81b249e95b11d0c1ddd38002fd3b77919ccecb800d82118903b35c5fce1305dff9125412f18696f4cb36aaf4e2ced56cc58fd0544b43ac54c2f41ef4de717dab0ea6c7e99f443dbed33bae6378e4f57ac153eb5cdd50f9125166a22f308cb38e13148186bebfb1e1016d358d4a0917a3439cd65db32d10699e7e17d59451010e4e4121ef7141d281405b5a8cab8644e4ed05ff014aad17ccf2aeed1495a77da278"
        },
        {
            "fingerprint": "66:e3:8b:a5:47:03:73:ff:fd:ab:a5:3c:70:e5:58:55:8a:e6:57:da",
            "notvalidbefore": "Fri Aug 22 13:03:04 2025",
            "notvalidafter": "Fri Aug 29 13:03:34 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "settse",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "settse"
                ]
            },
            "signature": "84665a83daa543f105e5e80ad1eed66fa4f079a1142d57c877fddee09600c92bdad0e1817f684223d791d7970396c46d2ee7f19b914b4a81a12607386afaf8f602ce8419df34034bf548c423d6a2582ece12ac4b5fa72a12b38b5201b1deaa5622f659574ce986a64fc940e8bfbae848db3c2c15e14abf98feacf00e482e0aaa8e097473daa2fbaee703220386e4e3da44d47d3dd75b509bfe35a1b315c7ede668df06853bafe59adbffb2a868444f610d77955239fbd50ef1e4b8b2ebde170d4afb4867e3a4e81c080d9b4ed2daf1d6285899876a66865123da7b5cd972cc81f9d04b7943a45d330c56b3774493990ab586e2b5d0d3980b46c00be81fbaf97e"
        },
        {
            "fingerprint": "68:1e:b2:fe:39:b8:17:15:ad:6d:7c:3a:21:ae:ae:ce:b5:78:7f:96",
            "notvalidbefore": "Tue Aug 26 04:40:57 2025",
            "notvalidafter": "Thu Aug 26 04:41:27 2027",
            "daysleft": 727,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu7eE3Kt3HOmPWIb9FhcE\nlTqPLzqllDaE0LlorPMnFSl1pCnFbGh4vlcINDAzXRszkVGdPZj0wWsP/yDh+iEI\nPC/L6DczEyzEzfZuRFovvrtm2Ea/AkXLJ6QrQ89RUtfN1OJAcfEvg1Q/oKHmszeN\nMzEKGX/4hfbY0xJSnpFqdhhWQ2wlMMrDGSDrehX4JoQ4cFMmMo3O091swItZenjX\n0W5O8FK9iaN+c3henuIsLLpGid3UoakoZGBE2jKQ2I9y7a/RSjoijlljZnx3+n9V\nfhGJJN0tU9N8bbC+oLUUQ5yyAF0M5oxgtZxlMOn7Vn64PtXFkjHqdN30LoIrXIQR\n7QIDAQAB\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC7t4Tcq3cc6Y9Yhv0WFwSVOo8vOqWUNoTQuWis8ycVKXWkKcVsaHi+Vwg0MDNdGzORUZ09mPTBaw//IOH6IQg8L8voNzMTLMTN9m5EWi++u2bYRr8CRcsnpCtDz1FS183U4kBx8S+DVD+goeazN40zMQoZf/iF9tjTElKekWp2GFZDbCUwysMZIOt6FfgmhDhwUyYyjc7T3WzAi1l6eNfRbk7wUr2Jo35zeF6e4iwsukaJ3dShqShkYETaMpDYj3Ltr9FKOiKOWWNmfHf6f1V+EYkk3S1T03xtsL6gtRRDnLIAXQzmjGC1nGUw6ftWfrg+1cWSMep03fQugitchBHt",
                "type": "RSA",
                "key_size": 2048,
                "modulus_hex": "bbb784dcab771ce98f5886fd161704953a8f2f3aa5943684d0b968acf327152975a429c56c6878be57083430335d1b3391519d3d98f4c16b0fff20e1fa21083c2fcbe83733132cc4cdf66e445a2fbebb66d846bf0245cb27a42b43cf5152d7cdd4e24071f12f83543fa0a1e6b3378d33310a197ff885f6d8d312529e916a761856436c2530cac31920eb7a15f8268438705326328dced3dd6cc08b597a78d7d16e4ef052bd89a37e73785e9ee22c2cba4689ddd4a1a928646044da3290d88f72edafd14a3a228e5963667c77fa7f557e118924dd2d53d37c6db0bea0b514439cb2005d0ce68c60b59c6530e9fb567eb83ed5c59231ea74ddf42e822b5c8411ed",
                "exponent": 65537
            },
            "issuer": "intermediate",
            "subject": "sub-intermediate",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "keyUsage": {
                    "digital_signature": false,
                    "content_commitment": false,
                    "key_encipherment": false,
                    "data_encipherment": false,
                    "key_agreement": false,
                    "key_cert_sign": true,
                    "crl_sign": true,
                    "encipher_only": null,
                    "decipher_only": null
                },
                "basicConstraints": {
                    "ca": true,
                    "path_length": null
                },
                "subjectKeyIdentifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                "authorityKeyIdentifier": {
                    "key_identifier": "c39badad403daf7e44fedd12f13a6dfeced9a772",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "sub-intermediate"
                ]
            },
            "signature": "5c68a670cb4a8644c46129520821058333e614fa2bb73db6a2c0fba36dabe9fb3612314f635e733b89b580c0b710725619c9302e4637f29135e909c288fd7b98089273ff2fdd34f8906085e17af9f6200f05f8ac05f165e68c061d79efa9663199d119deafe55f375ba7432a7e8d7ddc7307c939205e7013748353cbdf47c3a1ea869c0dd0605c7344e8287a23b844cb68098ac6f22336862d623193848ed7aaa9b087d2d8d1f0e45b8eaedd0bb332159330111c45dbe715b0646b727ccf36115093128b4759c49f360133b041d012c2dbe410bf2563a775b436d83a9bccdd8495fd4118b0d9061b6144f95ad91e0b6894f548bc8da67a3f8ed7e3af88e252fb"
        },
        {
            "fingerprint": "69:fb:15:22:3a:41:cc:51:9c:e3:5f:e2:35:27:15:5f:0c:5c:00:d0",
            "notvalidbefore": "Tue Aug 26 05:24:24 2025",
            "notvalidafter": "Thu Aug 28 07:24:54 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "test",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "test"
                ]
            },
            "signature": "6928b7455ee1a43bf99ef1367ebb54dc9691fc6fe95f710bd3807dfb09bc54f81b40cb1cb30b636697a9073545be158067c32c45a0b5b556a655f6a619c076341448eb16d2e050619b82530ac9589878d97f05d5a54cf12b346e259a26d3358a05517eef88500be565e302c48d96a76ec992d173924952542c183b60321b195e3d97b9fdcbf86c85cb1cd177f0e772ac60b20d88baa666509fbf84bb37a07aa9c3f310fd9edd7c4f64efdaef2db5e779680d3b390e4fc033a87709c208d8a63819d69fa66417d41eb74d4d5f723f347f78e9f84aad2dcafbc3122957beba94d55e06130fe1c0c30c87fd29887630caaf86c9292c0494bc127895b010caf1341c"
        },
        {
            "fingerprint": "6b:20:33:b5:3f:6e:7c:b5:e3:66:35:a1:89:f5:ab:be:76:5e:05:94",
            "notvalidbefore": "Tue Aug 26 05:28:03 2025",
            "notvalidafter": "Thu Aug 28 07:28:33 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "qfe",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "qfe"
                ]
            },
            "signature": "80e685250bf7c697e496192de5ae63be3e56c3fec24fe5e3f7f25919a342a19a7cf4e7f7b56ace996a3070e19bce577175a8371e5bcd4308f60f64dc49e54dee49c61b5a1107b286195a3918baa06c7fef5ef1723f307a576c31a731be67141f4a0f74380c0cb26112a40777264aaf4f5880bb5fe65c94d52bb6d2f1dba0ad77d2d85e10fe76a534a1651947e949088d52bfa77ad7a4c2c89ca6b07eeae610fed930d505beab81a37511a643fb379f68a9e171296e08051325e3f13940affb9b7a5d81dc1098b7c65a78f7d81aac0023fd04262f9504c870aaccf36b32d769f23b8a0b950f8fbae55ba900fc5fdd3c07c609f4c40c628c7640b1b10e20beb1f0"
        },
        {
            "fingerprint": "6b:ff:54:9d:75:0f:92:1b:a1:a8:23:44:4b:d5:da:69:4f:02:5a:a7",
            "notvalidbefore": "Fri Aug 22 12:25:36 2025",
            "notvalidafter": "Fri Aug 29 12:26:06 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "testt",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "testt"
                ]
            },
            "signature": "2100ca2082e1ca33d651bc5d2f7b4eb614e126154c748c8f9446173bec034a00fee8da5b8e48318b9d48e7c395b942a80d2c90bfdea1809df1169143d80696bbd4d0f32f6a654136a33061ba31734ef8afd7b6504f3d086a290d93e0f9a130af062b18fabbfba11b670183a5f41e43bf47a65a6d0e80173660372d0efdfa2b6aa33594467a63b6a2ef76ee811ce353e4d2e1dcad48c0a9ff550b29a94deb80782fe7d475a5e24fd5c00f0688e9546c0f1a727b126b526b478e9762e815cff241920a557c8d2124405fd861c820ba2e09dec06ec673f0cbc05e001c091c6ceca63ebe62a7f753a25b586681b6af775cd19c9d803b73a0b49c4aca09b0d66c43e0"
        },
        {
            "fingerprint": "6c:e2:d2:08:f5:7a:f9:e7:a0:63:9c:0e:da:bc:68:0a:c3:ed:91:3c",
            "notvalidbefore": "Fri Aug 22 12:02:56 2025",
            "notvalidafter": "Fri Aug 29 12:03:26 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "test",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "test"
                ]
            },
            "signature": "73472f535c67d859555be1fa812bdad56b83c7f301283bb448836fb05728853afa510850d4247e345fefda71380cf0dc7a8d9d341f16e62cec0d3c2f26e68cf97be69d190a79ca51fcbf78c8876244820981f92ea170a61009ce0b47158de6990f0a6f3d3bdbfaf034fea8e1224896049b48d42b76809a6fd6f61bfe66469c088bf8f7c912e847aa113868e939cef370a3a2974a3a45e67456166d758b19ec2612daeef1939d6ae7f26e7b85a3b1f9166f3e937bb828b9d3644a3fd918a4b9492d9a29f2bf44eb614278b1b693229ad393b63049b817fb493992c815cd3098f4db66c60661fbe97375d69695f164da5fbdbb720b37f2206eaa1fc60a06729392"
        },
        {
            "fingerprint": "6d:53:d2:7c:42:91:b2:d2:64:55:b6:d5:0f:39:dd:47:04:85:ba:71",
            "notvalidbefore": "Tue Aug 26 04:47:52 2025",
            "notvalidafter": "Wed Aug 26 04:48:22 2026",
            "daysleft": 362,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "better",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "better"
                ]
            },
            "signature": "9b6106daffa98da9e32ebdb439096861ee51b6e88ead8691a76c44767ce5043c48732d61092b971b3ae08bb260fdbcc1cca2c3bd10a1c72354d5914b169c1b983944961fecd8232e0650c4238db455005f34f04d51aa227456ce5a9fe894cc9a0eb0ba835de5f7f0ac0074c843c6e7f81a47a2ffa4e6ff4239908bfee1b273b0023c9243939ed2c3143dcd2c70edd7931995dc55c5cdf17cdc59ed579760986d9acaad7021867d148f4f4fd65d7ac0d75bbb650260beea685a64cf5fe574a3f037280c3b008681c1ba5b71c92f0e787ba1c31701e5d3b45ca79a45bb0726018c503dc60ecbe08e51dde9405d5c51bbb38ab4d24493f5b5c6d65668d7e87f5639"
        },
        {
            "fingerprint": "6e:4c:fc:00:b1:4f:ce:86:f0:05:be:0d:0c:d3:fc:34:b8:cf:bf:a9",
            "notvalidbefore": "Fri Aug 22 12:05:36 2025",
            "notvalidafter": "Fri Aug 29 12:06:06 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "test",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "test"
                ]
            },
            "signature": "3d5eedd4c317e1b7910aff1b854db5c1ba541b9f73ec5fb4993206b57f119094a730f406b4f74e010305670b2d120fa77da05fb8034464d26dd60e603bdf33d2bc1914273dfc582c2e0156ac9aa34685d3c1b47c4623b56262b7885880bfeb8d44396771236a835aa394b49edf3f4e24fd37292a5d5fbd1bc13572e844236090a6295c59a89471fd8b56e7675395ee7c216964064eecb184299f6f8ba1886a9410199d7d5051d1c95fc06bdddc7eff3e528403e3f2b34186bd35def4ed54719aa4788ab0845f75ccb15722580f88df5be22abe8190b5a4a608cb69b7b1eba6f724870bd845684d1ca202e714b97077a014a75d13365e1b08eefd3a20d36584b6"
        },
        {
            "fingerprint": "6f:45:39:fb:bc:d0:b5:ab:29:9e:84:18:13:b3:3d:d7:92:bc:e6:c1",
            "notvalidbefore": "Mon Aug 25 08:13:08 2025",
            "notvalidafter": "Mon Sep  1 08:13:38 2025",
            "daysleft": 3,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "cvb",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "cvb"
                ]
            },
            "signature": "9a17511902e5815a37ab26644029f3d7401fd8586ae0aa105e7bbeeec0c8eed89056f67a8fd76eaf4e2b1b675508198199fbaa02e570b848fe66169b53edb92af44de7dcc015a51bcbe0948ac6c943f789d877238cd3b00bd0a11e227f356ca4f2c665ec97058100a63919af3ab39facd5838c74a4a99e3b49d075970b2c21e1c92beaa0109e21131560974ac184e674632c3c832e90f65081f0afde284d6b2abc9c159a17942d503c6b825c4b854c6d3f22d888cd65b8043824f83aad592bc40368152a635713d064209470386fb11e4ba5159f90cc9c234e8c5e14154fbdae9802f448dc10fa9bd16352e48d97e0b5bd76698a8946f4df0585bae6401c9bae"
        },
        {
            "fingerprint": "70:b9:29:7f:79:47:4e:df:10:97:6d:9d:0e:e0:d0:cc:e3:ef:96:5f",
            "notvalidbefore": "Tue Aug 26 05:04:38 2025",
            "notvalidafter": "Thu Aug 28 07:05:08 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "qte",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "7b04c94b6bb07c11b65f76f3bf15e24358700796",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "qte"
                ]
            },
            "signature": "027bd9fa859f68328e43ffcbb6f10956916fa4d7440635b9dd8c544292206b2158ad3d9230d278d16a0217a36fbe7ebec7cfbc95948b4faedd11d8b0cf563e038f4193bc4c7cc8da237560a9ade952350ed65d8c9ab64b70010e7ec9ae75cca2e68bfdbfb1545f5a0146d45652d183dd18e1e466c57553d7d2b7cbb6d2649f8e0233b3c10898ed58504d501350fad5efc16049fa67a5ba136491ec8678d6a8b09c2bde6950c214daf27ea96099557cbcb6eb416e185016136b57ea6d5860bdacae97d86ae288c99f5bb0b78937fd04dfe396c471be0dfbd89b9f4fea240c2671e727114c68bdaefb54575c7bf4d7c29eac32b9e1fbcea435cf4a87747d4c1967"
        },
        {
            "fingerprint": "75:cf:a8:41:2a:90:df:52:89:56:f0:10:7c:f9:c5:49:0a:47:17:8f",
            "notvalidbefore": "Mon Aug 25 09:11:51 2025",
            "notvalidafter": "Mon Sep  1 09:12:21 2025",
            "daysleft": 3,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "sge",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "sge"
                ]
            },
            "signature": "21ea0900973df16bb54323118c94077f171253bc9be8ea8c548414be76929e421ad04438fa5ba3a89523f1b9eeff07549d5d60e0a904dbd74feb5b895494020c304096aabcc6d508420d61c58a799fcd9f6848a7d92250c915260d9125a6e1b8e7c1c65ebf7d18b102fbb0d552e15f19fc2bb6f646468254ef4e7f030fbaa335e65bd7c97ac16da5c2be1e6d2b986184e28a76c8993073ff7bf60a776d62fd6d16a34645ff29a110ca922326a04101ae40e33b639b21fc7c2c31f9ecd7211f5e59cd0b14903c197a84113901c736ce30909fc2ba022d980941e00fe03663dbdf20b24c39e7fc12b2ec405d2b4b708b8b004d3e2a18e11edbc1eb214778038690"
        },
        {
            "fingerprint": "77:7a:b0:8c:ff:07:c9:23:9f:df:d5:e2:a9:8f:cf:76:14:a4:e4:be",
            "notvalidbefore": "Fri Aug 22 13:01:19 2025",
            "notvalidafter": "Fri Aug 29 13:01:49 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "her",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "her"
                ]
            },
            "signature": "928948cb50a0cb37da683c89eb81186f446319e364e4086f774022be13820645adfec00e043b1ad83615649676702e9320b2c947318f54f561f459a060cf84b9914ad11080387b185141bce2132bc1a45f09b9655d6c088753073a92d0889838c770949816f96261f59fa653d4d0850e32212264a951280585ef475dbe94ce5eb96325a0153a5ad6f95a01f77f461ed974a8bc85c40a48476781ae9e6a2f345f329f77e300daccf762bce92bb9a2df0b69e366cf75322f55d91e81fbeb11b6bbeecf1888bb5f66fbf8ac49179250685d69234189118be72fda2d3f42a762aae1e6552d18e107d6d8b48ca0fb1dd3f411da6831da6c957e8538ff66d2273a5c38"
        },
        {
            "fingerprint": "7b:59:75:78:47:a2:c7:55:ab:24:76:33:a4:7e:09:10:cb:45:58:fc",
            "notvalidbefore": "Fri Aug 22 12:06:14 2025",
            "notvalidafter": "Fri Aug 29 12:06:44 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "tte",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "tte"
                ]
            },
            "signature": "24e9b194717802e25da31ec641a022043cb513254fe593e90a4cf64a46561720fa6d23e13a9eeb910b42263c64f3af385d04ec40a2e3b749f772a545d1a21e1b4b9ad5c7919a1b34de616daac8639657aab9ee07b19e8963eff8a0128dc2cfd1fb62eaea90e396a36a098f7673a2854a2a1edeaa74ff23d89eca16c94a677f841ac9a4daf3015695a9e8fcab956e09fa2193521cc8d2ad6b3e69f4e0aa9effd34f2a60bc59d3ed578ccb78465c9a86f87539180de4c4fc10fcf5f2af88128fa7897bf67fde809e091a203d8cc1f9e72782a3c0ba73cdc9d9e17218e97870bc5cf01457dbbd74b2ceb48f9455701358ae4cd7fc2a175652147743bce37907ac7b"
        },
        {
            "fingerprint": "7d:1f:92:27:a2:6d:94:e4:eb:2e:08:80:69:38:2f:da:bb:d5:fb:4c",
            "notvalidbefore": "Mon Aug 25 11:04:34 2025",
            "notvalidafter": "Thu Aug 28 11:05:04 2025",
            "daysleft": 0,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "sub-intermediate",
            "subject": "qfeqfe",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "172b34d99908652326c8ddb77fc1aecbe51cacb4",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "qfeqfe"
                ]
            },
            "signature": "29f50ae11adb79d71a8b9e10c462a88f49dee3b95c4c43acfd0679b4290a57700835f1c6d9111b6f3c48f46cf518cf774c3b825ad600110ab1ca791ddc82dbce01bb4940982b7714dfc29325de4461bade3d49afea54ee73ab91e7b9dc408aef5cca798c51dfda467e98f033fc06c1c83624358ca157a8927dadf33d2900cebfa76cae4cb4f0ca50bc8a253560e33e85a5338a4c85be31bff4778180efdd1b52bbdfa8986e1dad7d235ba0742cd1713b6440bbcb377d214bdac1bd43ba6d84a09098376958a64de58ae4772a560b8a99acb72f15e50c28250ddd6223f0da086f923e47305a1c47010d4fdce2c5e5c58d75af8f0f8a0224d156c34ae103f48228"
        },
        {
            "fingerprint": "7f:d2:e7:97:97:21:19:65:e3:cb:ea:5c:be:79:7c:cc:38:cf:d4:27",
            "notvalidbefore": "Mon Aug 25 08:12:05 2025",
            "notvalidafter": "Mon Sep  1 08:12:35 2025",
            "daysleft": 3,
            "publickey": {
                "pem": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAnF/SLFKtlzJ5ViQ3F2Xc\nF67cSQqbIZSC8Fo1ZYWQzknpxnNSbP1373STPckrG+sHaqjDKAYiWGcwu9zWhXdR\nBcMMs2cCpWwADewvIS9QDwc+kojwjE0u8+WeeWeMetXAOh76wGvxaLTva3iWQAWC\nJn+cyZMHsYh+m+Gyb76QRqADSrPSSOunH4prqyxyc4wgTgoIGuBBofKOzG+rdL9B\nElmFmhsF7N/P6QhUtOM1OHnUg6zMZdFvWAxKf0YP7I/FWVYFQpN5YLKeDXWGjfbD\njaP0168yhTqRcjEnTt1EfxzBlcbeHo0HaHKm8cSE4f4Dct0zW3QOz6qqbF0zK5oh\ncK8Xj5nJbd0Pcupx7BHrSKSsAAfCo5ly/z7Vfx6Fde7bwUXjfWOuQg/w2tyZj3sE\ncWlYm5VXz+voRLrU1JNQREtdefOdGx6LLRi0BoF7btk8voWDw+F6Ak9QKJYUcrYi\nAmvoLf6hniKgAu1ehvSr3/iDXx7QTGFuxyqh9Siq/MOXAgMBAAE=\n-----END PUBLIC KEY-----\n",
                "ssh": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCcX9IsUq2XMnlWJDcXZdwXrtxJCpshlILwWjVlhZDOSenGc1Js/XfvdJM9ySsb6wdqqMMoBiJYZzC73NaFd1EFwwyzZwKlbAAN7C8hL1APBz6SiPCMTS7z5Z55Z4x61cA6HvrAa/FotO9reJZABYImf5zJkwexiH6b4bJvvpBGoANKs9JI66cfimurLHJzjCBOCgga4EGh8o7Mb6t0v0ESWYWaGwXs38/pCFS04zU4edSDrMxl0W9YDEp/Rg/sj8VZVgVCk3lgsp4NdYaN9sONo/TXrzKFOpFyMSdO3UR/HMGVxt4ejQdocqbxxITh/gNy3TNbdA7PqqpsXTMrmiFwrxePmclt3Q9y6nHsEetIpKwAB8KjmXL/PtV/HoV17tvBReN9Y65CD/Da3JmPewRxaViblVfP6+hEutTUk1BES115850bHostGLQGgXtu2Ty+hYPD4XoCT1AolhRytiICa+gt/qGeIqAC7V6G9Kvf+INfHtBMYW7HKqH1KKr8w5c=",
                "type": "RSA",
                "key_size": 3072,
                "modulus_hex": "9c5fd22c52ad9732795624371765dc17aedc490a9b219482f05a35658590ce49e9c673526cfd77ef74933dc92b1beb076aa8c3280622586730bbdcd685775105c30cb36702a56c000dec2f212f500f073e9288f08c4d2ef3e59e79678c7ad5c03a1efac06bf168b4ef6b7896400582267f9cc99307b1887e9be1b26fbe9046a0034ab3d248eba71f8a6bab2c72738c204e0a081ae041a1f28ecc6fab74bf411259859a1b05ecdfcfe90854b4e3353879d483accc65d16f580c4a7f460fec8fc559560542937960b29e0d75868df6c38da3f4d7af32853a917231274edd447f1cc195c6de1e8d076872a6f1c484e1fe0372dd335b740ecfaaaa6c5d332b9a2170af178f99c96ddd0f72ea71ec11eb48a4ac0007c2a39972ff3ed57f1e8575eedbc145e37d63ae420ff0dadc998f7b047169589b9557cfebe844bad4d49350444b5d79f39d1b1e8b2d18b406817b6ed93cbe8583c3e17a024f5028961472b622026be82dfea19e22a002ed5e86f4abdff8835f1ed04c616ec72aa1f528aafcc397",
                "exponent": 65537
            },
            "issuer": "My Dummy Root CA 1",
            "subject": "fae",
            "signaturehashalgorithm": "SHA256",
            "extensions": {
                "extendedKeyUsage": [
                    "serverAuth",
                    "clientAuth",
                    "codeSigning"
                ],
                "subjectKeyIdentifier": "c566bb2033e3d29d0b620a1b4bce25973db62d4c",
                "authorityKeyIdentifier": {
                    "key_identifier": "d8ef6bd275d239945ce409211cd9e316adeb784f",
                    "authority_cert_issuer": null,
                    "authority_cert_serial_number": null
                },
                "subjectAltName": [
                    "fae"
                ]
            },
            "signature": "5f82e50d626de2f0dc0a8f00d642a39380a5a29e69962ccb69eca0e63fb5cc0a2a57bcec5d727d0f46f1067432faed1552f5a20f379630d934a97cdb0afb86bc22a6612673d4c41965a02090c28eae439adcce059bf2e5d2f0cd00124f32940dea1fb359cef42ba839e9670e9da99a242a7507e697fe36d7b8ac2ce01520944aa6d85f8a62f66ba16b30841abee9a0af8bee81451ff1fedffb62103e441acef43a6eea0c59a6bdbaf47bd50c030a964d62fe9bc7841ba6606ae7ac82110508c7088f18320185985ad90bb38268f40d12b7c4b82cb15ea10604a589874a60a5327996477f00eac42a10874166aeb38ce963a5fa58134bccae6150b5331d12c682"
        }
    ];
}