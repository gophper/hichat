module.exports = function (app, urlencodedParser) {
	var util = require('../util');
	/**
	 * 注册
	 */
	app.post('/register', urlencodedParser, function (req, res) {
		var conn = util.db();
		var sqlStr = 'INSERT INTO tbuser(sEmail,sPassword,sNickName) VALUES(?,?,?)';
		var sqlStrParams = [req.body.sEmail, req.body.sPassword, req.body.sNickName];
		console.log(req.session);
		conn.query(sqlStr, sqlStrParams, function (err, result) {
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
		var sqlStr = 'select * from tbuser where sEmail=?';
		conn.query(sqlStr, [req.body.sEmail], function (err, result) {
			if (err) {
				util.log('error', err + sqlStr);
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
				util.responseJson(res, 0, '登录成功', frdInfo);
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
				var sqlStr = "INSERT INTO tbfriend(ibelongTo,iUserId) VALUES(?,?)";
				var sqlStrParams = [req.session.userInfo.iUserId, frdInfo.iUserId];
				console.log(sqlStrParams);
				var conn = util.db();
				conn.query(sqlStr, sqlStrParams, function (err, result) {
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
		var sqlStr = 'select u.iUserId iUserId,sNickName,sEmail,sPorTrait,f.sDesc,sRemark,sLastMsg,iIsActive ' +
			'from tbuser u inner join tbfriend  f on  u.iUserId=f.iUserId where f.ibelongTo=?';
		conn.query(sqlStr, [req.session.userInfo.iUserId], function (err, result) {
			if (err) {
				util.log('error', err + sqlStr);
				util.responseJson(res, -11, '系统繁忙，请稍后再试');
				return;
			}
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

	/**
	 * 拉取好友消息列表
	 */
	app.get('/frdmsg/list', urlencodedParser, function (req, res) {
		if (typeof req.session.userInfo === 'undefined' || typeof req.session.userInfo.iUserId === 'undefined') {
			util.responseJson(res, -2, '尚未登录！');
			return;
		}
		if (!req.query.frdId) {
			util.responseJson(res, -3, '参数异常！');
			return;
		}
		var conn = util.db();
		var sqlStr = 'SELECT * FROM tbprivatemsg where iToUserId=? and iFromUserId=? ' +
			' or iToUserId=? and iFromUserId=?  ORDER BY iPrivateMsgId limit 100';
		conn.query(sqlStr, [req.session.userInfo.iUserId, req.query.frdId, req.query.frdId, req.session.userInfo.iUserId], function (err, result) {
			if (err) {
				util.log('error', err + sqlStr);
				util.responseJson(res, -11, '系统繁忙，请稍后再试');
				return;
			} else if (result.length <= 0) {
				util.responseJson(res, -13, '暂无消息');
				return;
			}
			;

			util.responseJson(res, 0, '', result);
			return;
		});
		conn.end();
	});
	var multer = require('multer');
	app.use(multer({dest: '/tmp/'}).array('portrait'));
	app.post('/setting/portrait', urlencodedParser, function (req, res) {
		if (typeof req.session.userInfo === 'undefined' || typeof req.session.userInfo.iUserId === 'undefined') {
			//util.responseJson(res, -2, '尚未登录！');
			//return;
		}
		if (!req.files || !req.files[0]) {
			util.responseJson(res, -1, '请上传一张图片作为个人头像');
			return;
		}
		var file = req.files[0];
		if (file.size > 1024 * 500) {
			util.responseJson(res, -2, '上传的图片不能大于500kb');
			return;
		}
		//安全获取图片类型，防止上传文件攻击
		var imageinfo = require('imageinfo');
		var fs = require("fs");
		var fileData = fs.readFileSync(file.path);
		var info = imageinfo(fileData);
		if (['image/png', 'image/jpeg', 'image/gif'].indexOf(info.mimeType) === -1) {
			util.responseJson(res, -3, '请上传PNG或JPG图片');
			return;
		}
		var path = require('path');
		var fileFormat = (file.originalname).split(".");
		var ext = fileFormat[fileFormat.length - 1];
		fileFormat.pop();
		var md5 = require('md5');
		var filename = fileFormat.join('.') + md5(file) + '-' + req.session.userInfo.iUserId + "." + ext;
		var des_file = path.resolve(__dirname, '../../../static/img/portrait') + "/" + filename;
		fs.readFile(file.path, function (err, data) {
			fs.writeFile(des_file, data, function (err) {
				if (err) {
					util.log('upload image error', err);
				} else {
					var conn = util.db();
					var sqlStr = "update  tbuser set sPorTrait=? where iUserId=?";
					var storePath = '/static/img/portrait/' + filename;
					conn.query(sqlStr, [storePath, req.session.userInfo.iUserId], function (err, result) {
						if (err) {
							util.log('error', err + sqlStr);
							util.responseJson(res, -11, '系统繁忙，请稍后再试');
							return;
						}
						util.responseJson(res, 0, '', storePath);
						return;
					});
					conn.end();
				}
			});
		});

	});

	/**
	 * 添加
	 */
	app.post('/group/create', urlencodedParser, function (req, res) {
			if ((typeof req.session.userInfo === 'undefined' || typeof req.session.userInfo.iUserId === 'undefined') && util.EVN !== 'DEV') {
				util.responseJson(res, -2, '尚未登录！');
				return;
			}

			var ids, memberNames, sGroupName;
			if (!(sGroupName = req.body.sGroupName.trim())) {
				util.responseJson(res, -1, '群名称不能为空');
				return;
			}
			if (!(ids = req.body.ids.trim())) {
				util.responseJson(res, -1, '群成员不能为空');
				return;
			}
			if (!(memberNames = req.body.memberNames.trim())) {
				util.responseJson(res, -1, '参数异常');
				return;
			}

			var conn = util.db();
		    ids += "," + req.session.userInfo.iUserId;
			var idList = ids.split(',');
			memberNames += ";" + req.session.userInfo.sNickName;
			var querySql = "INSERT INTO tbgroup (sGroupName,iCreatorId,iNumMember,sMembers,sMemberNames) " +
				"value('" + util.escape(sGroupName) + "','" + req.session.userInfo.iUserId + "','" + idList.length + "','" + util.escape(ids) + "','" + util.escape(memberNames) + "')";
			conn.query(querySql, [], function (err, result) {
				var result = result ? result : {}, retObj = null;
				if (err) {
					util.log('error', err + param + '|' + querySql);
					util.responseJson(res, -11, '系统繁忙，请稍后再试');
				} else {
					retObj = result.insertId;
					var sql = "INSERT INTO tbgroupuser(iUserId,iGroupId) value";
					idList.forEach(function (v, i, list) {
						sql += (i == 0) ? "('" + v + "','" + result.insertId + "')" : ",('" + v + "','" + result.insertId + "')";
					});
					conn.query(sql, [], function (err, result) {
						if (err) {
							util.log('error', err + sql);
							util.responseJson(res, -12, '系统繁忙，请稍后再试');
							return;
						}
						util.responseJson(res, 0, '', retObj);
					});
				}
				conn.end();
			});
		}
	);

	app.get('/group/detail', urlencodedParser, function (req, res) {
			if ((typeof req.session.userInfo === 'undefined' || typeof req.session.userInfo.iUserId === 'undefined') && util.EVN !== 'DEV') {
				util.responseJson(res, -2, '尚未登录！');
				return;
			}
			if (!req.query.iGroupId) {
				util.responseJson(res, -3, '参数异常！');
				return;
			}
			var conn = util.db();
			var sqlStr = 'SELECT * FROM tbgroup where iGroupId=?';
			conn.query(sqlStr, [req.query.iGroupId], function (err, result) {
				if (err) {
					util.log('error', err + sqlStr);
					util.responseJson(res, -11, '系统繁忙，请稍后再试');
					return;
				} else if (result.length <= 0) {
					util.responseJson(res, -13, '群不存在');
					return;
				}

				util.responseJson(res, 0, '', result[0]);
				return;
			});
			conn.end();
		}
	);

	app.get('/group/list', urlencodedParser, function (req, res) {
		if (typeof req.session.userInfo === 'undefined' || typeof req.session.userInfo.iUserId === 'undefined') {
			util.responseJson(res, -2, '尚未登录！');
			return;
		}
		var conn = util.db();
		var sqlStr = 'SELECT g.iGroupId iGroupId,g.sGroupName sGroupName,g.sRemark sRemark,g.iNumMember iNumMember,g.dtCreateTime' +
			' dtCreateTime,g.dtLastActiveTime dtLastActiveTime,g.sMembers sMembers,g.sMemberNames sMemberNames FROM tbgroup as g inner join tbgroupuser as u ' +
			' on g.iGroupId = u.iGroupId where u.iUserId=?';
		conn.query(sqlStr, [req.session.userInfo.iUserId], function (err, result) {
			if (err) {
				util.log('error', err + sqlStr);
				util.responseJson(res, -11, '系统繁忙，请稍后再试');
				return;
			}
			util.responseJson(res, 0, '', result);
			return;
		});
		conn.end();
	});


	/**
	 * 拉取群消息列表
	 */
	app.get('/groupmsg/list', urlencodedParser, function (req, res) {
		if (typeof req.session.userInfo === 'undefined' || typeof req.session.userInfo.iUserId === 'undefined') {
			util.responseJson(res, -2, '尚未登录！');
			return;
		}
		if (!req.query.iGroupId) {
			util.responseJson(res, -3, '参数异常！');
			return;
		}
		var conn = util.db();
		var sqlStr = 'SELECT * FROM tbgroupmsg where iToGroupId=? ORDER BY iGroupMsgId limit 100';
		conn.query(sqlStr, [req.query.iGroupId], function (err, result) {
			if (err) {
				util.log('error', err + sqlStr);
				util.responseJson(res, -11, '系统繁忙，请稍后再试');
				return;
			} else if (result.length <= 0) {
				util.responseJson(res, -13, '暂无消息');
				return;
			}
			util.responseJson(res, 0, '', result);
			return;
		});
		conn.end();
	});

	/**
	 * 拉取最近消息列表
	 */
	app.get('/msg/recent', urlencodedParser, function (req, res) {
		if (typeof req.session.userInfo === 'undefined' || typeof req.session.userInfo.iUserId === 'undefined') {
			util.responseJson(res, -2, '尚未登录！');
			return;
		}
		var conn = util.db();
		var ret = {};
			var sqlStr = 'SELECT m.iGroupMsgId iGroupMsgId,m.sContent sContent,m.iFromUserId iFromUserId,' +
			'm.iToGroupId iToGroupId,g.sGroupName sGroupName,m.dtCreateTime dtCreateTime' +
			' FROM tbgroupmsg as m inner join tbgroupuser gu on gu.iGroupId=m.iToGroupId'+
			' inner join tbgroup as g on g.iGroupId=gu.iGroupId where gu.iUserId=? group by iToGroupId ORDER BY iGroupMsgId desc limit 20';
		conn.query(sqlStr, [req.session.userInfo.iUserId], function (err, result) {
			if (err) {
				util.log('error', err + sqlStr);
				util.responseJson(res, -11, '系统繁忙，请稍后再试');
				return;
			}
			ret['fromFriends'] = result;
			var sqlStr = 'SELECT m.iPrivateMsgId iPrivateMsgId,u.sNickName sNickName,u.sPorTrait sPorTrait,m.sContent sContent,' +
				'm.iFromUserId iFromUserId ,m.dtCreateTime dtCreateTime FROM tbprivatemsg as m inner join tbuser ' +
				'as u on m.iToUserId=u.iUserId  where iToUserId=? group by iFromUserId ORDER BY iPrivateMsgId desc limit 20';
			conn.query(sqlStr, [req.session.userInfo.iUserId], function (err, result) {
				if (err) {
					util.log('error', err + sqlStr);
					util.responseJson(res, -11, '系统繁忙，请稍后再试');
					return;
				}
				ret['fromGroups'] = result;
				util.responseJson(res, 0, '', ret);
				return;
			});
			conn.end();
			return;
		});
	});
}
