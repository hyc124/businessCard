<template>
	<view>
		<view class="canvas-box" style='position: absolute; top: -9999rpx;'>
			<painter customStyle='position: absolute; left: -9999rpx;' :palette="share" @imgOK="onGenerateSuccess"
			 @imgErr="onGenerateError" widthPixels="1000" />
			<painter customStyle='position: absolute; left: -9999rpx;' :palette="poster" @imgOK="((e)=>onGenerateSuccess(e,2))"
			 @imgErr="onGenerateError" widthPixels="1000" />
		</view>
	</view>
</template>

<script>
	import shareCard from '../../static/js/shareCardJson.js';
	import posterCard from '../../static/js/posterCardJson.js';
	import painter from "../../wxcomponents/painter/painter";
	export default {
		props: ["info", "isMake"],
		data() {
			return {
				share:"",
				poster:""
			};
		},
		components: {
			painter
		},
		watch: {
			isMake(val) {
				console.log(val);
				if(val) {
					this.share = new shareCard(this.info).palette();
					this.poster = new posterCard(this.info).palette();
				}
			},
		},
		methods: {
			onGenerateSuccess(res, type) {
				console.log(res, type);
			},
			onGenerateError(res) {
				console.log(res);
			},
		}
	}
</script>

<style lang="scss">

</style>
