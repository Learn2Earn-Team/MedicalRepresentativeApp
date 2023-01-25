"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_manage-doctors_manage-doctors_module_ts"],{

/***/ 9746:
/*!***********************************************************************!*\
  !*** ./src/app/pages/manage-doctors/manage-doctors-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageDoctorsPageRoutingModule": () => (/* binding */ ManageDoctorsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _manage_doctors_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-doctors.page */ 7932);




const routes = [
    {
        path: '',
        component: _manage_doctors_page__WEBPACK_IMPORTED_MODULE_0__.ManageDoctorsPage
    }
];
let ManageDoctorsPageRoutingModule = class ManageDoctorsPageRoutingModule {
};
ManageDoctorsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManageDoctorsPageRoutingModule);



/***/ }),

/***/ 2822:
/*!***************************************************************!*\
  !*** ./src/app/pages/manage-doctors/manage-doctors.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageDoctorsPageModule": () => (/* binding */ ManageDoctorsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _manage_doctors_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-doctors-routing.module */ 9746);
/* harmony import */ var _manage_doctors_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-doctors.page */ 7932);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let ManageDoctorsPageModule = class ManageDoctorsPageModule {
};
ManageDoctorsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _manage_doctors_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageDoctorsPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_manage_doctors_page__WEBPACK_IMPORTED_MODULE_1__.ManageDoctorsPage]
    })
], ManageDoctorsPageModule);



/***/ }),

/***/ 7932:
/*!*************************************************************!*\
  !*** ./src/app/pages/manage-doctors/manage-doctors.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageDoctorsPage": () => (/* binding */ ManageDoctorsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _manage_doctors_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-doctors.page.html?ngResource */ 6041);
/* harmony import */ var _manage_doctors_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-doctors.page.scss?ngResource */ 4309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/apicall/apicall.service */ 4985);
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/global.service */ 6925);
/* harmony import */ var src_app_core_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toast/toast.service */ 6791);









let ManageDoctorsPage = class ManageDoctorsPage {
    constructor(router, global, apicall, toast, loadingCtrl, alertController) {
        this.router = router;
        this.global = global;
        this.apicall = apicall;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.getdoctor = {
            city: '',
            rout: ''
        };
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
                this.Doctor = res;
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
            console.log(d_id);
            const x = {
                d_id: d_id
            };
            yield this.apicall.api_deletedoctor(x);
            yield this.get_doctor();
        });
    }
    update(data) {
        console.log(data);
        this.showLoading();
        setTimeout(() => {
            this.router.navigate(['/add-doctor'], {
                state: {
                    data: data
                }
            });
        }, 1000);
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({ message: 'Loading...', duration: 1000, spinner: 'circles' });
            loading.present();
        });
    }
};
ManageDoctorsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: src_app_core_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
ManageDoctorsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-manage-doctors',
        template: _manage_doctors_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_manage_doctors_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageDoctorsPage);



/***/ }),

/***/ 9991:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe),
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class Ng2SearchPipe {
  /**
   * @param {?} items object from array
   * @param {?} term term's search
   * @return {?}
   */
  transform(items, term) {
    if (!term || !items) return items;
    return Ng2SearchPipe.filter(items, term);
  }
  /**
   *
   * @param {?} items List of items to filter
   * @param {?} term  a string term to compare with every property of the list
   *
   * @return {?}
   */


  static filter(items, term) {
    const
    /** @type {?} */
    toCompare = term.toLowerCase();
    /**
     * @param {?} item
     * @param {?} term
     * @return {?}
     */

    function checkInside(item, term) {
      for (let
      /** @type {?} */
      property in item) {
        if (item[property] === null || item[property] == undefined) {
          continue;
        }

        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        }

        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }

      return false;
    }

    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }

}

Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
  return new (t || Ng2SearchPipe)();
};

Ng2SearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: Ng2SearchPipe,
  pure: false
});
Ng2SearchPipe.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Ng2SearchPipe,
  factory: Ng2SearchPipe.ɵfac
});
/**
 * @nocollapse
 */

Ng2SearchPipe.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filter',
      pure: false
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

class Ng2SearchPipeModule {}

Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) {
  return new (t || Ng2SearchPipeModule)();
};

Ng2SearchPipeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: Ng2SearchPipeModule
});
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */

Ng2SearchPipeModule.ctorParameters = () => [];

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [Ng2SearchPipe],
      exports: [Ng2SearchPipe]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
    declarations: [Ng2SearchPipe],
    exports: [Ng2SearchPipe]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 4309:
