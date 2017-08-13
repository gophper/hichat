<template>
	<div>
		<div class="bar-stable bar bar-header disable-user-behavior" align-title="center">
			<div class="buttons buttons-left" style="transition-duration: 0ms;"></div>
			<div class="title title-center header-item" style="left: 73px; right: 73px;
		transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">群组
			</div>
				<router-link  class="buttons buttons-right" to="/group-create" style="transition-duration: 0ms;">
       					<button class="button button-clear button-positive">创建</button>
				</router-link >
		</div>
		<div class="scroll-content ionic-scroll  has-header has-tabs">
			<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
				<!-- ngRepeat: groups in groupRow -->
				<div class="row">
					<!-- ngRepeat: room in groups -->
					<div class="col col-50" v-for="g in groups">
						<div class="list card">
							<span class="item item-avatar item-avatar-center item-avatar-l text-center" @click="forward(g)" >
								<img src="/static/img/defport.jpg" >
								<h3>
									<small class="ng-binding">{{g.sGroupName}}</small>
								</h3>
								<p class="ng-binding">{{g.dtCreateTime}}</p>
							</span>

							<a nav-direction="forward" class="item item-divider text-center" href="#/room/room_a">
								<p class="ng-binding">{{g.sMemberNames}}</p>
							</a>
						</div>
					</div>
				</div>

			</div>
			<div class="scroll-bar scroll-bar-v">
				<div class="scroll-bar-indicator scroll-bar-fade-out"
					 style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div>
			</div>
		</div>
	</div>
</template>

<style lang="css">

</style>

<script type="text/babel">
	import axios from 'axios';
	import {report} from 'common/js/util';
	import Vue from 'vue';
	import store from 'common/js/store';
	export default {
		data() {
			return {
				groups: []

			};
		},

		methods: {
		    forward(g){
				Vue.router.push({ path: '/chatroom-group/'+g.iGroupId });
			},
			updateGList(){
				let that = this;
				axios({
					'url': Vue.apiUrl + '/group/list',
					'method': 'get',
					'headers': {'x-requested-with': 'XMLHttpRequest'}
				}).then(function (response) {
					if (response.data.ret !== 0 && response.data.msg) {
						alert(response.data.msg);
					}
					if (response.data.ret == 0) {
						//注意不能用this
						that.groups = response.data.data;
					}
				}).catch(function (error) {
					//alert('系统繁忙，请稍后再试~');
					report(error);
				});
			}
		},

		created() {

		},

		mounted() {
			this.updateGList();
		},
		components: {}
	};
</script>

