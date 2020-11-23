import store from "../../store";
/**
 * @id    名片id,修改必传,新增不用传
 * @type   1为拍照,2为拍照和从相册选择
 * @state  0为自己的名片，1为用户的名片
 * @callBack 回调函数
 */
const OCRCard = (id, type, state, callBack, add) => {
	const baseUrl = uni.baseUrl;
	let _type = type != 2 ? ['camera'] : ['album', 'camera']
	uni.chooseImage({
		count: 1, //默认9
		sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有   
		sourceType: ['album', 'camera'], //从相册选择或者拍照
		success: function(res) {
			let tempFilePaths = res.tempFilePaths;
			uni.showLoading({
				title: "识别中,请稍后..."
			})
			let time = setTimeout(() => {
				uni.hideLoading();
				uni.showToast({
					title: "识别失败，请手动创建",
					icon: "none",
					duration: 1500,
				});
			}, 6000)
			const formData = {
				type: 3,
				id: id,
				status: 3,
				is_customer: state
			};
			let _url;
			if (add == 1) {
				_url = '/vcard/read_pic'
			} else {
				_url = "/vcard/update"
			}

			for (var i = 0; i < tempFilePaths.length; i++) {
				uni.uploadFile({
					url: baseUrl + _url,
					filePath: tempFilePaths[i],
					name: "img",
					header: {
						token: uni.getStorageSync("token")
					},
					formData: formData,
					success(res) {
						uni.hideLoading();
						clearTimeout(time);
						try {
							if (typeof(res.data) == "string") {
								res.data = JSON.parse(res.data);
							}
							if (res.data.code == 1) {
								uni.showToast({
									title: '图片上传成功',
									duration: 1500,
									icon: "success"
								});
								if (state) {
									// 判断客户名片是否为新增
									if (add == 1) {
										store.commit('SetCustomerId', '')
										// 判断是否有默认值
										if (store.state.cardInfo.default_group_id != 0) {
											res.data.data.group_id = store.state.cardInfo.default_group_id
										}
										store.commit('SetInfo', res.data.data)
										uni.navigateTo({
											url: `/pages/myCenter/edit/edit?type=2&state=1&add=1`
										})
									} else {
										uni.navigateTo({
											url: `/pages/myCenter/edit/edit?type=4&state=1&id=${id||res.data.data}`
										})
									}
								} else {
									uni.navigateTo({
										url: `/pages/myCenter/edit/edit?type=4&state=0`
									})
								}
							} else if (res.data.code == 6001) {
								uni.showToast({
									title: "名片已存在",
									icon: "none",
									duration: 1500,
								});
							} else {
								callBack(true)
							}
						} catch (e) {
							console.log(e)
							uni.showToast({
								title: "识别失败，请手动创建或者修改",
								icon: "none",
								duration: 1500,
							});
						}
					},
					fail() {
						uni.hideLoading();
						that.showMsg("error", "创建失败")
					}
				});
			}
		}
	});
}
export {
	OCRCard
}
