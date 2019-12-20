function getUrlParam(name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

    var r = window.location.search.substr(1).match(reg);  //匹配目标参数

    if (r != null) return unescape(r[2]);

    return null; //返回参数值

}
$(function(){
    var id = getUrlParam('id');
    // $.ajaxSettings.async = false;
        //加载品牌
        $.get('/users/findAllBrand',function (data) {
            var html1 = ""
            for(var i = 0; i < data.length;i++){
                html1+="<li><a href='/product?id=" +data[i].id+ "'>"+ data[i].classify_name +"</a></li>";
            }
            $('#products-bran-ul').append(html1);
            
    
        });
    $.get('/users/findProductItemById?id=' + id,function (data) {
        var img_url = "http://47.102.202.116:8080/Img/getImg?url=";
        var goods_name = data[0].goods_name;
        var classify_name = data[0].base_classify_name;
        var main_img = data[0].img_main == null ?"": img_url + data[0].img_main;
        var less_img = data[0].img_less == null ?"": img_url + data[0].img_less;
        var size_img = data[0].img_size == null ?"": img_url + data[0].img_size;
        $("#item-imgmain-div>img").attr("src",main_img);
        $(".item-imgless1-div").eq(0).find("img").attr("src",main_img);
        $(".item-imgless1-div").eq(1).find("img").attr("src",less_img);
        $("#item-chicun-div>img").attr("src",size_img);
        $("#item-name-span").text(goods_name);
        $("#item-bran-p > span").text(classify_name);
    });
    $.get('/users/queryProductSizeById?id=' + id,function (data) {
        var html = "";
        for(var i = 0; i<data.length;i++){
            html+=`
                <li>
                    <p>Φ ${data[i].diameter}</p>
                    <p>${data[i].height}</p>
                    <p>${data[i].thickness}</p>
                </li>
            `
        }
        $("#table_content ul").html(html)
    });
    // 事件
    $(".item-imgless1-div").unbind("click").bind("click",function(){
        var img_url = $(this).find("img").attr("src");
        $("#item-imgmain-div>img").attr("src",img_url);
    });
});

