<template>
	<view class="plainWhite" @click="onOpen">
		<image class="user-img" :src="info.avatar" mode="widthFix"></image>
		<view class="plain-logo-title flex flex-al-center">
			<image class="logo-img" src="../../../static/cardsvg/plainWhite/cardLogo.svg" mode="widthFix"></image>
			{{info.company_name}}
		</view>
		<view class="userinfo">
			<view class="user-name">
				{{info.username?info.username:''}}
			</view>
			<view class="user-position">
				{{info.company_name}} {{info.position}}
			</view>
		</view>
		<!-- 最下面公司的详情信息，手机号码，地址 邮箱 -->
		<view class="elegant-userdetails flex">
			<view class="user-details flex-col-bd">
				<view class="user-telephone flex flex-al-center">
					<image src="../../../static/cardsvg/photoBlack.svg" mode="widthFix"></image>
					{{info.mobile}}
				</view>
				<view class="user-mailbox flex flex-al-center">
					<image src="../../../static/cardsvg/emlBlack.svg" mode="widthFix"></image>
					{{info.email}}
				</view>
				<view class="user-address flex flex-al-center">
					<image src="../../../static/cardsvg/mapBlack.svg" mode="widthFix"></image>
					{{info.company_address}}
				</view>
			</view>
			<image class="user-code" v-if="info.qr_code" @click.stop="onCode(info.id)" src="../../../static/cardsvg/cardCodeBlak.svg" mode="widthFix"></image>
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
	.plainWhite {
		width: 690upx;
		height: 414upx;
		background: #FFFFFF;
		border-radius: 16upx;
		position: relative;
		box-shadow: -3upx 6upx 12upx rgba(00, 00, 00, .2);
        .user-img{
			width: 128upx;
			height: 128upx;
			position: absolute;
			top: 40upx;
			right: 32upx;
			border-radius: 50%;
		}
		.plain-logo-title {
			box-sizing: content-box;
			height: 34upx;
			line-height: 34upx;
			font-size: 24upx;
			padding: 46upx 0 44upx 48upx;

			.logo-img {
				width: 24upx;
				height: 28upx;
				margin-right: 12upx;
			}
		}

		.userinfo {
			height: 100upx;
			padding-left: 48upx;
			margin-bottom: 58upx;
			background: #F5F5F5;

			.user-name {
				font-size: 48upx;
				color: #333333;
				line-height: 66upx;
			}

			.user-position {
				font-size: 20upx;
				color: #666666;
				line-height: 28upx;
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
					margin-bottom: 16upx;
					line-height: 22upx;
					height: 22upx;
					color: #666666;
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
						margin-right: 14upx;
						margin-left: 2upx;
					}
				}
			}

			// 用户二维码
			.user-code {
				width: 48upx;
				height: 48upx;
				margin-top: 50upx;
				background: #ffffff;
			}
		}
	}
</style>
