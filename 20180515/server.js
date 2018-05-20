var http = require("http");
var url = require("url");
var count = 0;

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 获得请求path
    var objURL = url.parse(request.url);
    var path = objURL.pathname;
    
    // 对请求path进行判断，是为了防止：
    // chrome发请求时，会同时请求favicon.ico，相当于2次请求，导致计数每次增加2
    if(path==='/'){
        // 发送响应数据 当前计数
        response.end('Current Num: ' + count);
        count = count + 1;
    }

}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
