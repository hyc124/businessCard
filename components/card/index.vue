<template>
	<view class="card-box u-skeleton">
		<view class="backbigimg" v-if="cardInfo.style!=1">
			<image :src="imgSrc" mode="widthFix"></image>
		</view>
		<view class="card u-skeleton-fillet" :class="'card'+cardInfo.style" @click="handlerShowCard(cardInfo)">
			<view class="flex flex-ju-between">
				<view class="left">
					<view class="name u-skeleton-rect">
						{{cardInfo.username?cardInfo.username:''}}
					</view>
					<view class="u-skeleton-rect">
						<template v-if="cardInfo.position&&cardInfo.main_department">
							{{cardInfo.position}}/{{cardInfo.main_department}}
						</template>
						<template v-else>{{cardInfo.position}}{{cardInfo.main_department}}</template>
					</view>
				</view>
				<view class="company-logo u-skeleton-rect" :class="(!cardInfo.xzd||cardInfo.type==2)?'company-logo-to':''">
					<image class="img" src="../../static/svg/comLogo1.svg" mode="widthFix" v-if="cardInfo.xzd&&cardInfo.type!=2"></image>
					<view class="englishName" v-if="!cardInfo.xzd||cardInfo.type==2">{{cardInfo.company_name_en}}</view>
					<view class="chineName" v-if="!cardInfo.xzd||cardInfo.type==2" :class="'chineName'+cardInfo.style">{{cardInfo.company_name}}</view>
				</view>
			</view>
			<view class="company-name u-skeleton-rect">{{cardInfo.company_name}}</view>
			<view class="info">
				<view class="item u-skeleton-rect">
					<text class="titl">地址：</text>
					<text class="content">{{cardInfo.company_address}}</text>
				</view>
				<view class="item flex ">
					<view class="sub-item u-skeleton-rect">
						<text class="titl">电话：</text>
						<text class="content">{{cardInfo.telephone}}</text>
					</view>
					<view class="sub-item u-skeleton-rect">
						<text class="titl">传真：</text>
						<text class="content">{{cardInfo.fax}}</text>
					</view>
				</view>
				<view class="item flex">
					<view class="sub-item u-skeleton-rect">
						<text class="titl">手机：</text>
						<text class="content">{{cardInfo.mobile}}</text>
					</view>
					<view class="sub-item u-skeleton-rect">
						<text class="titl">邮编：</text>
						<text class="content">{{cardInfo.zip_code}}</text>
					</view>
				</view>
				<view class="item u-skeleton-rect">
					<text class="titl">邮箱：</text>
					<text class="content">{{cardInfo.email}}</text>
				</view>
				<view class="qy-code u-skeleton-fillet" @click.stop="toQrcode(cardInfo.id)" v-if="cardInfo.qr_code">
					<image class="img" :src="cardInfo.qr_code?cardInfo.qr_code:'../../static/img/defaultQr.png'" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<u-popup v-model="showInfo" mode="center" border-radius="14" :custom-style="{paddingTop:'96rpx'}">
			<view class="info-box" :class="'info-box'+cardInfo.style">
				<view class="longimg">
					<image :src="longImgSrc" v-if="cardInfo.style!=1" mode="widthFix"></image>
				</view>
				<view class="logo">
					<image class="img" v-if="cardInfo.xzd&&cardInfo.type!=2" src="../../static/svg/comLogo2.svg" mode="widthFix"></image>
				    <view class="img-englishName" v-if="!cardInfo.xzd||cardInfo.type==2">{{cardInfo.company_name_en}}</view>
				    <view class="img-chineName" v-if="!cardInfo.xzd||cardInfo.type==2" :class="'chineName'+cardInfo.style">{{cardInfo.company_name}}</view>
				</view>
				<view class="action">
					<image class="img" src="../../static/svg/close.svg" mode="widthFix" @click="showInfo=false"></image>
					<image class="img" src="../../static/svg/qr.svg" mode="widthFix" @click="toQrcode(cardInfo.id)"></image>
				</view>
				<view class="name">
					{{cardInfo.username}}
				</view>
				<view class="position">
					{{cardInfo.position}}
				</view>
				<view class="item flex">
					<view class="til">
						电话：
					</view>
					<view>
						{{cardInfo.telephone}}
					</view>
				</view>
				<view class="item flex">
					<view class="til">
						手机：
					</view>
					<view>
						{{cardInfo.mobile}}
					</view>
				</view>
				<view class="item flex">
					<view class="til">
						邮箱：
					</view>
					<view>
						{{cardInfo.email}}
					</view>
				</view>
				<view class="item flex">
					<view class="til">
						传真：
					</view>
					<view>
						{{cardInfo.fax}}
					</view>
				</view>
				<view class="item flex">
					<view class="til">
						邮编：
					</view>
					<view>
						{{cardInfo.zip_code}}
					</view>
				</view>
				<view class="item flex">
					<view class="til">
						地址：
					</view>
					<view>
						{{cardInfo.company_address}}
					</view>
				</view>
				<view class="slogan">
					科技创造美好农业
				</view>
			</view>
		</u-popup>
		<u-skeleton :loading="loading" :animation="true" :bgColor="bgColor" :elColor="elColor"></u-skeleton>
	</view>
