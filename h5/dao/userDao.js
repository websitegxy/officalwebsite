//mysql交互
var mysql = require('mysql');
var $conf = require('../config/conf');
var $sql = require('./userMapper');
//使用数据库连接池
var pool = mysql.createPool( $conf.mysql );
var jsonWrite = function (res,ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '9999',
            msg: '查询失败'
        });
    }else {
        res.json(ret);
    }
};
module.exports = {
    queryById: function (req,res,next) {
        pool.getConnection(function (err,connection) {
            //获取页面传过来的参数
            var param = req.query || req.params;
            //建立数据库连接
            connection.query($sql.queryById,param.id,function (err,result) {
                console.log(err);
                jsonWrite(res,result);
                //释放数据库连接
                connection.release();
            });
        });
    },
    queryAll: function (req,res,next) {
        pool.getConnection(function (err,connection) {
            connection.query($sql.queryAll,function (err,result){
                jsonWrite(res,result);
                connection.release();
            });

        })
    },
    queryAllDict: function (req,res,next) {
        pool.getConnection(function (err,connection) {
            connection.query($sql.queryAllDict,function (err,result) {
                jsonWrite(res,result);
                connection.release();
            })
        })
    },
    queryAllCarousel: function (req,res,next) {
        pool.getConnection(function (err,connection) {
            connection.query($sql.queryAllCarousel,function (err,result) {
                jsonWrite(res,result);
                connection.release();
            })
        })
    },
    queryAllBrand: function (req,res,next) {
        pool.getConnection(function (err,connection) {
            connection.query($sql.queryAllBrand,function (err,result) {
                jsonWrite(res,result);
                connection.release();
            })
        })
    },
    queryProductByBranId: function (req,res,next) {
        pool.getConnection(function (err,connection) {
            //获取页面传过来的参数
            var param = req.query || req.params;
            //建立数据库连接
            connection.query($sql.queryProductByBranId,param.classify_id,function (err,result) {
                console.log(err);
                jsonWrite(res,result);
                //释放数据库连接
                connection.release();
            });
        });
    },
    queryProductItemById: function (req,res,next) {
        pool.getConnection(function (err,connection) {
            //获取页面传过来的参数
            var param = req.query || req.params;
            //建立数据库连接
            connection.query($sql.queryProductItemById,param.id,function (err,result) {
                console.log(err);
                jsonWrite(res,result);
                //释放数据库连接
                connection.release();
            });
        });
    }
}