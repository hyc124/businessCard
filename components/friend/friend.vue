<template>
	<view class="wechat-moments">
		<view class="user-info flex">
			<!-- <view class="user-info-img"></view> -->
			<view class="user-info-right">
				<view class="user-info-name">{{info.company_name}}</view>
				<view class="wechat-moments-text" v-html="info.content.replace(/\#[a-zA-Z\u4E00-\u9FA5]{1,3}\;/gi, emotion)">
				</view>
				<view class="big-img-box">
					<view v-for="(src,index) in info.files" class="img" :class="info.files.length==1?'big-img':''" :key="index" @click="handlePreviewImg(index)">
						<image :src="src" mode="widthFix"></image>
					</view>
				</view>
				<view class="tiem-box flex flex-al-center">
					<text>{{info.mission_create_time}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['info'],
		data() {
			return {};
		},
		methods: {
			emotion(res) {
				let word = res.replace(/\#|\;/gi, '')
				const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷',
					'冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰',
					'骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜',
					'菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫',
					'便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳',
					'发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'
				]
				let index = list.indexOf(word)
				return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="center">`
			},
			// 点击图片预览功能
			handlePreviewImg(index) {
				this.$emit('onImgSee')
				uni.previewImage({
					urls: this.info.files,
					current: index,
					indicator: "number"
				})
			},
		}
	}
</script>

<style lang="scss">
	.wechat-moments {
		background: #ffffff;
		padding: 32upx 26upx 40upx;
		border-bottom: 2upx solid #F0F2F5;

		.user-info {
			flex-wrap: wrap;

			.user-info-img {
				height: 72upx;
				width: 72upx;
				background-color: pink;
				border-radius: 8upx;
			}

			.user-info-right {
				flex: 1;
				padding: 2upx 0 0 20upx;

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

				.user-info-name {
					color: #1E5D92;
					font-size: 32upx;
				}

				.wechat-moments-text {
					width: 100%;
					font-size: 30upx;
					color: #303133;
					line-height: 40upx;
					word-break: break-word;
					margin-top: 8upx;
				}

				.big-img-box {
					margin-top: 14upx;

					.img {
						display: inline-block;
						width: 184upx;
						height: 184upx;
						margin: 0 8upx 8upx 0;
						overflow: hidden;
						image{
							width: 100%;
						}
					}

					.big-img {
						display: inline-block;
						height: 376upx;
						width: 376upx;
						overflow: hidden;
						image{
							width: 100%;
						}
					}
				}

				.tiem-box {
					margin-top: 24upx;
					height: 40upx;
					font-size: 24upx;

					text {
						color: #909399;
					}
				}
			}
		}
	}
</style>
