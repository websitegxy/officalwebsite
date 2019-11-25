$.get('/users/findAllDict',function (data) {
    for(var i = 0; i < data.length; i++){
        //加载公司名称
        if(data[i].code == 'cname'){
            $('#footer-cname-li').prepend(data[i].name)
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