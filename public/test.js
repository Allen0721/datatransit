/**
 * Created by Administrator on 2017-5-27.
 */
var util = require('../js/util');

var a = '15MgK45P3@G?fl0E`JbR0OwT0@MS';
var buf = new Buffer(a);
var b = '';
for(var i in buf){
    b += util.hexToSix(buf[i]);
}
var c = b.substr(0,6);//消息ID
var d = b.substr(6,2);//转发指示符
var e = b.substr(8,30);//用户 ID
var f = b.substr(38,4);//导航状态
var g = b.substr(42,8);//旋转速率
var h = b.substr(50,10);//SOG
var j = b.substr(60,1);//位置准确度
var k = b.substr(61,28);//经度
var l = b.substr(89,27);//纬度
var m = b.substr(116,12);//COG
var n = b.substr(128,9);//实际航向
var o = b.substr(137,6);//时戳
var p = b.substr(143,2);//特定操纵指示符
var q = b.substr(145,3);//备用
var i = b.substr(148,1);//RAIM 标志
var s = b.substr(149,19);//通信状态


// var c = b.substring(0,6);//消息ID
// var d = b.substring(6,8);//转发指示符
// var e = b.substring(8,38);//用户 ID
// var f = b.substring(38,42);//导航状态
// var g = b.substring(42,50);//旋转速率
// var h = b.substring(50,60);//SOG
// var j = b.substring(60,61);//位置准确度
// var k = b.substring(61,89);//经度
// var l = b.substring(89,116);//纬度
// var m = b.substring(116,128);//COG
// var n = b.substring(128,137);//实际航向
// var o = b.substring(137,143);//时戳
// var p = b.substring(143,145);//特定操纵指示符
// var q = b.substring(145,148);//备用
// var i = b.substring(148,149);//RAIM 标志
// var s = b.substring(149,168);//通信状态

console.log('消息ID:' + parseInt(c,2));
console.log('转发指示符:' + parseInt(d,2));
console.log('用户 ID:' + parseInt(e,2));
console.log('导航状态:' + parseInt(f,2));
console.log('旋转速率:' + parseInt(g,2));
console.log('SOG:' + parseInt(h,2)/10);
console.log('位置准确度:' + parseInt(j,2));
console.log('经度:' + parseInt(k,2)/600000);
console.log('纬度:' + parseInt(l,2)/600000);
console.log('COG:' + parseInt(m,2));
console.log('实际航向:' + parseInt(n,2));
console.log('时戳:' + parseInt(o,2));
console.log('特定操纵指示符:' + parseInt(p,2));
console.log('备用:' + parseInt(q,2));
console.log('RAIM 标志:' + parseInt(i,2));
console.log('通信状态:' + parseInt(s,2));
console.log(b.length);
console.log(b);

console.log(k);

console.log(parseInt('0100011000001000100101111111',2)/600000);
console.log(parseInt('0011111110110100100111111011',2)/600000);
console.log(parseInt('1100000001001011011000000101',2)/600000);
// 0011111110110100100111111011
// 1100000001001011011000000101









