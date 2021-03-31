# Simple Encrypter `Javascript`

Simple Encrypter npm package, that encrypt and descrypt a string. It's super simple and fast javascript text encrypter.

---

## Demo Live Link using react

https://codesandbox.io/s/heuristic-butterfly-gr50i?file=/src/App.js

[More than thousand talks...]


## Usage:
```js
npm install simple-encrypter
```

### How to encrypt a string ?
```js
const { encryptString } = require( 'simple-encrypter');
console.log(`encrypt`, encryptString('akash'));

```

### How to decrypt a string ?
```js
const { decryptString } = require( 'simple-encrypter');
console.log(`decrypt`, decryptString('a5aaak%acsdh(e$fgh1*23@45^6@'));
```

## Full Encrypt & Decrypt string Example:

```js
const { encryptString, decryptString } = require( 'simple-encrypter');

console.log(encryptString('akash')); // a5aaak%acsdh(e$fgh1*23@45^6@
console.log(decryptString('a5aaak%acsdh(e$fgh1*23@45^6@')); // akash

```

Yeah, It's super simple. right..?

## License:
MIT

## Contributor:
Md. Maniruzzaman Akash <manirujjamanakash@gmail.com> (https://akash.devsenv.com)
