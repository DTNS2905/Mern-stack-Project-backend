const crypto = require('crypto');
require('dotenv').config();

const accessTokenSecret = crypto.randomBytes(64).toString('hex');
console.log(accessTokenSecret);

module.exports = accessTokenSecret;
