<template>
	<div v-if="friendList" class="disable-user-behavior">
		<div class="list">
			<!--  好友列表-->
			<portraitCard></portraitCard>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">

	import portraitCard from 'components/common/portraitCard';
	export default {
		props: {
			friends:{
			    type:'Array'
			}
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
