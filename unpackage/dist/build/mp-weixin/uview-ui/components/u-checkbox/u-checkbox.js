(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-checkbox/u-checkbox"],{1146:function(t,e,i){"use strict";i.r(e);var n=i("db43"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"37bb":function(t,e,i){"use strict";var n=i("7cda"),a=i.n(n);a.a},"7cda":function(t,e,i){},a7a8:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uIcon:function(){return i.e("uview-ui/components/u-icon/u-icon").then(i.bind(null,"5fa3"))}},a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__get_style([t.checkboxStyle])),n=t.__get_style([t.iconStyle]),a=t.$u.addUnit(t.labelSize);t.$mp.data=Object.assign({},{$root:{s0:i,s1:n,g0:a}})},s=[]},db43:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var t={};return this.elActiveColor&&this.value&&!this.isDisabled&&(t.borderColor=this.elActiveColor,t.backgroundColor=this.elActiveColor),t.width=this.$u.addUnit(this.checkboxSize),t.height=this.$u.addUnit(this.checkboxSize),t},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var t=[];return t.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&t.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&t.push("u-checkbox__icon-wrap--disabled--checked"),t.join(" ")},checkboxStyle:function(){var t={};return this.parent&&this.parent.width&&(t.width=this.parent.width,t.float="left"),this.parent&&this.parent.wrap&&(t.width="100%"),t}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var t=this;this.$emit("change",{value:!this.value,name:this.name}),setTimeout((function(){t.parent&&t.parent.emitEvent&&t.parent.emitEvent()}),80)},setValue:function(){var t=0;if(this.parent&&this.parent.children&&this.parent.children.map((function(e){e.value&&t++})),1==this.value)this.emitEvent(),this.$emit("input",!this.value);else{if(this.parent&&t>=this.parent.max)return this.$u.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent(),this.$emit("input",!this.value)}}}};e.default=n},e134:function(t,e,i){"use strict";i.r(e);var n=i("a7a8"),a=i("1146");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("37bb");var r,u=i("f0c5"),o=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"6896f537",null,!1,n["a"],r);e["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-checkbox/u-checkbox-create-component',
    {
        'uview-ui/components/u-checkbox/u-checkbox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e134"))
        })
    },
    [['uview-ui/components/u-checkbox/u-checkbox-create-component']]
]);
