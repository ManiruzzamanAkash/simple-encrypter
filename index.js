/**
 * Encrypt String
 * 
 * @param string string Unencripted string which needs to change
 * 
 * @return string encrypted string
 */
function encryptString(string) {
    if (string.length === 0) return '';

    const privateSecret = "aa%cd(e$fgh1*23@45^6@";
    let encryptedString = privateSecret.split("")[0] + string.length;
    const stringParts = string.split("");
    const secretParts = privateSecret.split("");

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
 * @param string encrypted string needs to unencrypt
 * 
 * @return string decrypted string's back
 */
function decryptString(string) {
    if (string.length === 0) return '';

    let decryptedString = "";
    const encryptedLength = string.split("")[1];
    const totalVisitedCharacter = 3 + (encryptedLength % 2 !== 0 ? encryptedLength * 2 : encryptedLength * 2 - 1) - 1;
    const encryptedStringParts = string.split("");

    for (let index = 0; index < encryptedStringParts.length; index++) {
        const es = encryptedStringParts[index];

        if (index >= 3 && index <= totalVisitedCharacter) {
            if ((index + 1) % 2 === 0) {
                decryptedString += es;
            }
        }
    }

    return decryptedString;
}

// Exports two functions
module.exports = {
    encryptString: encryptString,
    decryptString: decryptString,
}