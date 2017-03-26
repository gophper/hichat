<template>
	<div>
		<div class="bar-stable bar bar-header disable-user-behavior" align-title="center">
			<div class="buttons buttons-left" style="transition-duration: 0ms;"></div>
			<div class="title title-center header-item" style="left: 73px; right: 73px;
		transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">群组
			</div>
			<div class="buttons buttons-right" style="transition-duration: 0ms;">
			<span class="right-buttons">
        <button class="button button-clear button-positive" @click="openNewGroup">创建</button>
    </span>
			</div>
		</div>
		<div class="scroll-content ionic-scroll  has-header has-tabs">
			<div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);">
				<!-- ngRepeat: groups in groupRow -->
				<div class="row">
					<!-- ngRepeat: room in groups -->
					<div class="col col-50" v-for="room in groups">
						<div class="list card">
							<a nav-direction="forward" class="item item-avatar item-avatar-center item-avatar-l text-center"
							   href="#/room/room_a">
								<img :src="room.sPorTrait" >

								<h3>
									<small class="ng-binding">{{room.sGroupName}}</small>
								</h3>

								<p class="ng-binding">{{room.dtCreateTime}}</p>
							</a>

							<a nav-direction="forward" class="item item-divider text-center" href="#/room/room_a">
								<p class="ng-binding">{{room.sMembers}}</p>
							</a>
						</div>
					</div>
					<!-- end ngRepeat: room in groups -->
				</div>
				<!-- end ngRepeat: groups in groupRow -->


			</div>
			<div class="scroll-bar scroll-bar-v">
				<div class="scroll-bar-indicator scroll-bar-fade-out"
					 style="transform: translate3d(0px, 0px, 0px) scaleY(1); height: 0px;"></div>
			</div>
		</div>
	</div>
</template>

<style lang="css">

</style>

<script type="text/babel">
	import MtLoadmore from 'components/common/loadmore';
	import MtSpinner from 'components/common/spinner/spinner';
	export default {
		data() {
			return {
				groups: [{
					iGroupId: '1',
					sGroupName: '群1',
					sRemark: '专门聊八卦的群',
					iCreatorId: '1',
					iNumMember: '3',
					dtCreateTime: '2017-02-23 23:44:34',
					dtLastActiveTime: '2017-02-24 12:44:34',
					sMembers: '张三，李四，王五',
					sPorTrait:'/static/img/thumbnail02.jpg'
				},{
					iGroupId: '5',
					sGroupName: '群2',
					sRemark: '专门聊八卦的群',
					iCreatorId: '1',
					iNumMember: '3',
					dtCreateTime: '2017-02-23 23:44:34',
					dtLastActiveTime: '2017-02-24 12:44:34',
					sMembers: '张三，李四，王五',
					sPorTrait:'/static/img/thumbnail02.jpg'
				},{
					iGroupId: '2',
					sGroupName: '群3',
					sRemark: '专门聊八卦的群',
					iCreatorId: '1',
					iNumMember: '3',
					dtCreateTime: '2017-02-23 23:44:34',
					dtLastActiveTime: '2017-02-24 12:44:34',
					sMembers: '张三，李四，王五',
					sPorTrait:'/static/img/thumbnail02.jpg'
				},{
					iGroupId: '3',
					sGroupName: '群4',
					sRemark: '专门聊八卦的群',
					iCreatorId: '1',
					iNumMember: '3',
					dtCreateTime: '2017-02-23 23:44:34',
					dtLastActiveTime: '2017-02-24 12:44:34',
					sMembers: '张三，李四，王五',
					sPorTrait:'/static/img/thumbnail02.jpg'
				},{
					iGroupId: '4',
					sGroupName: '群5',
					sRemark: '专门聊八卦的群',
					iCreatorId: '1',
					iNumMember: '3',
					dtCreateTime: '2017-02-23 23:44:34',
					dtLastActiveTime: '2017-02-24 12:44:34',
					sMembers: '张三，李四，王五',
					sPorTrait:'/static/img/thumbnail02.jpg'
				}]

			};
		},

		methods: {
			openNewGroup(){

			}
		},

		created() {

		},

		mounted() {

		},
		components: {}
	};
</script>

