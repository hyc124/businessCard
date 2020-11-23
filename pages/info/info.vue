<template>
	<view class="container">
		<uni-nav-bar class="nav-bar" fixed>
			<view class="title" slot="default">{{cardInfo.username}}</view>
			<view slot="left">
				<view class="left-menu">
					<image src="../../static/svg/mgtx-slogan.svg" mode="widthFix"></image>
					<text>个人中心</text>
				</view>
			</view>
		</uni-nav-bar>
		<view class="card-area">
			<button open-type="getUserInfo" @getuserinfo="((e)=>getUserInfo(e,'card'))" v-if="!isAuth" class="get-user" style="height: 490upx;"></button>
			<card :info="cardInfo" :is-auth="auth"></card>
			<view class="action">
				<button type="default" v-if="isAuth" hover-class="hover" class="default" @click="shareShow = true">分享名片</button>
				<button type="default" v-else open-type="getUserInfo" hover-class="hover" class="default" @getuserinfo="((e)=>getUserInfo(e,'share'))">分享名片</button>
				<template v-if="isAuth">
					<button type="primary" open-type="getPhoneNumber" class="primary" v-if="!isChange" @getphonenumber="getPhoneNumber">交换手机号码</button>
					<button type="primary" class="primary" @click="changeTel" v-else>存入通讯录</button>
				</template>
				<button type="primary" open-type="getUserInfo" class="primary" v-else @getuserinfo="((e)=>getUserInfo(e,'tel'))">交换手机号码</button>
			</view>
			<view class="contact-box">
				<button v-if="!isAuth" open-type="getUserInfo" @getuserinfo="getUserInfo" class="get-user"></button>
				<view class="qr-code" @click="toCode">
					<image src="../../static/svg/mingpian.svg" mode="heightFix"></image>
				</view>
				<view class="scroll-box">
					<scroll-view scroll-x="true" class="scroll">
						<view class="contact-item">
							<view class="item" @click="handleInfoClick('mobile')">
								<view>
									<image src="../../static/svg/tel.svg" mode="widthFix"></image>
									<text>拨打电话</text>
								</view>
								<view class="num">{{cardInfo.mobile}}</view>
							</view>
							<view class="item" @click="handleInfoClick('wx_num')">
								<view>
									<image src="../../static/svg/wx.svg" mode="widthFix"></image>
									<text>复制微信号</text>
								</view>
								<view class="num">{{cardInfo.wx_num}}</view>
							</view>
							<view class="item" @click="handleInfoClick('email')">
								<view>
									<image src="../../static/svg/mail.svg" mode="widthFix"></image>
									<text>复制邮箱</text>
								</view>
								<view class="num">{{cardInfo.email}}</view>
							</view>
							<view class="item" @click="handleInfoClick('company_address')">
								<view>
									<image src="../../static/svg/addr1.svg" mode="widthFix"></image>
									<text>复制地址</text>
								</view>
								<view class="num">{{cardInfo.company_address}}</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<!-- 测试测试 -->
		<view>
			<map id="map" longitude="{{longitude}}" latitude="{{latitude}}" scale="14" controls="{{controls}}" bindcontroltap="controltap" markers="{{markers}}" bindmarkertap="markertap" polyline="{{polyline}}" circles="{{circles}}" bindregionchange="regionchange" show-location style="width: 100%; height: 350px;">
			</map>
		</view>
		<!-- 测试 -->
		<view class="intro">
			<view class="title">
				<image src="../../static/svg/intro.svg" mode="widthFix"></image>
				<text>我的个人简介</text>
			</view>
			<view class="content">
				{{cardInfo.introduce?cardInfo.introduce:"暂无简介"}}
			</view>
		</view>
		<view class="photo-box">
			<view class="title">
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
		<u-modal v-model="show" :show-title="false" :show-confirm-button="false" class="welcome-modal">
			<view class="modal-content">
				<u-avatar :src="avatar" class="avatar" size="112"></u-avatar>
				<view class="text">
					您好，欢迎进入我的名片，有什么可以帮到您的吗？如有疑问可以在此与我沟通。
				</view>
				<view class="flex flex-ju-around action">
					<u-button :custom-style="{borderColor:'#95CFFF',color:'#0082EF',width:'110px'}" @click="show= false">看看再说</u-button>
					<u-button v-if="isAuth" :custom-style="{width:'110px'}" type="primary" @click="toQycode">聊一聊</u-button>
					<u-button v-else open-type="getUserInfo" :custom-style="{width:'110px'}" type="primary" @getuserinfo="((e)=>getUserInfo(e,'code'))">聊一聊</u-button>
				</view>
			</view>
		</u-modal>
		<tips v-if="onOff" @onclose="onclose"></tips>
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
		<u-top-tips ref="uTips" z-index="999999" :navbar-height="66"></u-top-tips>
		<u-modal v-model="getTelShow" title="提示" content="为了更好保持联系,建议留下您的联系方式" :show-cancel-button="true">
			<u-button slot="confirm-button" :hair-line="false" :custom-style="{color:'#0082EF',border:'none',height:'50px','borderLeft':'1px solid #e8e8e8'}"
			 open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">确定</u-button>
		</u-modal>
		<view class="canvas-box" style='position: absolute; top: -9999rpx;'>
			<painter customStyle='position: absolute; left: -9999rpx;' :palette="palette" @imgOK="onGenerateSuccess" @imgErr="onGenerateError"
			 widthPixels="1000" />
		</view>
		<view class="chat">
			<view @click="toQycode" v-if="isAuth">
				<image src="../../static/svg/roobt.svg" mode="widthFix"></image>
				<view class="text">聊一聊</view>
			</view>
			<button v-else open-type="getUserInfo" @getuserinfo="((e)=>getUserInfo(e,'code'))"></button>
		</view>
		<view class="deposit-btn flex flex-al-center flex-jus-center" @click="onRetur">
			<image src="../../static/img/My-Card.png" mode="widthFix"></image>
			<view>一键存入名片夹</view>
		</view>
	</view>
