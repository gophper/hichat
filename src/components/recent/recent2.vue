<template>
	<div>
		<div ref="recent">
			<recentHeader ></recentHeader>
		</div>
		<msgsFriends>
			<searchMsg @openInput="handleOpenSearchReq"></searchMsg>
			<!--  好友消息列表-->
			<div v-for="msg in msgList.fromGroups">
				<msgItem :hasRightBtn="true" :item="msg"  :isLink="true" ></msgItem>
			</div>
			<div v-for="msg in msgList.fromFriends">
				<msgItem :hasRightBtn="true" :item="msg"  :isLink="true" ></msgItem>
			</div>

		</msgsFriends>

		<!--{
		iFromUserId:2,
		sNickName:'马化腾',
		dtCreateTime:'2017-3-21 15:42:12',
		sContent:'我是卖Qb的',
		sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
		}],
		fromGroups:[{
		iGroupMsgId:1,
		sGroupName:'6马云工作组',
		dtCreateTime:'2017-3-21 15:42:12',
		sContent:'我是卖假货的',
		sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
		},-->

	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	import searchMsg from 'components/common/searchMsg';
	import friendList from 'components/friends/friendList';
	import groupList from 'components/group/groupList';
	import recentHeader from 'components/recent/recentHeader';
	import createMsg from 'components/recent/createMsg';
	import msgsFriends from 'components/common/msgs-friends';
	import axios from 'axios';
	import {report,jsonToQuery} from 'common/js/util';
	import store from 'common/js/store';
	import msgItem from 'components/recent/msgItem';

	export default {
		props: {},
		data() {
			return {
				headHeight:0,
				msgList: []
			};
		},
		methods: {
			handleOpenSearchReq(e){
				Vue.refSearchWin.globalOpenSearchWin=e;
			},
			updateMsgList(){
				let that = this;
				axios({
					'url': Vue.apiUrl + '/msg/recent',
					'method': 'get',
					'headers': {'x-requested-with': 'XMLHttpRequest'}
				}).then((response) =>{
					if (response.data.ret !== 0 && response.data.msg) {
						alert(response.data.msg);
					}
					if (response.data.ret == 0) {
						//跳转到群聊
						that.msgList = response.data.data ;
					}
				}).catch(function (error) {
					alert('系统繁忙，请稍后再试~');
					report(error);
				});
			}
		},
		computed:{

		},
		mounted() {
		    this.updateMsgList();
			let elment = this.$refs.recent;
			while(!elment.getBoundingClientRect().height){
				elment = elment.lastChild;
			}
			this.headHeight = elment.getBoundingClientRect().height+1;
		},
		components: {
		    searchMsg,
			friendList,
			groupList,
			recentHeader,
			createMsg,
			msgsFriends,
			msgItem
		}
	};
</script>
