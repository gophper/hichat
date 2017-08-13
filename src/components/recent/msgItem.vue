<template>
	<!--好友消息-->
	<div class="page-cell">
		<mt-cell-swipe
			:right="rightButtons"
			:title="item.sNickName || item.sGroupName"
			:value="item.sContent"
			:id="item.iToGroupId || item.iFromUserId "
			:isLink="true"
			:time="item.dtCreateTime">

		</mt-cell-swipe>
	</div>
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
					console.log(id);
				    console.log(this.$el.parentNode.parentNode.removeChild(this.$el.parentNode));
				},
				clickHandler: (id) => {
				    if(this.item.sNickName){
						Vue.router.push({ path: 'chatroom-frd/'+id })
					}else{
						Vue.router.push({ path: 'chatroom-group/'+id })
					}

				}
			};
		},
		methods: {},
		components: {MtCellSwipe}
	};
</script>

