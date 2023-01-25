"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-doctor_add-doctor_module_ts"],{

/***/ 5104:
/*!***************************************************************!*\
  !*** ./src/app/pages/add-doctor/add-doctor-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDoctorPageRoutingModule": () => (/* binding */ AddDoctorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _add_doctor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-doctor.page */ 2532);




const routes = [
    {
        path: '',
        component: _add_doctor_page__WEBPACK_IMPORTED_MODULE_0__.AddDoctorPage
    }
];
let AddDoctorPageRoutingModule = class AddDoctorPageRoutingModule {
};
AddDoctorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddDoctorPageRoutingModule);



/***/ }),

/***/ 6976:
/*!*******************************************************!*\
  !*** ./src/app/pages/add-doctor/add-doctor.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDoctorPageModule": () => (/* binding */ AddDoctorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_doctor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-doctor-routing.module */ 5104);
/* harmony import */ var _add_doctor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-doctor.page */ 2532);







let AddDoctorPageModule = class AddDoctorPageModule {
};
AddDoctorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_doctor_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddDoctorPageRoutingModule
        ],
        declarations: [_add_doctor_page__WEBPACK_IMPORTED_MODULE_1__.AddDoctorPage]
    })
], AddDoctorPageModule);



/***/ }),

/***/ 2532:
/*!*****************************************************!*\
  !*** ./src/app/pages/add-doctor/add-doctor.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDoctorPage": () => (/* binding */ AddDoctorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_doctor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-doctor.page.html?ngResource */ 1237);
/* harmony import */ var _add_doctor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-doctor.page.scss?ngResource */ 5551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/global/global.service */ 6925);
/* harmony import */ var src_app_core_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toast/toast.service */ 6791);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/apicall/apicall.service */ 4985);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);









let AddDoctorPage = class AddDoctorPage {
    constructor(global, apicall, toast, route, loadingCtrl, alertController) {
        this.global = global;
        this.apicall = apicall;
        this.toast = toast;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.doctordata = {
            name: '',
            qualification: '',
            date_of_birth: '',
            date_of_marrige: '',
            hospital: '',
            contact_no: '',
            city: '',
            rout: ''
        };
        this.stateData = "addData";
    }
    ngOnInit() {
        this.getAllCities();
        if (history.state.data !== undefined) {
            this.stateData = "updateData";
            this.doctordata = history.state.data;
            console.log(this.doctordata);
            setTimeout(() => {
                this.stateData = "addData";
                console.log(this.stateData);
            }, 1000);
        }
    }
    allow() {
        this.stateData = "addData";
    }
    getAllCities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getCities();
            this.global.GetCities.subscribe(res => {
                this.allCities = res;
            });
        });
    }
    // async getAlldoctorrout(){
    // await this.apicall.api_getDoctorrout();
    // this.global.GetRout.subscribe(res =>{
    //     this.allRout = res;
    // })
    // }
    adddata() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (history.state.data !== undefined) {
                this.showLoading();
                yield this.apicall.api_updatedoctor(this.doctordata);
                this.doctordata = {
                    name: '',
                    qualification: '',
                    date_of_birth: '',
                    date_of_marrige: '',
                    hospital: '',
                    contact_no: '',
                    city: '',
                    rout: ''
                };
                yield this.apicall.api_getDoctor();
                this.global.Doctor.subscribe(res => {
                    this.Doctor = res;
                });
                // this.getAlldoctorrout();
                setTimeout(() => {
                    this.route.navigate(['manage-doctors']);
                }, 1000);
            }
            else {
                console.log(this.doctordata);
                yield this.apicall.api_adddoctor(this.doctordata);
                this.doctordata = {
                    name: '',
                    qualification: '',
                    date_of_birth: '',
                    date_of_marrige: '',
                    hospital: '',
                    contact_no: '',
                    city: '',
                    rout: ''
                };
                yield this.apicall.api_getDoctor();
                this.global.Doctor.subscribe(res => {
                    this.Doctor = res;
                });
                // this.getAlldoctorrout();
            }
        });
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({ message: 'Loading...', duration: 1000, spinner: 'circles' });
            loading.present();
        });
    }
};
AddDoctorPage.ctorParameters = () => [
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService },
    { type: src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_4__.ApicallService },
    { type: src_app_core_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
AddDoctorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-doctor',
        template: _add_doctor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_doctor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddDoctorPage);



