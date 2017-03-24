<template>
	<div>
		<router-view class="router-view-enter" ></router-view>
		<tabs></tabs>
		<search-window></search-window>

	</div>
</template>

<script type="text/ecmascript-6">
	import tabs from 'components/main/tabs';
	import searchWindow from 'components/msg/search/search-window.vue';
	export default {
		props: {},
		data() {
			return {

			};
		},
		methods: {

		},
		components: {tabs,searchWindow}
	};

</script>

