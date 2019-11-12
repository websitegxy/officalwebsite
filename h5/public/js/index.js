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
    $.get('/users/findAllCarousel',function (data) {
        for(var i = 0; i <data.length;i++){

        }

    })
});
