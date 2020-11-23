<template>
	<view class="edit-box">
		<u-navbar back-text="返回" :is-back="options.state==1||options.onOff==1?true:false" :title="title" class="nav-bar"
		 title-size="28">
			<view slot="right" class="menu" @click="handleMycenter" v-if="options.state==0&&options.onOff!=1">
				<view class="left-menu">
					<view class="avatar">
						<u-avatar :src="form.avatar" mode="circle" bg-color="#F0F2F5" size="48" class="avatar-img"></u-avatar>
					</view>
					<text>个人中心</text>
				</view>
			</view>
		</u-navbar>
		<card :info="form"></card>
		<view class="contact-box">
			<view class="Mask"></view>
			<view class="scroll-box">
				<scroll-view scroll-x="true" class="scroll">
					<view class="contact-item">
						<view class="img-box" @click="onSetBackNum(1)" :class="backNum==1?'img-box-to':''">
							<image src="../../../static/cardpng/back1.png" mode="widthFix"></image>
							<view class="location flex flex-al-center flex-jus-center" v-if="backNum==1">
								<image src="../../../static/svg/yesselet.svg" mode="widthFix"></image>
							</view>
						</view>
						<view class="img-box" @click="onSetBackNum(2)" :class="backNum==2?'img-box-to':''">
							<image src="../../../static/cardpng/back2.png" mode="widthFix"></image>
							<view class="location flex flex-al-center flex-jus-center" v-if="backNum==2">
								<image src="../../../static/svg/yesselet.svg" mode="widthFix"></image>
							</view>
						</view>
						<view class="img-box" @click="onSetBackNum(3)" :class="backNum==3?'img-box-to':''">
							<image src="../../../static/cardpng/back3.png" mode="widthFix"></image>
							<view class="location flex flex-al-center flex-jus-center" v-if="backNum==3">
								<image src="../../../static/svg/yesselet.svg" mode="widthFix"></image>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<u-form :model="form" ref="uForm" :label-width="160" :label-style="{color:'#909399'}">
			<view class="section">
				<u-form-item label="姓名" prop="username">
					<text class="red">*</text>
					<u-input v-model="form.username" maxlength="20" />
				</u-form-item>
				<u-form-item label="手机号码" prop="mobile">
					<text class="red">*</text>
					<u-input v-model="form.mobile" />
				</u-form-item>
				<u-form-item label="公司/单位" prop="company_name">
					<text class="red">*</text>
					<u-input v-model="form.company_name" maxlength="20" placeholder="建议输入7-12个字" />
				</u-form-item>
				<u-form-item label="公司(英文)">
					<u-input v-model="form.company_name_en" maxlength="30" />
				</u-form-item>
				<u-form-item label="职务" prop="position">
					<text class="red">*</text>
					<u-input v-model="form.position" maxlength="10" placeholder="建议输入3-5个字" />
				</u-form-item>
				<u-form-item label="部门" :border-bottom="false" placeholder="建议输入3-5个字" prop="main_department">
					<text class="red">*</text>
					<u-input v-model="form.main_department" maxlength="10" />
				</u-form-item>
			</view>
			<view class="section">
				<u-form-item label="电子邮箱" prop="email">
					<u-input v-model="form.email" maxlength="32" />
				</u-form-item>
				<u-form-item label="邮政编码" prop="zip_code">
					<u-input v-model="form.zip_code" placeholder="选填" maxlength="6" />
				</u-form-item>
				<u-form-item label="详细地址" label-position="top" :border-bottom="false">
					<text class="view-texts" :class="form.company_address?'intext':''" v-if="onshow">{{form.company_address||'请输入内容'}}</text>
					<u-input type="textarea" v-else v-model="form.company_address" maxlength="200" />
				</u-form-item>
			</view>
			<view class="section">
				<u-form-item label="固定电话" prop="telephone">
					<u-input v-model="form.telephone" placeholder="选填" maxlength="13" />
				</u-form-item>
				<u-form-item label="传真" prop="fax">
					<u-input v-model="form.fax" placeholder="选填" maxlength="13" />
				</u-form-item>
				<u-form-item label="微信号" prop="wx_num">
					<u-input v-model="form.wx_num" placeholder="选填" maxlength="30" />
				</u-form-item>
				<u-form-item label="QQ号" :border-bottom="false" prop="wx_num" maxlength="">
					<u-input v-model="form.qq_num" placeholder="选填" maxlength="20" />
				</u-form-item>
			</view>
			<view class="section intro">
				<view class="title">我的个人简介</view>
				<view class="content" prop="introduce">
					<text class="view-text" :class="form.introduce?'intext':''" v-if="onshow">{{form.introduce||'请输入内容'}}</text>
					<u-input v-model="form.introduce" v-else type="textarea" maxlength="200" />
					<view class="num">{{form.introduce.length}}/200</view>
				</view>
			</view>
			<view class="section aciton">
				<u-button type="primary" @click="save" :loading="loading">{{loading?'保存中..':options.type==2?'生成名片':'保存修改'}}</u-button>
			</view>
		</u-form>
		<choice class="choice" @onChoice="onChoice" :show="show"></choice>
		<u-top-tips ref="uTips" z-index="1000000" :navbar-height="66"></u-top-tips>
		<view class="canvas-box" style='position: absolute; top: -9999rpx;'>
			<painter customStyle='position: absolute; left: -9999rpx;' :palette="share" @imgOK="onGenerateSuccess" @imgErr="onGenerateError"
			 widthPixels="1000" />
		</view>
	</view>
