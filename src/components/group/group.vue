<template>
	<div class="page-loadmore">
		<h1 class="page-title">Pull down</h1>
		<p class="page-loadmore-desc">在列表顶端, 按住 - 下拉 - 释放可以获取更多数据</p>
		<p class="page-loadmore-desc">此例请使用手机查看</p>
		<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
			<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
				<ul class="page-loadmore-list">
					<li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
				</ul>
				<div slot="top" class="mint-loadmore-top">
					<span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
					<span v-show="topStatus === 'loading'">
                       <mt-spinner type="snake"></mt-spinner>
                   </span>
				</div>
			</mt-loadmore>
		</div>
	</div>
</template>

<style lang="css">
	@component-namespace mint-spinner {
		@component double-bounce {
			position: relative;

			@descendent bounce1, bounce2 {
				width: 100%;
				height: 100%;
				border-radius: 50%;
				opacity: 0.6;
				position: absolute;
				top: 0;
				left: 0;

				animation: mint-spinner-double-bounce 2.0s infinite ease-in-out;
			}

			@descendent bounce2 {
				animation-delay: -1.0s;
			}
		}
	}

	@keyframes mint-spinner-double-bounce {
		0%, 100% {
			transform: scale(0.0);
		}

		50% {
			transform: scale(1.0);
		}
	}
</style>

<script type="text/babel">
	import MtLoadmore from 'components/common/loadmore';
	import MtSpinner from 'components/common/spinner/spinner';
	export default {
		data() {
			return {
				list: [],
				topStatus: '',
				wrapperHeight: 0
			};
		},

		methods: {
			handleTopChange(status) {
				this.topStatus = status;
			},

			loadTop() {
				setTimeout(() => {
					let firstValue = this.list[0];
					for (let i = 1; i <= 10; i++) {
						this.list.unshift(firstValue - i);
					}
					this.$refs.loadmore.onTopLoaded();
				}, 1500);
			}
		},

		created() {
			for (let i = 1; i <= 20; i++) {
				this.list.push(i);
			}
		},

		mounted() {
			this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
		},
		components:{
		    MtLoadmore,
			MtSpinner
		}
	};
</script>

