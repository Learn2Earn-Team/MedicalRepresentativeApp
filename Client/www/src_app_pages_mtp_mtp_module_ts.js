"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mtp_mtp_module_ts"],{

/***/ 6594:
/*!*************************************************!*\
  !*** ./src/app/pages/mtp/mtp-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MtpPageRoutingModule": () => (/* binding */ MtpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _mtp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mtp.page */ 4579);




const routes = [
    {
        path: '',
        component: _mtp_page__WEBPACK_IMPORTED_MODULE_0__.MtpPage
    }
];
let MtpPageRoutingModule = class MtpPageRoutingModule {
};
MtpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MtpPageRoutingModule);



/***/ }),

/***/ 51:
/*!*****************************************!*\
  !*** ./src/app/pages/mtp/mtp.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MtpPageModule": () => (/* binding */ MtpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mtp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mtp-routing.module */ 6594);
/* harmony import */ var _mtp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mtp.page */ 4579);







let MtpPageModule = class MtpPageModule {
};
MtpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mtp_routing_module__WEBPACK_IMPORTED_MODULE_0__.MtpPageRoutingModule
        ],
        declarations: [_mtp_page__WEBPACK_IMPORTED_MODULE_1__.MtpPage]
    })
], MtpPageModule);



/***/ }),

/***/ 4579:
/*!***************************************!*\
  !*** ./src/app/pages/mtp/mtp.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MtpPage": () => (/* binding */ MtpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mtp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mtp.page.html?ngResource */ 49);
/* harmony import */ var _mtp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mtp.page.scss?ngResource */ 2514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/global/global.service */ 6925);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/apicall/apicall.service */ 4985);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _model_model_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/model.page */ 23);









