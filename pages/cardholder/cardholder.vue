<template>
	<view class="cardholder">
		<u-navbar :is-back="false" back-text="返回" title="我的名片" title-size="28" class="nav-bar">
			<view slot="right" class="menu" @click="handleMycenter">
				<view class="left-menu">
					<view class="avatar">
						<u-avatar :src="cardInfo.avatar" mode="circle" bg-color="#F0F2F5" size="48" class="avatar-img"></u-avatar>
					</view>
					<text>个人中心</text>
				</view>
			</view>
		</u-navbar>
		<view class="subject" @click="functionList.onOff=false">
			<view class="search-box flex flex-al-center">
				<u-search class="search-input" placeholder="姓名/电话/公司/职务/地址" height="72" @clear="getDataList" @search="getDataList"
				 :show-action="false" v-model="keyword"></u-search>
				<image class="search-jia" src="../../static/svg/jia.svg" mode="widthFix" :class="functionList.onOff?'search-jia-too':''"
				 @click.stop="functionList.onOff=!functionList.onOff"></image>
				<view class="jia-bigbox" :class="functionList.onOff?'jia-box-too':''">
					<view class="jia-box">
						<view class="sanjiao"></view>
						<view class="in-jia flex flex-al-center" v-for="(el,index) in functionList.list" :key="index" @click="onClick(el.id)">
							<image class="in-jia-img" :src="el.img" mode="widthFix"></image>
							<view class="text">{{el.text}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="my-class flex flex-al-center" v-if="cardList!=''||keyword==''">
				<u-dropdown>
					<u-dropdown-item v-model="dropdownObj.value" :title="dropdownObj.title" @change="onDropdown" :options="dropdownObj.options"></u-dropdown-item>
				</u-dropdown>
			</view>
			<view class="business-card-box" v-if="cardList!=''">
				<u-swipe-action :index="index" :show="item.show" @click="onClickS" :disabled="businessNum==item.id" btn-width="100"
				 v-for="(item,index) in cardList" :key="item.id" :options="options" @open="open(index)">
					<view class="business-card" :class="businessNum==item.id?'business-card-s':''" @click="onOpen(item.id)" :key="item.id">
						<card :onOff="2" :info="item" @onSeeCard="onSeeCard"></card>
						<view class="cardset flex flex-al-center">
							<view class="modify flex flex-al-center flex-jus-center" @click="onSwitch(item.id)">
								<image class="cardset-img" src="../../static/svg/wenjian.svg" mode="widthFix"></image>
								更改分组
							</view>
							<view class="deposit flex flex-al-center flex-jus-center" @click="onDeposit(item)">
								<image class="cardset-img" src="../../static/svg/deposit.svg" mode="widthFix"></image>
								存入通讯录
							</view>
							<view class="delete flex flex-al-center flex-jus-center" @click="onDelete(item.id)">
								<image class="cardset-img" src="../../static/svg/dlt.svg" mode="widthFix"></image>
								删除名片
							</view>
						</view>
					</view>
				</u-swipe-action>
			</view>
		</view>
		<view v-if="cardList==''">
			<nodata>
				<view class="text-top">
					未搜索到该用户的名片/暂时没有客户的名片
				</view>
				<view class="text-bott flex flex-jus-center">
					去<view class="goto" @click="onGoto">企业名片库</view>中查查看吧
				</view>
			</nodata>
		</view>
		<!-- 选择弹窗 底部弹起 -->
		<u-popup v-model="popup.onOff" :closeable="true" :border-radius="32" mode="bottom" border-radius="14">
			<view class="popup-title flex flex-al-center">
				<image src="../../static/svg/filebox.svg" mode="widthFix"></image>移动至
			</view>
			<view v-for="item in dropdownObj.options" v-if="item.value!=0" class="popup-inbox" @click="onClassification(item.value)"
			 :key="item.value">{{item.label}}</view>
			<view class="bottText"></view>
		</u-popup>
		<u-modal v-model="remind" border-radius="40" @confirm="onGocard" @cancel="remind = false" :show-title="false" content="识别失败，请保证名片拍摄清晰"
		 cancel-color="#909399" cancel-text="我知道了" confirm-text="重新拍摄" :show-cancel-button="true"></u-modal>
		<!-- 确认弹窗 -->
		<u-modal v-model="model.onOff" @confirm="onModelConfirm" width="540" :show-cancel-button="true" :show-title="false"
		 :async-close="true" :mask-close-able="true" :content="model.content"></u-modal>
		<tab-bar></tab-bar>
	</view>
</template>

<script>
	import card from "../../components/card/card";
	import nodata from "../../components/nodata/nodata";
	import {
		OCRCard
	} from "../../static/js/public.js";
	export default {
		data() {
			return {
				popup: {
					onOff: false,
					id: ''
				},
				dropdownObj: {
					value: 0,
					title: '全部客户',
					options: [],
					obj: {}
				},
				id: '', //当前选中的id
				keyword: '', //搜索框内容
				businessNum: 0,
				// 功能列表
				functionList: {
					onOff: false,
					list: [{
						text: '拍客户名片',
						img: '../../static/svg/paizhao.svg',
						id: '1'
					}, {
						text: '创建名片',
						img: '../../static/svg/changjian.svg',
						id: '2'
					}, {
						text: '企业名片库',
						img: '../../static/svg/mingpianku.svg',
						id: '3'
					}, {
						text: '名片分组管理',
						img: '../../static/svg/fenzu.svg',
						id: '4'
					}]
				},
				// , {
				// 	text: '全部存入通讯录',
				// 	img: '../../static/svg/cunru.svg',
				// 	id: '5'
				// }
				// 确定弹窗对象
				model: {
					onOff: false,
					content: ''
				},
				cardList: [],
				remind: false,
				options: [{
						text: '',
						style: {
							backgroundColor: '#ffffff'
						}
					},
					{
						text: '',
						style: {
							backgroundColor: '#ffffff'
						}
					}
				],
				seletInfo: ''
			}
		},
		components: {
			card,
			nodata
		},
		computed: {
			// 在vuex里拿到用户数据
			cardInfo() {
				return this.$store.state.cardInfo;
			},
			customerId() {
				return this.$store.state.customerId;
			},
		},
		methods: {
			onDeposit(item) {
				this.seletInfo = item
				this.model = {
					onOff: true,
					content: `${item.username}的联系方式将存入您的手机通讯录中`,
					num: 2
				}
			},
			onDropdown(info) {
				this.functionList.onOff = false
				this.dropdownObj.title = this.dropdownObj.obj[info]
				this.getDataList()
			},
			onOpen(num) {
				this.businessNum = num
				this.functionList.onOff = false
			},
			onGocard() {
				OCRCard('', 1, 1, this.callBack, 1);
			},
			onSeeCard(id) {
				if (this.businessNum == id) {
					this.$store.commit('SetCustomerId', id)
					uni.switchTab({
						url: `/pages/card/card`
					});
				}
			},
			// 点击加号菜单里面的按钮 1 是派客户，2是创建名片 3是企业名牌库 4是分组管理 5是全部存入通讯录
			onClick(type) {
				if (type == '1') {
					OCRCard('', 1, 1, this.callBack, 1);
				} else if (type == '2') {
					uni.navigateTo({
						url: "/pages/myCenter/edit/edit?type=2&state=1"
					})
				} else if (type == '3') {
					uni.navigateTo({
						url: "/pages/company/company"
					})
				} else if (type == '4') {
					uni.navigateTo({
						url: "/pages/groupings/groupings"
					})
				}
				this.functionList.onOff = false
			},
			onClickS(index, to) {
				if (to == 0) {
					this.onSwitch(this.cardList[index].id)
				} else {
					this.onDelete(this.cardList[index].id)
				}
			},
			onGoto() {
				uni.navigateTo({
					url: "/pages/company/company"
				})
			},
			// 点击更换分组事件
			onSwitch(id) {
				this.popup = {
					onOff: true,
					id: id
				}
			},
			// 确定弹窗的 确定事件，在这里判断是什么调用打开了弹窗，然后调用相印的事件
			onModelConfirm() {
				this.model.onOff = false
				if (this.model.num == 1) {
					this.deleteCard()
				} else {
					let _item = this.seletInfo
					uni.addPhoneContact({
						firstName: _item.username,
						mobilePhoneNumber: _item.mobile,
						organization: _item.company_name,
						title: _item.position,
						success: function() {
							uni.showToast({
								title: "通讯录添加成功",
								icon: "none",
								duration: 1500,
							});
						},
						fail: function(res) {
							uni.showToast({
								title: "通讯录添加失败",
								icon: "none",
								duration: 1500,
							});
						}
					});
				}
			},
			open(index) {
				this.cardList[index].show = true;
				this.cardList.map((val, idx) => {
					if (index != idx) this.cardList[idx].show = false;
				})
			},
			// 点击名片分组
			onClassification(num) {
				this.setUserUpdate(num)
				this.popup.onOff = false
			},
			handleMycenter() {
				uni.navigateTo({
					url: "/pages/myCenter/index/index"
				})
			},
			// 点击删除按钮设置弹窗内容和获取选中的id
			onDelete(id) {
				this.id = id
				this.model = {
					onOff: true,
					content: '确认删除该名片',
					num: 1
				}
			},
			callBack(stuta) {
				this.remind = stuta
			},
			async setUserUpdate(id) {
				const {
					data,
					code
				} = await this.$u.api.vcardGroup({
					id: this.popup.id,
					group_id: id
				});
				if (code == 1) {
					uni.showToast({
						title: "更改分组成功",
						icon: "none",
						duration: 1500,
					});
				}
			},
			async getUserVcard() {
				const {
					data,
					code
				} = await this.$u.api.userVcard();
				if (code == 1) {
					this.dropdownObj.options = [{
						label: '全部客户',
						value: '0'
					}]
					this.dropdownObj.obj['0'] = '全部客户'
					for (let item of data) {
						this.dropdownObj.options.push({
							label: item.group_name,
							value: item.id,
						})
						this.dropdownObj.obj[item.id] = item.group_name
					}
				}
			},
			// 获取客户名片夹的列表数据
			async getDataList() {
				try {
					const {
						data,
						code
					} = await this.$u.api.cardCustomer({
						key_word: this.keyword.trim(),
						group_id: this.dropdownObj.value
					});
					data.forEach((item, index) => {
						item.show = false
					})
					if (code == 1) {
						this.businessNum = ''
						this.cardList = data
					}
				} catch (e) {
					this.show = true;
				}
			},
			// 删除名片函数
			async deleteCard() {
				let _this = this
				const {
					code
				} = await _this.$u.api.deleteCard({
					id: Number(_this.id)
				});
				if (code == 1) {
					uni.showToast({
						title: "删除成功",
						icon: "none",
						duration: 1500,
					});
					_this.getDataList()
				} else {
					uni.showToast({
						title: "删除失败",
						icon: "none",
						duration: 1500,
					});
				}
			}
		},

		onShow() {
			console.log('清理了数据')
			if (this.customerId == 1 && this.cardList != '') {
				this.$store.commit('SetCustomerId', '')
			} else {
				this.$store.commit('SetCustomerId', '')
				this.getDataList()
				this.getUserVcard()
			}
		},
		onHide() {
			this.functionList.onOff = false
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .u-btn-text {
		width: 70upx;
		height: 70upx;
		margin-top: 20upx;
		border-radius: 50%;
	}

	/deep/ .u-swipe-del:nth-child(odd) > .u-btn-text {
		background: url(../../static/img/deleteCard.png);
		background-size: 100% 100%;
	}

	/deep/ .u-swipe-del:nth-child(even) > .u-btn-text {
		background: url(../../static/img/groupingCard.png);
		background-size: 100% 100%;
	}

	/deep/ .u-dropdown__menu__item {
		justify-content: flex-start !important;
		padding-left: 30upx;
	}

	.cardholder {

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

		// 弹窗头部
		.popup-title {
			height: 102upx;
			font-size: 36upx;
			color: #909399;
			padding: 0 40upx;
			margin-top: 20upx;

			image {
				width: 32upx;
				height: 28upx;
				margin-right: 20upx;
			}
		}

		// 弹窗主体
		.popup-inbox {
			line-height: 96upx;
			text-align: center;
			color: #303133;
			font-size: 32upx;
			margin: 0 20upx;
			border-bottom: 1px solid #F5F5F5;
		}

		.bottText {
			height: 24upx;
		}

		.text-bott {
			width: 100%;
			margin-top: 20upx;
			color: #303133;

			.goto {
				color: #0082EF;
			}
		}

		.text-top {
			width: 100%;
			text-align: center;
			color: #303133;
		}

		// 主体部分css
		.subject {
			.search-box {
				position: relative;
				height: 136upx;
				background-color: #ffffff;
				box-sizing: border-box;
				padding: 32upx 40upx 32upx 30upx;

				.search-jia {
					width: 52upx;
					height: 52upx;
					margin-left: 40upx;
					transition: all .2s linear;
				}

				.search-jia-too {
					transform: rotate(90deg);
				}

				.jia-bigbox {
					height: 0upx;
					overflow: hidden;
					position: absolute;
					z-index: 999;
					right: 18upx;
					top: 120upx;
					width: 320upx;
					transition: all .2s;
					opacity: 0;

					.jia-box {
						margin-top: 8upx;
						box-shadow: 0 6upx 12upx rgba(00, 00, 00, 0.16);
						border-radius: 8upx;
						background-color: #ffffff;

						.sanjiao {
							background-color: #ffffff;
							width: 16upx;
							height: 16upx;
							position: absolute;
							top: 0upx;
							right: 30upx;
							transform: rotate(-135deg);
							box-shadow: 6upx 6upx 12upx rgba(00, 00, 00, 0.08);
						}

						.in-jia {
							width: 100%;
							height: 80upx;

							.text {
								border-bottom: 2upx solid #F0F2F5;
								font-size: 30upx;
								color: #333333;
								margin-left: 16upx;
								flex: 1;
								line-height: 78upx;
							}
						}

						.in-jia-img {
							width: 40upx;
							height: 40upx;
							margin-left: 28upx;
						}
					}
				}

				.jia-box-too {
					height: 400upx;
					opacity: 1;
				}

				.search-input {
					flex: 1;
				}
			}

			.my-class {
				height: 28upx;
				background-color: #F5F5F5;
				margin-top: 30upx;
			}

			.business-card-box {
				margin-top: 20upx;
				padding-bottom: 40upx;
				height: calc(100vh - 450upx);
				overflow-y: auto;

				.business-card {
					transition: all .3s;
					height: 160upx;
					overflow: hidden;

					.cardset {
						height: 34upx;
						line-height: 30upx;
						color: #333333;
						text-align: center;

						.modify {
							flex: 1;

							.cardset-img {
								width: 32upx;
								height: 32upx;
								margin-right: 10upx;
							}
						}

						.deposit {
							flex: 1;
							border-right: 2upx #DBDBDB solid;
							border-left: 2upx #DBDBDB solid;

							.cardset-img {
								width: 32upx;
								height: 32upx;
								margin-right: 10upx;
							}
						}

						.delete {
							flex: 1;

							.cardset-img {
								width: 32upx;
								height: 32upx;
								margin-right: 10upx;
							}
						}
					}
				}

				.business-card-s {
					height: 548upx;
				}
			}
		}
	}
</style>
