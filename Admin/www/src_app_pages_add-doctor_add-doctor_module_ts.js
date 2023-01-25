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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apicall.service */ 8130);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ 7465);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);









let AddDoctorPage = class AddDoctorPage {
    constructor(global, apicall, toast, route, loadingCtrl) {
        this.global = global;
        this.apicall = apicall;
        this.toast = toast;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.type = true;
        this.doctordata = { name: '', qualification: '', date_of_birth: '',
            date_of_marrige: '', hospital: '', contact_no: '', city: '', rout: '' };
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
    //   await this.apicall.api_getDoctorrout();
    //   this.global.GetRout.subscribe(res =>{
    //     this.allRout = res;
    //   })
    // }
    add_doctor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (history.state.data !== undefined) {
                this.showLoading();
                yield this.apicall.api_updatedoctor(this.doctordata);
                this.doctordata = { name: '', qualification: '', date_of_birth: '',
                    date_of_marrige: '', hospital: '', contact_no: '', city: '', rout: '' };
                yield this.apicall.api_getDoctor();
                this.global.Doctor.subscribe(res => {
                    this.Doctor = res;
                });
                // this.getAlldoctorrout();
                setTimeout(() => {
                    this.route.navigate(['manage-doctor']);
                }, 1000);
            }
            else {
                console.log(this.doctordata);
                yield this.apicall.api_adddoctor(this.doctordata);
                this.doctordata = { name: '', qualification: '', date_of_birth: '',
                    date_of_marrige: '', hospital: '', contact_no: '', city: '', rout: '' };
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
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...',
                duration: 1000,
                spinner: 'circles',
            });
            loading.present();
        });
    }
};
AddDoctorPage.ctorParameters = () => [
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
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

module.exports = ".refresh_button_set {\n  width: 30px;\n  height: 30px;\n  float: right;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 5px;\n  margin-right: 10px;\n}\n\n.refrsh_img {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  margin: auto;\n}\n\nh6 {\n  float: right;\n  padding-top: 22px;\n  margin-right: -26px;\n  font-weight: bolder;\n  font-size: 9px;\n  color: #0D65D9;\n}\n\nion-title {\n  color: var(--ion-color-primary);\n}\n\n.inputLabel {\n  font-weight: 300;\n  color: var(--ion-color-primary);\n}\n\nion-item {\n  border: 1px solid #1E6FD9;\n  border-radius: 8px;\n}\n\nion-radio-group {\n  display: flex;\n}\n\n.Label2 {\n  padding: 20px;\n  font-weight: 800;\n}\n\n.ListGroup .inputLabel3 {\n  font-weight: 800;\n  padding: 5px;\n}\n\n.ListGroup .radio-button-group {\n  display: flex;\n  justify-content: space-between;\n  padding: 11px 0px;\n}\n\n.ListGroup .radio-label {\n  margin-left: 3px;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.ListGroup .flex {\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n}\n\nion-button {\n  --background: #1E6FD9;\n  --color: white;\n  width: 200px;\n  display: flex;\n  margin: auto;\n  --border-radius: 5px;\n  margin-top: 3%;\n  font-weight: 800;\n}\n\nion-select {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1kb2N0b3IucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWVkaWNhbCUyMFJlcHJlc2VudGF0aXZlJTIwYXBwXFxhbWluLW1lZGljYWwtcmVwcmVzZW50YXRpdmVcXHNyY1xcYXBwXFxwYWdlc1xcYWRkLWRvY3RvclxcYWRkLWRvY3Rvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0g7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFSTtFQUNBLCtCQUFBO0FDQ0o7O0FESUE7RUFDSSxnQkFBQTtFQUNBLCtCQUFBO0FDREo7O0FESUE7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0FDRko7O0FETUE7RUFDSSxhQUFBO0FDSEo7O0FES0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURNWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0hoQjs7QURNWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDSmhCOztBRE9ZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMaEI7O0FEU1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtBQ1JoQjs7QURZQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDVEo7O0FEY0U7RUFDRSxXQUFBO0FDWEoiLCJmaWxlIjoiYWRkLWRvY3Rvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmcmVzaF9idXR0b25fc2V0e1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG5cclxufVxyXG4ucmVmcnNoX2ltZ3tcclxuICAgd2lkdGg6IDIwcHg7XHJcbiAgIGhlaWdodDogMjBweDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oNntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG4gIH1cclxuICAgIFxyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbi5pbnB1dExhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxRTZGRDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgXHJcbn1cclxuaW9uLXJhZGlvLWdyb3Vwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uTGFiZWwye1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuICAgICAgICAgLkxpc3RHcm91cHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAuaW5wdXRMYWJlbDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbi1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTFweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5yYWRpby1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5mbGV4e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzFFNkZEOTtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBpb24tc2VsZWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuXHJcbiIsIi5yZWZyZXNoX2J1dHRvbl9zZXQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICMwRDY1RDk7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yZWZyc2hfaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5oNiB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogLTI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzBENjVEOTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmlucHV0TGFiZWwge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxRTZGRDk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaW9uLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLkxhYmVsMiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5MaXN0R3JvdXAgLmlucHV0TGFiZWwzIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogNXB4O1xufVxuLkxpc3RHcm91cCAucmFkaW8tYnV0dG9uLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMXB4IDBweDtcbn1cbi5MaXN0R3JvdXAgLnJhZGlvLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuLkxpc3RHcm91cCAuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMUU2RkQ5O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";

/***/ }),

