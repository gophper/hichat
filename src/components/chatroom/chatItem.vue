<template>

	<div class="list border-none">
		<div class="item" v-bind:class="classObject">
			<img  :src="item.sPorTrait">
			<p class="chat-text ng-binding" v-bind:class="classObject2"> {{item.sContent}}</p>
		</div>
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
		computed: {
			classObject(){
				if(this.item.iFromUserId  == store.get('info').iUserId){
					return {'item-avatar-right-s':true, 'chat-me' :true,'text-right':true};
				}else{
					return {'item-avatar-s':true, 'chat-friend' :true};
				}
			},
			classObject2(){
				if(this.item.iFromUserId  == store.get('info').iUserId){
					return {'positive-bg':true, 'text-left' :true};
				}else{
					return {'stable-bg':true};
				}
			}
		},
		mounted(){
			console.log(this.item);
		}
	};
</script>
