var user = {
    queryAll: 'select * from sys_user',
    queryById: 'select * from sys_user where userid = ?',
    queryAllDict: 'select id,code,name from sys_dict ',
    queryAllCarousel: 'select article_tittle,img_url from bas_cms_article where program_code = "SYLB" order by sort_no '
};
module.exports = user;