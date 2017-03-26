<template>
	<span class="primary-buttons">
		 <button nav-direction="back" class="button button-clear button-icon button-positive icon ion-ios-arrow-back"
				 @click="historyBack">
		 </button>
	 </span>
</template>
<script type="text/ecmascript-6">
	import back from 'common/js/util';
	export default {
		props: {},
		data() {
			return {

			}
		},
		methods: {
			historyBack(){
				window.history.back();
			}
		},
		mounted(){
		}
	};
</script>
