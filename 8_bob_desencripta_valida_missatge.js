const fs = require('fs');
const cryptoJS = require('crypto-js');

//Recupero la clave secreta que generó Alice
const secretKey = fs.readFileSync('bob_private_key.txt','utf8');

//Leo del archivo json que generó alice
const fileRoute = "alice_encripta_signa_missatge.json";
//Y lo parseo a objeto Json
const jsonObject = JSON.parse(fs.readFileSync(fileRoute,"utf-8"));

//Recupero ambas propiedades, el mensaje encriptado y la firma digital
const encriptedMessage = jsonObject.mensajeEncriptado;
const digitalSign = jsonObject.firmaDigital;

const bytes = cryptoJS.AES.decrypt(encriptedMessage,secretKey);
const desencriptedMessage = bytes.toString(cryptoJS.enc.Utf8);

const validSign = cryptoJS.HmacSHA256(encriptedMessage,secretKey).toString() === digitalSign;


if(validSign){
    console.log("Clave correcta... El mensaje desencriptado es: ", desencriptedMessage);
}else{
    console.log("Clave no válida");
}