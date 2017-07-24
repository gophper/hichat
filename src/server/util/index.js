exports.responseJson = function(res,ret,msg,data) {
	if(res.connnect_){
		res.connnect_.end();
	}
	res.end(JSON.stringify({'ret':ret,'msg':msg,data,data}));
}

exports.db = function (){
	var db  = require('mysql');
	var conn = db.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		port: '3307',
		database: 'hichat',
	});
	conn.connect();
	return conn;
}
exports.log = function (level,err) {
	console.log("error level:"+level+"|error obj:"+JSON.stringify(err));
}
exports.authorize = function(req, res) {
	if (typeof req.session.userInfo.iUserId === 'undefined') {
		exports.responseJson(res, -1, '尚未登录！');
	}
}
