var express = require('express');
var router = express.Router();
var path = require("path");
var BASE_HTML_PATH = path.join(__dirname, '../views/base.html');

/* GET home page. */
router.all('/*', function(req, res, next) {
 	res.sendFile(BASE_HTML_PATH);
});

module.exports = router;
