var user = {
    queryAll: 'select * from sys_user',
    queryById: 'select * from sys_user where userid = ?',
    queryAllDict: 'select id,code,name from sys_dict ',
    queryAllCarousel: 'select article_tittle,img_url from bas_cms_article where program_code = "SYLB" and status = "1" order by sort_no ',
    queryAllBrand: 'select create_id,classify_name,img_url from base_classify where del_flag = "0" '
};
module.exports = user;