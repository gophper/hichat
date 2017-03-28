<template>
	<div v-if="msgList" >
		<!--  群列表-->
		<div v-for="msg in msgList">
			<portraitCard :item="msg" :hasRightBtn="hasRightBtn" :type="2"></portraitCard>
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
				msgList:[{
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
			};
		},
		methods: {},
		components: {
		    portraitCard
		}
	};
</script>
