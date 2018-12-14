/**
 * 配置编译环境和线上环境之间的切换
 *
 * urlWebHttp: 域名地址
 * toastime: toast时间
 *
 */
const toastime = 3000;
const timeout = 10000;

let urlWebHttp;

//切换环境
switch (process.env.srconfig) {
	case 'pro':
		urlWebHttp = 'http://192.168.1.210';
		break;
	default://默认开发
		urlWebHttp = 'http://www.todaypocket.cn/wifipro';
		break;
}


export default{
	urlWebHttp,
	toastime,
	timeout
}
