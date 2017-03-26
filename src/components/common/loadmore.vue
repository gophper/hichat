<template>
	<div class="mint-loadmore-content scroll-target" style="position: relative;"
		 :class="{ 'is-dropped': topReleased || bottomReleased}"
		 :style="{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }">
		<slot name="top">
			<div class="mint-loadmore-top" v-if="topMethod">
				<spinner v-if="topStatus === 'loading'" class="mint-loadmore-spinner" :size="20"
						 type="fading-circle"></spinner>
				<span class="mint-loadmore-text">{{ topText }}</span>
			</div>
		</slot>
		<slot></slot>
		<slot name="bottom">
			<div class="mint-loadmore-bottom" v-if="bottomMethod">
				<spinner v-if="bottomStatus === 'loading'" class="mint-loadmore-spinner" :size="20"
						 type="fading-circle"></spinner>
				<span class="mint-loadmore-text">{{ bottomText }}</span>
			</div>
		</slot>
	</div>

</template>

<style>


	.mint-loadmore {
		overflow-y: hidden;
	}

	.mint-loadmore-content {

	}

	.mint-loadmore-content.is-dropped {
		-webkit-transition: .2s;
		transition: .2s
	}

	.mint-loadmore-top, .mint-loadmore-bottom {
		text-align: center;
		height: 50px;
		line-height: 50px
	}

	.mint-loadmore-top {
		margin-top: -50px
	}

	.mint-loadmore-top span {
		display: inline-block;
		transition: .2s linear;
		-webkt-transition: .2s linear;
		vertical-align: mid;
	}

	.mint-loadmore-bottom {
		margin-bottom: -50px
	}

	.mint-loadmore-spinner {
		display: inline-block;
		margin-right: 5px;
		vertical-align: middle
	}

	.mint-loadmore-text {
		vertical-align: middle
	}

	.page-loadmore-wrapper {
		overflow: hidden;
		position: relative;
		background: #FFF;
	}

	.page-loadmore .mint-spinner {
		display: inline-block;
		vertical-align: middle;
	}

	.mint-loadmore-bottom span {
		display: inline-block;
		-webkit-transition: .2s linear;
		transition: .2s linear;
		vertical-align: middle
	}

	.mint-loadmore-bottom span.is-rotate {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
	}


</style>

