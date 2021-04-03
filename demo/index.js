const { encryptString, decryptString } = require( 'simple-encrypter');

// Example with 5 digit word
console.log(`encrypt - akash:`, encryptString('akash')); //aaaak%acsdh(e$fgh1*23@45^6@12FH
console.log(`decrypt - akash:`, decryptString(encryptString('akash'))); //akash

// Example qith Jhon Doe
console.log(`encrypt - jhon doe:`, encryptString('jhon doe')); //aajah%ocnd (deo$efgh1*23@45^6@12FH
console.log(`decrypt - jhon doe:`, decryptString(encryptString('jhon doe'))); //jhon doe

// Example with 4 digit word
console.log(`encrypt-afia:`, encryptString('afia')); //aaaaf%icad(e$fgh1*23@45^6@12FH
console.log(`decrypt-afia:`, decryptString(encryptString('afia'))); //afia

// Example with 10 digit word
console.log(`encrypt-1234567891:`, encryptString('1234567891')); //aa1a2%3c4d5(6e7$8f9g1h1*23@45^6@12FH
console.log(`decrypt-1234567891:`, decryptString(encryptString('1234567891'))); //1234567891

// Example with 12 digit word
console.log(`encrypt-ILoveBangl:`, encryptString('ILoveBangl')); //Bea$nfgglh1*23@45^6@12FH
console.log(`decrypt-ILoveBangl:`, decryptString(encryptString('ILoveBangl'))); //ILoveBangl

// Example with 17 digit word
console.log(`encrypt-ILoveMyBangladesh:`, encryptString('ILoveMyBangladesh')); //aaIaL%ocvde(Mey$Bfagnhg1l*a2d3e@s4h5^6@12FH
console.log(`decrypt-ILoveMyBangladesh:`, decryptString(encryptString('ILoveMyBangladesh'))); //ILoveMyBangladesh

// Example with number
console.log(`encrypt-101010:`, encryptString('101010')); // 0e$fgh1*23@45^6@12FH
console.log(`decrypt-101010:`, decryptString(encryptString('101010'))); //101010