import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import login from 'components/login/login';
import forget from 'components/forget/forget';
import register from 'components/register/register';
import 'common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [{
	path: '/',
	component: login
}, {
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

const v = new Vue({
	el: '#app',
	router,
	render: h => h(App)
});
window.console.log(v.$data);
