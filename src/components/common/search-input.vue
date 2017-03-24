<template>
	<div  slot="search-input"  :class="{'mint-active':shouldOpen,'mint-leave':!shouldOpen}" ref="openSearchBtn"
		  class="bar-stable item-input-inset bar bar-header disable-user-behavior">
		<label class="item-input-wrapper">
			<i class="icon ion-ios-search placeholder-icon"></i>
			<input type="search" placeholder="Search" ng-model="search" class="ng-pristine ng-valid ng-touched">
		</label>
		<button class="button button-clear button-positive" @click="closeSearch">
			取消
        </button>
	</div>

</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	export default {
		props: {
			shouldOpen:{
			    type:Boolean
			}
		},
		data() {
			return {

			};
		},
		methods: {
			closeSearch(){
				Vue.refSearchWin.globalOpenSearchWin= false;
			}
		},
		components: {}
	};
</script>
<style>


</style>
