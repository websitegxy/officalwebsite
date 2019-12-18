$(function(){

    $("#nav-a5").click(function(){
        $('#contact').removeClass('none-div');
    });
    $(window).scroll(function () {
        var top1 = $("#home").offset().top;//a1位置
        var top2 = $("#product").offset().top;//a2位置
        var top3 = $("#new").offset().top;//a3位置
        var top4 = $("#introdution").offset().top;//a4位置
        var top5 = $("#myFooter").offset().top-70;//a5位置
        var scrollTop = $(window).scrollTop()+150;//获取当前滑动位置
        if($(window).scrollTop()>100){
            $(".header-one").hide();
            $(".navbar-fixed-top").removeClass("headerNav")
        }else {
            $(".header-one").show();
            $(".navbar-fixed-top").addClass("headerNav")
        }
        if(top2 > scrollTop && scrollTop > top1){
            $('.nav-a').removeClass('nav-active');
            $('#nav-a1').addClass('nav-active');
        }else if(top3 > scrollTop && scrollTop > top2){
            $('.nav-a').removeClass('nav-active');
            $('#nav-a2').addClass('nav-active');
        }else if(top4 > scrollTop && scrollTop > top3){
            $('.nav-a').removeClass('nav-active');
            $('#nav-a3').addClass('nav-active');
        }else if(scrollTop > top4 && scrollTop < top5){
            $('.nav-a').removeClass('nav-active');
            $('#nav-a4').addClass('nav-active');
        }
        else if(scrollTop > top5){
            $('.nav-a').removeClass('nav-active');
            $('#nav-a5').addClass('nav-active');
        }
    })
    $.get('/users/findAllDict',function (data) {
        for(var i = 0; i < data.length; i++){
            //加载公司名称
            // if(data[i].code == 'cname'){
            //     $('#cname').text(data[i].name);
            //     $('#footer-cname-li').prepend(data[i].name)
            // }
            //加载公司简介
            if(data[i].code == 'introduction'){
                $('#introduction-p').text(data[i].name);
            }
            //加载为什么选择我们
            if(data[i].code == 'choose'){
                $('#why-p').text(data[i].name);
            }
            // //联系方式
            // if(data[i].code == 'tel'){
            //     $('#footer-tel-a').append(data[i].name);
            // }
            // //地址
            // if(data[i].code == 'address'){
            //     $('#footer-address-li').text(data[i].name);
            // }
        }
    });
    //加载轮播图
    $.get('/users/findAllCarousel',function (data) {
        for(var i = 0; i <data.length;i++){
            if(i == 0){
                $('#carousel-ol').append("<li class='active' data-target='#mycarousel', data-slide-to=" + i + "></li>");
                $('#carousel-div').append("<div class='item active'><img class='carousel-img' src="+data[i].img_url +"><div class='container'>" +
                    " <div class='carousel-caption' style='right:10%;left:10%;'>" +
                    "   <h1>" + data[i].article_tittle +"</h1>" +
                    "       <p style='text-align: right;'>" +
                    "           <button class='btn btn-default' style='background: #e63e0d;border: none;padding: 4px 5px;color: #fff;font-size: 0.9vw;'>查看详情</button>" +
                    "       </p>" +
                    " </div>" +
                    "" +
                    "</div></div>")
            }else{

                $('#carousel-ol').append("<li data-target='#mycarousel', data-slide-to=" + i + "></li>");
                $('#carousel-div').append("<div class=item><img class='carousel-img' src=" + data[i].img_url + ">" +
                    " <div class='carousel-caption' style='right:10%;left:10%;'>" +
                    "   <h1>" + data[i].article_tittle +"</h1>" +
                    "       <p style='text-align: right;'>" +
                    "           <button class='btn btn-default' style='background: #e63e0d;border: none;padding: 4px 5px;color: #fff;font-size: 0.9vw;'>查看详情</button>" +
                    "       </p>" +
                    " </div>" +
                    "" +
                    "</div></div>")
            }
        }

    });
    //加载品牌
    $.get('/users/findAllBrand',function (data) {
        for(var i = 0; i < data.length;i++){
            $('#all-product').append("<div class='product-div' branid='"+ data[i].id+"'><img class='logo-div' src='../img/branlog.png'/></div>");
        }
        //品牌点击事件
        $(".product-div").click(function () {
           window.location.href= '/product?id='+$(this).attr('branid');
        });
    });
    // 放大事件
    $("#bigDiv").unbind("click").bind("click",function(){
        if($("#greyDiv").hasClass('smallStyle')){
            $("#greyDiv").removeClass("smallStyle");
            $("#greyDiv").addClass("bigStyle");
            $("#blackDiv").css("z-index",'-1')
        }else{
            $("#greyDiv").removeClass("bigStyle");
            $("#greyDiv").addClass("smallStyle");
            $("#blackDiv").css("z-index",'1')
        }

    });
   
});

