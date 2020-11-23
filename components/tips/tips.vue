<template>
	<view class="tips">
		<u-mask :show="onOff" @click="onClick">
			<view class="box" @tap.stop>
				<view class="flex flex-jus-center">
					<image v-if="num==1" class="tipstop" src="../../static/svg/friendlogo.svg" mode="widthFix"></image>
					<image v-else class="tipstop" src="../../static/svg/tipstop.svg" mode="widthFix"></image>
				</view>
				<view class="title">
					{{num==1?'朋友圈功能未开通':'名片夹功能未开通'}}
				</view>
				<view class="text">
					请联系商务或客服开通此功能：
				</view>
				<view class="intop-box flex">
					<image src="../../static/svg/photo.svg" mode="widthFix"></image>
					<view class="intop-box-right">
						<view class="toptext">
							4000-2828-80
						</view>
						<view class="botttext">
							请致电客服人员
						</view>
					</view>
				</view>
				<view class="inbott-box flex">
					<image src="../../static/svg/code.svg" mode="widthFix"></image>
					<view class="intop-box-right">
						<view class="toptext">
							微信扫一扫
						</view>
						<view class="botttext">
							添加客服微信
						</view>
					</view>
				</view>
			</view>
		</u-mask>
	</view>
</template>

<script>
	export default {
		props:{
			num:{
				default:0
			}
		},
		data() {
			return {
				onOff: true
			}
		},
		watch: {

		},
		methods: {
			onClick() {
				this.$emit('onclose')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tips {
		.box {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 540upx;
			height: 800upx;
			border-radius: 16upx;
			background-color: #ffffff;
			padding: 0 40upx;

			.tipstop {
				width: 117upx;
				height: 109upx;
				margin: 70upx 0 20upx;
			}

			.title {
				color: #303133;
				font-size: 44upx;
				font-weight: 900;
				text-align: center;
				margin-bottom: 64upx;
			}

			.text {
				font-size: 28upx;
				color: #303133;
				margin-bottom: 20upx;
			}

			.intop-box {
				height: 160upx;
				border-radius: 8upx;
				background-color: #0082ef;
				margin-bottom: 24upx;

				image {
					width: 82upx;
					height: 68upx;
					margin: 46upx 30upx 0 60upx;
				}

				.intop-box-right {
					margin-top: 36upx;

					.toptext {
						font-size: 36upx;
						width: 100%;
						color: #ffffff;
						margin-bottom: 8upx;
					}

					.botttext {
						font-size: 24upx;
						color: #ffffff;
					}
				}
			}

			.inbott-box {
				height: 160upx;
				border-radius: 8upx;
				background-color: #62C232;
				margin-bottom: 84upx;

				image {
					height: 140upx;
					width: 140upx;
					margin: 10upx 28upx 10upx 32upx;
				}

				.intop-box-right {
					margin-top: 38upx;

					.toptext {
						width: 100%;
						font-size: 32upx;
						color: #ffffff;
						margin-bottom: 8upx;
					}

					.botttext {
						font-size: 24upx;
						color: #ffffff;
					}
				}
			}
		}
	}
</style>
