"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_model_model_page_ts"],{

/***/ 23:
/*!*******************************************!*\
  !*** ./src/app/pages/model/model.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelPage": () => (/* binding */ ModelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _model_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.page.html?ngResource */ 1548);
/* harmony import */ var _model_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.page.scss?ngResource */ 2849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apicall.service */ 8130);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ 7465);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);









let ModelPage = class ModelPage {
    constructor(router, apicall, global, toast, modalController) {
        this.router = router;
        this.apicall = apicall;
        this.global = global;
        this.toast = toast;
        this.modalController = modalController;
        this.Togglevaluee = 'deactivate';
        this.usersignupdata = { username: '', password: '', role: 'mr', status: 'activate' };
        this.mrloginupdate = { u_id: '', username: '', password: '' };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.Category);
            if (this.Category == 'seeproduct') {
                console.log(this.mtp_id);
                yield this.apicall.api_seeproductbymtp(this.mtp_id);
                yield this.global.SeeProductbymr.subscribe(res => {
                    this.allproducts = res;
                    console.log(this.allproducts);
                });
            }
            else if (this.Category == 'seedcrproduct') {
                console.log(this.dcr_id);
                yield this.apicall.api_seeproductbydcr(this.dcr_id);
                yield this.global.SeeProductbydcr.subscribe(res => {
                    this.alldcrproducts = res;
                    console.log(this.alldcrproducts);
                });
            }
            else {
                console.log('no Category');
            }
            console.log(this.updateMRLogin);
            this.mrloginupdate = this.updateMRLogin;
        });
    }
    signup() {
        console.log(this.usersignupdata);
        // this.usersignupdata.status = this.Togglevaluee;
        this.apicall.api_addMrsignupCredentials(this.usersignupdata);
        this.usersignupdata = { username: '', password: '', role: 'mr', status: 'activate' };
        this.close();
    }
    close() {
        this.modalController.dismiss(close).then(r => {
            console.log(r);
        });
    }
    changeToggle($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log($event.detail.checked);
            console.log($event.detail.value);
            if ($event.detail.checked == true) {
                this.Togglevaluee = 'activate';
                console.log(this.usersignupdata.status);
            }
            else {
                this.Togglevaluee = 'deactivate';
                console.log(this.usersignupdata.status);
            }
        });
    }
    updateMrLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.mrloginupdate);
            yield this.apicall.api_updateMRlogin(this.mrloginupdate);
            this.getallmrData();
            this.close();
        });
    }
    getallmrData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getMRloginData();
            this.global.AllmrLoginData.subscribe(res => {
                this.allMRlogin = res;
            });
        });
    }
};
ModelPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
ModelPage.propDecorators = {
    Category: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    updateMRLogin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    mtp_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    dcr_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
ModelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-model',
        template: _model_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_model_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModelPage);



/***/ }),

/***/ 2849:
/*!********************************************************!*\
  !*** ./src/app/pages/model/model.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: white;\n  font-weight: 1000;\n}\n\nion-toolbar {\n  --background: #4b8de4;\n  color: white;\n}\n\nion-input {\n  width: 100%;\n  border: 1px solid #1E6FD9;\n  border-radius: 6px;\n}\n\n.mainlist {\n  padding: 10px;\n}\n\n.mainlist ion-button {\n  --background: #1E6FD9;\n  color: white;\n  display: flex;\n  margin: auto;\n  --border-radius: 5px;\n  width: 200px;\n  text-transform: capitalize;\n  margin-top: 20px;\n}\n\n.company_title {\n  background: #0D65D9;\n  height: 80px;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.txt {\n  font-weight: 800;\n  color: #ffffff;\n  text-align: center;\n  font-size: 30px;\n  margin: 8px;\n}\n\nion-card {\n  margin: 0px;\n  margin-inline: 0px;\n}\n\nion-card ion-label {\n  flex: 0%;\n  margin-inline: 0px 0px;\n  margin: 0px 0px 0px 0px;\n}\n\n.list {\n  padding: 16px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 20%;\n  transform: translateY(-50%);\n}\n\n.list .text {\n  font-family: \"semi-bold\", Courier, monospace;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1lZGljYWwlMjBSZXByZXNlbnRhdGl2ZSUyMGFwcFxcYW1pbi1tZWRpY2FsLXJlcHJlc2VudGF0aXZlXFxzcmNcXGFwcFxccGFnZXNcXG1vZGVsXFxtb2RlbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7QUNJSjs7QURIQTtFQUNJLHFCQUFBO0VBQ0YsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREFBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxRQUFBO0VBQ0osc0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRElFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0RKOztBREVBO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtBQ0FKIiwiZmlsZSI6Im1vZGVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0YjhkZTQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMUU2RkQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5tYWlubGlzdHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbmlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUU2RkQ5O1xyXG4gIGNvbG9yOiB3aGl0ZTsgIFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG59XHJcblxyXG4uY29tcGFueV90aXRsZSB7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzBENjVEOTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnR4dCB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDBweDtcclxuXHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZmxleDogMCU7XHJcbiAgICBtYXJnaW4taW5saW5lOiAwcHggMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLmxpc3R7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi50ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnLCBDb3VyaWVyLCBtb25vc3BhY2UsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG59IiwiaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogMTAwMDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM0YjhkZTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxRTZGRDk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLm1haW5saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWlubGlzdCBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMUU2RkQ5O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb21wYW55X3RpdGxlIHtcbiAgYmFja2dyb3VuZDogIzBENjVEOTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnR4dCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1pbmxpbmU6IDBweDtcbn1cbmlvbi1jYXJkIGlvbi1sYWJlbCB7XG4gIGZsZXg6IDAlO1xuICBtYXJnaW4taW5saW5lOiAwcHggMHB4O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbn1cblxuLmxpc3Qge1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMjAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4ubGlzdCAudGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59Il19 */";

