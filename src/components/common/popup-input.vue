<template>
	<div>
		<div class="backdrop visible active" v-show="!hide"></div>
		<div class="popup-container" :class="{'active':!hide,'popup-showing':!hide}">

			<div class="popup" v-show="!hide">
				<div class="popup-head">
					<h3 class="popup-title ng-binding" >{{title}}</h3>
				</div>
				<div class="popup-body">
					<span>{{tips}}</span>
					<input	v-model="response" type="inputType" class="ng-pristine ng-untouched ng-valid ng-valid-email">
				</div>
				<div class="popup-buttons">
					<button @click="buttonCanceled" 	class="button ng-binding button-clear">取消</button>
					<button @click="buttonSubmit" class="button ng-binding button-clear" :class="{'popup-btn-active':changeColor}">好了</button>
				</div>
			</div>
		</div>
	</div>

</template>
<script  type="text/ecmascript-6">
	export default {
		data() {
			return {
				response:'',
				hide:true,
				changeColor:false
			};
		},
		props: {
		    url:String,
			title:String,
			tips:String,
			inputType:String,
			placeholder:String,
			submitCallback:Function,
		},
		methods:{
		    buttonCanceled(){
				this.hide = true;
				this.response = '';
			},
			buttonSubmit(){
		        if(typeof(this.submitCallback) !== 'undefined'){
		            if(this.submitCallback.call(this,this.response)){
		                this.hide = true;
					}
				}else{
		            alert('回调方法不存在');
				}
				var that = this;
				setTimeout(function () {
				    if(!that.hide){
						that.buttonCanceled();
					}
				},60000);

			}
		},

		watch: {
		    response(newVal,oldVal){
		        newVal && (this.changeColor = true);
				!newVal && (this.changeColor = false);
			},
			title(newVal,oldVal){
				console.log(newVal);
				console.log(oldVal);
			}
		},

	};
</script>
<style>
	.popup-container {
		position: fixed;
	}
	.button-clear.button-clear.popup-btn-active{
		color: #009FE8;
	}
</style>
