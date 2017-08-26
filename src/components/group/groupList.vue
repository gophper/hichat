<template>
	<div v-if="groups" >
<<<<<<< HEAD:src/components/group/groupList.vue
		<!--  群消息列表-->
=======
		<!--  群列表-->
>>>>>>> 3d568d76f6634de4601e7c24fde467c37d568767:src/components/group/groupList.vue
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
