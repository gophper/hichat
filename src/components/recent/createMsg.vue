<template>
	<transition name="fade">
		<div>
			<createMsgHeader></createMsgHeader>
			<friendList  :hasRightBtn="false" :type="3" ></friendList>
		</div>
	</transition>
</template>

<script type="text/ecmascript-6">

	import createMsgHeader from 'components/recent/createMsgHeader';
	import searchMsg from 'components/common/searchMsg';
	import friendList from 'components/friends/friend-list'
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
