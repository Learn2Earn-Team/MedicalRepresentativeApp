"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_aproval-dcr_aproval-dcr_module_ts"],{

/***/ 4872:
/*!*****************************************************************!*\
  !*** ./src/app/pages/aproval-dcr/aproval-dcr-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AprovalDcrPageRoutingModule": () => (/* binding */ AprovalDcrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _aproval_dcr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aproval-dcr.page */ 8498);




const routes = [
    {
        path: '',
        component: _aproval_dcr_page__WEBPACK_IMPORTED_MODULE_0__.AprovalDcrPage
    }
];
let AprovalDcrPageRoutingModule = class AprovalDcrPageRoutingModule {
};
AprovalDcrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AprovalDcrPageRoutingModule);



/***/ }),

/***/ 2405:
/*!*********************************************************!*\
  !*** ./src/app/pages/aproval-dcr/aproval-dcr.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AprovalDcrPageModule": () => (/* binding */ AprovalDcrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _aproval_dcr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aproval-dcr-routing.module */ 4872);
/* harmony import */ var _aproval_dcr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aproval-dcr.page */ 8498);







let AprovalDcrPageModule = class AprovalDcrPageModule {
};
AprovalDcrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _aproval_dcr_routing_module__WEBPACK_IMPORTED_MODULE_0__.AprovalDcrPageRoutingModule
        ],
        declarations: [_aproval_dcr_page__WEBPACK_IMPORTED_MODULE_1__.AprovalDcrPage]
    })
], AprovalDcrPageModule);



/***/ }),

/***/ 8498:
/*!*******************************************************!*\
  !*** ./src/app/pages/aproval-dcr/aproval-dcr.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AprovalDcrPage": () => (/* binding */ AprovalDcrPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _aproval_dcr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aproval-dcr.page.html?ngResource */ 6048);
/* harmony import */ var _aproval_dcr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aproval-dcr.page.scss?ngResource */ 5715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apicall.service */ 8130);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ 7465);
/* harmony import */ var _model_model_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/model.page */ 23);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 6527);
/* harmony import */ var src_app_services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/excel.service */ 4249);










let AprovalDcrPage = class AprovalDcrPage {
    constructor(global, excel, apicall, modalController) {
        this.global = global;
        this.excel = excel;
        this.apicall = apicall;
        this.modalController = modalController;
        this.mrlist = ['Dr.Nae1', 'Dr.Name2', 'Dr.Name3', 'Dr.Name4', 'Dr.Name5'];
        this.dcrdata = { mr_id: '', date: '' };
        this.updatedcrData = { dcr_id: '', dcr_status: '' };
        this.type = "dcr";
        this.dcrreport = { mr_id: '', month: '', year: '' };
        this.alldcrReport = [];
        this.totalmonthlyCall = [];
        this.totalmonthlymissedCall = [];
        this.all_data = [];
        this.totalAvg = [];
    }
    ngOnInit() {
        this.getmrData();
    }
    getmrData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getgetActive_mr();
            this.global.GetallActive_mr.subscribe(res => {
                this.allMR = res;
            });
        });
    }
    get_date(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event.target.value);
            this.dcrdata.date = event.target.value;
        });
    }
    selectMR(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event.target.value);
            this.dcrdata.mr_id = event.target.value;
            yield this.apicall.api_getdcrdetails(this.dcrdata);
            this.global.Dcrdata.subscribe(res => {
                console.log(res);
                this.alldcrData = res;
                console.log(this.alldcrData);
            });
        });
    }
    aprove(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            this.updatedcrData.dcr_id = item;
            this.updatedcrData.dcr_status = "approve";
            console.log(this.updatedcrData);
            yield this.apicall.api_updatedcrstatus(this.updatedcrData);
            yield this.apicall.api_getdcrdetails(this.dcrdata);
            this.global.Dcrdata.subscribe(res => {
                console.log(res);
                this.alldcrData = res;
                console.log(this.alldcrData);
            });
        });
    }
    reject(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            this.updatedcrData.dcr_id = item;
            this.updatedcrData.dcr_status = "reject";
            console.log(this.updatedcrData);
            yield this.apicall.api_updatedcrstatus(this.updatedcrData);
            yield this.apicall.api_getdcrdetails(this.dcrdata);
            this.global.Dcrdata.subscribe(res => {
                console.log(res);
                this.alldcrData = res;
                console.log(this.alldcrData);
            });
        });
    }
    seeProduct(dcr_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(dcr_id);
            const modal = yield this.modalController.create({
                component: _model_model_page__WEBPACK_IMPORTED_MODULE_4__.ModelPage,
                cssClass: 'modalclass',
                componentProps: {
                    dcr_id,
                    "Category": "seedcrproduct"
                },
                initialBreakpoint: 0.5,
                breakpoints: [0.25, 0.5, 1]
            });
            return yield modal.present();
        });
    }
    get_month(event) {
        console.log(event.target.value);
        this.monthName = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(event.target.value), 'MMMM-yyyy');
        console.log(this.monthName);
        var Value = event.target.value.split("-");
        var year = Value[0];
        var month = Value[1];
        this.dcrreport.month = month;
        this.dcrreport.year = year;
        console.log(month, year);
    }
    select_MR(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            for (let i = this.all_data.length - 1; i >= 0; i--) {
                this.all_data.splice(i, 1);
                console.log(this.all_data);
            }
            console.log(this.all_data);
            console.log(event.target.value);
            this.mrName = event.target.value.data.name;
            this.dcrreport.mr_id = event.target.value.id;
            console.log(this.dcrreport);
            yield this.apicall.api_getdcrmonthvise(this.dcrreport);
            this.global.Storedcrmonthvise.subscribe(res => {
                console.log(res);
                //  this.all_data = res;
                this.alldcrReport = res[0];
                this.totalmonthlyCall = res[1][0];
                this.totalmonthlymissedCall = res[2][0];
                this.totalAvg = res[3][0];
                this.all_data = [].concat(this.alldcrReport, this.totalmonthlyCall, this.totalmonthlymissedCall, this.totalAvg);
                console.log(this.all_data);
                console.log(this.alldcrReport);
            });
        });
    }
    exportToExcel() {
        const x = '' + this.monthName + ' ' + 'DCR Report';
        console.log(x);
        this.excel.exportToExcel(this.all_data, x);
        for (let i = this.all_data.length - 1; i >= 0; i--) {
            this.all_data.splice(i, 1);
            console.log(this.all_data);
        }
        console.log(this.all_data);
        console.log('Export');
    }
    changeSegment() {
        // for(let i = this.all_data.length - 1; i >= 0; i--) {
        //   this.all_data.splice(i, 1);
        //   console.log(this.all_data);
        // }
        //   console.log(this.all_data);
        this.getmrData();
        // for(let i=0; i<this.all_data.length; i++) {
        //   this.all_data.pop();
        //   console.log(this.all_data);
        // }
        // console.log(this.all_data);
    }
};
AprovalDcrPage.ctorParameters = () => [
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_services_excel_service__WEBPACK_IMPORTED_MODULE_5__.ExcelService },
    { type: src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
AprovalDcrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-aproval-dcr',
        template: _aproval_dcr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_aproval_dcr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AprovalDcrPage);



