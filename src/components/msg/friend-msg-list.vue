<template>
		<div v-if="msgList">
			<!--  好友列表-->
			<div  v-for="msg in msgList">
				<portraitCard :item="msg" :hasRightBtn="hasRightBtn" :type="1"></portraitCard>
			</div>
		</div>
</template>

<script type="text/ecmascript-6">

	import portraitCard from 'components/common/portraitCard';
	export default {
		props: {
			msgs:{
			    type:Array
			},
			hasRightBtn:Boolean
		},
		data() {
			return {
				msgList: [{
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
				}]
			};
		},
		methods: {},
		components: {
			portraitCard
		}
	};
</script>
