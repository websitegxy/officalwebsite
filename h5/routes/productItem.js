var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('productItem', { title: '产品详情' });
});

module.exports = router;
