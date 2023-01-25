"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_aproval-mtp_aproval-mtp_module_ts"],{

/***/ 916:
/*!*****************************************************************!*\
  !*** ./src/app/pages/aproval-mtp/aproval-mtp-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AprovalMtpPageRoutingModule": () => (/* binding */ AprovalMtpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _aproval_mtp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aproval-mtp.page */ 4783);




const routes = [
    {
        path: '',
        component: _aproval_mtp_page__WEBPACK_IMPORTED_MODULE_0__.AprovalMtpPage
    }
];
let AprovalMtpPageRoutingModule = class AprovalMtpPageRoutingModule {
};
AprovalMtpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AprovalMtpPageRoutingModule);



/***/ }),

/***/ 1054:
/*!*********************************************************!*\
  !*** ./src/app/pages/aproval-mtp/aproval-mtp.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AprovalMtpPageModule": () => (/* binding */ AprovalMtpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _aproval_mtp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aproval-mtp-routing.module */ 916);
/* harmony import */ var _aproval_mtp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aproval-mtp.page */ 4783);







let AprovalMtpPageModule = class AprovalMtpPageModule {
};
AprovalMtpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _aproval_mtp_routing_module__WEBPACK_IMPORTED_MODULE_0__.AprovalMtpPageRoutingModule
        ],
        declarations: [_aproval_mtp_page__WEBPACK_IMPORTED_MODULE_1__.AprovalMtpPage]
    })
], AprovalMtpPageModule);



/***/ }),

/***/ 4783:
/*!*******************************************************!*\
  !*** ./src/app/pages/aproval-mtp/aproval-mtp.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AprovalMtpPage": () => (/* binding */ AprovalMtpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _aproval_mtp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aproval-mtp.page.html?ngResource */ 4811);
/* harmony import */ var _aproval_mtp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aproval-mtp.page.scss?ngResource */ 3894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apicall.service */ 8130);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ 7465);
/* harmony import */ var _model_model_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/model.page */ 23);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 6527);









let AprovalMtpPage = class AprovalMtpPage {
    constructor(global, apicall, modalController) {
        this.global = global;
        this.apicall = apicall;
        this.modalController = modalController;
        this.mrlist = ['Dr.Name1', 'Dr.Name2', 'Dr.Name3', 'Dr.Name4', 'Dr.Name5'];
        this.mtpData = { mr_id: '', month: '', year: '' };
        this.updatemtpData = { mr_id: '', month: '', year: '', mtp_status: '' };
        this.allmtpstatus = [];
    }
    ngOnInit() {
        this.getmrData();
    }
    getmrData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getgetActive_mr();
            this.global.GetallActive_mr.subscribe(res => {
                this.allMR = res;
            });
        });
    }
    get_date(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event.target.value);
            const monthformate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(event.target.value), 'MMMM');
            const yearformate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(event.target.value), 'yyyy');
            console.log(monthformate);
            console.log(yearformate);
            this.mtpData.month = monthformate;
            this.mtpData.year = yearformate;
            this.updatemtpData.month = monthformate;
            this.updatemtpData.year = yearformate;
        });
    }
    selectMR(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event.target.value);
            this.mtpData.mr_id = event.target.value;
            this.updatemtpData.mr_id = event.target.value;
            yield this.apicall.api_getmtpbydate(this.mtpData);
            this.global.MtpData.subscribe(res => {
                console.log(res);
                this.allmtpData = res[0];
                this.allmtpstatus = res[1][0];
                console.log(this.allmtpData);
            });
        });
    }
    aprove() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.updatemtpData.mtp_status = "approve";
            console.log(this.updatemtpData);
            yield this.apicall.api_updatemtpMRstatus(this.updatemtpData);
            yield this.apicall.api_getmtpbydate(this.mtpData);
            this.global.MtpData.subscribe(res => {
                console.log(res);
                this.allmtpData = res[0];
                this.allmtpstatus = res[1][0];
                console.log(this.allmtpData);
            });
        });
    }
    reject() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.updatemtpData.mtp_status = "reject";
            console.log(this.updatemtpData);
            yield this.apicall.api_updatemtpMRstatus(this.updatemtpData);
            yield this.apicall.api_getmtpbydate(this.mtpData);
            this.global.MtpData.subscribe(res => {
                console.log(res);
                this.allmtpData = res[0];
                this.allmtpstatus = res[1][0];
                console.log(this.allmtpData);
            });
        });
    }
    seeProduct(mtp_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(mtp_id);
            const modal = yield this.modalController.create({
                component: _model_model_page__WEBPACK_IMPORTED_MODULE_4__.ModelPage,
                cssClass: 'modalclass',
                componentProps: {
                    mtp_id,
                    "Category": "seeproduct"
                },
                initialBreakpoint: 0.5,
                breakpoints: [0.25, 0.5, 1]
            });
            return yield modal.present();
        });
    }
};
AprovalMtpPage.ctorParameters = () => [
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
AprovalMtpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-aproval-mtp',
        template: _aproval_mtp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_aproval_mtp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AprovalMtpPage);



/***/ }),

