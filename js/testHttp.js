/*
/!**
 * Created by Administrator on 2017-6-1.
 *!/
var http = require('http');
// http.get('http://www.aggsoft.com/cgi-bin/ais/decode_ais.pl?src_message=%20AIVDM,1,1,,A,15MgK45P3@G?fl0E%60JbR0OwT0@MS,0*4E', function (json, a, v) {
//     var a = 2;
// })
var querystring = require("querystring");
var postData = querystring.stringify({
    src_message : '%20AIVDM,1,1,,A,15MgK45P3@G?fl0E%60JbR0OwT0@MS,0*4E'
});

var options = {
    hostname: 'www.aggsoft.com',
    port: 80,
    path: '/cgi-bin/ais/decode_ais.pl',
    method: 'GET',
    headers: {
        // 'Accept':'application/json, text/javascript, *!/!*; q=0.01',
        // 'Connection':'keep-alive',
        // 'Accept-Encoding':'gzip, deflate, sdch',
        // 'DNT':1,
        'Content-Type': 'text/plain; charset=UTF-8'/!*'application/x-www-form-urlencoded'*!/,
        'Content-Length': Buffer.byteLength(postData),
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36',
        // 'X-Requested-With':'XMLHttpRequest',
        // 'Cookie':'__utmzagg=3PCp8p; __utmt=1; __utma=1.1085329281.1495855508.1496200071.1496284662.4; __utmb=1.4.10.1496284662; __utmc=1; __utmz=1.1495855508.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)'
    }
};

var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('响应主体: ' + chunk);
    });
    res.on('end', function () {
        console.log('响应中已无数据。');
    });
});


req.on('error', function(e){
    console.log('请求遇到问题: ');
});

// 写入数据到请求主体
req.write(postData);
req.end();





*/


// var a = '[{\"gpslat\":23.480119689662526,\"gpslng\":111.35848643168548},{\"gpslat\":23.48012950479835,\"gpslng\":111.3588663539585}]';
// a = a.replace(/\\/g,"");
// console.log();
// console.log(a);

var sqls = ['select * frmhh  b_edfaf where f = to_dte("2015-02-30 15:25:35","yyyy-mm-dd hh24:miss") ','select * frmhh  b_edfaf where f = to_date("2015-02-30 15:25:35","yyyy-mm-dd hh24:mi:ss")'];
for(var i in sqls ){
    // console.log(sqls[i].replace(/to_date\(/g,''));
    sqls[i] = sqls[i].replace(/to_date\(/g,'');

    sqls[i] = sqls[i].replace(/\,\"yyyy-mm-dd hh24:mi:ss\"\)/g,'');
    console.log(sqls[i]);

}

