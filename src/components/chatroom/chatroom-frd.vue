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

		<div class="padding scroll-content ionic-scroll  has-header has-footer" style="overflow-y: auto;">
			<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
				<div style="height: 10px"></div>
				<chatItem v-for="chat in chatList" v-if="chatList.length" :item="chat"></chatItem>
			</div>
			<div class="scroll-bar scroll-bar-v">
				<div class="scroll-bar-indicator scroll-bar-fade-out"
					 style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div>
			</div>
		</div>


		<div class="bar-light chat-bar bar bar-footer" >
			<form  @click="sendChat" class="row ng-pristine ng-invalid ng-invalid-required ng-valid-minlength" name="theform">
				<input class="col col-75 ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-minlength"
					   type="text" v-model="chatText" placeholder="输入……" >
				<button class="col button" ref="send_btn"  v-bind:class="{disabled:!chatText}" >Send</button>
			</form>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import goback from 'components/common/goback';
	import store from 'common/js/store';
	import chatItem from 'components/chatroom/chatItem';
	import wsk from 'common/js/util';
	import Vue from 'vue';
	import axios from 'axios';
	export default {
		props: {},
		data() {
			return {
				frd:'',
				chatList:[],
				chatText:'',
				ws:null,
				url: Vue.apiUrl
			}
		},
		methods: {
			showPromptAdd(){
				this.$refs.popup.hide = false;
			},
			getSocket(){
			    var that = this;
				if(!this.ws && "WebSocket" in window)
				{
					this.ws = new WebSocket("ws://192.168.1.105:8888");

				}
				else
				{
					alert("您的浏览器不支持 WebSocket!");
					return false;
				}
				this.ws.onopen = function()
				{

					var msg  = JSON.stringify({
						"from":(store.get('info').iUserId),
						"to":(that.frd.iUserId),
						"init":true
					});
					that.ws.send(msg);
					console.log("初始化数据发送中..."+msg);
				};
				this.ws.onmessage = function (evt)
				{
					var data = JSON.parse(evt.data);
					if(data.res == 0 ){
					    if(typeof data.data.length =='undefined'){
							Vue.set(that.chatList,that.chatList.length,data.data);
							console.log("初始化聊天数据已接收..."+data.data);
						}else{
							console.log("初始化聊天数据暂无");
						}

					}else{
						console.log("数据未接收..."+data.msg);
					}
				};

				this.ws.onclose = function()
				{
					// 关闭 websocket
					console.log("连接已关闭...");
				};
				return this.ws;
			},
			sendChat(evt){
                //必须是点中发送按钮并且发送内容不能为空
				if(this.$refs.send_btn != evt.target ||  !this.chatText){
					return;
				}

				var that = this;
				var msg  = JSON.stringify({
				    "from":(store.get('info').iUserId),
					"to":(that.frd.iUserId),
					"content":(that.chatText)
				});
				// Web Socket 已连接上，使用 send() 方法发送数据
				this.ws.send(msg);
				console.log("数据发送中..."+msg);

				this.ws.onmessage = function (evt)
				{
					var data = JSON.parse(evt.data);
					if(data.res == 0 &&  typeof data.data.length =='undefined'){
						Vue.set(that.chatList,that.chatList.length,data.data);
						console.log("数据已接收..."+data.data);
					}else{
						console.log("数据未接收..."+data.msg);
					}

				};

				this.ws.onclose = function()
				{
					// 关闭 websocket
					console.log("连接已关闭...");
				};


			},
			updateFrdList(){
				let that = this;
				axios({
					'url': this.url+'/frdmsg/list?frdId='+that.frd.iUserId,
					'method': 'get',
					'headers':{ 'x-requested-with': 'XMLHttpRequest'}
				}).then(function (response) {
					if(response.data.ret !== 0 && response.data.msg){
						alert(response.data.msg);
					}
					if(response.data.ret == 0){
						//注意不能用this
						store.set('frdmsglist:frdid:'+that.frd.iUserId+':uid:'+store.get('info').iUserId,response.data.data);
						that.chatList = response.data.data;
					}
				}).catch(function (error) {
					alert('系统繁忙，请稍后再试~');
					report(error);
				});
			}
		},
		components: {
			goback,
			chatItem
		},
		mounted(){
			this.getSocket();
			this.frd = store.get('frd_'+ this.$route.params.uid);
			this.updateFrdList();
		},destroyed(){
		    console.log('desttroyed');
		    this.ws.close();
		}
	};
</script>
