"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_manage-doctor_manage-doctor_module_ts"],{

/***/ 6505:
/*!*********************************************************************!*\
  !*** ./src/app/pages/manage-doctor/manage-doctor-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageDoctorPageRoutingModule": () => (/* binding */ ManageDoctorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _manage_doctor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-doctor.page */ 9600);




const routes = [
    {
        path: '',
        component: _manage_doctor_page__WEBPACK_IMPORTED_MODULE_0__.ManageDoctorPage
    }
];
let ManageDoctorPageRoutingModule = class ManageDoctorPageRoutingModule {
};
ManageDoctorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManageDoctorPageRoutingModule);



/***/ }),

/***/ 7785:
/*!*************************************************************!*\
  !*** ./src/app/pages/manage-doctor/manage-doctor.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageDoctorPageModule": () => (/* binding */ ManageDoctorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _manage_doctor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-doctor-routing.module */ 6505);
/* harmony import */ var _manage_doctor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-doctor.page */ 9600);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let ManageDoctorPageModule = class ManageDoctorPageModule {
};
ManageDoctorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _manage_doctor_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageDoctorPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_manage_doctor_page__WEBPACK_IMPORTED_MODULE_1__.ManageDoctorPage]
    })
], ManageDoctorPageModule);



/***/ }),

/***/ 9600:
/*!***********************************************************!*\
  !*** ./src/app/pages/manage-doctor/manage-doctor.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageDoctorPage": () => (/* binding */ ManageDoctorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _manage_doctor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-doctor.page.html?ngResource */ 5067);
/* harmony import */ var _manage_doctor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-doctor.page.scss?ngResource */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apicall.service */ 8130);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ 7465);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);









let ManageDoctorPage = class ManageDoctorPage {
    constructor(router, global, apicall, toast, loadingCtrl, alertController) {
        this.router = router;
        this.global = global;
        this.apicall = apicall;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.edit = { name: '', qualification: '', number: '', route: '' };
        this.getdoctor = { city: '', rout: '' };
    }
    ngOnInit() {
        this.get_doctor();
        this.getAllCities();
        this.getAlldoctorrout();
    }
    getAllCities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getCities();
            this.global.GetCities.subscribe(res => {
                this.allCities = res;
            });
        });
    }
    getAlldoctorrout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.global.GetRout.subscribe(res => {
                this.allRout = res;
            });
        });
    }
    get_doctor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getDoctor();
            this.global.Doctor.subscribe(res => {
                if (res == '') {
                    this.toast.docnotFound();
                }
                else {
                    this.Doctor = res;
                }
            });
        });
    }
    selectCity(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event.target.value);
            yield this.apicall.api_getDoctorrout(event.target.value);
            if (event.target.value == 'all') {
                yield this.apicall.api_getDoctor();
            }
            else {
                this.getdoctor.city = event.target.value;
                yield this.apicall.api_getdoctorbyAlltype(this.getdoctor);
            }
        });
    }
    selectroute(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event.target.value);
            this.getdoctor.rout = event.target.value;
            yield this.apicall.api_getdoctorbyAlltype(this.getdoctor);
        });
    }
    add_doctor() {
        this.router.navigate(['add-doctor']);
    }
    delete(d_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const x = { d_id: d_id };
            yield this.apicall.api_deletedoctor(x);
            yield this.get_doctor();
        });
    }
    update(data) {
        console.log(data);
        this.showLoading();
        setTimeout(() => {
            this.router.navigate(['/add-doctor'], { state: { data: data } });
        }, 1000);
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
    DeleteAlert(d_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you sure to delete this Doctor!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => { }
                    }, {
                        text: 'OK',
                        role: 'confirm',
                        handler: () => {
                            console.log(d_id);
                            this.delete(d_id);
                        }
                    },
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
};
ManageDoctorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
ManageDoctorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-manage-doctor',
        template: _manage_doctor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_manage_doctor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageDoctorPage);



/***/ }),

