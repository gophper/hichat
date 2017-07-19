<template>
	<div>
		<div hide-nav-bar="true" class="pane" nav-view="active"
			 style="opacity: 1; transform: translate3d(0%, 0px, 0px);">
			<div class="padding text-center scroll-content ionic-scroll  has-footer">
				<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
					<div style="height: 25px"></div>

					<img src="./logo.svg" style="width: 65px; height: auto">

					<h2>微聊</h2>

					<div style="height: 25px"></div>

					<div class="border-none disable-user-behavior">
						<div class="list">
							<div class="item-input border-bottom item">
								<input type="email" v-model="newUser.sEmail" name="sEmail" placeholder="邮箱">
							</div>
							<div class="item-input border-bottom item">
								<input type="password" v-model="newUser.sPassword" name="sPassword" placeholder="密码">
							</div>
						</div>
					</div>
					<div class="padding">
						<a class="button button-clear button-large"  @click="submitForm">
							登录
						</a>
					</div>
				</div>
				<div class="scroll-bar scroll-bar-v">
					<div class="scroll-bar-indicator scroll-bar-fade-out"
						 style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div>
				</div>
			</div>
			<div class="bar bar-footer">
				<router-link class="button button-clear" to="/register">注册</router-link>
				<router-link class="button button-clear" to="/forget">忘记密码？</router-link>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import axios from 'axios';
	import {report} from 'common/js/util';
	import Vue from 'vue';
	import store from 'common/js/store';
	export default {
		props: {},
		data() {
			return {
				regUrl: Vue.apiUrl+'/login',
				newUser: {
					sEmail: '',
					sPassword: ''
				}
			};
		},
		methods: {
			jsonToQuery(json){
				if (typeof json === 'string') {
					json = JSON.parse(json);
				}
				var query = '';
				for (var key in json) {
					query += !query ? key + "=" + json[key] : "&" + key + "=" + json[key];
				}
				return query;
			},
			submitForm () {
				axios({
					'url': this.regUrl, method: 'post',
					'data': this.jsonToQuery(this.newUser),
					'headers':{ 'x-requested-with': 'XMLHttpRequest'}
				}).then(function (response) {
					if(response.data.msg){
						alert(response.data.msg);
					}
					if(response.data.ret == 0){
						//路由到“最近的消息”
						store.set('info',response.data.data);
						Vue.router.push({ path: 'recent' })
					}
				}).catch(function (error) {
					alert('登录失败！');
					report(error);
				});

			}
		},
		components: {}
	};

</script>
