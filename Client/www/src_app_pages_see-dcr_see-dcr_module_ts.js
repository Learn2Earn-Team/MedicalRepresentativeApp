"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_see-dcr_see-dcr_module_ts"],{

/***/ 862:
/*!*********************************************************!*\
  !*** ./src/app/pages/see-dcr/see-dcr-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeDcrPageRoutingModule": () => (/* binding */ SeeDcrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _see_dcr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-dcr.page */ 77);




const routes = [
    {
        path: '',
        component: _see_dcr_page__WEBPACK_IMPORTED_MODULE_0__.SeeDcrPage
    }
];
let SeeDcrPageRoutingModule = class SeeDcrPageRoutingModule {
};
SeeDcrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SeeDcrPageRoutingModule);



/***/ }),

/***/ 4971:
/*!*************************************************!*\
  !*** ./src/app/pages/see-dcr/see-dcr.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeDcrPageModule": () => (/* binding */ SeeDcrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _see_dcr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-dcr-routing.module */ 862);
/* harmony import */ var _see_dcr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-dcr.page */ 77);







let SeeDcrPageModule = class SeeDcrPageModule {
};
SeeDcrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _see_dcr_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeeDcrPageRoutingModule
        ],
        declarations: [_see_dcr_page__WEBPACK_IMPORTED_MODULE_1__.SeeDcrPage]
    })
], SeeDcrPageModule);



/***/ }),

/***/ 77:
/*!***********************************************!*\
  !*** ./src/app/pages/see-dcr/see-dcr.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeeDcrPage": () => (/* binding */ SeeDcrPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _see_dcr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./see-dcr.page.html?ngResource */ 1852);
/* harmony import */ var _see_dcr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./see-dcr.page.scss?ngResource */ 7566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/apicall/apicall.service */ 4985);
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/global.service */ 6925);
/* harmony import */ var _model_model_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/model.page */ 23);
/* harmony import */ var src_app_core_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast/toast.service */ 6791);











