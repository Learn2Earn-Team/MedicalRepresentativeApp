"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_apicall_service_ts"],{

/***/ 8130:
/*!*********************************************!*\
  !*** ./src/app/services/apicall.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApicallService": () => (/* binding */ ApicallService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.service */ 7465);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.service */ 4465);







let ApicallService = class ApicallService {
    constructor(menuCtrl, loadingCtrl, route, authservice, global, toast) {
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.authservice = authservice;
        this.global = global;
        this.toast = toast;
    }
    api_signup(data) {
        this.authservice.con(data, 'signup').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.data = JSON.parse(String(res).toString());
            if (this.data.error == false) {
                console.log(this.data);
                this.toast.acc_alreadyregister();
            }
            else {
                console.log(this.data);
                this.toast.acc_register();
                this.route.navigate(['login']);
            }
        }), (err) => {
            console.log(err);
        });
    }
    api_login(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'login').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.showLoading();
                    setTimeout(() => {
                        this.global.set_adminProfileData(this.data);
                        this.route.navigate(['menu']);
                        this.menuCtrl.enable(true);
                        this.toast.acc_login();
                    }, 1000);
                }
                else {
                    console.log(this.data);
                    this.toast.acc_invalidlogin();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...',
                duration: 1000,
                spinner: 'circles',
            });
            loading.present();
        });
    }
    api_updateadminProfile(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'updateuserdata').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.route.navigate(['login']);
                    this.toast.profileUpdated();
                }
                else {
                    console.log(this.data);
                    this.toast.profileUpdateFailed();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_adddoctor(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'adddoctor').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.add_doc();
                }
                else {
                    console.log(this.data);
                    this.toast.docNotadd();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_getDoctor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getdoctor').then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.set_doctor(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_getDoctorrout(city) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getdoctorRout/' + city).then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.set_getRout(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_adddCitites(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'addcity').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.addcity();
                }
                else {
                    console.log(this.data);
                    this.toast.addNotcity();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_deleteCitites(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'deletecity').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.adddeltedcity();
                }
                else {
                    console.log(this.data);
                    this.toast.notdeltedcity();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_updateCitites(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'updatecity').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.cityupdated();
                }
                else {
                    console.log(this.data);
                    this.toast.citynotupdated();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_getCities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getcity').then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.set_getCities(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_deletedoctor(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'deletedoctor').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.docDeleted();
                }
                else {
                    console.log(this.data);
                    this.toast.docnotDeleted();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_updatedoctor(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'updatedoctor').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.docUpdated();
                }
                else {
                    console.log(this.data);
                    this.toast.docnotUpdated();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_getdoctorbyAlltype(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'getdoctorbyalltype').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                console.log(this.data);
                this.global.set_doctor(this.data);
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_addMR(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'addmr_employ').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.addMR();
                }
                else {
                    console.log(this.data);
                    this.toast.addMRfialed();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_getMR() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getmr_data').then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.set_getMrData(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_updateMR(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'updatemr_employ').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.updateMR();
                }
                else {
                    console.log(this.data);
                    this.toast.updateMRfialed();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_deleteMR(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'deletemr_employ').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.deleteMRdata();
                }
                else {
                    console.log(this.data);
                    this.toast.deleteMRfialed();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_addMrsignupCredentials(data) {
        this.authservice.con(data, 'signup').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.data = JSON.parse(String(res).toString());
            if (this.data.error == false) {
                console.log(this.data);
                this.toast.acc_alreadyregister();
            }
            else {
                console.log(this.data);
                this.toast.acc_register();
            }
        }), (err) => {
            console.log(err);
        });
    }
    api_getMRloginData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getMrLoginData').then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.set_allmrLoginData(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_updateMRstatus(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'updatemr_status').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.changeMRloginstatus();
                }
                else {
                    console.log(this.data);
                    this.toast.changeMRloginstatusfailed();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_updateMRlogin(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'updateuserdata').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.updateMR();
                }
                else {
                    console.log(this.data);
                    this.toast.updateMRfialed();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_mrsignup(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'addMrData').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.acc_alreadyregister();
                }
                else {
                    console.log(this.data);
                    this.toast.acc_register();
                    // this.route.navigate(['login'])
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_updatemtpMRstatus(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'updatemtpMRstatus').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    // this.toast.acc_alreadyregister();
                }
                else {
                    console.log(this.data);
                    // this.toast.acc_register();
                    // // this.route.navigate(['login'])
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_getmtpbydate(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'getmtpforadmin').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                console.log(this.data);
                this.global.store_mtpdata(this.data);
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_getdcrdetails(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'getdcrforadmin').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                console.log(this.data);
                this.global.store_dcrdata(this.data);
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_getgetActive_mr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getActive_mr').then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.set_getallActive_mr(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_seeproductbymtp(mtp_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getproductbymtp_id/' + mtp_id).then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.store_seeProductbymr(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_updatedcrstatus(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'updatedcrstatus').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    // this.toast.acc_alreadyregister();
                }
                else {
                    console.log(this.data);
                    // this.toast.acc_register();
                    // // this.route.navigate(['login'])
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_addproduct(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'addproduct').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    // this.toast.acc_alreadyregister();
                }
                else {
                    console.log(this.data);
                    // this.toast.acc_register();
                    // // this.route.navigate(['login'])
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_seeproductbydcr(dcr_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getproductbydcr_id/' + dcr_id).then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.store_seeProductbydcr(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_getdcrmonthvise(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'getdcrmonthvise').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                console.log(this.data);
                this.global.store_dcrmonthvise(this.data);
            }), (err) => {
                console.log(err);
            });
        });
    }
};
ApicallService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_1__.GlobalService },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService }
];
ApicallService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ApicallService);



