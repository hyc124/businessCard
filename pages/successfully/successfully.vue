<template>
	<view class="successfully">
		<u-navbar :is-back="true" title="创建成功" title-size="28" class="nav-bar"></u-navbar>
		<view class="subject">
			<view class="header-box flex">
				<image src="../../static/svg/ysecard.svg" mode="widthFix"></image>
				<view class="header-box-right">
					<view class="text-top">
						名片保存成功
					</view>
					<view class="text-bott">
						名片已保存至您的名片夹
					</view>
				</view>
			</view>
			<card :onOff="1" :info="data"></card>
			<view class="btn seeCard" @click="onSeeCard">
				查看名片详情
			</view>
			<view class="btn go-to" @click="onGoto">
				返回名片夹
			</view>
		</view>
	</view>
</template>

<script>
	import card from "../../components/card/card";
	export default {
		data() {
			return {
				data: {
					id:''
				}
			};
		},
		components: {
			card
		},
		methods: {
			onGoto() {
				uni.switchTab({
					url: '/pages/cardholder/cardholder'
				});
			},
			async getUserInfo(id) {
				const {
					data,
					code
				} = await this.$u.api.cardInfo({
					id: id
				});
				if (code == 1) {
					this.data = data
				}
			},
			onSeeCard(){
				this.$store.commit('SetCustomerId',this.id)
				uni.switchTab({
					url: `/pages/card/card`
				});
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getUserInfo(option.id)
		}
	}
</script>

<style lang="scss" scoped>
	.successfully {
		.nav-bar {
			background-color: $uni-bg-color;
			position: relative;
			top: -40upx;
			z-index: 99999;
		}

		.subject {
			.header-box {
				margin: 60upx 0 42upx 190upx;
				height: 92upx;

				image {
					width: 116upx;
					height: 67upx;
					margin-top: 8upx;
				}

				.header-box-right {
					margin-left: 14upx;

					.text-top {
						font-size: 36upx;
						color: #303133;
					}

					.text-bott {
						font-size: 24upx;
						color: #303133;
						margin-top: 8upx;
					}
				}
			}

			.btn {
				width: 512upx;
				margin: 0 auto;
				line-height: 76upx;
				border-radius: 38upx;
				font-size: 32upx;
				text-align: center;
			}

			.seeCard {
				color: #ffffff;
				background-color: #0082EF;
				border: 2upx solid #0082EF;
				margin-top: 150upx;
			}

			.go-to {
				color: #606266;
				border: 2upx solid #DCDFE6;
				margin-top: 40upx;
			}
		}
	}
</style>