/***/ }),

/***/ 5715:
/*!********************************************************************!*\
  !*** ./src/app/pages/aproval-dcr/aproval-dcr.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: var(--ion-color-primary);\n}\n\n.shad {\n  --background: #f6f6f6;\n  box-shadow: 1px 0px 20px 4px rgba(0, 0, 0, 0.11);\n}\n\nh6 {\n  font-weight: 300;\n  color: var(--ion-color-primary);\n}\n\nion-input {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 6px;\n  background: white;\n}\n\nion-select {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 6px;\n  background: white;\n}\n\n.text_adjust_2 {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n\n.text_adjust_2:hover {\n  color: var(--ion-color-primary);\n  text-decoration: underline;\n}\n\n.my_class1 {\n  color: red;\n  text-transform: uppercase;\n}\n\n.my_class2 {\n  color: green;\n  text-transform: uppercase;\n}\n\nion-segment {\n  width: 300px;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card1 {\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: none;\n}\n\n.button4 {\n  border-radius: 10px;\n  text-transform: none;\n  background: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcm92YWwtZGNyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1lZGljYWwlMjBSZXByZXNlbnRhdGl2ZSUyMGFwcFxcYW1pbi1tZWRpY2FsLXJlcHJlc2VudGF0aXZlXFxzcmNcXGFwcFxccGFnZXNcXGFwcm92YWwtZGNyXFxhcHJvdmFsLWRjci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxnREFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtBQ0dKOztBREFBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEQUE7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURBQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLCtCQUFBO0VBQ0EsMEJBQUE7QUNJSjs7QURBQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQ0dKOztBRERFO0VBQ0csWUFBQTtFQUNBLHlCQUFBO0FDSUw7O0FERkc7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0FDT0oiLCJmaWxlIjoiYXByb3ZhbC1kY3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbi5zaGFke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAyMHB4IDRweCByZ2IoMCAwIDAgLyAxMSUpO1xyXG59XHJcbmg2e1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIFxyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuLnRleHRfYWRqdXN0XzJ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50ZXh0X2FkanVzdF8yOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5cclxuLm15X2NsYXNzMXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICB9XHJcbiAgLm15X2NsYXNzMntcclxuICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgfVxyXG4gICBpb24tc2VnbWVudHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uY2FyZDF7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbjR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn0iLCJpb24tdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2hhZCB7XG4gIC0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgYm94LXNoYWRvdzogMXB4IDBweCAyMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xufVxuXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRleHRfYWRqdXN0XzIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHRfYWRqdXN0XzI6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm15X2NsYXNzMSB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5teV9jbGFzczIge1xuICBjb2xvcjogZ3JlZW47XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY2FyZDEge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnV0dG9uNCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";

/***/ }),

