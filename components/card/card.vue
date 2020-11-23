<template>
	<view class="card-box">
		<personalityColor v-if="info.style==1" :info="info" @callBack="callBack"></personalityColor>
		<elegantBlack v-else-if="info.style==2" :info="info" @callBack="callBack"></elegantBlack>
		<plainWhite v-else-if="info.style==3" :info="info" @callBack="callBack"></plainWhite>
		<cardPopup v-if="onOff" :info="info" ref="cardPopup" @callBack="callBack"></cardPopup>
	</view>
</template>

<script>
	import personalityColor from "./personalityColor/personalityColor";
	import elegantBlack from "./elegantBlack/elegantBlack";
	import plainWhite from "./plainWhite/plainWhite";
	import cardPopup from "./cardpopup";
	export default {
		props: ['info', 'onOff','code'],
		data() {
			return {
				showInfo: true
				
			};
		},
		components: {
			personalityColor,
			elegantBlack,
			plainWhite,
			cardPopup
		},
		computed: {},
		watch: {},
		methods: {
			callBack(type) {
				// 调用子组件的方法，改变子组件的变量值
				if (type == 'one') {
					if (this.onOff) {
						this.$refs.cardPopup.onOpen();
					}
				} else {
					if(this.code){
						if (type == this.info.id) {
							this.$store.commit('SetCustomerId', '')
						} else {
							this.$store.commit('SetCustomerId', type)
						}
						uni.navigateTo({
							url: `/pages/qycode/qycode`
						});
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card-box {
		padding: 30upx;
	}
</style>
