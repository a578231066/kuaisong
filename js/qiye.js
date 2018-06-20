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

    /* 企业注册 */
    $(".qiye div form>button").click(function(){
        qiye();
        return false;
    });

    $(".qiye div form h6 input").click(function(){
        window.location.href="login.html";
        return false;
    });

    /* 图片上传 */
    $('#chooseImage').on('change',function(){
        var filePath = $(this).val(),         //获取到input的value，里面是文件的路径

            fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase(),
            src = window.URL.createObjectURL(this.files[0]); //转成可以在本地预览的格式
        // 检查是否是图片
        if( !fileFormat.match(/.png|.jpg/) ){
            alert('上传错误,文件格式必须为：png/jpg');
            return;
        }
        var iMaxFilesize = 2097152; //2M
        var oFile = document.getElementById('chooseImage'); //读取文件
        if (oFile.size > iMaxFilesize) { 
            alert("图片大小不能超过2M"); 
            return; 
        } 
        $('#cropedBigImg').attr('src',src);
    }); 

    $("div.qiye p.yzm button").click(function(){
        var str=$("div.on p.telephone input").val();/* 手机号 */
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

    /* 关闭弹出层 */
    $(".tishi button,.zhedang").click(function(){
        $(".zhedang,.tishi").hide();
    });

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

    /* 企业用户注册 */
    function qiye(){
        var name=$(".qiye .name input").val();/* 姓名 */
        var pattern=/^[\u4E00-\u9FA5]{1,6}$/;/* 验证姓名 */
        var oEmail=$(".email input").val();
        var email=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;/* 邮箱 */
        var str=$(".telephone input").val();/* 手机号 */
        var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;/* 验证手机号 */
        var oVal3=$(".qiye .yzm input").val();/* 验证码 */
        /* 验证姓名 */
        if(pattern.test(name)){
        }else if(name==""){
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>姓名不能为空!</span>");
            return false;
        }else{
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>姓名输入有误!</span>");
            return false;
        }

        /* 验证邮箱 */
        if(email.test(oEmail)){
        }else if(oEmail==""){
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>邮箱不能为空!</span>");
            return false;
        }else{
            $(".zhedang,.tishi,.shouji").show();
            $(".shouji").empty();
            $(".shouji").append("<span>邮箱输入有误!</span>");
            return false;
        }

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

/* 点击图片上传 */
function fileSelect() {
    document.getElementById("chooseImage").click(); 
}