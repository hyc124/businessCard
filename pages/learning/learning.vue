<template>
	<view class="leaning-box">
		<u-image :src="item" mode="widthFix" v-for="(item,index) in imgList" :key="index" :lazy-load="true">
			<u-loading size="44" mode="flower" slot="loading"></u-loading>
		</u-image>
		<view class="foot">
			<button class="creat-self" @click="handleAction('self')">手动创建名片</button>
			<button class="creat-auto" @click="handleAction('auto')">一键创建我的名片</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [
					uni.host + '/static/common/images/g1.png',
					uni.host + '/static/common/images/g2.png',
					uni.host + '/static/common/images/g3.png',
					uni.host + '/static/common/images/g4.png',
					uni.host + '/static/common/images/g5.png',
				]
			};
		},
		methods: {
			handleAction(type) {
				if (type == 'self') {
					uni.navigateTo({
						url: "/pages/myCenter/edit/edit?type=2&state=0&onOff=1",
					})
				} else {
					uni.navigateTo({
						url: "/pages/guide/guide?isCread=1",
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.leaning-box {
		padding-bottom: 180upx;

		image {
			width: 100%;
		}

		.foot {
			position: fixed;
			width: 100%;
			background-color: $uni-bg-color;
			bottom: 0;
			display: flex;
			padding: 30upx;

			button {
				border-radius: 46upx;
				background: #fff;
				color: $primary-color;
				font-size: 32upx;
				width: 320upx;
				height: 92upx;
				line-height: 92upx;

				&::after {
					display: none;
				}

				border: 2upx solid $primary-color;

				&.creat-auto {
					background-color: $primary-color;
					color: #fff;
				}
			}
		}
	}
</style>
