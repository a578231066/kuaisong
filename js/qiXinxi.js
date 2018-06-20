

$(function(){

    /* 点击注册验证 */
    $(".main .down li.btn button").click(function(){
        zhengze();
    });

    /* 发送验证码 */
    /* 验证码 */
    $(".main .down li.yzm button").click(function(){
        var str=$(".main .down li.yzm input");/* 手机号 */
        var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;/* 验证手机号 */
        /* 验证手机号 */
        if(ret.test(str.val())){
            str.css({border: '1px solid #ddd'});
        }else if(str.val()==""){
            str.css({border: '1px solid #f00'});
            return;
        }else{
            str.css({border: '1px solid #f00'});
            return;
        }
        yanzhengma();
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

    function yanzhengma(){
        var i=60;
        setInterval(function(){
            --i;
            $(".main .down li.yzm button").empty();
            $(".main .down li.yzm button").html(i+"秒后重新发送");
            $(".main .down li.yzm button").attr("disabled",true);
            if(i<=0){
                $(".main .down li.yzm button").empty();
                $(".main .down li.yzm button").attr("disabled",false);
                $(".main .down li.yzm button").html("重新发送验证码");
            }
        },1000);
    }

    function zhengze(){
        var dizhi=$(".main .down li.dizhi input");/* 公司地址 */
        var name=$(".main .down li.name input");/* 姓名 */
        var pattern=/^[\u4E00-\u9FA5]{1,6}$/;/* 验证姓名 */
        var oEmail=$(".main .down li.email input");/* 邮箱 */
        var email=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;/* 邮箱 */
        var str=$(".main .down li.yzm input");/* 手机号 */
        var oYzm=$(".main .down li.yzm1 input");/* 验证码 */
        /* 公司地址 */
        if(dizhi.val()==""){
            dizhi.css({border: '1px solid #f00'});
            return;
        }else{
            dizhi.css({border: '1px solid #ddd'});
        }

        /* 验证姓名 */
        if(pattern.test(name.val())){
            name.css({border: '1px solid #ddd'});
        }else if(name.val()==""){
            name.css({border: '1px solid #f00'});
            return;
        }else{
            name.css({border: '1px solid #f00'});
            return;
        }

        /* 验证邮箱 */
        if(email.test(oEmail.val())){
            oEmail.css({border: '1px solid #ddd'});
        }else if(oEmail.val()==""){
            oEmail.css({border: '1px solid #f00'});
            return;
        }else{
            oEmail.css({border: '1px solid #f00'});
            return;
        }

        /* 验证手机号 */
        if(str.val()==""){
            str.css({border: '1px solid #f00'});
            return;
        }else{
            str.css({border: '1px solid #ddd'});
        }

        /* 验证码 */
        if(oYzm.val()==""){
            oYzm.css({border: '1px solid #f00'});
            return;
        }else{
            oYzm.css({border: '1px solid #ddd'});
        }
    }
});

/* 点击图片上传 */
function fileSelect() {
    document.getElementById("chooseImage").click(); 
}
