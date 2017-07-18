<template>
	<transition name="fade">
		<div>
			<createMsgHeader></createMsgHeader>
			<div class="scroll-content ionic-scroll  has-header has-tabs">
				<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
					<friendList></friendList>
				</div>
				<div class="scroll-bar scroll-bar-v">
					<div class="scroll-bar-indicator scroll-bar-fade-out"
						 style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div>
				</div>
			</div>

		</div>
	</transition>
</template>

<script type="text/ecmascript-6">

	import createMsgHeader from 'components/recent/createMsgHeader';
	import searchMsg from 'components/common/searchMsg';
	import friendList from 'components/friends/friendList';
	export default {
		props: {},
		data() {
			return {
				friendList: []
			};
		},
		methods: {},
		components: {
			createMsgHeader,
			searchMsg,
			friendList
		}
	};
</script>
<style>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
		opacity: 0
	}

</style>
<!--<style lang="stylus" rel="stylesheet/stylus">
</style>-->