</template>

<script>
	export default {
		props: ["info", "isMyCard", "auth", "navHeight", 'onOff'],
		data() {
			return {
				showInfo: false,
				cardInfo: {
					username: "",
					position: "",
					company: "",
					company_address: "",
					telephone: "",
					fax: "",
					mobile: "",
					post: "",
					email: "",
					zip_code: "",
					company_name: "",
					qy_code: "",
					main_department: "",
				},
				loading: true,
				bgColor: "#fffff",
				elColor: "#71B747",
			};
		},
		computed: {
			imgSrc() {
				return `../../static/svg/bigimg${this.cardInfo.style||2}.svg`
			},
			longImgSrc() {
				return `../../static/svg/longimg${this.cardInfo.style||2}.svg`
			}
		},
		watch: {
			info: {
				handler(val) {
					this.loading = false;
					// if (!this.$u.test.isEmpty(val) && val.username) {
					this.cardInfo = val;
					// }
				},
				immediate: true,
				deep: true
			}
		},
		methods: {
			toQrcode(id) {
				uni.navigateTo({
					url: `../../pages/qycode/qycode`
				});
				this.showInfo = false;
			},
			handlerShowCard(info) {
				if (this.onOff != 1 && this.onOff != 2) {
					if (this.isMyCard) {
						uni.navigateTo({
							url: "/pages/card/card"
						});
					} else {
						this.showInfo = true
					}
				} else if (this.onOff == 2) {
					this.$emit('onSeeCard', info.id)
				}
			}
		}

	}
</script>

