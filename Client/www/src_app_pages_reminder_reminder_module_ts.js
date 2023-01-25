"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reminder_reminder_module_ts"],{

/***/ 6408:
/*!***********************************************************!*\
  !*** ./src/app/pages/reminder/reminder-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderPageRoutingModule": () => (/* binding */ ReminderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _reminder_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reminder.page */ 7570);




const routes = [
    {
        path: '',
        component: _reminder_page__WEBPACK_IMPORTED_MODULE_0__.ReminderPage
    }
];
let ReminderPageRoutingModule = class ReminderPageRoutingModule {
};
ReminderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReminderPageRoutingModule);



/***/ }),

/***/ 3190:
/*!***************************************************!*\
  !*** ./src/app/pages/reminder/reminder.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderPageModule": () => (/* binding */ ReminderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reminder_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reminder-routing.module */ 6408);
/* harmony import */ var _reminder_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reminder.page */ 7570);







let ReminderPageModule = class ReminderPageModule {
};
ReminderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reminder_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReminderPageRoutingModule
        ],
        declarations: [_reminder_page__WEBPACK_IMPORTED_MODULE_1__.ReminderPage]
    })
], ReminderPageModule);



/***/ }),

/***/ 7570:
/*!*************************************************!*\
  !*** ./src/app/pages/reminder/reminder.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderPage": () => (/* binding */ ReminderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reminder_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reminder.page.html?ngResource */ 6030);
/* harmony import */ var _reminder_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reminder.page.scss?ngResource */ 9434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/apicall/apicall.service */ 4985);
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/global.service */ 6925);







let ReminderPage = class ReminderPage {
    constructor(router, global, apicall) {
        this.router = router;
        this.global = global;
        this.apicall = apicall;
        this.today = Date.now();
        this.reminderdata = [];
    }
    ngOnInit() {
        this.get_doctor();
    }
    get_doctor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getDoctor();
            this.global.Doctor.subscribe(res => {
                this.Doctor = res;
            });
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
            for (let i = 0; i < this.Doctor.length; i++) {
                var x = this.Doctor[i].date_of_birth.split("-");
                var birthmonth = x[1];
                var birthdate = x[2];
                var y = this.Doctor[i].date_of_marrige.split("-");
                var marrigemonth = y[1];
                var marrigedate = y[2];
                console.log(birthmonth, birthdate);
                if (birthdate == d && birthmonth == m) {
                    console.log(this.Doctor[i]);
                    const x = { name: this.Doctor[i].name, hospital: this.Doctor[i].hospital, ceremony: "Birthday" };
                    console.log(x);
                    this.reminderdata.push(x);
                    console.log(this.reminderdata);
                    console.log("doctor birthday");
                }
                else if (marrigedate == d && marrigemonth == m) {
                    const x = { name: this.Doctor[i].name, hospital: this.Doctor[i].hospital, ceremony: "Marriage Anniversary" };
                    console.log(x);
                    this.reminderdata.push(x);
                    console.log(this.reminderdata);
                    console.log("doctor marrige Annuarsary ");
                }
                else {
                    console.log("No reminder");
                }
            }
        });
    }
};
ReminderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService }
];
ReminderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-reminder',
        template: _reminder_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reminder_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReminderPage);



/***/ }),

