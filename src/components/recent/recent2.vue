<template>
	<div>
		<div ref="recent">
			<recentHeader ></recentHeader>
		</div>
		<loadmorePanel>
			<searchMsg @openInput="handleOpenSearchReq"></searchMsg>
			<!--  好友消息列表-->
			<friendMsgList  :hasRightBtn="true"></friendMsgList>
			<!-- 群消息列表 -->
			<groupMsgList :hasRightBtn="true"></groupMsgList>
		</loadmorePanel>

	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	import searchMsg from 'components/common/searchMsg';
	import friendMsgList from 'components/msg/friend-msg-list';
	import groupMsgList from 'components/msg/group-msg-list';
	import recentHeader from 'components/recent/recentHeader';
	import createMsg from 'components/recent/createMsg';
	import loadmorePanel from 'components/common/loadmore-panel';
	export default {
		props: {},
		data() {
			return {
				headHeight:0
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
			groupMsgList,
			friendMsgList,
			recentHeader,
			createMsg,
			loadmorePanel
		}
	};
</script>
