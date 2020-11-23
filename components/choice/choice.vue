<template>
	<view class="choice">
		<u-modal v-model="show.onOff" :show-title="false" @cancel="onCancel" @confirm="onConfirm" :show-cancel-button="true"
		 :border-radius="40">
			<view class="slot-content">
				<view class="title">
					选择分组
				</view>
				<view class="input flex flex-al-center" @click="onOff = !onOff">
					<text>{{selt}}</text>
					<view class="flex-col-bd"></view>
					<view class="sanjiao"></view>
				</view>
				<scroll-view scroll-y="true" v-if="onOff" class="scroll">
					<view class="f-box" v-for="item in Flist" :key="item.id">
						<view class="intext" @click="onSlet(item)">{{item.group_name}}</view>
					</view>
				</scroll-view>
				<u-checkbox-group>
					<u-checkbox label-size="26" @change="checkboxChange" v-model="item.checked" v-for="(item, index) in list" :key="index"
					 :name="item.name">{{item.name}}</u-checkbox>
				</u-checkbox-group>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		props: {
			show: {
				default: {
					onOff: false
				}
			}
		},
		data() {
			return {
				Flist: [],
				list: [{
					name: '默认该分组， 下次不再提示',
					checked: false
				}],
				selt: '',
				id: '',
				onOff: false,
				info: {
					is_default_group: 0,
					group_id: 0
				}
			};
		},
		created() {
			this.getUserVcard()
		},
		watch: {
			getInfo() {
				return this.$store.state.info
			}
		},
		methods: {
			checkboxChange(e) {
				if (e.value) {
					this.info.is_default_group = 1
				} else {
					this.info.is_default_group = 0
				}
			},
			// 确定按钮
			onConfirm() {
				this.info.group_id = this.id
				this.$emit('onChoice', {
					num: 2,
					data: this.info
				})
			},
			// 取消按钮
			onCancel() {
				this.$emit('onChoice', {
					num: 1
				})
			},
			onSlet(item) {
				this.id = item.id
				this.selt = item.group_name
				this.onOff = false
			},
			async getUserVcard() {
				const {
					data,
					code
				} = await this.$u.api.userVcard();
				if (code == 1) {
					this.selt = data[0].group_name
					this.id = data[0].id
					this.Flist = data
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.choice {
		.slot-content {
			padding: 0 48upx 40upx;
			position: relative;

			.scroll {
				height: 200upx;
				width: 506upx;
				position: absolute;
				top: 152upx;
				z-index: 9999;
				width: 100%;
				background-color: #ffffff;
			}

			.f-box {
				border: 2upx solid #DCDFE6;
				border-top: 0upx;
				width: 504upx;

				.intext {
					line-height: 70upx;
					padding-left: 16upx;
				}
			}
		}

		.title {
			margin: 40upx auto 32upx;
			text-align: center;
			font-size: 34upx;
			color: #303133;
		}

		.input {
			width: 100%;
			height: 76upx;
			border: 2upx solid #DCDFE6;
			border-radius: 8upx;
			margin-bottom: 20upx;
			position: relative;

			text {
				font-size: 32upx;
				color: #303133;
				margin-left: 16upx;
			}

			.sanjiao {
				width: 12upx;
				height: 12upx;
				border-bottom: 8upx solid #909399;
				border-left: 8upx solid transparent;
				border-right: 8upx solid transparent;
				position: absolute;
				right: 24upx;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
</style>
