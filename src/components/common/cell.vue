<template>
	<a :id="'swipe_'+id" class="mint-cell" :href="href">
		<span class="mint-cell-mask" v-if="isLink"></span>
		<div class="mint-cell-left">
			<slot name="left"></slot>
		</div>
		<div class="mint-cell-wrapper">
			<img class="mint-cell-portrait" src="/static/img/portrait/user01.jpg">
			<div class="mint-item-content">
				<div class="mint-cell-title">
					<slot name="icon">
						<i v-if="icon" class="mintui" :class="'mintui-' + icon"></i>
					</slot>
					<slot name="title">
						<span class="mint-cell-text" v-text="title"></span>
						<span v-if="label" class="mint-cell-label" v-text="label"></span>
					</slot>
				</div>
				<span class="mint-cell-time">
					{{time}}
				</span>
				<div class="mint-cell-value" :class="{ 'is-link' : isLink }">
					<slot>
						<span class="mint-cell-value" v-text="value"></span>
					</slot>
				</div>
			</div>

		</div>
		<div class="mint-cell-right">
			<slot name="right"></slot>
		</div>
		<i v-if="isLink" class="mint-cell-allow-right"></i>
	</a>

	<!--	<a class="mint-cell mint-cell-swipe">

			<div class="mint-cell-left">
				<slot name="left"></slot>
			</div>
			<div class="mint-cell-wrapper" style="transform: translate3d(0px, 0px, 0px);">
				<div class="mint-cell-title">
					<span class="mint-cell-text">swipe me</span>
				</div>
				<div class="mint-cell-value"> aaaaaaaaaaaaaaaaaaaa</div>
			</div>
			<div class="mint-cell-right" style="transform: translate3d(52px, 0px, 0px);">
				<div class="mint-cell-swipe-buttongroup">
					<a class="mint-cell-swipe-button"	style="background: red; color: rgb(255, 255, 255);">移除</a>
				</div>
			</div>
		</a>-->


			<!--<span class="">
			<div class="item-remove-animate item-avatar item item-complex item-right-editable">
				<router-link class="item-content" to="/room/room_d">
				<img src="/static/img/portrait/user02.jpg">
					&lt;!&ndash; ngIf: room.roomType!='group' &ndash;&gt;
				<span class="badge avatar-badge avatar-badge-s badge-stable">
					&lt;!&ndash; ngIf: room.roomType=='ms_friend' &ndash;&gt;
					&lt;!&ndash; ngIf: room.roomType=='fb_friend' &ndash;&gt;
					<i class="icon ion-social-facebook light"></i>
					&lt;!&ndash; end ngIf: room.roomType=='fb_friend' &ndash;&gt;
				</span>
					&lt;!&ndash; end ngIf: room.roomType!='group' &ndash;&gt;

				<h3>
					<small class="v-binding">Eric</small>
				</h3>
				<p class="v-binding">Angular.</p>
				<span class="item-note v-binding">Active 1h ago</span>

				</router-link>
				<div class="item-options invisible">
					<div class="button-assertive button">
						Delete
					</div>
				</div>
			</div>
		</span>-->


</template>

<script>


	/**
	 * mt-cell
	 * @module components/cell
	 * @desc 单元格
	 * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
	 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
	 * @param {string} [title] - 标题
	 * @param {string} [label] - 备注信息
	 * @param {boolean} [is-link=false] - 可点击的链接
	 * @param {string} [value] - 右侧显示文字
	 * @param {slot} - 同 value, 会覆盖 value 属性
	 * @param {slot} [title] - 同 title, 会覆盖 title 属性
	 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
	 *
	 * @example
	 * <mt-cell title="标题文字" icon="back" is-link value="描述文字"></mt-cell>
	 * <mt-cell title="标题文字" icon="back">
	 *   <div slot="value">描述文字啊哈</div>
	 * </mt-cell>
	 */
	export default {
		name: 'mt-cell',

		props: {
		    id:Number,
			to: [String, Object],
			icon: String,
			title: String,
			label: String,
			isLink: Boolean,
			time:String,
			value: {}
		},

		computed: {
			href() {
				if (this.to && !this.added && this.$router) {
					const resolved = this.$router.match(this.to);
					if (!resolved.matched.length) return this.to;

					this.$nextTick(() => {
						this.added = true;
						this.$el.addEventListener('click', this.handleClick);
					});
					return resolved.path;
				}
				return this.to;
			}
		},

		methods: {
			handleClick($event) {
				$event.preventDefault();
				this.$router.push(this.href);
			}
		}
	};
</script>

<style lang="css">
.mint-cell-portrait{
	position: absolute;
	top: 15px;
	left: 15px;
	max-width: 45px;
	max-height: 45px;
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.mint-item-content{
	padding-left: 75px;
	min-height: 75px;
	position: relative;
	width: 100%;
	padding: 15px 15px 15px 65px;
}

.mint-cell-title{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 16px;
	font-family: Lato, "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;
	font-weight: 700;
	line-height: 1.2;
	margin: 0 0 4px 0;

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
.mint-cell-value{
	.overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #777;
	margin-bottom: 2px;
}

.item-options .button {
	min-width: 75px;
	padding: 0 10px;
}
.button.button-assertive {
	border-color: #FF3E3E;
	background-color: #FF3E3E;
	color: #fff;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.item-options .button {
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
.mint-cell-time{
	position: absolute;
	top: 15px;
	right: 15px;
	float: right;
	color: #aaa;
	font-size: 14px;
	padding-top: 4px;
}
</style>
