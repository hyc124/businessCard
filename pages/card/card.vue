<template>
	<view class="container">
		<u-navbar :is-back="false" :title="customerId==''?'我的名片':'名片详情'" title-size="28" class="nav-bar">
			<view slot="right" class="menu" @click="handleMycenter">
				<view class="left-menu">
					<view class="avatar">
						<u-avatar :src="cardInfo.avatar" mode="circle" bg-color="#F0F2F5" size="48" class="avatar-img"></u-avatar>
					</view>
					<text>个人中心</text>
				</view>
			</view>
		</u-navbar>
		<u-top-tips ref="uTips" class="uTips" navbar-height="66px" z-index="10000"></u-top-tips>
		<view class="card-area">
			<card :info='formData' :onOff="true" :code="true"></card>
			<view class="action">
				<button type="default" open-type="share" hover-class="hover" class="default">分享名片</button>
				<button type="primary" class="primary" @click="toPoster">名片海报</button>
			</view>
			<view class="contact-box">
				<view class="qr-code" @click="toCode">
					<image src="../../static/svg/mingpian.svg" mode="heightFix"></image>
				</view>
				<view class="scroll-box">
					<scroll-view scroll-x="true" class="scroll">
						<view class="contact-item">
							<view class="item" @click="handleInfoClick('mobile')">
								<view>
									<image src="../../static/svg/tel.svg" mode="widthFix"></image>
									<text>{{customerId==''?'复制电话':'拨打电话'}}</text>
								</view>
								<view class="num">{{formData.mobile}}</view>
							</view>
							<view class="item" @click="handleInfoClick('wx_num')">
								<view>
									<image src="../../static/svg/wx.svg" mode="widthFix"></image>
									<text>复制微信号</text>
								</view>
								<view class="num">{{formData.wx_num}}</view>
							</view>
							<view class="item" @click="handleInfoClick('email')">
								<view>
									<image src="../../static/svg/mail.svg" mode="widthFix"></image>
									<text>复制邮箱</text>
								</view>
								<view class="num">{{formData.email}}</view>
							</view>
							<view class="item" @click="handleInfoClick('company_address')">
								<view>
									<image src="../../static/svg/addr1.svg" mode="widthFix"></image>
									<text>复制地址</text>
								</view>
								<view class="num">{{formData.company_address}}</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<view class="intro">
			<view class="title">
				<image src="../../static/svg/intro.svg" mode="widthFix"></image>
				<text>我的个人简介</text>
			</view>
			<view class="content">
				{{formData.introduce?formData.introduce:"暂无简介"}}
			</view>
		</view>
		<view class="photo-box" v-if="formData.type!=2&&formData.is_friends">
			<view class="title flex flex-al-center">
				<image src="../../static/svg/qy-img.svg" mode="widthFix"></image>
				<text>企业动态</text>
				<view style="flex: 1;"></view>
				<view class="text-right" @click="onGoFroend" v-if="list!=''">更多</view>
				<image class="title-img" @click="onGoFroend" src="../../static/svg/gengduo.svg" mode="widthFix"></image>
			</view>
			<view class="wechat-moments-box" v-if="list!=''">
				<template v-for="(item,index) in list">
					<friend :info="item" :key="index" @onImgSee="onImgSee"></friend>
				</template>
			</view>
			<view class="no-img" v-else>
				<image src="../../static/svg/no-img.svg" mode="widthFix"></image>
				<view>这里还是空空的~</view>
			</view>
		</view>
		<view class="photo-box">
			<view class="title title-top">
				<image src="../../static/svg/pic.svg" mode="widthFix"></image>
				<text>我的相册</text>
			</view>
			<view class="img-box">
				<template v-if="imageList.length > 0">
					<view class="img" v-for="(item,index) in imageList" :key="index" @click="handlePreviewImg(index)">
						<u-image :src="item" mode="widthFix" :lazy-load="true">
							<u-loading size="44" mode="flower" slot="loading"></u-loading>
						</u-image>
					</view>
				</template>
				<view class="no-img" v-else>
					<image src="../../static/svg/no-img.svg" mode="widthFix"></image>
					<view>这里还是空空的~</view>
				</view>
			</view>
			<view style="padding: 20px 0;">
				<u-divider bg-color="#F5F5F5">到底线了</u-divider>
			</view>
		</view>
		<view class="fixed-action" v-if="formData.is_exists||customerId==''">
			<view @click="handleTakePhoto">
				<image src="../../static/svg/camera.svg" mode="widthFix"></image>
			</view>
			<view @click="editCard">
				<image src="../../static/svg/edit.svg" mode="widthFix"></image>
			</view>
		</view>
		<choice @onChoice="onChoice" :show="show"></choice>
		<u-popup v-model="shareShow" mode="bottom" class="popup">
			<view class="share">
				<view>
					<button open-type="share">
						<image src="../../static/svg/wx-logo.svg" mode="widthFix"></image>
						<view>微信好友</view>
					</button>
				</view>
				<view @click="toPoster">
					<image src="../../static/svg/poster.svg" mode="widthFix"></image>
					<view>名片海报</view>
				</view>
			</view>
			<button type="default" @click="shareShow=false">取消</button>
		</u-popup>
		<u-modal v-model="modal.onOff" @confirm="onGocard(1)" @cancel="modal.onOff = false" :show-title="false" border-radius="40"
		 confirm-text="查看名片夹" confirm-color="#0082EF" cancel-color="#909399" cancel-text="我再看看" :show-cancel-button="true">
			<view class="slot-content">
				{{formData.username}}已经存入我的名片夹
				请在个人中心/我的名片夹查看
			</view>
		</u-modal>
		<u-modal v-model="remind" border-radius="40" @confirm="onGocard(2)" @cancel="remind = false" :show-title="false"
		 content="识别失败，请保证名片拍摄清晰" cancel-color="#909399" cancel-text="我知道了" confirm-text="重新拍摄" :show-cancel-button="true"></u-modal>
		<tab-bar v-show="customerId==''"></tab-bar>
		<view v-if="customerId!=''" class="deposit-btn flex flex-al-center flex-jus-center" @click="onRetur">
			<image src="../../static/img/My-Card.png" mode="widthFix"></image>
			<view v-if="formData.is_exists">
				查看名片夹
			</view>
			<view v-else>
				一键存入名片夹
			</view>
		</view>
	</view>
