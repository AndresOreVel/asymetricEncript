const fs = require('fs');
const cryptoJS = require('crypto-js');

const messatgeInABottle = fs.readFileSync('missatge_bob.txt','utf8');

const privateKey = fs.readFileSync('bob_private_key.txt','utf8');

const signature = cryptoJS.HmacSHA256(messatgeInABottle, privateKey).toString();

fs.writeFileSync('firmaDeBob.txt', signature);