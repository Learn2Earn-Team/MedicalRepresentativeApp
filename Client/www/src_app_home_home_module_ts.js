"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 6791:
/*!******************************************************!*\
  !*** ./src/app/core/services/toast/toast.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);



let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Your settings have been saved.',
                cssClass: 'toast_class',
                duration: 2000
            });
            toast.present();
        });
    }
    acc_login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Logged in successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    acc_invalidlogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Invalid username or password',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    acc_logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Logged out successfully.',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    add_doc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor added successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    docNotadd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor added successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    docDeleted() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor Deleted successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    docnotDeleted() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor Not Deleted successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    docUpdated() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor Updated successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    docnotUpdated() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor Not Update successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    docnotFound() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor Not Found',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    add_dcr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Reporting added successfully.',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    addmtp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'MTP added successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    adddcr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'DCR added successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    comment_add() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Comment added successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    doctoralready() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor is Already exits',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    alreadydcr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You have already created this DCR.',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/toast/toast.service */ 6791);






let HomePage = class HomePage {
    constructor(router, toast) {
        this.router = router;
        this.toast = toast;
        this.dashbord = [
            { img: '../../../assets/doctor 1.png', name: 'Manage Doctors', path: 'manage-doctors' },
            { img: '../../../assets/schedule 1.png', name: 'Manage MTP', path: 'mtp' },
            { img: '../../../assets/clipboard 1.png', name: 'Manage DCR', path: 'see-dcr' },
            { img: '../../../assets/medicine1.webp', name: 'Products', path: 'product-company' },
            { img: '../../../assets/reminder.png', name: 'Reminder', path: 'reminder' },
            { img: '../../../assets/logout 1.png', name: 'Log out', path: 'login' },
        ];
    }
    ngOnInit() {
    }
    dash(item) {
        console.log(item.path);
        this.router.navigate([item.path]);
        if (item.path == 'login') {
            this.toast.acc_logout();
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _core_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".refresh_button_set {\n  width: 30px;\n  height: 30px;\n  float: right;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 5px;\n  margin-right: 10px;\n}\n\n.icon_3 {\n  font-size: 60px;\n  color: #0D65D9;\n}\n\n.refrsh_img {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  margin: auto;\n}\n\nion-header {\n  padding: 10px;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-title {\n  color: #0D65D9;\n}\n\nion-title .title {\n  font-size: 25px;\n  letter-spacing: 5px;\n}\n\nion-title .sub_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n\nion-content {\n  --background: linear-gradient(221.01deg, #5C9DF2 1.07%, #5C9DF2 100%);\n}\n\n.backgroung_img {\n  height: -webkit-fill-available;\n  position: absolute;\n  right: 0;\n  object-fit: cover;\n  object-position: right;\n}\n\n.list_1 {\n  background: transparent;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  align-items: center;\n  justify-content: center;\n}\n\n.list_2 {\n  width: 170px;\n  border-radius: 10px;\n  height: 170px;\n  margin: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.img_set {\n  display: flex;\n  margin: 15px auto 0px;\n  width: 63px;\n}\n\np {\n  text-align: center;\n  font-size: 15px;\n  margin: 0;\n  margin-top: 10px;\n  font-weight: bolder;\n  color: #0D65D9;\n}\n\nh6 {\n  float: right;\n  padding-top: 22px;\n  margin-right: -26px;\n  font-weight: bolder;\n  font-size: 9px;\n  color: #0D65D9;\n}\n\n.align_cards {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxNZWRpY2FsJTIwUmVwcmVzZW50YXRpdmUlMjBhcHBcXE1lZGljYWxSZXByZXNlbnRhdGl2ZVxcc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFFRSxjQUFBO0FDQUY7O0FERUc7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBRFdBO0VBQ0UscUVBQUE7QUNSRjs7QURZQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ1RGOztBRFlBO0VBRUUsdUJBQUE7RUFFQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1hGOztBRGNBO0VBQ0UsWUFBQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1hKOztBRGNBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ1hGOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDWEY7O0FEY0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNYRjs7QURjQTtFQUVFLHVCQUFBO0FDWkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoZWFkZXIgc3RhcnQuLi4uLi4uLlxyXG5cclxuLnJlZnJlc2hfYnV0dG9uX3NldCB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxufVxyXG4uaWNvbl8ze1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBjb2xvcjogIzBENjVEOTtcclxufVxyXG5cclxuLnJlZnJzaF9pbWcge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5pb24taGVhZGVye1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIFxyXG4gIGNvbG9yOiAjMEQ2NUQ5O1xyXG5cclxuICAgLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgfVxyXG4gIC5zdWJfdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gaGVhZGVyIEVuZC8vLy8vLy8vXHJcblxyXG5cclxuLy8gY29udGVudCBzdGFydCAuLi4uLi4uLi4uLi4uLi5cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjEuMDFkZWcsICM1QzlERjIgMS4wNyUsICM1QzlERjIgMTAwJSk7XHJcblxyXG59IFxyXG5cclxuLmJhY2tncm91bmdfaW1nIHtcclxuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5saXN0XzEge1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubGlzdF8yIHtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbWdfc2V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTVweCBhdXRvIDBweDtcclxuICB3aWR0aDogNjNweDtcclxufVxyXG5cclxucCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGNvbG9yOiAjMEQ2NUQ5O1xyXG59XHJcblxyXG5oNiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAyMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDlweDtcclxuICBjb2xvcjogIzBENjVEOTtcclxufVxyXG5cclxuLmFsaWduX2NhcmRze1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iLCIucmVmcmVzaF9idXR0b25fc2V0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaWNvbl8zIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBjb2xvcjogIzBENjVEOTtcbn1cblxuLnJlZnJzaF9pbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMEQ2NUQ5O1xufVxuaW9uLXRpdGxlIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cbmlvbi10aXRsZSAuc3ViX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjEuMDFkZWcsICM1QzlERjIgMS4wNyUsICM1QzlERjIgMTAwJSk7XG59XG5cbi5iYWNrZ3JvdW5nX2ltZyB7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogcmlnaHQ7XG59XG5cbi5saXN0XzEge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxpc3RfMiB7XG4gIHdpZHRoOiAxNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgbWFyZ2luOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmltZ19zZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDE1cHggYXV0byAwcHg7XG4gIHdpZHRoOiA2M3B4O1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICMwRDY1RDk7XG59XG5cbmg2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMjJweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiAjMEQ2NUQ5O1xufVxuXG4uYWxpZ25fY2FyZHMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!-- header start -->\r\n<!-- By Abdullah -->\r\n<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n<!-- \r\n    <ion-list class=\"refresh_button_set\">\r\n      <img class=\"refrsh_img\" src=\"../../../assets/refresh-icon.png\" alt=\"\">\r\n    </ion-list>\r\n    <h6>Sync</h6> -->\r\n\r\n    <ion-title> <span class=\"title\">Orisun’s </span><br><span class=\"sub_title\" >Medical Representatives</span></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- header End -->\r\n\r\n<!-- content start -->\r\n<ion-content>\r\n  <img class=\"backgroung_img\" src=\"../../../assets/dashboard_backgroung_pic.png\" alt=\"\">\r\n\r\n  <!-- ion-list card start -->\r\n\r\n\r\n  <div>\r\n    <ion-list class=\"list_1\">\r\n      <ion-row class=\"align_cards\">\r\n       <ion-col (click)=\"dash(item)\" *ngFor=\"let item of dashbord\"  size-xs=\"6\" size-md=\"3.2\" size-lg=\"3.2\" size-xl=\"3.2\">\r\n        <ion-list class=\"list_2\">\r\n          <img class=\"img_set\" src=\"{{item.img}}\" alt=\"\">\r\n          <p>{{item.name}}</p>\r\n        </ion-list>\r\n       </ion-col>\r\n      </ion-row>\r\n\r\n\r\n\r\n    </ion-list>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<!-- content start -->";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map