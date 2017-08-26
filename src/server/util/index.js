exports.responseJson = function(res,ret,msg,data) {
	if(res.connnect_){
		res.connnect_.end();
	}
	res.end(JSON.stringify({'ret':ret,'msg':msg,data,data}));
}

exports.db = function (){
	var db  = require('mysql');
	var conn = db.createConnection({
<<<<<<< HEAD
		host     : '192.168.1.105',
=======
		host     : 'localhost',
>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
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
<<<<<<< HEAD
exports.EVN = 'DEV';

exports.dateFormat = function (this_,fmt) { //author: meizz
	var o = {
		"M+": this_.getMonth() + 1, //月份
		"d+": this_.getDate(), //日
		"h+": this_.getHours(), //小时
		"m+": this_.getMinutes(), //分
		"s+": this_.getSeconds(), //秒
		"q+": Math.floor((this_.getMonth() + 3) / 3), //季度
		"S": this_.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this_.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}
exports.escape = function (str) {
	return str.replace(',',';').replace("'","\\'").replace('"','\\"');
}
=======
>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
