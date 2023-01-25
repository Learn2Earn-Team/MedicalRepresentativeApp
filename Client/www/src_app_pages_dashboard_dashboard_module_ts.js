"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 9366:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 6446);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 1659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 9366);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 6446);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 6446:
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 3890);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 7791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let DashboardPage = class DashboardPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 7791:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".refresh_button_set {\n  width: 30px;\n  height: 30px;\n  float: right;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 5px;\n  margin-right: 10px;\n}\n\n.refrsh_img {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  margin: auto;\n}\n\nh6 {\n  float: right;\n  padding-top: 22px;\n  margin-right: -26px;\n  font-weight: bolder;\n  font-size: 9px;\n  color: #0D65D9;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-title {\n  font-size: 20px;\n  color: #0D65D9;\n}\n\n.page-container {\n  padding: 18px;\n}\n\nh4 {\n  color: #0D65D9;\n  font-weight: bold;\n  margin: 0;\n  font-size: 18px;\n}\n\nh5 {\n  color: #0D65D9;\n  font-weight: bolder;\n  margin: 1;\n  font-size: 18px;\n}\n\n.list_1 {\n  width: 90%;\n  padding: 10px;\n  background: #0D65D9;\n  margin: auto;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.46);\n  border-radius: 15px;\n}\n\n.list_3 {\n  padding: 8px;\n  background: #0D65D9;\n  margin: auto;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.46);\n  border-radius: 15px;\n  margin-top: 20px;\n  color: white;\n}\n\n.list_4 {\n  padding: 12px;\n  background: #0D65D9;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.46);\n  border-radius: 15px;\n  margin-top: 20px;\n  color: white;\n}\n\n.OverView {\n  margin: 0;\n  font-size: 20px;\n  color: white;\n  font-weight: bold;\n}\n\nli {\n  margin-top: 10px;\n}\n\n.paragrah_1 {\n  text-align: center;\n  color: white;\n  font-weight: bolder;\n}\n\n.number {\n  margin: 0;\n  text-align: center;\n  color: white;\n  font-size: 13px;\n  font-weight: bolder;\n}\n\n.color_below_Average {\n  --progress-background: white;\n  background: white;\n}\n\n.progress {\n  padding: 3px;\n  border-radius: 13px;\n  width: 88%;\n  font-weight: bold;\n  margin-left: auto;\n  margin-right: auto;\n  margin: 10px;\n}\n\n.product {\n  font-weight: bolder;\n  color: white;\n  margin: 0;\n}\n\n.list_2 {\n  padding: 11px;\n  background: #0D65D9;\n  font-size: 20px;\n  margin: auto;\n  font-weight: bold;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.46);\n  border-radius: 15px;\n}\n\n.lis_3 {\n  margin-top: 10px;\n  border-radius: 8px;\n}\n\n.size_1 {\n  font-size: 18px;\n  color: #0D65D9;\n  margin-left: 5px;\n}\n\n.size_2 {\n  font-size: 12px;\n  color: #0D65D9;\n  margin: 0;\n  margin-left: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNZWRpY2FsJTIwUmVwcmVzZW50YXRpdmUlMjBhcHBcXE1lZGljYWxSZXByZXNlbnRhdGl2ZVxcc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRE9BO0VBQ0ksYUFBQTtBQ0pKOztBRE9BO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNKSjs7QURPQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDSko7O0FET0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURRQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDTEo7O0FEUUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDTEo7O0FEU0E7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFVBO0VBQ0ksZ0JBQUE7QUNQSjs7QURVQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUE7RUFDSSw0QkFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEV0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1JKOztBRFdBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ1JKOztBRFlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7QUNUSjs7QURZQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURZQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNUSjs7QURhQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDVkoiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaGVhZGVyXHJcbi5yZWZyZXNoX2J1dHRvbl9zZXQge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG59XHJcblxyXG4ucmVmcnNoX2ltZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG5oNiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjJweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTI2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBjb2xvcjogIzBENjVEOTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG5cclxufVxyXG5cclxuXHJcbi8vIGNvbnRlbnRcclxuLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbjogMTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmxpc3RfMSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwRDY1RDk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2IoMCAwIDAgLyA0NiUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbn1cclxuXHJcbi5saXN0XzMgeyBcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICMwRDY1RDk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2IoMCAwIDAgLyA0NiUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saXN0XzQge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwRDY1RDk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2IoMCAwIDAgLyA0NiUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uT3ZlclZpZXcge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcblxyXG5saSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucGFyYWdyYWhfMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4ubnVtYmVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5jb2xvcl9iZWxvd19BdmVyYWdlIHtcclxuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG59XHJcblxyXG4ubGlzdF8yIHsgXHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBENjVEOTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiKDAgMCAwIC8gNDYlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5saXNfMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uc2l6ZV8xIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuXHJcbn1cclxuXHJcbi5zaXplXzIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICMwRDY1RDk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcclxufSIsIi5yZWZyZXNoX2J1dHRvbl9zZXQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICMwRDY1RDk7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yZWZyc2hfaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5oNiB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogLTI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzBENjVEOTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMEQ2NUQ5O1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxOHB4O1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjMEQ2NUQ5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmg1IHtcbiAgY29sb3I6ICMwRDY1RDk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbjogMTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubGlzdF8xIHtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzBENjVEOTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNDYpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzdF8zIHtcbiAgcGFkZGluZzogOHB4O1xuICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xuICBtYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40Nik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpc3RfNCB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMwRDY1RDk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40Nik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLk92ZXJWaWV3IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmxpIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBhcmFncmFoXzEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLm51bWJlciB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmNvbG9yX2JlbG93X0F2ZXJhZ2Uge1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnByb2dyZXNzIHtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICB3aWR0aDogODglO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ucHJvZHVjdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGlzdF8yIHtcbiAgcGFkZGluZzogMTFweDtcbiAgYmFja2dyb3VuZDogIzBENjVEOTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNDYpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubGlzXzMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zaXplXzEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMEQ2NUQ5O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uc2l6ZV8yIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzBENjVEOTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMTNweDtcbn0iXX0= */";

