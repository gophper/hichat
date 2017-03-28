<template>
	<!--朋友消息-->
	<span v-if="type === 1" >
		<div class="page-cell">
		<mt-cell-swipe
			:right="rightButtons"
			:title="item.sNickName"
			:value="item.sContent"
			:time="item.dtCreateTime">
		</mt-cell-swipe>
	</div>
	</span>
   <!--群消息-->
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
    <!--朋友 row cell-->
	<span v-else-if="type === 3" >
		<div class="page-cell">
		<mt-cell-swipe
			:right="rightButtons"
			:title="item.sNickName">
		</mt-cell-swipe>
		</div>
	</span>
	<!--朋友 row cell 带checkbox选项-->
	<span v-else-if="type === 4" >
		<div class="page-cell">
		<mt-cell-swipe
			:right="rightButtons"
			:title="item.sNickName">
			<label class="checkbox mint-row-item" slot="checkbox2">
					<input type="checkbox" ng-model="friend.checked" ng-checked="friend.checked"
						   class="ng-valid ng-dirty ng-valid-parse ng-touched" checked="checked" value="on">
				</label>
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

