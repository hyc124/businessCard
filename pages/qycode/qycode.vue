<template>
	<view class="qy-code">
		<view class="code-box u-skeleton u-skeleton-fillet" v-if="loading">
			<view class="til u-skeleton-fillet">请加我的企业微信</view>
			<view class="code u-skeleton-fillet">
				<image :src="qrCode?qrCode:'../../static/img/defaultQr.png'" mode="widthFix"></image>
			</view>
			<view class="wx-bg">
				<image src="../../static/svg/wx-bg.svg" mode="widthFix"></image>
			</view>
			<view class="info">
				<view class="name">
					{{name}}
				</view>
				<view>
					{{position}}
				</view>
			</view>
		</view>
		<view class="img-box  u-skeleton u-skeleton-fillet" v-else @click="preview">
			<image :src="imagePath" mode="widthFix" style="width: 100%;height: 800upx;"></image>
		</view>
		<view class="action" @click="saveImg">
			<image src="../../static/svg/save.svg" mode="widthFix"></image>
			<view class="grid-text">保存到相册并分享</view>
		</view>
		<view class="canvas-box" style="position: absolute; top: -9999rpx;">
			<painter customStyle='position: absolute; left: -9999rpx;' :palette="palette" @imgOK="onGenerateSuccess" @imgErr="onGenerateError"
			 widthPixels="1000" />
		</view>
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
	</view>
</template>

<script>
	import cardData from './card.js';
	export default {
		data() {
			return {
				qrCode: "",
				name: "",
				position: "",
				palette: "",
				imagePath: "",
				loading: true,
				formData: {}
			}
		},
		created() {
			if (this.customerId != '') {
				this.getUserInfo(this.customerId)
			} else {
				this.formData = this.cardInfo
				this.callback()
			}

		},
		computed: {
			cardInfo() {
				return this.$store.state.cardInfo;
			},
			customerId() {
				return this.$store.state.customerId;
			}
		},
		methods: {
			callback(){
				let isCreatQy = this.$store.state.isCreatQy;
				if (this.formData.posters_qr_code == "") {
					this.initData();
				} else {
					if (isCreatQy) {
						this.initData();
						return false;
					};
					this.imagePath = this.formData.posters_qr_code;
					this.loading = false;
				}
			},
			initData() {
				this.qrCode = this.formData.qr_code;
				this.name = this.formData.username;
				this.position = this.formData.position;
				if (this.formData.position && this.formData.main_department) {
					this.formData.positionInfo = `${this.formData.position}/${this.formData.main_department}`
				} else if (this.formData.main_department) {
					this.formData.positionInfo = this.formData.main_department;
				} else {
					this.formData.positionInfo = this.formData.position;
				}
				uni.showLoading({
					title: "拼命生成中...",
					mask: true,
				});
				this.palette = new cardData(this.formData).palette();
			},
			onGenerateSuccess(res) {
				console.log(res);
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
						id: that.formData.id,
						type: 3
					},
					success(res) {
						that.loading = false;
						uni.hideLoading();
						try {
							console.log(res)
							if (typeof(res.data) == "string") {
								res.data = JSON.parse(res.data);
							}
							that.imagePath = res.data.data.url;
							that.$store.commit("SetIsCreatQy", false);
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
				console.log(res);
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
							url: that.imagePath,
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
											console.log("settingdata", settingdata)
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
			},
			async getUserInfo(id) {
				const {
					data
				} = await this.$u.api.cardInfo({
					id: id
				});
				this.formData = data;
				this.callback()
			},
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: $bg-color;
	}

	.qy-code {
		padding: 72upx;

		.img-box {
			height: 796upx;
			background-color: $primary-color;
			color: $uni-bg-color;
			border-radius: 50rpx;
			margin-bottom: 64upx;
			position: relative;
			box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
			overflow: hidden;
		}

		.code-box {
			background-color: $primary-color;
			color: $uni-bg-color;
			border-radius: 50rpx;
			padding: 68upx 80upx;
			margin-bottom: 64upx;
			position: relative;
			box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

			.til {
				font-size: 50upx;
				text-align: center;
			}

			.wx-bg {
				position: absolute;
				text-align: center;
				top: 250upx;
				z-index: 0;
				left: 50%;
				transform: translateX(-50%);

				image {
					width: 516upx;
				}
			}

			.code {
				height: 354upx;
				width: 354upx;
				border-radius: 4px;
				overflow: hidden;
				margin: 0 auto;
				margin-top: 100upx;
				background-color: $bg-color;
				z-index: 2;
				position: relative;

				image {
					width: 100%;
				}
			}

			.info {
				margin: 0 auto;
				margin-top: 84upx;
				text-align: right;
				width: 354upx;

				.name {
					font-size: 36upx;
				}
			}
		}

		.action {
			text-align: center;
			color: #ABAAAF;

			image {
				width: 52upx;
				display: block;
				margin: 0 auto;
				margin-bottom: 16upx;
			}
		}
	}
</style>