/***/ 3825:
/*!************************************************************************!*\
  !*** ./src/app/pages/manage-doctor/manage-doctor.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".refresh_button_set {\n  width: 30px;\n  height: 30px;\n  float: right;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 5px;\n  margin-right: 29px;\n}\n\n.refresh_text {\n  float: right;\n  padding-top: 20px;\n  margin-right: -52px;\n  font-size: 14px;\n  font-weight: bolder;\n}\n\n.refrsh_img {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  margin: auto;\n}\n\n.plus_button_set {\n  width: 30px;\n  height: 30px;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 10px;\n}\n\nion-title {\n  color: var(--ion-color-primary);\n}\n\n.divTable {\n  overflow-x: auto;\n  padding: 9px 18px 18px 18px;\n}\n\nion-list {\n  display: flex;\n}\n\n.page_container {\n  padding: 15px;\n}\n\n.doc_list {\n  margin: auto;\n  background: white;\n  box-shadow: 0px 0px 2px 1px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: flex-end;\n  justify-content: space-between;\n  align-items: stretch;\n}\n\n.doctor_name {\n  margin: 0;\n  font-weight: bold;\n  margin-top: 11px;\n  font-size: 14px;\n  margin-left: 9px;\n}\n\nspan {\n  font-size: 11px;\n  font-weight: 100;\n}\n\n.update_icon {\n  font-size: 25px;\n  margin-right: 6px;\n  color: #0D65D9;\n}\n\n.input {\n  width: 50%;\n  display: flex;\n  margin: auto;\n  --background: white;\n  border-radius: 20px;\n  margin-top: 16px;\n  font-size: 13px;\n  border: 1px solid #0d65d9;\n  --padding-start:10px !important;\n}\n\n.dispale_set {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n\nion-select {\n  border: 1px solid #0D65D9;\n  background: white;\n  border-radius: 6px;\n  width: 100%;\n  --padding-start: 10px !important;\n}\n\n.toobar {\n  --background: #0d65d9;\n}\n\n.color {\n  color: white;\n}\n\nion-content ion-input {\n  border: 1px solid #0d65d9;\n  border-radius: 6px;\n}\n\n.font {\n  font-weight: bold;\n  margin: 7px;\n  color: #0D65D9;\n}\n\n.page_container {\n  padding: 15px;\n}\n\n.submit_button {\n  display: flex;\n  margin: auto;\n  width: 30%;\n  margin-top: 25px;\n}\n\n.row_center {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1kb2N0b3IucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWVkaWNhbCUyMFJlcHJlc2VudGF0aXZlJTIwYXBwXFxhbWluLW1lZGljYWwtcmVwcmVzZW50YXRpdmVcXHNyY1xcYXBwXFxwYWdlc1xcbWFuYWdlLWRvY3RvclxcbWFuYWdlLWRvY3Rvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtBQ0NOOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENFO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFTjs7QURJQTtFQUNJLCtCQUFBO0FDREo7O0FESUU7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0FDRE47O0FES0U7RUFDSSxhQUFBO0FDRk47O0FETUU7RUFDRSxhQUFBO0FDSEo7O0FETUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQ0hKOztBRE1FO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRFlJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0YsbUJBQUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0QsK0JBQUE7QUNUTDs7QURZSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ1ROOztBRFdJO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNELGdDQUFBO0FDUkw7O0FEY0U7RUFDRSxxQkFBQTtBQ1hKOztBRGNFO0VBQ0UsWUFBQTtBQ1hKOztBRGNJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ1hOOztBRGVFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ1pKOztBRGNFO0VBQ0UsYUFBQTtBQ1hKOztBRGFFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNWSjs7QURZQTtFQUNJLHVCQUFBO0FDVEoiLCJmaWxlIjoibWFuYWdlLWRvY3Rvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmcmVzaF9idXR0b25fc2V0e1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjlweDtcclxuICB9XHJcbiAgLnJlZnJlc2hfdGV4dHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtNTJweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnJlZnJzaF9pbWd7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5wbHVzX2J1dHRvbl9zZXR7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwRDY1RDk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuICBcclxuICAuZGl2VGFibGV7XHJcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDlweCAgMThweCAxOHB4IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGlvbi1saXN0e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAvLyBkb2N0b3IgbGlzdCBzdHJhdFxyXG4gIC5wYWdlX2NvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuZG9jX2xpc3R7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcblxyXG4gIC5kb2N0b3JfbmFtZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgfVxyXG4gXHJcbiAgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgfVxyXG5cclxuICAudXBkYXRlX2ljb257XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG59XHJcbiAgXHJcbiAgLy8gZG9jdG9yIGxpc3QgZW5kXHJcblxyXG5cclxuXHJcblxyXG4gICBcclxuICAgIC5pbnB1dHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGQ2NWQ5O1xyXG4gICAgIC0tcGFkZGluZy1zdGFydDoxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5kaXNwYWxlX3NldHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3R7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwRDY1RDk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIC0tcGFkZGluZy1zdGFydDogMTBweCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG5cclxuICAudG9vYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMGQ2NWQ5O1xyXG4gIFxyXG4gIH1cclxuICAuY29sb3J7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMGQ2NWQ5IDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvbnR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogN3B4O1xyXG4gICAgY29sb3I6ICMwRDY1RDk7XHJcbiAgfVxyXG4gIC5wYWdlX2NvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIC5zdWJtaXRfYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi5yb3dfY2VudGVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0gICAgXHJcbiAgIiwiLnJlZnJlc2hfYnV0dG9uX3NldCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogIzBENjVEOTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMjlweDtcbn1cblxuLnJlZnJlc2hfdGV4dCB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogLTUycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnJlZnJzaF9pbWcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5wbHVzX2J1dHRvbl9zZXQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmRpdlRhYmxlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogOXB4IDE4cHggMThweCAxOHB4O1xufVxuXG5pb24tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wYWdlX2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5kb2NfbGlzdCB7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4uZG9jdG9yX25hbWUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi51cGRhdGVfaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIGNvbG9yOiAjMEQ2NUQ5O1xufVxuXG4uaW5wdXQge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkNjVkOTtcbiAgLS1wYWRkaW5nLXN0YXJ0OjEwcHggIWltcG9ydGFudDtcbn1cblxuLmRpc3BhbGVfc2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwRDY1RDk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnRvb2JhciB7XG4gIC0tYmFja2dyb3VuZDogIzBkNjVkOTtcbn1cblxuLmNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCBpb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGQ2NWQ5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5mb250IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogN3B4O1xuICBjb2xvcjogIzBENjVEOTtcbn1cblxuLnBhZ2VfY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnN1Ym1pdF9idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5yb3dfY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 5067:
/*!************************************************************************!*\
  !*** ./src/app/pages/manage-doctor/manage-doctor.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\n    <div (click)=\"add_doctor()\">\n      <ion-list class=\"refresh_button_set\">\n        <img class=\"refrsh_img\" src=\"../../../assets/+.png\">\n      </ion-list>\n      <h6 class=\"refresh_text\">Add Doctor</h6>\n    </div>\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">  \n      <ion-input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filter_data\"></ion-input>\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\n    </ion-item>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>\n      Manage Doctor\n    </ion-title> -->\n    \n    <!-- <ion-buttons slot=\"end\">\n      <ion-menu-toggle>\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-toggle>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<!-- header End -->\n\n<ion-content>\n  <!-- <ion-input class=\"input\" placeholder=\"Search-Doctor\" [(ngModel)]=\"filter_data\"></ion-input> -->\n  <!-- select ion-select-option -->\n  <ion-row style=\"justify-content: center;\">\n    <ion-col size=\"12\" size-md=\"4\">\n      <ion-list style=\"background: transparent;\">\n        <ion-select mode=\"ios\" placeholder=\"city\" (ionChange)=\"selectCity($event)\">\n          <ion-select-option value=\"all\">All</ion-select-option>\n          <ion-select-option *ngFor=\"let item of allCities\" value=\"{{item.city}}\">{{item.city}}</ion-select-option>\n        </ion-select>\n      </ion-list>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"4\">\n      <ion-list style=\"background: transparent;\"> \n        <ion-select mode=\"ios\" placeholder=\"route\" (ionChange)=\"selectroute($event)\">\n          <ion-select-option *ngFor=\"let item of allRout\" value=\"{{item.rout}}\">{{item.rout}}</ion-select-option>\n          <ion-select-option *ngIf=\"this.allRout == 0\" value=\"No Rout Found\">No Rout Found</ion-select-option>\n        </ion-select>\n      </ion-list>\n    </ion-col>\n    \n  </ion-row>\n\n\n\n  <div style=\"padding: 10px;\">\n    <div class=\"table-responsive table-hover ion-margin bg-white\">\n      <table class=\"table table-hover display mb-4 dataTablesCard\">\n        <thead>\n          <tr>\n            <th>No.</th>\n            <th>Name</th>\n            <th>Qualification</th>\n            <th>Contact No.</th>\n            <th>Date of Birth</th>\n            <th>Date of Marriage</th>\n            <th>Hospital</th>\n            <th>City</th>\n            <th>rout</th>\n            <th>Update</th>\n            <th>Delete</th>\n           \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of Doctor | filter : filter_data; index as i\">\n            <td>{{i+1}}</td>\n            <td>Dr. {{item.name}}</td>\n            <td>{{item.qualification}}</td>\n            <td>{{item.contact_no}}</td>\n            <td>{{item.date_of_birth}}</td>\n            <td>{{item.date_of_marrige}}</td>\n            <td>{{item.hospital}}</td>\n            <td>{{item.city}}</td>\n            <td>{{item.rout}}</td> \n            <td (click)=\"update(item)\"><span\n              style=\"font-size: 15px;color: var(--ion-color-primary); cursor: pointer;\">Update</span></td>\n              <td (click)=\"DeleteAlert(item.d_id)\"><span style=\"font-size: 15px;color: var(--ion-color-primary); cursor: pointer;\">Delete</span></td>             \n          </tr>\n        </tbody>\n      </table>\n    </div>\n</div>\n\n\n  <!-- doctors list  start -->\n  <!-- <div class=\"page_container\">\n\n    <ion-row  >\n      <ion-col *ngFor=\"let item of Doctor | filter : filter_data;\" size=\"12\" size-md=\"6\"size-lg=\"6\" >\n        <ion-list  class=\"doc_list\">\n\n          <h6 class=\"doctor_name\">Dr. {{item.name}}<br>\n            <span>{{item.qualification}}</span><br>\n            <span>{{item.contact_no}}</span><br>\n            <span>{{item.hospital}}</span><br>\n            <span style=\"margin-right: 15px;\">{{item.city}}</span>\n            <span>{{item.rout}}</span>\n          </h6>\n          <div>\n          <ion-icon class=\"update_icon\" name=\"create-outline\" (click)=\"update(item)\"></ion-icon>\n          <ion-icon class=\"update_icon\"  name=\"trash-outline\" (click)=\"delete(item.d_id)\"></ion-icon>\n          </div>\n        </ion-list>\n     </ion-col>\n    </ion-row>\n\n  </div> -->\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_manage-doctor_manage-doctor_module_ts.js.map