<template>
	<view class="mi-code-box flex flex-jus-center flex-al-center" :animation="animationData">
		<view>
			<view class="info">
				<view class="name">{{cardInfo.username}}</view>
				<view class="position">{{cardInfo.positionInfo}}</view>
			</view>
			<view class="code-area">
				<view class="code" :animation="noanimationData">
					<image :src="cardInfo.small_program_code" mode="widthFix"></image>
				</view>
				<view class="circle circle1">
					<image src="@/static/svg/dot/1.svg" mode="widthFix"></image>
				</view>
				<view class="circle circle2">
					<image src="@/static/svg/dot/2.svg" mode="widthFix"></image>
				</view>
				<view class="circle circle3">
					<image src="@/static/svg/dot/3.svg" mode="widthFix"></image>
				</view>
				<view class="circle circle4">
					<image src="@/static/svg/dot/4.svg" mode="widthFix"></image>
				</view>
			</view>
			<view class="logo-box">
				<view class="logo">
					<image src="../../static/img/logo.png" mode="widthFix"></image>
				</view>
				<view class="name">{{cardInfo.company_name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				animationData: {},
				noanimationData:{},
				cardInfo:{
					username: "",
					positionInfo: "",
					main_department:"",
					company_name:"",
					small_program_code:""
				}
			};
		},
		onShow: function() {
			this.cardInfo = this.$store.state.cardInfo;
			if(this.cardInfo.position&&this.cardInfo.main_department) {
				this.cardInfo.positionInfo = `${this.cardInfo.position}/${this.cardInfo.main_department}`
			} else if(this.cardInfo.main_department) {
				this.cardInfo.positionInfo = this.cardInfo.main_department;
			} else {
				this.cardInfo.positionInfo = this.cardInfo.position;
			}
			let animation = uni.createAnimation({
				duration: 1000,
				timingFunction: 'ease',
			})
			setTimeout(function() {
				animation.rotate(180).step()
				this.animationData = animation.export();
				animation.rotate(-360).step()
				this.noanimationData = animation.export();
			}.bind(this), 500)
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: $bg-color;
	}

	.mi-code-box {
		background-color: $bg-color;
		height: 100vh;
		.info {
			text-align: center;
			padding: 38upx 0;
			color: #303133;

			.name {
				font-size: 48upx;
				line-height: 90upx;
			}

			.position {
				font-size: 24upx;
			}
		}

		.code-area {
			width: 608upx;
			height: 608upx;
			margin: 0 auto;
			border-radius: 50%;
			border: 1px solid #ECE6D9;
			margin-top: 38upx;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			.circle {
				position: absolute;
				top: 0;
				right: 0;
				width: 100%;
				height: 100%;
				border-radius: 50%;

				image {
					width: 28upx;
					position: absolute;
					margin-left: -14upx;
				}

				&.circle1 {
					-webkit-animation:changeright 4.5s linear infinite;
					image {
						top: -14upx;
						left: 50%;
					}
				}

				&.circle2 {
					-webkit-animation:changeright 5.5s linear infinite;
					image {
						left: 0;
						top: 50%;
						margin-top: -14upx;
					}
				}

				&.circle3 {
					-webkit-animation:changeright 6s linear infinite;
					image {
						right: -14upx;
						top: 50%;
						margin-top: -14upx;
					}
				}

				&.circle4 {
					-webkit-animation:changeright 6.5s linear infinite;
					image {
						bottom: 10upx;
						left: 100upx;
					}
				}
			}
			.code {
				padding: 40upx;
				box-sizing: border-box;
				width: 568upx;
				height: 568upx;
				background-color: $uni-bg-color;
				border-radius: 50%;
				overflow: hidden;
				image {
					width: 468upx;
				}
			}
		}

		.logo-box {
			text-align: center;
			margin-top: 60upx;
			font-size: 32upx;

			.logo {
				width: 128upx;
				height: 128upx;
				margin: 0 auto;
				border-radius: 4px;
				background-color: $uni-bg-color;
				margin-bottom: 20upx;
				padding: 0 6px;
				display: flex;
				align-items: center;
				image {
					width: 100%;
				}
			}
		}

		@-webkit-keyframes changeright {

			0% {
				-webkit-transform: rotate(0deg);
			}

			50% {
				-webkit-transform: rotate(180deg);
			}

			100% {
				-webkit-transform: rotate(360deg);
			}
		}
	}
</style>
