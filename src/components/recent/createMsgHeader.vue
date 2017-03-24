<template>

	<div class="bar-stable bar bar-header disable-user-behavior">
		<button class="button button-clear button-positive" @click="goback">取消</button>
		<h1 class="title" style="left: 68px; right: 68px;">创建对话</h1>
		<button class="button button-clear button-positive">  <!--v-click="closeNewChat(); openNewGroup()"-->群聊</button>
	</div>

</template>
<script type="text/ecmascript-6">
	import goback from 'common/js/util';
	export default {
		props: {},
		data() {
			return {
			};
		},
		methods: {
		    goback(){
				window.history.back();
			}
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

