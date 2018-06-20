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

    var phone = $('.iphone').html();
    var mphone = phone.substring(0, 3) + '****' + phone.substring(7);
    $('.iphone').html(mphone);

    $(".main .center .top button").click(function(){
        zhengze();
    });

    $(".tishi button").click(function(){
        $(".zhedang,.tishi,.shouji").hide();
    });

    /* 新增员工 */
    $(".down .title p:last-child").click(function(){
        $(".zhedang,.xinzengtan").show();
    });

    /* 关闭新增员工 */
    $(".xinzengtan>p input:last-child").click(function(){
        $(".zhedang,.xinzengtan").hide();
    });

    /* 正则验证 */
    function zhengze(){
        var name=$(".main .center .top .name input").val();/* 姓名 */
        var pattern=/^[\u4E00-\u9FA5]{1,6}$/;/* 验证姓名 */
        var str=$(".main .center .top .telephone input").val();/* 手机号 */
        console.log(str);
        var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;/* 验证手机号 */
        /* 验证手机号 */
        if(ret.test(str)){
        }else if(str==""){
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>电话号不能为空!</span>");
            return;
        }else{
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>电话号输入有误!</span>");
            return;
        }

        /* 验证姓名 */
        if(pattern.test(name)){
        }else if(name==""){
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>姓名不能为空!</span>");
            return;
        }else{
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>姓名输入有误!</span>");
            return;
        }
    }
});