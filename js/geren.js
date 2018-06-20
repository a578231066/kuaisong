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
    $(".main").height(h-140+"px");
    $(".zhedang").height(h+"px");

    /* 个人注册 */
    $(".geren div form> button").click(function(){
        geren();
        return false;
    });

    $(".geren div form h6 input").click(function(){
        window.location.href="login.html";
        return false;
    });

    /* 关闭弹出层 */
    $(".tishi button,.zhedang").click(function(){
        $(".zhedang,.tishi").hide();
    });

    /* 验证码 */
    $("div.geren p.yzm button").click(function(){
        var str=$("div.on p:first-child input").val();/* 手机号 */
        var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;/* 验证手机号 */
        if(ret.test(str)){
        }else if(str==""){
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>电话号不能为空!</span>");
            return false;
        }else{
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>电话号输入有误!</span>");
            return false;
        }
        yanzhengma();
        return false;
    });

    /* 验证码 */
    function yanzhengma(){
        var i=60;
        setInterval(function(){
            --i;
            $("div p.yzm button").empty();
            $("div p.yzm button").html(i+"秒后重新发送");
            $("div p.yzm button").attr("disabled",true);
            if(i<=0){
                $("div p.yzm button").empty();
                $("div p.yzm button").attr("disabled",false);
                $("div p.yzm button").html("重新发送验证码");
            }
        },1000);
    }

    /* 个人用户注册 */
    function geren(){
        var str=$(".geren div p:first-child input").val();/* 手机号 */
        var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;/* 验证手机号 */
        var oVal1=$(".geren div p:nth-child(2) input").val();/* 密码 */
        var oVal2=$(".geren div p:nth-child(3) input").val();/* 确认密码 */
        var oVal3=$(".geren div p.yzm input").val();/* 验证码 */
        /* 验证手机号 */
        if(ret.test(str)){
        }else if(str==""){
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>电话号不能为空!</span>");
            return false;
        }else{
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>电话号输入有误!</span>");
            return false;
        }
        /* 验证密码 */
        if(oVal1 == ""){
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>密码不能为空!</span>");
            return false;
        }else if(oVal1 != oVal2){
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>两次密码不一致!</span>");
            return false;
        }
        /* 验证码 */
        if(oVal3 == ""){
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>验密码不能为空!</span>");
            return false;
        }

        window.location.href="login.html"
    }
});