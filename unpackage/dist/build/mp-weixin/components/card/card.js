(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/card/card"],{"2f0f":function(n,t,o){"use strict";var e=o("2f85"),i=o.n(e);i.a},"2f85":function(n,t,o){},"8d57":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={props:["info","isMyCard","auth","navHeight","onOff"],data:function(){return{showInfo:!1,cardInfo:{username:"",position:"",company:"",company_address:"",telephone:"",fax:"",mobile:"",post:"",email:"",zip_code:"",company_name:"",qy_code:"",main_department:""},loading:!0,bgColor:"#fffff",elColor:"#71B747"}},computed:{imgSrc:function(){return"../../static/svg/bigimg".concat(this.cardInfo.style||2,".svg")},longImgSrc:function(){return"../../static/svg/longimg".concat(this.cardInfo.style||2,".svg")}},watch:{info:{handler:function(n){this.loading=!1,this.cardInfo=n},immediate:!0,deep:!0}},methods:{toQrcode:function(t){n.navigateTo({url:"../../pages/qycode/qycode"}),this.showInfo=!1},handlerShowCard:function(t){1!=this.onOff&&2!=this.onOff?this.isMyCard?n.navigateTo({url:"/pages/card/card"}):this.showInfo=!0:2==this.onOff&&this.$emit("onSeeCard",t.id)}}};t.default=o}).call(this,o("543d")["default"])},b475:function(n,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return e}));var e={uPopup:function(){return o.e("uview-ui/components/u-popup/u-popup").then(o.bind(null,"2200"))},uSkeleton:function(){return o.e("uview-ui/components/u-skeleton/u-skeleton").then(o.bind(null,"4fdf"))}},i=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.showInfo=!1})},a=[]},e55a:function(n,t,o){"use strict";o.r(t);var e=o("b475"),i=o("ea9d");for(var a in i)"default"!==a&&function(n){o.d(t,n,(function(){return i[n]}))}(a);o("2f0f");var u,f=o("f0c5"),c=Object(f["a"])(i["default"],e["b"],e["c"],!1,null,"1d149615",null,!1,e["a"],u);t["default"]=c.exports},ea9d:function(n,t,o){"use strict";o.r(t);var e=o("8d57"),i=o.n(e);for(var a in e)"default"!==a&&function(n){o.d(t,n,(function(){return e[n]}))}(a);t["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/card/card-create-component',
    {
        'components/card/card-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e55a"))
        })
    },
    [['components/card/card-create-component']]
]);