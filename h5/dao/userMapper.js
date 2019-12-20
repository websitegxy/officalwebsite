var user = {
    queryAll: 'select * from sys_user',
    queryById: 'select * from sys_user where userid = ?',
    queryAllDict: 'select id,code,name from sys_dict ',
    queryAllCarousel: 'select article_tittle,img_url from bas_cms_article where program_code = "SYLB" and status = "1" order by sort_no ',
    queryAllNews:'select article_tittle,img_url from bas_cms_article where program_code = "SYGG" and status = "1" order by sort_no ',
    queryAllBrand: 'select id,create_id,classify_name,img_url from base_classify where del_flag = "0" ',
    queryProductByBranId: 'select id,img_url from base_product where del_flag = "0" and base_classify_id = ?',
    queryProductItemById: 'select id,goods_name,base_classify_name,img_less,img_main from base_product where del_flag = "0" and id = ?',
    queryProductSizeById:'select diameter,thickness,height from base_product_detail where del_flag = "0" and product_id= ? '

};
module.exports = user;