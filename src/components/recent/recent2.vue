<template>
	<div>
		<div ref="recent">
			<recentHeader ></recentHeader>
		</div>
		<msgsFriends>
			<searchMsg @openInput="handleOpenSearchReq"></searchMsg>
			<!--  好友消息列表-->
			<friendList :friends="msgList.fromFriends" :hasRightBtn="true"></friendList>
			<!-- 群消息列表 -->
			<groupList :groups="msgList.fromGroups" :hasRightBtn="true"></groupList>
		</msgsFriends>

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
	export default {
		props: {},
		data() {
			return {
				headHeight:0,
				msgList: {
				    fromFriends:[{
						iFromUserId:1,
				        sNickName:'马云',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖假货的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iFromUserId:2,
						sNickName:'马化腾',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iFromUserId:2,
						sNickName:'马化腾',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iFromUserId:2,
						sNickName:'马化腾',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iFromUserId:2,
						sNickName:'马化腾',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
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
					},{
						iGroupMsgId:2,
						sGroupName:'last2马化腾工作组',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iGroupMsgId:2,
						sGroupName:'last1马化腾工作组',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					}]
				}
			};
		},
		methods: {
			handleOpenSearchReq(e){
				Vue.refSearchWin.globalOpenSearchWin=e;
			}
		},
		computed:{

		},
		mounted() {
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
			msgsFriends
		}
	};
</script>