</template>

<script>
	import choice from "../../../components/choice/choice";
	import card from "@/components/card/card";
	import shareCard from '../../../static/js/shareCardJson.js';
	export default {
		data() {
			return {
				form: {
					avatar: "",
					username: "",
					mobile: "",
					company_name: "",
					company_name_en: "",
					position: "",
					main_department: "",
					email: "",
					zip_code: "",
					company_address: "",
					telephone: "",
					fax: "",
					wx_num: "",
					qq_num: "",
					intro: "",
					type: "2",
					id: "",
					introduce: "",
					status: 1,
					style: 1,
					group_id: '',
					is_default_group: 0,
					qr_code: ''
				},
				rules: {
					username: [{
						required: true,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['blur'],
					}],
					mobile: [{
						required: true,
						message: '请输入手机号',
						trigger: 'blur'
					}, {
						// 自定义验证函数，见上说明
						validator: (rule, value, callback) => {
							// 上面有说，返回true表示校验通过，返回false表示不通过
							// this.$u.test.mobile()就是返回true或者false的
							return this.$u.test.mobile(value);
						},

						message: '请输入正确手机号',
						// 触发器可以同时用blur和change
						trigger: ['change', 'blur'],
					}],
					company_name: [{
						required: true,
						message: '请输入公司名称',
						trigger: 'blur'
					}],
					main_department: [{
						required: true,
						message: '请输入部门',
						trigger: 'blur'
					}],
					position: [{
						required: true,
						message: '请输入职务',
						trigger: 'blur'
					}],
					email: [{
						type: "email",
						message: '请输入正确邮箱地址',
						trigger: 'change'
					}],
					zip_code: [{
						type: "number",
						message: '请输入正确邮编',
						trigger: ['change', 'blur'],
					}],
					wx_num: [{
						message: '微信号为6-32位',
						trigger: ['change', 'blur'],
						min: 6,
						max: 32
					}],
					qq_num: [{
						type: "number",
						message: 'QQ号为6-32位',
						trigger: ['change', 'blur'],
						min: 6,
						max: 32
					}],
				},
				loading: "",
				title: "编辑名片",
				avatar: "",
				originData: {},
				isNew: 0,
				share: "",
				options: {
					type: '',
					id: '',
					state: ''
				},
				backNum: 2,
				show: {
					onOff: false
				},
				onshow: false
			}
		},
		watch: {
			cardInfo: {
				handler(val) {
					this.loading = false;
					// if (!this.$u.test.isEmpty(val) && val.username) {
					// 	console.log('你好')
					this.originData = this.cardInfo;
					Object.keys(this.form).forEach(item => {
						if (val[item] != undefined) this.form[item] = val[item];
					});
					// }
				},
				deep: true
			},
		},
		components: {
			choice
		},
		onLoad(option) {
			this.options = {
				type: option.type,
				state: option.state,
				id: option.id,
				onOff: option.onOff
			}
			this.form.type = option.type
			if (option.state == 0) {
				this.getInfo()
				if (option.type == 2) {
					this.title = "创建名片";
				}
			} else {
				if (this.options.type == 2) {
					this.title = "创建名片";
					if (option.add == 1) {
						this.handleForm()
					}
				} else {
					this.getUserInfo(this.options.id)
				}
				this.loading = false;
			}
		},
		computed: {
			cardInfo() {
				return this.$store.state.cardInfo;
			},
			getInfos() {
				return this.$store.state.info
			}
		},
		methods: {
			onChoice(data) {
				let _this = this
				if (data.num == 2) {
					for (let key in data.data) {
						this.form[key] = data.data[key]
					}
					this.submit();
				}
				this.show.onOff = false
				setTimeout(function() {
					_this.onshow = false
				}, 300)
			},
			onGenerateSuccess(res) {
				console.log(res, "imgok");
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
			// 选中的图标
			onSetBackNum(num) {
				this.backNum = num
				this.form.style = num
				if (this.options.id != '' && this.options.id != undefined) {
					this.getVcardStyle(num)
				}
			},
			onGenerateError(res) {
				console.log(res);
			},
			save() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						if (this.form.group_id == '' && this.options.state == 1) {
							if (this.cardInfo.default_group_id != 0) {
								this.form.group_id = this.cardInfo.default_group_id
							} else {
								this.show.onOff = true
								this.onshow = true
							}
						} else {
							this.submit();
						}

					}
				});
			},
			handleForm() {
				for (let key in this.getInfos) {
					this.form[key] = this.getInfos[key]
				}
			},
			async getVcardStyle(style = 1) {
				const {
					data,
					code
				} = await this.$u.api.vcardStyle({
					id: this.form.id,
					style: style
				});
				if (code == 1) {
					console.log('改变背景成功')
				}
			},
			async getUserInfo(id) {
				const {
					data
				} = await this.$u.api.cardInfo({
					id: id
				});
				this.originData = data;
				data.type = this.options.type
				this.backNum = data.style
				Object.keys(this.form).forEach(item => {
					if (data[item] != undefined) this.form[item] = data[item];
				});
			},
			async submit() {
				this.loading = true;
				this.form.status = 1;
				this.form.is_customer = this.options.state;
				try {
					this.share = new shareCard(this.cardInfo).palette();
					const {
						code,
						data,
						msg
					} = await this.$u.api.creadCard(this.form)
					console.log(code,data,msg)
					this.loading = false;
					if (code == 1) {
						for (let key in this.form) {
							this.form[key] = ''
						}
						this.$refs.uTips.show({
							title: msg,
							type: 'success',
							duration: '1000'
						})
						console.log(this.options.state)
						if (this.options.state == 0) {
							console.log('进入成功')
							this.share = new shareCard(this.cardInfo).palette();
							this.$store.commit("SetIsCreat", true);
							this.getInfo(1);
						} else {
							this.getInfo();
							this.$store.commit('SetCustomerId', '')
							uni.navigateTo({
								url: `/pages/successfully/successfully?id=4&id=${data}`
							})
						}

					} else if (code == 2) {
						this.$refs.uTips.show({
							title: msg,
							type: 'error',
							duration: '1000'
						})
						setTimeout(() => {
							uni.navigateTo({
								url: "/pages/card/card"
							})
						}, 1000)
					} else {
						this.$refs.uTips.show({
							title: msg,
							type: 'error',
							duration: '1000'
						})
					}
				} catch (error) {
					this.loading = false;
					this.$refs.uTips.show({
						title: "创建失败",
						type: 'error',
						duration: '1000'
					})
				}
			},
			async getInfo(num) {
				const {
					data
				} = await this.$u.api.cardInfo();
				if (data != undefined) {
					data.type = this.options.type
					this.backNum = data.style
					this.$store.commit('SetCardInfo', data);
					if (num == 1) {
						uni.switchTab({
							url: '/pages/card/card'
						});
					}
				}
			},
			handleMycenter() {
				uni.redirectTo({
					url: "/pages/myCenter/index/index"
				})
			},
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

