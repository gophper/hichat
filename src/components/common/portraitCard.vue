<template>
	<span v-if="type === 1" class="">
		<div class="page-cell">
		<mt-cell-swipe
			:right="rightButtons"
			:title="item.sNickName"
			:value="item.sContent"
			:time="item.dtCreateTime">
		</mt-cell-swipe>
	</div>
	</span>

	<span v-else-if="type === 2" >
		<div class="page-cell">
		<mt-cell-swipe
			:right="rightButtons"
			:title="item.sGroupName"
			:value="item.sContent"
			:time="item.dtCreateTime">
		</mt-cell-swipe>
	</div>
	</span>

</template>

<script type="text/ecmascript-6">
	import MtCellSwipe from 'components/common/cell-swipe';
	export default {
		props: {
			item:{
		        type:Object
			},
			type:{
				type:Number
			},
			hasRightBtn:Boolean
		},
		data() {
			return {
				list: []
			};
		},
		created() {
		    if(!this.hasRightBtn){
				this.rightButtons = [];
				return;
			}
			this.rightButtons = [
				{
					content: '移除',
					style: { background: 'red', color: '#fff' },
					handler: () => this.$messagebox('delete')
				}
			];
		},
		methods: {},
		components: {MtCellSwipe}
	};
</script>