</template>

<script>
	import card from "../../components/card/card";
	import friend from "../../components/friend/friend";
	import choice from "../../components/choice/choice";
	import {
		OCRCard
	} from "../../static/js/public.js";
	let that = null;
	export default {
		data() {
			return {
				role: "self",
				shareShow: false,
				palette: "",
				imagePath: "",
				formData: {},
				imageList: [],
				Collection: '',
				modal: {
					onOff: false
				},
				remind: false,
				list: [],
				show: {
					onOff: false
				},
				seeImg: true,
				num: 1
			}
		},
		components: {
			card,
			friend,
			choice
		},
		// created() {
		// 	this.$store.dispatch("GetCardInfo");
		// },
		computed: {
			// 在vuex里拿到用户数据
			//
			cardInfo() {
				return this.$store.state.cardInfo;
			},
			customerId() {
				return this.$store.state.customerId;
			},
			getInfo() {
				return this.$store.state.info;
			}
		},
		methods: {
			onImgSee() {
				this.seeImg = false
			},
			onChoice(data) {
				if (data.num == 2) {
					this.getVcardCustomer(data.data)
				}
				this.show.onOff = false
			},
			// 企业动态更多按钮
			onGoFroend() {
				this.$store.commit('SetCustomerId', '')
				uni.switchTab({
					url: '/pages/friend/friend'
				});
			},
			// 查看名片夹按钮
			onGocard(num) {
				console.log(2123132)
				if (num == 1) {
					this.$store.commit('SetCustomerId', '')
					uni.switchTab({
						url: '/pages/cardholder/cardholder'
					});
				} else {
					OCRCard('', 1, 1, this.callBack, 1);
				}
			},
			// 返回名片夹页面
			onRetur() {
				console.log(465465465465)
				if (this.formData.is_exists) {
					this.$store.commit('SetCustomerId', this.num)
					// 跳转到名片夹页面
					uni.switchTab({
						url: '/pages/cardholder/cardholder'
					});
				} else {
					let _defaid = this.formData.default_group_id
					if (_defaid == 0 || _defaid == '') {
						this.show.onOff = true
					} else {
						// 加入名片夹
						this.getVcardCustomer()
					}
				}
			},
			callBack(stuty) {
				this.remind = stuty
			},
			// 个人中心跳转
			handleMycenter() {
				this.$store.commit('SetCustomerId', '')
				uni.navigateTo({
					url: "/pages/myCenter/index/index"
				})
			},
			handleInfoClick(type) {
				let that = this
				if (type == 'mobile' && this.customerId != '') {
					if (that.formData[type]) {
						uni.makePhoneCall({
							phoneNumber: that.formData[type] //仅为示例
						});
					}
				} else if (that.role == "self") {
					uni.setClipboardData({
						data: that.formData[type],
						success: function() {
							uni.showToast({
								title: '复制成功',
								duration: 2000
							});
						}
					});
				}
			},
			showMsg(type, msg) {
				that.$refs.uTips.show({
					title: msg,
					type: type,
					duration: '2300'
				})
			},
			handleTakePhoto() {
				OCRCard('', 1, 1, this.callBack, 1);
			},
			// 点击图片预览功能
			handlePreviewImg(index) {
				this.seeImg = false
				uni.previewImage({
					urls: this.imageList,
					current: index,
					indicator: "number"
				})
			},
			toCode() {
				uni.navigateTo({
					url: "/pages/code/code"
				})
			},
			// 右边编辑我的名片
			editCard() {
				if (this.customerId == '') {
					uni.navigateTo({
						url: "/pages/myCenter/edit/edit?type=4&state=0"
					})
				} else {
					uni.navigateTo({
						url: `/pages/myCenter/edit/edit?type=4&state=1&id=${this.customerId}`
					})
				}

			},
			toPoster() {
				uni.navigateTo({
					url: "/pages/poster/poster"
				})
			},
			onShareAppMessage(res) {
				let id = this.formData.id;
				let userName = this.formData.username;
				let position = this.formData.position;
				let companyName = this.formData.company_name;
				let title = `你好，我是${companyName}${position}的${userName},这是我的电子名片，望惠存。谢谢！`;
				let image = this.formData.posters_share ? this.formData.posters_share : "";
				return {
					title: title,
					path: '/pages/info/info?scene=' + id,
					imageUrl: image
				}
			},
			//  存入名片夹
			async getVcardCustomer(groupingData) {
				let _groupid = '',
					_is_default_group = 0
				if (groupingData != undefined) {
					_groupid = groupingData.group_id
					_is_default_group = groupingData.is_default_group
				} else {
					_groupid = this.formData.default_group_id
				}
				const {
					data,
					code
				} = await this.$u.api.vcardCustomer({
					id: this.formData.id,
					group_id: _groupid,
					is_default_group: _is_default_group
				});
				if (code == 1) {
					this.num = ''
					this.modal.onOff = true
					this.formData.is_exists = true
				}
			},
			async getUserInfo(id) {
				const {
					data
				} = await this.$u.api.cardInfo({
					id: id
				});
				this.formData = data;
				this.imageList = this.formData.altas ? this.formData.altas.map(item => item.altas_path) : [];
			},
			async getFriends() {
				const {
					data,
					code
				} = await this.$u.api.friends({
					page: 1,
					limit: 3
				});
				if (code == 1) {
					this.list = data.list
				}
			},
		},
		onShow() {
			if (this.seeImg) {
				this.num = 1
				if (this.customerId != '') {
					this.getUserInfo(this.customerId)
				} else {
					this.formData = this.cardInfo
					this.imageList = this.cardInfo.altas ? this.cardInfo.altas.map(item => item.altas_path) : [];
				}
				this.getFriends()
			} else {
				this.seeImg = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		font-size: 14px;
		// line-height: 24px;
		background-color: $uni-bg-color;
		position: relative;

		.no-img {
			image {
				width: 176upx !important;
			}

			text-align: center;
			color: #666;
			margin: 60upx 0;
		}

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

		.intro {
			background-color: $bg-color;
			padding: 48upx 30upx;

			.title {
				display: flex;
				align-items: center;

				text {
					font-size: 30upx;
					margin-left: 16upx;
					font-weight: bolder;
				}

				image {
					width: 46upx;
				}
			}

			.content {
				background: $uni-bg-color;
				padding: 40upx;
				margin-top: 24upx;
				border-radius: 0 16upx 16upx 16upx;
				color: #303133;
				white-space: pre-wrap;

				view {
					text-indent: 40upx;
				}
			}
		}

		.card-area {
			background: linear-gradient(180deg, #EEF2F3 0%, #FFFFFF 100%);
			padding-bottom: 20upx;

			/deep/.u-drawer {
				margin-top: 135rpx;
			}

			.action {
				display: flex;
				justify-content: space-between;
				padding: 10upx 30upx 0;

				button {
					width: 48%;
					margin: 0;

					&::after {
						display: none;
					}

					&.primary {
						background: $primary-color;
						border: 2upx solid $primary-color;
						height: 80upx;
						line-height: 75rpx;
						font-size: 30upx;
					}

					&.default {
						height: 80upx;
						line-height: 75rpx;
						background: none;
						border: 2upx solid $primary-color;
						color: $primary-color;
						font-size: 30upx;

						&.hover {
							color: $primary-color;
						}
					}
				}
			}

			.contact-box {
				position: relative;
				margin-top: 40upx;
				padding: 0 30upx;

				.qr-code {
					position: absolute;
					left: -13rpx;
					z-index: 2;
					top: -14rpx;
					z-index: 2;

					image {
						height: 144rpx;
						width: 104rpx;
					}
				}

				.scroll-box {
					height: 116upx;
					overflow: hidden;

					.scroll {
						width: 100%;
					}
				}

				.contact-item {
					display: flex;
					padding-left: 65rpx;
					padding-bottom: 35upx;

					image {
						width: 24upx;
					}

					.item {
						min-width: 256upx;
						margin-right: 16upx;
						border-radius: 10upx;
						padding: 12upx 20upx;
						border: 1px solid #F5F5F5;
						box-shadow: 0px 3px 6px rgba(125, 125, 125, 0.1);
						// height: 140upx;
						border: 1px solid #e8e8e8;
						font-size: 26upx;
						line-height: 40upx;
						flex-shrink: 0;
						max-height: 108upx;

						view:nth-child(1) {
							display: flex;
							align-items: center;
						}

						&:active {
							opacity: 0.6;
						}

						text {
							color: #999999;
							margin-left: 10upx;
							font-size: 22upx;
						}

						.num {
							flex-shrink: 0;
						}
					}
				}
			}
		}

		.fixed-action {
			position: fixed;
			top: 50%;
			right: 0;
			background: $uni-bg-color;
			box-shadow: 0px 3px 6px rgba(125, 125, 125, 0.1);
			border-radius: 36upx;
			padding: 10upx 0;

			view {
				padding: 26upx 20upx;

				&:nth-child(1) {
					border-bottom: 1px solid #EBEEF5;
				}
			}

			image {
				width: 32upx;
			}
		}

		.popup {
			.share {
				background-color: $uni-bg-color;
				display: flex;
				text-align: center;
				justify-content: space-around;
				padding: 56upx 0 60upx;

				image {
					width: 112upx;
				}

				button {
					&::after {
						display: none;
					}

					font-size: 27upx;
					line-height: 48upx;
				}
			}

			button {

				border-radius: 0;
				background-color: $uni-bg-color;
			}
		}

		.photo-box {
			background: $bg-color;
			padding: 1px;

			.title {
				display: flex;
				align-items: center;
				padding: 0 30upx;
				padding-bottom: 20upx;

				.text-right {
					color: #303133;
					font-size: 28upx;
					margin-right: 8upx;
				}

				.title-img {
					width: 28upx;
					height: 28upx;
				}

				text {
					font-size: 30upx;
					margin-left: 16upx;
					font-weight: bolder;
				}

				image {
					width: 46upx;
				}
			}

			.title-top {
				padding-top: 48upx;
			}

			.wechat-moments-box {
				background-color: #ffffff;
			}
		}

		.deposit-btn {
			height: 100upx;
			font-size: 24upx;
			color: #909399;
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			z-index: 999;
			background: #ffffff;

			view {
				font-size: 30upx;
				color: #303133;
			}

			image {
				margin-right: 8upx;
				width: 44upx;
				height: 38upx;
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