let SeeDcrPage = class SeeDcrPage {
    constructor(global, router, apicall, modalController, toast) {
        this.global = global;
        this.router = router;
        this.apicall = apicall;
        this.modalController = modalController;
        this.toast = toast;
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
        this.type = "dcr";
        this.alldcrcall = [];
        this.allmtpcalls = { total_calls: '', date: '' };
        this.today = Date.now();
        this.dcrData = { mr_id: '' };
        //add comment
        this.isModalOpen = false;
        this.add_comment = { call: '', comment: '' };
        this.reminderModalOpen = false;
        this.marrigereminderModalOpen = false;
        this.reminderdocrotr = { name: '', ceremony: '' };
        this.marrigereminder = { name: '', ceremony: '' };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.global.MrLoginData.subscribe(res => {
                this.dcrData.mr_id = res.user.mr_id;
                this.mrid = res.user.mr_id;
                console.log(this.dcrData.mr_id);
                console.log(this.mrid);
            });
            console.log(this.dcrData);
            yield this.apicall.api_getdcr(this.dcrData);
            this.global.Dcrdata.subscribe(res => {
                this.alldcr = res[0];
                this.alldcrcall = res[1][0];
                // this.alldcrcity = res[2];
                this.alldcrcity = this.findDuplicates(res[2]);
                console.log(this.alldcrcity);
                console.log(this.alldcr);
                console.log(res);
            });
            yield this.apicall.api_getdcrdetails(this.mrid);
            this.global.Getdcrdetails.subscribe(res => {
                this.alldcrdetail = res[0];
                this.totalcalls = res[1][0];
                this.totalmissedcalls = res[2][0];
                // this.totalcitites = res[3];
                this.totalcitites = this.findDuplicates(res[3]);
                console.log(this.alldcrdetail);
            });
            this.getCurrentDate();
            const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const d = new Date();
            let name = month[d.getMonth()];
            console.log(name);
            // this.show_mtp = this.mtp;
            // this.global.get_mtp(this.mtp);
            // console.log(this.commentDivs);
            const now = new Date();
            console.log(now);
            // // 👇️ all days of the current month
            // console.log(this.getAllDaysInMonth(now.getFullYear(), now.getMonth()));
            // const date = new Date();
            // // 👇️ All days in March of 2022
            // this.days = this.getAllDaysInMonth(date.getFullYear(), date.getMonth());
            // console.log(this.getAllDaysInMonth(date.getFullYear(), date.getMonth()));
        });
    }
    findDuplicates(arr) {
        let out;
        let result = [];
        out = Array.from(new Set(arr.map(({ city }) => city)));
        for (let i = 0; i < out.length; i++) {
            result.push({ city: out[i] });
        }
        return result;
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
    // A function to get all the days name and dates
    // Created by Mr. Zagham Nadeem
    // Full Stack developer and Ionic Expert
    // Dated: 12-11-2022
    // getAllDaysInMonth(year, month) {
    //   const date = new Date(year, month, 1);
    //   const dates = [];
    //   while (date.getMonth() === month) {
    //     var days = [
    //       'Sunday',
    //       'Monday',
    //       'Tuesday',
    //       'Wednesday',
    //       'Thursday',
    //       'Friday',
    //       'Saturday',
    //     ];
    //     const yyyy = date.getFullYear();
    //     let mm = date.getMonth() + 1; // Months start at 0!
    //     let m = mm.toString(); // Months start at 0!
    //     let d = date.getDate().toString();
    //     let dd = date.getDate();
    //     if (dd < 10) d = '0' + dd;
    //     if (mm < 10) m = '0' + mm;
    //     const formatedDate = yyyy + '-' + m + '-' + d;
    //     dates.push({
    //       daysName: days[date.getDay()],
    //       days: date.getDate(),
    //       month: date.getMonth() + 1,
    //       year: date.getFullYear(),
    //       date: formatedDate,
    //     });
    //     date.setDate(date.getDate() + 1);
    //   }
    //   return dates;
    // }
    changesegment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getdcr(this.dcrData);
            this.global.Dcrdata.subscribe(res => {
                this.alldcr = res[0];
                this.alldcrcall = res[1][0];
                // this.alldcrcity = res[2];
                this.alldcrcity = this.findDuplicates(res[2]);
                console.log(this.alldcr);
                console.log(res);
            });
            yield this.apicall.api_getdcrdetails(this.mrid);
            this.global.Getdcrdetails.subscribe(res => {
                this.alldcrdetail = res[0];
                this.totalcalls = res[1][0];
                this.totalmissedcalls = res[2][0];
                // this.totalcitites = res[3];
                this.totalcitites = this.findDuplicates(res[3]);
                console.log(this.alldcrdetail);
            });
        });
    }
    getCurrentDate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
            console.log(d, m);
            console.log(formatedDate);
            this.selectedItem = formatedDate;
            this.dcrData.date = formatedDate;
            console.log(formatedDate);
            // for(let i=0; i<this.alldcr.length; i++) {
            //   var x =this.alldcr[i].date_of_birth.split("-");
            //   var birthmonth = x[1];
            //   var birthdate = x[2];
            //   var y =this.alldcr[i].date_of_marrige.split("-");
            //   var marrigemonth = y[1];
            //   var marrigedate = y[2];
            //   console.log(birthmonth, birthdate)
            //     if(birthdate == d && birthmonth == m) {
            //          this.reminderModalOpen = true;  
            //          console.log(this.alldcr[i]);
            //           this.reminderdocrotr.name = this.alldcr[i].name;
            //           this.reminderdocrotr.ceremony = "birthday";
            //           console.log("doctor birthday")
            //     }
            //     else if(marrigedate == d && marrigemonth == m){
            //       this.marrigereminderModalOpen = true;  
            //       this.marrigereminder.name = this.alldcr[i].name;
            //       this.marrigereminder.ceremony = "marrigeAnnuarsary";
            //       console.log("doctor marrige Annuarsary ")
            //     }
            //     else{
            //       console.log("No reminder")
            //     }
            // }
        });
    }
    CreatedDCR() {
        this.router.navigate(['dcr']);
    }
    //  async get_date(item, i) {
    //     // Post item.date to get the MTPs
    //     console.log(item.date);
    //     this.selectedItem = item.date;
    //     const x = this.mtp.filter((x) => x.date == item.date).length;
    //     const y = this.mtp.filter((x) => x.date == item.date);
    //     this.show_mtp = y;
    //     this.calls_made = x;
    //     this.dcrData.date = item.date;
    //     console.log(this.dcrData);
    //    await this.apicall.api_getmtpbydate(this.dcrData);
    //    this.global.MtpData.subscribe(res=>{
    //           console.log(res);
    //           this.allmtpData = res[0];
    //           this.allmtpcalls.total_calls = res[1][0].total_calls;
    //           this.allmtpcalls.date = res[1][0].date;
    //           console.log(this.allmtpData);
    //           console.log(this.allmtpcalls);
    //    });
    //   }
    seeProduct(mtp_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    seedcrProduct(dcr_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(dcr_id);
            const modal = yield this.modalController.create({
                component: _model_model_page__WEBPACK_IMPORTED_MODULE_4__.ModelPage,
                cssClass: 'modalclass',
                componentProps: {
                    dcr_id,
                    "category": "seedcrproduct"
                },
                initialBreakpoint: 0.7,
                breakpoints: [0.25, 0.5, 1]
            });
            return yield modal.present();
        });
    }
    Comment() {
        console.log(this.add_comment);
        this.close();
        this.toast.comment_add();
    }
    close() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    setOpen(isOpen) {
        this.isModalOpen = isOpen;
    }
    gotodcrdetail(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            const x = data.mtp_id;
            const y = data.d_id;
            yield this.apicall.api_getdoctordetailbymtpid(x);
            yield this.apicall.api_seeproduct(x);
            yield this.apicall.api_getcomments(y);
            this.router.navigate(['dcr-detail']);
        });
    }
    next() {
        this.router.navigate(['dcr']);
    }
    closeremindermodel(isOpen) {
        this.reminderModalOpen = isOpen;
    }
    closermarrigeremindermodel(isOpen) {
        this.marrigereminderModalOpen = isOpen;
    }
};
SeeDcrPage.ctorParameters = () => [
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_core_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService }
];
SeeDcrPage.propDecorators = {
    commentDivs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChildren, args: ['todayDate',] }],
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonModal,] }]
};
SeeDcrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-see-dcr',
        template: _see_dcr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_see_dcr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SeeDcrPage);