/***/ 1237:
/*!******************************************************************!*\
  !*** ./src/app/pages/add-doctor/add-doctor.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-toggle>\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>\n      Add Doctor\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<!-- header End -->\n\n<ion-content>\n  <ion-grid style=\"margin-top: 50px;\">\n    <ion-row class=\"container\">\n      <ion-col size-md=\"6\" size=\"12\">\n        <ion-label  class=\"inputLabel\">Name:</ion-label>\n        <ion-item lines=\"none\">\n        <ion-input  placeholder=\"Name\" [(ngModel)]=\"this.doctordata.name\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size-md=\"6\" size=\"12\">\n        <ion-label class=\"inputLabel\">Qualification:</ion-label>\n        <ion-item lines=\"none\">\n        <ion-input placeholder=\"Qualification\" [(ngModel)]=\"this.doctordata.qualification\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size-md=\"6\" size=\"12\">\n        <ion-label class=\"inputLabel\">Date of Birth:</ion-label>\n        <ion-item lines=\"none\">\n        <ion-input type=\"date\" [(ngModel)]=\"this.doctordata.date_of_birth\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size-md=\"6\" size=\"12\">\n        <ion-label class=\"inputLabel\">Date of Marriage:</ion-label>\n        <ion-item lines=\"none\">\n        <ion-input type=\"date\" [(ngModel)]=\"this.doctordata.date_of_marrige\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"container\">\n      \n      <ion-col size-md=\"6\" size=\"12\">\n        <ion-label class=\"inputLabel\">Hospital: </ion-label>\n        <ion-item lines=\"none\">\n        <ion-input placeholder=\"Hospital\" [(ngModel)]=\"this.doctordata.hospital\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size-md=\"6\" size=\"12\">\n        <ion-label class=\"inputLabel\">Contact No:</ion-label>\n        <ion-item lines=\"none\">\n        <ion-input placeholder=\"Contact No:\" [(ngModel)]=\"this.doctordata.contact_no\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size-md=\"6\" size=\"12\">\n        <ion-label class=\"inputLabel\">City:</ion-label>\n        <div  *ngIf=\"this.stateData == 'addData'\">\n          <ion-item lines=\"none\">\n            <ion-select mode=\"ios\" [(ngModel)]=\"this.doctordata.city\" placeholder=\"Select City\">\n              <ion-select-option *ngFor=\"let item of allCities\" value=\"{{item.city}}\">{{item.city}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n        <div  *ngIf=\"this.stateData == 'updateData'\">\n         <ion-item lines=\"none\" (click)=\"allow()\">\n          <ion-input readonly=\"true\" placeholder=\"Select City\" [(ngModel)]=\"this.doctordata.city\"></ion-input>\n         </ion-item>\n        </div>\n      </ion-col>\n      \n      <ion-col size-md=\"6\" size=\"12\">\n        <ion-label class=\"inputLabel\">Route:</ion-label>\n        <ion-item lines=\"none\">\n        <ion-input placeholder=\"Route\" [(ngModel)]=\"this.doctordata.rout\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  \n    \n  </ion-grid>\n  \n<ion-button (click)=\"add_doctor()\">Add</ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-doctor_add-doctor_module_ts.js.map