</template>

<script>
	import card from "../../components/card/card";
	import tips from "../../components/tips/tips";
	export default {
		data() {
			return {
				role: "self",
				imageList: [],
				avatar: require("@/static/svg/roobt.svg"),
				shareShow: false,
				show: true,
				isChange: false,
				cardInfo: {},
				logoInfo: {},
				code: "",
				imagePath: "",
				palette: "",
				vistInfo: {},
				isPowerShow: false,
				id: "",
				isAuth: false,
				getTelShow: false,
				onOff: false,
				wx_code: '',
				num: 0,
				markers: [{
				  iconPath: "../../img/marker_red.png",
				  id: 0,
				  latitude: 40.002607,
				  longitude: 116.487847,
				  width: 35,
				  height: 45
				}],
			}	
		},
		components: {
			card,
			tips
		},
		onLoad(option) {
			this.id = option.scene;
			this.login();
			this.checkAuth();
		},
		methods: {
			test(){

			},
			onclose() {
				this.onOff = false
			},
			onRetur() {
				this.onOff = true
			},
			login() {
				let that = this;
				let {
					environment
				} = getApp().globalData.sysInfo;
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						that.wx_code = loginRes.code;
						that.num++
						that.lookCard();
					}
				});
				if (environment && environment == "wxwork") {
					console.log(1111111111111, "测试")
					wx.qy.login({
						success: function(res) {
							console.log(res, "小小测试一波")
							that.code = res.code;
							that.num++
							that.lookCard();
						}
					})
				} else {
					that.num++
					that.lookCard();
				}
			},
			lookCard() {
				if (this.num < 2) return false
				let that = this;
				console.log('进入函数', {
					vcard_id: that.id,
					code: that.code,
					wx_code: that.wx_code
				})
				that.$u.api.lookCard({
					vcard_id: that.id,
					code: that.code,
					wx_code: that.wx_code
				}).then(res => {
					console.log(res, "测试")
					uni.setStorageSync('token', res.data.token);
					if (res.data.type == 1) {
						this.getInfos()
					} else {
						that.logoInfo = res.data;
						that.$store.commit('SetCardInfo', res.data.vcard);
						that.vistInfo = res.data;
						that.cardInfo = res.data.vcard;
						console.log(that.cardInfo)
						that.imageList = res.data.vcard.altas.map(item => item.altas_path);
						if (res.data && res.data.vcard && res.data.vcard.is_visited) {
							that.isChange = true;
						}
					}
				}).catch(res => {
					console.log(res, '失败了')
				})
			},
			async getInfos() {
				const {
					data
				} = await this.$u.api.cardInfo();
				this.$store.commit('SetCardInfo', data);
				this.$store.commit('SetCustomerId', this.id);
				uni.switchTab({
					url: '/pages/card/card'
				});
			},
			async loginQy(code) {
				const {
					data
				} = await this.$u.api.login({
					code: code
				});
				uni.setStorageSync('token', data.token);
				this.getInfo();
			},
			async getInfo() {
				let id = this.vistInfo.vcard.id;
				let customerId = this.vistInfo.customer.id;
				const {
					data
				} = await this.$u.api.cardInfo({
					id: id,
					customer_id: customerId
				});
				this.$store.commit('SetCardInfo', data);
				this.cardInfo = data;
			},
			handleMycenter() {
				uni.navigateTo({
					url: "/pages/myCenter/index/index"
				})
			},
			checkAuth() {
				let that = this;
				uni.getSetting({
					success(res) {
						if (!res.authSetting['scope.userInfo']) {
							that.isAuth = false;
						} else {
							that.isAuth = true;
						}
					}
				})
			},
			handleInfoClick(type) {
				let that = this;
				if (that.role == "self") {
					if (type == "mobile") {
						if (that.cardInfo[type]) {
							uni.makePhoneCall({
								phoneNumber: that.cardInfo[type] //仅为示例
							});
						} else {
							uni.showToast({
								title: '暂无电话号码',
								duration: 2000,
								icon: "none"
							});
						}
						return false;
					}
					uni.setClipboardData({
						data: that.cardInfo[type],
						success: function() {
							uni.showToast({
								title: '复制成功',
								duration: 2000
							});
						}
					});
				}

			},

			handlePreviewImg(index) {
				uni.previewImage({
					urls: this.imageList,
					current: index,
					indicator: "number"
				})
			},
			changeTel() {
				let sysInfo = getApp().globalData.sysInfo;
				let that = this;
				//#ifdef MP-WEIXIN
				if (this.isChange) {
					uni.addPhoneContact({
						firstName: this.cardInfo.username,
						mobilePhoneNumber: this.cardInfo.mobile,
						title: this.cardInfo.position,
						workFaxNumber: this.cardInfo.fax,
						workPhoneNumber: this.cardInfo.telephone,
						email: this.cardInfo.email,
						addressPostalCode: this.cardInfo.zip_code,
						organization: this.cardInfo.company_name,
						weChatNumber: this.cardInfo.wx_num,
						success: function() {
							that.isChange = false;
							that.$refs.uTips.show({
								title: '添加成功',
								type: 'success',
								duration: '2300'
							})
						},
						fail: function() {
							that.$refs.uTips.show({
								title: '添加失败',
								type: 'error',
								duration: '2300'
							})
						}
					})
				}
				//#endif
			},
			getPhoneNumber(e) {
				let that = this;
				if (e.detail.errMsg == "getPhoneNumber:ok") {
					uni.login({
						provider: "weixin",
						success(res) {
							that.$u.api.changeTel({
								visit_log_id: that.logoInfo.visit_log_id,
								encrypted_data: e.detail.encryptedData,
								iv: e.detail.iv,
								customer_id: that.logoInfo.customer.id,
								openid: that.logoInfo.customer.openid,
								code: res.code
							}).then(res => {
								if (res.code) {
									that.isChange = true;
									that.getInfo();
									that.$refs.uTips.show({
										title: '获取成功',
										type: 'success',
										duration: '2300'
									})

								} else {
									that.$refs.uTips.show({
										title: '获取失败',
										type: 'error',
										duration: '2300'
									})
								}
							})
						}
					})
				}
			},
			getUserInfo(e, type) {
				const data = e.detail;
				let that = this;
				if (e.detail.errMsg == "getUserInfo:ok") {
					this.isAuth = true;
					uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							that.$u.api.auth({
								code: loginRes.code,
								encrypted_data: data.encryptedData,
								iv: data.iv,
								raw_data: data.rawData,
								signature: data.signature
							})
						}
					});
					if (type == "tel") {
						this.getTelShow = true;
					}
					if (type == "code") {
						uni.navigateTo({
							url: "/pages/qycode/qycode"
						})
					}
					if (type == "share") {
						this.shareShow = true;
					}
					this.show = false;
				}
			},
			toCode() {
				uni.navigateTo({
					url: "/pages/code/code"
				})
			},
			toQycode() {
				uni.navigateTo({
					url: "/pages/qycode/qycode"
				})
			},
			toPoster() {
				uni.navigateTo({
					url: "/pages/poster/poster"
				})
			},
			onShareAppMessage(res) {
				let id = this.cardInfo.id;
				let userName = this.cardInfo.username;
				let position = this.cardInfo.position;
				let companyName = this.cardInfo.company_name;
				let title = `你好，我是${companyName}${position}的${userName},这是我的电子名片，望惠存。谢谢！`;
				let image = this.cardInfo.posters_share ? this.cardInfo.posters_share : "";
				return {
					title: title,
					path: '/pages/info/info?id=' + id,
					imageUrl: image
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20px 0 0;
		font-size: 14px;
		line-height: 24px;
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

		.get-user {
			position: absolute;
			background: none;
			height: 100%;
			width: 100%;
			left: 0;
			top: 0;
			z-index: 10;

			&::after {
				display: none;
			}
		}

		.nav-bar {
			background-color: $uni-bg-color;
			position: relative;
			top: -40upx;
			z-index: 99999;

			/deep/.uni-navbar__content {
				width: 100%;
				padding-top: 46upx;
				border-bottom: 0;
			}

			/deep/.uni-navbar__header-container {
				justify-content: center;
			}

			/deep/.uni-navbar__header {
				align-items: center;
			}

			.left-menu {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 24upx;
				width: 184upx;
				height: 60upx;
				position: relative;

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
					width: 50upx;
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
					font-weight: bolder;
					margin-left: 16upx;
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

				view {
					text-indent: 40upx;
				}
			}
		}

		.card-area {
			position: relative;
			background: linear-gradient(180deg, #EEF2F3 0%, #FFFFFF 100%);
			padding-bottom: 20upx;

			/deep/.u-drawer {
				margin-top: 135rpx;
			}

			.action {
				display: flex;
				margin-top: 10upx;
				justify-content: space-between;
				padding: 0 30upx;

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
						background: $uni-bg-color;
						border: 2upx solid #95CFFF;
						color: $primary-color;
						font-size: 30upx;

						&.hover {
							color: #95CFFF;
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

			.title {
				display: flex;
				align-items: center;
				padding: 0 30upx;
				padding-bottom: 20px;

				text {
					font-size: 30upx;
					margin-left: 16upx;
					font-weight: bolder;
				}

				image {
					width: 46upx;
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

		.welcome-modal {
			background: none;

			/deep/.u-mode-center-box {
				background: none;
			}

			/deep/.u-model {
				background: none;
				padding-top: 56upx;
			}
		}

		.modal-content {
			padding: 80upx 52upx 66upx;
			background-color: $uni-bg-color;
			border-radius: 16upx;

			.avatar {
				position: absolute;
				top: 0;
				box-shadow: 0px 2px 4px rgba(0, 130, 239, 0.16);
				border-radius: 56upx;
				width: 112upx;
				height: 112upx;
			}

			.text {
				background-color: #F5F7FA;
				padding: 22upx;
				font-size: 32upx;
				border-radius: 0 16upx 16upx 16upx;
				margin-bottom: 52upx;
			}
		}

		.chat {
			position: fixed;
			top: 50%;
			right: 0;
			transform: translateY(-50%);

			image {
				width: 92upx;
			}

			.text {
				width: 100upx;
				height: 40upx;
				line-height: 34upx;
				text-align: center;
				color: $primary-color;
				border: 2upx solid $primary-color;
				border-radius: 20upx;
				position: relative;
				top: -20upx;
				background-color: $uni-bg-color;
				font-size: 20upx;
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
	}
</style>
