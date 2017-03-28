<template>
	<div class="bar-stable nav-bar-container" nav-bar-transition="ios" nav-bar-direction="swap" nav-swipe="">
		<div class="nav-bar-block" nav-bar="active">
			<div class="bar-stable bar disable-user-behavior" align-title="center">
				<div class="buttons buttons-left" style="transition-duration: 0ms;"></div>
				<div class="title title-center header-item"
					 style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms; left: 49px; right: 49px;">
					最近
				</div>
				<router-link  class="buttons buttons-right" to="/create_msg" style="transition-duration: 0ms;">
					<span class="right-buttons">
       					 <button class="button button-clear button-icon button-positive icon ion-ios-compose-outline" >
						 </button>
    				</span>
				</router-link >
			</div>
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

