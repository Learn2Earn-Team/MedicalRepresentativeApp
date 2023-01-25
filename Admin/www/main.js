(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_apicall_service_ts"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
    {
        path: 'menu',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_menu_menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu/menu.module */ 252)).then(m => m.MenuPageModule)
    },
    {
        path: 'add-mr',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_apicall_service_ts"), __webpack_require__.e("default-src_app_pages_model_model_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_add-mr_add-mr_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-mr/add-mr.module */ 5593)).then(m => m.AddMrPageModule)
    },
    {
        path: 'manage-doctor',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_apicall_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_manage-doctor_manage-doctor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/manage-doctor/manage-doctor.module */ 7785)).then(m => m.ManageDoctorPageModule)
    },
    {
        path: 'add-doctor',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_apicall_service_ts"), __webpack_require__.e("src_app_pages_add-doctor_add-doctor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-doctor/add-doctor.module */ 6976)).then(m => m.AddDoctorPageModule)
    },
    {
        path: 'manage-city',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_apicall_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_manage-city_manage-city_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/manage-city/manage-city.module */ 9470)).then(m => m.ManageCityPageModule)
    },
    {
        path: 'aproval-mtp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_apicall_service_ts"), __webpack_require__.e("default-src_app_pages_model_model_page_ts"), __webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("src_app_pages_aproval-mtp_aproval-mtp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/aproval-mtp/aproval-mtp.module */ 1054)).then(m => m.AprovalMtpPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_apicall_service_ts"), __webpack_require__.e("src_app_pages_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 207)).then(m => m.RegisterPageModule)
    },
    {
        path: 'model',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_apicall_service_ts"), __webpack_require__.e("default-src_app_pages_model_model_page_ts"), __webpack_require__.e("src_app_pages_model_model_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/model/model.module */ 813)).then(m => m.ModelPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_apicall_service_ts"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 8558)).then(m => m.ProfilePageModule)
    },
    {
        path: 'aproval-dcr',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_apicall_service_ts"), __webpack_require__.e("default-src_app_pages_model_model_page_ts"), __webpack_require__.e("default-node_modules_date-fns_esm_format_index_js-node_modules_date-fns_esm_parseISO_index_js"), __webpack_require__.e("src_app_pages_aproval-dcr_aproval-dcr_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/aproval-dcr/aproval-dcr.module */ 2405)).then(m => m.AprovalDcrPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() {
        this.menu = [{ id: 1, icon: 'stats-chart', name: 'Dashboard', path: 'menu' },
            // {id:2 ,icon:'map', name:'Property' , path: 'property'},
            { id: 3, icon: 'person', name: 'Profile', path: 'profile' },
            { id: 5, icon: 'log-out', name: 'Logout', path: 'login' },];
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/excel.service */ 4249);









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }, _services_excel_service__WEBPACK_IMPORTED_MODULE_2__.ExcelService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4249:
/*!*******************************************!*\
  !*** ./src/app/services/excel.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelService": () => (/* binding */ ExcelService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ 4126);



