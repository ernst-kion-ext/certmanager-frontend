async function getServerCertificates() {

    const url = document.getElementById('server-select').value;
    let vaulttoken = document.getElementById('vaulttoken-input').value;
    let certAmount = document.getElementById('certamount-input').value;

    if (!url) throw new Error("No server selected");
    if (!vaulttoken) throw new Error("No Vault token provided");

    const headers = {};
    if (vaulttoken) headers['X-Vault-Token'] = vaulttoken;
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

// Only for local debugging
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
        }
    ]
}