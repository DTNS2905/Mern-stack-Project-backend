const jwt = require('jsonwebtoken');
const accessTokenSecret  = require('./randomAccessToken');

function generateAndSetToken(res, email) {
    try {
        const token = jwt.sign({ email }, accessTokenSecret, { expiresIn: '1h' });
        console.log("the token from sign: "+accessTokenSecret);
        res.cookie('accessToken', token, {
            httpOnly: true,
            secure: true, // Set to true if your application uses HTTPS
            maxAge: 3600 * 1000 // 3600 seconds (1 hour)
        });
        return token;
    } catch (error) {
        console.error('Error generating access token:', error);
        return null; // Return null in case of error
    }
}

module.exports = generateAndSetToken;
