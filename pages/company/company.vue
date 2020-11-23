<template>
	<view class="cardholder">
		<u-navbar :is-back="true" back-text="返回" title="企业名片库" title-size="28" class="nav-bar">
		</u-navbar>
		<view class="subject">
			<view class="search-box flex flex-al-center">
				<u-search class="search-input" placeholder="姓名/电话/公司/职务/地址" height="72" @clear="getDataList" @search="getDataList"
				 :show-action="false" v-model="keyword"></u-search>
			</view>
			<view class="business-card-box" v-show="cardList">
				<view class="title-text" v-if="datanum!=''">相关结果({{datanum}})</view>
				<view class="title-text" v-else>在整个企业架构中搜索同事姓名/电话/职务，快速查看个人信息，一键添加至我的名片夹</view>
				<template v-for="(item) in cardList">
					<view class="business-card" :class="businessNum==item.id?'business-card-s':''" @click="onOpen(item.id)" :key="item.id">
						<card :onOff="2" :info="item" @onSeeCard="onSeeCard"></card>
					</view>
				</template>
				<view v-if="cardList==''">
					<nodata>
						<view class="text-top">
							未搜索到相关名片，换个关键字试试~
						</view>
					</nodata>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import card from "../../components/card/card";
	import nodata from "../../components/nodata/nodata";
	export default {
		data() {
			return {
				keyword: '', //搜索框内容
				businessNum: 0,
				cardList: [],
				datanum:''
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
			}
		},
		methods: {
			onOpen(num) {
				this.businessNum = num
				console.log(this.businessNum,'测试第一步，获取数据')
			},
			onSeeCard(id) {
				console.log(id,'测试第二步，拿到展开点击数据')
				console.log(this.businessNum,'测试第三步，对比数据')
				if (this.businessNum == id) {
					this.$store.commit('SetCustomerId', id)
					console.log(this.$store.state.customerId,'测试第四步，查看是否存入')
					uni.reLaunch({
						url: `/pages/card/card`
					});
				}
			},
			// 获取客户名片夹的列表数据
			async getDataList() {
				try {
					const {
						data,
						code
					} = await this.$u.api.companylist({
						key_word: this.keyword.trim()
					});
					if (code == 1) {
						if (data != '') {
							this.businessNum = data[0].id
						} else {
							this.businessNum = ''
						}
						if(this.keyword!=''){
							this.datanum = data.length
						}else{
							this.datanum = ''
						}
						this.cardList = data
					}
				} catch (e) {
					this.show = true;
				}
			}
		},
		onShow() {
			this.getDataList()
		}
	}
</script>

<style lang="scss" scoped>
	.cardholder {

		// 头部css
		.nav-bar {
			background-color: $uni-bg-color;
			position: relative;
			top: -40upx;
			z-index: 99999;
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

				.search-input {
					flex: 1;
				}
			}

			.business-card-box {
				padding-bottom: 40upx;
                height:calc(100vh - 272upx);
				overflow-y: auto;
				.title-text{
					padding: 24upx 30upx 0;
					color: #303133;
					font-size: 24upx;
				}
				.business-card {
					transition: all .3s;
					height: 160upx;
					overflow: hidden;
				}

				.business-card-s {
					height: 480upx;
				}
			}
		}
	}
</style>
