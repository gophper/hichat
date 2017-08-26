<template>
	<div>
	<div class="nav-bar-block" nav-bar="active">
		<div class="bar-stable bar bar-header disable-user-behavior" align-title="center">
			<div class="buttons buttons-left">
				<goback></goback>
			</div>
			<div class="title title-center header-item"
				 style="left: 37px; right: 37px; transform: translate3d(0px, 0px, 0px);">
				<span class="nav-bar-title">
        		<a ng-href="#/room-setting/room_d" class="ng-binding" href="#/room-setting/room_d">
        		    {{frd.sNickName}}
           		 <i class="icon ion-ios-arrow-forward"></i>
        		</a>
    			</span>
			</div>
		</div>
	</div>

	<div class="padding scroll-content ionic-scroll  has-header has-footer">
		<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
			<div style="height: 10px"></div>
			<chatItem v-for="chat in chatList" v-if="chatList.length" :item="chat"></chatItem>

		<!--	<div class="list border-none" ng-repeat="chat in chatList" ng-class="[{'me':chat.userId==213}]" ng-if="chatList.length">
				<div class="item item-avatar-s chat-friend" ng-if="chat.userId!=213">
					<img ng-src="img/user02.jpg" src="img/user02.jpg">
					<p class="chat-text stable-bg"> Angular.</p>
				</div>

			</div>-->
		</div>
		<div class="scroll-bar scroll-bar-v">
			<div class="scroll-bar-indicator scroll-bar-fade-out"
				 style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div>
		</div>
	</div>


	<div class="bar-light chat-bar bar bar-footer">
		<form class="row ng-pristine ng-invalid ng-invalid-required ng-valid-minlength" name="theform">
			<input class="col col-75 ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength" type="text" ng-model="chatText" placeholder="Type a message" ng-minlength="1" ng-required="true" required="required">
			<button class="col button" ng-click="sendChat(chatText)" ng-disabled="theform.$invalid" disabled="disabled">Send</button>
		</form>
	</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import goback from 'components/common/goback';
	import store from 'common/js/store';
	export default {
		props: {},
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
			goback,
			chatItem
		},
		mounted(){
			this.frd = store.get('frd_'+ this.$route.params.uid);
		}
	};
</script>
