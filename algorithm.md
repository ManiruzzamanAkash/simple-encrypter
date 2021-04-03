#### Encryption Algorithm

1. Get first character from private secret and add to `encryptedString`
1. Make String as array and secret as array
1. Concat string parts with the private secret parts
1. return `decryptedString`

#### Decryption Algorithm

1. Calculate `encryptStringLength` 
    = total - ( 2 + secret length)
    `starting_index` = 2
1. Replace string by deleting before this index
1. Initializes data: `taken` = 0, `decryptedString` = '';
1. for `i` to `encryptStringLength` length
    if `i` is odd && `taken` <= encryptStringLength , `taken++`;
        add in `decryptedString`
1. return `decryptedString`