<template>
	<view class="elegantBlack" @click="onOpen">
		<!-- 背景图 -->
		<image class="elegant-backimg" src="../../../static/cardsvg/elegantSvg/cardBackimg.svg" mode="widthFix"></image>
		<!-- 内容盒子 -->
		<view class="elegant-inbox">
			<!-- 最上面 logo和公司名称 -->
			<view class="elegant-logo-title flex">
				<view class="flex-col-bd"></view>
				<image class="logo-img" src="../../../static/cardsvg/elegantSvg/cardLogo.svg" mode="widthFix"></image>
				先正达集团
			</view>
			<!-- 中间名片头像 名字 公司名 -->
			<view class="elegant-userinfo flex">
				<image class="user-img" :src="info.avatar" mode="widthFix"></image>
				<view class="flex-col-bd">
					<view class="user-name">
						{{info.username?info.username:''}}
					</view>
					<view class="user-position">
						{{info.company_name}} {{info.position}}
					</view>
				</view>
			</view>
			<!-- 最下面公司的详情信息，手机号码，地址 邮箱 -->
			<view class="elegant-userdetails flex">
				<view class="user-details flex-col-bd">
					<view class="user-telephone flex flex-al-center">
						<image src="../../../static/cardsvg/photo.svg" mode="widthFix"></image>
						{{info.mobile}}
					</view>
					<view class="user-mailbox flex flex-al-center">
						<image src="../../../static/cardsvg/eml.svg" mode="widthFix"></image>
						{{info.email}}
					</view>
					<view class="user-address flex flex-al-center">
						<image src="../../../static/cardsvg/map.svg" mode="widthFix"></image>
						{{info.company_address}}
					</view>
				</view>
				<image class="user-code" v-if="info.qr_code" @click.stop="onCode(info.id)" src="../../../static/cardsvg/cardCode.svg" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['info'],
		data() {
			return {
			};
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
	.elegantBlack {
		width: 690upx;
		height: 414upx;
		position: relative;
		box-shadow: -3upx 6upx 12upx rgba(00,00,00,.2);
		border-radius: 16upx;
		overflow: hidden;
		// 背景图片
		.elegant-backimg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 1;
		}

		// 放置元素的盒子
		.elegant-inbox {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 2;

			// 最上面公司名和logo
			.elegant-logo-title {
				box-sizing: content-box;
				height: 34upx;
				line-height: 34upx;
				padding: 36upx 56upx 0 0;
				font-size: 24upx;
				color: #FFFFFF;

				.logo-img {
					width: 24upx;
					height: 28upx;
					margin-right: 12upx;
				}
			}

			// 中间用户头像和用户名字以及职位
			.elegant-userinfo {
				height: 198upx;
				width: 100%;
				padding: 0 0 70upx 56upx;
				color: #ffffff;

				.user-img {
					width: 128upx;
					height: 100%;
					border-radius: 50%;
					margin-right: 24upx;
					border: 2upx solid #ffffff;
				}

				// 名片名字
				.user-name {
					font-size: 40upx;
					margin: 14upx 0 10upx 0;
					line-height: 56upx;
				}

				// 名片职位
				.user-position {
					font-size: 24upx;
				}
			}

			// 用户详细信息盒子
			.elegant-userdetails {
				width: 100%;
				padding: 0 56upx;

				.user-details {
					font-size: 18upx;
					color: #ffffff;

					view {
						margin-bottom: 18upx;
						line-height: 26upx;
						height: 26upx;
					}

					.user-telephone {
						image {
							height: 20upx;
							width: 17upx;
							margin-right: 12upx;
						}
					}

					.user-mailbox {
						image {
							height: 14upx;
							width: 18upx;
							margin-right: 10upx;
						}
					}

					.user-address {
						image {
							height: 20upx;
							width: 15upx;
							margin-right: 16upx;
						}
					}
				}

				// 用户二维码
				.user-code {
					width: 81upx;
					height: 81upx;
					margin-top: 26upx;
				}
			}
		}
	}
</style>
