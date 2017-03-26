<template>
	<div hide-nav-bar="true" class="pane" nav-view="active"
		 style="opacity: 1; box-shadow: rgba(0, 0, 0, 0) 0px 0px 10px; transform: translate3d(0%, 0px, 0px);">
		<div class="padding text-center scroll-content ionic-scroll  has-footer">
			<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
				<div style="height: 25px"></div>
				<h2>忘记密码了?</h2>
				<p>请输入您注册邮箱：</p>
				<div style="height: 50px"></div>
				<div class="border-none disable-user-behavior">
					<div class="list">
						<div class="item-input border-bottom item">
							<input type="email" placeholder="邮箱">
						</div>
					</div>
				</div>
				<div class="padding">
					<a class="button button-clear" href="#/tab-activities">
						提交
					</a>
				</div>
			</div>
			<div class="scroll-bar scroll-bar-v">
				<div class="scroll-bar-indicator scroll-bar-fade-out"
					 style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;">
				</div>
			</div>
		</div>

		<div class="bar bar-footer">
			<router-link class="button button-clear" to="/login">我知道密码了</router-link>
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
