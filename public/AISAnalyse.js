/**
 * Created by Administrator on 2017-5-31.
 */
/**
 * Created by Administrator on 2017-5-27.
 */
var util = require('../js/util');
exports.analyse = function (messages,callback){
    console.log(messages);
    if(messages.charAt(7) == 1){//传输该条消息所需表达句为一条，暂不考虑多条
        //获取消息体
        var msg = messages.substring(15,messages.length - 5);
        var buf = new Buffer(msg);
        var b = '';
        for(var i in buf){
            b += util.hexToSix(buf[i]);
        }
       if( msg.charAt(msg.length - 4) == 0){//0*XX没有补位的消息
           msgBuild(b,callback);
       }
    }
}
   // !ABVDM,1,1,9,B,169FCb`P187mR?R;cGhm:gwf08P5,0*29
    
function msgBuild(msg,callback) {
    var jsonObj = {};
    var msgid = msg.substr(0,6);//消息ID
    var forward = msg.substr(6,2);//转发指示符
    var userid = msg.substr(8,30);//用户 ID

    if(0 < parseInt(msgid,2) < 4 ){ //消息1,2,3,为移动台定期发出的位置报告
        var naviStatus = msg.substr(38,4);//导航状态
        var spin = msg.substr(42,8);//旋转速率
        var sog = msg.substr(50,10);//SOG
        var local = msg.substr(60,1);//位置准确度
        var lng = msg.substr(61,28);//经度
        var lat = msg.substr(89,27);//纬度
        var cog = msg.substr(116,12);//COG
        var heading = msg.substr(128,9);//实际航向
        var time = msg.substr(137,6);//时戳
        var spec = msg.substr(143,2);//特定操纵指示符
        var spare = msg.substr(145,3);//备用
        var raim = msg.substr(148,1);//RAIM 标志
        var corrStatus = msg.substr(149,19);//通信状态

        jsonObj = {
            msgType : parseInt(msgid,2),
            forward : parseInt(forward,2),
            userid : parseInt(userid,2),
            naviStatus : parseInt(naviStatus,2),
            spin : parseInt(spin,2),
            sog : parseInt(sog,2)/10,
            local : parseInt(local,2),
            lng : parseInt(lng,2)/600000,
            lat : parseInt(lat,2)/600000,
            cog : parseInt(cog,2)/10,
            heading : parseInt(heading,2),
            timeStamp : parseInt(time,2),
            spec : parseInt(spec,2),
            spare : parseInt(spare,2),
            raim : parseInt(raim,2),
            corrStatus : parseInt(corrStatus,2)
        }

        if(spin == '10000000'){
            jsonObj.spin = -128;
        }else if(spin.charAt(0) == 1){
            spin = util.getTwosComplement(util.twosComplementToComplement(spin));
            jsonObj.spin = '-' + spin;
        }

    }else if(parseInt(msgid,2) == 4 || parseInt(msgid,2) == 11){//消息4为基站发送的UTC和位置报告，消息11为移动台发送的UTC和位置相应
        var year = msg.substr(38,14);//UTC年
        var month = msg.substr(52,4);//UTC月
        var day = msg.substr(56,5);//UTC天
        var hour = msg.substr(61,5);//UTC时
        var minute = msg.substr(66,6);//UTC分
        var second = msg.substr(72,6);//UTC秒
        var localacc = msg.substr(78,1);//位置准确度
        var lng = msg.substr(79,28);//经度
        var lat = msg.substr(107,27);//纬度
        var eLocation = msg.substr(134,4);//电子定位装置类型
        var spare = msg.substr(138,10);//备用
        var raim = msg.substr(148,1);//RAIM 标志
        var corrStatus = msg.substr(149,19);//通信状态

        jsonObj = {
            msgType : parseInt(msgid,2),
            forward : parseInt(forward,2),
            userid : parseInt(userid,2),
            year : parseInt(year,2),
            month : parseInt(month,2),
            day : parseInt(day,2)/10,
            hour : parseInt(hour,2),
            minute : parseInt(minute,2),
            second : parseInt(second,2),
            localacc : parseInt(localacc,2),
            lng : parseInt(lng,2)/600000,
            lat : parseInt(lat,2)/600000,
            eLocation : parseInt(eLocation,2),
            spare : parseInt(spare,2),
            raim : parseInt(raim,2),
            corrStatus : parseInt(corrStatus,2)
        }
    }else {
        return callback({
            status:'error'
        });
    }

    if(lng.charAt(0) == 1){
        lng = util.getTwosComplement(lng);
        jsonObj.lng = '-' + parseInt(lng,2)/600000;
    }
    if(lat.charAt(0) == 1){
        lat = util.getTwosComplement(lat);
        jsonObj.lat = '-' + parseInt(lat,2)/600000;
    }

    JSON.stringify(jsonObj);
    console.log(JSON.stringify(jsonObj));
    callback(JSON.stringify(jsonObj));
}






