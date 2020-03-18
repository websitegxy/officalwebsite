$(function () {
    $('.nav-a').removeClass('nav-active');
    $('#nav-a2').addClass('nav-active');
    //加载品牌
    $.get('/webapp/users/findAllBrand',function (data) {
        var html1 = ""
        var html2 = ""
        for(var i = 0; i < data.length;i++){
            html1+="<li><a href='javascript:void(0)' class='toMack' data-id='" + data[i].id +"'>"+ data[i].classify_name +"</a></li>";
            html2+="<div class='products-item-div' id='" + data[i].id +"'><span>" + data[i].classify_name +"</span><hr><div class='product-items-div' branId='" + data[i].id+"'></div></div>'";
        }
        $('#products-bran-ul').append(html1);
        $('#products-detail-div').append(html2);
        $(".toMack").unbind("click").bind("click",function(){
            var $id = $(this).attr("data-id");
            var top = $('#'+$id).offset().top-150;
            $(window).scrollTop(top);
        });
        $.ajaxSettings.async = false;
        //加载品牌下商品
        $('.product-items-div').each(function () {
            var product_items_div = $(this);
            var branid =   $(this).attr('branId');
            $.get('http://47.102.202.116:8080/product/queryAllProduct?baseClassifyId=' + branid,function (product) {
                var product = product.rows;
                var html = "";
                for(var i = 0; i <product.length;i++){
                    html+="<div>"
                    for(var j = 0; j < product[i].productes.length; j++){
                        // var img_url = "http://47.102.202.116:8080/Img/getImg?url=" + product[i].productes[j].imgMain;
                        var img_url = "/webapp" + product[i].productes[j].imgMain;
                        if(product[i].productes[j].imgSize == '0'){
                            html+='<div class="product-item-div" productId=' + product[i].productes[j].id + '>';
                            html+='<img src='+img_url+'>';
                            html+='<p>'+product[i].productes[j].goodsName+'</p>'
                            html+='</div>'
                        }else if(product[i].productes[j].imgSize == '1'){
                            html+='<div class="product-item-div product-item-div-big" productId=' + product[i].productes[j].id + '>';
                            html+='<img src='+img_url+'>';
                            html+='<p>'+product[i].productes[j].goodsName+'</p>'
                            html+='</div>'
                        }

                    }
                    html+='</div>'
                }

                product_items_div.append(html)
                var id = getUrlParam('id');
                if(id){
                    var _id = id;
                    var top = $('#'+_id).offset().top-150;
                    $(window).scrollTop(top);
                }

            });

        });
        $('.product-item-div').click(function () {
            var product_item_div = $(this);
            var productId = product_item_div.attr('productId');

            window.location = 'productItem?id=' + productId;
        })

    });



})
function getUrlParam(name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

    var r = window.location.search.substr(1).match(reg);  //匹配目标参数

    if (r != null) return unescape(r[2]);

    return null; //返回参数值

}
