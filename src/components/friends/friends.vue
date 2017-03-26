<template>
	<div>
		<div class="bar-stable bar bar-header disable-user-behavior">
			<div class="buttons" style="visibility: hidden">
				<button class="button button-clear button-icon button-positive icon ion-ios-search" @click="openSearch"></button>
			</div>
			<div class="title" style="padding: 5px 0px; left: 44px; right: 44px;">
				<div class="button-bar bar-light">
					<a class="button button-outline button-positive active" :class="{active: true}"
					   href="#/tab/friends/messenger">Messenger</a>
					<a class="button button-outline button-positive" :class="{active: false}"
					   href="#/tab/friends/active">Active</a>
				</div>
			</div>
			<div class="buttons">
				<button class="button button-clear button-icon button-positive icon ion-ios-plus-empty"	@click="showPromptAdd" style="position: absolute; right: 5px;">
				</button>
			</div>
		</div>

		<msgsFriends>
			<div class="item-divider item">
				<p>People with messenger</p>
			</div>
			<!--  好友列表-->
			<div v-if="friendsList">
				<!--  好友列表-->
				<div  v-for="friend in friendsList">
					<portraitCard :item="friend" :hasRightBtn="true" :type="3"></portraitCard>
				</div>
			</div>
		</msgsFriends>
		<popupInput  ref="popup"  :title="popup.title" :tips="popup.tips" :inputType="popup.email"
					 :placeholder="popup.placeholder" :submitCallback="popup.submitCallback">

		</popupInput>
	</div>

</template>

<script type="text/ecmascript-6">

	import popupInput from 'components/common/popup-input';
	import msgsFriends from 'components/common/msgs-friends';
	import portraitCard from 'components/common/portraitCard';
	export default {
		props: {},
		data() {
			return {
			    popup:{
			        title:'添加联系人',
					tips:'输入好友邮箱地址',
					email:'email',
					placeholder:'邮箱地址',
					submitCallback:()=>{},
					hide:true
				},
				friendsList: [{
					iFriendId: 1,
					sNickName: '马云1',
					sDesc: '我是卖假货的',
					sRemark:'这家伙总是在我朋友圈推销假货',
					dtLastChat:'2017-3-21 15:42:12',
					sLastMsg:'亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				},{
					iFriendId: 2,
					sNickName: '马云2',
					sDesc: '我是卖假货的',
					sRemark:'这家伙总是在我朋友圈推销假货',
					dtLastChat:'2017-3-21 15:42:12',
					sLastMsg:'亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				},{
					iFriendId: 3,
					sNickName: '马云3',
					sDesc: '我是卖假货的',
					sRemark:'这家伙总是在我朋友圈推销假货',
					dtLastChat:'2017-3-21 15:42:12',
					sLastMsg:'亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				},{
					iFriendId: 4,
					sNickName: '马云4',
					sDesc: '我是卖假货的',
					sRemark:'这家伙总是在我朋友圈推销假货',
					dtLastChat:'2017-3-21 15:42:12',
					sLastMsg:'亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				},{
					iFriendId: 5,
					sNickName: '马云5',
					sDesc: '我是卖假货的',
					sRemark:'这家伙总是在我朋友圈推销假货',
					dtLastChat:'2017-3-21 15:42:12',
					sLastMsg:'亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				},{
					iFriendId: 6,
					sNickName: '马云6',
					sDesc: '我是卖假货的',
					sRemark:'这家伙总是在我朋友圈推销假货',
					dtLastChat:'2017-3-21 15:42:12',
					sLastMsg:'亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				},{
					iFriendId: 7,
					sNickName: '马云7',
					sDesc: '我是卖假货的',
					sRemark:'这家伙总是在我朋友圈推销假货',
					dtLastChat:'2017-3-21 15:42:12',
					sLastMsg:'亲，不包邮哦？',
					sPortrait: 'http://localhost:8088/static/img/portrait/user02.jpg'
				}, ]

			};
		},
		methods: {
			showPromptAdd(){
				this.$refs.popup.hide = false;
			},
			openSearch(){
			}
		},
		components: {
			portraitCard,
			msgsFriends,
			popupInput
		},
		mounted(){
		    //window.tester = this.popup;
		    this.popup.submitCallback = function test(p){
		        console.log('submitCallback dddddddddddddddddddd'+p);
			}
		}
	};
</script>
