"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dcr-presentation_dcr-presentation_module_ts"],{

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

/***/ 6288:
/*!***************************************************************************!*\
  !*** ./src/app/pages/dcr-presentation/dcr-presentation-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DcrPresentationPageRoutingModule": () => (/* binding */ DcrPresentationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dcr_presentation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dcr-presentation.page */ 7600);




const routes = [
    {
        path: '',
        component: _dcr_presentation_page__WEBPACK_IMPORTED_MODULE_0__.DcrPresentationPage
    }
];
let DcrPresentationPageRoutingModule = class DcrPresentationPageRoutingModule {
};
DcrPresentationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DcrPresentationPageRoutingModule);



/***/ }),

/***/ 8768:
/*!*******************************************************************!*\
  !*** ./src/app/pages/dcr-presentation/dcr-presentation.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DcrPresentationPageModule": () => (/* binding */ DcrPresentationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dcr_presentation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dcr-presentation-routing.module */ 6288);
/* harmony import */ var _dcr_presentation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dcr-presentation.page */ 7600);







let DcrPresentationPageModule = class DcrPresentationPageModule {
};
DcrPresentationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dcr_presentation_routing_module__WEBPACK_IMPORTED_MODULE_0__.DcrPresentationPageRoutingModule
        ],
        declarations: [_dcr_presentation_page__WEBPACK_IMPORTED_MODULE_1__.DcrPresentationPage]
    })
], DcrPresentationPageModule);



/***/ }),

/***/ 7600:
/*!*****************************************************************!*\
  !*** ./src/app/pages/dcr-presentation/dcr-presentation.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DcrPresentationPage": () => (/* binding */ DcrPresentationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dcr_presentation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dcr-presentation.page.html?ngResource */ 2427);
/* harmony import */ var _dcr_presentation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dcr-presentation.page.scss?ngResource */ 2525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/global/global.service */ 6925);





let DcrPresentationPage = class DcrPresentationPage {
    constructor(global) {
        this.global = global;
        this.segmentList = [];
        this.selectedSegment = { p_name: '' };
    }
    ngOnInit() {
        this.global.Seeproducts.subscribe(res => {
            this.productsdata = res;
            console.log(this.productsdata);
            for (let i = 0; i < this.productsdata.length; i++) {
                this.segmentList.push({ p_name: this.productsdata[i].p_name });
                console.log(this.segmentList);
            }
        });
    }
    ngOnDestroy() {
        for (let i = 0; i < this.productsdata.length; i++) {
            this.segmentList.pop();
        }
        console.log(this.segmentList);
    }
    segmentChanged(ev, index) {
        // console.log('Segment changed', ev, index);
    }
    _segmentSelected(p_name, index) {
        console.log(p_name, index);
        this.slide.slideTo(index);
    }
    _ionSlideDidChange(event) {
        console.log(event);
        this.slide.getActiveIndex().then(index => {
            console.log(index);
            this.selectedSegment.p_name = this.segmentList[index].p_name;
            console.log(this.selectedSegment.p_name);
        });
    }
};
DcrPresentationPage.ctorParameters = () => [
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService }
];
DcrPresentationPage.propDecorators = {
    slide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slide',] }]
};
DcrPresentationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dcr-presentation',
        template: _dcr_presentation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dcr_presentation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DcrPresentationPage);



/***/ }),

