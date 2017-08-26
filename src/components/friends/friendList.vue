<template>
		<div v-if="friends">
			<!--  好友列表-->
			<div  v-for="friend in friends">
				<portraitCard :item="friend" :hasRightBtn="hasRightBtn" :type="1"></portraitCard>
			</div>
		</div>
</template>

<script type="text/ecmascript-6">

	import portraitCard from 'components/common/portraitCard';
	export default {
		props: {
			friends:{
			    type:Array
			},
			hasRightBtn:Boolean
		},
		data() {
			return {
				friendList:[]
			};
		},
		methods: {},
		components: {
			portraitCard
		}
	};
</script>