/***/ 6048:
/*!********************************************************************!*\
  !*** ./src/app/pages/aproval-dcr/aproval-dcr.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-toggle>\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      See DCR\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-segment color=\"primary\" [(ngModel)]=\"type\" mode=\"ios\" (ionChange)=\"changeSegment()\">\r\n    <ion-segment-button value=\"dcr\" checked>\r\n      <ion-label>See DCR</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"dcr-detail\">\r\n      <ion-label>DCR Report</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n\r\n  <div *ngIf=\"this.type == 'dcr'\">\r\n    <ion-row  style=\"justify-content: center;\">\r\n      <ion-col size-md=\"5\" size=\"12\">\r\n        <h6>Select Date</h6>\r\n           <ion-input type=\"date\" (ionChange)=\"get_date($event)\"></ion-input>\r\n      </ion-col>\r\n      <ion-col  size-md=\"5\" size=\"12\">\r\n        <h6>Select MR</h6>\r\n            <ion-select mode=\"ios\" placeholder=\"Select MR\" (ionChange)=\"selectMR($event)\">\r\n              <ion-select-option *ngFor=\"let item of allMR\" value=\"{{item.mr_id}}\">{{item.name}}</ion-select-option>\r\n            </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    \r\n    \r\n    <div style=\"padding: 10px;\">\r\n      <div class=\"table-responsive table-hover ion-margin bg-white\">\r\n        <table class=\"table table-hover display mb-4 dataTablesCard\">\r\n          <thead>\r\n            <tr>\r\n              <th>No.</th>\r\n              <th>MR</th>\r\n              <th>Doctor Name</th>\r\n              <th>City</th>\r\n              <th>Rout</th>\r\n              <th>Product</th>\r\n              <th>Date</th>\r\n              <th>Comments</th>\r\n              <th>Status</th>          \r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of alldcrData; index as i\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{item.mr_name}}</td>\r\n              <td>Dr {{item.doctor_name}}</td>\r\n              <td>{{item.city}}</td>\r\n              <td>{{item.rout}}</td>\r\n              <td class=\"text_adjust_2\" (click)=\"seeProduct(item.dcr_id)\">See Products</td>\r\n              <td>{{item.date}}</td>\r\n              <td>{{item.comment}}</td>\r\n              <td [ngClass]=\"{my_class2:item.dcr_status == 'visited',my_class1:item.dcr_status == 'missed visit'}\">{{item.dcr_status}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"this.type == 'dcr-detail'\">\r\n\r\n    <ion-row  style=\"justify-content: center;\">\r\n      <ion-col size-md=\"5\" size=\"12\">\r\n        <h6>Select Month</h6>\r\n           <ion-input type=\"month\" (ionChange)=\"get_month($event)\"></ion-input>\r\n      </ion-col>\r\n      <ion-col  size-md=\"5\" size=\"12\">\r\n        <h6>Select MR</h6>\r\n            <ion-select mode=\"ios\" placeholder=\"Select MR\" (ionChange)=\"select_MR($event)\">\r\n              <ion-select-option *ngFor=\"let item of allMR\" [value]=\"{id: item.mr_id, data: item}\">{{item.name}}</ion-select-option>\r\n            </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"justify-content: center;\">\r\n      <ion-col size-md=\"4\" size=\"12\">\r\n        <ion-card class=\"card1\">\r\n          Total Calss : {{this.totalmonthlyCall.total_calls}}\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size-md=\"4\" size=\"12\">\r\n        <ion-card class=\"card1\">\r\n          Total Missed Calls : {{this.totalmonthlymissedCall.total_missedcalls}}\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size-md=\"4\" size=\"12\">\r\n        <ion-card class=\"card1\">\r\n          Total Avg. : {{this.totalAvg.total_avg}}\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    \r\n    <ion-list style=\"text-align: center;background: transparent;\">\r\n      <ion-button  (click)=\"exportToExcel()\"  *ngIf=\"this.alldcrReport != 0\" class=\"button4\" >\r\n      Export Data\r\n      </ion-button>\r\n    </ion-list>\r\n    \r\n    <div style=\"padding: 10px;\">\r\n      <div class=\"table-responsive table-hover ion-margin bg-white\">\r\n        <table class=\"table table-hover display mb-4 dataTablesCard\">\r\n          <thead>\r\n            <tr>\r\n              <th>No.</th>\r\n              <th>MR</th>\r\n              <th>Doctor Name</th>\r\n              <th>City</th>\r\n              <th>Rout</th>\r\n              <th>Product</th>\r\n              <th>Date</th>\r\n              <th>Comments</th>\r\n              <th>Status</th>          \r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of alldcrReport; index as i\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{item.mr_name}}</td>\r\n              <td>Dr {{item.doctor_name}}</td>\r\n              <td>{{item.city}}</td>\r\n              <td>{{item.rout}}</td>\r\n              <td class=\"text_adjust_2\" (click)=\"seeProduct(item.dcr_id)\">See Products</td>\r\n              <td>{{item.date}}</td>\r\n              <td>{{item.comment}}</td>\r\n              <td [ngClass]=\"{my_class2:item.dcr_status == 'visited',my_class1:item.dcr_status == 'missed visit'}\">{{item.dcr_status}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    \r\n\r\n\r\n\r\n  </div>\r\n\r\n \r\n\r\n\r\n\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_aproval-dcr_aproval-dcr_module_ts.js.map