/***/ 9434:
/*!**************************************************************!*\
  !*** ./src/app/pages/reminder/reminder.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: white;\n}\nion-toolbar ion-title {\n  font-size: 20px;\n  color: #0D65D9;\n}\n.month_set {\n  text-align: center;\n  font-weight: 900;\n  font-size: 20px;\n  padding: 5px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.1294117647);\n}\nion-card-header.ios {\n  display: flex;\n  flex-flow: column-reverse;\n}\nion-row ion-col {\n  padding: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  padding-inline-start: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 0px));\n  padding-inline-end: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 0px));\n}\nion-row ion-col ion-card {\n  border-radius: 20px;\n  margin-inline: 0px;\n  margin: 10px 10px;\n}\nion-row ion-col ion-card ion-card-header {\n  padding: 20px 20px 0px;\n}\nion-row ion-col ion-card ion-card-content {\n  padding-inline-start: 16px;\n  padding-inline-end: 5px;\n}\nion-row ion-col ion-card ion-card-content ion-list {\n  background: transparent;\n  padding: 0px;\n}\nion-row ion-col ion-card ion-card-content ion-list ion-item {\n  border: none;\n  --padding-start: 5px;\n  --inner-padding-end: 0px;\n}\nion-row ion-col ion-card ion-card-content ion-list ion-item ion-icon {\n  margin-right: 5px;\n  font-size: 22px;\n}\nion-row ion-col ion-card ion-card-content ion-list ion-item ion-label {\n  margin: 0px 0px 0px 0px;\n  --padding-start: 5px;\n  --inner-padding-end: 0px;\n}\n.list {\n  padding: 16px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 40%;\n  transform: translateY(-50%);\n}\n.list .text {\n  font-family: \"semi-bold\", Courier, monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbWluZGVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1lZGljYWwlMjBSZXByZXNlbnRhdGl2ZSUyMGFwcFxcTWVkaWNhbFJlcHJlc2VudGF0aXZlXFxzcmNcXGFwcFxccGFnZXNcXHJlbWluZGVyXFxyZW1pbmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0VSO0FER0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwREFBQTtBQ0FKO0FER0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUNBSjtBRElJO0VBQ0ksWUFBQTtFQUNKLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNDLGtCQUFBO0VBQ0EsNEZBQUE7RUFDRCwwRkFBQTtBQ0RKO0FERUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRENRO0VBQ0ksc0JBQUE7QUNDWjtBRENFO0VBRUUsMEJBQUE7RUFFQSx1QkFBQTtBQ0NKO0FEQUU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNFSjtBRERJO0VBQ0ksWUFBQTtFQUNKLG9CQUFBO0VBQ0Esd0JBQUE7QUNHSjtBREZJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDSVI7QURGUTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQ0laO0FEUUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDTEo7QURNQTtFQUNJLDRDQUFBO0FDSkoiLCJmaWxlIjoicmVtaW5kZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG4gICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb250aF9zZXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA4MDgwMjE7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlci5pb3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XHJcbiAgfVxyXG5cclxuICBpb24tcm93e1xyXG4gICAgaW9uLWNvbHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgMHB4KSk7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgMHB4KSk7XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmU6IDBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgICAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxNnB4O1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiA1cHg7XHJcbiAgaW9uLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4OyBcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbn1cclxuXHJcbn1cclxufVxyXG5cclxuXHJcbi5saXN0e1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4udGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJywgQ291cmllciwgbW9ub3NwYWNlLFxyXG59XHJcbn0iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMEQ2NUQ5O1xufVxuXG4ubW9udGhfc2V0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xMjk0MTE3NjQ3KTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyLmlvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XG59XG5cbmlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDBweCkpO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgMHB4KSk7XG59XG5pb24tcm93IGlvbi1jb2wgaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4taW5saW5lOiAwcHg7XG4gIG1hcmdpbjogMTBweCAxMHB4O1xufVxuaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAwcHg7XG59XG5pb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogNXB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTZweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogNXB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDVweDtcbn1cbmlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYm9yZGVyOiBub25lO1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xufVxuaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbi5saXN0IHtcbiAgcGFkZGluZzogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDQwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmxpc3QgLnRleHQge1xuICBmb250LWZhbWlseTogXCJzZW1pLWJvbGRcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufSJdfQ== */";

/***/ }),

/***/ 6030:
/*!**************************************************************!*\
  !*** ./src/app/pages/reminder/reminder.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" default-href=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Reminder  \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"month_set\">{{today | date:'fullDate'}}</p>\n\n  <ion-row>\n    <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let item of reminderdata\">\n      <ion-card style=\"height: 100px;\" mode=\"ios\" color=\"primary\">\n        <ion-card-header>\n          <ion-card-subtitle>{{item.ceremony}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n         Today Doctor <span style=\"text-transform: uppercase;\">{{this.item.name}}'s</span>&nbsp;\n            <span *ngIf=\"item.ceremony == 'Marriage Anniversary'\">Marriage Anniversary</span> \n            <span *ngIf=\"item.ceremony == 'Birthday'\">Birthday</span> From {{item.hospital}}\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf=\"this.reminderdata == 0\">\n    <div class=\"list\">\n      <h1 class=\"text\">Sorry! No <span>Reminder</span> Today</h1>\n    </div>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reminder_reminder_module_ts.js.map