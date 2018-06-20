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
    $(".main div.fr dd").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    /* tab选项卡 */
    $("#news li").on('click', function(){
        var num=$(this).index();
        //tabs部分
        $("#news li").removeClass("on");//移除类名   
        $(this).addClass("on");//添加类名

        //cons内容部分
        $("#news .cons div").removeClass("on");
        $("#news .cons div").eq(num).addClass("on");
        console.log(num);
    });
});