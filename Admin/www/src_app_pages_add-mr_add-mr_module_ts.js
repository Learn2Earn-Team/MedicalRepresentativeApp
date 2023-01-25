"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-mr_add-mr_module_ts"],{

/***/ 7058:
/*!*******************************************************!*\
  !*** ./src/app/pages/add-mr/add-mr-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMrPageRoutingModule": () => (/* binding */ AddMrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _add_mr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-mr.page */ 2067);




const routes = [
    {
        path: '',
        component: _add_mr_page__WEBPACK_IMPORTED_MODULE_0__.AddMrPage
    }
];
let AddMrPageRoutingModule = class AddMrPageRoutingModule {
};
AddMrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddMrPageRoutingModule);



/***/ }),

/***/ 5593:
/*!***********************************************!*\
  !*** ./src/app/pages/add-mr/add-mr.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMrPageModule": () => (/* binding */ AddMrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_mr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-mr-routing.module */ 7058);
/* harmony import */ var _add_mr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-mr.page */ 2067);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let AddMrPageModule = class AddMrPageModule {
};
AddMrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_mr_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddMrPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_add_mr_page__WEBPACK_IMPORTED_MODULE_1__.AddMrPage]
    })
], AddMrPageModule);



/***/ }),

/***/ 2067:
/*!*********************************************!*\
  !*** ./src/app/pages/add-mr/add-mr.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMrPage": () => (/* binding */ AddMrPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_mr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-mr.page.html?ngResource */ 4461);
/* harmony import */ var _add_mr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-mr.page.scss?ngResource */ 7600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apicall.service */ 8130);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ 7465);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 4465);
/* harmony import */ var _model_model_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/model.page */ 23);