/***/ }),

/***/ 3890:
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<!-- header start -->\r\n<!-- by Abdullah -->\r\n<ion-header>\r\n    <ion-toolbar mode=\"ios\">\r\n        <!-- <ion-list class=\"refresh_button_set\">\r\n            <img class=\"refrsh_img\" src=\"../../../assets/refresh-icon.png\" alt=\"\">\r\n        </ion-list>\r\n        <h6>Sync</h6> -->\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button mode=\"md\" default-href=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            Dashboard\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<!-- header End -->\r\n\r\n<!-- \r\nion-content  start  -->\r\n<ion-content>\r\n    <div class=\"page-container\">\r\n        <h4>Current Month: September , 2020</h4>\r\n        <h5>Current Date : 10/ 12 / 2002</h5>\r\n    </div>\r\n\r\n    <div class=\"page-container\">\r\n\r\n \r\n        <ion-row>\r\n            <ion-col size=\"12\" size-sm=\"12\" size-md=\"8\" size-lg=\"8\">\r\n                <ion-row>\r\n                    <!-- total doctors -->\r\n                    <ion-col size=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\">\r\n                        <ion-list class=\"list_1\">\r\n                            <p class=\"paragrah_1\">Doctor Visited this month</p>\r\n                            <h2 class=\"number\"> 40 / 100 </h2>\r\n                            <ion-progress-bar class=\"progress color_below_Average\" value=\"0.3\"></ion-progress-bar>\r\n                        </ion-list>\r\n                    </ion-col>\r\n                    <!-- total call -->\r\n                    <ion-col size=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\">\r\n                        <ion-list class=\"list_1\">\r\n                            <p class=\"paragrah_1\">Calls Covered this month</p>\r\n                            <h2 class=\"number\"> 70 / 200 </h2>\r\n                            <ion-progress-bar class=\"progress color_below_Average\" value=\"0.5\"></ion-progress-bar>\r\n                        </ion-list>\r\n                    </ion-col>\r\n                    <!-- total working days -->\r\n                    <ion-col size=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\">\r\n                        <ion-list class=\"list_1\">\r\n                            <p class=\"paragrah_1\">Working Days of month</p>\r\n                            <h2 class=\"number\"> 11 / 24 </h2>\r\n                            <ion-progress-bar class=\"progress color_below_Average\" value=\"0.6\"></ion-progress-bar>\r\n                        </ion-list>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <!-- Month Overview -->\r\n                    <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                        <ion-list class=\"list_3\">\r\n                            <p class=\"OverView\">Month OverView</p>\r\n                            <li>Total Visits : 20</li>\r\n                            <li>Pannled Visits : 20</li>\r\n                            <li>Unplanned Visits : 20</li>\r\n                            <li>Missed Calls : 20</li>\r\n                            <li>Total Calls : 20</li>\r\n                        </ion-list>\r\n                    </ion-col>\r\n                    <!-- most visited doctor -->\r\n                    <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\r\n                        <ion-list class=\"list_4\">\r\n                            <p class=\"OverView\">Most Visited</p>\r\n                            <ion-list class=\"lis_3\">\r\n        \r\n                                <span class=\"size_1\">Doctor Name</span>\r\n                            </ion-list>\r\n        \r\n                            <ion-list class=\"lis_3\">\r\n                                <span class=\"size_1\">Doctor Name</span><br>\r\n                            </ion-list>\r\n        \r\n        \r\n                            <ion-list class=\"lis_3\">\r\n                                <span class=\"size_1\">Doctor Name</span><br>\r\n                            </ion-list>\r\n                        </ion-list>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n            </ion-col>\r\n             <!-- product names -->\r\n            <ion-col  size=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\">\r\n                <ion-list class=\"list_2\">\r\n                    <p class=\"product\">Products Avaiable:</p>\r\n                    <ion-list class=\"lis_3\">\r\n                        <span class=\"size_1\">Comapany Name</span><br>\r\n                        <p class=\"size_2\">Medicine Name </p>\r\n                    </ion-list>\r\n\r\n                    <ion-list class=\"lis_3\">\r\n                        <span class=\"size_1\">Comapany Name</span><br>\r\n                        <span class=\"size_2\">Medicine Name </span>\r\n                    </ion-list>\r\n\r\n                    <ion-list class=\"lis_3\">\r\n                        <span class=\"size_1\">Comapany Name</span><br>\r\n                        <span class=\"size_2\">Medicine Name </span>\r\n                    </ion-list>\r\n\r\n                    <ion-list class=\"lis_3\">\r\n                        <span class=\"size_1\">Comapany Name</span><br>\r\n                        <span class=\"size_2\">Medicine Name </span>\r\n                    </ion-list>\r\n                </ion-list>\r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map