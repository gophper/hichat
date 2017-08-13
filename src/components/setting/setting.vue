<template>
	<div>
		<div class="backdrop"></div>
		<div ref="edit" class="bar-stable bar bar-header disable-user-behavior" align-title="center">
			<div class="buttons buttons-left" style="transition-duration: 0ms;"><span class="left-buttons">
      		  <button class="button button-clear button-positive" ng-click="showEdit()">Edit</button>
    		</span></div>
			<div class="title title-center header-item"
				 style="transform: translate3d(0px, 0px, 0px); left: 52px; right: 52px; transition-duration: 0ms;">
				Setting
			</div>
			<div class="buttons buttons-right" style="transition-duration: 0ms;"></div>
		</div>
		<div id="tab-account" class="scroll-content ionic-scroll  has-header has-tabs" style="overflow-y: auto">
			<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
				<div class="disable-user-behavior">
					<ul class="list">
						<li class="item-avatar item-avatar-center item-avatar-xl text-center item" ng-if="userId!==213">
							<img :src="info.sPorTrait">
							<h3>
								<small class="ng-binding">Diamond</small>
							</h3>
							<button class="button button-clear button-small button-positive ng-binding"
									ng-click="showEdit()">hi@weburner.com
							</button>
						</li>
						<li class="item-icon-left item-icon-right item">
							<i class="icon ion-ios-camera-outline positive"></i>
							Shared Photos
							<i class="icon ion-ios-arrow-right">
								<input type="file" accept="image/png,image/gif,image/jpeg" @change="upload" name="portrait" class="portrait-input">
							</i>
						</li>

						<div class="item item-toggle toggle-large ng-valid" ng-model="setting_preview">
							<div ng-transclude="">
								<h3>
									<small>Notification Previews</small>
								</h3>
							</div>
							<label class="toggle disable-user-behavior">
								<input type="checkbox"   ng-model="setting_preview"   class="ng-pristine ng-untouched ng-valid">
								<div class="track">
									<div class="handle"></div>
								</div>
							</label>
						</div>

						<div class="item item-toggle toggle-large ng-valid" ng-model="setting_sound">
							<div ng-transclude="">
								<h3>
									<small>In-App Sound</small>
								</h3>
							<p ng-if="!setting_sound" class="">Off</p>
							</div>
							<label class="toggle disable-user-behavior">
								<input type="checkbox" ng-model="setting_sound"	   class="ng-pristine ng-untouched ng-valid">
								<div class="track"><div class="handle"></div>
								</div>
							</label></div>

						<div class="item item-toggle toggle-large ng-valid" ng-model="setting_vibration">
							<div ng-transclude="">
								<h3>
									<small>In-App Vibrate</small>
								</h3>
								<p ng-if="!setting_vibration" class="">Off</p>
							</div>
							<label class="toggle disable-user-behavior">
								<input type="checkbox"  ng-model="setting_vibration"   class="ng-pristine ng-untouched ng-valid">
								<div class="track">
									<div class="handle"></div>
								</div>
							</label>
						</div>

					</ul>
				</div>
			</div>

		</div>

	</div>

</template>

<script type="text/ecmascript-6">
	import axios from 'axios';
	import {report} from 'common/js/util';
	import store from 'common/js/store';
	import Vue from 'vue';
	export default {
		props: {},
		data() {
			return {
				info:{}
			};
		},
		mounted(){
			this.info = store.get('info');
		},
		methods: {
			upload(e){
			    let that = this;
				let file = e.target.files[0];
				let d = new Date();
				let type = file.name.split('.');
				let param = new FormData(); //创建form对象
				param.append('chunk','0');//断点传输
				param.append('chunks','1');
				param.append('portrait',file,file.name)
				console.log(param.get('file'));
				let config = {
					headers:{'Content-Type':'multipart/form-data','x-requested-with': 'XMLHttpRequest'}
				};
				axios.post( Vue.apiUrl+'/setting/portrait',param,config).then( response=>{
					if(response.data.msg){
						alert(response.data.msg);
					}
					if(response.data.ret == 0){
						//注意不能用this
						that.info.sPorTrait = response.data.data;
						let info = store.get('info');
						info.sPorTrait = that.info.sPorTrait;
						store.set('info',info)
					}
				}).catch(function (error) {
					alert('系统繁忙，请稍后再试~');
					report(error);
				});
			}
		},
		components: {}
	};
</script>
<style>
	.portrait-input{
		opacity: 0;
		width: 35px;
		position: absolute;
	}
</style>

