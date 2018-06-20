/*
    项目负责人：赵强
    项目创建日期:2018.4.17
    最新更新:2018.4.17
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间:
*/
function(){
    var pattern=/^[\u4E00-\u9FA5]{1,6}$/;/* 验证姓名 */
    var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;/* 验证手机号 */
    var email=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;/* 邮箱 */
    var regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;/* 15位和18位身份证号码的正则表达式 */
    var reg = /^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/;/* 营业执照 */
    var number1 =/^[0-9]*$//* 验证数字 */
    var number2 =/^\d{n}$//* 验证n位的数字 */
    var number3 =/^\d{n,}$//* 验证至少n位数字 */
    var number4 =/^\d{m,n}$//* 验证m-n位的数字 */
    var number5 =/^(0|[1-9][0-9]*)$//* 验证零和非零开头的数字 */
    var number6 =/^[0-9]+(.[0-9]{2})?$//* 验证有两位小数的正实数 */
    var number7 =/^[0-9]+(.[0-9]{1,3})?$//* 验证有1-3位小数的正实数 */
    var number8 =/^\+?[1-9][0-9]*$//* 验证非零的正整数 */
    var number9 =/^\-[1-9][0-9]*$//* 验证非零的负整数 */
    var number10 =/^\d+$//* 验证非负整数（正整数 + 0） */
    var number11 =/^((-\d+)|(0+))$//* 验证非正整数（负整数 + 0） */
    var number12 =/^.{3}$//* 验证长度为3的字符 */
    var number13 =/^[A-Za-z]+$//* 验证由26个英文字母组成的字符串 */
    var number14 =/^[A-Z]+$//* 验证由26个大写英文字母组成的字符串 */
    var number15 =/^[a-z]+$//* 验证由26个小写英文字母组成的字符串 */
    var number16 =/^[A-Za-z0-9]+$//* 验证由数字和26个英文字母组成的字符串 */
    var number17 =/^\w+$//* 验证由数字、26个英文字母或者下划线组成的字符串 */
    var number18 =/^[a-zA-Z]\w{5,17}$//* 验证用户密码 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。*/  
    var number19 =/^[\u4e00-\u9fa5],{0,}$//* 验证汉字 */
    var number20 =/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$//* 验证Email地址 */
    var number21 =/^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$//* 验证InternetURL */
    var number22 =/^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$//* 验证电话号码 */
    var number23 =/^\d{15}|\d{}18$//* 验证身份证号（15位或18位数字） */
    var number24 =/^(0?[1-9]|1[0-2])$//* 验证一年的12个月 */
    var number25 =/^((0?[1-9])|((1|2)[0-9])|30|31)$//* 验证一个月的31天 */
    var number26 =/^-?\d+$//* 整数 */
    var number27 =/^\d+(\.\d+)?$//* 非负浮点数（正浮点数 + 0） */
    var number27 =/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$//* 正浮点数 */
    var number28 =/^((-\d+(\.\d+)?)|(0+(\.0+)?))$//* 非正浮点数（负浮点数 + 0） */
    var number29 =/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$//* 负浮点数  */ 
    var number30 =/^(-?\d+)(\.\d+)?$//* 浮点数 */
}