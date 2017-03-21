<template>

	<div class="scroll-content ionic-scroll  has-header has-tabs">
		<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
			<!-- ngIf: activities -->
			<div v-if="activities" class="disable-user-behavior">
				<div class="list">
					<div class="item">
						<button class="button button-small button-block icon-left ion-ios-search" v-click="openSearch()" style="margin: 0">
							Search for people and groups
						</button>
					</div>

					<!-- ngRepeat: room in activities -->
					<span v-for="room in activities" class="">
						<div class="item-remove-animate item-avatar item item-complex item-right-editable"	 >
						<router-link class="item-content"  to="/room/room_d">
						<img v-src="/static/img/portrait/user02.jpg">

							<!-- ngIf: room.roomType!='group' -->
						<span class="badge avatar-badge avatar-badge-s badge-stable"  v-class="{'badge-positive':room.roomType=='ms_friend', 'badge-stable':room.roomType=='fb_friend'}"  v-if="room.roomType!='group'">
							<!-- ngIf: room.roomType=='ms_friend' -->
							<!-- ngIf: room.roomType=='fb_friend' -->
							<i class="icon ion-social-facebook light" v-if="room.roomType=='fb_friend'"></i>
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
						<div class="button-assertive button" v-click="remove(room)">
							Delete
						</div>
					</div>
					</div>
					</span>
					<!-- end ngRepeat: room in activities -->
				</div>
			</div>
			<!-- end ngIf: activities -->

			<!--show when there is no activity-->
			<!-- ngIf: !activities -->
		</div>
		<div class="scroll-bar scroll-bar-v">
			<div class="scroll-bar-indicator scroll-bar-fade-out"
				 style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div>
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
		components: {}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
