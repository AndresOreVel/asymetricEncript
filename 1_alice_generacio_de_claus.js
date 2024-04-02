const CryptoJS = require("crypto-js");
const fs = require("fs");

// Generar claves pública y privada
const keyPair = CryptoJS.lib.WordArray.random(256);
const publicKey = keyPair.toString();
const privateKey = keyPair.toString();

// Guardar claves en archivos
fs.writeFileSync("alice_public_key.txt", publicKey);
fs.writeFileSync("alice_private_key.txt", privateKey);