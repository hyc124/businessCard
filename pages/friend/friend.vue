<template>
	<view class="friend">
		<u-navbar :is-back="false" title="企业动态" title-size="28" class="nav-bar">
			<view slot="right" class="menu" @click="handleMycenter">
				<view class="left-menu">
					<view class="avatar">
						<u-avatar :src="cardInfo.avatar" mode="circle" bg-color="#F0F2F5" size="48" class="avatar-img"></u-avatar>
					</view>
					<text>个人中心</text>
				</view>
			</view>
		</u-navbar>
		<view class="subject" v-if="cardInfo.is_friends">
			<view class="img-top">
				<image class="big-imgs" :src="url" mode="widthFix"></image>
			</view>
			<template v-for="item in list">
				<friend :info="item" :key="item.completed_time" @onImgSee="onImgSee"></friend>
				<view class="dianzi"></view>
			</template>
			<u-loadmore :status="status" :load-text="loadText" @loadmore="onLoads" />
		</view>
		<tips :num="1" v-if="!onOff" @onclose="onclose"></tips>
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	import friend from "../../components/friend/friend";
	import tips from "../../components/tips/tips";
	export default {
		data() {
			return {
				list: [],
				status: 'loadmore',
				pageNum: 1,
				loadText: {
					loadmore: '点击或上拉加载更多',
					loading: '努力加载中。。。',
					nomore: '没有更多'
				},
				url: '',
				onOff: true,
				seeImg: true // 点图片还是切换页面
			}
		},
		components: {
			friend,
			tips
		},
		computed: {
			// 在vuex里拿到用户数据
			cardInfo() {
				return this.$store.state.cardInfo;
			}
		},
		methods: {
			onclose() {
				this.onOff = true
			},
			onLoads() {
				this.pageNum++
				this.getFriends()
			},
			handleMycenter() {
				uni.navigateTo({
					url: "/pages/myCenter/index/index"
				})
			},
			onImgSee() {
				this.seeImg = false
			},
			async getFriends() {
				this.status = 'loading'
				const {
					data,
					code,
				} = await this.$u.api.friends({
					page: this.pageNum,
					limit: 10
				});
				if (code == 1) {
					this.list.push(...data.list)
					if (this.pageNum * 10 > data.count) {
						this.status = 'nomore'
					} else {
						this.status = 'loadmore'
					}
					this.url = data.bg_url
				}
			},
			onReachBottom() {
				this.pageNum++
				this.getFriends()
			}
		},
		onHide() {
			console.log(this.seeImg)
			if (this.seeImg) {
				this.list = []
				this.pageNum = 1
			}

		},
		onShow() {
			console.log(this.seeImg)
			if (this.seeImg) {
				this.getFriends()
				this.onOff = this.cardInfo.is_friends
			} else {
				this.seeImg = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.friend {

		// 头部css
		.nav-bar {
			background-color: $uni-bg-color;
			position: relative;
			top: -40upx;
			z-index: 99999;

			.title {
				font-size: 28upx;
			}

			.menu {
				position: absolute;
				left: 20upx;
				top: 18upx;
			}

			.left-menu {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 24upx;
				width: 174upx;
				height: 60upx;
				position: relative;

				.avatar {
					width: 50upx;
					height: 50upx;
					display: flex;
					align-items: center;
					border-radius: 50upx;
					overflow: hidden;
					justify-content: center;
					margin-left: -14rpx;
					margin-right: 10upx;

					.avatar-img {
						width: 48upx;
						height: 48upx;
					}
				}

				&::after {
					content: " ";
					width: 200%;
					height: 200%;
					position: absolute;
					top: 0;
					left: 0;
					border: 1px solid rgba(0, 0, 0, .2);
					-webkit-transform: scale(.5);
					transform: scale(.5);
					-webkit-transform-origin: 0 0;
					transform-origin: 0 0;
					box-sizing: border-box;
					border-radius: 60upx;
				}

				image {
					width: 100%;
					margin-right: 12upx;
				}
			}
		}

		.subject {
			padding-bottom: 20upx;

			.dianzi {
				height: 16upx;
			}

			.img-top {
				position: relative;
				height: 300upx;

				.big-imgs {
					width: 100%;
					height: 300upx !important;
					position: absolute;
					top: 0;
					left: 0;
					z-index: -1;
				}

				.logo-top-box {
					height: 64upx;
					margin: 0upx 32upx 258upx 0;
					padding-top: 22upx;

					.edit {
						margin-right: 40upx;
					}

					.img {
						height: 64upx;
						width: 64upx;
					}
				}
			}

			.user-description {
				color: #ffffff;
				height: 94upx;
				padding: 0 30upx;

				.description {
					width: 354upx;
				}

				.user-name {
					margin: 32upx 20upx 0 108upx;
				}

				.user-img {
					width: 112upx;
					height: 112upx;
					border-radius: 8upx;
					position: relative;
					top: 24upx;
					background-color: pink;
				}
			}
		}
	}
</style>
