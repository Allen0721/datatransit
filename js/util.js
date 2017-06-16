/**
 * Created by Administrator on 2017-5-24.
 */

exports.checkUserName = function (username) {
    if (username == undefined) { //未定义用户名返回长度为10的空字符串
        return '          ';
    }
    username = username.replace(/^\s+|\s+$/g,"");//去掉两头的空格
    var length = username.length;
    if (length >= 10) {//用户名长度大于或等于10直接返回
        return username;
    }
    for (var i = 0; i < 10 - length; i++) {//用户名长度不足10位时，用空字符串补足10位返回
        username += ' ';
    }
    return username;
}

exports.qq = function (username) {
    var qq = 0;
}

//16进制转换为6位二进制
exports.hexToSix = function(hex) {
    var a = '';
    switch (hex){
        case 0x30: a = '000000'; break;
        case 0x31: a = '000001'; break;
        case 0x32: a = '000010'; break;
        case 0x33: a = '000011'; break;
        case 0x34: a = '000100'; break;
        case 0x35: a = '000101'; break;
        case 0x36: a = '000110'; break;
        case 0x37: a = '000111'; break;
        case 0x38: a = '001000'; break;
        case 0x39: a = '001001'; break;
        case 0x3a: a = '001010'; break;
        case 0x3b: a = '001011'; break;
        case 0x3c: a = '001100'; break;
        case 0x3d: a = '001101'; break;
        case 0x3e: a = '001110'; break;
        case 0x3f: a = '001111'; break;
        case 0x40: a = '010000'; break;
        case 0x41: a = '010001'; break;
        case 0x42: a = '010010'; break;
        case 0x43: a = '010011'; break;
        case 0x44: a = '010100'; break;
        case 0x45: a = '010101'; break;
        case 0x46: a = '010110'; break;
        case 0x47: a = '010111'; break;
        case 0x48: a = '011000'; break;
        case 0x49: a = '011001'; break;
        case 0x4a: a = '011010'; break;
        case 0x4b: a = '011011'; break;
        case 0x4c: a = '011100'; break;
        case 0x4d: a = '011101'; break;
        case 0x4e: a = '011110'; break;
        case 0x4f: a = '011111'; break;
        case 0x50: a = '100000'; break;
        case 0x51: a = '100001'; break;
        case 0x52: a = '100010'; break;
        case 0x53: a = '100011'; break;
        case 0x54: a = '100100'; break;
        case 0x55: a = '100101'; break;
        case 0x56: a = '100110'; break;
        case 0x57: a = '100111'; break;
        case 0x60: a = '101000'; break;
        case 0x61: a = '101001'; break;
        case 0x62: a = '101010'; break;
        case 0x63: a = '101011'; break;
        case 0x64: a = '101100'; break;
        case 0x65: a = '101101'; break;
        case 0x66: a = '101110'; break;
        case 0x67: a = '101111'; break;
        case 0x68: a = '110000'; break;
        case 0x69: a = '110001'; break;
        case 0x6a: a = '110010'; break;
        case 0x6b: a = '110011'; break;
        case 0x6c: a = '110100'; break;
        case 0x6d: a = '110101'; break;
        case 0x6e: a = '110110'; break;
        case 0x6f: a = '110111'; break;
        case 0x70: a = '111000'; break;
        case 0x71: a = '111001'; break;
        case 0x72: a = '111010'; break;
        case 0x73: a = '111011'; break;
        case 0x74: a = '111100'; break;
        case 0x75: a = '111101'; break;
        case 0x76: a = '111110'; break;
        case 0x77: a = '111111'; break;
        default : a; break;
    }
    return a;
}

//源码转换反码，反码转换源码
exports.getTwosComplement = function (Bin) {
    var str1 = Bin.replace(/0/g, '2');
    var str2 = str1.replace(/1/g, '0');
    var str3 = str2.replace(/2/g, '1');
    return str3
}

exports.getNowFormatDate = function () {
    // return new Date().toLocaleString()  + ' ' + new Date().getMilliseconds();
    var myDate = new Date();
    var yyyy = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
    var mm = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    var dd = myDate.getDate(); //获取当前日(1-31)
    var hh = myDate.getHours(); //获取当前小时数(0-23)
    var MM = myDate.getMinutes(); //获取当前分钟数(0-59)
    var ss = myDate.getSeconds(); //获取当前秒数(0-59)
    var ms = myDate.getMilliseconds(); //获取当前毫秒数(0-999)
    // myDate.toLocaleDateString(); //获取当前日期
    return '' + yyyy + mm + dd + hh + MM + ss + ms ;
}

//负数补码转换反码
exports.twosComplementToComplement = function (str){
    str = str.split('');
    var a = '';
    for(var i  =  str.length - 1; i >= 0; i--){
        if(str[i] == 1){
            str[i] = 0;
            break;
        }else{
            str[i] = 1;
        };
    }
    for(var i in str){
        a += str[i];
    }
    return a;
}















