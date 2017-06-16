/**
 * Created by Administrator on 2017-5-24.
 */

var fs = require('fs');
var config = require('../config');
var bunyan = require('bunyan');
var path = '../logs/filewrite_' + new Date().toLocaleDateString() + '.log';
var logger = bunyan.createLogger({
    name: 'filewrite',
    streams: [{
        level: 'info',
        type: 'rotating-file',
        path: path,
        period: '1d', // daily rotation
        count: 3650 // keep 3650 back copies
    }]
});
exports.writeFile = function (filename,filedata) {
    fs.writeFile(config.filepath + filename + '.xml', filedata, function(err){
        if (err) {
            logger.info('文件写入失败：' + err);
        };
        
        
    });
};
