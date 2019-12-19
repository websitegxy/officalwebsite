function getUrlParam(name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

    var r = window.location.search.substr(1).match(reg);  //匹配目标参数

    if (r != null) return unescape(r[2]);

    return null; //返回参数值

}
$(function(){
    var id = getUrlParam('id');
    $.ajaxSettings.async = false;
    $.get('/users/findProductItemById?id=' + id,function (data) {
        var img_url = "http://47.102.202.116:8080/Img/getImg?url=";
        var goods_name = data[0].goods_name;
        var classify_name = data[0].base_classify_name;
        var main_img = data[0].img_main == null ?"": img_url + data[0].img_main;
        var less_img = data[0].img_less == null ?"": img_url + data[0].img_less;
        var size_img = data[0].img_size == null ?"": img_url + data[0].img_size;
        $('#item-chicun-div').css("background-image",size_img);
    })
    // $(".toMack").unbind("click").bind("click",function(){
    //     var $id = $(this).attr("data-id");
    //     window.location.href="product?id="+$id;
    // });
});

