<template>
	<view class="personalityColor" @click="onOpen">
		<view class="big-img-box">
			<image :src="info.avatar" mode="widthFix"></image>
		</view>
		<view class="personality-logo-title flex flex-al-center">
			<view class="flex-col-bd"></view>
			<image class="logo-img" src="../../../static/cardsvg/plainWhite/cardLogo.svg" mode="widthFix"></image>
			{{info.company_name}}
		</view>
		<view class="personality-user-info flex flex-jus-center">
			<view class="flex-col-bd"></view>
			<view class="personality-center-box">
				<view class="user-name">
					{{info.username?info.username:''}}
				</view>
				<view class="user-position">
					{{info.company_name}} {{info.position}}
				</view>
			</view>
			<view class="user-code">
				<image v-if="info.qr_code" @click.stop="onCode(info.id)" src="../../../static/cardsvg/cardCodeBlak.svg" mode="widthFix"></image>
			</view>
		</view>
		<!-- 最下面公司的详情信息，手机号码，地址 邮箱 -->
		<view class="user-details flex-col-bd">
			<view class="user-telephone flex flex-al-center">
				<view class="flex-col-bd"></view>
				{{info.mobile}}
				<image src="../../../static/cardsvg/photoBlack.svg" mode="widthFix"></image>
			</view>
			<view class="user-mailbox flex flex-al-center">
				<view class="flex-col-bd"></view>
				{{info.email}}
				<image src="../../../static/cardsvg/emlBlack.svg" mode="widthFix"></image>
			</view>
			<view class="user-address flex flex-al-center">
				<view class="flex-col-bd"></view>
				{{info.company_address}}
				<image src="../../../static/cardsvg/mapBlack.svg" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['info'],
		data() {
			return {};
		},
		computed: {},
		watch: {},
		methods: {
			onOpen() {
				this.$emit('callBack', 'one')
			},
			onCode(id){
				this.$emit('callBack', id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.personalityColor {
		width: 690upx;
		height: 414upx;
		background: #FFFFFF;
		border-radius: 16upx;
		position: relative;
		box-shadow: -3upx 6upx 12upx rgba(00, 00, 00, .2);
		overflow: hidden;

		// 用户头像布局
		.big-img-box {
			box-sizing: content-box;
			width: 49vw;
			height: 490upx;
			position: absolute;
			bottom: -3vw;
			left: -9vw;
			transform: rotate(15deg);
			border-right: 14upx solid #F5F5F5;
			border-top: 14upx solid #F5F5F5;
			overflow: hidden;
			z-index: 1;

			image {
				position: relative;
				top: 5vw;
				left: 1vw;
				width: 430upx;
				transform: rotate(-15deg);
			}
		}

		// 公司logo和名字布局
		.personality-logo-title {
			box-sizing: content-box;
			height: 34upx;
			line-height: 34upx;
			font-size: 24upx;
			padding: 42upx 32upx 42upx 0upx;

			.logo-img {
				width: 24upx;
				height: 28upx;
				margin-right: 12upx;
			}
		}

		// 用户名字 公司 二维码布局
		.personality-user-info {
			height: 108upx;
			background: #f5f5f5;
			margin-bottom: 44upx;

			.personality-center-box {
				width: 228upx;
				height: 100%;

				.user-name {
					line-height: 66upx;
					height: 66upx;
					font-size: 48upx;
					color: #333333;
					margin-top: 8upx;
				}

				.user-position {
					line-height: 28upx;
					height: 28upx;
					font-size: 20upx;
					color: #666666;
				}
			}

			.user-code {
				width: 48upx;
				height: 48upx;
				margin: 30upx 32upx 0 0;
				image{
					width: 100%;
				}
			}
		}

		// 用户地址 电话 邮箱布局
		.user-details {
			font-size: 18upx;
			color: #ffffff;
            margin-right: 34upx;
			view {
				margin-bottom: 16upx;
				line-height: 22upx;
				height: 22upx;
				color: #666666;
			}

			.user-telephone {
				image {
					height: 20upx;
					width: 17upx;
					margin-left: 16upx;
				}
			}

			.user-mailbox {
				image {
					height: 14upx;
					width: 18upx;
					margin-left: 14upx;
				}
			}

			.user-address {
				image {
					height: 20upx;
					width: 15upx;
					margin-left: 14upx;
					margin-right: 2upx;
				}
			}
		}
	}
</style>
