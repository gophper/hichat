module.exports = function (app, urlencodedParser) {
	var util = require('../util');
	/**
	 * 注册
	 */
	app.post('/register', urlencodedParser, function (req, res) {
		var conn = util.db();
		var addSql = 'INSERT INTO tbuser(sEmail,sPassword,sNickName) VALUES(?,?,?)';
		var addSqlParams = [req.body.sEmail, req.body.sPassword, req.body.sNickName];
		console.log(req.session);
		conn.query(addSql, addSqlParams, function (err, result) {
			if (err) {
				err && util.log('error', err);
				util.responseJson(res, -1, '系统繁忙，请稍后再试');
			} else {
				req.session.userInfo = {
					iUserId: result.insertId,
					sEmail: req.body.sEmail,
					sNickName: req.body.sNickName
				};
				util.responseJson(res, 0, '注册成功!');
			}
		});
		conn.end();
	});
	/**
	 * 登录
	 */
	app.post('/login', urlencodedParser, function (req, res) {
		if (typeof req.session.userInfo !== 'undefined') {
			util.responseJson(res, 0, '已经登录');
		}
		var conn = util.db();
		console.log(req.body);
		var addSql = 'select * from tbuser where sEmail=?';
		conn.query(addSql, [req.body.sEmail], function (err, result) {
			if (err) {
				util.log('error', err + addSql);
				util.responseJson(res, -1, '系统繁忙，请稍后再试');
				return;
			} else if (result.length <= 0) {
				util.responseJson(res, -1, '邮箱有误');
				return;
			}

			var frdInfo = result[0];
			if (frdInfo['sPassword'] == req.body.sPassword) {
				req.session.userInfo = {
					iUserId: frdInfo.iUserId,
					sEmail: frdInfo.sEmail,
					sNickName: frdInfo.sNickName
				};
				delete frdInfo['sPassword'];
				delete frdInfo['sSalt'];
				util.responseJson(res, 0, '登录成功',frdInfo);
				return;
			} else {
				util.responseJson(res, -1, '密码有误');
				return;
			}

		});
		conn.end();
	});
	/**
	 * 添加好友
	 */
	app.post('/friend/add', urlencodedParser, function (req, res) {
		var async = require('async');
		console.time('waterfall');
		async.waterfall([
			function (callback) {
				if (typeof req.session.userInfo === 'undefined' || typeof req.session.userInfo.iUserId === 'undefined') {
					util.responseJson(res, -2, '尚未登录！');
					return;
				}
				var conn = util.db();
				var querySql = 'select * from tbuser where sEmail=?';
				conn.query(querySql, [req.body.sEmail], function (err, result) {
					var result = result ? result : [], retObj = null;
					if (err) {
						util.log('error', err);
						util.responseJson(res, -11, '系统繁忙，请稍后再试');
						callback(err, null);
					} else if (result.length <= 0) {
						util.responseJson(res, -13, '您要查找的用户不存在！');
						callback('您要查找的用户不存在！', null);
					} else {
						retObj = result[0];
						callback(null, retObj);
					}

				});
				conn.end();
			},
			function (frdInfo, callback) {
				console.log(frdInfo);
				var addSql = "INSERT INTO tbfriend(ibelongTo,iUserId) VALUES(?,?)";
				var addSqlParams = [req.session.userInfo.iUserId, frdInfo.iUserId];
				console.log(addSqlParams);
				var conn = util.db();
				conn.query(addSql, addSqlParams, function (err, result) {
					if (err) {
						err && util.log('error', err);
						util.responseJson(res, -12, '添加好友失败!');
					}
					callback(err, frdInfo);
				});
				conn.end();
			},
			function (frdInfo, callback) {
				var sql = 'select * from tbuser u  where u.iUserId=?';
				var conn = util.db();
				conn.query(sql, [frdInfo.iUserId], function (err, result) {
					var result = result ? result : [], retObj = null;
					if (err) {
						util.log('error', err);
						util.responseJson(res, -12, '系统繁忙，请稍后再试');
						callback(err, null);
					} else {
						if (result.length <= 0) {
							util.responseJson(res, -13, '该用户不存在');
							callback(null, null);
						} else {
							util.responseJson(res, 0, '添加好友成功!', result[0]);
							callback(null, null);
						}
					}
				});
				conn.end();
			}
		], function (error, result) {
			console.log('error: ' + error);
			console.log('result: ' + result);
			console.timeEnd('waterfall');
		});
	});
	/**
	 * 拉取好友列表
	 */
	app.post('/friend/list', urlencodedParser, function (req, res) {
		if (typeof req.session.userInfo === 'undefined' || typeof req.session.userInfo.iUserId === 'undefined') {
			util.responseJson(res, -2, '尚未登录！');
			return;
		}
		var conn = util.db();
		var addSql = 'select u.iUserId iUserId,sNickName,sEmail,sPorTrait,f.sDesc,sRemark,sLastMsg,iIsActive '+
			'from tbuser u inner join tbfriend  f on  u.iUserId=f.iUserId where f.ibelongTo=?';
		conn.query(addSql, [req.session.userInfo.iUserId], function (err, result) {
			if (err) {
				util.log('error', err + addSql);
				util.responseJson(res, -11, '系统繁忙，请稍后再试');
				return;
			} else if (result.length <= 0) {
				util.responseJson(res, -13, '暂无好友');
				return;
			};

			util.responseJson(res, 0, '', result);
			return;
		});
		conn.end();
	});
	app.post('/del', urlencodedParser, function (req, res) {
		res.redirect('/api/' + req.body.act + '/del?id=' + req.body.id);
	});
	app.get('/friend/del', urlencodedParser, function (req, res) {
		if (typeof req.session.userInfo === 'undefined' || typeof req.session.userInfo.iUserId === 'undefined') {
			util.responseJson(res, -2, '尚未登录！');
			return;
		}
		if (!req.query.id) {
			util.responseJson(res, -16, '参数异常');
			return;
		}
		var conn = util.db();
		var sql = 'delete from tbfriend where iUserId=? and ibelongTo=?';
		conn.query(sql, [req.query.id, req.session.userInfo.iUserId], function (err, result) {
			if (err) {
				util.log('error', err);
				util.responseJson(res, -11, '系统繁忙，请稍后再试');
				return;
			}
			util.responseJson(res, 0, '删除成功');
			return;
		});
		conn.end();
	});
}
