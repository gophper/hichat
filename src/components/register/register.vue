<template>
	<div hide-nav-bar="true" class="pane" nav-view="active" style="transform: translate3d(0%, 0px, 0px);">
		<div class="padding text-center scroll-content ionic-scroll">
			<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
				<div style="height: 25px"></div>
				<h2>注册微聊</h2>
				<div style="height: 25px"></div>
				<div class="border-none disable-user-behavior">
					<div class="list">
						<div class="item-input border-bottom item">
							<input type="email" placeholder="邮箱">
						</div>
						<div class="item-input border-bottom item">
							<input type="password" placeholder="密码">
						</div>
						<div class="item-input border-bottom item">
							<input type="text" placeholder="昵称">
						</div>
					</div>
				</div>
				<div class="padding">
					<a class="button button-clear button-large" href="#/sign-up-name">
						提交注册
					</a>
					<div style="height: 10px"></div>

				</div>
			</div>
			<div class="scroll-bar scroll-bar-v">
				<div class="scroll-bar-indicator scroll-bar-fade-out"
					 style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div>
			</div>
		</div>
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
