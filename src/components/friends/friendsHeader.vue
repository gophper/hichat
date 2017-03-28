<template>
	<div class="bar-stable bar bar-header disable-user-behavior">
		<div class="buttons">
			<button class="button button-clear button-icon button-positive icon ion-ios-search" v-click="openSearch()"></button>
		</div>
		<div class="title" style="padding: 5px 0px; left: 44px; right: 44px;">
			<div class="button-bar bar-light">
				<a class="button button-outline button-positive active" v-class="{active: true}"
				   href="#/tab/friends/messenger">Messenger</a>
				<a class="button button-outline button-positive" v-class="{active: false}"
				   href="#/tab/friends/active">Active</a>
			</div>
		</div>
		<div class="buttons">
			<button class="button button-clear button-icon button-positive icon ion-ios-plus-empty"
					v-click="showPromptAdd()" style="position: absolute; right: 5px;">
			</button>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
		props: {},
		data() {
			return {
				activities: []
			};
		},
		methods: {},
		mounted() {

		},
		components: {}
	};
</script>

<style>
.bar.bar-stable {
    border-color: #BABABA;
    background-color: #d9d9d9;
    background-image: linear-gradient(0deg, #BABABA, #BABABA 50%, transparent 50%);
    color: #444;
}
</style>