let AddMrPage = class AddMrPage {
    constructor(global, apicall, toast, route, loadingCtrl, modalController, alertController) {
        this.global = global;
        this.apicall = apicall;
        this.toast = toast;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.modalController = modalController;
        this.alertController = alertController;
        this.btnValue = "Add MR";
        this.slectTabs = 'addMr';
        this.slectTab = 'Edit';
        this.mrlist = ['Dr.Name1', 'Dr.Name2', 'Dr.Name3', 'Dr.Name4', 'Dr.Name5'];
        this.cred = { Name: '', Fname: '', Contact: null, email: '', city: '' };
        this.Togglevaluee = 'deactive';
        this.mrData = { name: '', contact_no: '', email: '', login_id: '', password: '', status: '' };
        this.mrloginstatus = { mr_id: '', status: '' };
    }
    ngOnInit() {
        this.getmrData();
        this.getallmrData();
    }
    ShowHidePassword(ele, eye) {
        if (ele.type === 'password') {
            ele.type = 'text';
            eye.name = 'eye-off-outline';
        }
        else {
            ele.type = 'password';
            eye.name = 'eye-outline';
        }
    }
    changeToggle($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log($event.detail.checked);
            console.log($event.detail.value);
            if ($event.detail.checked == true) {
                this.Togglevaluee = 'active';
                console.log(this.mrData.status);
            }
            else {
                this.Togglevaluee = 'deactive';
                console.log(this.mrData.status);
            }
        });
    }
    updatemrStatus($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log($event.detail.checked);
            console.log($event.detail.value);
            if ($event.detail.checked == true) {
                this.mrloginstatus.mr_id = $event.detail.value.id;
                const x = 'active';
                this.mrloginstatus.status = x;
                console.log(this.mrloginstatus.status);
                console.log(this.mrloginstatus);
                yield this.apicall.api_updateMRstatus(this.mrloginstatus);
                this.getmrData();
            }
            else {
                this.mrloginstatus.mr_id = $event.detail.value.id;
                const x = 'deactive';
                this.mrloginstatus.status = x;
                console.log(this.mrloginstatus.status);
                console.log(this.mrloginstatus);
                yield this.apicall.api_updateMRstatus(this.mrloginstatus);
                this.getmrData();
            }
        });
    }
    addmrData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.btnValue == 'Add MR') {
                console.log(this.mrData);
                this.mrData.status = this.Togglevaluee;
                yield this.apicall.api_mrsignup(this.mrData);
                this.mrData = { name: '', contact_no: '', email: '', login_id: '', password: '', status: '' };
                this.getmrData();
            }
            else {
                this.showLoading();
                console.log(this.mrData);
                yield this.apicall.api_updateMR(this.mrData);
                this.mrData = { name: '', contact_no: '', email: '', login_id: '', password: '' };
                this.getmrData();
                yield setTimeout(() => {
                    this.btnValue = "Add MR";
                }, 1000);
            }
        });
    }
    getmrData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getMR();
            this.global.GetMrData.subscribe(res => {
                this.allMR = res;
            });
        });
    }
    delete(mr_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const x = { mr_id: mr_id };
            yield this.apicall.api_deleteMR(x);
            this.getmrData();
        });
    }
    update(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoading();
            setTimeout(() => {
                this.btnValue = "Update MR";
                this.mrData = item;
            }, 1000);
        });
    }
    getallmrData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getMRloginData();
            this.global.AllmrLoginData.subscribe(res => {
                this.allMRlogin = res;
            });
        });
    }
    updateMrloginStatus(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            if (item.status == 'activate') {
                const x = "deactivate";
                this.mrloginstatus.status = x;
                this.mrloginstatus.mr_id = item.mr_id;
                console.log(this.mrloginstatus);
                yield this.apicall.api_updateMRstatus(this.mrloginstatus);
                this.getallmrData();
            }
            if (item.status == 'deactivate') {
                const x = "activate";
                this.mrloginstatus.status = x;
                this.mrloginstatus.mr_id = item.mr_id;
                console.log(this.mrloginstatus);
                yield this.apicall.api_updateMRstatus(this.mrloginstatus);
                this.getallmrData();
            }
            else {
                console.log('no user statsu found');
            }
        });
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _model_model_page__WEBPACK_IMPORTED_MODULE_5__.ModelPage,
                componentProps: {
                    'Category': "addMRLogin",
                },
                initialBreakpoint: 0.6,
                breakpoints: [0.1, 0.5, 1]
            });
            return yield modal.present();
        });
    }
    updatemrloginModal(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _model_model_page__WEBPACK_IMPORTED_MODULE_5__.ModelPage,
                componentProps: {
                    'updateMRLogin': item,
                    'Category': "updateMRLoginData",
                },
                initialBreakpoint: 0.6,
                breakpoints: [0.1, 0.5, 1]
            });
            return yield modal.present();
        });
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...',
                duration: 1000,
                spinner: 'circles',
            });
            loading.present();
        });
    }
    DeleteAlert(mr_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you sure to delete this MR!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => { }
                    }, {
                        text: 'OK',
                        role: 'confirm',
                        handler: () => {
                            console.log(mr_id);
                            this.delete(mr_id);
                        }
                    },
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
};
AddMrPage.ctorParameters = () => [
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_services_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
AddMrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-add-mr',
        template: _add_mr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_mr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddMrPage);



/***/ }),

