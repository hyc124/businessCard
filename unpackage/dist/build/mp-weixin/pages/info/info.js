(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/info/info"],{1822:function(n,e,t){"use strict";t.r(e);var o=t("3c28"),i=t("b337");for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);t("3fd9");var r,u=t("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"5e419a56",null,!1,o["a"],r);e["default"]=c.exports},"298c":function(n,e,t){"use strict";(function(n){t("4ee8");o(t("66fd"));var e=o(t("1822"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"3c28":function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return o}));var o={uniNavBar:function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"f8fe"))},card:function(){return t.e("components/card/card").then(t.bind(null,"e55a"))},uImage:function(){return t.e("uview-ui/components/u-image/u-image").then(t.bind(null,"47a4"))},uLoading:function(){return t.e("uview-ui/components/u-loading/u-loading").then(t.bind(null,"0da7"))},uDivider:function(){return t.e("uview-ui/components/u-divider/u-divider").then(t.bind(null,"ed53"))},uModal:function(){return t.e("uview-ui/components/u-modal/u-modal").then(t.bind(null,"c26b"))},uAvatar:function(){return t.e("uview-ui/components/u-avatar/u-avatar").then(t.bind(null,"9a4c"))},uButton:function(){return t.e("uview-ui/components/u-button/u-button").then(t.bind(null,"1fd2"))},tips:function(){return t.e("components/tips/tips").then(t.bind(null,"e8cc"))},uPopup:function(){return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null,"2200"))},uTopTips:function(){return t.e("uview-ui/components/u-top-tips/u-top-tips").then(t.bind(null,"95f1"))}},i=function(){var n=this,e=n.$createElement,t=(n._self._c,{color:"#0082EF",border:"none",height:"50px",borderLeft:"1px solid #e8e8e8"});n._isMounted||(n.e0=function(e){return n.getUserInfo(e,"card")},n.e1=function(e){n.shareShow=!0},n.e2=function(e){return n.getUserInfo(e,"share")},n.e3=function(e){return n.getUserInfo(e,"tel")},n.e4=function(e){n.show=!1},n.e5=function(e){return n.getUserInfo(e,"code")},n.e6=function(e){n.shareShow=!1},n.e7=function(e){return n.getUserInfo(e,"code")}),n.$mp.data=Object.assign({},{$root:{a0:t}})},a=[]},"3fd9":function(n,e,t){"use strict";var o=t("bd04"),i=t.n(o);i.a},"92dc":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(t("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,o,i,a,r){try{var u=n[a](r),c=u.value}catch(s){return void t(s)}u.done?e(c):Promise.resolve(c).then(o,i)}function r(n){return function(){var e=this,t=arguments;return new Promise((function(o,i){var r=n.apply(e,t);function u(n){a(r,o,i,u,c,"next",n)}function c(n){a(r,o,i,u,c,"throw",n)}u(void 0)}))}}var u=function(){t.e("components/card/card").then(function(){return resolve(t("e55a"))}.bind(null,t)).catch(t.oe)},c=function(){t.e("components/tips/tips").then(function(){return resolve(t("e8cc"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{role:"self",imageList:[],avatar:t("1238"),shareShow:!1,show:!0,isChange:!1,cardInfo:{},logoInfo:{},code:"",imagePath:"",palette:"",vistInfo:{},isPowerShow:!1,id:"",isAuth:!1,getTelShow:!1,onOff:!1,wx_code:"",num:0}},components:{card:u,tips:c},onLoad:function(n){this.id=n.scene,this.login(),this.checkAuth()},methods:{onclose:function(){this.onOff=!1},onRetur:function(){this.onOff=!0},login:function(){var e=this,t=getApp().globalData.sysInfo.environment;n.login({provider:"weixin",success:function(n){e.wx_code=n.code,e.num++,e.lookCard()}}),t&&"wxwork"==t?(console.log(1111111111111,"测试"),wx.qy.login({success:function(n){console.log(n,"小小测试一波"),e.code=n.code,e.num++,e.lookCard()}})):(e.num++,e.lookCard())},lookCard:function(){var e=this;if(this.num<2)return!1;var t=this;console.log("进入函数",{vcard_id:t.id,code:t.code,wx_code:t.wx_code}),t.$u.api.lookCard({vcard_id:t.id,code:t.code,wx_code:t.wx_code}).then((function(o){console.log(o,"测试"),n.setStorageSync("token",o.data.token),1==o.data.type?e.getInfos():(t.logoInfo=o.data,t.$store.commit("SetCardInfo",o.data.vcard),t.vistInfo=o.data,t.cardInfo=o.data.vcard,console.log(t.cardInfo),t.imageList=o.data.vcard.altas.map((function(n){return n.altas_path})),o.data&&o.data.vcard&&o.data.vcard.is_visited&&(t.isChange=!0))})).catch((function(n){console.log(n,"失败了")}))},getInfos:function(){var e=this;return r(o.default.mark((function t(){var i,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$u.api.cardInfo();case 2:i=t.sent,a=i.data,e.$store.commit("SetCardInfo",a),e.$store.commit("SetCustomerId",e.id),n.switchTab({url:"/pages/card/card"});case 7:case"end":return t.stop()}}),t)})))()},loginQy:function(e){var t=this;return r(o.default.mark((function i(){var a,r;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t.$u.api.login({code:e});case 2:a=o.sent,r=a.data,n.setStorageSync("token",r.token),t.getInfo();case 6:case"end":return o.stop()}}),i)})))()},getInfo:function(){var n=this;return r(o.default.mark((function e(){var t,i,a,r;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.vistInfo.vcard.id,i=n.vistInfo.customer.id,e.next=4,n.$u.api.cardInfo({id:t,customer_id:i});case 4:a=e.sent,r=a.data,n.$store.commit("SetCardInfo",r),n.cardInfo=r;case 8:case"end":return e.stop()}}),e)})))()},handleMycenter:function(){n.navigateTo({url:"/pages/myCenter/index/index"})},checkAuth:function(){var e=this;n.getSetting({success:function(n){n.authSetting["scope.userInfo"]?e.isAuth=!0:e.isAuth=!1}})},handleInfoClick:function(e){var t=this;if("self"==t.role){if("mobile"==e)return t.cardInfo[e]?n.makePhoneCall({phoneNumber:t.cardInfo[e]}):n.showToast({title:"暂无电话号码",duration:2e3,icon:"none"}),!1;n.setClipboardData({data:t.cardInfo[e],success:function(){n.showToast({title:"复制成功",duration:2e3})}})}},handlePreviewImg:function(e){n.previewImage({urls:this.imageList,current:e,indicator:"number"})},changeTel:function(){getApp().globalData.sysInfo;var e=this;this.isChange&&n.addPhoneContact({firstName:this.cardInfo.username,mobilePhoneNumber:this.cardInfo.mobile,title:this.cardInfo.position,workFaxNumber:this.cardInfo.fax,workPhoneNumber:this.cardInfo.telephone,email:this.cardInfo.email,addressPostalCode:this.cardInfo.zip_code,organization:this.cardInfo.company_name,weChatNumber:this.cardInfo.wx_num,success:function(){e.isChange=!1,e.$refs.uTips.show({title:"添加成功",type:"success",duration:"2300"})},fail:function(){e.$refs.uTips.show({title:"添加失败",type:"error",duration:"2300"})}})},getPhoneNumber:function(e){var t=this;"getPhoneNumber:ok"==e.detail.errMsg&&n.login({provider:"weixin",success:function(n){t.$u.api.changeTel({visit_log_id:t.logoInfo.visit_log_id,encrypted_data:e.detail.encryptedData,iv:e.detail.iv,customer_id:t.logoInfo.customer.id,openid:t.logoInfo.customer.openid,code:n.code}).then((function(n){n.code?(t.isChange=!0,t.getInfo(),t.$refs.uTips.show({title:"获取成功",type:"success",duration:"2300"})):t.$refs.uTips.show({title:"获取失败",type:"error",duration:"2300"})}))}})},getUserInfo:function(e,t){var o=e.detail,i=this;"getUserInfo:ok"==e.detail.errMsg&&(this.isAuth=!0,n.login({provider:"weixin",success:function(n){i.$u.api.auth({code:n.code,encrypted_data:o.encryptedData,iv:o.iv,raw_data:o.rawData,signature:o.signature})}}),"tel"==t&&(this.getTelShow=!0),"code"==t&&n.navigateTo({url:"/pages/qycode/qycode"}),"share"==t&&(this.shareShow=!0),this.show=!1)},toCode:function(){n.navigateTo({url:"/pages/code/code"})},toQycode:function(){n.navigateTo({url:"/pages/qycode/qycode"})},toPoster:function(){n.navigateTo({url:"/pages/poster/poster"})},onShareAppMessage:function(n){var e=this.cardInfo.id,t=this.cardInfo.username,o=this.cardInfo.position,i=this.cardInfo.company_name,a="你好，我是".concat(i).concat(o,"的").concat(t,",这是我的电子名片，望惠存。谢谢！"),r=this.cardInfo.posters_share?this.cardInfo.posters_share:"";return{title:a,path:"/pages/info/info?id="+e,imageUrl:r}}}};e.default=s}).call(this,t("543d")["default"])},b337:function(n,e,t){"use strict";t.r(e);var o=t("92dc"),i=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,(function(){return o[n]}))}(a);e["default"]=i.a},bd04:function(n,e,t){}},[["298c","common/runtime","common/vendor"]]]);