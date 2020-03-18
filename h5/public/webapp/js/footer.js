$(function() {
    $.get('/webapp/users/findAllDict', function (data) {
        for (var i = 0; i < data.length; i++) {
            //加载公司名称
            if (data[i].code == 'cname') {
                $('#footer-cname-li').prepend(data[i].name)
            }
            //联系方式
            if (data[i].code == 'tel') {
                $('#footer-tel-a').append(data[i].name);
            }
            //地址
            if (data[i].code == 'address') {
                $('#footer-address-li').text(data[i].name);
            }
        }
    });
    //加载品牌
    $.get('/webapp/users/findAllBrand',function (data) {
        for(var i = 0; i < data.length;i++){
            // $('#all-product').append("<div class='product-div' branid='"+ data[i].id+"'><img class='logo-div' src='../img/branlog.png'/></div>");
            $('#footer-bran-ul').append("<li><a href='/product?id=" +data[i].id+ "'>"+ data[i].classify_name +"</a></li>");
        }
        $('#footer-bran-ul').append("<li><a href='/contact'>技术支持/客户服务</a></li>");
        // //品牌点击事件
        // $(".product-div").click(function () {
        //     alert($(this).attr('branid'));
        // });
    });
})
