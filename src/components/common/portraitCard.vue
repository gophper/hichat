<template>
<<<<<<< HEAD
	<!--好友消息-->
=======
>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
	<span v-if="type === 1">
		<div class="page-cell">
		<mt-cell-swipe
			:right="rightButtons"
			:title="item.sNickName"
			:value="item.sContent"
			:id="item.iFromUserId"
			:time="item.dtCreateTime">
		</mt-cell-swipe>
	</div>
	</span>
<<<<<<< HEAD
   <!-- 群消息-->
=======

>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
	<span v-else-if="type === 2">
		<div class="page-cell">
		<mt-cell-swipe
			:right="rightButtons"
			:title="item.sGroupName"
			:value="item.sContent"
			:id="item.iToGroupId"
			:time="item.dtCreateTime">
		</mt-cell-swipe>
	</div>
	</span>
<<<<<<< HEAD
=======
	<!--好友列表-->
	<span v-else-if="type === 3">
		<div class="page-cell">
		<mt-cell-swipe
			:right="rightButtons"
			:id="item.iUserId"
			:title="item.sNickName">
		</mt-cell-swipe>
		</div>
	</span>

>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
</template>

<script type="text/ecmascript-6">
	import MtCellSwipe from 'components/common/cell-swipe';
	import axios from 'axios';
	import {report} from 'common/js/util';
	import Vue from 'vue';
	export default {
		props: {
			item: {
				type: Object
			},
			type: {
				type: Number
			},
			hasRightBtn: Boolean
		},
		data() {
			return {
				list: [],
				actTypeMap: {1: 'friendHistory', 2: 'groupHistory', 3: 'friend'}
			};
		},
		created() {
			if (!this.hasRightBtn) {
				this.rightButtons = {};
				return;
			}
			let that = this;
			this.rightButtons = {
				content: '移除',
				style: {background: 'red', color: '#fff'},
				removeHandler: (id) => {
					axios({
						'url': Vue.apiUrl + '/del',
						'method': 'post',
						'data': 'id=' + id + '&act=' + that.actTypeMap[that.type],
						'headers': {'x-requested-with': 'XMLHttpRequest'}
					}).then(function (response) {
						if (response.data.ret !== 0 && response.data.msg) {
							alert(response.data.msg);
						}
						if (response.data.ret == 0) {
							//注意不能用this,可以改为v-show指令
							var swipe = window.document.getElementById('swipe_' + id);
							var p = swipe.parentNode.removeChild(swipe)
						}
					}).catch(function (error) {
						alert('系统繁忙，请稍后再试~');
						report(error);
					});
				},
				clickHandler: (id) => {
<<<<<<< HEAD
					Vue.router.push({ path: 'chatroom-frd/'+id })
=======
					Vue.router.push({ path: 'chatroom/'+id })
>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
				}
			};
		},
		methods: {},
		components: {MtCellSwipe}
	};
</script>

