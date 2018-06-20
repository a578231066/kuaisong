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
    $(".main .down dd").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $(".main .down>p button").click(function(){
        var oVal=$(".main .down li input");
        console.log(oVal);
        if(oVal.val()<=1000){
            $(oVal).css({border: '1px solid #f00'});
        }else{
            $(oVal).css({border: '1px solid #ddd'});
        }
    });
});