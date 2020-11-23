<template>
	<view class="index">
		<u-modal ref="uModal" v-model="show" title="提示" @confirm="confirm" :async-close="true">
			<view class="content">
				授权失败请重新授权
			</view>
		</u-modal>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				show: false,
				status: 1,
			}
		},
		created() {
			uni.showLoading({
				title: '授权中...'
			});
			this.wxLogin()
		},
		methods: {
			wxLogin() {
				let that = this;
				let {
					environment
				} = getApp().globalData.sysInfo;
				if (environment && environment == "wxwork") {
					wx.qy.login({
						success: function(res) {
							that.login(res.code);
						}
					})
				} else {
					uni.redirectTo({
						url: '/pages/info/info'
					})
				}
			},
			async login(wxcode) {
				console.log(wxcode);
				// return false
				try {
					const {
						data,
						code
					} = await this.$u.api.login({
						code: wxcode
					});
					if (code == 1) {
						uni.setStorageSync('token', data.token);
						if (data.is_vcard) {
							this.getInfo();
							this.status = data.status;
						} else {
							uni.redirectTo({
								url: '/pages/guide/guide'
							})
						}
					} else if (code == 2) {
						uni.redirectTo({
							url: '/pages/info/info'
						})
					} else {
						this.show = true;
						setTimeout(() => {
							this.$refs.uModal.clearLoading();
						}, 1000)
					}
				} catch (e) {
					this.show = true;
				}
			},
			async getInfo() {
				const {
					data
				} = await this.$u.api.cardInfo();
				this.$store.commit('SetCardInfo', data);
				console.log(this.status,'status');
				if (this.status==1) {
					uni.switchTab({
					    url: '/pages/card/card'
					});
				} else {
					uni.navigateTo({
						url: "/pages/myCenter/edit/edit?type=4&state=0",
					})
				}
			},
			confirm() {
				this.wxLogin();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		.content {
			padding: 20px 0;
			text-align: center;
			color: #666;
		}
	}
</style>
