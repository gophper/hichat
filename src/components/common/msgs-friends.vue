<template>
	<div  class="scroll-content ionic-scroll  has-header">
			<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: 660 + 'px' }">
				<mt-loadmore :top-method="loadTop"   :noScrollBar="true" @top-status-change="handleTopChange" ref="loadmore">
					<div class="disable-user-behavior">
						<div class="list">
							<slot></slot>
						</div>
					</div>
					<div slot="top" ref="loadmoreTop"  class="mint-loadmore-top">
						<span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
						<span v-show="topStatus === 'loading'">
			   <mt-spinner type="snake"></mt-spinner>
			</span>
					</div>
				</mt-loadmore>
			</div>
		</div>
</template>

<script type="text/ecmascript-6">
	import mtLoadmore from 'components/common/loadmore';
	import mtSpinner from 'components/common/spinner/spinner';
	export default {
		props: {

		},
		data() {
			return {
				wrapperHeight: 0,
				topStatus: ''
			};
		},
		mounted(){
			this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect()
					.top - document.getElementById('tabs').getBoundingClientRect().height;
		},
		computed: {
		},
		methods: {
			handleTopChange(status) {
				this.topStatus = status;
			},

			loadTop() {
				setTimeout(() => {

					//this.$refs.loadmore.onTopLoaded();
				}, 1500);
			},
		},
		components: {
			mtLoadmore,
			mtSpinner
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
