<template>
	<div>
		<div class="backdrop"></div>
		<div class="click-block click-block-hide"></div>
		<div class="modal-backdrop" :class="{'hide':!globalOpenSearchWin,'active':globalOpenSearchWin}">
			<div :class="{'modal-backdrop-bg':globalOpenSearchWin}"></div>
			<div class="modal-wrapper">
				<div :class="changeBg" class="modal slide-in-up">
					<!--消息搜索输入组件-->
					<searchInput :shouldOpen="globalOpenSearchWin"></searchInput>
					<loadmorePanel>
						<!--  好友消息列表-->
						<friendMsgList  :hasRightBtn="false"></friendMsgList>
						<!-- 群消息列表 -->
						<groupMsgList  :hasRightBtn="false"></groupMsgList>
					</loadmorePanel>
				</div>
			</div>
		</div>
	</div>
</template>
<!--
可以通过全局信号量控制窗口开关（globalOpenSearchWin），
也可以通过父组件传入prop实现（openSearchWin）
-->

<script type="text/ecmascript-6">
	import Vue from 'vue';
	import searchInput from 'components/common/search-input.vue';
	import friendMsgList from 'components/msg/friend-msg-list';
	import groupMsgList from 'components/msg/group-msg-list';
	import loadmorePanel from 'components/common/loadmore-panel';
	export default {
		props: {
			openSearchWin: {
				type: Boolean
			}
		},
		data() {
			return {
				globalOpenSearchWin: false
			};
		},
		mounted(){
			this.openSearchWin = this.globalOpenSearchWin;
			Vue.refSearchWin = this;
		},
		computed: {
			changeBg(){
				if (this.globalOpenSearchWin) {
					return [
						'transparent',
						'ng-enter',
						'active',
						'ng-enter-active'
					];
				} else {
					return [
						'ng-leave',
						'ng-leave-active'
					];
				}

			}
		},
		methods: {

		},
		components: {
			searchInput,
			friendMsgList,
			groupMsgList,
			loadmorePanel
		}
	};

</script>

<style>
	.modal-backdrop-bg {
		-webkit-transition: opacity 300ms ease-in-out;
		transition: opacity 300ms ease-in-out;
		background-color: #000;
		opacity: 0.5;
	}

	.transparent {
		background-color: transparent;
	}

</style>
