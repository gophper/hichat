<template>
	<div>
		<div ref="recent">
			<recentHeader ></recentHeader>
		</div>

		<div  class="scroll-content ionic-scroll">
			<div class="page-loadmore-wrapper" ref="wrapper"  :style="{ height: wrapperHeight + 'px',top: headHeight + 'px' }">
				<mt-loadmore :top-method="loadTop"   :noScrollBar="true" @top-status-change="handleTopChange" ref="loadmore">
					<div v-if="msgList" class="disable-user-behavior">
						<div class="list">
							<searchMsg @openInput="handleOpenSearchReq"></searchMsg>
							<!--  好友消息列表-->
							<friendMsgList  :hasRightBtn="true"></friendMsgList>

							<!-- 群消息列表 -->
							<groupMsgList :hasRightBtn="true"></groupMsgList>
						</div>
					</div>
					<div slot="top" ref="loadmoreTop"  class="mint-loadmore-top">
						<span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
							<span v-show="topStatus === 'loading'">
						   <mt-spinner type="snake"></mt-spinner>
                   		</span>
					</div>
				</mt-loadmore>
			</div>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	import searchMsg from 'components/common/searchMsg';
	import friendMsgList from 'components/msg/friend-msg-list';
	import groupMsgList from 'components/group/group-msg-list';
	import recentHeader from 'components/recent/recentHeader';
	import createMsg from 'components/recent/createMsg';
	export default {
		props: {},
		data() {
			return {
				list: [],
				topStatus: '',
				wrapperHeight: 0,
				headHeight:0
			};
		},
		methods: {
			handleTopChange(status) {
				this.topStatus = status;
			},

			loadTop() {
				setTimeout(() => {
					let firstValue = this.list[0];
					for (let i = 1; i <= 10; i++) {
						this.list.unshift(firstValue - i);
					}
					//this.$refs.loadmore.onTopLoaded();
				}, 1500);
			},
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
			this.wrapperHeight = document.documentElement.clientHeight-this.headHeight
				-document.getElementById('tabs').getBoundingClientRect().height;
		},
		components: {
		    searchMsg,
			friendMsgList,
			groupMsgList,
			recentHeader,
			createMsg,
			mtLoadmore,
			mtSpinner
		}
	};
</script>
