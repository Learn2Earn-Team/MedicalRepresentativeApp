"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_core_services_apicall_apicall_service_ts"],{

/***/ 4985:
/*!**********************************************************!*\
  !*** ./src/app/core/services/apicall/apicall.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApicallService": () => (/* binding */ ApicallService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 7990);
/* harmony import */ var _global_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/global.service */ 6925);
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toast/toast.service */ 6791);






let ApicallService = class ApicallService {
    constructor(route, authservice, global, toast) {
        this.route = route;
        this.authservice = authservice;
        this.global = global;
        this.toast = toast;
    }
    api_login(data) {
        this.authservice.con(data, 'mrlogin').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.data = JSON.parse(String(res).toString());
            if (this.data.error == false) {
                console.log(this.data);
                this.global.set_mrloginData(this.data);
                this.route.navigate(['home']);
                this.toast.acc_login();
            }
            else {
                console.log(this.data);
                this.toast.acc_invalidlogin();
            }
        }), (err) => {
            console.log(err);
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
                if (this.data == '') {
                    this.toast.docnotFound();
                }
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
    api_getDoctorbycity(city) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getdoctorbycity/' + city).then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.set_getdoctorbycity(this.data);
            }, (err) => {
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
    api_getproduct() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getproduct').then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.store_allproduct(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_getpresentationproduct() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getpresentationproduct').then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.store_allallpresentationproduct(this.data);
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
    api_getmtpbydate(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'getmtpbydate').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                console.log(this.data);
                this.global.store_mtpdata(this.data);
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_CreateMtp(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'createmtp').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.addmtp();
                    this.route.navigate(['mtp']);
                }
                else {
                    console.log(this.data);
                    this.toast.doctoralready();
                }
            }), (err) => {
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
    api_create_extradcr(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'create_extradcr').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.adddcr();
                    this.route.navigate(['see-dcr']);
                }
                else {
                    console.log(this.data);
                    this.toast.doctoralready();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_getdcr(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'getdcr').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                console.log(this.data);
                this.global.store_dcrdata(this.data);
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
    api_seeproduct(mtp_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getproductbymtp_id/' + mtp_id).then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.store_seeproducts(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_getdoctordetailbymtpid(mtp_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getdoctordetailbymtpid/' + mtp_id).then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.store_doctordetailbymtpid(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_getcomments(d_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getcomments/' + d_id).then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.store_getcomments(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_getdcrdetails(mr_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.getdata('getdcrdetails/' + mr_id).then((result) => {
                this.data = JSON.parse(String(result));
                console.log(this.data);
                this.global.store_getdcrdetails(this.data);
            }, (err) => {
                console.log(err);
            });
        });
    }
    api_createdcr(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'createdcr').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                if (this.data.error == false) {
                    console.log(this.data);
                    this.toast.adddcr();
                    this.route.navigate(['see-dcr']);
                }
                else {
                    console.log(this.data);
                    this.toast.alreadydcr();
                }
            }), (err) => {
                console.log(err);
            });
        });
    }
    api_getonemonthmtpstatus(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authservice.con(data, 'getonemonthMtpstatus').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.data = JSON.parse(String(res).toString());
                console.log(this.data);
                this.global.store_getMtpstatus(this.data);
            }), (err) => {
                console.log(err);
            });
        });
    }
};
ApicallService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _global_global_service__WEBPACK_IMPORTED_MODULE_1__.GlobalService },
    { type: _toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService }
];
ApicallService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ApicallService);



/***/ }),

