<template>
	<span  class="">
		<div class="item-remove-animate item-avatar item item-complex item-right-editable"	 >
			<router-link class="item-content"  to="/room/room_d">
			<img src="/static/img/portrait/user02.jpg">
				<!-- ngIf: room.roomType!='group' -->
			<span class="badge avatar-badge avatar-badge-s badge-stable"  >
				<!-- ngIf: room.roomType=='ms_friend' -->
				<!-- ngIf: room.roomType=='fb_friend' -->
				<i class="icon ion-social-facebook light"></i>
				<!-- end ngIf: room.roomType=='fb_friend' -->
			</span>
				<!-- end ngIf: room.roomType!='group' -->

			<h3>
				<small class="v-binding">Eric</small>
			</h3>
			<p class="v-binding">Angular.</p>
			<span class="item-note v-binding">Active 1h ago</span>

			</router-link>
			<div class="item-options invisible">
				<div class="button-assertive button" >
					Delete
				</div>
			</div>
		</div>
	</span>
</template>

<script type="text/ecmascript-6">
	export default {
		props: {},
		data() {
			return {
				msgList: []
			};
		},
		methods: {},
		components: {}
	};
</script>
