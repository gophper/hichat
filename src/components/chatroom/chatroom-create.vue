<template>
	<!--	header start-->
	<div class="bar-stable bar bar-header disable-user-behavior">
		<div class="buttons buttons-left">
			<goback></goback>
		</div>
		<h1 class="title" style="left: 68px; right: 68px;">创建群组</h1>
		<button class="button button-clear button-positive" @click="createNewGroup">创建


		</button>
	</div>
	<!--	header end-->

	<!--form body start-->

	<ion-content class="scroll-content ionic-scroll  has-header">
		<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
			<div class="row">
				<div class="col">
					<div class="fileUpload">
						<i class="icon ion-camera"></i>
						<input class="upload" type="file" accept="image/*" capture="camera">
					</div>
				</div>
				<div class="col-80">
					<input type="text" ng-model="$root.newGroupName" placeholder="Name this group chat"
						   style="height: 57px;" class="ng-pristine ng-valid ng-touched">
				</div>
			</div>

			<div class="disable-user-behavior">
				<div class="list">

					<div class="item-checkbox item-checkbox-right item-avatar item" ng-repeat="friend in friends">
						<label class="checkbox">
							<input type="checkbox" ng-model="friend.checked" ng-checked="friend.checked"
								   class="ng-pristine ng-untouched ng-valid">
						</label>
						<img ng-src="img/user03.jpg" src="img/user03.jpg">
						<span class="badge avatar-badge avatar-badge-s badge-positive"
							  ng-class="{'badge-positive':friend.friendType=='Messenger', 'badge-stable':friend.friendType=='facebook'}">
                   			 <!-- ngIf: friend.friendType=='Messenger' -->
							<i class="icon ion-ios-bolt" ng-if="friend.friendType=='Messenger'"></i>
							<!-- end ngIf: friend.friendType=='Messenger' -->
							<!-- ngIf: friend.friendType=='facebook' -->
              			</span>
						<h2>
							<small class="ng-binding">Apple</small>
						</h2>
					</div><!-- end ngRepeat: friend in friends -->
					<div class="item-checkbox item-checkbox-right item-avatar item" ng-repeat="friend in friends">
						<label class="checkbox">
							<input type="checkbox" ng-model="friend.checked" ng-checked="friend.checked"
								   class="ng-pristine ng-untouched ng-valid">
						</label>
						<img ng-src="img/user05.jpg" src="img/user05.jpg">
						<span class="badge avatar-badge avatar-badge-s badge-stable"
							  ng-class="{'badge-positive':friend.friendType=='Messenger', 'badge-stable':friend.friendType=='facebook'}">
                    <!-- ngIf: friend.friendType=='Messenger' -->
							<!-- ngIf: friend.friendType=='facebook' -->
							<i class="icon ion-social-facebook light" ng-if="friend.friendType=='facebook'"></i>
							<!-- end ngIf: friend.friendType=='facebook' -->
                		</span>

						<h2>
							<small class="ng-binding">Mike</small>
						</h2>
					</div><!-- end ngRepeat: friend in friends -->
				</div>
			</div>
		</div>
		<div class="scroll-bar scroll-bar-v">
			<div class="scroll-bar-indicator scroll-bar-fade-out"
				 style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div>
		</div>
	</ion-content>
	<!--form body end-->
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
					submitCallback: new Function(),
					hide: true
				},
				friendsList: [{
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
