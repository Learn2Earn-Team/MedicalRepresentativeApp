"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/toast/toast.service */ 6791);
/* harmony import */ var src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/apicall/apicall.service */ 4985);
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/global/global.service */ 6925);








let LoginPage = class LoginPage {
    constructor(router, toast, apicall, global) {
        this.router = router;
        this.toast = toast;
        this.apicall = apicall;
        this.global = global;
        this.user = { login_id: '', password: '', status: 'active' };
    }
    ngOnInit() {
    }
    login() {
        console.log(this.user);
        this.apicall.api_login(this.user);
        this.user = { login_id: '', password: '', status: 'active' };
    }
    ShowHidePassword(ele, eye) {
        if (ele.type === 'password') {
            ele.type = 'text';
            eye.name = 'eye';
        }
        else {
            ele.type = 'password';
            eye.name = 'eye-off';
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_core_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "div {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\ndiv ion-card {\n  --background: linear-gradient(#0D65D9, #5C9DF2);\n  min-width: 300px;\n  border-radius: 10px;\n}\ndiv ion-card .logo {\n  margin-top: 4%;\n  background: transparent;\n  height: 100px;\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n}\ndiv ion-card .bg-transparent {\n  background: transparent;\n}\ndiv ion-card ion-label {\n  margin-left: 12%;\n  font-weight: 800;\n  color: white;\n}\ndiv ion-card ion-button {\n  --box-shadow: none;\n  --background: white;\n  --color: #1E6FD9;\n  width: 80%;\n  height: 50px;\n  display: flex;\n  margin: 7% auto 15px;\n  --border-radius: 100px;\n  font-weight: 800;\n}\ndiv ion-card ion-item {\n  --background: transparent;\n  width: 80%;\n  border: 1px solid lightgrey;\n  border-radius: 50px;\n  margin: 6px auto;\n}\ndiv ion-card ion-input {\n  height: 50px;\n  --placeholder-color: white;\n  --color: white;\n}\ndiv ion-card ion-icon {\n  margin-top: auto;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1lZGljYWwlMjBSZXByZXNlbnRhdGl2ZSUyMGFwcFxcTWVkaWNhbFJlcHJlc2VudGF0aXZlXFxzcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQVI7QURHUTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RaO0FER1k7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNEaEI7QURJWTtFQUNJLHVCQUFBO0FDRmhCO0FES1k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0hoQjtBRE1ZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDSmhCO0FET1k7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNMaEI7QURRWTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNOaEI7QURRWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ05oQiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgZGl2e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwRDY1RDksICM1QzlERjIpO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJnLXRyYW5zcGFyZW50IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEyJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC0tY29sb3I6ICMxRTZGRDk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNyUgYXV0byAxNXB4O1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA2cHggYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4iLCJkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmRpdiBpb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwRDY1RDksICM1QzlERjIpO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuZGl2IGlvbi1jYXJkIC5sb2dvIHtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5kaXYgaW9uLWNhcmQgLmJnLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5kaXYgaW9uLWNhcmQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuZGl2IGlvbi1jYXJkIGlvbi1idXR0b24ge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMxRTZGRDk7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA3JSBhdXRvIDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5kaXYgaW9uLWNhcmQgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogODAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbjogNnB4IGF1dG87XG59XG5kaXYgaW9uLWNhcmQgaW9uLWlucHV0IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5kaXYgaW9uLWNhcmQgaW9uLWljb24ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content>\r\n  <div>\r\n    <ion-card>\r\n      <ion-list class=\"logo\">\r\n        <img src=\"./../../../assets/Orisun LOGO 1.png\" alt=\"\">\r\n      </ion-list>\r\n      <ion-list class=\"bg-transparent\">\r\n        <ion-label>Login ID:</ion-label>\r\n      <ion-item lines=\"none\">\r\n        <ion-input  [(ngModel)]=\"this.user.login_id\" type=\"text\" placeholder=\"Enter Name\"></ion-input>\r\n      </ion-item>\r\n        <ion-label>Password: </ion-label>\r\n        <ion-item lines=\"none\">\r\n          <ion-input  [(ngModel)]=\"this.user.password\" type=\"password\" placeholder=\"Enter Password\" #password></ion-input>\r\n          <ion-icon slot=\"end\" name=\"eye-off\" #eye (click)=\"ShowHidePassword(password,eye)\"></ion-icon>\r\n        </ion-item>\r\n        <ion-button  (click)=\"login()\">Login</ion-button>\r\n      </ion-list>\r\n    </ion-card>\r\n  </div>\r\n  \r\n\r\n</ion-content> \r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map