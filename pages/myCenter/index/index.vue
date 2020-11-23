<template>
	<view class="my-center">
		<view class="head">
			<view class="flex info">
				<view class="avater" @click="changeAvatar">
					<u-avatar :src="cardInfo.avatar" mode="circle" bg-color="#F0F2F5"></u-avatar>
				</view>
				<view>{{cardInfo.username}}</view>
			</view>
			<view class="flex stati">
				<view class="tap" @click="handleNavigateTo('record',0)">
					<view class="sub-title">今日访问</view>
					<view>{{today.people}}人/{{today.times}}次</view>
				</view>
				<view class="tap" @click="handleNavigateTo('record',1)">
					<view class="sub-title">历史访问</view>
					<view>{{history.people}}人/{{history.times}}次</view>
				</view>
			</view>
		</view>
		<view class="flex action">
			<view class="item" @click="handleNavigateTo('mycard')">
				<image src="../../../static/svg/mycenter/record.svg" mode="widthFix"></image>
				<view>我的名片夹</view>
			</view>
			<view class="item" @click="handleChooseImg(1)">
				<image src="../../../static/svg/mycenter/camera.svg" mode="widthFix"></image>
				<view>拍名片</view>
			</view>
			<view class="item" @click="handleNavigateTo('edit')">
				<image src="../../../static/svg/mycenter/edit.svg" mode="widthFix"></image>
				<view>编辑名片</view>
			</view>
			<view class="item" @click="handleUpdate">
				<image src="../../../static/svg/mycenter/update.svg" mode="widthFix"></image>
				<view>一键更新</view>
			</view>
		</view>
		<view class="card">
			<view class="title">我的名片</view>
			<card :info="cardInfo" :isMyCard="true"></card>
		</view>
		<view class="photo-box">
			<view class="title">我的图册</view>
			<view class="flex flex-al-center flex-jus-center add" @click="handleChooseImg(2)">
				<image src="../../../static/svg/mycenter/add.svg" mode="widthFix" style="width: 36upx;"></image>
				<view>点击此处添加图片</view>
			</view>
			<view class="img-box">
				<view class="img" v-for="(item,index) in imageList" :key="index" @click="handlePreviewImg(index)" @longtap="handlerLongtap(index)">
					<u-image :src="item" mode="widthFix" :lazy-load="true">
						<u-loading size="44" mode="flower" slot="loading"></u-loading>
					</u-image>
				</view>
			</view>
		</view>
		<u-mask :show="onOff" @click="onOff = false">
			<view class="photograph-box" @tap.stop>
				<image src="../../../static/svg/xiaoren.svg" mode="widthFix"></image>
				<view class="in-centen">
					拍客户名片，名片直接存入您的名片夹。拍自己的名片，会覆盖原有的自己名片，请谨慎操作。
				</view>
				<view class="btn-box flex">
					<view class="btn-left" @click="onCustomer(1)">
						拍我的名片
					</view>
					<view class="btn-right" @click="onCustomer(2)">
						拍客户名片
					</view>
				</view>
			</view>
		</u-mask>
		<u-modal v-model="showDilog" @confirm="confirm" border-radius="40" :async-close="true" confirm-text="确认更新"
		 :show-cancel-button="true" :cancel-style="{borderRight:'1px solid #DCDFE6'}">
			<view class="slot-content">
				一键更新名片 ，将获取企业微信通讯录中我的个人资料，获取成功后将覆盖我的电子名片信息
			</view>
		</u-modal>
		<u-modal v-model="remind" border-radius="40" @confirm="onGocard" @cancel="remind = false" :show-title="false" content="识别失败，请保证名片拍摄清晰"
		 cancel-color="#909399" cancel-text="我知道了" confirm-text="重新拍摄" :show-cancel-button="true"></u-modal>
		<u-top-tips ref="uTips" class="uTips" z-index="99999" :navbar-height="66"></u-top-tips>
		<u-modal ref="delImg" v-model="showDelImg" title="提示" content="是否删除该图片" :show-cancel-button="true" :async-close="true"
		 @cancel="longtap=false" @confirm="handleDelImg"></u-modal>
		<view class="canvas-box" style="position: absolute; top: -9999rpx;">
			<painter customStyle='position: absolute; left: -9999rpx;' :palette="palette" @imgOK="onGenerateSuccess" @imgErr="onGenerateError"
			 widthPixels="1000" />
		</view>
	</view>
