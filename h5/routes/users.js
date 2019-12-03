var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//按id查询用户
router.get('/findById',function(req,res,next) {
  userDao.queryById(req,res,next);
});
//查询全部用户
router.get('/findAll',function (req,res,next) {
  userDao.queryAll(req,res,next);
})
//查询字典
router.get('/findAllDict',function (req,res,next) {
  userDao.queryAllDict(req,res,next);
})
//查询轮播图
router.get('/findAllCarousel',function (req,res,next) {
  userDao.queryAllCarousel(req,res,next);
})
//查询品牌
router.get('/findAllBrand',function (req,res,next) {
  userDao.queryAllBrand(req,res,next);
});
//按品牌id查询商品
router.get('/findProductByBranId',function(req,res,next) {
  userDao.queryProductByBranId(req,res,next);
});
//按商品id查询商品
router.get('/findProductItemById',function (req,res,next) {
  userDao.queryProductItemById(req,res,next);
});
module.exports = router;
