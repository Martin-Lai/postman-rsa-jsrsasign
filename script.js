var navigator = {}
var window = {}

const res = await pm.sendRequest("https://cdnjs.cloudflare.com/ajax/libs/jsrsasign/10.9.0/jsrsasign-all-min.js")

eval(res.text());

function encryptRSA(publicKey, data) {
    const rsaPublicKey = KEYUTIL.getKey(publicKey);
    const encryptedData = KJUR.crypto.Cipher.encrypt(data, rsaPublicKey, "RSA");
    console.log("encrypt success：", hextob64(encryptedData));
}

const result = encryptRSA("YOUR_RSA_PUB_KEY", "YOUR_DATA")
