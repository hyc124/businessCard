(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/friend/friend"],{

/***/ 136:
/*!******************************************************************!*\
  !*** D:/businessCard/main.js?{"page":"pages%2Ffriend%2Ffriend"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _friend = _interopRequireDefault(__webpack_require__(/*! ./pages/friend/friend.vue */ 137));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_friend.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 137:
/*!***********************************************!*\
  !*** D:/businessCard/pages/friend/friend.vue ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friend.vue?vue&type=template&id=3c667ff4&scoped=true& */ 138);
/* harmony import */ var _friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friend.vue?vue&type=script&lang=js& */ 140);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _friend_vue_vue_type_style_index_0_id_3c667ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friend.vue?vue&type=style&index=0&id=3c667ff4&lang=scss&scoped=true& */ 142);
/* harmony import */ var _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c667ff4",
  null,
  false,
  _friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/friend/friend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 138:
/*!******************************************************************************************!*\
  !*** D:/businessCard/pages/friend/friend.vue?vue&type=template&id=3c667ff4&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./friend.vue?vue&type=template&id=3c667ff4&scoped=true& */ 139);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_template_id_3c667ff4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 139:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/businessCard/pages/friend/friend.vue?vue&type=template&id=3c667ff4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uNavbar: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-navbar/u-navbar */ "uview-ui/components/u-navbar/u-navbar").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-navbar/u-navbar.vue */ 274))
  },
  uAvatar: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-avatar/u-avatar */ "uview-ui/components/u-avatar/u-avatar").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-avatar/u-avatar.vue */ 211))
  },
  friend: function() {
    return __webpack_require__.e(/*! import() | components/friend/friend */ "components/friend/friend").then(__webpack_require__.bind(null, /*! @/components/friend/friend.vue */ 362))
  },
  uLoadmore: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-loadmore/u-loadmore */ "uview-ui/components/u-loadmore/u-loadmore").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-loadmore/u-loadmore.vue */ 383))
  },
  tips: function() {
    return __webpack_require__.e(/*! import() | components/tips/tips */ "components/tips/tips").then(__webpack_require__.bind(null, /*! @/components/tips/tips.vue */ 355))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 140:
/*!************************************************************************!*\
  !*** D:/businessCard/pages/friend/friend.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./friend.vue?vue&type=script&lang=js& */ 141);
/* harmony import */ var _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 141:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/businessCard/pages/friend/friend.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 38));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var friend = function friend() {__webpack_require__.e(/*! require.ensure | components/friend/friend */ "components/friend/friend").then((function () {return resolve(__webpack_require__(/*! ../../components/friend/friend */ 362));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var tips = function tips() {__webpack_require__.e(/*! require.ensure | components/tips/tips */ "components/tips/tips").then((function () {return resolve(__webpack_require__(/*! ../../components/tips/tips */ 355));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =





























{
  data: function data() {
    return {
      list: [],
      status: 'loadmore',
      pageNum: 1,
      loadText: {
        loadmore: '点击或上拉加载更多',
        loading: '努力加载中。。。',
        nomore: '没有更多' },

      url: '',
      onOff: true,
      seeImg: true // 点图片还是切换页面
    };
  },
  components: {
    friend: friend,
    tips: tips },

  computed: {
    // 在vuex里拿到用户数据
    cardInfo: function cardInfo() {
      return this.$store.state.cardInfo;
    } },

  methods: {
    onclose: function onclose() {
      this.onOff = true;
    },
    onLoads: function onLoads() {
      this.pageNum++;
      this.getFriends();
    },
    handleMycenter: function handleMycenter() {
      uni.navigateTo({
        url: "/pages/myCenter/index/index" });

    },
    onImgSee: function onImgSee() {
      this.seeImg = false;
    },
    getFriends: function getFriends() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _yield$_this$$u$api$f, data, code, _this$list;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                _this.status = 'loading';_context.next = 3;return (



                  _this.$u.api.friends({
                    page: _this.pageNum,
                    limit: 10 }));case 3:_yield$_this$$u$api$f = _context.sent;data = _yield$_this$$u$api$f.data;code = _yield$_this$$u$api$f.code;

                if (code == 1) {
                  (_this$list = _this.list).push.apply(_this$list, _toConsumableArray(data.list));
                  if (_this.pageNum * 10 > data.count) {
                    _this.status = 'nomore';
                  } else {
                    _this.status = 'loadmore';
                  }
                  _this.url = data.bg_url;
                }case 7:case "end":return _context.stop();}}}, _callee);}))();
    },
    onReachBottom: function onReachBottom() {
      this.pageNum++;
      this.getFriends();
    } },

  onHide: function onHide() {
    console.log(this.seeImg);
    if (this.seeImg) {
      this.list = [];
      this.pageNum = 1;
    }

  },
  onShow: function onShow() {
    console.log(this.seeImg);
    if (this.seeImg) {
      this.getFriends();
      this.onOff = this.cardInfo.is_friends;
    } else {
      this.seeImg = true;
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 142:
/*!*********************************************************************************************************!*\
  !*** D:/businessCard/pages/friend/friend.vue?vue&type=style&index=0&id=3c667ff4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_style_index_0_id_3c667ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../ChromeCoreDownloads/HBuilderX.2.9.8.20201110/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./friend.vue?vue&type=style&index=0&id=3c667ff4&lang=scss&scoped=true& */ 143);
/* harmony import */ var _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_style_index_0_id_3c667ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_style_index_0_id_3c667ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_style_index_0_id_3c667ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_style_index_0_id_3c667ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ChromeCoreDownloads_HBuilderX_2_9_8_20201110_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_friend_vue_vue_type_style_index_0_id_3c667ff4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 143:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/businessCard/pages/friend/friend.vue?vue&type=style&index=0&id=3c667ff4&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[136,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/friend/friend.js.map