/***/ 7990:
/*!****************************************************!*\
  !*** ./src/app/core/services/auth/auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



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

/***/ 6925:
/*!********************************************************!*\
  !*** ./src/app/core/services/global/global.service.ts ***!
  \********************************************************/
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
        this.mrloginData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.MrLoginData = this.mrloginData.asObservable();
        this.doctor = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Doctor = this.doctor.asObservable();
        this.doctorbytype = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Doctorbytype = this.doctorbytype.asObservable();
        this.getCities = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.GetCities = this.getCities.asObservable();
        this.getRout = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.GetRout = this.getRout.asObservable();
        this.getdoctorbycity = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.GetDoctorbycity = this.getdoctorbycity.asObservable();
        this.mtp = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.MTP = this.mtp.asObservable();
        this.mtpdata = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.MtpData = this.mtpdata.asObservable();
        this.storecities = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Storecities = this.storecities.asObservable();
        this.allproduct = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.AllProduct = this.allproduct.asObservable();
        this.allpresentationproduct = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Allpresentationproduct = this.allpresentationproduct.asObservable();
        this.seeProductbymr = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.SeeProductbymr = this.seeProductbymr.asObservable();
        this.dcrdata = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Dcrdata = this.dcrdata.asObservable();
        this.seeProductbydcr = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.SeeProductbydcr = this.seeProductbydcr.asObservable();
        this.doctordetailbymtpid = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Doctordetailbymtpid = this.doctordetailbymtpid.asObservable();
        this.seeproducts = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Seeproducts = this.seeproducts.asObservable();
        this.getcomments = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Getcomments = this.getcomments.asObservable();
        this.getdcrdetails = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.Getdcrdetails = this.getdcrdetails.asObservable();
        this.getMtpstatus = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.GetMtpstatus = this.getMtpstatus.asObservable();
    }
    set_mrloginData(mrloginData) {
        this.mrloginData.next(mrloginData);
        console.log(mrloginData);
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
    set_getdoctorbycity(getdoctorbycity) {
        this.getdoctorbycity.next(getdoctorbycity);
        console.log(getdoctorbycity);
    }
    get_mtp(mtp) {
        this.mtp.next(mtp);
        console.log(mtp);
    }
    store_mtpdata(mtpdata) {
        this.mtpdata.next(mtpdata);
        console.log(mtpdata);
    }
    store_cities(storecities) {
        this.storecities.next(storecities);
        console.log(storecities);
    }
    store_allproduct(allproduct) {
        this.allproduct.next(allproduct);
        console.log(allproduct);
    }
    store_allallpresentationproduct(allpresentationproduct) {
        this.allpresentationproduct.next(allpresentationproduct);
        console.log(allpresentationproduct);
    }
    store_seeProductbymr(seeProductbymr) {
        this.seeProductbymr.next(seeProductbymr);
        console.log(seeProductbymr);
    }
    store_dcrdata(dcrdata) {
        this.dcrdata.next(dcrdata);
        console.log(dcrdata);
    }
    store_seeProductbydcr(seeProductbydcr) {
        this.seeProductbydcr.next(seeProductbydcr);
        console.log(seeProductbydcr);
    }
    store_doctordetailbymtpid(doctordetailbymtpid) {
        this.doctordetailbymtpid.next(doctordetailbymtpid);
        console.log(doctordetailbymtpid);
    }
    store_seeproducts(seeproducts) {
        this.seeproducts.next(seeproducts);
        console.log(seeproducts);
    }
    store_getcomments(getcomments) {
        this.getcomments.next(getcomments);
        console.log(getcomments);
    }
    store_getdcrdetails(getdcrdetails) {
        this.getdcrdetails.next(getdcrdetails);
        console.log(getdcrdetails);
    }
    store_getMtpstatus(getMtpstatus) {
        this.getMtpstatus.next(getMtpstatus);
        console.log(getMtpstatus);
    }
};
GlobalService.ctorParameters = () => [];
GlobalService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ 6791:
/*!******************************************************!*\
  !*** ./src/app/core/services/toast/toast.service.ts ***!
  \******************************************************/
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
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Your settings have been saved.',
                cssClass: 'toast_class',
                duration: 2000
            });
            toast.present();
        });
    }
    acc_login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Logged in successfully',
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
    acc_logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Logged out successfully.',
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
                message: 'Doctor Not Update successfully',
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
    add_dcr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Reporting added successfully.',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    addmtp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'MTP added successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    adddcr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'DCR added successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    comment_add() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Comment added successfully',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    doctoralready() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'Doctor is Already exits',
                cssClass: 'toast_class',
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    alreadydcr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: 'You have already created this DCR.',
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
//# sourceMappingURL=default-src_app_core_services_apicall_apicall_service_ts.js.map