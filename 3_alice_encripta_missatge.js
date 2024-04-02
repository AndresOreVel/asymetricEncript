const fs = require('fs');
const CryptoJS = require('crypto-js');

const message = fs.readFileSync('missatgeAlice.txt', 'utf8');

const encryptionKey = fs.readFileSync('bob_public_key.txt', 'utf8');

const encryptedMessage = CryptoJS.AES.encrypt(message, encryptionKey).toString();

fs.writeFileSync('missatgeEncriptatDeAlice.txt', encryptedMessage, 'utf8');