/***/ }),

/***/ 7566:
/*!************************************************************!*\
  !*** ./src/app/pages/see-dcr/see-dcr.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".refresh_button_set {\n  width: 30px;\n  height: 30px;\n  float: right;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 5px;\n  margin-right: 29px;\n}\n\n.refresh_text {\n  float: right;\n  padding-top: 20px;\n  margin-right: -52px;\n  font-size: 14px;\n  color: #0d65d9;\n  font-weight: bolder;\n}\n\n.refrsh_img {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  margin: auto;\n  color: white;\n}\n\n.plus_button_set {\n  width: 30px;\n  height: 30px;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-right: 10px;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-title {\n  font-size: 20px;\n  color: #0D65D9;\n}\n\n.month_set {\n  text-align: center;\n  font-weight: 900;\n  font-size: 20px;\n  padding: 5px;\n  margin-bottom: 0;\n}\n\n.main_1 {\n  display: flex;\n  scroll-behavior: smooth;\n  overflow: hidden;\n  overflow-x: auto;\n}\n\n.main_2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n  margin: 5px;\n}\n\n.active_div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #1E6FD9;\n  border-bottom: 2px solid;\n  margin: 5px;\n  padding: 10px;\n}\n\n.main_3 {\n  margin: 0;\n  font-size: 10px;\n}\n\n.main_4 {\n  margin: 1px;\n  font-size: 60px;\n}\n\n.call_list {\n  width: 100%;\n  height: 110px;\n  background: #1E6FD9;\n  display: flex;\n  margin: auto;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n\n.location_list {\n  width: 100%;\n  height: 110px;\n  background: #1E6FD9;\n  display: flex;\n  margin: auto;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  overflow-y: auto;\n}\n\nion-row {\n  justify-content: center;\n  padding-top: 20px;\n}\n\nh3 {\n  display: flex;\n  margin: auto;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  font-weight: initial;\n  padding: 4px;\n}\n\n.doctor_name_list {\n  width: 95%;\n  height: 100px;\n  box-shadow: -5px 0px 0px 0px rgb(30, 111, 217);\n  margin: auto;\n  border: 1px solid #1e6fd9;\n}\n\nh4 {\n  margin: 0px 15px;\n  font-size: medium;\n}\n\n.text_adjust_1 {\n  font-weight: 100;\n  font-size: 14px;\n}\n\n.text_adjust_2 {\n  font-size: 12px;\n  position: absolute;\n  right: 10px;\n  bottom: 6px;\n  margin: 0%;\n  color: #1e6fd9;\n}\n\n.text_adjust_3 {\n  font-size: 12px;\n  position: absolute;\n  right: 10px;\n  margin: 0%;\n  color: #1e6fd9;\n  text-transform: uppercase;\n}\n\n.text_adjust_2:hover {\n  color: #1e6fd9;\n  text-decoration: underline;\n}\n\n.ps-1 {\n  padding-left: 1px !important;\n}\n\n.pe-1 {\n  padding-right: 0px !important;\n}\n\n.my_class1 {\n  color: red;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.my_class2 {\n  color: green;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.Add-comment {\n  width: 59%;\n  text-transform: none;\n}\n\n.Add-comment2 {\n  width: 15%;\n  text-transform: none;\n}\n\n.btn21 {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  height: 80px;\n  width: 80px;\n  --border-radius: 50%;\n  font-size: 20px;\n}\n\nion-segment {\n  width: 300px;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.reminder-modal {\n  --height: 50%;\n  --width: 50%;\n  --border-radius: 16px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n\nion-modal::part(backdrop) {\n  background: rgb(209, 213, 219);\n  opacity: 1;\n}\n\nion-modal ion-toolbar {\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZS1kY3IucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWVkaWNhbCUyMFJlcHJlc2VudGF0aXZlJTIwYXBwXFxNZWRpY2FsUmVwcmVzZW50YXRpdmVcXHNyY1xcYXBwXFxwYWdlc1xcc2VlLWRjclxcc2VlLWRjci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUU7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDTjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VOOztBREdFO0VBQ0UsbUJBQUE7QUNBSjs7QURHSTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQUo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRFFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRFNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ05KOztBRFFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0xKOztBRE9BO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDSko7O0FETUE7RUFDSyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDSEw7O0FETUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURNQztFQUNHLHVCQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURLQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRElBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSw4Q0FBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtBQ0ZKOztBRElBO0VBQ0ksZ0JBQUE7RUFDRCxpQkFBQTtBQ0RIOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDREo7O0FER0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FDRUo7O0FEQUE7RUFDSSw0QkFBQTtBQ0dKOztBRERBO0VBQ0ksNkJBQUE7QUNJSjs7QUREQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGRTtFQUNHLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNLTDs7QURGQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtBQ0tKOztBREhBO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0FDTUo7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNNSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QUREQTtFQUNRLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnRkFBQTtBQ0lSOztBRERNO0VBQ0UsOEJBQUE7RUFDQSxVQUFBO0FDSVI7O0FERE07RUFDRSxjQUFBO0FDSVIiLCJmaWxlIjoic2VlLWRjci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoZWFkZXJcclxuLnJlZnJlc2hfYnV0dG9uX3NldHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogIzBENjVEOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI5cHg7XHJcbiAgfVxyXG4gIC5yZWZyZXNoX3RleHR7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTUycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICMwZDY1ZDk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZWZyc2hfaW1ne1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAucGx1c19idXR0b25fc2V0e1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG4gIH1cclxuXHJcblxyXG5cclxuICBpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuLy8gY29udGVudFxyXG4ubW9udGhfc2V0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4ubWFpbl8xIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLm1haW5fMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmFjdGl2ZV9kaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzFFNkZEOTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubWFpbl8zIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLm1haW5fNCB7XHJcbiAgICBtYXJnaW46IDFweDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG4uY2FsbF9saXN0e1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgYmFja2dyb3VuZDogIzFFNkZEOTtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIG1hcmdpbjogYXV0bztcclxuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjZweCA7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo2cHggO1xyXG4gXHJcbiB9IFxyXG4ubG9jYXRpb25fbGlzdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxRTZGRDk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgXHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo2cHggO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NnB4IDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiB9XHJcbiBpb24tcm93e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5oM3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogaW5pdGlhbDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG4uZG9jdG9yX25hbWVfbGlzdHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogLTVweCAwcHggMHB4IDBweCByZ2IoMzAgMTExIDIxNyk7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFlNmZkOTtcclxufVxyXG5oNHtcclxuICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG4udGV4dF9hZGp1c3RfMXtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnRleHRfYWRqdXN0XzJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGNvbG9yOiAjMWU2ZmQ5O1xyXG59XHJcbi50ZXh0X2FkanVzdF8ze1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgY29sb3I6ICMxZTZmZDk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi50ZXh0X2FkanVzdF8yOmhvdmVye1xyXG4gICAgY29sb3I6ICMxZTZmZDk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4ucHMtMXtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBlLTF7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15X2NsYXNzMXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICB9XHJcbiAgLm15X2NsYXNzMntcclxuICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgIH1cclxuXHJcbi5BZGQtY29tbWVudHtcclxuICAgIHdpZHRoOiA1OSU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uQWRkLWNvbW1lbnQye1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4uYnRuMjF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcblxyXG5pb24tc2VnbWVudHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuXHJcbi5yZW1pbmRlci1tb2RhbHtcclxuICAgICAgICAtLWhlaWdodDogNTAlO1xyXG4gICAgICAgIC0td2lkdGg6IDUwJTtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1tb2RhbDo6cGFydChiYWNrZHJvcCkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjA5LCAyMTMsIDIxOSk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW9uLW1vZGFsIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgfSIsIi5yZWZyZXNoX2J1dHRvbl9zZXQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICMwRDY1RDk7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDI5cHg7XG59XG5cbi5yZWZyZXNoX3RleHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC01MnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMGQ2NWQ5O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ucmVmcnNoX2ltZyB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGx1c19idXR0b25fc2V0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogIzBENjVEOTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzBENjVEOTtcbn1cblxuLm1vbnRoX3NldCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5tYWluXzEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLm1haW5fMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYWN0aXZlX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMUU2RkQ5O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWFpbl8zIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5tYWluXzQge1xuICBtYXJnaW46IDFweDtcbiAgZm9udC1zaXplOiA2MHB4O1xufVxuXG4uY2FsbF9saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIGJhY2tncm91bmQ6ICMxRTZGRDk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG59XG5cbi5sb2NhdGlvbl9saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIGJhY2tncm91bmQ6ICMxRTZGRDk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuaW9uLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuaDMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5kb2N0b3JfbmFtZV9saXN0IHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm94LXNoYWRvdzogLTVweCAwcHggMHB4IDBweCByZ2IoMzAsIDExMSwgMjE3KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWU2ZmQ5O1xufVxuXG5oNCB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4udGV4dF9hZGp1c3RfMSB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRleHRfYWRqdXN0XzIge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogNnB4O1xuICBtYXJnaW46IDAlO1xuICBjb2xvcjogIzFlNmZkOTtcbn1cblxuLnRleHRfYWRqdXN0XzMge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogMCU7XG4gIGNvbG9yOiAjMWU2ZmQ5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGV4dF9hZGp1c3RfMjpob3ZlciB7XG4gIGNvbG9yOiAjMWU2ZmQ5O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnBzLTEge1xuICBwYWRkaW5nLWxlZnQ6IDFweCAhaW1wb3J0YW50O1xufVxuXG4ucGUtMSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubXlfY2xhc3MxIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubXlfY2xhc3MyIHtcbiAgY29sb3I6IGdyZWVuO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5BZGQtY29tbWVudCB7XG4gIHdpZHRoOiA1OSU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uQWRkLWNvbW1lbnQyIHtcbiAgd2lkdGg6IDE1JTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5idG4yMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXNlZ21lbnQge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5yZW1pbmRlci1tb2RhbCB7XG4gIC0taGVpZ2h0OiA1MCU7XG4gIC0td2lkdGg6IDUwJTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xuICAtLWJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcbn1cblxuaW9uLW1vZGFsOjpwYXJ0KGJhY2tkcm9wKSB7XG4gIGJhY2tncm91bmQ6IHJnYigyMDksIDIxMywgMjE5KTtcbiAgb3BhY2l0eTogMTtcbn1cblxuaW9uLW1vZGFsIGlvbi10b29sYmFyIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59Il19 */";

