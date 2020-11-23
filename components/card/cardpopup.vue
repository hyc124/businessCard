<template>
	<view class="cardpopup">
		<u-popup v-model="showInfo" mode="center" border-radius="14">
			<view class="popup-bigbox">
				<view class="popup-top-box">
					<view class="card-text-userimg flex">
						<view class="flex-col-bd flex flex-al-center text-left">
							<image class="logo" src="../../static/cardsvg/elegantSvg/cardLogo.svg" mode="widthFix"></image> 先正达集团
						</view>
						<image class="userimg" :src="info.avatar" mode="widthFix"></image>
					</view>
					<view class="user-name">
						{{info.username?info.username:''}}
					</view>
					<view class="dname-code-box flex">
						{{info.company_name}} {{info.position}}
						<view class="flex-col-bd"></view>
						<image class="code-img-box" @click="onSee(info.id)" src="../../static/cardsvg/cardCode.svg" mode="widthFix"></image>
					</view>
				</view>
				<view class="popup-bottom-box">
					<view class="inbox">
						手机：{{info.mobile}}
					</view>
					<view class="inbox">
						电话：{{info.telephone}}
					</view>
					<view class="inbox">
						邮箱：{{info.email}}
					</view>
					<view class="inbox">
						传真：{{info.fax}}
					</view>
					<view class="inbox">
						邮编：{{info.zip_code}}
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props: ['info'],
		data() {
			return {
				showInfo: false,
			};
		},
		components: {},
		computed: {},
		watch: {},
		methods: {
			onOpen(){
				this.showInfo = true
			},
			onSee(id){
				this.$emit('callBack',id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cardpopup {

		// 弹窗盒子
		.popup-bigbox {
			height: 994upx;
			width: 662upx;
			border-radius: 16upx;

			.popup-top-box {
				height: 394upx;
				width: 100%;
				background: linear-gradient(to bottom, #73EDFF 0%, #0099E6 100%);

				.card-text-userimg {
					padding: 46upx 44upx 74upx 64upx;
					line-height: 34upx;
					color: #ffffff;

					.text-left {
						line-height: 28upx;
						height: 28upx;

						.logo {
							width: 24upx;
							height: 28upx;
							margin: 0upx 8upx 0 0;
						}
					}

					.userimg {
						width: 138upx;
						height: 138upx;
						border-radius: 8upx;
						background: #ffffff;
					}
				}

				.user-name {
					font-size: 40upx;
					color: #ffffff;
					line-height: 56upx;
					margin: 0 0 6upx 64upx;
				}

				.dname-code-box {
					line-height: 40upx;
					font-size: 28upx;
					color: #ffffff;
					margin: 0 42upx 0 64upx;

					.code-img-box {
						width: 31upx;
						height: 31upx;
					}
				}
			}
			.popup-bottom-box{
				height: 600upx;
				width: 100%;
				padding: 38upx 64upx 80upx;
				background: #ffffff;
				.inbox{
					line-height: 96upx;
					border-bottom: 2upx solid #f2f2f2;
					font-size: 32upx;
					color: #333333;
				}
			}
		}
	}
</style>