/***/ 7600:
/*!**********************************************************!*\
  !*** ./src/app/pages/add-mr/add-mr.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: var(--ion-color-primary);\n}\n\n.add_text {\n  text-align: center;\n  color: #1E6FD9;\n  font-size: 20px;\n  padding-top: 5%;\n  font-weight: bolder;\n}\n\nion-content ion-input {\n  width: 100%;\n  border: 1px solid #1E6FD9;\n  border-radius: 6px;\n}\n\nion-content ion-button {\n  --background: #1E6FD9;\n  color: white;\n}\n\nion-content ion-select {\n  border: 1px solid #1E6FD9;\n  border-radius: 6px;\n}\n\nion-content h6 {\n  margin-left: 3px;\n  font-weight: 300;\n  color: var(--ion-color-primary);\n}\n\nion-content ion-button {\n  --background: #1E6FD9;\n  --color: white;\n  width: 200px;\n  display: flex;\n  margin: auto;\n  --border-radius: 5px;\n  margin-top: 3%;\n  font-weight: 800;\n}\n\nion-content .deacticatebtn {\n  --background: #1E6FD9;\n  --color: white;\n  width: 100px;\n  text-transform: capitalize;\n}\n\nion-content .text_1 {\n  text-align: center;\n  color: #1E6FD9;\n  font-size: 20px;\n  font-weight: bolder;\n  padding-top: 5%;\n}\n\nion-content .page_container {\n  padding: 15px;\n}\n\nion-content .doc_list {\n  margin: auto;\n  padding: 10px;\n  background: white;\n  box-shadow: 0px 0px 2px 1px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: flex-end;\n  justify-content: space-between;\n  align-items: stretch;\n}\n\nion-content .doctor_name {\n  margin: 0;\n  font-weight: bold;\n  margin-top: 11px;\n  font-size: 14px;\n}\n\nion-content span {\n  font-size: 11px;\n  font-weight: 100;\n}\n\nion-content .update_icon {\n  font-size: 25px;\n  margin-right: 6px;\n  color: #0D65D9;\n}\n\nion-content .toobar {\n  --background: #0d65d9;\n}\n\nion-content .color {\n  color: white;\n}\n\nion-content ion-input {\n  border: 1px solid #0d65d9;\n  border-radius: 6px;\n  background: white;\n}\n\nion-content .font {\n  font-weight: bold;\n  margin: 7px;\n  color: #0D65D9;\n}\n\nion-content .page_container {\n  padding: 15px;\n}\n\nion-content .submit_button {\n  display: flex;\n  margin: auto;\n  width: 30%;\n  margin-top: 25px;\n}\n\nion-content .row_center {\n  justify-content: center;\n}\n\nion-content .seg {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: flex-end;\n  justify-content: space-around;\n}\n\n.my_class1 {\n  color: red;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.my_class2 {\n  color: green;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1tci5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNZWRpY2FsJTIwUmVwcmVzZW50YXRpdmUlMjBhcHBcXGFtaW4tbWVkaWNhbC1yZXByZXNlbnRhdGl2ZVxcc3JjXFxhcHBcXHBhZ2VzXFxhZGQtbXJcXGFkZC1tci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREtBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURJQTtFQUNJLHFCQUFBO0VBQ0YsWUFBQTtBQ0ZGOztBRElBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDSEo7O0FETUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9FO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDTEo7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDTkY7O0FEZUU7RUFDRSxhQUFBO0FDYko7O0FEZ0JFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDZEo7O0FEaUJFO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDZko7O0FEbUJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDakJKOztBRG9CRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNsQko7O0FEZ0NFO0VBQ0UscUJBQUE7QUM5Qko7O0FEaUNFO0VBQ0UsWUFBQTtBQy9CSjs7QURpQ0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUMvQko7O0FEaUNFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQy9CSjs7QURpQ0U7RUFDRSxhQUFBO0FDL0JKOztBRGlDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDL0JKOztBRGlDQTtFQUNJLHVCQUFBO0FDL0JKOztBRGlDQTtFQUNFLGFBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FDaENGOztBRHFDQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNsQ0Y7O0FEb0NBO0VBQ0csWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ2pDSCIsImZpbGUiOiJhZGQtbXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbi5hZGRfdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMUU2RkQ5O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG5cclxuXHJcbmlvbi1pbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFFNkZEOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzFFNkZEOTtcclxuICBjb2xvcjogd2hpdGU7ICBcclxufVxyXG5pb24tc2VsZWN0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFFNkZEOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuaDZ7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6ICMxRTZGRDk7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcblxyXG4gIC5kZWFjdGljYXRlYnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUU2RkQ5O1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4udGV4dF8xe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzFFNkZEOTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyBkb2N0b3IgbGlzdCBzdHJhdFxyXG4gIC5wYWdlX2NvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuZG9jX2xpc3R7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG5cclxuICAuZG9jdG9yX25hbWV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgIFxyXG4gIH1cclxuIFxyXG4gIHNwYW57XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gIH1cclxuXHJcbiAgLnVwZGF0ZV9pY29ue1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICBjb2xvcjogIzBENjVEOTtcclxufVxyXG5cclxuICBcclxuICAvLyBkb2N0b3IgbGlzdCBlbmRcclxuXHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuICBcclxuXHJcbiAgLnRvb2JhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzBkNjVkOTtcclxuICBcclxuICB9XHJcbiAgLmNvbG9ye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBpb24taW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGQ2NWQ5IDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICAuZm9udHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbiAgICBjb2xvcjogIzBENjVEOTtcclxuICB9XHJcbiAgLnBhZ2VfY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgLnN1Ym1pdF9idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLnJvd19jZW50ZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSAgXHJcbi5zZWd7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufSAgXHJcbiAgXHJcbn1cclxuXHJcbi5teV9jbGFzczF7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuIH1cclxuLm15X2NsYXNzMntcclxuICAgY29sb3I6IGdyZWVuO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiB9IiwiaW9uLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmFkZF90ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFFNkZEOTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmlvbi1jb250ZW50IGlvbi1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMUU2RkQ5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5pb24tY29udGVudCBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMUU2RkQ5O1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudCBpb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFFNkZEOTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuaW9uLWNvbnRlbnQgaDYge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzFFNkZEOTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5pb24tY29udGVudCAuZGVhY3RpY2F0ZWJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzFFNkZEOTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5pb24tY29udGVudCAudGV4dF8xIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFFNkZEOTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5pb24tY29udGVudCAucGFnZV9jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLmRvY19saXN0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5pb24tY29udGVudCAuZG9jdG9yX25hbWUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuaW9uLWNvbnRlbnQgLnVwZGF0ZV9pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgY29sb3I6ICMwRDY1RDk7XG59XG5pb24tY29udGVudCAudG9vYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMGQ2NWQ5O1xufVxuaW9uLWNvbnRlbnQgLmNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkNjVkOTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IC5mb250IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogN3B4O1xuICBjb2xvcjogIzBENjVEOTtcbn1cbmlvbi1jb250ZW50IC5wYWdlX2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5pb24tY29udGVudCAuc3VibWl0X2J1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbmlvbi1jb250ZW50IC5yb3dfY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuc2VnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5teV9jbGFzczEge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5teV9jbGFzczIge1xuICBjb2xvcjogZ3JlZW47XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";

/***/ }),

