function getUrlParam(name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

    var r = window.location.search.substr(1).match(reg);  //匹配目标参数

    if (r != null) return unescape(r[2]);

    return null; //返回参数值

}
$(function(){
    var id = getUrlParam('id');
    $.get('/users/findProductItemById?id=' + id,function (data) {
        var goods_name = data[0].goods_name;
        var classify_name = data[0].base_classify_name;
        var main_img = data[0].img_main;
        var less_img = data[0].img_less;
    })
    // $(".toMack").unbind("click").bind("click",function(){
    //     var $id = $(this).attr("data-id");
    //     window.location.href="product?id="+$id;
    // });
});

