$(function () {
    //加载品牌
    $.get('/users/findAllBrand',function (data) {
        for(var i = 0; i < data.length;i++){
            $('#products-bran-ul').append("<li><a href='#"+ data[i].id+"'>"+ data[i].classify_name +"</a></li>");
            $('#products-detail-div').append("<div class='products-item-div' id='" + data[i].id +"'><span>" + data[i].classify_name +"</span><hr><div class='product-items-div' branId='" + data[i].id+"'></div></div>'");

        }

        //加载品牌下商品
        $('.product-items-div').each(function () {
            var product_items_div = $(this);
            var branid =   $(this).attr('branId');
            $.get('/users/findProductByBranId?classify_id=' + branid,function (product) {
                for(var j = 0; j < product.length; j++){
                    product_items_div.append('<div class="product-item-div" productId=' + product[j].id + '></div>');
                }

            });

        })

    });



})