/***/ 2525:
/*!******************************************************************************!*\
  !*** ./src/app/pages/dcr-presentation/dcr-presentation.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "img {\n  width: 100%;\n  height: 100%;\n  object-fit: fill;\n}\n\n.toolbar1 {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.toolbar1 .backicon {\n  font-size: 20px;\n  margin-left: 10px;\n  margin-top: 5px;\n}\n\n.toolbar1 .addD {\n  color: #1E6FD9;\n  text-align: center;\n  font-size: x-large;\n  font-weight: 800;\n}\n\n.toolbar1 .refresh_button_set {\n  width: 30px;\n  height: 30px;\n  float: right;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.toolbar1 .refrsh_img {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  margin: auto;\n}\n\n.product_footer {\n  display: flex;\n  background: #1E6FD9;\n  height: 35px;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: center;\n}\n\n.product_footer p {\n  color: white;\n  text-align: center;\n  font-size: 18px;\n}\n\n.refresh_button_set {\n  width: 30px;\n  height: 30px;\n  float: right;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 5px;\n  margin-right: 10px;\n}\n\nh6 {\n  float: right;\n  font-weight: bolder;\n  color: #0D65D9;\n  margin: auto 10px;\n}\n\nion-slides {\n  height: 100%;\n}\n\nion-card {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  --background: #e3f2fd;\n}\n\nimg {\n  border-radius: 10px;\n  height: 100%;\n  width: 100%;\n}\n\nion-segment {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid #eee;\n  --background: #fff;\n  border-radius: 0;\n}\n\nion-segment-button {\n  border-radius: 0;\n  --background: #fff;\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  --border: none;\n  --color-checked: #fff;\n  height: 100%;\n  padding: 5px;\n}\n\nion-segment-button::part(indicator-background) {\n  background: #3b6dc3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRjci1wcmVzZW50YXRpb24ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWVkaWNhbCUyMFJlcHJlc2VudGF0aXZlJTIwYXBwXFxNZWRpY2FsUmVwcmVzZW50YXRpdmVcXHNyY1xcYXBwXFxwYWdlc1xcZGNyLXByZXNlbnRhdGlvblxcZGNyLXByZXNlbnRhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0FDQ0o7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQVI7O0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDRFI7O0FES0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDSFI7O0FET0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUNKSjs7QURNSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNKUjs7QURRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURTQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFdBO0VBQ0ksWUFBQTtBQ1JKOztBRFVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUNQSjs7QURXQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNSSjs7QURvQkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2pCSjs7QURxQkU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDbEJKOztBRHFCQTtFQUNJLG1CQUFBO0FDbEJKIiwiZmlsZSI6ImRjci1wcmVzZW50YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcclxufVxyXG5cclxuLnRvb2xiYXIxIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5iYWNraWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkRCB7XHJcbiAgICAgICAgY29sb3I6ICMxRTZGRDk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWZyZXNoX2J1dHRvbl9zZXQge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzBENjVEOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnJlZnJzaF9pbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLnByb2R1Y3RfZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMUU2RkQ5O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZWZyZXNoX2J1dHRvbl9zZXQge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweFxyXG59XHJcblxyXG5cclxuaDYge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG4gICAgbWFyZ2luOiBhdXRvIDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlM2YyZmQ7XHJcbiAgICAvLyAtLWNvbG9yOndoaXRlXHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gaW9uLXNlZ21lbnR7XHJcbi8vICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAvLyBib3R0b206IDA7XHJcbi8vICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6ICMwRDY1RDk7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gfVxyXG5cclxuaW9uLXNlZ21lbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgLS1ib3JkZXI6IG5vbmU7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uOjpwYXJ0KGluZGljYXRvci1iYWNrZ3JvdW5kKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2I2ZGMzO1xyXG4gIH0iLCJpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBmaWxsO1xufVxuXG4udG9vbGJhcjEge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLnRvb2xiYXIxIC5iYWNraWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi50b29sYmFyMSAuYWRkRCB7XG4gIGNvbG9yOiAjMUU2RkQ5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi50b29sYmFyMSAucmVmcmVzaF9idXR0b25fc2V0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udG9vbGJhcjEgLnJlZnJzaF9pbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5wcm9kdWN0X2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICMxRTZGRDk7XG4gIGhlaWdodDogMzVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLnByb2R1Y3RfZm9vdGVyIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucmVmcmVzaF9idXR0b25fc2V0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5oNiB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICMwRDY1RDk7XG4gIG1hcmdpbjogYXV0byAxMHB4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZTNmMmZkO1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tc2VnbWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXI6IG5vbmU7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbjo6cGFydChpbmRpY2F0b3ItYmFja2dyb3VuZCkge1xuICBiYWNrZ3JvdW5kOiAjM2I2ZGMzO1xufSJdfQ== */";

/***/ }),

/***/ 2427:
/*!******************************************************************************!*\
  !*** ./src/app/pages/dcr-presentation/dcr-presentation.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  \n  <ion-toolbar mode=\"ios\" class=\"toolbar1\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" default-href=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"addD\">Products</ion-title>\n    \n  </ion-toolbar>\n  \n\n</ion-header> -->\n\n<ion-content>\n\n\n<ion-slides pager=\"true\" #slide (ionSlideDidChange)=\"_ionSlideDidChange($event)\">\n  <ion-slide *ngFor=\"let d of productsdata\">\n    <ion-card>\n      <img src=\"{{d.p_img}}\">\n    </ion-card>\n  </ion-slide>\n</ion-slides>\n\n</ion-content>\n<!-- <ion-segment scrollable=\"true\"  [(ngModel)]=\"selectedSegment.p_name\" (ionChange)=\"segmentChanged($event,i)\">\n<ion-segment-button [value]=\"item.p_name\" *ngFor=\"let item of productsdata;let i = index\"\n  (click)=\"_segmentSelected(item.p_name,i)\">\n  <ion-label>{{item.p_name}}</ion-label>\n</ion-segment-button>\n</ion-segment> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dcr-presentation_dcr-presentation_module_ts.js.map