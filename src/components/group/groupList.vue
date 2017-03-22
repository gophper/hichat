<template>
	<div v-if="groupList" class="disable-user-behavior">
		<div class="list">
			<!--  好友列表-->
			<portraitCard></portraitCard>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">

	import portraitCard from 'components/common/portraitCard';
	export default {
		props: {},
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
