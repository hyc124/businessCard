<template>
	<view class="guide-box">
		<view class="head">
			<view class="title">欢迎使用名冠天下电子名片</view>
			<view class="sub-title">商务形象展示，企业价值传递</view>
			<button class="guide" @click="toLearning">新手指引</button>
		</view>
		<view class="bg">
			<image src="../../static/svg/round.svg" class="bg1"></image>
			<image src="../../static/svg/round.svg" class="bg2"></image>
		</view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper-box">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
					 circular :current="swiperCurrent" @change="swiperChange">
						<swiper-item v-for="(item,index) in banner" :key="index" class="banner">
							<image :src="item.url" mode="widthFix" class="image"></image>
							<view class="text">{{item.text}}</view>
						</swiper-item>
					</swiper>
					<view class="dots">
						<block v-for="(item,index) in banner" :key="index">
							<view class="dot" :class="index == swiperCurrent ?' active' : ''"> </view>
						</block>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="title">您还没有名片</view>
			<view class="sub-title">
				3秒获取企业微信通讯录，定制名片
			</view>
			<uni-grid :column="3" :show-border="false" class="grid">
				<uni-grid-item v-for="(item,index) in action" :key="index">
					<view @click="handleAction(index)" class="item">
						<image :src="item.url" mode="widthFix" class="image"></image>
						{{item.text}}
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="popup-box" v-if="guide">
			<view class="get-info" v-if="guideType=='create'">
				<image src="../../static/svg/check-contact.svg" mode="widthFix"></image>
				<view class="info">
					<view>获取<text>企业微信通讯录</text>，生成电子名片</view>
					<view><text>分享</text>名片，快速发展<text>人脉</text></view>
					<view>智能识别名片，快速存入<text>电话本</text></view>
				</view>

				<view class="progress-box" v-if="isCreated">
					<view class="progress">{{progress}}%</view>
					<view>资料获取中</view>
				</view>
				<block v-else>
					<button type="primary" class="button creat" @click="handleGetInfo">一键创建我的名片</button>
					<view class="known" @click="guide=false" v-if="!isCread">我知道了</view>
				</block>
			</view>
			<view class="info-done" v-if="guideType=='done'">
				<image src="../../static/svg/done.svg" mode="widthFix" class="icon"></image>
				<view class="result">已成功获取我的信息</view>
				<view class="sub-info">
					{{times}}秒后自动跳转到名片编辑页面，<br>
					请完善信息
				</view>
			</view>
			<view class="info-error" v-if="guideType=='error'">
				<image src="../../static/svg/error.svg" mode="widthFix" class="icon"></image>
				<view>个人资料获取失败，未自动生成电<br>子名片。去录入你的名片信息吧</view>
				<button type="primary" class="button creat" @click="toCreadCard">去创建</button>
				<button type="default" class="button cancel" @click="guide=false">取消</button>
			</view>
		</view>
		<u-modal v-model="remind" border-radius="40" @confirm="onGocard" @cancel="remind = false" :show-title="false" content="识别失败，请保证名片拍摄清晰"
		 cancel-color="#909399" cancel-text="我知道了" confirm-text="重新拍摄" :show-cancel-button="true"></u-modal>
	</view>
</template>

