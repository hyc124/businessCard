(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0d5c":function(t,n,e){"use strict";(function(t){e("4ee8");o(e("66fd"));var n=o(e("5c68"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"28a5":function(t,n,e){"use strict";var o=e("513c"),a=e.n(o);a.a},"35ab":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,o,a,r,u){try{var c=t[r](u),i=c.value}catch(s){return void e(s)}c.done?n(i):Promise.resolve(i).then(o,a)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(o,a){var u=t.apply(n,e);function c(t){r(u,o,a,c,i,"next",t)}function i(t){r(u,o,a,c,i,"throw",t)}c(void 0)}))}}var c={data:function(){return{show:!1,status:1}},created:function(){t.showLoading({title:"授权中..."}),this.wxLogin()},methods:{wxLogin:function(){var n=this,e=getApp().globalData.sysInfo.environment;e&&"wxwork"==e?wx.qy.login({success:function(t){n.login(t.code)}}):t.redirectTo({url:"/pages/info/info"})},login:function(n){var e=this;return u(o.default.mark((function a(){var r,u,c;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return console.log(n),o.prev=1,o.next=4,e.$u.api.login({code:n});case 4:r=o.sent,u=r.data,c=r.code,1==c?(t.setStorageSync("token",u.token),u.is_vcard?(e.getInfo(),e.status=u.status):t.redirectTo({url:"/pages/guide/guide"})):2==c?t.redirectTo({url:"/pages/info/info"}):(e.show=!0,setTimeout((function(){e.$refs.uModal.clearLoading()}),1e3)),o.next=13;break;case 10:o.prev=10,o.t0=o["catch"](1),e.show=!0;case 13:case"end":return o.stop()}}),a,null,[[1,10]])})))()},getInfo:function(){var n=this;return u(o.default.mark((function e(){var a,r;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$u.api.cardInfo();case 2:a=e.sent,r=a.data,n.$store.commit("SetCardInfo",r),console.log(n.status,"status"),1==n.status?t.switchTab({url:"/pages/card/card"}):t.navigateTo({url:"/pages/myCenter/edit/edit?type=4&state=0"});case 7:case"end":return e.stop()}}),e)})))()},confirm:function(){this.wxLogin()}},onLoad:function(t){console.log(t)}};n.default=c}).call(this,e("543d")["default"])},"513c":function(t,n,e){},"5c68":function(t,n,e){"use strict";e.r(n);var o=e("c74f"),a=e("899b");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("28a5");var u,c=e("f0c5"),i=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"6b3ea0bd",null,!1,o["a"],u);n["default"]=i.exports},"899b":function(t,n,e){"use strict";e.r(n);var o=e("35ab"),a=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n["default"]=a.a},c74f:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return o}));var o={uModal:function(){return e.e("uview-ui/components/u-modal/u-modal").then(e.bind(null,"c26b"))}},a=function(){var t=this,n=t.$createElement;t._self._c},r=[]}},[["0d5c","common/runtime","common/vendor"]]]);