/***/ 3894:
/*!********************************************************************!*\
  !*** ./src/app/pages/aproval-mtp/aproval-mtp.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: var(--ion-color-primary);\n}\n\n.shad {\n  --background: #f6f6f6;\n  box-shadow: 1px 0px 20px 4px rgba(0, 0, 0, 0.11);\n}\n\nh6 {\n  font-weight: 300;\n  color: var(--ion-color-primary);\n}\n\nion-input {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 6px;\n  background: white;\n}\n\nion-select {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 6px;\n  background: white;\n}\n\n.text_adjust_2 {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n\n.text_adjust_2:hover {\n  color: var(--ion-color-primary);\n  text-decoration: underline;\n}\n\nion-card {\n  margin: 0px;\n  margin-inline: 0px;\n  width: 50%;\n  margin: 15px auto;\n}\n\nion-card ion-label {\n  flex: 0%;\n  margin-inline: 0px 0px;\n  margin: 0px 0px 0px 0px;\n}\n\nion-card .spantxt {\n  text-transform: uppercase;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  margin-left: 15px;\n}\n\nion-card .my_class1 {\n  color: red;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-left: 15px;\n}\n\nion-card .my_class2 {\n  color: green;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcm92YWwtbXRwLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1lZGljYWwlMjBSZXByZXNlbnRhdGl2ZSUyMGFwcFxcYW1pbi1tZWRpY2FsLXJlcHJlc2VudGF0aXZlXFxzcmNcXGFwcFxccGFnZXNcXGFwcm92YWwtbXRwXFxhcHJvdmFsLW10cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxnREFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtBQ0dKOztBREFBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEQUE7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURBQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLCtCQUFBO0VBQ0EsMEJBQUE7QUNJSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZJO0VBQ0ksUUFBQTtFQUNKLHNCQUFBO0VBQ0EsdUJBQUE7QUNJSjs7QURESTtFQUNJLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDR1I7O0FEQUk7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRVI7O0FEQU07RUFDRyxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRVQiLCJmaWxlIjoiYXByb3ZhbC1tdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbi5zaGFke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAyMHB4IDRweCByZ2IoMCAwIDAgLyAxMSUpO1xyXG59XHJcbmg2e1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIFxyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuLnRleHRfYWRqdXN0XzJ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50ZXh0X2FkanVzdF8yOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZTogMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG5cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBmbGV4OiAwJTtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDBweCAwcHg7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3BhbnR4dHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15X2NsYXNzMXtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICB9XHJcbiAgICAgIC5teV9jbGFzczJ7XHJcbiAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgfVxyXG5cclxuICB9IiwiaW9uLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnNoYWQge1xuICAtLWJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggMjBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjExKTtcbn1cblxuaDYge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi50ZXh0X2FkanVzdF8yIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0X2FkanVzdF8yOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1pbmxpbmU6IDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59XG5pb24tY2FyZCBpb24tbGFiZWwge1xuICBmbGV4OiAwJTtcbiAgbWFyZ2luLWlubGluZTogMHB4IDBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG59XG5pb24tY2FyZCAuc3BhbnR4dCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbmlvbi1jYXJkIC5teV9jbGFzczEge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5pb24tY2FyZCAubXlfY2xhc3MyIHtcbiAgY29sb3I6IGdyZWVuO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */";

/***/ }),

/***/ 4811:
/*!********************************************************************!*\
  !*** ./src/app/pages/aproval-mtp/aproval-mtp.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-toggle>\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>\n      Approve MTP\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-row  style=\"justify-content: center;\">\n  <ion-col size-md=\"5\" size=\"12\">\n    <h6>Select Month</h6>\n       <ion-input type=\"month\" (ionChange)=\"get_date($event)\"></ion-input>\n  </ion-col>\n  <ion-col  size-md=\"5\" size=\"12\">\n    <h6>Select MR</h6>\n        <ion-select mode=\"ios\" placeholder=\"Select MR\" (ionChange)=\"selectMR($event)\">\n          <ion-select-option *ngFor=\"let item of allMR\" value=\"{{item.mr_id}}\">{{item.name}}</ion-select-option>\n        </ion-select>\n  </ion-col>\n</ion-row>\n\n\n<ion-card mode=\"ios\" *ngIf=\"this.allmtpstatus.length !== 0\">\n  <ion-row>\n    <ion-col size=\"12\" size-md=\"6\">\n  <ion-item lines=\"none\">\n  <ion-label>\n    MTP Status: <span class=\"spantxt\" [ngClass]=\"{my_class2:this.allmtpstatus.status == 'approve',my_class1:this.allmtpstatus.status == 'reject'}\">{{this.allmtpstatus.status}}</span>\n  </ion-label>\n  </ion-item>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\">\n     <ion-item lines=\"none\">\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"aprove()\">\n          Approve\n        </ion-button>\n        <ion-button (click)=\"reject()\">\n          Reject\n        </ion-button>\n      </ion-buttons>\n     </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-card>\n\n\n<div style=\"padding: 10px;\">\n  <div class=\"table-responsive table-hover ion-margin bg-white\">\n    <table class=\"table table-hover display mb-4 dataTablesCard\">\n      <thead>\n        <tr>\n          <th>No.</th>\n          <th>MR</th>\n          <th>Doctor Name</th>\n          <th>Hospital</th>\n          <th>City</th>\n          <th>Rout</th>\n          <th>Date</th>\n          <th>Product</th>\n          \n         \n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of allmtpData; index as i\">\n          <td>{{i+1}}</td>\n          <td>{{item.mr_name}}</td>\n          <td>Dr {{item.doctor_name}}</td>\n          <td>{{item.hospital}}</td>\n          <td>{{item.city}}</td>\n          <td>{{item.rout}}</td>\n          <td>{{item.date}}</td>\n          <td class=\"text_adjust_2\" (click)=\"seeProduct(item.mtp_id)\">See Products</td>\n          <!-- <td (click)=\"aprove(item.mtp_id)\"><span\n          style=\"font-size: 15px;color: var(--ion-color-primary); cursor: pointer;\">Approve</span></td>\n          <td (click)=\"reject(item.mtp_id)\"><span\n          style=\"font-size: 15px;color: var(--ion-color-primary); cursor: pointer;\">Reject</span></td> -->\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_aproval-mtp_aproval-mtp_module_ts.js.map