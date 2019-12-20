var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('product', { title: '全部产品' });
});

module.exports = router;
