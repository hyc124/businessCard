import Vue from "vue" //引入vue
import Vuex from "vuex" // 引入vuex
Vue.use(Vuex) // 让vue使用vuex
// 通过vuex构造函数创建store对象

const store = new Vuex.Store({
	state: {
		cardInfo: {},
		isNoGuide: false,
		isCreatPoster: false,
		isCreatQy: false,
		isCreatShare: false,
		customerId: '',
		info: {}
	},
	mutations: {
		SetInfo: (state, data) => {
			state.info = data
		},
		SetCardInfo: (state, data) => {
			state.cardInfo = data;
		},
		SetGuide: (state, data) => {
			state.isNoGuide = data;
		},
		SetIsCreat: (state, data) => {
			state.isCreatPoster = data;
			state.isCreatQy = data;
			state.isCreatShare = data;
		},
		SetIsCreatPoster: (state, data) => {
			state.isCreatPoster = data;
		},
		SetIsCreatQy: (state, data) => {
			state.isCreatQy = data;
		},
		SetIsCreatShare: (state, data) => {
			state.isCreatShare = data;
		},
		SetCustomerId: (state, data) => {
			state.customerId = data;
		}
	},
	actions: {
		async GetCardInfo({
			commit
		}, payload) {
			uni.request({
				url: uni.baseUrl + '/vcard/detail',
				header: {
					token: uni.getStorageSync("token")
				},
				success(res) {
					commit("SetCardInfo", res.data.data);
				}
			})
		}
	}
})
export default store //导出store对象
