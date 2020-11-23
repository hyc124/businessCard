<template>
	<view class="record-box">
		<view class="flex total">
			<view>
				<view class="til">访问人数(人)</view>
				<view class="num">{{people}}</view>
			</view>
			<view>
				<view class="til">访问总量(次)</view>
				<view class="num">{{count.all}}</view>
			</view>
		</view>
		<view class="date-box flex flex-al-center">
			<view class="date">{{date}}</view>
			<view @click="showCalendar = true" class="date-area">
				<image src="../../../static/svg/mycenter/date.svg" mode="widthFix"></image>
			</view>
		</view>
		<view class="list-box">
			<view class="border1 u-tabs-box">
				<u-tabs-swiper activeColor="#0082EF" ref="tabs" :list="tabs" :current="current" @change="tabChange" :is-scroll="false"
				 swiperWidth="750" height="96"></u-tabs-swiper>
			</view>
			<view class="container-tabs__list">
				<swiper class="container-tabs__swiper" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
					<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
						<scroll-view scroll-y style="height: 100%">
							<!-- 循环订单列表 -->
							<template v-if="rowData.length > 0 ">
								<view class="item" @click="handleInfo(data.id)" v-for="(data,index) in rowData" :key="index">
									<view class="flex">
										<view class="flex">
											<view class="avatar">
												<image :src="data.avatar?data.avatar:'../../../static/svg/mgtx-slogan.svg'" mode="widthFix" />
											</view>
											<text>{{data.nickname?data.nickname:'访客'}}</text>
										</view>
										<view class="times">共访问了{{data.visit_times}}次</view>
									</view>
									<view class="flex date">
										<view>{{$u.timeFormat(data.last_visit_time, 'yyyy-mm-dd hh:MM')}} 访问了你</view>
										<view v-if="data.mobile">
											<image src="../../../static/svg/tel.svg" class="icon" mode="widthFix"></image>
											{{data.mobile}}
										</view>
									</view>
								</view>
							</template>
							<u-empty text="暂无记录" mode="history" src="../../../static/svg/no-data.svg" icon-size="176" margin-top="-80"  v-else></u-empty>
							<!-- 循环订单列表结束 -->
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<info :show.sync="infoShow" :startDate="param.start_time" :endDate="param.end_time" :infoId="id"></info>
		<u-calendar v-model="showCalendar" :mode="mode" @change="changeCalendar" active-bg-color="#0082EF"></u-calendar>
	</view>
</template>

<script>
	import info from "./components/info/info.vue"
	export default {
		data() {
			return {
				current: 0,
				swiperCurrent: 0,
				startDate: "",
				endDate: "",
				rowData: [],
				pickerDate: [],
				id: "",
				infoShow: false,
				showCalendar: false,
				mode: "range",
				date: "",
				param: {
					type: 1,
					start_time: "",
					end_time: ""
				},
				people: 0,
				count: {
					all: 0,
					mobile: 0,
					noMobile: 0
				}
			};
		},
		components: {
			info
		},
		computed: {
			tabs() {
				return [{
						name: `全部(${this.people}人)`
					},
					{
						name: `有手机号(${this.count.mobile}人)`
					},
					{
						name: `无手机号(${this.count.noMobile}人)`
					},
				]
			}
		},
		onLoad(option) {
			const type = option.type;
			if(type=="1") {
				this.date = "历史记录";
			} else {
				const nowDate = new Date();
				this.date = `今日：${this.$u.timeFormat(nowDate, 'yyyy/mm/dd')}`;
				this.param.start_time = this.$u.timeFormat(nowDate, 'yyyy-mm-dd');
				this.param.end_time = this.$u.timeFormat(nowDate, 'yyyy-mm-dd');
			}
			this.loadData();
		},
		methods: {
			tabChange(index) {
				this.swiperCurrent = index;
				this.param.type = parseInt(index) + 1;
				this.loadData();
			},
			changeSwiper(e) {
				this.param.type = parseInt(index) + 1;
				this.loadData();
				this.current = e.detail.current
			},
			async loadData() {
				this.rowData = []
				uni.showLoading({
					title: '数据加载中...',
					mask: false
				})
				const {
					code,
					data
				} =  await this.$u.api.lookRecord(this.param);
				uni.hideLoading();
				if (code) {
					this.people = data.visit_customer_count;
					this.count.all = data.visit_count;
					this.count.mobile = data.visit_customer_mobile_count;
					this.count.noMobile = data.visit_customer_no_mobile_count;
					this.rowData = data.list;
				};
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			changeCalendar(e) {
				console.log(e);
				this.date = `${e.startYear}/${e.startMonth}/${e.startDay} - ${e.endYear}/${e.endMonth}/${e.endDay}`;
				this.param.start_time = e.startDate;
				this.param.end_time = e.endDate;
				this.loadData();
			},
			handleInfo(id) {
				this.infoShow = true;
				this.id = id;
			}
		}
	}
</script>

<style lang="scss">
	.record-box {
		position: relative;
		z-index: 0;

		.total {
			padding: 40upx 48upx;
			background: linear-gradient(134deg, #0082EF 0%, #04A9FE 100%);
			color: #fff;
			padding-right: 0;

			&>view {
				flex: 1;

				.til {
					font-size: 28upx;
					margin-bottom: 10upx;
				}

				.num {
					font-size: 48upx;
					line-height: 60upx;
				}
			}
		}

		.date-box {
			justify-content: space-between;
			padding: 28upx 30upx;
			font-size: 28upx;
			color: #303133;
			background-color: $bg-color;
			position: relative;
			z-index: 9999;

			image {
				width: 48upx;
			}
		}

		.list-box {
			height: calc(100vh - 24px - 50px - 100rpx);

			.u-tabs-box {
				position: relative;

				&::after {
					background-color: $bg-color;
					bottom: 1px;
				}

				/deep/.u-tabs-item {
					font-weight: normal !important;
				}
			}

			.container-tabs__list {
				height: 100%;

				.container-tabs__swiper {
					height: 100%;

					.item {
						padding: 32upx 30upx;
						position: relative;
						background-color: $uni-bg-color;
						&:active {
							opacity: 0.6;
						}

						&::after {
							content: " ";
							width: 200%;
							height: 2px;
							position: absolute;
							bottom: -1px;
							left: 0;
							background: #EBEEF5;
							-webkit-transform: scale(.5);
							transform: scale(.5);
							-webkit-transform-origin: 0 0;
							transform-origin: 0 0;
							box-sizing: border-box;
							z-index: 1;
						}

						.flex {
							justify-content: space-between
						}

						.avatar {
							width: 52upx;
							height: 52upx;
							background-color: $bg-color;
							overflow: hidden;
							border-radius: 50%;
							margin-right: 16upx;

							image {
								width: 100%;
							}
						}

						.icon {
							width: 26upx;
							position: relative;
							top: 6upx;
							margin-right: 6upx;
						}

						.times {
							font-size: 28upx;
						}

						.date {
							color: #909399;
							font-size: 24upx;
							margin-top: 12upx;
						}
					}
				}

			}
		}
	}
</style>
