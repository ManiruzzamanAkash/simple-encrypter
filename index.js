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

    const privateSecret = "aa%cd(e$fgh1*23@45^6@";
    let encryptedString = privateSecret.split("")[0] + string.length;
    const stringParts   = string.split("");
    const secretParts   = privateSecret.split("");

    // Add string parts inside the private secret parts
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

    // Get the second digit of the string, or number length
    let encryptedLength = '';
    for (let i = 0; i < encryptedStringParts.length; i++) {
        const el = encryptedStringParts[i];
        if(i > 0){
            if(!isNaN(el)) {
                encryptedLength += el;
            } else {
                break;
            }
        }
    }

    // Starting point could be from 3 or 4 or 5 based on character length.
    let startLength = 3;
    if( encryptedLength >= 10 && encryptedLength < 100 ) {
        startLength      = 4;
    } else if( encryptedLength >= 100 && encryptedLength < 1000 ) {
        startLength      = 5;
    }

    let textReadLength = 0;
    if( encryptedLength % 2 !== 0 ){
        textReadLength = (encryptedLength * 2) - 1;
    } else {
        textReadLength = ( encryptedLength * 2 );
    }

    
    const totalVisitedCharacter = startLength + textReadLength;
    let decryptedString         = "";
    startLength = startLength - 1;

    for (let index = 0; index < encryptedStringParts.length; index++) {
        
        console.log(`startLength`, startLength);
        console.log(`index`, index);

        if (index >= startLength && index < totalVisitedCharacter) {
            const es = encryptedStringParts[index];
            const es_m1 = encryptedStringParts[index - 1];

            if ( encryptedLength % 2 !== 0 ) {
                if ( index % 2 !== 0 ) {
                    decryptedString += es;
                }
            }
            
            if( encryptedLength % 2 === 0 ) {
                if ( index % 2 === 0 ) {
                    decryptedString += es;
                }
            }

        }
    }

    return decryptedString;
}

// Exports encrypt and decrypt functions
module.exports = {
    encryptString: encryptString,
    decryptString: decryptString,
}