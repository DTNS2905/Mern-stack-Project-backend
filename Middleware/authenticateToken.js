const jwt = require('jsonwebtoken');
const { accessTokenSecret } = require("../utils/randomAccessToken");
require('dotenv').config();

// Define the authenticateToken middleware function
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401); // Unauthorized if token is not provided
    }

    jwt.verify(token, accessTokenSecret, (err, user) => {
        console.log(accessTokenSecret);
        if (err) {
            console.error('Error verifying token:', err);
            return res.sendStatus(403); // Forbidden if token is invalid
        }

        // Token is valid, attach the decoded user to the request object
        req.user = user;
        next(); // Proceed to the next middleware
    });
}

module.exports = authenticateToken;
