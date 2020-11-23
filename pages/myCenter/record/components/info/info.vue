<template>
	<view class="record-info" v-if="_show">
		<u-popup v-model="_show" mode="bottom" closeable>
			<view class="flex pd flex-al-center head">
				<view class="flex flex-al-center left">
					<view class="avatar">
						<image :src="customer.avatar?customer.avatar:'../../../../../static/svg/mgtx-slogan.svg'" mode="widthFix" />
					</view>
					<text class="name">{{customer.nickname?customer.nickname:'访客'}}</text>
				</view>
				<view class="times">
					共访问了你{{times}}次
				</view>
			</view>
			<view class="list">
				<scroll-view scroll-y="true" style="max-height: 600rpx;">
					<view class="pd border1 item" v-for="(item,index) in list" :key="index">
						<view>{{item.create_time}} 访问了你</view>
						<view v-if="item.mobile" class="tel-box">
							留下了手机号：
							<text class="tel">{{item.mobile}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props: ["infoId", "show", "startDate", "endDate"],
		data() {
			return {
				list: [{
						time: "2020.07.26 17:42",
						tel: ""
					},
					{
						time: "2020.07.26 17:42",
						tel: "15280511236"
					},
					{
						time: "2020.07.26 17:42",
						tel: ""
					}
				],
				id: "",
				times: 0,
				customer: {}
			};
		},
		watch: {
			infoId(val) {
				this.id = val;
				this.getInfo();
			}
		},
		computed: {
			_show: {
				get: function() {
					return this.show;
				},
				set: function(val) {
					this.$emit("update:show", val);
				},
			},
		},
		methods: {
			async getInfo() {
				const {
					data: {
						customer,
						logs,
						times
					}
				} = await this.$u.api.lookRecordInfo({
					visit_times_id: this.id,
					start_time: this.startDate,
					end_time: this.endDate
				});
				this.customer = customer;
				this.list = logs;
				this.times = times;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.record-info {
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		z-index: 9999;
		font-size: 28upx;

		/deep/.uni-popup__wrapper-box {
			background-color: $uni-bg-color;
			border-radius: 10px;
		}

		.pd {
			padding: 32upx 40upx;
		}

		.head {
			position: relative;

			.name {
				font-size: 40upx;
			}

			.times {
				color: $primary-color;
				margin-left: 30upx;
			}

			.close {
				position: absolute;
				right: 34upx;
				top: 40upx;
			}

			.avatar {
				width: 96upx;
				height: 96upx;
				border-radius: 50%;
				margin-right: 20upx;

				image {
					width: 100%;
				}
			}
		}

		.item {
			color: #606266;

			&::after {
				background: #EBEEF5;
			}

			.tel-box {
				background-color: #F7F7F7;
				padding: 4upx 20upx;
				margin-top: 20upx;

				.tel {
					color: #05589E;
				}
			}
		}
	}
</style>
