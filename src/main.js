import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'
import App from './App';
import main from 'components/main/main';
import recent from 'components/recent/recent2';
import group from 'components/group/group';
import login from 'components/login/login';
import forget from 'components/forget/forget';
import register from 'components/register/register';
import chatroom from 'components/chatroom/chatroom';
import friends from 'components/friends/friends';
import createMsg from 'components/recent/createMsg';
Vue.use(VueRouter);
Vue.prototype.$ajax = axios;
Vue.apiUrl = 'http://localhost:8088/api' ;
const routes = [{
	path: '/',
	component: main,
	children: [
		{
			path: '/recent',
			component: recent
		},
		{
			path: '/group',
			component: group
		},
		{
			path: '/friends',
			component: friends
		},
		{
			path: '/chatroom/:uid',
			component: chatroom
		}
	]
}, {
	path: '/create_msg',
	component: createMsg
},{
	path: '/register',
	component: register
}, {
	path: '/login',
	component: login
}, {
	path: '/forget',
	component: forget
}];

const router = new VueRouter({
	routes
});
Vue.router = router;
const v = new Vue({
	el: '#app',
	router,
	beforeMount(){
		Vue.self = this;
	},
	render: h => h(App)
});