/***/ }),

/***/ 5551:
/*!******************************************************************!*\
  !*** ./src/app/pages/add-doctor/add-doctor.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".refresh_button_set {\n  width: 30px;\n  height: 30px;\n  float: right;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 5px;\n  margin-right: 10px;\n}\n\n.refrsh_img {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  margin: auto;\n}\n\nh6 {\n  float: right;\n  padding-top: 22px;\n  margin-right: -26px;\n  font-weight: bolder;\n  font-size: 9px;\n  color: #0D65D9;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-title {\n  font-size: 20px;\n  color: #0D65D9;\n}\n\n.inputLabel {\n  font-weight: 300;\n  color: #0D65D9;\n}\n\n.container {\n  padding: 10px;\n}\n\nion-item {\n  height: 50px;\n  border: 1px solid #1E6FD9;\n  border-radius: 15px;\n  box-shadow: 0px 3px 3px 0px rgba(190, 184, 184, 0.733);\n}\n\nion-radio-group {\n  display: flex;\n}\n\n.Label2 {\n  padding: 20px;\n  font-weight: 800;\n}\n\n.ListGroup .inputLabel3 {\n  font-weight: 800;\n  padding: 5px;\n}\n\n.ListGroup .radio-button-group {\n  display: flex;\n  justify-content: space-between;\n  padding: 11px 0px;\n}\n\n.ListGroup .radio-label {\n  margin-left: 3px;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.ListGroup .flex {\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n}\n\nion-button {\n  --background: #1E6FD9;\n  --color: white;\n  width: 200px;\n  display: flex;\n  margin: auto;\n  --border-radius: 10px;\n  margin-top: 5%;\n  font-weight: 800;\n}\n\nion-select {\n  width: 100%;\n}\n\nion-grid {\n  padding-top: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1kb2N0b3IucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWVkaWNhbCUyMFJlcHJlc2VudGF0aXZlJTIwYXBwXFxNZWRpY2FsUmVwcmVzZW50YXRpdmVcXHNyY1xcYXBwXFxwYWdlc1xcYWRkLWRvY3RvclxcYWRkLWRvY3Rvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0g7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDSjs7QURDRTtFQUNFLG1CQUFBO0FDRUo7O0FEQ0k7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURDWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0VoQjs7QURDWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDQ2hCOztBREVZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBaEI7O0FESVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtBQ0hoQjs7QURPQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSko7O0FEVUU7RUFDRSxXQUFBO0FDUEo7O0FEU0U7RUFDRSxlQUFBO0FDTkoiLCJmaWxlIjoiYWRkLWRvY3Rvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmcmVzaF9idXR0b25fc2V0e1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG5cclxufVxyXG4ucmVmcnNoX2ltZ3tcclxuICAgd2lkdGg6IDIwcHg7XHJcbiAgIGhlaWdodDogMjBweDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oNntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG4gIH1cclxuICBpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuLmlucHV0TGFiZWx7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICMwRDY1RDk7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMUU2RkQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCByZ2JhKDE5MCwgMTg0LCAxODQsIDAuNzMzKTtcclxuICAgIFxyXG59XHJcbmlvbi1yYWRpby1ncm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLkxhYmVsMntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbiAgICAgICAgIC5MaXN0R3JvdXB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLmlucHV0TGFiZWwze1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yYWRpby1idXR0b24tZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAucmFkaW8tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZmxleHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxRTZGRDk7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBpb24tc2VsZWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1ncmlke1xyXG4gICAgcGFkZGluZy10b3A6IDMlO1xyXG59XHJcbiAgXHJcbiIsIi5yZWZyZXNoX2J1dHRvbl9zZXQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICMwRDY1RDk7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yZWZyc2hfaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5oNiB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogLTI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzBENjVEOTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMEQ2NUQ5O1xufVxuXG4uaW5wdXRMYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMEQ2NUQ5O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxRTZGRDk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCByZ2JhKDE5MCwgMTg0LCAxODQsIDAuNzMzKTtcbn1cblxuaW9uLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLkxhYmVsMiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5MaXN0R3JvdXAgLmlucHV0TGFiZWwzIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogNXB4O1xufVxuLkxpc3RHcm91cCAucmFkaW8tYnV0dG9uLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMXB4IDBweDtcbn1cbi5MaXN0R3JvdXAgLnJhZGlvLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuLkxpc3RHcm91cCAuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMUU2RkQ5O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nLXRvcDogMyU7XG59Il19 */";

