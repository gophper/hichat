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
		<!--header end-->

		<!--form body start-->
			<friendList  :hasRightBtn="false" :type="4">
				<div class="row" slot="loadmore-header">
					<div class="col">
						<div class="fileUpload">
							<i class="icon ion-camera"></i>
							<input class="upload" type="file" accept="image/*" capture="camera">
						</div>
					</div>
					<div class="col-80">
						<input type="text" ng-model="$root.newGroupName" placeholder="为你的群起一个名字吧！"
							   style="height: 57px;" class="ng-pristine ng-valid ng-touched">
					</div>
				</div>
			</friendList>
		<!--form body end-->
	</div>

</template>

<script type="text/ecmascript-6">
	import goback from 'components/common/goback';
	import popupInput from 'components/common/popup-input';
	import friendList from 'components/friends/friend-list'
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
				}
			}
				;
		},
		methods: {
			showPromptAdd(){
				this.$refs.popup.hide = false;
			},
			createNewGroup(){
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
