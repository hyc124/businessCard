import Vue from 'vue'
import App from './App'
import uView from 'uview-ui';
import store from './store' //从第二步文件夹中引入的store
import tabbars from './components/tabbars/tabbars.vue'  
Vue.component('tab-bar', tabbars)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store //将store挂载到vue全局实例上
})
// const baseUrl = "https://vcard.mgtx-tech-test.mgtx.com.cn/api";
const host = "https://vcard.mgtx-tech-dev.mgtx.com.cn";
const baseUrl = `${host}/api`;
// 引入UI组件
Vue.use(uView);

// 导入请求拦截器
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app, baseUrl)

// http接口API集中管理引入部分
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)
// Vue.prototype.baseUrl = baseUrl;
uni.host = host;
uni.baseUrl = baseUrl;
app.$mount()
