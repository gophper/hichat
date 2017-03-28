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
        		    Eric
           		 <i class="icon ion-ios-arrow-forward"></i>
        		</a>
    			</span>
			</div>
		</div>
	</div>

	<div class="padding scroll-content ionic-scroll  has-header has-footer">
		<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
			<div style="height: 10px"></div>
			<!-- ngRepeat: chat in chatList -->
			<!-- ngIf: chatList.length -->
			<div class="list border-none [object Object]" ng-repeat="chat in chatList"
				 ng-class="[{'me':chat.userId==213}]" ng-if="chatList.length">
				<!-- ngIf: chat.userId!=213 -->

				<!-- ngIf: chat.userId==213 -->
				<div class="item item-avatar-right-s chat-me text-right" ng-if="chat.userId==213">
					<img ng-src="img/user04.jpg" src="img/user04.jpg">

					<p class="chat-text positive-bg text-left ng-binding"> Ionic.</p>
				</div>
				<!-- end ngIf: chat.userId==213 -->
			</div>
			<!-- end ngIf: chatList.length -->
			<!-- end ngRepeat: chat in chatList -->

			<!-- ngIf: chatList.length -->
			<div class="list border-none [object Object]" ng-repeat="chat in chatList"
				 ng-class="[{'me':chat.userId==213}]" ng-if="chatList.length">
				<!-- ngIf: chat.userId!=213 -->
				<div class="item item-avatar-s chat-friend" ng-if="chat.userId!=213">
					<img ng-src="img/user02.jpg" src="img/user02.jpg">

					<span class="badge avatar-badge avatar-badge-xs badge-stable"
						  ng-class="{'badge-positive':chat.user.friendType=='Messenger', 'badge-stable':chat.user.friendType=='facebook'}">
                    <!-- ngIf: chat.user.friendType=='Messenger' -->
						<!-- ngIf: chat.user.friendType=='facebook' -->
						<i class="icon ion-social-facebook light"	  ng-if="chat.user.friendType=='facebook'"></i>
						<!-- end ngIf: chat.user.friendType=='facebook' -->
                </span>

					<p class="chat-text stable-bg ng-binding"> Angular.</p>
				</div><!-- end ngIf: chat.userId!=213 -->

				<!-- ngIf: chat.userId==213 -->
			</div><!-- end ngIf: chatList.length --><!-- end ngRepeat: chat in chatList -->

			<!-- ngIf: chatList.length == 0 -->
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
	import popupInput from 'components/common/popup-input';
	export default {
		props: {},
		data() {
			return {
				popup: {
					title: '添加联系人',
					tips: '输入好友邮箱地址',
					email: 'email',
					placeholder: '邮箱地址',
					submitCallback:new Function(),
				hide: true
			},
				friendsList
		:
			[{
				iFriendId: 1,
				sNickName: '马云1',
				sDesc: '我是卖假货的',
				sRemark: '这家伙总是在我朋友圈推销假货',
				dtLastChat: '2017-3-21 15:42:12',
				sLastMsg: '亲，不包邮哦？',
				sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
			}, {
				iFriendId: 2,
				sNickName: '马云2',
				sDesc: '我是卖假货的',
				sRemark: '这家伙总是在我朋友圈推销假货',
				dtLastChat: '2017-3-21 15:42:12',
				sLastMsg: '亲，不包邮哦？',
				sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
			}, {
				iFriendId: 3,
				sNickName: '马云3',
				sDesc: '我是卖假货的',
				sRemark: '这家伙总是在我朋友圈推销假货',
				dtLastChat: '2017-3-21 15:42:12',
				sLastMsg: '亲，不包邮哦？',
				sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
			}, {
				iFriendId: 4,
				sNickName: '马云4',
				sDesc: '我是卖假货的',
				sRemark: '这家伙总是在我朋友圈推销假货',
				dtLastChat: '2017-3-21 15:42:12',
				sLastMsg: '亲，不包邮哦？',
				sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
			}, {
				iFriendId: 5,
				sNickName: '马云5',
				sDesc: '我是卖假货的',
				sRemark: '这家伙总是在我朋友圈推销假货',
				dtLastChat: '2017-3-21 15:42:12',
				sLastMsg: '亲，不包邮哦？',
				sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
			}, {
				iFriendId: 6,
				sNickName: '马云6',
				sDesc: '我是卖假货的',
				sRemark: '这家伙总是在我朋友圈推销假货',
				dtLastChat: '2017-3-21 15:42:12',
				sLastMsg: '亲，不包邮哦？',
				sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
			}, {
				iFriendId: 7,
				sNickName: '马云7',
				sDesc: '我是卖假货的',
				sRemark: '这家伙总是在我朋友圈推销假货',
				dtLastChat: '2017-3-21 15:42:12',
				sLastMsg: '亲，不包邮哦？',
				sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
			},]

		}
			;
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
			//window.tester = this.popup;
			this.popup.submitCallback = function test(p) {
				console.log('submitCallback dddddddddddddddddddd' + p);
			}
		}
	};
</script>
