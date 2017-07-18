<template>
	<div>
		<div class="backdrop"></div>
		<div class="click-block click-block-hide"></div>
		<div class="modal-backdrop" :class="{'hide':!globalOpenSearchWin,'active':globalOpenSearchWin}">
			<div :class="{'modal-backdrop-bg':globalOpenSearchWin}"></div>
			<div class="modal-wrapper">
				<div :class="changeBg" class="modal slide-in-up">
					<!--消息搜索输入组件-->
					<searchInput :shouldOpen="globalOpenSearchWin"></searchInput>
					<div :class="{'ng-hide':!hasMsgsTotal}" class="scroll-content ionic-scroll  has-header">
						<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
							<mt-loadmore :top-method="loadTop"   :noScrollBar="true" @top-status-change="handleTopChange" ref="loadmore">
								<div v-if="msgList" class="disable-user-behavior">
									<div class="list">
										<!--  好友消息列表-->
										<friendList :friends="msgList.fromFriends" :hasRightBtn="false"></friendList>

										<!-- 群消息列表 -->
										<groupList :groups="msgList.fromGroups" :hasRightBtn="false"></groupList>
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
			</div>
		</div>
	</div>
</template>
<!--
可以通过全局信号量控制窗口开关（globalOpenSearchWin），
也可以通过父组件传入prop实现（openSearchWin）
-->

<script type="text/ecmascript-6">
	import Vue from 'vue';
	import searchInput from 'components/common/search-input.vue';
	import friendList from 'components/friends/friendList';
	import groupList from 'components/group/groupList';
	import mtLoadmore from 'components/common/loadmore';
	import mtSpinner from 'components/common/spinner/spinner';
	export default {
		props: {
			openSearchWin: {
				type: Boolean
			}
		},
		data() {
			return {
				globalOpenSearchWin: false,
				hasMsgsTotal: false,
				wrapperHeight: 0,
				topStatus: '',
				msgList: {
					fromFriends: [{
						iFromUserId: 1,
						sNickName: '1马云',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖假货的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iFromUserId: 2,
						sNickName: '2马化腾',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}],
					fromGroups: [{
						iGroupMsgId: 1,
						sGroupName: '3马云工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖假货的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iGroupMsgId: 2,
						sGroupName: '4马化腾工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iGroupMsgId: 2,
						sGroupName: '5马化腾工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iGroupMsgId: 2,
						sGroupName: '6马化腾工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iGroupMsgId: 2,
						sGroupName: '7马化腾工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iGroupMsgId: 2,
						sGroupName: '8马化腾工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iGroupMsgId: 2,
						sGroupName: '9马化腾工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iGroupMsgId: 2,
						sGroupName: '10马化腾工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iGroupMsgId: 2,
						sGroupName: '11马化腾工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iGroupMsgId: 2,
						sGroupName: '12马化腾工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iGroupMsgId: 2,
						sGroupName: '13马化腾工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iGroupMsgId: 2,
						sGroupName: '14马化腾工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}, {
						iGroupMsgId: 2,
						sGroupName: '15马化腾工作组',
						dtCreateTime: '2017-3-21 15:42:12',
						sContent: '我是卖Qb的',
						sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
					}]
				}

			};
		},
		mounted(){
			this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect()
					.top - document.getElementById('tabs').getBoundingClientRect().height;
			this.openSearchWin = this.globalOpenSearchWin;
			Vue.refSearchWin = this;
			//temp
			this.hasMsgsTotal = true;
		},
		computed: {
			changeBg(){
				if (this.globalOpenSearchWin) {
					return [
						'transparent',
						'ng-enter',
						'active',
						'ng-enter-active'
					];
				} else {
					return [
						'ng-leave',
						'ng-leave-active'
					];
				}

			}
		},
		methods: {
			handleTopChange(status) {
				this.topStatus = status;
			},

			loadTop() {
				setTimeout(() => {

					//this.$refs.loadmore.onTopLoaded();
				}, 1500);
			},
		},
		components: {
			searchInput,
			friendList,
			groupList,
			mtLoadmore,
			mtSpinner
		}
	};

</script>

<style>
	.modal-backdrop-bg {
		-webkit-transition: opacity 300ms ease-in-out;
		transition: opacity 300ms ease-in-out;
		background-color: #000;
		opacity: 0.5;
	}

	.transparent {
		background-color: transparent;
	}

</style>
