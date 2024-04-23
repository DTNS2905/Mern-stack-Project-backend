const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController');

// Register user route
router.post('/', UserController.loginUser);

module.exports = router;