$(function(){
    $('.nav-a').click(function () {
        $('.nav-a').removeClass('nav-active');
        $(this).addClass('nav-active');
    });
    $.get('/users/findAllDict',function (data) {
        for(var i = 0; i < data.length; i++){
            if(data[i].code == 'cname'){
                $('#cname').text(data[i].name);
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

    })
});