<script type="text/babel">
	import spinner from './fading-circle.vue';
	export default {
		name: 'mt-loadmore',
		components: {
			'spinner': spinner
		},

		props: {
			maxDistance: {
				type: Number,
				default: 0
			},
			autoFill: {
				type: Boolean,
				default: true
			},
			distanceIndex: {
				type: Number,
				default: 2
			},
			topPullText: {
				type: String,
				default: '下拉刷新'
			},
			topDropText: {
				type: String,
				default: '释放更新'
			},
			topLoadingText: {
				type: String,
				default: '加载中...'
			},
			topDistance: {
				type: Number,
				default: 70
			},
			topMethod: {
				type: Function
			},
			bottomPullText: {
				type: String,
				default: '上拉刷新'
			},
			bottomDropText: {
				type: String,
				default: '释放更新'
			},
			bottomLoadingText: {
				type: String,
				default: '加载中...'
			},
			bottomDistance: {
				type: Number,
				default: 70
			},
			bottomMethod: {
				type: Function
			},
			bottomAllLoaded: {
				type: Boolean,
				default: false
			},
			noScrollBar: {
				type: Boolean,
				default: false
			},
			headHeight: {
				type: Number,
				default: 50
			}
		},

		data() {
			return {
				height: 0,
				translate: 0,
				scrollEventTarget: null,
				containerFilled: false,
				topText: '',
				topReleased: false,
				bottomText: '',
				bottomReleased: false,
				bottomReached: false,
				direction: '',
				startY: 0,
				startScrollTop: 0,
				currentY: 0,
				topStatus: '',
				bottomStatus: '',
				wrapper: null,
				onTouchStartTransitionVal: null,
				//底部最大溢出高度
				bottomOFHeightLimit: 80,
				bottomTransitionLimit: 0,
				loadmoreTop: 50,
				wrapperHeight:0
			};
		},

		watch: {
			topStatus(val) {
				this.$emit('top-status-change', val);
				switch (val) {
					case 'pull':
						this.topText = this.topPullText;
						break;
					case 'drop':
						this.topText = this.topDropText;
						break;
					case 'loading':
						this.topText = this.topLoadingText;
						break;
				}
			},

			bottomStatus(val) {
				this.$emit('bottom-status-change', val);
				switch (val) {
					case 'pull':
						this.bottomText = this.bottomPullText;
						break;
					case 'drop':
						this.bottomText = this.bottomDropText;
						break;
					case 'loading':
						this.bottomText = this.bottomLoadingText;
						break;
				}
			}
		},

		methods: {
			onTopLoaded() {
				this.translate = 0;
				setTimeout(() => {
					this.topStatus = 'pull';
				}, 200);
			},

			onBottomLoaded() {
				this.bottomStatus = 'pull';
				this.bottomReleased = false;
				this.$nextTick(() => {
					if (this.scrollEventTarget === window) {
						document.body.scrollTop += 50;
					} else {
						this.scrollEventTarget.scrollTop += 50;
					}
					this.translate = 0;
				});
				if (!this.bottomAllLoaded && !this.containerFilled) {
					this.fillContainer();
				}
			},

			getScrollEventTarget(element) {
				let currentNode = element;
				console.log("start" + element);
				while (currentNode && currentNode.tagName !== 'HTML' &&
				currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
					console.log("item" + currentNode);
					let node = document.defaultView.getComputedStyle(currentNode);
					let overflowY = node.overflowY;
					if (overflowY === 'scroll' || overflowY === 'auto' || currentNode.className.match('scroll-target')) {
						return currentNode;
					}
					currentNode = currentNode.parentNode;
				}
				return window;
			},

			getScrollTop(element) {
				if (element === window) {
					return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
				} else if (this.noScrollBar) {
					console.log("scrolltop" + element.getBoundingClientRect().top);
					return element.getBoundingClientRect().top;
					/*  let top = -( element.getBoundingClientRect().top+
					 (this.$parent.$refs.loadmoreTop.offsetHeight || this.$parent.$refs.loadmoreTop.clientHeight));*/

				} else {
					return element.scrollTop;
				}
			},

			bindTouchEvents() {
				this.$el.addEventListener('touchstart', this.handleTouchStart);
				this.$el.addEventListener('touchmove', this.handleTouchMove);
				this.$el.addEventListener('touchend', this.handleTouchEnd);
			},

			init() {
				this.topStatus = 'pull';
				this.bottomStatus = 'pull';
				this.topText = this.topPullText;
				this.scrollEventTarget = this.getScrollEventTarget(this.$el);
				if (typeof this.bottomMethod === 'function') {
					this.fillContainer();
					this.bindTouchEvents();
				}
				if (typeof this.topMethod === 'function') {
					this.bindTouchEvents();
				}
			},

			fillContainer() {
				if (this.autoFill) {
					this.$nextTick(() => {
						if (this.scrollEventTarget === window) {
							this.containerFilled = this.$el.getBoundingClientRect().bottom >=
								document.documentElement.getBoundingClientRect().bottom;
						} else {
							this.containerFilled = this.$el.getBoundingClientRect().bottom >=
								this.scrollEventTarget.getBoundingClientRect().bottom;
						}
						if (!this.containerFilled) {
							this.bottomStatus = 'loading';
							this.bottomMethod();
						}
					});
				}
			},

			checkBottomReached() {
				if (this.scrollEventTarget === window) {
					return document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight;
				} else if (this.wrapperBottom) {
					return this.getScrollBottom() < 0;
				} else {
					return this.$el.getBoundingClientRect().bottom <= this.scrollEventTarget.c().bottom + 1;
				}
			},

			handleTouchStart(event) {
				this.startY = event.touches[0].clientY;
				this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
				this.bottomReached = false;
				if (this.topStatus !== 'loading') {
					this.topStatus = 'pull';
					/*不开启过渡*/
					this.topReleased = false;
				}
				if (this.bottomStatus !== 'loading') {
					this.bottomStatus = 'pull';
					/*不开启过渡*/
					this.bottomReleased = false;
				}
			},

			handleTouchMove(event) {
				if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
					return;
				}
				this.currentY = event.touches[0].clientY;
				let distance = (this.currentY - this.startY) / this.distanceIndex;
				console.log("this.currentY " + this.currentY + " startY" + this.startY + " distance:" + distance);
				this.direction = distance > 0 ? 'down' : 'up';
				if (typeof this.topMethod === 'function' && this.direction === 'down' && this.topStatus !== 'loading') {
					event.preventDefault();
					event.stopPropagation();
					let distance = (this.currentY - this.startY) / this.distanceIndex;
					if (this.maxDistance > 0) {
						this.translate = distance <= this.maxDistance ? distance - this.startScrollTop : this.translate;
					} else {
						/*   下拉转上拉*/
						if (this.startScrollTop < 0) {
							this.translate = this.startScrollTop + distance
							/*   本来就是上拉 ，则正正想加*/
						} else {
							this.translate = distance + this.startScrollTop;
						}
					}
					/*if (this.translate < 0) {
					 this.translate = 0;
					 }*/
					this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
				}

				if (this.direction === 'up') {
					this.bottomReached = this.bottomReached || this.checkBottomReached();
				}
				/*if (typeof this.bottomMethod === 'function' && this.direction === 'up' &&
				 this.bottomReached && this.bottomStatus !== 'loading' && !this.bottomAllLoaded) {
				 event.preventDefault();
				 event.stopPropagation();
				 if (this.maxDistance > 0) {
				 this.translate = Math.abs(distance) <= this.maxDistance
				 ? this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance : this.translate;
				 } else {
				 this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance;
				 }

				 if (this.translate > 0) {
				 this.translate = 0;
				 }
				 this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
				 }*/

				if (this.noScrollBar && this.direction === 'up') {
					if (!this.bottomReached && this.bottomStatus !== 'loading') {
						event.preventDefault();
						event.stopPropagation();
						if (this.maxDistance > 0) {
							this.translate = Math.abs(distance) <= this.maxDistance
								? this.startScrollTop + distance : this.translate;
						} else {
							console.log("this.startScrollTop  :" + this.startScrollTop);
							this.translate = this.startScrollTop + distance;
						}
						/*下拉过程中不可能出现translate大于0，有的话肯定是异常，置零*/
						if (this.translate > 0) {
							console.log("下拉过程中不可能出现translate大于0，有的话肯定是异常，置零");
							this.translate = 0;
						}
						/*上拉，没有到达底部，也没有在加载过程中*/
						this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
					} else {
						/*已经到达底部，如果继续上拉，构造橡皮筋效果*/
						/*let tempTrans = this.startScrollTop + distance / Math.abs(distance / 5);
						let bottomDrawLimit = Math.abs(this.bottomTransitionLimit) + this.bottomOFHeightLimit;
						console.log("this.startScrollTop :"+this.startScrollTop +"   bottomDrawLimit:"+bottomDrawLimit);
                         //						 target.height  + target.top - (this.wrapperHeight + this.headHeight)
						//-tempTrans + this.headHeight+this.wrapperHeight >= this.height;
						if (Math.abs(tempTrans) >= bottomDrawLimit) {
							this.translate = -bottomDrawLimit;
							console.log("到达极限,维持"+bottomDrawLimit);
						} else {
							console.log("还可以上拉哦！"+tempTrans);
							this.translate = tempTrans;
						}*/


					}

				}
			},

			handleTouchEnd() {
				if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) >= 0 && this.translate > 0) {
					this.topReleased = true;
					if (this.topStatus === 'drop') {
						this.translate = '50';
						this.topStatus = 'loading';
						this.topMethod();
					} else {
						this.translate = '0';
						this.topStatus = 'pull';
					}
				}
				if (this.noScrollBar) {
					//this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + this.distance;
					//return;
				}
				/*上拉到底部，弹性恢复到touchstart时候的transition*/
				if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
					/* 开启弹性过渡*/
					this.bottomReleased = true;
					//恢复初始化
					this.bottomReached = false;
					//底部拉到极限，松开手，则弹回
					//this.translate = this.bottomTransitionLimit;
					/*if (this.bottomStatus === 'drop') {
					 this.translate = '-50';
					 this.bottomStatus = 'loading';
					 this.bottomMethod();
					 } else {
					 this.translate = '0';
					 this.bottomStatus = 'pull';
					 }*/
				}
				if (this.direction === 'up') {
					this.topStatus = 'pull';
				}
				this.direction = '';
			},
			getScrollBottom(){
				let target = this.scrollEventTarget.getBoundingClientRect();
				if (target.top > 0) {
					return 0;
				}
				console.log("target.top: " + target.top + " getScrollBottom:" + (target.height + target.top - this.wrapperHeight) + "this.headHeight:" + this.headHeight);
				return target.height  + target.top - (this.wrapperHeight + this.headHeight);

			}
		},

		mounted() {
		    console.log(this.$el);
			this.wrapperBottom = this.$parent.$parent.$parent.$refs.tabs.$el.clientHeight;
			this.wrapper = this.$parent.$refs.wrapper;
			this.wrapperHeight =  document.documentElement.clientHeight-this.headHeight
				-document.getElementById('tabs').getBoundingClientRect().height;
			this.height = this.$el.getBoundingClientRect().height;
			setTimeout(()=>{
				this.bottomTransitionLimit = - (this.$el.getBoundingClientRect().height-(this.headHeight+ this.wrapperHeight)-(Math.abs(this.$el.getBoundingClientRect().top)));
				console.log("bottomTransitionLimit:"+this.bottomTransitionLimit+"      this.this.headHeight:"+this.$el.getBoundingClientRect().height);
			},1000);

			console.log("when mounted [wrapperBottom:]" + this.wrapperBottom + "{this.wrapper:" + this.$parent.$refs.wrapper.style.height);
			this.init();
		}
	};
</script>
