<template>
	<div id="tabs" class="tab-nav tabs">
		<router-link  class="tab-item tab-item-active has-badge"  to="/recent">
			<i class="icon ion-ios-clock"></i>
			<span class="tab-title ng-binding" >最近</span>
		</router-link>

		<router-link  class="tab-item"  to="/group">
			<i class="icon ion-ios-people-outline"></i>
			<span class="tab-title ng-binding" >群组</span>
		</router-link>

		<router-link  class="tab-item"  to="/friends">
			<i class="icon ion-ios-list-outline"></i>
			<span class="tab-title ng-binding" >好友</span>
		</router-link>

		<router-link  class="tab-item"  to="/chatroom">
			<i class="icon ion-ios-gear-outline"></i>
			<span class="tab-title ng-binding" >设置</span>
		</router-link>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		props: {},
		data() {
			return {};
		},
		methods: {},
		components: {}
	};

</script>
