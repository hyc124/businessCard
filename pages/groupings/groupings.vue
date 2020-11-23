<template>
	<view class="groupings">
		<u-navbar :is-back="true" back-text="返回" title="名片夹分组管理" title-size="28" class="nav-bar">
		</u-navbar>
		<view class="subject">
			<view class="title-text">
				通过添加，编辑字段可对名片夹进行分组，便于管理不同的客户群体(<text>默认字段仅管理员可修改</text>)
			</view>
			<view class="centen-box">
				<view class="inbox flex flex-al-center">
					<view class="lefttext">
						默认分组功能
					</view>
					<view class="flex-col-bd"></view>
					<u-switch v-model="checked"></u-switch>
				</view>
				<view class="inbox border-none flex flex-al-center">
					<view class="lefttext" :class="!checked?'inboxs':''">
						默认分组
					</view>
					<view class="flex-col-bd"></view>
					<view class="flex flex-al-center" :class="!checked?'inboxs':''" @click="onDefault">
						<view class="centen">
							{{popup.is_default.text}}
						</view>
						<view class="fangxiang" :class="!checked?'inboxs':''"></view>
					</view>
				</view>
			</view>
			<view class="centen-title">
				开启后新名片添加后自动加入该分组，关闭后需手动选择分组
			</view>
			<view class="centen-box">
				<view class="inbox-to flex flex-al-center" v-for="item in defaultList" :key="item.id">
					<view class="lefttext">{{item.group_name}}</view>
					<view class="flex-col-bd"></view>
					<view class="righttext">系统组</view>
				</view>
			</view>
			<view class="centen-box distance">
				<view class="newly-added flex flex-al-center" v-for="(item,index) in customList" :key="item.id">
					<image src="../../static/svg/cuowu.svg" mode="widthFix" @click="onDelet(index)"></image>
					<input class="input flex-col-bd" v-if="item.newly_added==1" v-model="item.group_name" :maxlength="15" type="text"
					 placeholder="请输入你的名片分组名称" />
					<view class="flex-col-bd" v-else>{{item.group_name}}</view>
					<view class="yes-btn" v-if="item.newly_added==1" @click="onOk(item)">完成</view>
					<view class="yes-btn" v-else @click="onEnle(item)">编辑</view>
				</view>
				<view class="newly-added-btn to  flex flex-al-center" @click="onNewlyAdded">
					<image src="../../static/svg/add.svg" mode="widthFix"></image>
					<view class="company-name-btn">新建名片夹组</view>
				</view>
			</view>
		</view>
		<u-popup v-model="popup.onOff" :border-radius="32" mode="bottom">
			<view class="popup-box">
				<view class="popup-info flex flex-al-center" v-for="item in datas" @click="onSelect(item)" :key="item.id">
					<view class="popup-title">{{item.group_name}}</view>
					<text v-if="deposit.id == item.id">(默认分组)</text>
					<view class="flex-col-bd"></view>
					<image v-if="deposit.id == item.id" src="../../static/svg/select.svg" mode="widthFix"></image>
				</view>
				<view class="flex flex-al-center bott-btn-box-to">
					<view class="btn-left" @click="popup.onOff = false">取消</view>
					<view class="btn-right" @click="onYseSelect">确认</view>
				</view>
			</view>
		</u-popup>
		<u-modal ref="delImg" v-model="modal.showDelImg" :async-close="true" title="提示" content="是否删除该分组" :show-cancel-button="true"
		 @cancel="modal.showDelImg=false" @confirm="handleDelImg"></u-modal>
		<view class="flex flex-al-center bott-btn-box">
			<view class="btn-left" @click="onGoto">取消</view>
			<view class="btn-right" @click="onDetermine">确认更新</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: true,
				popup: {
					onOff: false,
					is_default: {
						text: '',
						id: ''
					}
				},
				deposit: {
					id: '',
					text: ''
				},
				defaultList: [], // 默认列表，不可修改
				customList: [], // 自定义列表，可以修改
				datas: [], // 所有数据集合
				num: 1,
				modal: {
					showDelImg: false,
					index: '',


				}
			}
		},
		computed: {
			// 在vuex里拿到用户数据
			cardInfo() {
				return this.$store.state.cardInfo;
			}
		},
		created() {
			this.getUserVcard()
		},
		methods: {
			// 返回上一级
			onGoto() {
				uni.navigateBack({
					delta: 1
				});
			},
			onDefault() {
				if (this.checked) {
					this.deposit = {
						id: this.popup.is_default.id,
						text: this.popup.is_default.text
					}
					this.popup.onOff = true
				} else {

				}
			},
			// 新增分组
			onNewlyAdded() {
				this.customList.push({
					group_name: '',
					is_default: 0,
					id: `Add${this.num}`,
					newly_added: 1
				})
				this.num++
			},
			// 删除自定义分组
			onDelet(index) {
				this.modal.index = index
				this.modal.showDelImg = true
			},
			async handleDelImg() {
				let _id = this.customList[this.modal.index].id
				if (typeof _id == "string") {
					this.customList.splice(this.modal.index, 1)
					this.modal.showDelImg = false
				} else {
					const {
						data,
						code,
						msg
					} = await this.$u.api.groupcard({
						id: _id
					});
					this.modal.showDelImg = false
					if (code == 1) {
						this.customList.splice(this.modal.index, 1)
					} else {
						uni.showToast({
							title: msg,
							duration: 1500,
							icon: "none"
						});
					}
				}
			},
			// 自定义分组完成按钮
			onOk(item) {
				if (item.group_name == '') {
					uni.showToast({
						title: "请输入你的名片分组名称",
						icon: "none",
						duration: 1500,
					});
				} else {
					item.newly_added = 0
				}

			},
			// 自定义分组编辑按钮
			onEnle(item) {
				item.newly_added = 1
			},
			// 确定当前选中
			onYseSelect() {
				this.popup.is_default.text = this.deposit.text
				this.popup.is_default.id = this.deposit.id
				for (let item of this.defaultList) {
					item.id == this.popup.is_default.id ? item.is_default = 1 : item.is_default = 0
				}
				for (let item of this.customList) {
					item.id == this.popup.is_default.id ? item.is_default = 1 : item.is_default = 0
				}
				this.popup.onOff = false
			},
			// 当前选中默认分组
			onSelect(item) {
				this.deposit.id = item.id
				this.deposit.text = item.group_name
			},

			// 点击确定更新按钮
			async onDetermine() {
				let _defaultId = []
				for (let item of this.customList) {
					if (item.group_name != '') {
						if (typeof item.id == "string") {
							item.id = ''
						}
						_defaultId.push({
							name: item.group_name,
							id: item.id,
						})
					}
				}
				const {
					data,
					code,
					msg
				} = await this.$u.api.userEdit({
					default_group_id: this.checked ? this.popup.is_default.id : '',
					data: _defaultId
				});
				if (code == 1) {
					uni.showToast({
						title: "分组更新成功",
						icon: "none",
						duration: 1000,
					});
					this.getUserInfo()
					setTimeout(function() {
						uni.switchTab({
							url: '/pages/cardholder/cardholder'
						});
					}, 1000)
				} else {
					uni.showToast({
						title: msg,
						icon: "none",
						duration: 1500,
					});
				}
			},
			async getUserInfo() {
				const {
					data
				} = await this.$u.api.cardInfo();
				this.$store.commit('SetCardInfo', data)
			},
			// 获取分组
			async getUserVcard() {
				const {
					data,
					code
				} = await this.$u.api.userVcard();
				if (code == 1) {
					this.datas = data
					for (let item of data) {
						if (item.type == 1) {
							this.defaultList.push({
								group_name: item.group_name,
								is_default: item.is_default,
								id: item.id
							})
						} else {
							this.customList.push({
								group_name: item.group_name,
								is_default: item.is_default,
								id: item.id,
								newly_added: 0,
							})
						}
						if (item.is_default == 1) {
							this.popup.is_default = {
								text: item.group_name,
								id: item.id
							}
						}
					}
					if (this.popup.is_default.id == '') {
						this.checked = false
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.groupings {
		.popup-box {
			margin: 32upx 18upx 24upx 22upx;

			.popup-info {
				height: 96upx;
				padding: 0 74upx 0 38upx;
				border-bottom: 2upx solid #F5F5F5;

				.popup-title {
					color: #303133;
					font-size: 32upx;
					margin-right: 8upx;
				}

				image {
					width: 60upx;
					height: 60upx;
				}

				text {
					color: #909399;
					font-size: 24upx;
				}
			}

			.bott-btn-box-to {
				background-color: #ffffff;
				height: 92upx;
				line-height: 42upx;
				font-size: 32upx;
				width: 100%;

				.btn-left {
					flex: 1;
					border-right: 2upx solid #DCDFE6;
					text-align: center;
					color: #303133;
				}

				.btn-right {
					flex: 1;
					text-align: center;
					color: #0082EF;
				}

			}
		}

		.bott-btn-box {
			background-color: #ffffff;
			height: 112upx;
			line-height: 42upx;
			font-size: 32upx;
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;

			.btn-left {
				flex: 1;
				border-right: 2upx solid #DCDFE6;
				text-align: center;
				color: #303133;
			}

			.btn-right {
				flex: 1;
				text-align: center;
				color: #0082EF;
			}

		}

		.subject {
			padding-bottom: 112upx;

			.title-text {
				height: 138upx;
				padding: 32upx 40upx;

				text {
					color: origin;
				}
			}

			.distance {
				margin-top: 26upx;
			}

			.centen-box {
				background-color: #ffffff;
				border-bottom: 2upx solid #E6E6E6;
				border-top: 2upx solid #E6E6E6;

				.inbox {
					margin-left: 30upx;
					padding-right: 40upx;
					border-bottom: 1upx solid #F0F0F0;
					height: 88upx;

					.lefttext {
						color: #303133;
						font-size: 30upx;
					}

					.centen {
						width: 120upx;
						height: 46upx;
					}

					.fangxiang {
						width: 16upx;
						height: 16upx;
						border-top: 4upx solid #C7C7CC;
						border-right: 4upx solid #C7C7CC;
						transform: rotate(45deg);
						margin-left: 8upx;
					}
				}

				.inboxs {
					color: #F0F0F0 !important;
					border: #F0F0F0 !important;
				}

				.inbox-to {
					margin-left: 30upx;
					padding-right: 40upx;
					border-bottom: 1upx solid #F0F0F0;
					height: 96upx;

					.lefttext {
						color: #303133;
						font-size: 30upx;
					}

					.righttext {
						color: #C0C4CC;
						font-size: 24upx;
					}
				}

				.newly-added {
					height: 96upx;
					border-bottom: 1upx solid #F0F0F0;
					margin-left: 30upx;
					padding-right: 40upx;

					image {
						width: 40upx;
						height: 40upx;
						margin-right: 24upx;
					}

					.company-name {
						font-size: 30upx;
						color: #303133;
					}

					.yes-btn {
						line-height: 40upx;
						width: 80upx;
						text-align: center;
						background-color: #0082EF;
						color: #ffffff;
						border-radius: 4upx;
						font-size: 26upx;
						margin-left: 20upx;
					}
				}

				.newly-added-btn {
					height: 96upx;
					border-bottom: 1upx solid #F0F0F0;
					margin-left: 30upx;
					padding-right: 40upx;

					image {
						width: 28upx;
						height: 28upx;
						margin-right: 30upx;
					}

					.company-name-btn {
						color: #808080;
						font-size: 28upx;
					}
				}

				.to {
					margin-left: 36upx;
					border: none;
				}
			}

			.centen-title {
				box-sizing: border-box;
				height: 112upx;
				padding: 24upx 30upx 0;
				color: #606266;
				font-size: 24upx;
			}
		}

		.border-none {
			border: none !important;
		}
	}
</style>
