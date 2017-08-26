<template>
	<!--<span v-if="type === 1">
		<div class="page-cell">
		<mt-cell-swipe
			:right="rightButtons"
			:title="item.sNickName"
			:value="item.sContent"
			:time="item.dtCreateTime">
		</mt-cell-swipe>
	</div>
	</span>

	<span v-else-if="type === 2">
		<div class="page-cell">
		<mt-cell-swipe
			:right="rightButtons"
			:title="item.sGroupName"
			:value="item.sContent"
			:time="item.dtCreateTime">
		</mt-cell-swipe>
	</div>
	</span>-->
	<!--好友列表-->
	<span>
		<div class="page-cell">
		<mt-cell-swipe
			:right="rightButtons"
			:id="item.iUserId"
<<<<<<< HEAD
			:refObj="item"
			:title="item.sNickName"
			:isCheck="isCheck" :isLink="isLink">
=======
			:title="item.sNickName">
>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
		</mt-cell-swipe>
		</div>
	</span>

</template>

<script type="text/ecmascript-6">
	import MtCellSwipe from 'components/common/cell-swipe';
	import axios from 'axios';
	import {report} from 'common/js/util';
	import Vue from 'vue';
	import store from 'common/js/store';
	export default {
		props: {
<<<<<<< HEAD
			item: Object,
			type: Number,
			hasRightBtn: Boolean,
			isCheck:Boolean,
			isLink:Boolean
=======
			item: {
				type: Object
			},
			type: {
				type: Number
			},
			hasRightBtn: Boolean
>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
		},
		data() {
			return {
				//actTypeMap: {1: 'friendHistory', 2: 'groupHistory', 3: 'friend'}
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
						'data': 'id=' + id + '&act=friend',
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
					Vue.router.push({ path: 'chatroom/'+id })
				}
			};
		},
		methods: {},
		mounted() {
			store.set('frd_'+this.item.iUserId,this.item);
		},
		components: {MtCellSwipe}
	};
</script>

