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
    $('.search3').kuCity();

    /* 修改密码 */
    $(".main .center .xiugai .btn input").click(function(){
        var value1=$(".xiugai p:nth-child(2) input").val();
        var value2=$(".xiugai p:nth-child(3) input").val();
        if(value1 != value2){
            $(".zhedang,.tishi").show();
            $(".tishi .shouji").empty();
            $(".tishi .shouji").html("两次密码不一致请重新输入");
        }
    });

    $(".tishi button").click(function(){
        $(".zhedang,.tishi").hide();
    });

    $(".main .center div.fr>p button").click(function(){
        zhengze();
    });

    function zhengze(){
        var name=$(".main .center div.fr form .name input");/* 姓名 */
        var pattern=/^[\u4E00-\u9FA5]{1,6}$/;/* 验证姓名 */
        var str=$(".main .center div.fr form .telephone input");/* 手机号 */
        var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;/* 验证手机号 */
        var idCar=$(".main .center div.fr form .shenfen input");/* 身份证号 */
        var regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/; /* 15位和18位身份证号码的正则表达式 */
        /*var zhizhao=$(".main .center div.fr form .zhizhao input");/* 营业执照 */
        /*var zhizhaoZ = /^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/;/* 营业执照 */
        var oInput=$(".main .center div.fr form p input");/* input标签 */
        var leixing=$(".main .center div.fr form .leixing select option:selected");/* 经营类型 */
        var ridan=$(".main .center div.fr form .ridan input");/* 日单 */
        var kedan=$(".main .center div.fr form .kedan input");/* 客单 */
        var number8 =/^\+?[1-9][0-9]*$//* 验证非零的正整数 */

        /* 验证是否为空 */
        for(var i=0;i<oInput.size();i++){
            var oVal=oInput.eq(i);
            if(oVal.val() == ""){
                oVal.css({border: '1px solid #f00'});
                
            }else{
                oVal.css({border: '1px solid #ddd'});
            }
        }

        /* 验证姓名 */
        if(!pattern.test(name.val())){
            name.css({border: '1px solid #f00'});
            return;
        }

        /* 验证手机号 */
        if(!ret.test(str.val())){
            str.css({border: '1px solid #f00'});
            return;
        }

        /* 验证身份证 */
        if(!regIdCard.test(idCar.val())){
            idCar.css({border: '1px solid #f00'});
            return;
        }

        /* 验证营业执照 */
        /*if(!zhizhaoZ.test(zhizhao.val())){
            zhizhao.css({border: '1px solid #f00'});
            return;
        }*/

        /* 经营类型 */
        if(leixing.val()=="请选择"){
            $(".main .center div.fr form .leixing select") .css({border: '1px solid #f00'});
            return;
        }else{
            $(".main .center div.fr form .leixing select") .css({border: '1px solid #ddd'});
        }

        /* 日单量 */
        if(!number8.test(ridan.val()) || !number8.test(kedan.val())){
            ridan.css({border: '1px solid #f00'});
            kedan.css({border: '1px solid #f00'});
            return;
        }

        if(!number8.test(kedan.val())){
            kedan.css({border: '1px solid #f00'});
            return;
        }
    }

    /* 图片上传 */
    $('#chooseImage,#chooseImage2,#chooseImage3,#chooseImage4').on('change',function(){
        var oStr=$(this).parent(".upload").children('strong');
        geshi($(this),oStr);
    });

    /* 图片上传 */
    $('#chooseImage5').on('change',function(){
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
        $('#cropedBigImg').css({
            width: '200px',
            height: '400px'
        });
        $('#cropedBigImg').attr('src',src);
    }); 

    function geshi(value,value1){
        var filePath = value.val(),         //获取到input的value，里面是文件的路径
            fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase();
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
        if(value != "#chooseImage5"){
            $(value1).empty();
            $(value1).prepend(filePath);
        }
    }
});



/* 点击图片上传 */
function fileSelect() {
    document.getElementById("chooseImage5").click(); 
}