/***/ }),

/***/ 1852:
/*!************************************************************!*\
  !*** ./src/app/pages/see-dcr/see-dcr.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<!-- header start -->\r\n<!-- by Abdullah -->\r\n<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n \r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" default-href=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n     Daily Tour Plane\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- header End -->\r\n\r\n<!-- date section -->\r\n<ion-content overflow-scroll=\"true\">\r\n\r\n  <ion-segment color=\"primary\" [(ngModel)]=\"type\" mode=\"ios\" (ionChange)=\"changesegment()\">\r\n    <ion-segment-button value=\"dcr\" checked>\r\n      <ion-label>DCR</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"dcr-detail\">\r\n      <ion-label>DCR Details</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n\r\n\r\n  <div [ngSwitch]=\"type\" style=\"overflow-y: scroll;\">\r\n    <ion-list style=\"height: 100%;\" *ngSwitchCase=\"'dcr'\">\r\n      \r\n\r\n\r\n      <p class=\"month_set\">{{today | date:'fullDate'}}</p>\r\n\r\n  \r\n    <!-- <div class=\"main_1\">\r\n    \r\n      <div *ngFor=\"let item of days; let i=index\" class=\"main_2\" \r\n      #todayDate\r\n      [ngClass]=\"{ 'active_div': selectedItem === item.date }\"\r\n      (click)=\"get_date(item, i+1)\">\r\n        <p class=\"main_3\">{{item.daysName}}</p>\r\n        <h1 class=\"main_4\">{{item.days}}</h1>\r\n      </div>\r\n    </div> -->\r\n  \r\n\r\n\r\n        <ion-modal [isOpen]=\"isModalOpen\">\r\n            <ng-template>\r\n                <ion-header>\r\n                    <ion-toolbar mode=\"ios\">\r\n                      <ion-title>Add Comment</ion-title>\r\n                      <ion-buttons slot=\"end\">\r\n                        <ion-button (click)=\"setOpen(false)\" class=\"closBtn\">\r\n                          <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-buttons>\r\n                    </ion-toolbar>\r\n                  </ion-header>\r\n              <ion-content class=\"ion-padding\">\r\n                <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col size-md=\"12\">\r\n                        <ion-list>\r\n                        <ion-radio-group [(ngModel)]=\"this.add_comment.call\">\r\n                            <ion-item >\r\n                              <ion-label>Missed Call</ion-label>\r\n                              <ion-radio slot=\"end\" value=\"Missed Call\" ></ion-radio>\r\n                            </ion-item>\r\n                        </ion-radio-group>\r\n                        </ion-list>\r\n                      </ion-col>\r\n                      <ion-col size-md=\"12\">\r\n                        <ion-item>\r\n                            <ion-textarea placeholder=\"Type something here\" [autoGrow]=\"true\"\r\n                            [(ngModel)]=\"this.add_comment.comment\">\r\n                            </ion-textarea>\r\n                          </ion-item>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                <ion-list style=\"text-align: center;\">\r\n                        <ion-button  class=\"Add-comment2\" color=\"primary\" (click)=\"Comment()\">Confirim</ion-button>\r\n                </ion-list>\r\n                  </ion-grid>\r\n              </ion-content>\r\n            </ng-template>\r\n          </ion-modal>\r\n \r\n  \r\n  \r\n    <ion-row> \r\n      <ion-col size=\"12\" size-md=\"3\" class=\"pe-1\">\r\n        <ion-list class=\"call_list\">\r\n          <h3>{{this.alldcrcall.total_calls}} Calls</h3>\r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-md=\"5\" class=\"ps-1\">\r\n        <ion-list class=\"location_list\">\r\n          <p style=\"color: white; padding: 10px; margin-top: auto; margin-bottom: auto;\">City: &nbsp;<span *ngFor=\"let item of alldcrcity\" class=\"citiyspan\"> {{this.item.city}},&nbsp;</span></p>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n  \r\n    <!-- doctor names -->\r\n    <ion-row class=\"cards-dcr\">\r\n      <ion-col *ngFor=\"let data of alldcr\" size=\"12\" size-md=\"6\">\r\n        <ion-list class=\"doctor_name_list\">\r\n          <div class=\"text_adjust_3\" (click)=\"gotodcrdetail(data)\"> <ion-buttons><ion-button><ion-icon name=\"add\"></ion-icon></ion-button></ion-buttons> </div>\r\n          <h4> <b>Doctor:</b> {{data.name}}</h4>\r\n          <h4><b>Hospital:</b> {{data.hospital}}</h4>\r\n          <h4><b>City:</b> {{data.city}}</h4>\r\n          <h4><b>Rout:</b> {{data.rout}}</h4>\r\n          <h5 class=\"text_adjust_2\" (click)=\"seeProduct(data.mtp_id)\">See Products</h5>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\r\n      <ion-fab-button (click)=\"next()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    <!-- <ion-button class=\"btn21\" (click)=\"next()\"><ion-icon name=\"add-outline\"></ion-icon></ion-button> -->\r\n      \r\n        \r\n  </ion-list>\r\n  \r\n  <ion-list *ngSwitchCase=\"'dcr-detail'\">\r\n        \r\n    <p class=\"month_set\">{{today | date:'fullDate'}}</p>\r\n\r\n<!--    <div class=\"main_1\">\r\n    \r\n      <div *ngFor=\"let item of days; let i=index\" class=\"main_2\" \r\n      #todayDate\r\n      [ngClass]=\"{ 'active_div': selectedItem === item.date }\"\r\n      (click)=\"get_date(item, i+1)\">\r\n        <p class=\"main_3\">{{item.daysName}}</p>\r\n        <h1 class=\"main_4\">{{item.days}}</h1>\r\n      </div>\r\n    </div> -->\r\n  \r\n\r\n\r\n \r\n  \r\n  \r\n    <ion-row> \r\n      <ion-col size=\"12\" size-md=\"3\" class=\"pe-1\">\r\n        <ion-list class=\"call_list\">\r\n          <h3>{{this.totalcalls.total_calls}} Calls</h3>\r\n          <h3>{{this.totalmissedcalls.total_missedcalls}} Missed Calls</h3>\r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col size=\"12\" size-md=\"5\" class=\"ps-1\">\r\n        <ion-list class=\"location_list\">\r\n          <p style=\"color: white; padding: 10px; margin-top: auto; margin-bottom: auto;\">City: &nbsp;<span *ngFor=\"let item of totalcitites\" class=\"citiyspan\"> {{this.item.city}},&nbsp;</span></p>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n  \r\n    <!-- doctor names -->\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let data of alldcrdetail\" size=\"12\" size-md=\"6\">\r\n        <ion-list class=\"doctor_name_list\">\r\n          <h5 class=\"text_adjust_3\" [ngClass]=\"{my_class2:data.dcr_status == 'visited',my_class1:data.dcr_status == 'missed visit'}\">{{data.dcr_status}}</h5>\r\n          <h4> <b>Doctor:</b> {{data.name}}</h4>\r\n          <h4><b>Hospital:</b> {{data.hospital}}</h4>\r\n          <h4><b>City:</b> {{data.city}}</h4>\r\n          <h4><b>Rout:</b> {{data.rout}}</h4>\r\n          <h5 class=\"text_adjust_2\" (click)=\"seedcrProduct(data.dcr_id)\">See Products</h5>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    </ion-list>\r\n</div>\r\n\r\n\r\n<!-- <ion-modal [isOpen]=\"reminderModalOpen\" [backdropDismiss]=\"true\" mode=\"ios\" class=\"reminder-modal\">\r\n  <ng-template>\r\n    <ion-header class=\"ion-no-border\">\r\n      <ion-toolbar>\r\n        <ion-buttons style=\"margin-top: 15px; margin-right: 20px;\" slot=\"end\" mode=\"ios\">\r\n          <ion-button (click)=\"closeremindermodel(false)\">Close</ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\" style=\"--background: #fff; text-align: center;\">\r\n          <div style=\"height: 45%;\">\r\n            <img src=\"../../../assets/reminder.jpg\" alt=\"\">\r\n          </div>\r\n          <h1>Today Doctor <span style=\"color: #0D65D9; text-transform: uppercase;\">{{this.reminderdocrotr.name}}'s</span>&nbsp;\r\n          <span>Bithday</span></h1>\r\n\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal> -->\r\n\r\n<!-- <ion-modal [isOpen]=\"marrigereminderModalOpen\" [backdropDismiss]=\"true\" mode=\"ios\" class=\"reminder-modal\">\r\n  <ng-template>\r\n    <ion-header class=\"ion-no-border\">\r\n      <ion-toolbar>\r\n        <ion-buttons style=\"margin-top: 15px; margin-right: 20px;\" slot=\"end\" mode=\"ios\">\r\n          <ion-button (click)=\"closermarrigeremindermodel(false)\">Close</ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\" style=\"--background: #fff; text-align: center;\">\r\n          <div style=\"height: 45%;\">\r\n            <img src=\"../../../assets/reminder.jpg\" alt=\"\">\r\n          </div>\r\n          <h1>Today Doctor <span style=\"color: #0D65D9; text-transform: uppercase;\">{{this.marrigereminder.name}}'s</span>&nbsp;\r\n          <span>Marriage Annuarsary</span></h1>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal> -->\r\n\r\n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_see-dcr_see-dcr_module_ts.js.map