<script>
	import {
		OCRCard
	} from "../../static/js/public.js";
	export default {
		data() {
			return {
				banner: [{
						url: "../../static/svg/guide1.svg",
						text: "多渠道分享名片，轻松拓展人脉"
					},
					{
						url: "../../static/svg/guide2.svg",
						text: "网络、纸媒都可以使用，低成本获客"
					},
					{
						url: "../../static/svg/guide3.svg",
						text: "海量模板，定制高颜值个性名片"
					}
				],
				action: [{
						url: "../../static/svg/action1.svg",
						text: "手动创建"
					},
					{
						url: "../../static/svg/action2.svg",
						text: "一键创建"
					},
					{
						url: "../../static/svg/action3.svg",
						text: "拍名片"
					}
				],
				indicatorDots: false,
				autoplay: false,
				interval: 3000,
				duration: 500,
				swiperCurrent: 0,
				guideType: "create",
				guide: true,
				progress: 0,
				isCreated: false,
				times: 3,
				time:'',
				isCread: 0,
				remind: false
			};
		},
		onLoad(option) {
			this.isCread = option.isCread;
			let isNoGuide = this.$store.state.isNoGuide;
			if (isNoGuide) {
				this.guide = false;
			}
		},
		methods: {
			onGocard() {
				OCRCard('', 1, 0, this.callBack);
			},
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
			async handleGetInfo() {
				this.isCreated = true;
				let that = this;
				let progressTime = setInterval(() => {
					that.progress++;
					if (that.progress >= 100) {
						clearInterval(progressTime);
					}
				}, 10)
				const {
					code
				} = await this.$u.api.creadCard({
					type: 1,
					status: 3,
				});

				if (code) {
					that.$store.dispatch("GetCardInfo");
					this.guideType = "done";
					clearInterval(progressTime);
					 this.time = setInterval(() => {
						this.times--;
						if (this.times == 0) {
							uni.navigateTo({
								url: "/pages/myCenter/edit/edit?type=4&state=0&onOff=1",
							})
						}
					}, 1000)
				} else {
					this.guideType = "error";
				}
			},
			handleAction(index) {
				switch (index) {
					case 0:
						uni.navigateTo({
							url: `/pages/myCenter/edit/edit?type=2&state=0&onOff=1`
						})
						this.$store.commit("SetGuide", true);
						break;
					case 1:
						this.guideType = "create";
						this.guide = true;
						break;
					case 2:
						OCRCard('', 1, 0, this.callBack);
						break;
				}
			},
			callBack(stuta) {
				this.remind = stuta
			},
			toLearning() {
				uni.navigateTo({
					url: "/pages/learning/learning",
				})
				this.$store.commit("SetGuide", true);
			},
			toCreadCard() {
				uni.navigateTo({
					url: "/pages/myCenter/edit/edit?type=2&state=0&onOff=1",
				})
				this.$store.commit("SetGuide", true);
			}
		},
		onShow() {
			clearInterval(this.time)
			this.time = 0
			this.guideType = 'create'
			this.isCreated = false
			this.progress = 0
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
		overflow: hidden;
	}

	.guide-box {
		width: 750upx;
		background: $bg-color;
		overflow: hidden;
		height: 100vh;

		.head {
			padding: 48upx 56upx;
			position: relative;
			z-index: 1;

			.title {
				font-size: 40upx;
				font-weight: 500;
				margin-bottom: 10upx;
			}

			.sub-title {
				font-size: 28upx;

				&:after {
					background: $primary-color;
					content: "";
					width: 78upx;
					height: 10upx;
					display: block;
					position: relative;
					top: 18upx;
				}
			}

			.guide {
				position: absolute;
				right: 0;
				background: #D2D9DE;
				color: #666666;
				border-radius: 20px 0 0 20px;
				padding: 0 24upx;
				font-size: 28upx;
				top: 48upx;
				cursor: pointer;
				border: none;
				line-height: 72upx;

				&::after {
					border: none;
				}
			}
		}

		.bg {
			position: absolute;
			top: 20px;
			width: 700upx;
			z-index: 0;

			.bg1 {
				position: absolute;
				right: -200upx;
			}

			.bg2 {
				position: absolute;
				top: 510upx;
				left: -280upx;
			}
		}

		.uni-padding-wrap {
			margin-top: 20upx;
			position: relative;

			.swiper {
				height: 520upx;

				.text {
					text-align: center;
					line-height: 60upx;
					font-size: 34upx;
				}

				.banner {
					text-align: center;

					.image {
						width: 482upx;
					}
				}
			}

			.dots {
				position: absolute;
				left: 0;
				right: 0;
				bottom: 20upx;
				display: flex;
				justify-content: center;

				.dot {
					width: 36upx;
					height: 8upx;
					background-color: $gray;
					margin: 0 8upx;

					&.active {
						background-color: $primary-color;
					}
				}
			}
		}

		.bottom {
			background: $uni-bg-color;
			border-radius: 16px 16px 0 0;
			overflow: hidden;
			padding: 48upx 0 64upx;
			text-align: center;
			margin-top: 20px;
			color: #303133;
			font-size: 30upx;
			position: relative;
			z-index: 1;

			.title {
				font-weight: 500;
				line-height: 80upx;
				font-size: 40upx;
			}

			.grid {
				/deep/.uni-grid-item__box {
					border-right: 0 !important;
					border-left: 0 !important;
					border-top: 0 !important;
					border-bottom: 0 !important;
					align-items: center;
					justify-content: center;
				}

				.image {
					width: 48upx;
					display: block;
					margin: 0 auto;
					margin-bottom: 20upx;
				}
			}
		}

		.popup-box {
			position: absolute;
			top: 0;
			height: 100%;
			width: 100%;
			z-index: 2;
			background-color: rgba($color: #fff, $alpha: 0.95);
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;

			.button {
				&::after {
					display: none
				}

				background-color: $primary-color;
				border-radius: 48upx;
				font-size: 32upx;
				line-height: 96upx;

				&.cancel {
					background: $uni-bg-color;
					border: 1px solid #DCDFE6;
				}
			}

			.icon {
				width: 234upx;
			}

			.sub-info {
				color: #606266;
				font-size: 28upx;
				margin-top: 32upx;
				letter-spacing: 1upx;
				line-height: 50upx;
				margin-bottom: 440upx;
			}

			.get-info {
				text-align: center;
				font-size: 30upx;
				line-height: 70upx;
				color: #292929;

				image {
					width: 436upx;
					margin-bottom: 33upx;
				}

				text {
					color: #FFAB2D;
					font-size: 34upx;
				}

				.creat {
					background-color: $primary-color;
					margin-top: 80upx;
					box-shadow: 0px 3px 6px rgba(0, 130, 239, 0.16);
				}

				.known {
					margin-top: 160upx;
					color: #406080;
					font-size: 32upx;
				}

				.progress-box {
					margin-top: 138upx;
					margin-bottom: 118upx;

					.progress {
						font-size: 64upx;
						color: $primary-color;
						font-weight: bold;
						margin-bottom: 10upx;
					}
				}
			}

			.info-error {
				view {
					font-size: 32upx;
					line-height: 60upx;
					margin-bottom: 48upx;
				}

				.button {
					margin-bottom: 40upx;

					&.cancel {
						margin-bottom: 200upx;
					}
				}
			}
		}
	}
</style>
