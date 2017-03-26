<template>
	<div>
		<recentHeader></recentHeader>
		<div class="scroll-content ionic-scroll  has-header has-tabs">
			<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
				<div v-if="msgList" class="disable-user-behavior">
					<div class="list">
						<searchMsg></searchMsg>
						<!--  好友消息列表-->
						<friendList :friendList="msgList.fromFriends"></friendList>

						<!-- 群消息列表 -->
						<groupList></groupList>
					</div>
				</div>
			</div>
			<div class="scroll-bar scroll-bar-v">
				<div class="scroll-bar-indicator scroll-bar-fade-out"
					 style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import searchMsg from 'components/common/searchMsg';
	import friendList from 'components/friends/friendList';
	import groupList from 'components/group/groupList';
	import recentHeader from 'components/recent/recentHeader';
	import createMsg from 'components/recent/createMsg';
	export default {
		props: {},
		data() {
			return {
				msgList: {
				    fromFriends:[{
						iFromUserId:1,
				        sNickName:'马云',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖假货的'
					}],
					fromGroups:[]
				}
			};
		},
		methods: {},
		components: {
		    searchMsg,
			friendList,
			groupList,
			recentHeader,
			createMsg
		}
	};
</script>
