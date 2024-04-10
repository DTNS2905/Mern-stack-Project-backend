const express = require('express');
const router = express.Router();

// @route   GET api/books/test
// @desc    Tests books route
// @access  Public
router.get('/test', (req, res) => res.send('book route testing!'));

module.exports = router;