var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
    res.json('Homepage');
});

// About page route
router.get('/about', function(req, res) {
    res.json('About this wiki');
});

module.exports = router;