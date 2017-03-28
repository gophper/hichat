<template>
	<loadmorePanel>
		<!--  好友列表-->
		<div v-if="friendsList">
			<!--可选头部-->
			<slot name="loadmore-header"></slot>
			<!--  好友列表-->
			<div  v-for="friend in friendsList">
				<portraitCard :item="friend" :hasRightBtn="true" :type="type">
					<!--再往上嵌套，没有效果，所以只能到这儿了，组件安装由上层通过type属性确定-->
					<label class="checkbox mint-row-item" slot="checkbox1">
						<input type="checkbox" ng-model="friend.checked" ng-checked="friend.checked"
							   class="ng-valid ng-dirty ng-valid-parse ng-touched" checked="checked" value="on">
					</label>
				</portraitCard>
			</div>
		</div>
	</loadmorePanel>
</template>

<script type="text/ecmascript-6">
	import loadmorePanel from 'components/common/loadmore-panel';
	import portraitCard from 'components/common/portraitCard';
	export default {
		props: {
			friends: {
				type: Array
			},
			type:Number,
			hasRightBtn: Boolean
		},
		data() {
			return {
				friendsList: [{
					iFriendId: 1,
					sNickName: '马云1',
					sDesc: '我是卖假货的',
					sRemark: '这家伙总是在我朋友圈推销假货',
					dtLastChat: '2017-3-21 15:42:12',
					sLastMsg: '亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				}, {
					iFriendId: 2,
					sNickName: '马云2',
					sDesc: '我是卖假货的',
					sRemark: '这家伙总是在我朋友圈推销假货',
					dtLastChat: '2017-3-21 15:42:12',
					sLastMsg: '亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				}, {
					iFriendId: 3,
					sNickName: '马云3',
					sDesc: '我是卖假货的',
					sRemark: '这家伙总是在我朋友圈推销假货',
					dtLastChat: '2017-3-21 15:42:12',
					sLastMsg: '亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				}, {
					iFriendId: 4,
					sNickName: '马云4',
					sDesc: '我是卖假货的',
					sRemark: '这家伙总是在我朋友圈推销假货',
					dtLastChat: '2017-3-21 15:42:12',
					sLastMsg: '亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				}, {
					iFriendId: 5,
					sNickName: '马云5',
					sDesc: '我是卖假货的',
					sRemark: '这家伙总是在我朋友圈推销假货',
					dtLastChat: '2017-3-21 15:42:12',
					sLastMsg: '亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				}, {
					iFriendId: 6,
					sNickName: '马云6',
					sDesc: '我是卖假货的',
					sRemark: '这家伙总是在我朋友圈推销假货',
					dtLastChat: '2017-3-21 15:42:12',
					sLastMsg: '亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				}, {
					iFriendId: 7,
					sNickName: '马云7',
					sDesc: '我是卖假货的',
					sRemark: '这家伙总是在我朋友圈推销假货',
					dtLastChat: '2017-3-21 15:42:12',
					sLastMsg: '亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				}]
			};
		},
		methods: {},
		components: {
			portraitCard,
			loadmorePanel
		}
	};
</script>
