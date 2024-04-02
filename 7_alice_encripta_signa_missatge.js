const cryptoJS = require('crypto-js');
const fs = require('fs');

const message = fs.readFileSync('messageToBob.txt','utf8');

const key = fs.readFileSync('bob_public_key.txt','utf8');

const encriptedMessage = cryptoJS.AES.encrypt(message, key).toString();

const digitalSign = cryptoJS.HmacSHA256(encriptedMessage,key).toString();

const jsonObject = {
    mensajeEncriptado: encriptedMessage,
    firmaDigital: digitalSign
};

const fileRute = "alice_encripta_signa_missatge.json";
fs.writeFileSync(fileRute, JSON.stringify(jsonObject));

console.log("Mensaje encriptado y firmado correctamente en el archivo: ", fileRute);