let MtpPage = class MtpPage {
    constructor(global, router, apicall, modalController) {
        this.global = global;
        this.router = router;
        this.apicall = apicall;
        this.modalController = modalController;
        this.date = [
            { day: 'MON', date: '1' },
            { day: 'TUE', date: '2' },
            { day: 'WED', date: '3' },
            { day: 'THU', date: '4' },
            { day: 'FRI', date: '5' },
            { day: 'SAT', date: '6' },
            { day: 'SUN', date: '7' },
            { day: 'MON', date: '8' },
            { day: 'TUE', date: '9' },
            { day: 'WED', date: '10' },
            { day: 'THU', date: '11' },
            { day: 'FRI', date: '12' },
            { day: 'SAT', date: '13' },
            { day: 'SUN', date: '14' },
            { day: 'MON', date: '15' },
            { day: 'TUE', date: '16' },
            { day: 'WED', date: '17' },
            { day: 'THU', date: '18' },
            { day: 'FRI', date: '19' },
            { day: 'SAT', date: '20' },
            { day: 'SUN', date: '21' },
            { day: 'MON', date: '22' },
            { day: 'TUE', date: '23' },
            { day: 'WED', date: '24' },
            { day: 'THU', date: '25' },
            { day: 'FRI', date: '26' },
            { day: 'SAT', date: '27' },
            { day: 'SUN', date: '28' },
            { day: 'MON', date: '29' },
        ];
        this.mtp = [
            {
                mtp_id: 1,
                d_name: 'Dr. Siddhartha Mukherjee',
                certification: 'Genealogist',
                h_name: 'Fortis Hospital, Bannerghatta Road',
                city: 'Mumbai',
                date: '1',
            },
            {
                mtp_id: 2,
                d_name: 'Dr. Naresh Trehan',
                certification: 'Genealogist',
                h_name: 'Manipal Hospital, Bangalore',
                city: 'Delhi',
                date: '1',
            },
            {
                mtp_id: 3,
                d_name: 'Dr. Sudhansu Bhattacharyya',
                certification: 'Genealogist',
                h_name: 'Cloudnine Hospitals',
                city: 'Bangalore',
                date: '1',
            },
            {
                mtp_id: 4,
                d_name: 'Dr. Surbhi Anand',
                certification: 'Genealogist',
                h_name: 'Apollo Hospitals, Greams Road',
                city: 'Hyderabad',
                date: '1',
            },
            {
                mtp_id: 5,
                d_name: 'Dr. Siddhartha Mukherjee',
                certification: 'Genealogist',
                h_name: 'Fortis Hospital, Bannerghatta Road',
                city: 'Mumbai',
                date: '1',
            },
            {
                mtp_id: 6,
                d_name: 'Dr. Naresh Trehan',
                certification: 'Genealogist',
                h_name: 'Manipal Hospital, Bangalore',
                city: 'Delhi',
                date: '2',
            },
            {
                mtp_id: 7,
                d_name: 'Dr. Sudhansu Bhattacharyya',
                certification: 'Genealogist',
                h_name: 'Cloudnine Hospitals',
                city: 'Bangalore',
                date: '2',
            },
            {
                mtp_id: 8,
                d_name: 'Dr. Surbhi Anand',
                certification: 'Genealogist',
                h_name: 'Apollo Hospitals, Greams Road',
                city: 'Hyderabad',
                date: '2',
            },
            {
                mtp_id: 9,
                d_name: 'Dr. Siddhartha Mukherjee',
                certification: 'Genealogist',
                h_name: 'Fortis Hospital, Bannerghatta Road',
                city: 'Mumbai',
                date: '1',
            },
            {
                mtp_id: 10,
                d_name: 'Dr. Naresh Trehan',
                certification: 'Genealogist',
                h_name: 'Manipal Hospital, Bangalore',
                city: 'Delhi',
                date: '2',
            },
            {
                mtp_id: 11,
                d_name: 'Dr. Sudhansu Bhattacharyya',
                certification: 'Genealogist',
                h_name: 'Cloudnine Hospitals',
                city: 'Bangalore',
                date: '3',
            },
            {
                mtp_id: 12,
                d_name: 'Dr. Surbhi Anand',
                certification: 'Genealogist',
                h_name: 'Apollo Hospitals, Greams Road',
                city: 'Hyderabad',
                date: '3',
            },
        ];
        this.allmtpcalls = { total_calls: '' };
        this.today = Date.now();
        this.mtpData = { mr_id: '', date: '' };
        this.mtpstatus = { mr_id: '', month: '', year: '' };
        this.monthlymtpStatus = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.global.MrLoginData.subscribe(res => {
                this.mtpData.mr_id = res.user.mr_id;
                this.mtpstatus.mr_id = res.user.mr_id;
                console.log(this.mtpData.mr_id);
            });
            this.show_mtp = this.mtp;
            this.global.get_mtp(this.mtp);
            console.log(this.commentDivs);
            const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            console.log(month.length);
            const d = new Date();
            let name = month[d.getMonth()];
            console.log(name);
            this.mtpstatus.month = name;
            const x = new Date();
            let year = [x.getFullYear()];
            console.log(year[0]);
            this.mtpstatus.year = year[0];
            console.log(this.mtpstatus);
            yield this.apicall.api_getonemonthmtpstatus(this.mtpstatus);
            this.global.GetMtpstatus.subscribe(res => {
                this.monthlymtpStatus = res[0];
                console.log(this.monthlymtpStatus);
            });
            const now = new Date();
            this.getCurrentDate();
            // 👇️ all days of the current month
            console.log(this.getAllDaysInMonth(now.getFullYear(), now.getMonth()));
            const date = new Date();
            // 👇️ All days in March of 2022
            this.days = this.getAllDaysInMonth(date.getFullYear(), date.getMonth());
            console.log(this.getAllDaysInMonth(date.getFullYear(), date.getMonth()));
        });
    }
    // A function to get all the days name and dates
    // Created by Mr. Zagham Nadeem
    // Full Stack developer and Ionic Expert
    // Dated: 12-11-2022
    getAllDaysInMonth(year, month) {
        const date = new Date(year, month, 1);
        const dates = [];
        while (date.getMonth() === month) {
            var days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ];
            const yyyy = date.getFullYear();
            let mm = date.getMonth() + 1; // Months start at 0!
            let m = mm.toString(); // Months start at 0!
            let d = date.getDate().toString();
            let dd = date.getDate();
            if (dd < 10)
                d = '0' + dd;
            if (mm < 10)
                m = '0' + mm;
            const formatedDate = yyyy + '-' + m + '-' + d;
            dates.push({
                daysName: days[date.getDay()],
                days: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear(),
                date: formatedDate,
            });
            date.setDate(date.getDate() + 1);
        }
        return dates;
    }
    getCurrentDate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const date = new Date();
            const yyyy = date.getFullYear();
            let mm = date.getMonth() + 1; // Months start at 0!
            let m = mm.toString(); // Months start at 0!
            let d = date.getDate().toString();
            let dd = date.getDate();
            if (dd < 10)
                d = '0' + dd;
            if (mm < 10)
                m = '0' + mm;
            const formatedDate = yyyy + '-' + m + '-' + d;
            console.log(formatedDate);
            this.selectedItem = formatedDate;
            this.mtpData.date = formatedDate;
            yield this.apicall.api_getmtpbydate(this.mtpData);
            this.global.MtpData.subscribe(res => {
                console.log(res);
                this.allmtpData = res[0];
                this.allmtpcalls.total_calls = res[1][0].total_calls;
                // this.allmtpcities = res[2];
                this.allmtpcities = this.findDuplicatescity(res[2]);
                console.log(this.allmtpData);
                console.log(this.allmtpcalls);
            });
        });
    }
    findDuplicatescity(arr) {
        let out;
        let result = [];
        out = Array.from(new Set(arr.map(({ city }) => city)));
        for (let i = 0; i < out.length; i++) {
            result.push({ city: out[i] });
        }
        return result;
    }
    CreateMTP() {
        this.router.navigate(['create-mtp']);
    }
    get_date(item, i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Post item.date to get the MTPs
            console.log(item.date);
            this.selectedItem = item.date;
            const x = this.mtp.filter((x) => x.date == item.date).length;
            const y = this.mtp.filter((x) => x.date == item.date);
            this.show_mtp = y;
            this.calls_made = x;
            this.mtpData.date = item.date;
            console.log(this.mtpData);
            yield this.apicall.api_getmtpbydate(this.mtpData);
            this.global.MtpData.subscribe(res => {
                console.log(res);
                this.allmtpData = res[0];
                this.allmtpcalls.total_calls = res[1][0].total_calls;
                this.allmtpcalls.date = res[1][0].date;
                this.allmtpcities = this.findDuplicatescity(res[2]);
                console.log(this.allmtpData);
                console.log(this.allmtpcalls);
            });
            yield this.apicall.api_getonemonthmtpstatus(this.mtpstatus);
            this.global.GetMtpstatus.subscribe(res => {
                this.monthlymtpStatus = res[0];
                console.log(this.monthlymtpStatus);
            });
        });
    }
    seeProduct(mtp_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(mtp_id);
            const modal = yield this.modalController.create({
                component: _model_model_page__WEBPACK_IMPORTED_MODULE_4__.ModelPage,
                cssClass: 'modalclass',
                componentProps: {
                    mtp_id,
                    "category": "seeproduct"
                },
                initialBreakpoint: 0.5,
                breakpoints: [0.25, 0.5, 1]
            });
            return yield modal.present();
        });
    }
};
MtpPage.ctorParameters = () => [
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_3__.ApicallService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
MtpPage.propDecorators = {
    commentDivs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChildren, args: ['todayDate',] }]
};
MtpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-mtp',
        template: _mtp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mtp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MtpPage);



