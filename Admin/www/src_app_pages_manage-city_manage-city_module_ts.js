"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_manage-city_manage-city_module_ts"],{

/***/ 8736:
/*!*****************************************************************!*\
  !*** ./src/app/pages/manage-city/manage-city-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCityPageRoutingModule": () => (/* binding */ ManageCityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _manage_city_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-city.page */ 5243);




const routes = [
    {
        path: '',
        component: _manage_city_page__WEBPACK_IMPORTED_MODULE_0__.ManageCityPage
    }
];
let ManageCityPageRoutingModule = class ManageCityPageRoutingModule {
};
ManageCityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManageCityPageRoutingModule);



/***/ }),

/***/ 9470:
/*!*********************************************************!*\
  !*** ./src/app/pages/manage-city/manage-city.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCityPageModule": () => (/* binding */ ManageCityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _manage_city_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-city-routing.module */ 8736);
/* harmony import */ var _manage_city_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-city.page */ 5243);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let ManageCityPageModule = class ManageCityPageModule {
};
ManageCityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _manage_city_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageCityPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_manage_city_page__WEBPACK_IMPORTED_MODULE_1__.ManageCityPage]
    })
], ManageCityPageModule);



/***/ }),

/***/ 5243:
/*!*******************************************************!*\
  !*** ./src/app/pages/manage-city/manage-city.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCityPage": () => (/* binding */ ManageCityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _manage_city_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-city.page.html?ngResource */ 6825);
/* harmony import */ var _manage_city_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-city.page.scss?ngResource */ 7146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apicall.service */ 8130);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ 7465);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);









let ManageCityPage = class ManageCityPage {
    constructor(global, apicall, toast, route, loadingCtrl, alertController) {
        this.global = global;
        this.apicall = apicall;
        this.toast = toast;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.btnValue = "Add City";
        this.addcity = { city: '' };
    }
    ngOnInit() {
        this.getAllCities();
    }
    addcities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.addcity);
            if (this.btnValue == 'Add City') {
                yield this.apicall.api_adddCitites(this.addcity);
                this.addcity = { city: '' };
                this.getAllCities();
            }
            else {
                this.showLoading();
                yield setTimeout(() => {
                    this.apicall.api_updateCitites(this.addcity);
                    this.addcity = { city: '' };
                    this.getAllCities();
                    this.btnValue = "Add City";
                }, 1000);
            }
        });
    }
    getAllCities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getCities();
            this.global.GetCities.subscribe(res => {
                this.allCities = res;
            });
        });
    }
    update(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoading();
            setTimeout(() => {
                this.btnValue = "Update City";
                this.addcity = item;
            }, 1000);
        });
    }
    delete(c_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const x = { c_id: c_id };
            yield this.apicall.api_deleteCitites(x);
            yield this.getAllCities();
        });
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
    DeleteAlert(c_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you sure to delete this City!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => { }
                    }, {
                        text: 'OK',
                        role: 'confirm',
                        handler: () => {
                            console.log(c_id);
                            this.delete(c_id);
                        }
                    },
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
};
ManageCityPage.ctorParameters = () => [
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
ManageCityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-manage-city',
        template: _manage_city_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_manage_city_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageCityPage);



/***/ }),

/***/ 7146:
/*!********************************************************************!*\
  !*** ./src/app/pages/manage-city/manage-city.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: var(--ion-color-primary);\n}\n\nh6 {\n  font-weight: 300;\n  color: var(--ion-color-primary);\n}\n\n.input {\n  border: 1px solid #1E6FD9;\n  border-radius: 6px;\n  background: white;\n}\n\n.add {\n  display: flex;\n  margin: auto;\n  width: 20%;\n  margin-top: 3%;\n}\n\n.p2 {\n  text-align: center;\n  font-weight: bolder;\n  color: #1E6FD9;\n  padding-top: 30px;\n  font-size: 20px;\n}\n\n.i {\n  padding: 5px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: row;\n  align-content: stretch;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  flex-wrap: nowrap;\n}\n\n.margin {\n  padding-top: 10px;\n}\n\n.update_icon {\n  font-size: 25px;\n  margin-right: 6px;\n  color: #0D65D9;\n}\n\nion-searchbar {\n  width: 50%;\n  --border-radius: 10px;\n  display: flex;\n  margin: auto;\n  margin-top: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1jaXR5LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1lZGljYWwlMjBSZXByZXNlbnRhdGl2ZSUyMGFwcFxcYW1pbi1tZWRpY2FsLXJlcHJlc2VudGF0aXZlXFxzcmNcXGFwcFxccGFnZXNcXG1hbmFnZS1jaXR5XFxtYW5hZ2UtY2l0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0dBQUE7RUFDQSxpQkFBQTtBQ01KOztBREhBO0VBQ0ksaUJBQUE7QUNNSjs7QURIQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNNSjs7QURIQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ01KIiwiZmlsZSI6Im1hbmFnZS1jaXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuaDZ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4uaW5wdXR7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICMxRTZGRDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uYWRke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG4ucDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICMxRTZGRDk7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uaXtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSwgMCAxcHggNXB4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxufVxyXG4ubWFyZ2lue1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi51cGRhdGVfaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgY29sb3I6ICMwRDY1RDk7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXJ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcbiIsImlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmg2IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFFNkZEOTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmFkZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG5cbi5wMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICMxRTZGRDk7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5tYXJnaW4ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnVwZGF0ZV9pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgY29sb3I6ICMwRDY1RDk7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICB3aWR0aDogNTAlO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNCU7XG59Il19 */";

/***/ }),

/***/ 6825:
/*!********************************************************************!*\
  !*** ./src/app/pages/manage-city/manage-city.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">  \n      <ion-input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filter_data\"></ion-input>\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\n    </ion-item>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-toggle>\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>\n      Manage Cities\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n \n  \n      <!-- cities -->\n<ion-row style=\"justify-content: center;\">\n  <ion-col size=\"12\" size-md=\"5\" >\n       <h6>City:</h6>\n       <ion-input class=\"input\" type=\"text\" placeholder=\"City\" [(ngModel)]=\"addcity.city\"> </ion-input>\n  </ion-col>\n</ion-row>\n<ion-button class=\"add\" [disabled]=\"addcity.city == ''\" (click)=\"addcities()\">{{btnValue}}</ion-button>\n        <!-- search -->\n  \n  <!-- search result -->\n\n  <!-- <ion-searchbar></ion-searchbar> -->\n    <p class=\"p2\">City List</p>\n \n \n    <ion-grid>\n      <ion-row   >\n        <ion-col *ngFor=\"let item of allCities | filter : filter_data;\" size=\"6\"size-md=\"4\">\n         <ion-list class=\"i\">\n            <p class=\"margin\"><b>City :  </b>{{item.city}}</p>\n            <div>\n            <ion-icon class=\"update_icon\" name=\"create-outline\" (click)=\"update(item)\"></ion-icon>\n          <ion-icon class=\"update_icon\"  name=\"trash-outline\" (click)=\"DeleteAlert(item.c_id)\"></ion-icon>\n            </div>\n        </ion-list>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  \n \n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_manage-city_manage-city_module_ts.js.map