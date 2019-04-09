var express = require("express");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('view', { title: 'View Documents' });
});

module.exports = router;