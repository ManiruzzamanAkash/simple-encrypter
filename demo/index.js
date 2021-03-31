const { encryptString, decryptString } = require( 'simple-encrypter');

console.log(`encrypt`, encryptString('akash'));
console.log(`decrypt`, decryptString('a5aaak%acsdh(e$fgh1*23@45^6@'));
