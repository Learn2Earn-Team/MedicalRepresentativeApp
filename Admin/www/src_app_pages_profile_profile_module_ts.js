"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4629);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 7364);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 2581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apicall.service */ 8130);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ 7465);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);









let ProfilePage = class ProfilePage {
    constructor(menuCtrl, router, apicall, global, toast) {
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.apicall = apicall;
        this.global = global;
        this.toast = toast;
        this.sowButton = false;
        this.enableInput = true;
        this.changeIcon = true;
        this.user = { u_id: '', username: '', password: '' };
        this.menuCtrl.enable(true);
    }
    ngOnInit() {
        this.menuCtrl.enable(true);
        this.global.AdminprofileData.subscribe(res => {
            this.user = res.user;
            console.log(res);
            console.log(this.user);
        });
    }
    ngAfterViewInit() {
        console.log('AfterViewInit');
        this.menuCtrl.enable(true);
    }
    ngOnDestroy() {
        console.log('Destroy');
        this.menuCtrl.enable(true);
    }
    enable() {
        this.changeIcon = !this.changeIcon;
        this.enableInput = !this.enableInput;
        this.sowButton = !this.sowButton;
    }
    login() {
        console.log(this.user);
        this.apicall.api_updateadminProfile(this.user);
    }
    goToRegister() {
        this.router.navigate(['register']);
    }
    backtomenu() {
        this.router.navigate(['menu']);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 2581:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: var(--ion-color-primary);\n}\n\ndiv {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\ndiv ion-card {\n  --background: linear-gradient(#0D65D9, #5C9DF2);\n  min-width: 350px;\n  border-radius: 10px;\n  height: 400px;\n}\n\ndiv ion-card .logo {\n  margin-top: 4%;\n  background: transparent;\n  height: 100px;\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\ndiv ion-card .bg-transparent {\n  background: transparent;\n}\n\ndiv ion-card ion-label {\n  margin-left: 12%;\n  font-weight: 800;\n  color: white;\n}\n\ndiv ion-card ion-button {\n  --box-shadow: none;\n  --background: white;\n  --color: #1E6FD9;\n  width: 80%;\n  height: 50px;\n  display: flex;\n  margin: 7% auto 15px;\n  --border-radius: 100px;\n  font-weight: 800;\n}\n\ndiv ion-card ion-input {\n  border-bottom: 1px solid lightgrey;\n  border-radius: 25px;\n  --padding-start: 16px;\n  margin: 6px auto;\n  height: 50px;\n  width: 80%;\n  --placeholder-color: white;\n  --color: white;\n}\n\np {\n  text-align: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWVkaWNhbCUyMFJlcHJlc2VudGF0aXZlJTIwYXBwXFxhbWluLW1lZGljYWwtcmVwcmVzZW50YXRpdmVcXHNyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVJO0VBQ0ksK0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0FSOztBREVRO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQVo7O0FER1E7RUFDSSx1QkFBQTtBQ0RaOztBRElRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNGWjs7QURLUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0haOztBRE1RO0VBQ0ksa0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ0paOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDTkoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbmRpdntcclxuICAgICAgICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwRDY1RDksICM1QzlERjIpO1xyXG4gICAgICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG5cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJnLXRyYW5zcGFyZW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTIlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAtLWNvbG9yOiAjMUU2RkQ5O1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNyUgYXV0byAxNXB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweCBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iLCJpb24tdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5kaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmRpdiBpb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwRDY1RDksICM1QzlERjIpO1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuZGl2IGlvbi1jYXJkIC5sb2dvIHtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5kaXYgaW9uLWNhcmQgLmJnLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5kaXYgaW9uLWNhcmQgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuZGl2IGlvbi1jYXJkIGlvbi1idXR0b24ge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMxRTZGRDk7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA3JSBhdXRvIDE1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5kaXYgaW9uLWNhcmQgaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICBtYXJnaW46IDZweCBhdXRvO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";

/***/ }),

/***/ 7364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"backtomenu()\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"enable()\"><ion-icon [name]=\"changeIcon ? 'create-outline' : 'close-circle-outline'\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-toggle>\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-toggle>\n    </ion-buttons>\n\n    <ion-title>\n     My Profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-card>\n      <ion-list class=\"logo\">\n        <img src=\"./../../../assets/login_logo.png\" alt=\"\">\n      </ion-list>\n      <ion-list class=\"bg-transparent\">\n        <ion-label>Username:</ion-label>\n        <ion-input readonly=\"{{enableInput}}\"  [(ngModel)]=\"this.user.username\" type=\"text\" placeholder=\"Enter Name\"></ion-input>\n        <ion-label>Password : </ion-label>\n        <ion-input  readonly=\"{{enableInput}}\" [(ngModel)]=\"this.user.password\" type=\"text\" placeholder=\"Enter Password\" ></ion-input>\n        <ion-button  *ngIf=\"sowButton\" (click)=\"login()\">Update</ion-button>\n      </ion-list>\n    </ion-card>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map