/*!**************************************************************************!*\
  !*** ./src/app/pages/manage-doctors/manage-doctors.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".refresh_button_set {\n  width: 30px;\n  height: 30px;\n  float: right;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 5px;\n  margin-right: 29px;\n}\n\n.refresh_text {\n  float: right;\n  padding-top: 20px;\n  margin-right: -52px;\n  font-size: 14px;\n  color: #0d65d9;\n  font-weight: bolder;\n}\n\n.refrsh_img {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  margin: auto;\n}\n\n.plus_button_set {\n  width: 30px;\n  height: 30px;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 10px;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-title {\n  font-size: 20px;\n  color: #0D65D9;\n}\n\n.divTable {\n  overflow-x: auto;\n  padding: 9px 18px 18px 18px;\n}\n\nion-list {\n  display: flex;\n}\n\n.input {\n  width: 50%;\n  display: flex;\n  margin: auto;\n  --background: #c8bebe4f;\n  border-radius: 100px;\n  margin-top: 16px;\n  font-size: 13px;\n  --padding-start:10px !important;\n}\n\n.dispale_set {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n\nion-select {\n  border: 1px solid #0D65D9;\n  --background: #c8bebe4f;\n  border-radius: 10px;\n  width: 100%;\n  --padding-start: 10px !important;\n}\n\nion-item {\n  padding: 6px;\n}\n\n.list_1 {\n  width: 100%;\n  border-bottom: 2px solid #0d65d9;\n  font-size: 12px;\n}\n\n.titles {\n  margin: 10px;\n  font-weight: 200;\n}\n\n.m-0 {\n  margin: 0px 10px;\n}\n\n.icon {\n  font-size: 19px;\n}\n\nion-button {\n  width: 54px;\n  margin: 0px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1kb2N0b3JzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1lZGljYWwlMjBSZXByZXNlbnRhdGl2ZSUyMGFwcFxcTWVkaWNhbFJlcHJlc2VudGF0aXZlXFxzcmNcXGFwcFxccGFnZXNcXG1hbmFnZS1kb2N0b3JzXFxtYW5hZ2UtZG9jdG9ycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDR0o7O0FER0U7RUFDRSxtQkFBQTtBQ0FKOztBREdJO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7QUNGSjs7QURNQTtFQUNJLGFBQUE7QUNISjs7QURRRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDRCwrQkFBQTtBQ0xIOztBRFFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDTEo7O0FET0U7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUNKSjs7QURVRTtFQUNFLFlBQUE7QUNQSjs7QURTQTtFQUNPLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNOUDs7QURRQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRE9BO0VBQ0ksZ0JBQUE7QUNKSjs7QURTQTtFQUNFLGVBQUE7QUNORjs7QURTQTtFQUNFLFdBQUE7RUFDRSxvQkFBQTtBQ05KIiwiZmlsZSI6Im1hbmFnZS1kb2N0b3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWZyZXNoX2J1dHRvbl9zZXR7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI5cHg7XHJcbn1cclxuLnJlZnJlc2hfdGV4dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMGQ2NWQ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLnJlZnJzaF9pbWd7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5wbHVzX2J1dHRvbl9zZXR7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwRDY1RDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzBENjVEOTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbi5kaXZUYWJsZXtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA5cHggIDE4cHggMThweCAxOHB4O1xyXG59XHJcblxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4gIFxyXG4gXHJcbiAgLmlucHV0e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAtLWJhY2tncm91bmQ6ICNjOGJlYmU0ZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgLS1wYWRkaW5nLXN0YXJ0OjEwcHggIWltcG9ydGFudDtcclxuICBcclxuICB9XHJcbiAgLmRpc3BhbGVfc2V0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcbiAgaW9uLXNlbGVjdHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwRDY1RDk7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNjOGJlYmU0ZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweCAhaW1wb3J0YW50O1xyXG5cclxuXHJcbiAgfVxyXG4gIFxyXG4gXHJcbiAgaW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgfVxyXG4ubGlzdF8xe1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzBkNjVkOTtcclxuICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSAgXHJcbi50aXRsZXN7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuLm0tMHtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbn1cclxuXHJcbiBcclxuXHJcbi5pY29ue1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICB3aWR0aDogNTRweDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4O1xyXG59XHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgXHJcbi8vIGlvbi1idXR0b24ge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgfVxyXG4vLyB9IiwiLnJlZnJlc2hfYnV0dG9uX3NldCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogIzBENjVEOTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMjlweDtcbn1cblxuLnJlZnJlc2hfdGV4dCB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogLTUycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwZDY1ZDk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5yZWZyc2hfaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucGx1c19idXR0b25fc2V0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogIzBENjVEOTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzBENjVEOTtcbn1cblxuLmRpdlRhYmxlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogOXB4IDE4cHggMThweCAxOHB4O1xufVxuXG5pb24tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgLS1iYWNrZ3JvdW5kOiAjYzhiZWJlNGY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIC0tcGFkZGluZy1zdGFydDoxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNwYWxlX3NldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMEQ2NUQ5O1xuICAtLWJhY2tncm91bmQ6ICNjOGJlYmU0ZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIHBhZGRpbmc6IDZweDtcbn1cblxuLmxpc3RfMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzBkNjVkOTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udGl0bGVzIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4ubS0wIHtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogNTRweDtcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XG59Il19 */";

/***/ }),

