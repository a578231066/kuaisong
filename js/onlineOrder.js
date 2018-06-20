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
    var h=$(document).height();
    $(".zhedang").height(h+"px");

    
    /* 城市选择 */
    $('.search').kuCity();

    $(".main .center .down div dd").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    /* 点击加号 */
    $(".main .center .top dd.jiajian em:last-child").click(function(){
        var oVal=$(this).parent("div").children('input').val();
        var oVal1=$(this).parent("div").children('input');
        var i=oVal;
        i++;
        oVal1.val(i);
        $(".main .center .top dd.jiajian em:first-child").removeClass('disabled');
    });

    /* 点击减号 */
    $(".main .center .top dd.jiajian em:first-child").click(function(){
        var oVal=$(this).parent("div").children('input').val();
        var oVal1=$(this).parent("div").children('input');
        var i=oVal;
        if(i<=1 && oVal<=1){
            oVal1.val("1");
            $(this).addClass('disabled');
        }else{
            $(this).removeClass('disabled');
            i--;
            oVal1.val(i);
        }
    });

    $(".main .center .top dd.time div button").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});