/*
    项目负责人：赵强
    项目创建日期:2018.4.17
    最新更新:2018.4.17
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间:
*/
$(function(){
    var phone = $('.iphone').html();
    var mphone = phone.substring(0, 3) + '****' + phone.substring(7);
    $('.iphone').html(mphone);   
});