/***/ }),

/***/ 1548:
/*!********************************************************!*\
  !*** ./src/app/pages/model/model.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"this.Category == 'addMRLogin'\">Create MR Login</ion-title>\n    <ion-title *ngIf=\"this.Category == 'updateMRLoginData'\">Update MR Login</ion-title>\n    <ion-title *ngIf=\"this.Category == 'seeproduct'\">Products</ion-title>\n    <ion-title *ngIf=\"this.Category == 'seedcrproduct'\">Products</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        close\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div *ngIf=\"this.Category == 'addMRLogin'\">\n  <ion-list class=\"mainlist\">\n    <ion-row style=\"justify-content: center;\">\n      <ion-col size=\"12\" size-md=\"6\">\n        <h6 class=\"font\">Username:</h6>\n        <ion-input  placeholder=\"Username\" [(ngModel)]=\"usersignupdata.username\"></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" size-md=\"6\">\n        <h6 class=\"font\">Password:</h6>\n        <ion-input  placeholder=\"Password\"  [(ngModel)]=\"usersignupdata.password\"></ion-input>\n      </ion-col>\n      <!-- <ion-col  size=\"12\" size-md=\"6\">\n        <ion-list>\n          <ion-item > \n            <ion-label> Deactivates/Activate</ion-label>\n            <ion-toggle slot=\"end\" mode=\"ios\" [enableOnOffLabels]=\"true\" color=\"primary\" value={{this.Togglevaluee}} (ionChange)=\"changeToggle($event, data)\"></ion-toggle>\n          </ion-item>\n          </ion-list>\n      </ion-col> -->\n    </ion-row>\n  \n  <ion-button (click)=\"signup()\">Create Credentials</ion-button>\n  \n    </ion-list>\n</div>\n<div *ngIf=\"this.Category == 'updateMRLoginData'\">\n  <ion-list class=\"mainlist\">\n    <ion-row style=\"justify-content: center;\">\n      <ion-col size=\"12\" size-md=\"6\">\n        <h6 class=\"font\">Username:</h6>\n        <ion-input  placeholder=\"Username\" [(ngModel)]=\"mrloginupdate.username\"></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" size-md=\"6\">\n        <h6 class=\"font\">Password:</h6>\n        <ion-input  placeholder=\"Password\"  [(ngModel)]=\"mrloginupdate.password\"></ion-input>\n      </ion-col>\n      <!-- <ion-col  size=\"12\" size-md=\"6\">\n        <ion-list>\n          <ion-item > \n            <ion-label> Deactivates/Activate</ion-label>\n            <ion-toggle slot=\"end\" mode=\"ios\" [enableOnOffLabels]=\"true\" color=\"primary\" value={{this.Togglevaluee}} (ionChange)=\"changeToggle($event, data)\"></ion-toggle>\n          </ion-item>\n          </ion-list>\n      </ion-col> -->\n    </ion-row>\n  \n  <ion-button (click)=\"updateMrLogin()\">Update Credentials</ion-button>\n  \n    </ion-list>\n</div>\n\n\n<div *ngIf=\"this.Category == 'seeproduct'\">\n\n  <div *ngIf=\"this.allproducts == 0\">\n    <div class=\"list\">\n      <h1 class=\"text\">Sorry! No <span>Products</span></h1>\n    </div>\n</div>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let company of allproducts\" size-md=\"6\" size=\"12\">\n        <ion-card mode=\"ios\">\n          <ion-item style=\"border: none;border-radius: 0px;\" lines=\"none\">\n            <ion-label  slot=\"start\">{{company.p_name}}</ion-label>\n             </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<div *ngIf=\"this.Category == 'seedcrproduct'\">\n\n  <div *ngIf=\"this.alldcrproducts == 0\">\n    <div class=\"list\">\n      <h1 class=\"text\">Sorry! No <span>Products</span></h1>\n    </div>\n</div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let item of alldcrproducts\">\n        <ion-card mode=\"ios\">\n          <ion-item style=\"border: none;border-radius: 0px;\" lines=\"none\">\n            <ion-label  slot=\"start\">{{item.p_name}}</ion-label>\n            <ion-label  slot=\"end\">Qty. {{item.quantity}}</ion-label>\n             </ion-item>\n        </ion-card>\n      </ion-col>\n      </ion-row> \n  </ion-grid>\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_model_model_page_ts.js.map