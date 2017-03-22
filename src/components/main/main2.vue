<template>
	<div>
		<router-view class="router-view-enter"></router-view>
		<div class="tab-nav tabs">
			<router-link  class="tab-item tab-item-active has-badge"  to="/recent">
				<i class="icon ion-ios-clock"></i>
				<span class="tab-title ng-binding" >Recent</span>
			</router-link>
		</div>
		<div class="tab-nav tabs">
			<router-link  class="tab-item"  to="/recent">
				<i class="icon ion-ios-people-outline"></i>
				<span class="tab-title ng-binding" >Recent</span>
			</router-link>
		</div>
		<div class="tab-nav tabs">
			<router-link  class="tab-item"  to="/recent">
				<i class="icon ion-ios-list-outline"></i>
				<span class="tab-title ng-binding" >Recent</span>
			</router-link>
		</div>
		<div class="tab-nav tabs">
			<router-link  class="tab-item"  to="/recent">
				<i class="icon ion-ios-gear-outline"></i>
				<span class="tab-title ng-binding" >Recent</span>
			</router-link>
		</div>

		<a	ng-class="{'tab-item-active': isTabActive(), 'has-badge':badge, 'tab-hidden':isHidden()}"
			  ng-disabled="disabled()" class="tab-item" icon-on="ion-ios-people" icon-off="ion-ios-people-outline">
			<!-- ngIf: badge --><!-- ngIf: getIconOn() && isTabActive() --><!-- ngIf: getIconOff() && !isTabActive() -->
			<i class="icon ion-ios-people-outline" ng-if="getIconOff() && !isTabActive()"></i>
			<!-- end ngIf: getIconOff() && !isTabActive() -->
			<span class="tab-title ng-binding"  ng-bind-html="title">Groups</span>
		</a>
		<a	ng-class="{'tab-item-active': isTabActive(), 'has-badge':badge, 'tab-hidden':isHidden()}"
			  ng-disabled="disabled()" class="tab-item" icon-on="ion-ios-list" icon-off="ion-ios-list-outline">
			<!-- ngIf: badge --><!-- ngIf: getIconOn() && isTabActive() --><!-- ngIf: getIconOff() && !isTabActive() -->
			<i class="icon ion-ios-list-outline" ng-if="getIconOff() && !isTabActive()"></i>
			<!-- end ngIf: getIconOff() && !isTabActive() -->\
			<span class="tab-title ng-binding" ng-bind-html="title">People</span></a>

		<a ng-class="{'tab-item-active': isTabActive(), 'has-badge':badge, 'tab-hidden':isHidden()}"
		   ng-disabled="disabled()" class="tab-item" icon-on="ion-ios-gear" icon-off="ion-ios-gear-outline">
			<!-- ngIf: badge --><!-- ngIf: getIconOn() && isTabActive() --><!-- ngIf: getIconOff() && !isTabActive() --><i
			class="icon ion-ios-gear-outline" ng-if="getIconOff() && !isTabActive()"></i>
			<!-- end ngIf: getIconOff() && !isTabActive() -->
			<span class="tab-title ng-binding"  ng-bind-html="title">Setting</span>
		</a>


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

