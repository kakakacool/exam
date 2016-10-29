var crypto = require('crypto-js');

function hashPass(pass, passKey) {
    return crypto.AES.encrypt(pass, passKey).toString();
}

function decodePass(pass, passKey) {
    var bytes = crypto.AES.decrypt(pass, passKey);
    return bytes.toString(crypto.enc.Utf8);
}

module.exports = {
    hashPass: hashPass,
    decodePass: decodePass
}