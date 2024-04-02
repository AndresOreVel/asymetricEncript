const fs = require('fs');
const CryptoJS = require('crypto-js');

const encryptedMessage = fs.readFileSync('missatgeEncriptatDeAlice.txt', 'utf8');
const encryptionKey = fs.readFileSync('bob_public_key.txt', 'utf8');


const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, encryptionKey).toString(CryptoJS.enc.Utf8);

fs.writeFileSync('bob_decrypted_message.txt', decryptedMessage, 'utf8');
