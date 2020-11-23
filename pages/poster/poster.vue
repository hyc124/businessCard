<template>
	<view class="poster-box">
		<view class="poster-area u-skeleton" v-if="loading">
			<view class="u-skeleton-fillet" style="height: 200px;"></view>
			<view class="welcome u-skeleton-rect">
				<view class="u-skeleton-rect">您好，</view>
				<view class="u-skeleton-rect">我是{{cardInfo.company_name}}{{cardInfo.position}}
					{{cardInfo.username}}</view>
				<view class="u-skeleton-rect">这是我的名片，望惠存。</view>
				<view class="u-skeleton-rect">谢谢。</view>
			</view>
			<view class="flex code u-skeleton-rect">
				<view class="left">
					长按识别二维码，收下名片
				</view>
				<view class="right u-skeleton-circle">
					<image :src="cardInfo.small_program_code" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="img-box u-skeleton" v-else @click="preview">
			<image :src="imagePath" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="canvas-box" style="position: absolute; top: -9999rpx;">
			<painter customStyle='position: absolute; left: -9999rpx;' :palette="palette" @imgOK="onGenerateSuccess" @imgErr="onGenerateError"
			 widthPixels="1000" />
		</view>
		<view class="flex aciton">
			<u-button type="primary" shape="circle" @click="saveImg" :custom-style="{width:'60%',height:'88rpx'}">
				<image src="../../static/svg/save-poster.svg" mode="widthFix"></image>
				保存名片海报后分享
			</u-button>
		</view>
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
	</view>
</template>

<script>
	import card from "../../components/card/card";
	import cardData from './card.js';
	export default {
		data() {
			return {
				cardInfo: {
					company_name: "xxx",
					position: "xxxx",
					username: "xxx",
					small_program_code_base64: "",
				},
				palette: "",
				imagePath: "",
				loading: true
			};
		},
		components: {
			card
		},
		computed:{
			customerId() {
				return this.$store.state.customerId
			}
		},
		created() {
			if(this.customerId==""){
				this.cardInfo = this.$store.state.cardInfo;
				let isCreatPoster = this.$store.state.isCreatPoster;
				if (this.cardInfo.posters=='') {
					this.initData();
				} else {
					if(isCreatPoster){
						this.initData(); 
						return false;
					};
					this.imagePath = this.cardInfo.posters;
					this.loading = false;
				}
			}else{
				this.getUserInfo()
			}
		},
		methods: {
			async getUserInfo() {
				const {
					data
				} = await this.$u.api.cardInfo({
					id: this.customerId
				});
				this.cardInfo = data
				this.initData()
			},
			initData() {
				uni.showLoading({
					title: "拼命生成中...",
					mask: true,
				});
				if (this.cardInfo.position && this.cardInfo.main_department) {
					this.cardInfo.positionInfo = `${this.cardInfo.position}/${this.cardInfo.main_department}`
				} else if (this.cardInfo.main_department) {
					this.cardInfo.positionInfo = this.cardInfo.main_department;
				} else {
					this.cardInfo.positionInfo = this.cardInfo.position;
				}
				this.palette = new cardData(this.cardInfo).palette();
			},
			onGenerateSuccess(res) {
				let baseUrl = uni.baseUrl;
				let that = this;
				uni.uploadFile({
					url: baseUrl + "/vcard/upload",
					filePath: res.detail.path,
					name: "img",
					header: {
						token: uni.getStorageSync("token")
					},
					formData: {
						id: that.cardInfo.id,
						type: 1
					},
					success(res) {
						that.loading = false;
						uni.hideLoading();
						try {
							if (typeof(res.data) == "string") {
								res.data = JSON.parse(res.data);
							}
							that.imagePath = res.data.data.url;
							that.$store.commit("SetIsCreatPoster",false);
							that.$store.dispatch("GetCardInfo");
						} catch (e) {
							console.log(e)
						}
					},
					fail() {
						uni.hideLoading();
						that.showMsg("error", '上传失败');
					}
				});
			},
			onGenerateError(res) {
				uni.hideLoading();
			},
			preview() {
				if (!this.imagePath) return false;
				let imgList = [];
				imgList.push(this.imagePath);
				uni.previewImage({
					urls: imgList,
					current: 0,
				})
			},
			saveImg() {
				let that = this;
				uni.authorize({
					scope: "scope.writePhotosAlbum",
					success() {
						uni.downloadFile({
							url:that.imagePath,
							success(res) {
								uni.saveImageToPhotosAlbum({
									filePath: res.tempFilePath,
									success() {
										uni.showModal({
											title: "保存成功",
											content: "图片已成功保存到相册，你可以长按图片或去手机相册分享给好友",
											showCancel: false,
											success() {
												let imgList = [];
												imgList.push(that.imagePath);
												uni.previewImage({
													urls: imgList,
													current: 0,
												})
											}
										})
									},
								});
							}
						})
					},
					fail(err) {
						if (err.errMsg.includes("authorize:fail")) {
							// 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
							wx.showModal({
								title: '提示',
								content: '需要您授权保存相册',
								showCancel: false,
								success: modalSuccess => {
									wx.openSetting({
										success(settingdata) {
											if (settingdata.authSetting['scope.writePhotosAlbum']) {
												wx.showModal({
													title: '提示',
													content: '获取权限成功,再次点击图片即可保存',
													showCancel: false,
												})
											} else {
												wx.showModal({
													title: '提示',
													content: '获取权限失败，将无法保存到相册哦~',
													showCancel: false,
												})
											}
										},
										fail(failData) {
											console.log("failData", failData)
										},
										complete(finishData) {
											console.log("finishData", finishData)
										}
									})
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	Page {
		background-color: $bg-color;
	}

	.poster-box {
		padding: 40upx 40upx 0;
		background-color: $bg-color;
		height: calc(100vh - 100upx);

		.poster-area {
			padding: 24upx 24upx 52upx;
			background-color: $uni-bg-color;
		}

		.img-box {
			background-color: $uni-bg-color;
		}

		/deep/.card-box {
			padding: 0;
		}

		.welcome {
			font-size: 32upx;
			margin: 64upx 0 20upx;
			line-height: 50upx;
		}

		.code {
			justify-content: space-between;
			height: 196upx;
			align-items: flex-end;

			.left {
				color: #606266;
				position: relative;

				&::before {
					position: absolute;
					content: "";
					background-color: $primary-color;
					display: block;
					width: 44upx;
					height: 4upx;
					left: 0;
					top: -20upx;
				}
			}

			.right {
				width: 196upx;

				image {
					width: 100%;
				}
			}
		}

		.aciton {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			box-sizing: border-box;
			background-color: $uni-bg-color;
			padding: 16upx;
			justify-content: space-between;

			/deep/u-button {
				width: 100%;
			}

			image {
				width: 40upx;
				margin-right: 20upx;
			}
		}
	}
</style>