let ExcelService = class ExcelService {
    // data: any;
    constructor() { }
    exportToExcel(data, filename) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            {
                const ws = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.json_to_sheet(data);
                const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.book_new();
                xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.book_append_sheet(wb, ws, filename);
                xlsx__WEBPACK_IMPORTED_MODULE_1__.writeFile(wb, filename + '.xlsx');
            }
        });
    }
};
ExcelService.ctorParameters = () => [];
ExcelService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ExcelService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 8763);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		8141,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-64bc531e_js-node_modules_ionic_core_dist_esm_th-f0213e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-64bc531e_js-node_modules_ionic_core_dist_esm_th-f0213e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		4832,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		5464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		8724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		4389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-split-pane {\n  --border: none;\n  --side-min-width: 30px;\n  --side-max-width: 180px;\n  --side-width: 300px;\n}\n\n.main-menu {\n  margin-left: 10px;\n}\n\nion-toolbar, ion-content {\n  --background: #f6f6f6;\n  font-family: \"Poppins\", sans-serif;\n}\n\nion-toolbar img {\n  height: 95px;\n  display: flex;\n  margin: 4px auto;\n}\n\nion-card {\n  --color:var(--ion-color-primary);\n  --background: transparent ;\n  box-shadow: none;\n  font-family: tango;\n  border-radius: 0%;\n  background: linear-gradient(to right, #e0e0e4 0%, rgba(125, 185, 232, 0) 100%);\n  margin: 10px auto;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-card ion-label {\n  display: flex;\n  margin: 0%;\n  align-items: center;\n  flex-direction: column;\n  font-size: medium;\n  font-size: 15px;\n  font-weight: 500;\n  font-family: \"poppins\", sans-serif;\n}\n\nion-card .p {\n  display: none;\n}\n\nion-card:hover {\n  --color:var(--ion-color-primary);\n  --background: transparent ;\n  box-shadow: none;\n  font-family: tango;\n  border-radius: 0%;\n  background: linear-gradient(to right, #e0e0e4 0%, rgba(125, 185, 232, 0) 100%);\n  margin: 10px auto;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-card:hover ion-label {\n  display: flex;\n  margin: 0%;\n  align-items: center;\n  flex-direction: column;\n  font-size: medium;\n  font-size: 15px;\n  font-weight: 500;\n  font-family: \"poppins\", sans-serif;\n}\n\nion-card:hover .style {\n  width: 10px;\n  height: 65px;\n  background: var(--ion-color-primary);\n  position: absolute;\n  left: 0;\n  border-radius: 0 0.75rem 0.75rem 0;\n  transition: all 0.5s ease-out;\n}\n\nion-card:hover .p {\n  display: none;\n}\n\nion-card.selected {\n  --color:var(--ion-color-primary);\n  --background: transparent ;\n  box-shadow: none;\n  font-family: tango;\n  border-radius: 0%;\n  background: linear-gradient(to right, #e0e0e4 0%, rgba(125, 185, 232, 0) 100%);\n  margin: 10px auto;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-card.selected ion-label {\n  display: flex;\n  margin: 0%;\n  align-items: center;\n  flex-direction: column;\n  font-size: medium;\n  font-size: 15px;\n  font-weight: 500;\n  font-family: \"poppins\", sans-serif;\n}\n\nion-card.selected .style {\n  width: 10px;\n  height: 65px;\n  background: var(--ion-color-primary);\n  position: absolute;\n  left: 0;\n  border-radius: 0 0.75rem 0.75rem 0;\n}\n\nion-card.selected .p {\n  display: none;\n}\n\nion-item:checked {\n  --color:white;\n  --background: var(--ion-color-primary) ;\n}\n\nion-icon {\n  font-size: 30px;\n  margin: 0px 0px 10px 0px;\n}\n\nion-content::part(scroll) {\n  padding: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxNZWRpY2FsJTIwUmVwcmVzZW50YXRpdmUlMjBhcHBcXGFtaW4tbWVkaWNhbC1yZXByZXNlbnRhdGl2ZVxcc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLGtDQUFBO0FDRUo7O0FEQ0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQ0E7RUFDSSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VKOztBRERJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQ0dSOztBRERJO0VBQ0ksYUFBQTtBQ0dSOztBREFBO0VBQ0ksZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhFQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHSjs7QURGSTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUNJUjs7QURGSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FDSVI7O0FERkk7RUFDSSxhQUFBO0FDSVI7O0FEREE7RUFDSSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0lKOztBREhJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQ0tSOztBREhJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGtDQUFBO0FDS1I7O0FESEk7RUFDSSxhQUFBO0FDS1I7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsdUNBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtBQ0lKOztBREZBO0VBQ0csV0FBQTtBQ0tIIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tc3BsaXQtcGFuZSB7XHJcbiAgICAtLWJvcmRlcjogbm9uZTtcclxuICAgIC0tc2lkZS1taW4td2lkdGg6IDMwcHg7XHJcbiAgICAtLXNpZGUtbWF4LXdpZHRoOiAxODBweDtcclxuICAgIC0tc2lkZS13aWR0aDogMzAwcHg7XHJcbn1cclxuLm1haW4tbWVudSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5pb24tdG9vbGJhciAsIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycgLCBzYW5zLXNlcmlmO1xyXG59XHJcbmlvbi10b29sYmFye1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogOTVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IGF1dG87XHJcbiAgICB9XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgLS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogdGFuZ287XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UwZTBlNCAwJSwgcmdiYSgxMjUsIDE4NSwgMjMyLCAwKSAxMDAlKTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46MCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZvbnQtc2l6ZTptZWRpdW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLnB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5pb24tY2FyZDpob3ZlciB7XHJcbiAgICAtLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiB0YW5nbztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTBlMGU0IDAlLCByZ2JhKDEyNSwgMTg1LCAyMzIsIDApIDEwMCUpO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjowJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZm9udC1zaXplOm1lZGl1bTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAuc3R5bGV7XHJcbiAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMC43NXJlbSAwLjc1cmVtIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogIGFsbCAuNXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgICAucHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcbmlvbi1jYXJkLnNlbGVjdGVke1xyXG4gICAgLS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogdGFuZ287XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UwZTBlNCAwJSwgcmdiYSgxMjUsIDE4NSwgMjMyLCAwKSAxMDAlKTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46MCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZvbnQtc2l6ZTptZWRpdW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLnN0eWxle1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAuNzVyZW0gMC43NXJlbSAwO1xyXG4gICAgfVxyXG4gICAgLnB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuIFxyXG5pb24taXRlbTpjaGVja2Vke1xyXG4gICAgLS1jb2xvcjp3aGl0ZTtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpXHJcbn1cclxuaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xyXG59XHJcbmlvbi1jb250ZW50OjpwYXJ0KHNjcm9sbCl7XHJcbiAgIHBhZGRpbmc6IDAlO1xyXG59XHJcbiAgIiwiaW9uLXNwbGl0LXBhbmUge1xuICAtLWJvcmRlcjogbm9uZTtcbiAgLS1zaWRlLW1pbi13aWR0aDogMzBweDtcbiAgLS1zaWRlLW1heC13aWR0aDogMTgwcHg7XG4gIC0tc2lkZS13aWR0aDogMzAwcHg7XG59XG5cbi5tYWluLW1lbnUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLXRvb2xiYXIsIGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbmlvbi10b29sYmFyIGltZyB7XG4gIGhlaWdodDogOTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA0cHggYXV0bztcbn1cblxuaW9uLWNhcmQge1xuICAtLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiB0YW5nbztcbiAgYm9yZGVyLXJhZGl1czogMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UwZTBlNCAwJSwgcmdiYSgxMjUsIDE4NSwgMjMyLCAwKSAxMDAlKTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNhcmQgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwicG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuaW9uLWNhcmQgLnAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tY2FyZDpob3ZlciB7XG4gIC0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1mYW1pbHk6IHRhbmdvO1xuICBib3JkZXItcmFkaXVzOiAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTBlMGU0IDAlLCByZ2JhKDEyNSwgMTg1LCAyMzIsIDApIDEwMCUpO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY2FyZDpob3ZlciBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJwb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5pb24tY2FyZDpob3ZlciAuc3R5bGUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjc1cmVtIDAuNzVyZW0gMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG59XG5pb24tY2FyZDpob3ZlciAucCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi1jYXJkLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LWZhbWlseTogdGFuZ287XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlMGUwZTQgMCUsIHJnYmEoMTI1LCAxODUsIDIzMiwgMCkgMTAwJSk7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jYXJkLnNlbGVjdGVkIGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cbmlvbi1jYXJkLnNlbGVjdGVkIC5zdHlsZSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3JkZXItcmFkaXVzOiAwIDAuNzVyZW0gMC43NXJlbSAwO1xufVxuaW9uLWNhcmQuc2VsZWN0ZWQgLnAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24taXRlbTpjaGVja2VkIHtcbiAgLS1jb2xvcjp3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHggMHB4O1xufVxuXG5pb24tY29udGVudDo6cGFydChzY3JvbGwpIHtcbiAgcGFkZGluZzogMCU7XG59Il19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane contentId=\"main-content\"  #ionSplitPane>\n   \n    <ion-menu type=\"overlay\" content-id=\"main-content\">\n\n      <ion-header class=\"ion-no-border\">\n        <ion-toolbar>\n          <div class=\"w-100 d-flex justify-content-center align-items-center mt-1\">\n            <!-- <div class=\"d-flex justify-content-center align-items-center rounded-3 px-2 py-2 m-2\" style=\"background-color:#3b4cb8;\">\n              <span class=\"text-center text-white fs-bolder fs-4\" >O</span>\n            </div> -->\n            <div>\n              <img style=\"height: 70px; width: 100%;\" src=\"../assets/Orisun LOGO jpg.png\" alt=\"\">\n              <!-- <h2 style=\"color:#3b4cb8; font-size: 30px;\" class=\"fs-bolder\">Orisun’s</h2> -->\n            </div>\n          </div>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <ion-menu-toggle [autoHide]=\"false\" *ngFor=\"let m of menu; let i = index\">\n          <ion-card id=\"menu-button\"  (click)=\"clickMenuItem = i\" routerDirection=\"root\" [routerLink]=\"[m.path]\" routerLinkActive=\"selected\" detail=\"false\">\n            <div class=\"style\"></div>\n            <ion-label><ion-icon name={{m.icon}}></ion-icon>{{m.name}}</ion-label>\n          </ion-card>\n        </ion-menu-toggle>\n      </ion-content>\n    </ion-menu>\n\n    \n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n  </ion-split-pane>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map