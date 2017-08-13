<template>
	<!--  好友列表-->
	<div v-if="friendsList">
		<!--  好友列表-->
		<div v-for="friend in friendsList">
			<friendItem :item="addCheck(friend)" :hasRightBtn="true" :type="3"  :isCheck="isCheck" :isLink="isLink"></friendItem>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import friendItem from 'components/friends/friendItem';
	import axios from 'axios';
	import {report} from 'common/js/util';
	import Vue from 'vue';
	import store from 'common/js/store';
	export default {
		props: {
			isCheck:Boolean,
			isLink:Boolean
		},
		data() {
			return {
				url: Vue.apiUrl,
				friendsList: [],

			};
		},
		methods: {
		    addCheck(frd){
		        frd.checked = false;
		        return frd;
			},
			updateList(){
				let that = this;
				axios({
					'url': this.url + '/friend/list',
					'method': 'post',
					'headers': {'x-requested-with': 'XMLHttpRequest'}
				}).then(function (response) {
					if (response.data.ret !== 0 && response.data.msg) {
						alert(response.data.msg);
					}
					if (response.data.ret == 0) {
						//注意不能用this
						store.set('frdlist_' + store.get('info').iUserId, response.data.data);
						that.friendsList = response.data.data;
					}
				}).catch(function (error) {
					//alert('系统繁忙，请稍后再试~');
					report(error);
				});
			}
		},
		components: {
			friendItem
		},
		mounted(){
			this.updateList();
		}
	};
</script>