/***/ }),

/***/ 2514:
/*!****************************************************!*\
  !*** ./src/app/pages/mtp/mtp.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".refresh_button_set {\n  width: 30px;\n  height: 30px;\n  float: right;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 5px;\n  margin-right: 29px;\n}\n\n.refresh_text {\n  float: right;\n  padding-top: 20px;\n  margin-right: -52px;\n  font-size: 14px;\n  color: #0d65d9;\n  font-weight: bolder;\n}\n\n.refrsh_img {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  margin: auto;\n  color: white;\n}\n\n.plus_button_set {\n  width: 30px;\n  height: 30px;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 10px;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-title {\n  font-size: 20px;\n  color: #0D65D9;\n}\n\n.month_set {\n  text-align: center;\n  font-weight: 900;\n  font-size: 20px;\n  padding: 5px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.1294117647);\n}\n\n.main_1 {\n  display: flex;\n  scroll-behavior: smooth;\n  overflow: hidden;\n  overflow-x: auto;\n}\n\n.main_2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n  margin: 5px;\n}\n\n.active_div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #1E6FD9;\n  border-bottom: 2px solid;\n  margin: 5px;\n  padding: 10px;\n}\n\n.main_3 {\n  margin: 0;\n  font-size: 10px;\n}\n\n.main_4 {\n  margin: 1px;\n  font-size: 60px;\n}\n\n.call_list {\n  width: 100%;\n  height: 110px;\n  background: #1E6FD9;\n  display: flex;\n  margin: auto;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n\n.location_list {\n  width: 100%;\n  height: 110px;\n  background: #1E6FD9;\n  display: flex;\n  margin: auto;\n  overflow-y: auto;\n}\n\n.status {\n  width: 100%;\n  height: 110px;\n  background: #1E6FD9;\n  display: flex;\n  margin: auto;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\nion-row {\n  justify-content: center;\n  padding-top: 20px;\n}\n\nh3 {\n  display: flex;\n  margin: auto;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  font-weight: initial;\n  padding: 4px;\n}\n\n.doctor_name_list {\n  width: 95%;\n  height: 100px;\n  box-shadow: -5px 0px 0px 0px rgb(30, 111, 217);\n  margin: auto;\n  border: 1px solid #1e6fd9;\n}\n\nh4 {\n  margin: 0px 15px;\n  font-size: medium;\n}\n\n.text_adjust_1 {\n  font-weight: 100;\n  font-size: 14px;\n}\n\n.text_adjust_2 {\n  font-size: 12px;\n  position: absolute;\n  right: 10px;\n  bottom: 6px;\n  margin: 0%;\n  color: #1e6fd9;\n}\n\n.text_adjust_3 {\n  font-size: 12px;\n  position: absolute;\n  right: 10px;\n  margin: 0%;\n  color: #1e6fd9;\n  text-transform: uppercase;\n}\n\n.text_adjust_2:hover {\n  color: #1e6fd9;\n  text-decoration: underline;\n}\n\n.ps-1 {\n  padding-left: 1px !important;\n}\n\n.pe-1 {\n  padding-right: 0px !important;\n}\n\n.ps-2 {\n  padding-left: 0.1px !important;\n}\n\n.my_class1 {\n  color: red;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.my_class2 {\n  color: green;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm10cC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNZWRpY2FsJTIwUmVwcmVzZW50YXRpdmUlMjBhcHBcXE1lZGljYWxSZXByZXNlbnRhdGl2ZVxcc3JjXFxhcHBcXHBhZ2VzXFxtdHBcXG10cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUU7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDTjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VOOztBREdFO0VBQ0UsbUJBQUE7QUNBSjs7QURHSTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQUo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwREFBQTtBQ0hKOztBRE9BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRFFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRE9BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0pKOztBRE1BO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDSEo7O0FES0E7RUFDSyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDRkw7O0FES0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQ0ZKOztBREtDO0VBQ0csdUJBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRElBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDREo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhDQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0FDREo7O0FER0E7RUFDSSxnQkFBQTtFQUNELGlCQUFBO0FDQUg7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNHSjs7QUREQTtFQUNJLDRCQUFBO0FDSUo7O0FERkE7RUFDSSw2QkFBQTtBQ0tKOztBREhBO0VBQ0ksOEJBQUE7QUNNSjs7QURIQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNNSjs7QURKRTtFQUNHLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNPTCIsImZpbGUiOiJtdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaGVhZGVyXHJcbi5yZWZyZXNoX2J1dHRvbl9zZXR7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQ6ICMwRDY1RDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyOXB4O1xyXG4gIH1cclxuICAucmVmcmVzaF90ZXh0e1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC01MnB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjMGQ2NWQ5O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuICBcclxuICAucmVmcnNoX2ltZ3tcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnBsdXNfYnV0dG9uX3NldHtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgYmFja2dyb3VuZDogIzBENjVEOTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuICB9XHJcblxyXG5cclxuXHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzBENjVEOTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbi8vIGNvbnRlbnRcclxuLm1vbnRoX3NldCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODAyMTtcclxufVxyXG5cclxuXHJcbi5tYWluXzEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcblxyXG59XHJcblxyXG4ubWFpbl8yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4uYWN0aXZlX2RpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMUU2RkQ5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5tYWluXzMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4ubWFpbl80IHtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcbi5jYWxsX2xpc3R7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICBiYWNrZ3JvdW5kOiAjMUU2RkQ5O1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6NnB4IDtcclxuICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjZweCA7XHJcbiBcclxuIH0gXHJcbi5sb2NhdGlvbl9saXN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzFFNkZEOTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gfVxyXG5cclxuLnN0YXR1c3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxRTZGRDk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NnB4IDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjZweCA7XHJcbn1cclxuXHJcbiBpb24tcm93e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5oM3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogaW5pdGlhbDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG4uZG9jdG9yX25hbWVfbGlzdHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMHB4IDBweCByZ2IoMzAgMTExIDIxNyk7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFlNmZkOTtcclxufVxyXG5oNHtcclxuICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG4udGV4dF9hZGp1c3RfMXtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnRleHRfYWRqdXN0XzJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGNvbG9yOiAjMWU2ZmQ5O1xyXG59XHJcbi50ZXh0X2FkanVzdF8ze1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgY29sb3I6ICMxZTZmZDk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi50ZXh0X2FkanVzdF8yOmhvdmVye1xyXG4gICAgY29sb3I6ICMxZTZmZDk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4ucHMtMXtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBlLTF7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ucHMtMntcclxuICAgIHBhZGRpbmctbGVmdDogMC4xcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15X2NsYXNzMXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICB9XHJcbiAgLm15X2NsYXNzMntcclxuICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgIH0iLCIucmVmcmVzaF9idXR0b25fc2V0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyOXB4O1xufVxuXG4ucmVmcmVzaF90ZXh0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzBkNjVkOTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnJlZnJzaF9pbWcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBsdXNfYnV0dG9uX3NldCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICMwRDY1RDk7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwRDY1RDk7XG59XG5cbi5tb250aF9zZXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEyOTQxMTc2NDcpO1xufVxuXG4ubWFpbl8xIHtcbiAgZGlzcGxheTogZmxleDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5tYWluXzIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmFjdGl2ZV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzFFNkZEOTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1haW5fMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubWFpbl80IHtcbiAgbWFyZ2luOiAxcHg7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLmNhbGxfbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBiYWNrZ3JvdW5kOiAjMUU2RkQ5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xufVxuXG4ubG9jYXRpb25fbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHB4O1xuICBiYWNrZ3JvdW5kOiAjMUU2RkQ5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zdGF0dXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYmFja2dyb3VuZDogIzFFNkZEOTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xufVxuXG5pb24tcm93IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5oMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLmRvY3Rvcl9uYW1lX2xpc3Qge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3gtc2hhZG93OiAtNXB4IDBweCAwcHggMHB4IHJnYigzMCwgMTExLCAyMTcpO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZTZmZDk7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiAwcHggMTVweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi50ZXh0X2FkanVzdF8xIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGV4dF9hZGp1c3RfMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiA2cHg7XG4gIG1hcmdpbjogMCU7XG4gIGNvbG9yOiAjMWU2ZmQ5O1xufVxuXG4udGV4dF9hZGp1c3RfMyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgbWFyZ2luOiAwJTtcbiAgY29sb3I6ICMxZTZmZDk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50ZXh0X2FkanVzdF8yOmhvdmVyIHtcbiAgY29sb3I6ICMxZTZmZDk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucHMtMSB7XG4gIHBhZGRpbmctbGVmdDogMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wZS0xIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcy0yIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjFweCAhaW1wb3J0YW50O1xufVxuXG4ubXlfY2xhc3MxIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubXlfY2xhc3MyIHtcbiAgY29sb3I6IGdyZWVuO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */";

