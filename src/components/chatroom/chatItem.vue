<template>
<<<<<<< HEAD

	<div class="list border-none">
		<div class="item" v-bind:class="classObject">
			<img  :src="item.sPorTrait">
			<p class="chat-text ng-binding" v-bind:class="classObject2"> {{item.sContent}}</p>
		</div>
=======
	<div class="item item-avatar-right-s chat-me text-right" >
		<img ng-src="img/user04.jpg" src="img/user04.jpg">
		<p class="chat-text positive-bg text-left"> Ionic.</p>
>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
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
<<<<<<< HEAD

=======
				frd:''
>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
			}
		},
		methods: {
			showPromptAdd(){
				this.$refs.popup.hide = false;
			},
			openSearch(){
			}
<<<<<<< HEAD

=======
>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
		},
		components: {
			popupInput,
			goback
		},
<<<<<<< HEAD
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
=======
		mounted(){
			this.frd = store.get('frd_'+ this.$route.params.uid);
>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767
			console.log(this.item);
		}
	};
</script>
