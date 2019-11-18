$(function(){
    $('.nav-a').click(function () {
        $('.nav-a').removeClass('nav-active');
        $(this).addClass('nav-active');
    });
    $.get('/users/findAllDict',function (data) {
        for(var i = 0; i < data.length; i++){
            //加载公司名称
            if(data[i].code == 'cname'){
                $('#cname').text(data[i].name);
                $('#footer-cname-li').prepend(data[i].name)
            }
            //加载公司简介
            if(data[i].code == 'introduction'){
                $('#introduction-p').text(data[i].name);
            }
            //加载为什么选择我们
            if(data[i].code == 'choose'){
                $('#why-p').text(data[i].name);
            }
            //联系方式
            if(data[i].code == 'tel'){
                $('#footer-tel-a').append(data[i].name);
            }
            //地址
            if(data[i].code == 'address'){
                $('#footer-address-li').text(data[i].name);
            }
        }
    });
    //加载轮播图
    $.get('/users/findAllCarousel',function (data) {
        for(var i = 0; i <data.length;i++){
            if(i == 0){
                $('#carousel-ol').append("<li class='active' data-target='#mycarousel', data-slide-to=" + i + "></li>");
                $('#carousel-div').append("<div class='item active'><img class='carousel-img' src="+data[i].img_url +"><div class='container'>" +
                    " <div class='carousel-caption'>" +
                    "   <h1>" + data[i].article_tittle +"</h1>" +
                    "       <p>" +
                    "           <button class='btn btn-default'>查看详情</button>" +
                    "       </p>" +
                    " </div>" +
                    "" +
                    "</div></div>")
            }else{

                $('#carousel-ol').append("<li data-target='#mycarousel', data-slide-to=" + i + "></li>");
                $('#carousel-div').append("<div class=item><img class='carousel-img' src=" + data[i].img_url + ">" +
                    "   <div class='container'>" +
                    "       <div class='carousel-caption'>" +
                    "           <h1>" + data[i].article_tittle +"</h1>" +
                    "       <p>" +
                    "           <button class='btn btn-default'>查看详情</button>" +
                    "       </p>" +
                    "       </div>" +
                    "   </div>" +
                    "</div>")
            }
        }

    });
    //加载品牌
    $.get('/users/findAllBrand',function (data) {
        for(var i = 0; i < data.length;i++){
            $('#all-product').append("<div class='product-div'>1</div>");
        }
    })
});