</template>

<script>
	import card from "../../../components/card/card.vue";
	const qiniuUploader = require("../../../components/qiniu-upload/qiniuUploader");
	import shareCard from "../../../static/js/shareCardJson.js";
	import {
		OCRCard
	} from "../../../static/js/public.js";
	export default {
		data() {
			return {
				showDilog: false,
				files: [],
				today: {
					people: 0,
					times: 0
				},
				history: {
					people: 0,
					times: 0
				},
				longtap: false,
				showDelImg: false,
				imgIndex: 0,
				palette: "",
				onOff: false,
				remind: false
			};
		},
		components: {
			card
		},
		created() {
			this.getCount();
		},
		computed: {
			cardInfo() {
				return this.$store.state.cardInfo;
			},
			imageList() {
				return this.cardInfo.altas ? this.cardInfo.altas.map(item => item.altas_path) : [];
			}
		},
		methods: {
			async getCount() {
				const {
					data
				} = await this.$u.api.count({
					id: this.cardInfo.id
				});
				this.today.people = data?.today_customers;
				this.today.times = data.today_times;
				this.history.people = data.total_customers;
				this.history.times = data.total_times;
			},
			onGocard() {
				if (this.style == 1) {
					OCRCard(this.cardInfo.id, 1, 0, this.callBack);
				} else {
					OCRCard('', 1, 1, this.callBack, 1);
				}
			},
			onCustomer(statu) {
				this.style = statu
				if (statu == 1) {
					OCRCard(this.cardInfo.id, 1, 0, this.callBack);
				} else {
					OCRCard('', 1, 1, this.callBack, 1);
				}
				this.onOff = false
			},
			handlePreviewImg(index) {
				if (!this.longtap)
					uni.previewImage({
						urls: this.imageList,
						current: index
					})
			},
			showMsg(type, msg) {
				this.$refs.uTips.show({
					title: msg,
					type: type,
					duration: '1000'
				})
			},
			callBack(stuty) {
				this.remind = stuty
			},
			handleChooseImg(sourceType) {
				if (sourceType == 1) {
					this.onOff = true
				} else {
					let that = this;
					let id = that.cardInfo.id ? that.cardInfo.id : "";
					let baseUrl = uni.baseUrl;
					uni.chooseImage({
						count: 4,
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册选择
						success: function(res) {
							that.files = res.tempFilePaths;
							uni.showLoading({
								title: '上传中...'
							})
							for (var i = 0; i < that.files.length; i++) {
								let file = that.files[i];
								that.$u.api.qiniuToken().then(res => {
									const {
										data: {
											key,
											token,
											url,
											type
										}
									} = res;
									if (type == 1) {
										qiniuUploader.upload(file, (res) => {
											that.$u.api.photo({
												path: res.imageURL,
												name: res.hash
											}).then(res => {
												uni.hideLoading();
												if (res.code) {
													that.showMsg("success", res.msg);
													that.$store.dispatch('GetCardInfo');
												} else {
													that.showMsg("error", res.msg);
												}
											})
										}, (error) => {
											that.showMsg("error", '上传失败')
										}, {
											region: "SCN",
											domain: url, // // bucket 域名，下载资源时用到。如果设置，会在 success callback 的 res 参数加上可以直接使用的 ImageURL 字段。否则需要自己拼接
											key: key, // [非必须]自定义文件 key。如果不设置，默认为使用微信小程序 API 的临时文件名
											// 以下方法三选一即可，优先级为：uptoken > uptokenURL > uptokenFunc
											uptoken: token
										});
									} else {
										uni.uploadFile({
											url: baseUrl + "/user_altas/add",
											filePath: file,
											name: "img",
											header: {
												token: uni.getStorageSync("token")
											},
											success(res) {
												try {
													if (typeof(res.data) == "string") {
														res.data = JSON.parse(res.data);
													}
													uni.hideLoading();
													if (res.data.code) {
														that.showMsg("success", res.data.msg)
														that.$store.dispatch("GetCardInfo");
													} else {
														that.showMsg("error", res.msg);
													};
												} catch (e) {
													uni.hideLoading();
													that.showMsg("error", '上传失败');
												}
											},
											fail() {
												uni.hideLoading();
												that.showMsg("error", '上传失败');
											}
										});
									}
								})
							}
						}
					});
				}
			},
			changeAvatar() {
				let that = this;
				let baseUrl = uni.baseUrl;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ["album", "camera"], //从相册选择
					success: function(res) {
						uni.showLoading({
							title: '上传中...'
						})
						let avatar = res.tempFilePaths;
						for (var i = 0; i < avatar.length; i++) {
							let file = avatar[i];
							that.$u.api.qiniuToken().then(res => {
								const {
									data: {
										key,
										token,
										url,
										type
									}
								} = res;
								if (type == 1) {
									qiniuUploader.upload(file, (res) => {
										that.$u.api.avatar({
											url: res.imageURL
										}).then(res => {
											uni.hideLoading();
											if (res.code) {
												that.showMsg("success", res.msg);
												that.$store.dispatch('GetCardInfo');
												this.$store.commit("SetIsCreatPoster", true);
											} else {
												that.showMsg("error", res.msg);
											}
											that.palette = new shareCard(this.cardInfo).palette();
											that.$store.commit("SetIsCreat", true);
										})
									}, (error) => {
										that.showMsg("error", '上传失败')
									}, {
										region: "SCN",
										domain: url, // // bucket 域名，下载资源时用到。如果设置，会在 success callback 的 res 参数加上可以直接使用的 ImageURL 字段。否则需要自己拼接
										key: key, // [非必须]自定义文件 key。如果不设置，默认为使用微信小程序 API 的临时文件名
										// 以下方法三选一即可，优先级为：uptoken > uptokenURL > uptokenFunc
										uptoken: token
									});
								} else {
									uni.uploadFile({
										url: baseUrl + "/user/avatar",
										filePath: file,
										name: "img",
										header: {
											token: uni.getStorageSync("token")
										},
										success(res) {
											try {
												if (typeof(res.data) == "string") {
													res.data = JSON.parse(res.data);
												}
												uni.hideLoading();
												if (res.data.code) {
													that.showMsg("success", res.data.msg)
													that.$store.dispatch("GetCardInfo");
													that.$store.commit("SetIsCreatPoster", true);
													that.palette = new shareCard(that.cardInfo).palette();
													that.$store.commit("SetIsCreat", true);
												} else {
													that.showMsg("error", res.data.msg);
												};
											} catch (e) {
												uni.hideLoading();
												that.showMsg("error", '上传失败');
											}
										},
										fail() {
											uni.hideLoading();
											that.showMsg("error", '上传失败');
										}
									});
								}
							})
						}
					}
				});
			},
			handleNavigateTo(url, type) {
				if (url == 'mycard') {
					uni.switchTab({
						url: '/pages/cardholder/cardholder'
					});
				} else if (url == 'record') {
					uni.navigateTo({
						url: `/pages/myCenter/${url}/${url}?type=${type}`
					})
				} else {
					uni.navigateTo({
						url: `/pages/myCenter/${url}/${url}?type=4&state=0`
					})
				}
			},
			handleUpdate() {
				this.showDilog = true;
			},
			handlerLongtap(index) {
				console.log(index, 111);
				this.longtap = true;
				this.imgIndex = index;
				this.showDelImg = true;
			},
			async handleDelImg() {
				const id = this.cardInfo.altas[this.imgIndex].id;
				const {
					code,
					msg
				} = await this.$u.api.delPhoto({
					id: id
				});
				if (code) {
					this.showMsg("success", msg);
					this.longtap = false;
					this.showDelImg = false;
					this.$store.dispatch("GetCardInfo");
				} else {
					this.showMsg("error", msg);
					this.$refs.delImg.clearLoading();
				}
			},
			async confirm() {
				const {
					code,
					msg
				} = await this.$u.api.creadCard({
					id: this.cardInfo.id,
					type: "1"
				});
				if (code) {
					this.showDilog = false;
					this.showMsg("success", msg);
					this.$store.dispatch("GetCardInfo");
				} else {
					this.showMsg("error", msg)
				}
			},
			onGenerateSuccess(res) {
				let baseUrl = uni.baseUrl;
				uni.uploadFile({
					url: baseUrl + "/vcard/upload",
					filePath: res.detail.path,
					name: "img",
					header: {
						token: uni.getStorageSync("token")
					},
					formData: {
						id: this.cardInfo.id,
						type: 2
					},
					success(res) {
						console.log(res);
					},
					fail() {
						uni.hideLoading();
						that.showMsg("error", '上传失败');
					}
				});
			},
			onGenerateError(res) {
				console.log(res);
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: $bg-color;
	}

	.my-center {
		position: relative;

		.head {
			background-color: $uni-bg-color;
			box-shadow: 0px 3px 6px rgba(125, 125, 125, 0.1);
			margin: 30upx;
			box-sizing: border-box;
			border-radius: 8upx;
			padding: 36upx 48upx;
			padding-right: 0;

			.info {
				align-items: center;

				.avater {
					width: 96upx;
					height: 96upx;
					border-radius: 50%;
					overflow: hidden;
					margin-right: 20upx;

					image {
						width: 100%;
						background: #F0F2F5;
					}
				}
			}

			.stati {
				margin-top: 40upx;

				view {
					flex: 1;

					.sub-title {
						font-size: 22upx;
						color: #909399;
						margin-bottom: 8upx;

					}
				}
			}
		}

		.action {
			text-align: center;
			justify-content: space-around;
			font-size: 28upx;
			color: #303133;
			background-color: $uni-bg-color;
			padding: 38upx 0 34upx;
			margin: 0 30upx;
			border-radius: 4px;
			box-shadow: 0px 3px 6px rgba(125, 125, 125, 0.1);

			image {
				width: 60upx;
			}

			.item {
				cursor: pointer;

				&:active {
					opacity: 0.6;
				}
                image{
					width: 68upx;
					height: 68upx;
				}
				view {
					margin-top: 16upx;
				}
			}
		}

		.card {
			margin-top: 28upx;
			background-color: $bg-color;
		}

		.title {
			padding: 20upx 30upx 0;
		}

		.photo-box {
			.add {
				background-color: $bg-color;
				height: 104upx;
				background-color: $uni-bg-color;
				border: 1px dashed #DBDBDB;
				margin: 30upx;
				font-size: 32upx;
				color: #666666;

				&:active {
					opacity: 0.6;
				}

				image {
					margin-right: 4upx;
				}
			}

			.img-box {
				padding: 0 30upx;

				.img {
					margin-bottom: 20upx;
					border-radius: 8upx;
					overflow: hidden;
				}

				image {
					width: 100%;
				}
			}
		}

		.photograph-box {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 999;
			height: 500upx;
			width: 662upx;
			padding: 84upx 54upx 66upx;
			background-color: #ffffff;
			border-radius: 8upx;

			image {
				width: 112upx;
				height: 112upx;
				border-radius: 50%;
				position: absolute;
				left: 54upx;
				top: -56upx;
				background-color: #ffffff;
				box-shadow: 0 4upx 8upx rgba(0, 130, 239, 0.16);
			}

			.in-centen {
				padding: 22upx;
				background-color: #F5F7FA;
				font-size: 32upx;
				margin-bottom: 56upx;
			}

			.btn-box {
				height: 88upx;
				justify-content: space-between;

				.btn-left {
					line-height: 86upx;
					border: 2upx solid #95CFFF;
					text-align: center;
					color: #0082EF;
					border-radius: 8upx;
					width: 260upx;
				}

				.btn-right {
					line-height: 86upx;
					text-align: center;
					background-color: #0082EF;
					color: #ffffff;
					border-radius: 8upx;
					width: 260upx;
				}
			}
		}

		.slot-content {
			font-size: 28rpx;
			color: $u-content-color;
			padding: 30upx 50upx;
			text-align: center;
		}
	}
</style>
