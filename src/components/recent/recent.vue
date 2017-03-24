<template>
	<div>
		<recentHeader></recentHeader>
		<div class="scroll-content ionic-scroll  has-header has-tabs">
			<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
				<mt-loadmore :top-method="loadTop"  @top-status-change="handleTopChange" ref="loadmore">
					<div v-if="msgList" class="disable-user-behavior">
						<div class="list">
							<searchMsg @openInput="handleOpenSearchReq"></searchMsg>
							<!--  好友消息列表-->
							<friendList :friends="msgList.fromFriends" :hasRightBtn="true"></friendList>

							<!-- 群消息列表 -->
							<groupList :groups="msgList.fromGroups" :hasRightBtn="true"></groupList>
						</div>
					</div>
					<div slot="top" class="mint-loadmore-top">
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
	import friendList from 'components/friends/friendList';
	import groupList from 'components/group/groupList';
	import recentHeader from 'components/recent/recentHeader';
	import createMsg from 'components/recent/createMsg';
	import mtLoadmore from 'components/common/loadmore';
	import mtSpinner from 'components/common/spinner/spinner';
	export default {
		props: {},
		data() {
			return {
				list: [],
				topStatus: '',
				wrapperHeight: 0,
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
					}],
					fromGroups:[{
						iGroupMsgId:1,
						sGroupName:'马云工作组',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖假货的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iGroupMsgId:2,
						sGroupName:'马化腾工作组',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iGroupMsgId:2,
						sGroupName:'马化腾工作组',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iGroupMsgId:2,
						sGroupName:'马化腾工作组',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iGroupMsgId:2,
						sGroupName:'马化腾工作组',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iGroupMsgId:2,
						sGroupName:'马化腾工作组',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					}]
				}
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
		mounted() {
			console.log("this.$refs.tabs.getBoundingClientRect().height:"+document.getElementById('tabs').getBoundingClientRect().height);
			this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top-document.getElementById('tabs').getBoundingClientRect().height;
		},
		components: {
		    searchMsg,
			friendList,
			groupList,
			recentHeader,
			createMsg,
			mtLoadmore,
			mtSpinner
		}
	};
</script>
<style>

	.page-loadmore .mint-spinner {
		display: inline-block;
		vertical-align: middle;
	}

	.mint-loadmore-bottom span {
		display: inline-block;
		-webkit-transition: .2s linear;
		transition: .2s linear;
		vertical-align: middle
	}
	.mint-loadmore-bottom span.is-rotate {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
	}

</style>
