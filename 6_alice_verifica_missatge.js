const cryptoJS = require('crypto-js');
const fs = require('fs');

const message = fs.readFileSync('missatge_bob.txt','utf8');

const signatureOfBob = fs.readFileSync('firmaDeBob.txt','utf8');

const privateKeyOfBob = fs.readFileSync('bob_private_key.txt','utf8');

//Comparo la clave con la firma de Bob
const validation = cryptoJS.HmacSHA256(message,privateKeyOfBob).toString() === signatureOfBob;

if(validation){
    console.log('La clave es válida');
}else{
    console.log('La clave no es válida');
}