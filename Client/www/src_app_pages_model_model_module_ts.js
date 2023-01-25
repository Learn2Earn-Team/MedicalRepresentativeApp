"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_model_model_module_ts"],{

/***/ 7564:
/*!*****************************************************!*\
  !*** ./src/app/pages/model/model-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelPageRoutingModule": () => (/* binding */ ModelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _model_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.page */ 23);




const routes = [
    {
        path: '',
        component: _model_page__WEBPACK_IMPORTED_MODULE_0__.ModelPage
    }
];
let ModelPageRoutingModule = class ModelPageRoutingModule {
};
ModelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModelPageRoutingModule);



/***/ }),

/***/ 813:
/*!*********************************************!*\
  !*** ./src/app/pages/model/model.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelPageModule": () => (/* binding */ ModelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _model_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-routing.module */ 7564);
/* harmony import */ var _model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.page */ 23);







let ModelPageModule = class ModelPageModule {
};
ModelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _model_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModelPageRoutingModule
        ],
        declarations: [_model_page__WEBPACK_IMPORTED_MODULE_1__.ModelPage]
    })
], ModelPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_model_model_module_ts.js.map