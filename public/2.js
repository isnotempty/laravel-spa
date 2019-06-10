(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'hero',
  name: 'Login',
  data: function data() {
    return {
      email: '',
      password: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2FXSL%2FTransform&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2FXSL%2FTransform& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "card",
        {
          attrs: {
            title: "Test title",
            subtitle: "test subtitle",
            padding: ""
          },
          scopedSlots: _vm._u([
            {
              key: "footer",
              fn: function() {
                return [
                  _c("section", { staticClass: "level padding" }, [
                    _c("div", { staticClass: "level-left" }, [
                      _c("label", { staticClass: "checkbox" }, [
                        _c("input", { attrs: { type: "checkbox" } }),
                        _vm._v("\n            Remember me\n          ")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "level-right" }, [
                      _c(
                        "button",
                        { staticClass: "button is-success is-small" },
                        [_vm._v("login")]
                      )
                    ])
                  ])
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _c("section", { staticClass: "bg-gray" }, [
            _c("div", { staticClass: "padding" }, [
              _c("div", { staticClass: "field" }, [
                _c(
                  "div",
                  { staticClass: "control has-icons-left has-icons-right" },
                  [
                    _c("input", { staticClass: "input" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "icon is-small is-left" }, [
                      _c("i", { staticClass: "mdi mdi-email" })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "help is-danger" }, [_vm._v("error")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c(
                  "div",
                  { staticClass: "control has-icons-left has-icons-right" },
                  [
                    _c("input", { staticClass: "input" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "icon is-small is-left" }, [
                      _c("i", { staticClass: "mdi mdi-fingerprint" })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "help is-danger" }, [_vm._v("error")])
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/auth/login.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/auth/login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_6517b581_xmlns_3Av_slot_http_3A_2F_2Fwww_w3_org_2F1999_2FXSL_2FTransform___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=6517b581&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2FXSL%2FTransform& */ "./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2FXSL%2FTransform&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_6517b581_xmlns_3Av_slot_http_3A_2F_2Fwww_w3_org_2F1999_2FXSL_2FTransform___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_6517b581_xmlns_3Av_slot_http_3A_2F_2Fwww_w3_org_2F1999_2FXSL_2FTransform___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/auth/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2FXSL%2FTransform&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2FXSL%2FTransform& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6517b581_xmlns_3Av_slot_http_3A_2F_2Fwww_w3_org_2F1999_2FXSL_2FTransform___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=6517b581&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2FXSL%2FTransform& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&xmlns%3Av-slot=http%3A%2F%2Fwww.w3.org%2F1999%2FXSL%2FTransform&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6517b581_xmlns_3Av_slot_http_3A_2F_2Fwww_w3_org_2F1999_2FXSL_2FTransform___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6517b581_xmlns_3Av_slot_http_3A_2F_2Fwww_w3_org_2F1999_2FXSL_2FTransform___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);