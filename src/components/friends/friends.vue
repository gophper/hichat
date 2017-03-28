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

		<friendList  :hasRightBtn="true" :type="3">
			<div  slot="loadmore-header">
				<div class="item-divider item">
					<p>People with messenger</p>
				</div>
			</div>
		</friendList>
		<popupInput  ref="popup"  :title="popup.title" :tips="popup.tips" :inputType="popup.email"
					 :placeholder="popup.placeholder" :submitCallback="popup.submitCallback">

		</popupInput>
	</div>

</template>

<script type="text/ecmascript-6">

	import popupInput from 'components/common/popup-input';
	import friendList from 'components/friends/friend-list'
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
				}
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
		    friendList,
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
