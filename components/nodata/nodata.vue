<template>
	<view class="nodata flex flex-jus-center">
		<image src="../../static/svg/zanwu.svg" mode=""></image>
		<slot class="slot"></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.nodata {
		flex-wrap: wrap;

		image {
			width: 256upx;
			height: 256upx;
			margin: 70upx auto 24upx;
		}

		.slot {
			width: 100%;
		}
	}
</style>
