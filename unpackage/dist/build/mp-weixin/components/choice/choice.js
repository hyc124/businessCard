(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/choice/choice"],{"16f3":function(n,t,e){"use strict";var o=e("77c0"),u=e.n(o);u.a},"3d75":function(n,t,e){"use strict";e.r(t);var o=e("a451"),u=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=u.a},"77c0":function(n,t,e){},9274:function(n,t,e){"use strict";e.r(t);var o=e("c39d"),u=e("3d75");for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);e("16f3");var c,r=e("f0c5"),a=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,"68b829e4",null,!1,o["a"],c);t["default"]=a.exports},a451:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(e("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function i(n,t,e,o,u,i,c){try{var r=n[i](c),a=r.value}catch(f){return void e(f)}r.done?t(a):Promise.resolve(a).then(o,u)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(o,u){var c=n.apply(t,e);function r(n){i(c,o,u,r,a,"next",n)}function a(n){i(c,o,u,r,a,"throw",n)}r(void 0)}))}}var r={props:{show:{default:{onOff:!1}}},data:function(){return{Flist:[],list:[{name:"默认该分组， 下次不再提示",checked:!1}],selt:"",id:"",onOff:!1,info:{is_default_group:0,group_id:0}}},created:function(){this.getUserVcard()},watch:{getInfo:function(){return this.$store.state.info}},methods:{checkboxChange:function(n){n.value?this.info.is_default_group=1:this.info.is_default_group=0},onConfirm:function(){this.info.group_id=this.id,this.$emit("onChoice",{num:2,data:this.info})},onCancel:function(){this.$emit("onChoice",{num:1})},onSlet:function(n){this.id=n.id,this.selt=n.group_name,this.onOff=!1},getUserVcard:function(){var n=this;return c(o.default.mark((function t(){var e,u,i;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$u.api.userVcard();case 2:e=t.sent,u=e.data,i=e.code,1==i&&(n.selt=u[0].group_name,n.id=u[0].id,n.Flist=u);case 6:case"end":return t.stop()}}),t)})))()}}};t.default=r},c39d:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}));var o={uModal:function(){return e.e("uview-ui/components/u-modal/u-modal").then(e.bind(null,"c26b"))},uCheckboxGroup:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-checkbox-group/u-checkbox-group")]).then(e.bind(null,"ec1a"))},uCheckbox:function(){return e.e("uview-ui/components/u-checkbox/u-checkbox").then(e.bind(null,"e134"))}},u=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.onOff=!n.onOff})},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/choice/choice-create-component',
    {
        'components/choice/choice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9274"))
        })
    },
    [['components/choice/choice-create-component']]
]);