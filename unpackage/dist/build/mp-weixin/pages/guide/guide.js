(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/guide/guide"],{"03fc":function(t,e,n){"use strict";(function(t){n("4ee8");i(n("66fd"));var e=i(n("e11d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"1f03":function(t,e,n){},2019:function(t,e,n){"use strict";var i=n("1f03"),r=n.n(i);r.a},"7ac1":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniGrid:function(){return n.e("components/uni-grid/uni-grid").then(n.bind(null,"4d3c"))},uniGridItem:function(){return n.e("components/uni-grid-item/uni-grid-item").then(n.bind(null,"76a2"))},uModal:function(){return n.e("uview-ui/components/u-modal/u-modal").then(n.bind(null,"c26b"))}},r=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.guide=!1},t.e1=function(e){t.guide=!1},t.e2=function(e){t.remind=!1})},a=[]},b271:function(t,e,n){"use strict";n.r(e);var i=n("f9de"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},e11d:function(t,e,n){"use strict";n.r(e);var i=n("7ac1"),r=n("b271");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("2019");var u,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"781fab38",null,!1,i["a"],u);e["default"]=s.exports},f9de:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a")),r=n("d097");function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,i,r,a,u){try{var o=t[a](u),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(i,r)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function o(t){u(a,i,r,o,s,"next",t)}function s(t){u(a,i,r,o,s,"throw",t)}o(void 0)}))}}var s={data:function(){return{banner:[{url:"../../static/svg/guide1.svg",text:"多渠道分享名片，轻松拓展人脉"},{url:"../../static/svg/guide2.svg",text:"网络、纸媒都可以使用，低成本获客"},{url:"../../static/svg/guide3.svg",text:"海量模板，定制高颜值个性名片"}],action:[{url:"../../static/svg/action1.svg",text:"手动创建"},{url:"../../static/svg/action2.svg",text:"一键创建"},{url:"../../static/svg/action3.svg",text:"拍名片"}],indicatorDots:!1,autoplay:!1,interval:3e3,duration:500,swiperCurrent:0,guideType:"create",guide:!0,progress:0,isCreated:!1,times:3,time:"",isCread:0,remind:!1}},onLoad:function(t){this.isCread=t.isCread;var e=this.$store.state.isNoGuide;e&&(this.guide=!1)},methods:{onGocard:function(){(0,r.OCRCard)("",1,0,this.callBack)},swiperChange:function(t){this.swiperCurrent=t.detail.current},handleGetInfo:function(){var e=this;return o(i.default.mark((function n(){var r,a,u,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.isCreated=!0,r=e,a=setInterval((function(){r.progress++,r.progress>=100&&clearInterval(a)}),10),n.next=5,e.$u.api.creadCard({type:1,status:3});case 5:u=n.sent,o=u.code,o?(r.$store.dispatch("GetCardInfo"),e.guideType="done",clearInterval(a),e.time=setInterval((function(){e.times--,0==e.times&&t.navigateTo({url:"/pages/myCenter/edit/edit?type=4&state=0&onOff=1"})}),1e3)):e.guideType="error";case 8:case"end":return n.stop()}}),n)})))()},handleAction:function(e){switch(e){case 0:t.navigateTo({url:"/pages/myCenter/edit/edit?type=2&state=0&onOff=1"}),this.$store.commit("SetGuide",!0);break;case 1:this.guideType="create",this.guide=!0;break;case 2:(0,r.OCRCard)("",1,0,this.callBack);break}},callBack:function(t){this.remind=t},toLearning:function(){t.navigateTo({url:"/pages/learning/learning"}),this.$store.commit("SetGuide",!0)},toCreadCard:function(){t.navigateTo({url:"/pages/myCenter/edit/edit?type=2&state=0&onOff=1"}),this.$store.commit("SetGuide",!0)}},onShow:function(){clearInterval(this.time),this.time=0,this.guideType="create",this.isCreated=!1,this.progress=0}};e.default=s}).call(this,n("543d")["default"])}},[["03fc","common/runtime","common/vendor"]]]);