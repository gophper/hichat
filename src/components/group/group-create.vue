<template>
	<div>
		<!--header start-->
		<div class="bar-stable bar bar-header disable-user-behavior">
			<div class="buttons buttons-left">
				<goback></goback>
			</div>
			<h1 class="title" style="left: 68px; right: 68px;">创建群组</h1>
			<button class="button button-clear button-positive" @click="createNewGroup">
				创建
			</button>
		</div>
		<div class="scroll-content ionic-scroll  has-header has-tabs">
			<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
				<div class="row" slot="loadmore-header">
					<div class="col">
						<div class="fileUpload">
							<i class="icon ion-camera"></i>
							<input class="upload" type="file" accept="image/*" capture="camera">
						</div>
					</div>
					<div class="col-80">
						<input type="text" v-model="sGroupName" placeholder="为你的群起一个名字吧！"
							   style="height: 57px;" class="ng-pristine ng-valid ng-touched">
					</div>
				</div>
				<friendList ref="frdlist" :isCheck="true" :isLink="false"></friendList>
	</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import goback from 'components/common/goback';
	import popupInput from 'components/common/popup-input';
	import friendList from 'components/friends/friendList';
	import axios from 'axios';
	import {report,jsonToQuery} from 'common/js/util';
	import Vue from 'vue';
	import store from 'common/js/store';
	export default {
		props: {},
		data() {
			return {
				sGroupName:''
			}
		},
		methods: {
			showPromptAdd(){
				this.$refs.popup.hide = false;
			},
			createNewGroup(){
			    let ids = [];
				let memberNames = [];
			    this.$refs.frdlist.$data.friendsList.forEach( (v,i)=> {
					if(v.checked){
						ids.push(v.iUserId);
						memberNames.push(encodeURI(v.sNickName));
					}
				});
				let that = this;
				axios({
					'url': Vue.apiUrl + '/group/create',
					'method': 'post',
					'data':jsonToQuery({memberNames,ids,sGroupName:that.sGroupName}),
					'headers': {'x-requested-with': 'XMLHttpRequest'}
				}).then(response =>{
					if (response.data.ret !== 0 && response.data.msg) {
						alert(response.data.msg);
					}
					if (response.data.ret == 0) {
						//跳转到群聊
						Vue.router.push({ path: 'chatroom-group/'+response.data.data });
					}
				}).catch(function (error) {
					alert('系统繁忙，请稍后再试~');
					report(error);
				});
			}
		},
		components: {
			popupInput,
			goback,
			friendList
		},
		mounted(){
			//window.tester = this.popup;
			this.popup.submitCallback = function test(p) {
				console.log('submitCallback dddddddddddddddddddd' + p);
			}
		}
	};
</script>
<style>

	.fileUpload {
		position: relative;
	}

	.fileUpload input.upload {
		position: absolute;
		top: 0;
		right: 0;
		margin: 0;
		padding: 0;
		cursor: pointer;
		opacity: 0;
	}

	.fileUpload .icon {
		font-size: 24px;
		color: #cccccc;
		border: 1px solid #cccccc;
		border-radius: 50%;
		padding: 8px 13px;

		position: relative;
		top: 12px;
	}

	.mint-row-item.checkbox {
		position: absolute;
		top: 50%;
		right: 7.5px;
		left: 7.5px;
		z-index: 3;
		margin-top: -18.75px;
	}
	.mint-cell .checkbox input, .mint-cell .checkbox-icon {
		float: right;
	}
</style>