/***/ 6041:
/*!**************************************************************************!*\
  !*** ./src/app/pages/manage-doctors/manage-doctors.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <div  (click)=\"add_doctor()\">\r\n    <ion-list  class=\"refresh_button_set\"  >\r\n      <img class=\"refrsh_img\" src=\"../../../assets/+.png\" >\r\n     </ion-list>\r\n     <h6  class=\"refresh_text\">Add Doctor</h6> \r\n      </div>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" default-href=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n     Manage Doctor\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- header End -->\r\n\r\n<ion-content>\r\n    <ion-input class=\"input\" placeholder=\"Search-Doctor\" [(ngModel)]=\"filter_data\"></ion-input>\r\n    <!-- select ion-select-option -->\r\n      <ion-row style=\"justify-content: center;\"> \r\n        <ion-col size=\"12\" size-md=\"5\" >\r\n           <ion-list>\r\n            <ion-select mode=\"ios\" placeholder=\"city\" (ionChange)=\"selectCity($event)\">\r\n              <ion-select-option value=\"all\">All</ion-select-option>\r\n              <ion-select-option *ngFor=\"let item of allCities\" value=\"{{item.city}}\">{{item.city}}</ion-select-option>\r\n            </ion-select>\r\n           </ion-list>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-md=\"5\" >\r\n          <ion-list>\r\n            <ion-select mode=\"ios\" placeholder=\"route\" (ionChange)=\"selectroute($event)\">\r\n              <ion-select-option *ngIf=\"this.allRout == 0\" value=\"No Rout Found\">No Rout Found</ion-select-option>\r\n              <ion-select-option *ngFor=\"let item of allRout\" value=\"{{item.rout}}\">{{item.rout}}</ion-select-option>\r\n            </ion-select>\r\n           </ion-list>\r\n        </ion-col>\r\n      </ion-row> \r\n  \r\n  <!-- select ion-select-option end -->\r\n  <ion-row>\r\n    <ion-col *ngFor=\"let data of Doctor | filter : filter_data ; let i = index\" size-md=\"6\" size=\"12\">\r\n    <div class=\"divTable\">\r\n    <ion-list class=\"list_1\" >\r\n    \r\n      <ion-grid>\r\n        <h5>#{{i + 1}}</h5>\r\n        <ion-row>\r\n          <ion-col size=\"10\">\r\n            <ion-row>\r\n              <h6 class=\"titles m-0\"><b>Dr. </b>{{data.name}}</h6>\r\n            </ion-row>\r\n            <ion-row >  \r\n              <h6 class=\"titles m-0\"><b>Qualification: </b> {{data.qualification}}</h6>\r\n            </ion-row>\r\n            <ion-row>  \r\n              <h6 class=\"titles m-0\"><b>Contact no: </b>{{data.contact_no}}</h6>  \r\n            </ion-row>\r\n            <ion-row>  \r\n              <h6 class=\"titles m-0\"><b>Date of Birth: </b>{{data.date_of_birth}}</h6>  \r\n            </ion-row>\r\n            <ion-row>  \r\n              <h6 class=\"titles m-0\"><b>Date of Marriage: </b>{{data.date_of_marrige}}</h6>  \r\n            </ion-row>\r\n            <ion-row>\r\n              <h6 class=\"m-0\"><b>Hospital: </b>{{data.hospital}}</h6>\r\n            </ion-row>\r\n            <ion-row>\r\n              <h6 class=\"m-0\"><b>City: </b>{{data.city}}</h6>\r\n            </ion-row>\r\n            <ion-row>\r\n              <h6 class=\"m-0\"><b>Route: </b>{{data.rout}}</h6>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n           <!-- <ion-button (click)=\"DeleteAlert(data.d_id)\" mode=\"ios\" size=\"block\" ><ion-icon class=\"icon\" color=\"lights\" name=\"trash-outline\"></ion-icon></ion-button> -->\r\n           <ion-button  (click)=\"update(data)\" mode=\"ios\" size=\"block\" ><ion-icon class=\"icon\" color=\"lights\" name=\"create-outline\"></ion-icon></ion-button> \r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      \r\n    </ion-list>\r\n  </div>\r\n</ion-col>\r\n</ion-row>\r\n    <!-- <table class=\"container\">\r\n    <tr>\r\n      <th>Sr.</th>\r\n      <th>Name</th>\r\n      <th>Qualification</th>\r\n      <th>Hospital</th>\r\n      <th>Contact No.</th>\r\n      <th>Gender</th>\r\n      <th>Rating</th> \r\n    </tr>\r\n\r\n\r\n\r\n    <tr *ngFor=\"let data of Doctor | filter : filter_data ; let i = index\">\r\n    \r\n      <td>#{{i + 1}}</td>\r\n      <td>{{data.d_name}} </td>\r\n      <td>{{data.doc_q}} </td>\r\n      <td>{{data.h_name}} </td>\r\n      <td>{{data.contact_no}} </td>\r\n      <td>{{data.gender}} </td>\r\n      <td>{{data.rating}} </td>\r\n    \r\n    </tr>\r\n  \r\n   \r\n  </table> -->\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_manage-doctors_manage-doctors_module_ts.js.map