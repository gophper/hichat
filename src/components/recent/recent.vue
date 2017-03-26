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
							<friendList :friends="msgList.fromFriends" :hasRightBtn="true"></friendList>

							<!-- 群消息列表 -->
							<groupList :groups="msgList.fromGroups" :hasRightBtn="true"></groupList>
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
					}],
					fromGroups:[{
						iGroupMsgId:1,
						sGroupName:'6马云工作组',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖假货的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iGroupMsgId:2,
						sGroupName:'5马化腾工作组',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iGroupMsgId:2,
						sGroupName:'4马化腾工作组',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
						sPortrait:'http://localhost:8088/static/img/portrait/user02.jpg'
					},{
						iGroupMsgId:2,
						sGroupName:'3马化腾工作组',
						dtCreateTime:'2017-3-21 15:42:12',
						sContent:'我是卖Qb的',
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
			friendList,
			groupList,
			recentHeader,
			createMsg,
			mtLoadmore,
			mtSpinner
		}
	};
</script>