/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);



// const apiUrl = 'http://localhost/Medical-Representatives/public/';
const apiUrl = 'https://learn2earnn.com/medical/public/';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    con(data, type) {
        return new Promise((resolve, reject) => {
            this.http.post(apiUrl + type, JSON.stringify(data)).
                subscribe(res => {
                resolve(JSON.stringify(res));
            }, (err) => {
                reject(err);
                console.log(err);
            });
        });
    }
    // geting posts
    getdata(type) {
        return new Promise((resolve, reject) => {
            this.http.get(apiUrl + type).
                subscribe(res => {
                resolve(JSON.stringify(res));
            }, (err) => {
                reject(err);
                console.log(err);
            });
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 7465:
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": () => (/* binding */ GlobalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);



let GlobalService = class GlobalService {
    constructor() {
        this.adminProfileData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.AdminprofileData = this.adminProfileData.asObservable();
        this.doctor = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Doctor = this.doctor.asObservable();
        this.doctorbytype = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Doctorbytype = this.doctorbytype.asObservable();
        this.getCities = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.GetCities = this.getCities.asObservable();
        this.getRout = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.GetRout = this.getRout.asObservable();
        this.getMrData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.GetMrData = this.getMrData.asObservable();
        this.allmrLoginData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.AllmrLoginData = this.allmrLoginData.asObservable();
        this.getallActive_mr = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.GetallActive_mr = this.getallActive_mr.asObservable();
        this.mtpdata = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.MtpData = this.mtpdata.asObservable();
        this.dcrdata = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Dcrdata = this.dcrdata.asObservable();
        this.seeProductbymr = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.SeeProductbymr = this.seeProductbymr.asObservable();
        this.seeProductbydcr = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.SeeProductbydcr = this.seeProductbydcr.asObservable();
        this.storedcrmonthvise = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Storedcrmonthvise = this.storedcrmonthvise.asObservable();
    }
    set_adminProfileData(adminProfileData) {
        this.adminProfileData.next(adminProfileData);
        console.log(adminProfileData);
    }
    set_doctor(doctor) {
        this.doctor.next(doctor);
        console.log(doctor);
    }
    set_doctorbytype(doctorbytype) {
        this.doctorbytype.next(doctorbytype);
        console.log(doctorbytype);
    }
    set_getCities(getCities) {
        this.getCities.next(getCities);
        console.log(getCities);
    }
    set_getRout(getRout) {
        this.getRout.next(getRout);
        console.log(getRout);
    }
    set_getMrData(getMrData) {
        this.getMrData.next(getMrData);
        console.log(getMrData);
    }
    set_allmrLoginData(allmrLoginData) {
        this.allmrLoginData.next(allmrLoginData);
        console.log(allmrLoginData);
    }
    set_getallActive_mr(getallActive_mr) {
        this.getallActive_mr.next(getallActive_mr);
        console.log(getallActive_mr);
    }
    store_mtpdata(mtpdata) {
        this.mtpdata.next(mtpdata);
        console.log(mtpdata);
    }
    store_dcrdata(dcrdata) {
        this.dcrdata.next(dcrdata);
        console.log(dcrdata);
    }
    store_seeProductbymr(seeProductbymr) {
        this.seeProductbymr.next(seeProductbymr);
        console.log(seeProductbymr);
    }
    store_seeProductbydcr(seeProductbydcr) {
        this.seeProductbydcr.next(seeProductbydcr);
        console.log(seeProductbydcr);
    }
    store_dcrmonthvise(storedcrmonthvise) {
        this.storedcrmonthvise.next(storedcrmonthvise);
        console.log(storedcrmonthvise);
    }
};
GlobalService.ctorParameters = () => [];
GlobalService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ 4465:
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);



let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    acc_register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Register successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    acc_alreadyregister() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'User Already Exits',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    acc_login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Login successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    acc_invalidlogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Invalid username or password',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    add_doc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor added successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    docNotadd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor added successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    docDeleted() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor Deleted successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    docnotDeleted() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor Not Deleted successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    docUpdated() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor Updated successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    docnotUpdated() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor Update failed',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    docnotFound() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor Not Found',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    addcity() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'City added successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    addNotcity() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'City added failed',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    adddeltedcity() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'City deleted successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    notdeltedcity() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'City delete failed',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    cityupdated() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'City updated successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    citynotupdated() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'City update failed',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    addMR() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'MR data added successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    addMRfialed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'MR data failed',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    updateMR() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'MR data updated successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    updateMRfialed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'MR data update failed',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    deleteMRdata() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'MR data delete successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    deleteMRfialed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'delete MR data failed',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    changeMRloginstatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Status changed successfully.',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    changeMRloginstatusfailed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Status changed failed.',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    profileUpdated() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Profile updated successfully! Please Login Again to continue',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    profileUpdateFailed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Profile Updated failed',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ToastService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_apicall_service_ts.js.map