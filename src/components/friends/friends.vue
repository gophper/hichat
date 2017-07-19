<template>
	<div>
		<div class="bar-stable bar bar-header disable-user-behavior">
			<div class="buttons" style="visibility: hidden">
				<button class="button button-clear button-icon button-positive icon ion-ios-search" @click="openSearch"></button>
			</div>
			<div class="title" style="padding: 5px 0px; left: 44px; right: 44px;">
				<div class="button-bar bar-light">
					<a class="button button-outline button-positive active" :class="{active: true}">Messenger</a>
					<a class="button button-outline button-positive" :class="{active: false}" >Active</a>
				</div>
			</div>
			<div class="buttons">
				<button class="button button-clear button-icon button-positive icon ion-ios-plus-empty"	@click="showPromptAdd" style="position: absolute; right: 5px;">
				</button>
			</div>
		</div>

		<msgsFriends>
			<div class="item-divider item">
				<p>People with messenger</p>
			</div>
			<!--  好友列表-->
			<div v-if="friendsList">
				<!--  好友列表-->
				<div  v-for="friend in friendsList">
					<friendItem :item="friend" :hasRightBtn="true" :type="3"></friendItem>
				</div>
			</div>
		</msgsFriends>
		<popupInput  ref="popup" :url="url" :title="popup.title" :tips="popup.tips"  :inputType="popup.email"
					 :placeholder="popup.placeholder" :submitCallback="popup.submitCallback">

		</popupInput>
	</div>

</template>

<script type="text/ecmascript-6">

	import popupInput from 'components/common/popup-input';
	import msgsFriends from 'components/common/msgs-friends';
	import friendItem from 'components/friends/friendItem';
	import axios from 'axios';
	import {report} from 'common/js/util';
	import Vue from 'vue';
	import store from 'common/js/store';
	export default {
		props: {},
		data() {
			return {
				url: Vue.apiUrl,
			    popup:{
			        title:'添加联系人',
					tips:'输入好友邮箱地址',
					email:'email',
					placeholder:'邮箱地址',
					submitCallback:()=>{},
					hide:true
				},
				friendsList: []

			};
		},
		methods: {
			showPromptAdd(){
				this.$refs.popup.hide = false;
			},
			openSearch(){

			},
			updateList(){
			    let that = this;
				axios({
					'url': this.url+'/friend/list',
					'method': 'post',
					'headers':{ 'x-requested-with': 'XMLHttpRequest'}
				}).then(function (response) {
					if(response.data.ret !== 0 && response.data.msg){
						alert(response.data.msg);
					}
					if(response.data.ret == 0){
						//注意不能用this
						store.set('frdlist_'+store.get('info').iUserId,response.data.data);
						that.friendsList = response.data.data;
					}
				}).catch(function (error) {
					alert('系统繁忙，请稍后再试~');
					report(error);
				});
			}
		},
		components: {
			friendItem,
			msgsFriends,
			popupInput
		},
		mounted(){
		    let that = this;
			this.updateList();
		    this.popup.submitCallback = function (val){
				axios({
					'url': this.url+'/friend/add',
					 method: 'post',
					 async:false,
					'data': 'sEmail='+val,
					'headers':{ 'x-requested-with': 'XMLHttpRequest'}
				}).then(function (response) {
					if(response.data.msg){
						alert(response.data.msg);
					}
					if(response.data.ret == 0){
						//注意不能用this
						Vue.set(that.friendsList,that.friendsList.length,response.data.data);
					}
				}).catch(function (error) {
					alert('系统繁忙，请稍后再试~');
					report(error);
				});
				return true;
			}
		}
	};
</script>
