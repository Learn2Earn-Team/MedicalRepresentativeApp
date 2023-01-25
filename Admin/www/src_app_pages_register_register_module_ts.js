"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 1557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 6690);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1557);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 6690);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 6690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 6325);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 7863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apicall.service */ 8130);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ 7465);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);








let RegisterPage = class RegisterPage {
    constructor(router, apicall, global, toast) {
        this.router = router;
        this.apicall = apicall;
        this.global = global;
        this.toast = toast;
        this.usersignupdata = { username: '', password: '', role: 'admin', status: 'admin' };
    }
    ngOnInit() {
    }
    signup() {
        console.log(this.usersignupdata);
        this.apicall.api_signup(this.usersignupdata);
        this.usersignupdata = { username: '', password: '', role: 'admin', status: 'admin' };
    }
    goToLogin() {
        this.router.navigate(['login']);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 7863:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "div {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\ndiv ion-card {\n  --background: linear-gradient(#0D65D9, #5C9DF2);\n  min-width: 350px;\n  border-radius: 10px;\n}\ndiv ion-card .logo {\n  margin-top: 4%;\n  background: transparent;\n  height: 100px;\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n}\ndiv ion-card .bg-transparent {\n  background: transparent;\n}\ndiv ion-card ion-label {\n  margin-left: 12%;\n  font-weight: 800;\n  color: white;\n}\ndiv ion-card ion-button {\n  --box-shadow: none;\n  --background: white;\n  --color: #1E6FD9;\n  width: 80%;\n  height: 50px;\n  display: flex;\n  margin: 7% auto 15px;\n  --border-radius: 100px;\n  font-weight: 800;\n}\ndiv ion-card ion-input {\n  border-bottom: 1px solid lightgrey;\n  border-radius: 25px;\n  --padding-start: 16px;\n  margin: 6px auto;\n  height: 50px;\n  width: 80%;\n  --placeholder-color: white;\n  --color: white;\n}\np {\n  text-align: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1lZGljYWwlMjBSZXByZXNlbnRhdGl2ZSUyMGFwcFxcYW1pbi1tZWRpY2FsLXJlcHJlc2VudGF0aXZlXFxzcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUo7QURHSTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RSO0FER1E7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNEWjtBRElRO0VBQ0ksdUJBQUE7QUNGWjtBREtRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNIWjtBRE1RO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDSlo7QURPUTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNMWjtBRFVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDUEoiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzBENjVEOSwgIzVDOURGMik7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJnLXRyYW5zcGFyZW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTIlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAtLWNvbG9yOiAjMUU2RkQ5O1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNyUgYXV0byAxNXB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweCBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iLCJkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmRpdiBpb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwRDY1RDksICM1QzlERjIpO1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuZGl2IGlvbi1jYXJkIC5sb2dvIHtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5kaXYgaW9uLWNhcmQgLmJnLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5kaXYgaW9uLWNhcmQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuZGl2IGlvbi1jYXJkIGlvbi1idXR0b24ge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMxRTZGRDk7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA3JSBhdXRvIDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5kaXYgaW9uLWNhcmQgaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICBtYXJnaW46IDZweCBhdXRvO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";

/***/ }),

/***/ 6325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-content>\n\n  <div>\n    <ion-card>\n      <ion-list class=\"logo\">\n        <img src=\"./../../../assets/login_logo.png\" alt=\"\">\n      </ion-list>\n      <ion-list class=\"bg-transparent\">\n        <ion-label>Username:</ion-label>\n        <ion-input  [(ngModel)]=\"this.usersignupdata.username\" type=\"text\" placeholder=\"Enter Name\"></ion-input>\n        <ion-label>Password : </ion-label>\n        <ion-input  [(ngModel)]=\"this.usersignupdata.password\" type=\"text\" placeholder=\"Enter Password\" ></ion-input>\n        <ion-button  (click)=\"signup()\">Register Now</ion-button>\n        <p>Alredy a user?</p>\n        <ion-button size=\"small\" (click)=\"goToLogin()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Login\n        </ion-button>\n      </ion-list>\n    </ion-card>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map