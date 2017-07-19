<template>
	<x-cell
		v-clickoutside:touchstart="swipeMove"
		@click.native="swipeMove()"
		@touchstart.native="startDrag"
		@touchmove.native="onDrag"
		@touchend.native="endDrag($event)"
		class="mint-cell-swipe"
		:title="title"
		:id="id"
		:icon="icon"
		:label="label"
		:to="to"
		:time="time"
		:is-link="isLink"
		ref="cell"
		:value="value">
       <!--  这一块暂时没用-->
		<div slot="left"	class="mint-cell-swipe-buttongroup"	ref="left">
			<a class="mint-cell-swipe-button"  v-for="btn in left"  :style="btn.style"   @click.stop="btn.handler && btn.handler(), swipeMove()"
			   v-html="btn.content"></a>
		</div>
		<span	v-if="$slots.title"	slot="title">
			<slot name="title">  </slot>
   		</span>
		<span	v-if="$slots.icon" slot="icon">
     		 <slot name="icon"></slot>
   		 </span>

		<div slot="right"	class="mint-cell-swipe-buttongroup"	ref="right">
			<a	 class="mint-cell-swipe-button"  :style="right.style"
				  @click.stop="right.removeHandler && right.removeHandler(id), swipeMove()"  v-html="right.content">
			</a>
		</div>
	</x-cell>
</template>

<script>
	import {once} from 'src/common/js/dom';
	import XCell from 'components/common/cell';
	import Clickoutside from 'src/common/js/clickoutside';


	/**
	 * mt-cell-swipe
	 * @desc 类似 iOS 滑动 Cell 的效果
	 * @module components/cell-swipe
	 *
	 * @example
	 * <mt-cell-swipe
	 *   :left=[
	 *     {
 *       content: 'text',
 *       style: {color: 'white', backgroundColor: 'red'},
 *       handler(e) => console.log(123)
 *     }
	 *   ]
	 *   :right=[{ content: 'allowed HTML' }]>
	 *   swipe me
	 * </mt-cell-swipe>
	 */
	export default {
		name: 'mt-cell-swipe',

		components: {XCell},

		directives: {Clickoutside},

		props: {
		    id:Number,
			to: String,
			left: Array,
			right: Object,
			icon: String,
			title: String,
			label: String,
			time:String,
			isLink: Boolean,
			value: {}
		},

		data() {
			return {
				start: {x: 0, y: 0}
			};
		},

		mounted() {
			this.wrap = this.$refs.cell.$el.querySelector('.mint-cell-wrapper');
			this.leftElm = this.$refs.left;
			this.rightElm = this.$refs.right;
			this.leftWrapElm = this.leftElm.parentNode;
			this.rightWrapElm = this.rightElm.parentNode;
			this.leftWidth = this.leftElm.getBoundingClientRect().width;
			this.rightWidth = this.rightElm.getBoundingClientRect().width;
			console.log("this.rightWidth"+this.rightWidth);
			this.leftDefaultTransform = this.translate3d(-this.leftWidth - 1);
			this.rightDefaultTransform = this.translate3d(this.rightWidth);

			this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform;
			this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform;
		},

		methods: {
			resetSwipeStatus() {
				this.swiping = false;
				this.opened = true;
				this.offsetLeft = 0;
			},

			translate3d(offset) {
				return `translate3d(${offset}px, 0, 0)`;
			},

			swipeMove(offset = 0) {
				this.wrap.style.webkitTransform = this.translate3d(offset);
				this.rightWrapElm.style.webkitTransform = this.translate3d(this.rightWidth + offset);
				this.leftWrapElm.style.webkitTransform = this.translate3d(-this.leftWidth + offset);
				this.swiping = true;
			},

			swipeLeaveTransition(direction) {
				setTimeout(() => {
					this.swipeLeave = true;

					// left
					if (direction > 0 && -this.offsetLeft > this.rightWidth * 0.4) {
						this.swipeMove(-this.rightWidth);
						this.resetSwipeStatus();
						return;
						// right
					} else if (direction < 0 && this.offsetLeft > this.leftWidth * 0.4) {
						this.swipeMove(this.leftWidth);
						this.resetSwipeStatus();
						return;
					}

					this.swipeMove(0);
					once(this.wrap, 'webkitTransitionEnd', _ => {
						this.wrap.style.webkitTransform = '';
						this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform;
						this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform;
						this.swipeLeave = false;
						this.swiping = false;
					});
				}, 0);
			},

			startDrag(evt) {
				evt = evt.changedTouches ? evt.changedTouches[0] : evt;
				this.dragging = true;
				this.start.x = evt.pageX;
				this.start.y = evt.pageY;
			},

			onDrag(evt) {
				if (this.opened) {
					!this.swiping && this.swipeMove(0);
					this.opened = false;
					return;
				}
				if (!this.dragging) return;
				let swiping;
				const e = evt.changedTouches ? evt.changedTouches[0] : evt;
				const offsetTop = e.pageY - this.start.y;
				const offsetLeft = this.offsetLeft = e.pageX - this.start.x;

				if ((offsetLeft < 0 && -offsetLeft > this.rightWidth) ||
					(offsetLeft > 0 && offsetLeft > this.leftWidth) ||
					(offsetLeft > 0 && !this.leftWidth) ||
					(offsetLeft < 0 && !this.rightWidth)) {
					return;
				}

				const y = Math.abs(offsetTop);
				const x = Math.abs(offsetLeft);

				swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
				if (!swiping) return;
				evt.preventDefault();

				this.swipeMove(offsetLeft);
			},

			endDrag(evt) {
			    /*console.log(this.swiping+'|'+this.offsetLeft+'|'+this.id+this.$refs.right+'|'+evt.target);
				console.log(evt.target);
				console.log(this.$refs.right.childNodes[0] == evt.target);*/
			    //不在滑动中，并且位移不超过5px，则认为是点击跳转
			    if(Math.abs(this.offsetLeft) <= 20 || !this.offsetLeft){
			        //不是点击“移除”
			        if(this.$refs.right.childNodes[0] != evt.target){
						this.right.clickHandler(this.id);
					}
				}
				if (!this.swiping) return;
				this.swipeLeaveTransition(this.offsetLeft > 0 ? -1 : 1);
			}
		}
	};
</script>

<style lang="css">
	.mint-cell-swipe-buttongroup {
		height: 100%;
	}

	.mint-cell-swipe-button {
		min-width: 75px;
		padding: 0 10px;
		border-color: #FF3E3E;
		background-color: #FF3E3E;
		color: #fff;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		height: 100%;
		border: none;
		border-radius: 0;
		display: -webkit-inline-box;
		display: -webkit-inline-flex;
		display: -moz-inline-flex;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
		justify-content: center;
	}
	.mint-cell-swipe{
		min-height: 75px;
		position: relative;
		z-index: 2;
		background-color: #fff;
		display: block;
		color: inherit;
		text-decoration: none;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.mint-cell-wrapper,
	.mint-cell-left,
	.mint-cell-right {
		transition: transform 150ms ease-in-out;
	}
</style>
