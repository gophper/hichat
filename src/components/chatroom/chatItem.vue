<template>
	<div class="item item-avatar-right-s chat-me text-right" >
		<img ng-src="img/user04.jpg" src="img/user04.jpg">
		<p class="chat-text positive-bg text-left"> Ionic.</p>
	</div>
</template>

<script type="text/ecmascript-6">
	import goback from 'components/common/goback';
	import popupInput from 'components/common/popup-input';
	import store from 'common/js/store';
	export default {
		props: {
		    item:Object
		},
		data() {
			return {
				frd:''
			}
		},
		methods: {
			showPromptAdd(){
				this.$refs.popup.hide = false;
			},
			openSearch(){
			}
		},
		components: {
			popupInput,
			goback
		},
		mounted(){
			this.frd = store.get('frd_'+ this.$route.params.uid);
			console.log(this.item);
		}
	};
</script>
