<template>
	<div v-if="groups" >
		<!--  群列表-->
		<div v-for="group in groups">
			<portraitCard :item="group" :hasRightBtn="hasRightBtn" :type="2"></portraitCard>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">

	import portraitCard from 'components/common/portraitCard';
	export default {
		props: {
			groups:{
				type:Array
			},
			hasRightBtn:Boolean
		},
		data() {
			return {
				groupList:[]
			};
		},
		methods: {},
		components: {
		    portraitCard
		}
	};
</script>
