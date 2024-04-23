const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController');

// Register user route
router.post('/', UserController.registerUser);

module.exports = router;