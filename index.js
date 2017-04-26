//首先创建HTTP URL PATH模块
var http=require('http');
var url=require('url');
var path=require('path');

//使用http模块创建服务器,并指定响应请求函数
var webServer=http.createServer(function(req,res){
	//获取请求路径
	var pathname=url.parse(req.url).pathname;
	if(pathname==='/'){
		req.setHeader("Content-Type","text/html");
		req.end("哈哈，你请求的的根目录");
	}
});
webServer.listen(7178);
