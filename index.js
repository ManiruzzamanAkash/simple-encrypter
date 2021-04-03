/**
 * private Secret
 * 
 * @since 0.0.4
 */
 const privateSecret        = "aa%cd(e$fgh1*23@45^6@12FH";
 const privateSecretLength  = privateSecret.length;

/**
 * Encrypt String
 * 
 * @since 0.0.1
 * 
 * @param string string Un encripted string which needs to be encrypted
 * 
 * @return string encrypted string
 */
function encryptString(string) {
    if (string.length === 0) return '';

    /** Step1: Get first character from private secret and add to `encryptedString` */
    let encryptedString = privateSecret.split("")[0];
    
    /** Step2: Make String as array and secret as array */
    const stringParts   = string.split("");
    const secretParts   = privateSecret.split("");

    /** Step3: Concat string parts with the private secret parts */
    for (let i = 0; i < secretParts.length; i++) {
        const text = secretParts[i];

        encryptedString += text;

        if (typeof stringParts[i] !== "undefined") {
            encryptedString += stringParts[i];
        }
    }

    return encryptedString;
}

/**
 * Decrypt String
 * 
 * @since 0.0.1
 * 
 * @param string encrypted string needs to unencrypt
 * 
 * @return string decrypted string's back
 */
function decryptString(string) {
    if (string.length === 0) return '';

    const encryptedStringParts  = string.split("");
    const startLength = 2;

    /** Step1: Calculate `encryptStringLength` total - ( startLength + secret length) */
    let encryptedLength = encryptedStringParts.length - ( startLength + privateSecretLength) + 1;

    /** Step2: Replace array by deleting before it's index */
    encryptedStringParts.splice(0, startLength);

    /** Step3: Initializes takens data */
    let taken = 0, decryptedString = '';
    
    /** Step4: for i to encryptStringLength length, replace actual string */
    for (let i = 0; i < encryptedStringParts.length; i++) {
        const ep = encryptedStringParts[i];
        if( (i % 2 === 0) && taken < encryptedLength ) {
            decryptedString += ep;
            taken++;
        }
    }

    return decryptedString;
}

// Exports encrypt and decrypt functions
module.exports = {
    encryptString: encryptString,
    decryptString: decryptString,
}