// <style scoped lang="scss">
	page {
		background-color: $bg-color;
	}

	/deep/ .u-form-item--left__content__label {
		margin-left: 20upx;
		width: 140upx;
	}

	/deep/ .u-form-item {
		position: relative;
	}

	::-webkit-scrollbar {

		display: none;
		width: 0;
		height: 0;
		color: transparent;
	}

	.choice {
		position: relative;
		z-index: 999999;
	}

	.edit-box {
		background-color: $bg-color;

		/deep/.u-drawer {
			margin-top: 135rpx;
		}

		.nav-bar {
			background-color: $uni-bg-color;
			position: relative;
			z-index: 99999;
			height: 160upx;

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

		.contact-box {
			position: relative;

			.Mask {
				height: 8upx;
				width: 100%;
				position: absolute;
				top: 80upx;
				background-color: #f5f5f5;
				z-index: 10;
			}

			.scroll-box {
				height: 90upx;
				overflow: hidden;

				.scroll {
					width: 100%;
					height: 100%;
				}
			}
		}


		.contact-item {
			display: flex;

			.img-box {
				flex-shrink: 0;
				position: relative;
				margin-left: 28upx;
				border-radius: 8upx;
				width: 132upx;
				height: 80upx;
				overflow: hidden;
				border: 2upx solid transparent;
				box-shadow: 0upx 4upx 8upx rgba(00, 00, 00, .1);

				image {
					width: 128upx;
					height: 76upx;
				}

				.location {
					width: 100%;
					height: 100%;
					background-color: rgba(255, 255, 255, .6);
					position: absolute;
					top: 0;
					left: 0;

					image {
						width: 32upx;
						height: 32upx;
					}
				}
			}

			.img-box-to {
				border: 2upx solid #0082EF;
			}
		}

		.section {
			background-color: $uni-bg-color;
			margin: 30upx;
			padding: 0 30upx;
			box-sizing: border-box;
			border-radius: 4px;

			.view-texts {
				display: inline-block;
				width: 100%;
				position: relative;
				bottom: 10upx;
				min-height: 120upx;
				color: #b2b2b2;
				text-align: left;
				vertical-align: top;

				&.intext {
					color: #303133;
				}
			}

			.red {
				position: absolute;
				left: 0upx;
				color: red;
				margin-top: 6upx;
				font-weight: 900;
			}
		}

		.intro {
			padding: 30upx;
			color: #303133;

			.title {
				font-size: 32upx;
				color: #909399;
				margin-bottom: 28upx;
			}

			.content {
				position: relative;

				view {
					text-indent: 20upx;
					line-height: 60upx;
				}

				.view-text {
					display: inline-block;
					width: 100%;
					padding-top: 6upx;
					min-height: 120upx;
					color: #b2b2b2;
					text-align: left;
					vertical-align: top;

					&.intext {
						color: #303133;
					}
				}

				.num {
					position: absolute;
					right: 0;
					bottom: -20upx;
					font-size: 24upx;
					color: #C0C4CC;
				}
			}
		}

		.aciton {
			background: none;
			padding: 0;
		}
	}
</style>
