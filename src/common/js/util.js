/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};
export function jsonToQuery(json){
	if (typeof json === 'string') {
		json = JSON.parse(json);
	}
	var query = '';
	for (var key in json) {
		query += !query ? key + "=" + json[key] : "&" + key + "=" + json[key];
	}
	return query;
}
export function goback() {
	window.history.back();
}
/**
 * 数据上报
 */
export function report(error) {
	//待实现
	console.log(error);
}
<<<<<<< HEAD

export function wsk(url)
{
	if ("WebSocket" in window)
	{
		alert("您的浏览器支持 WebSocket!");

		// 打开一个 web socket
		var ws = new WebSocket(url);
		return ws;

	}
	else
	{
		// 浏览器不支持 WebSocket
		alert("您的浏览器不支持 WebSocket!");
		return false;
	}
}

export function store(error) {
	//待实现
	let st = require('./store.js');
	return st;
}
=======
>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
