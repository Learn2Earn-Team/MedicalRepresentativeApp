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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apicall.service */ 8130);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ 7465);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);









let LoginPage = class LoginPage {
    constructor(router, apicall, global, toast, menuCtrl, loadingCtrl) {
        this.router = router;
        this.apicall = apicall;
        this.global = global;
        this.toast = toast;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = { username: '', password: '' };
        this.menuCtrl.enable(false);
    }
    ngAfterViewInit() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
    }
    ngOnDestroy() {
        this.menuCtrl.enable(true);
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
    login() {
        console.log(this.user);
        this.apicall.api_login(this.user);
        this.user = { username: '', password: '' };
    }
    goToRegister() {
        this.router.navigate(['register']);
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...',
                duration: 1000,
                spinner: 'circles',
            });
            loading.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

module.exports = "div {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\ndiv ion-card {\n  --background: linear-gradient(#0D65D9, #5C9DF2);\n  min-width: 350px;\n  border-radius: 10px;\n}\ndiv ion-card .logo {\n  margin-top: 4%;\n  background: transparent;\n  height: 100px;\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n}\ndiv ion-card .bg-transparent {\n  background: transparent;\n}\ndiv ion-card ion-item {\n  --background: transparent;\n  width: 80%;\n  border: 1px solid lightgrey;\n  border-radius: 50px;\n  margin: 6px auto;\n}\ndiv ion-card ion-label {\n  margin-left: 12%;\n  font-weight: 800;\n  color: white;\n}\ndiv ion-card ion-button {\n  --box-shadow: none;\n  --background: white;\n  --color: #1E6FD9;\n  width: 80%;\n  height: 50px;\n  display: flex;\n  margin: 7% auto 15px;\n  --border-radius: 100px;\n  font-weight: 800;\n}\ndiv ion-card ion-input {\n  --padding-start: 16px;\n  --placeholder-color: white;\n  --color: white;\n}\ndiv ion-card ion-icon {\n  margin-top: auto;\n  color: white;\n}\np {\n  text-align: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1lZGljYWwlMjBSZXByZXNlbnRhdGl2ZSUyMGFwcFxcYW1pbi1tZWRpY2FsLXJlcHJlc2VudGF0aXZlXFxzcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUo7QURHSTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RSO0FER1E7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNEWjtBRElRO0VBQ0ksdUJBQUE7QUNGWjtBREtRO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSFo7QURNUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSlo7QURPUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0xaO0FEUVE7RUFHSSxxQkFBQTtFQUlBLDBCQUFBO0VBQ0EsY0FBQTtBQ1haO0FEY1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNaWjtBRGlCQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ2RKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgICAgICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwRDY1RDksICM1QzlERjIpO1xyXG4gICAgICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iZy10cmFuc3BhcmVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHggYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMiU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIC0tY29sb3I6ICMxRTZGRDk7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luOiA3JSBhdXRvIDE1cHg7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbjogNnB4IGF1dG87XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgLy8gd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9IFxyXG5cclxuICAgIH1cclxufVxyXG5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59IiwiZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5kaXYgaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMEQ2NUQ5LCAjNUM5REYyKTtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmRpdiBpb24tY2FyZCAubG9nbyB7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuZGl2IGlvbi1jYXJkIC5iZy10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuZGl2IGlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW46IDZweCBhdXRvO1xufVxuZGl2IGlvbi1jYXJkIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMiU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmRpdiBpb24tY2FyZCBpb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiAjMUU2RkQ5O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogNyUgYXV0byAxNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuZGl2IGlvbi1jYXJkIGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogd2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuZGl2IGlvbi1jYXJkIGlvbi1pY29uIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div>\n    <ion-card>\n      <ion-list class=\"logo\">\n        <img src=\"./../../../assets/login_logo.png\" alt=\"\">\n      </ion-list>\n      <ion-list class=\"bg-transparent\">\n        <ion-label position=\"stacked\">Username:</ion-label>\n      <ion-item lines=\"none\">\n        <ion-input  [(ngModel)]=\"this.user.username\" type=\"text\" placeholder=\"Enter Name\"></ion-input>\n      </ion-item>\n      <ion-label >Password : </ion-label>\n     <ion-item lines=\"none\">\n      <ion-input  [(ngModel)]=\"this.user.password\" type=\"password\" placeholder=\"Enter Password\" #password></ion-input>\n      <ion-icon slot=\"end\" name=\"eye-off\" #eye (click)=\"ShowHidePassword(password,eye)\"></ion-icon>\n     </ion-item>\n        <ion-button  (click)=\"login()\">Login</ion-button>\n      </ion-list>\n    </ion-card>\n  </div>\n\n  \n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map