var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '郑州贝利金刚石工具有限公司' });
});

module.exports = router;