/***/ }),

/***/ 1237:
/*!******************************************************************!*\
  !*** ./src/app/pages/add-doctor/add-doctor.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" default-href=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Add Doctor\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- header End -->\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"container\">\r\n      <ion-col size-md=\"6\" size=\"12\">\r\n        <ion-label  class=\"inputLabel\">Name:</ion-label>\r\n        <ion-item lines=\"none\">\r\n        <ion-input [(ngModel)]=\"this.doctordata.name\" placeholder=\"Name\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size-md=\"6\" size=\"12\">\r\n        <ion-label class=\"inputLabel\">Qualification:</ion-label>\r\n        <ion-item lines=\"none\">\r\n        <ion-input [(ngModel)]=\"this.doctordata.qualification\" placeholder=\"Qualification\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"container\">\r\n      <ion-col size-md=\"6\" size=\"12\">\r\n        <ion-label  class=\"inputLabel\">Date of Birth:</ion-label>\r\n        <ion-item lines=\"none\">\r\n        <ion-input type=\"date\" [(ngModel)]=\"this.doctordata.date_of_birth\" placeholder=\"Date of Birth\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size-md=\"6\" size=\"12\">\r\n        <ion-label class=\"inputLabel\">Date of Marriage:</ion-label>\r\n        <ion-item lines=\"none\">\r\n        <ion-input type=\"date\" [(ngModel)]=\"this.doctordata.date_of_marrige\" placeholder=\"Date of marrige\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"container\">\r\n      \r\n      <ion-col size-md=\"6\" size=\"12\">\r\n        <ion-label class=\"inputLabel\">Hospital: </ion-label>\r\n        <ion-item lines=\"none\">\r\n        <ion-input [(ngModel)]=\"this.doctordata.hospital\" placeholder=\"Hospital\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size-md=\"6\" size=\"12\">\r\n        <ion-label class=\"inputLabel\">Contact No:</ion-label>\r\n        <ion-item lines=\"none\">\r\n        <ion-input [(ngModel)]=\"this.doctordata.contact_no\" placeholder=\"Contact No:\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"container\">\r\n      <ion-col size-md=\"6\" size=\"12\">\r\n        <ion-label class=\"inputLabel\">City:</ion-label>\r\n        <div  *ngIf=\"this.stateData == 'addData'\">\r\n          <ion-item lines=\"none\">\r\n            <ion-select mode=\"ios\" interface=\"action-sheet\" [(ngModel)]=\"this.doctordata.city\" placeholder=\"Select City\">\r\n              <ion-select-option *ngFor=\"let item of allCities\" value=\"{{item.city}}\">{{item.city}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n        <div  *ngIf=\"this.stateData == 'updateData'\">\r\n         <ion-item lines=\"none\" (click)=\"allow()\">\r\n          <ion-input readonly=\"true\" placeholder=\"Select City\" [(ngModel)]=\"this.doctordata.city\"></ion-input>\r\n         </ion-item>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size-md=\"6\" size=\"12\">\r\n        <ion-label class=\"inputLabel\">Rout:</ion-label>\r\n        <ion-item lines=\"none\">\r\n        <ion-input [(ngModel)]=\"this.doctordata.rout\" placeholder=\"Rout:\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      </ion-row>\r\n  \r\n    \r\n  </ion-grid>\r\n  \r\n<ion-button (click)=\"adddata()\">Add</ion-button>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-doctor_add-doctor_module_ts.js.map