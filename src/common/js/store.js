
let storage = window[ 'localStorage' ];
let store = {};

//序列化
store.serialize = function( value ) {
	return JSON.stringify( value );
};

//反序列化
store.deserialize = function( value ) {
	if ( typeof value != 'string' ) {
		return undefined;
	}
	try {
		return JSON.parse( value );
	} catch ( e ) {
		return value || undefined;
	}
};

/**
 * [设置本地存储键值和有效时间]
 * @param {[type]} key [键]
 * @param {[type]} val [值-可以是object]
 * @param {[type]} exp [毫秒数，例如有效时间1分钟，写成60*1000]
 */
store.set = function( key, val, exp ) {
	if ( val === undefined ) {
		return store.remove( key );
	}
	exp = parseInt( exp, 10 );
	if ( isNaN( exp ) ) { //如果为NaN说明转换失败，则当作是永久时间
		exp = 'forever';
	}
	storage.setItem( key, store.serialize( {
		val: store.serialize( val ),
		exp: exp,
		time: +new Date()
	} ) );
	return val;
};

/**
 * 取本地存储值
 * @param  {[type]} key        [键]
 * @param  {[type]} defaultVal [如果如果取值为undefined，返回默认值]
 * @return {[type]}            [description]
 */
store.get = function( key, defaultVal ) {
	let info = store.deserialize( storage.getItem( key ) ) || {
			key: null,
			exp: 0,
			time: 0
		};
	if ( 'forever' != info.exp && ( new Date().getTime() - info.time > info.exp ) ) {
		store.remove( key ); //移除掉相应的值
		return null;
	}
	let val = store.deserialize( info.val );
	return ( val === undefined ? defaultVal : val );
};

/**
 * 删除指定键值
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
store.remove = function( key ) {
	storage.removeItem( key );
}

export default store;