<style lang="scss" scoped>
	.card-box {
		margin: 30upx;
		position: relative;
		overflow: hidden;
        border-radius: 16upx;
		box-shadow: -3upx 6upx 12upx rgba(00,00,00,.2);
		.backbigimg {
			width: 690upx;
			height: 448upx;
			position: absolute;
			z-index: 0;
			border-radius: 16upx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.card {
			border-radius: 16upx;
			overflow: hidden;
			position: relative;
			padding: 36upx 40upx;
			box-sizing: border-box;
			// height: 414upx;
			max-height: 454upx;
			width: 690upx;
			min-height: 424upx;

			&.card1 {
				background: linear-gradient(192deg, #71B747 0%, #71B747 33%, #71B747 46%, #399E6F 63%, #01648A 100%);
				color: #fff;
			}

			&.card2 {
				color: #B3B3B3;
			}

			&.card3 {
				color: #fff;
			}

			&.card4 {
				color: #fff;
			}

			&.card5 {
				color: #303133;
			}


			.company-logo {
				width: 240upx;
				height: 100upx;
				line-height: 28upx;
				font-size: 20upx;

				.img {
					width: 100%;
				}

				.englishName {
					height: 28upx;
					text-align: center;
					margin-top: 5upx;
				}

				.chineName {
					height: 40upx;
					padding: 6upx 0;
					margin-top: 10upx;
					text-align: justify;

					&::after {
						content: " ";
						display: inline-block;
						width: 100%;
					}

					&.chineName1 {
						border-bottom: 2upx solid #fff;
					}

					&.chineName2 {
						border-bottom: 2upx solid #B3B3B3;
					}

					&.chineName3 {
						border-bottom: 2upx solid #fff;
					}

					&.chineName4 {
						border-bottom: 2upx solid #fff;
					}

					&.chineName5 {
						border-bottom: 2upx solid #303133;
					}
				}

				&.company-logo-to {
					width: 280upx;
				}
			}

			.name {
				font-size: 36upx;
			}

			.company-name {
				margin-top: 44upx;
				margin-bottom: 16upx;
			}

			.info {
				position: relative;

				.item {
					font-size: 20upx;
					line-height: 36upx;

					.sub-item {
						width: 220upx;

						&:nth-child(2n) {
							margin-left: 20upx;
						}
					}
				}

				.qy-code {
					background-color: $uni-bg-color;
					border-radius: 4px;
					padding: 8upx;
					position: absolute;
					width: 130upx;
					height: 130upx;
					right: 0;
					bottom: 8rpx;

					.img {
						width: 100%;
					}
				}
			}
		}

		.info-box {
			padding: 72upx 88upx;
			box-sizing: border-box;
			width: 690upx;
			height: 1148upx;
			position: relative;
           .longimg{
			   width: 690upx;
			   height: 1148upx;
			   left: 0;
			   top: 0;
			   position: absolute;
			   z-index: -1;
			   overflow: hidden;
			   image{
				   width: 100%;
				   height: 100%;
			   }
		   }
			&.info-box1 {
				background: linear-gradient(32deg, #0056A7 8%, #2C964A 50%, #B5C700 100%);
				color: $uni-bg-color;
			}

			&.info-box2 {
				color: #B3B3B3;
			}

			&.info-box3 {
				color: #fff;
			}

			&.info-box4 {
				color: #fff;
			}

			&.info-box5 {
				color: #303133;
			}

			.action {
				position: absolute;
				top: 24upx;
				right: 24upx;

				.img {
					width: 48upx;
					display: block;
					margin-bottom: 24upx;
					cursor: pointer;
				}
			}

			.logo {
				width: 398upx;
				margin: 0 auto;
                font-size: 36upx;
				.img {
					width: 100%;
				}
				.img-englishName {
					height: 40upx;
					text-align: center;
				}
				
				.img-chineName {
					height: 64upx;
					padding: 12upx 0;
					text-align: justify;
				
					&::after {
						content: " ";
						display: inline-block;
						width: 100%;
					}
				
					&.chineName1 {
						border-bottom: 2upx solid #fff;
					}
				
					&.chineName2 {
						border-bottom: 2upx solid #B3B3B3;
					}
				
					&.chineName3 {
						border-bottom: 2upx solid #fff;
					}
				
					&.chineName4 {
						border-bottom: 2upx solid #fff;
					}
				
					&.chineName5 {
						border-bottom: 2upx solid #303133;
					}
				}
			}

			.name {
				text-align: center;
				font-size: 36upx;
				margin-top: 104upx;
				margin-bottom: 14upx;
			}

			.position {
				font-size: 30upx;
				text-align: center;
				border-bottom: 2upx solid #fff;
				padding-bottom: 48upx;
				margin-bottom: 48upx;
			}

			.item {
				line-height: 60upx;
				font-size: 24upx;

				.til {
					flex-shrink: 0;
				}
			}

			.slogan {
				text-align: center;
				font-size: 28upx;
				letter-spacing: 20upx;
				margin-top: 128upx;
			}
		}
	}
</style>
