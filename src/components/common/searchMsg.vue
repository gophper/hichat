<template>
	<div class="item">
		<button class="button button-small button-block icon-left ion-ios-search" style="margin: 0" @click="openSearch">
			查找消息
		</button>
		<!-- <slot name="search-input" slot="search-input"></slot>-->
	</div>

</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';
	export default {
		props: {},
		data() {
			return {
				msgList: []
			};
		},
		methods: {
		    openSearch(e){
		        this.$emit('openInput',true);

			}
		},
		components: {}
	};
</script>