/***/ 4461:
/*!**********************************************************!*\
  !*** ./src/app/pages/add-mr/add-mr.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-item lines=\"none\" class=\"search_container ms-auto\">  \n      <ion-input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filter_data\"></ion-input>\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\n    </ion-item>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-toggle>\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>\n      Add MR\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n \n\n  <ion-row style=\"justify-content: center;\">\n    <ion-col size=\"12\" size-md=\"5\">\n      <h6>Name:</h6>\n      <ion-input type=\"text\" class=\"ion-padding-start\" placeholder=\"Enter Name\" [(ngModel)]=\"mrData.name\"></ion-input>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"5\">\n      <h6>Contact No:</h6>\n      <ion-input type=\"text\" class=\"ion-padding-start\" placeholder=\"Enter Contact No\" [(ngModel)]=\"mrData.contact_no\"></ion-input>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"5\">\n      <h6>Email:</h6>\n      <ion-input class=\"ion-padding-start\" placeholder=\"Email\" [(ngModel)]=\"mrData.email\"></ion-input>\n    </ion-col>\n\n    <ion-col size=\"12\" size-md=\"5\">\n      <h6>login Id</h6>\n      <ion-input type=\"text\" class=\"ion-padding-start\" placeholder=\"Enter login Id\" [(ngModel)]=\"mrData.login_id\"></ion-input>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"5\">\n\n      <h6>password:</h6>\n      <ion-input type=\"text\" class=\"ion-padding-start\" placeholder=\"Enter password\" [(ngModel)]=\"mrData.password\"></ion-input>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"5\" *ngIf=\"this.btnValue == 'Add MR'\">\n\n      <h6>Deactive / Active</h6>\n      <ion-toggle [enableOnOffLabels]=\"true\"  style=\"margin-top: 8px; margin-left: 25px;\" mode=\"ios\" value={{this.Togglevaluee}} (ionChange)=\"changeToggle($event, data)\"></ion-toggle>\n      <!-- <ion-input type=\"text\" class=\"ion-padding-start\" placeholder=\"Enter Email\" [(ngModel)]=\"mrData.password\"></ion-input> -->\n    </ion-col>\n      \n  </ion-row>\n\n  <ion-button mode=\"ios\" (click)=\"addmrData()\">\n    {{btnValue}}\n  </ion-button>\n  \n   <p class=\"text_1\">MR List</p>\n\n\n   <div style=\"padding: 10px;\">\n      <div class=\"table-responsive table-hover ion-margin bg-white\">\n        <table class=\"table table-hover display mb-4 dataTablesCard\">\n          <thead>\n            <tr>\n              <th>No.</th>\n              <th>Name</th>\n              <th>Email</th>\n              <th>Contact No.</th>\n              <th>login Id</th>\n              <th>Password</th>\n              <th>Status</th>\n              <th>Active/Deactive</th>\n              <th>Update</th>\n              <th>Delete</th>\n             \n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of allMR | filter : filter_data; index as i\">\n              <td>{{i+1}}</td>\n              <td>{{item.name}}</td>\n              <td>{{item.email}}</td>\n              <td>{{item.contact_no}}</td>\n              <td>{{item.login_id}}</td>\n              <td>\n                {{item.password}}\n               <!-- <ion-item lines=\"none\">\n                <ion-input style=\"border: none;\" type=\"password\" readonly=\"true\" value=\"{{item.password}}\" #password></ion-input>\n                <ion-icon name=\"eye\" #eye (click)=\"ShowHidePassword(password,eye)\"></ion-icon>\n               </ion-item> -->\n              </td>\n              <td [ngClass]=\"item.status == 'active' ? 'my_class2' : 'my_class1'\">{{item.status}}</td>\n              <td><ion-toggle [enableOnOffLabels]=\"true\"  style=\"margin-top: 8px; margin-left: 25px;\" mode=\"ios\" [value]=\"{id: item.mr_id, status: item.status}\"  [checked]=\"item.status == 'active' ? true : false\" (ionChange)=\"updatemrStatus($event, data)\"></ion-toggle></td>  \n              <td (click)=\"update(item)\"><span\n                style=\"font-size: 15px;color: var(--ion-color-primary); cursor: pointer;\">Update</span></td>\n                <td (click)=\"DeleteAlert(item.mr_id)\"><span style=\"font-size: 15px;color: var(--ion-color-primary); cursor: pointer;\">Delete</span></td>             \n            </tr>\n          </tbody>\n        </table>\n      </div>\n  </div>\n\n   \n  <!-- doctors list  start -->\n  <!-- <div class=\"page_container\">\n\n    <ion-row  >\n      <ion-col *ngFor=\"let item of allMR\" size=\"12\" size-md=\"6\"size-lg=\"6\" >\n        <ion-list  class=\"doc_list\">\n\n         <h6 class=\"doctor_name\">{{item.name}}&nbsp;&nbsp;&nbsp;\n            <span>{{item.father_name}}</span><br>\n           <span>{{item.contact_no}}</span><br>\n            <span>{{item.email}}</span><br>\n            <span>{{item.city}}</span>\n          </h6>\n          <div>\n            <ion-icon  class=\"update_icon\" name=\"log-in-outline\" (click)=\"openModal()\"></ion-icon>\n            <ion-icon  class=\"update_icon\" name=\"create-outline\" (click)=\"update(item)\"></ion-icon>\n            <ion-icon class=\"update_icon\"  name=\"trash-outline\" (click)=\"delete(item.mr_id)\"></ion-icon>\n          </div>\n        </ion-list>\n     </ion-col>\n    </ion-row>\n\n  </div> -->\n\n\n\n<!-- <ion-list *ngIf=\"slectTabs == 'See'\">\n         \n  <div class=\"page_container\">\n\n    <ion-row  >\n      <ion-col *ngFor=\"let item of allMRlogin\" size=\"12\" size-md=\"6\"size-lg=\"6\" >\n        <ion-list  class=\"doc_list\">\n\n         <h6 class=\"doctor_name\">username: {{item.username}}<br>\n            <span>Password: {{item.password}}</span><br>\n            <span>status: {{item.status}}</span><br>\n          </h6>\n          <div>\n              <ion-button class=\"deacticatebtn\" *ngIf=\"item.status == 'activate'\" color=\"danger\" (click)=\"updateMrloginStatus(item)\">Deactivate</ion-button>\n              <ion-button class=\"deacticatebtn\" *ngIf=\"item.status == 'deactivate'\" (click)=\"updateMrloginStatus(item)\">Activate</ion-button>\n              <ion-button class=\"deacticatebtn\" (click)=\"updatemrloginModal(item)\">Update</ion-button>\n          </div>\n        </ion-list>\n     </ion-col>\n    </ion-row>\n\n  </div>\n\n</ion-list> -->\n\n\n\n\n\n  <!-- doctors list end -->\n\n\n\n\n\n\n\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-mr_add-mr_module_ts.js.map