/***/ }),

/***/ 49:
/*!****************************************************!*\
  !*** ./src/app/pages/mtp/mtp.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<!-- header start -->\r\n<!-- by Abdullah -->\r\n<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <div  (click)=\"CreateMTP()\">\r\n      <ion-list  class=\"refresh_button_set\"  >\r\n        <!-- <img class=\"refrsh_img\" src=\"../../../assets/+.png\" > -->\r\n        <ion-icon class=\"refrsh_img\"  name=\"duplicate-outline\"></ion-icon>\r\n       </ion-list>\r\n       <h6  class=\"refresh_text\">Create MTP</h6> \r\n        </div>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" default-href=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n     Monthly Tour Plane\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- header End -->\r\n\r\n<!-- date section -->\r\n<ion-content>\r\n  <p class=\"month_set\">{{today | date:'fullDate'}}</p>\r\n\r\n  <div class=\"main_1\">\r\n  \r\n    <div *ngFor=\"let item of days; let i=index\" class=\"main_2\" \r\n    #todayDate\r\n    [ngClass]=\"{ 'active_div': selectedItem === item.date }\"\r\n    (click)=\"get_date(item, i+1)\">\r\n      <p class=\"main_3\">{{item.daysName}}</p>\r\n      <h1 class=\"main_4\">{{item.days}}</h1>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- call and location section -->\r\n\r\n\r\n  <ion-row> \r\n    <ion-col size=\"3\"  class=\"pe-1\">\r\n      <ion-list class=\"call_list\">\r\n        <h3>{{this.allmtpcalls.total_calls}} Calls</h3>\r\n      </ion-list>\r\n    </ion-col>\r\n    <ion-col size=\"6\"  class=\"ps-1\">\r\n      <ion-list class=\"location_list\">\r\n        <p style=\"color: white; padding: 10px; margin-top: auto; margin-bottom: auto;\">City: &nbsp;<span *ngFor=\"let item of allmtpcities\" class=\"citiyspan\"> {{this.item.city}},&nbsp;</span></p>\r\n      </ion-list>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"3\" class=\"ps-2\">\r\n      <ion-list class=\"status\">\r\n        <h3>MTP Status: {{this.monthlymtpStatus.status}}</h3>\r\n      </ion-list>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n\r\n  <!-- doctor names -->\r\n  <ion-row>\r\n    <ion-col *ngFor=\"let data of allmtpData\" size=\"12\" size-md=\"6\">\r\n      <ion-list class=\"doctor_name_list\">\r\n        <!-- <h5 class=\"text_adjust_3\" [ngClass]=\"{my_class2:data.mtp_status == 'approve',my_class1:data.mtp_status == 'reject'}\">{{data.mtp_status}}</h5> -->\r\n        <h4> <b>Doctor:</b> {{data.name}}</h4>\r\n        <h4><b>Hospital:</b> {{data.hospital}}</h4>\r\n        <h4><b>City:</b> {{data.city}}</h4>\r\n        <h4><b>Rout:</b> {{data.rout}}</h4>\r\n        <h5 class=\"text_adjust_2\" (click)=\"seeProduct(data.mtp_id)\">See Products</h5>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mtp_mtp_module_ts.js.map