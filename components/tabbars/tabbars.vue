<template>
	<view class="tabbars">
		<u-tabbar hide-tab-bar v-model="tabbarNum" :list="list" active-color="#0082EF" icon-size="40"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbarNum: 0,
				list: [],
			};
		},
		computed: {
			// 在vuex里拿到用户数据
			cardInfo() {
				return this.$store.state.cardInfo;
			}
		},		
		created() {
			if(this.cardInfo.is_friends){
				this.list = [{
						iconPath: "../../../static/svg/BusCdHld.svg",
						selectedIconPath: "../../../static/svg/BusCdHldSlt.svg",
						text: '我的名片',
						customIcon: false,
						pagePath: "/pages/card/card"
					},
					{
						iconPath: "../../../static/svg/Wat-Mom.svg",
						selectedIconPath: "../../../static/svg/Wat-Mom-Slt.svg",
						text: '企业动态',
						customIcon: false,
						pagePath: '/pages/friend/friend'
					},
					{
						iconPath: "../../../static/svg/My-Card.svg",
						selectedIconPath: "../../../static/svg/My-Card-Slt.svg",
						text: '名片夹',
						customIcon: false,
						pagePath: "/pages/cardholder/cardholder"
					}
				]
			}else{
				this.list = [{
						iconPath: "../../../static/svg/BusCdHld.svg",
						selectedIconPath: "../../../static/svg/BusCdHldSlt.svg",
						text: '我的名片',
						customIcon: false,
						pagePath: "/pages/card/card"
					},
					{
						iconPath: "../../../static/svg/My-Card.svg",
						selectedIconPath: "../../../static/svg/My-Card-Slt.svg",
						text: '名片夹',
						customIcon: false,
						pagePath: "/pages/cardholder/cardholder"
					}
				]
			}
		},
		mounted() {},
		methods: {}

	}
</script>

<style lang="scss" scoped>

</style>
