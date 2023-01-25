"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dcr_dcr_module_ts"],{

/***/ 9080:
/*!*************************************************!*\
  !*** ./src/app/pages/dcr/dcr-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DcrPageRoutingModule": () => (/* binding */ DcrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dcr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dcr.page */ 2610);




const routes = [
    {
        path: '',
        component: _dcr_page__WEBPACK_IMPORTED_MODULE_0__.DcrPage
    }
];
let DcrPageRoutingModule = class DcrPageRoutingModule {
};
DcrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DcrPageRoutingModule);



/***/ }),

/***/ 1538:
/*!*****************************************!*\
  !*** ./src/app/pages/dcr/dcr.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DcrPageModule": () => (/* binding */ DcrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dcr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dcr-routing.module */ 9080);
/* harmony import */ var _dcr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dcr.page */ 2610);







let DcrPageModule = class DcrPageModule {
};
DcrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dcr_routing_module__WEBPACK_IMPORTED_MODULE_0__.DcrPageRoutingModule
        ],
        declarations: [_dcr_page__WEBPACK_IMPORTED_MODULE_1__.DcrPage]
    })
], DcrPageModule);



/***/ }),

/***/ 2610:
/*!***************************************!*\
  !*** ./src/app/pages/dcr/dcr.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DcrPage": () => (/* binding */ DcrPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dcr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dcr.page.html?ngResource */ 4288);
/* harmony import */ var _dcr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dcr.page.scss?ngResource */ 7135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/apicall/apicall.service */ 4985);
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/global.service */ 6925);







let DcrPage = class DcrPage {
    constructor(router, apicall, global) {
        this.router = router;
        this.apicall = apicall;
        this.global = global;
        this.bind = '2022-11-';
        this.add_doctor = { d_id: null, d_name: '', doc_q: '', h_name: '', contact_no: '' };
        this.prodcutId = [];
        this.data = { dcrdata: { mr_id: '', c_id: '', d_id: '', month: '', year: '' }, product: [] };
        this.today = Date.now();
    }
    ngOnInit() {
        this.getAllCities();
        this.getAllProducts();
        this.global.MrLoginData.subscribe(res => {
            this.data.dcrdata.mr_id = res.user.mr_id;
            console.log(this.data.dcrdata.mr_id);
        });
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        console.log(month.length);
        const d = new Date();
        let name = month[d.getMonth()];
        console.log(name);
        this.data.dcrdata.month = name;
        const x = new Date();
        let year = [x.getFullYear()];
        console.log(year[0]);
        this.data.dcrdata.year = year[0];
        console.log(this.data.dcrdata.year);
    }
    getAllCities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getCities();
            this.global.GetCities.subscribe(res => {
                this.allCities = res;
            });
        });
    }
    selectCity(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event.target.value);
            this.data.dcrdata.c_id = event.target.value.id;
            const x = event.target.value.name;
            yield this.apicall.api_getDoctorbycity(x);
            this.global.GetDoctorbycity.subscribe(res => {
                this.doctorData = res;
                console.log(this.doctorData);
            });
        });
    }
    selectDoctor(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event.target.value);
            this.data.dcrdata.d_id = event.target.value;
        });
    }
    get_medican(item) {
        this.selectedmedican = item;
        console.log(item);
    }
    getAllProducts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apicall.api_getproduct();
            this.global.AllProduct.subscribe(res => {
                this.medicen = res;
                console.log(this.medicen);
            });
        });
    }
    getData(item) {
        console.log(item);
        this.prodcutId.push(item);
        console.log(this.prodcutId);
        if (item === undefined) {
            this.data.product.pop();
        }
        else {
            this.data.product.push({ p_id: item });
        }
        console.log(this.data);
    }
    // get_date($event){
    //   console.log($event.target.value)
    //   this.data.dcrdata.date = $event.target.value;
    //   console.log(this.data.dcrdata.date)
    // }
    adddata() {
        console.log(this.data);
        this.apicall.api_create_extradcr(this.data);
        // this.router.navigate(['mtp'])
    }
};
DcrPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService }
];
DcrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-dcr',
        template: _dcr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dcr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DcrPage);



/***/ }),

/***/ 7135:
/*!****************************************************!*\
  !*** ./src/app/pages/dcr/dcr.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".refresh_button_set {\n  width: 30px;\n  height: 30px;\n  float: right;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 5px;\n  margin-right: 10px;\n}\n\n.creat_mtp_text {\n  float: right;\n  color: black;\n}\n\n.refrsh_img {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  margin: auto;\n}\n\nh6 {\n  float: right;\n  padding-top: 22px;\n  margin-right: -26px;\n  font-weight: bolder;\n  font-size: 9px;\n  color: #0D65D9;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-title {\n  font-size: 20px;\n  color: #0D65D9;\n}\n\n.inputLabel {\n  font-weight: 300;\n  color: #0D65D9;\n}\n\n.container {\n  padding: 10px;\n  justify-content: center;\n}\n\n.RowProduct {\n  justify-content: center;\n}\n\nion-list {\n  height: 50px;\n  border: 1px solid #1E6FD9;\n  border-radius: 15px;\n  box-shadow: 0px 3px 3px 0px rgba(190, 184, 184, 0.733);\n}\n\nion-item {\n  height: 50px;\n  border: 1px solid #1E6FD9;\n  border-radius: 15px;\n  box-shadow: 0px 3px 3px 0px rgba(190, 184, 184, 0.733);\n}\n\n.Label2 {\n  padding: 20px;\n  font-weight: 800;\n}\n\n.ListGroup .inputLabel3 {\n  font-weight: 800;\n  padding: 5px;\n}\n\n.ListGroup .radio-button-group {\n  display: flex;\n  justify-content: space-between;\n  padding: 11px 0px;\n}\n\n.ListGroup .radio-label {\n  margin-left: 3px;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.ListGroup .flex {\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n}\n\nion-button {\n  --background: #1E6FD9;\n  --color: white;\n  width: 200px;\n  display: flex;\n  margin: auto;\n  --border-radius: 10px;\n  margin-top: 2%;\n  margin-bottom: 1%;\n  font-weight: 800;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\nion-radio-group ion-item {\n  --padding-start: 5px;\n  --inner-padding-end: 0px;\n}\n\nion-radio-group ion-radio {\n  margin-inline-end: 10px;\n}\n\n.month_set {\n  text-align: center;\n  font-weight: 900;\n  font-size: 20px;\n  padding: 5px;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRjci5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNZWRpY2FsJTIwUmVwcmVzZW50YXRpdmUlMjBhcHBcXE1lZGljYWxSZXByZXNlbnRhdGl2ZVxcc3JjXFxhcHBcXHBhZ2VzXFxkY3JcXGRjci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0VIOztBRENBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUU7RUFDRSxtQkFBQTtBQ0dKOztBREFJO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSx1QkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtBQ0lKOztBRERBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtBQ0lKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER1k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNBaEI7O0FER1k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ0RoQjs7QURJWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRmhCOztBRE1ZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7QUNMaEI7O0FEU0E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTko7O0FEb0JBO0VBQ0ksd0JBQUE7QUNqQko7O0FEaURJO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQzlDSjs7QURnREE7RUFDSSx1QkFBQTtBQzlDSjs7QURvREE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2pESiIsImZpbGUiOiJkY3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZnJlc2hfYnV0dG9uX3NldHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogIzBENjVEOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcclxuXHJcbn1cclxuLmNyZWF0X210cF90ZXh0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5yZWZyc2hfaW1ne1xyXG4gICB3aWR0aDogMjBweDtcclxuICAgaGVpZ2h0OiAyMHB4O1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmg2e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDIycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgY29sb3I6ICMwRDY1RDk7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwRDY1RDk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4uaW5wdXRMYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzBENjVEOTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5Sb3dQcm9kdWN0e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMUU2RkQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDBweCByZ2JhKDE5MCwgMTg0LCAxODQsIDAuNzMzKTtcclxuICAgIFxyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFFNkZEOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAwcHggcmdiYSgxOTAsIDE4NCwgMTg0LCAwLjczMyk7XHJcbiAgICBcclxufVxyXG4vLyBpb24tcmFkaW8tZ3JvdXB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyB9XHJcbi5MYWJlbDJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4gICAgICAgICAuTGlzdEdyb3Vwe1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC5pbnB1dExhYmVsM3tcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmFkaW8tYnV0dG9uLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnJhZGlvLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmZsZXh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMUU2RkQ5O1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgXHJcbi5tYWluXzEge1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8vIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogNCU7XHJcblxyXG59XHJcbi5kLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG59XHJcbi8vIGlvbi1yYWRpby1ncm91cHtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gLm1haW5fMiB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgbWFyZ2luOiA1cHg7XHJcbi8vIH1cclxuLy8gLmFjdGl2ZV9kaXZ7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBjb2xvcjogIzFFNkZEOTtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuLy8gICAgIG1hcmdpbjogNXB4O1xyXG4vLyAgICAgcGFkZGluZzogMTBweDtcclxuLy8gfVxyXG4vLyAubWFpbl8zIHtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLm1haW5fNCB7XHJcbi8vICAgICBtYXJnaW46IDFweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogNjBweDtcclxuLy8gfVxyXG5pb24tcmFkaW8tZ3JvdXB7XHJcbiAgICBpb24taXRlbXtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4OyBcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIH1cclxuaW9uLXJhZGlve1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHg7XHJcbn1cclxuXHJcbn1cclxuXHJcbi8vIGNvbnRlbnRcclxuLm1vbnRoX3NldCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIFxyXG59XHJcbiIsIi5yZWZyZXNoX2J1dHRvbl9zZXQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICMwRDY1RDk7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jcmVhdF9tdHBfdGV4dCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucmVmcnNoX2ltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaDYge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0yNnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICMwRDY1RDk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzBENjVEOTtcbn1cblxuLmlucHV0TGFiZWwge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzBENjVEOTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uUm93UHJvZHVjdCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tbGlzdCB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFFNkZEOTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4IHJnYmEoMTkwLCAxODQsIDE4NCwgMC43MzMpO1xufVxuXG5pb24taXRlbSB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFFNkZEOTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMHB4IHJnYmEoMTkwLCAxODQsIDE4NCwgMC43MzMpO1xufVxuXG4uTGFiZWwyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLkxpc3RHcm91cCAuaW5wdXRMYWJlbDMge1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uTGlzdEdyb3VwIC5yYWRpby1idXR0b24tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDExcHggMHB4O1xufVxuLkxpc3RHcm91cCAucmFkaW8tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uTGlzdEdyb3VwIC5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMxRTZGRDk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yYWRpby1ncm91cCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG5pb24tcmFkaW8tZ3JvdXAgaW9uLXJhZGlvIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHg7XG59XG5cbi5tb250aF9zZXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */";

/***/ }),

/***/ 4288:
/*!****************************************************!*\
  !*** ./src/app/pages/dcr/dcr.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n        \r\n  <!-- <ion-list class=\"refresh_button_set\">\r\n      <img class=\"refrsh_img\" src=\"../../../assets/refresh-icon.png\" alt=\"\">\r\n     </ion-list>\r\n       <h6>Sync</h6>   -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" default-href=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n    Create DCR \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- header End -->\r\n\r\n<ion-content>\r\n\r\n  <p class=\"month_set\">{{today | date:'fullDate'}}</p>\r\n  \r\n  <ion-grid>\r\n    \r\n    <ion-row class=\"container\">\r\n      <!-- <ion-col size-md=\"6\" size=\"12\">\r\n        <ion-label  class=\"inputLabel\">Select Date :</ion-label>\r\n        <ion-item lines=\"none\" class=\"itemDate\">\r\n          <ion-input type=\"date\" (ionChange)=\"get_date($event)\">\r\n    \r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-col> -->\r\n      <ion-col size-md=\"6\" size=\"6\">\r\n        <ion-label class=\"inputLabel\">Select City:</ion-label>\r\n        <ion-list>\r\n          <ion-select mode=\"ios\" placeholder=\"Select City\" (ionChange)=\"selectCity($event)\">\r\n            <ion-select-option *ngFor=\"let item of allCities\" [value]=\"{name: item.city, id: item.c_id}\">{{item.city}}</ion-select-option>\r\n          </ion-select>\r\n         </ion-list>\r\n      </ion-col>\r\n      \r\n      <ion-col size-md=\"6\" size=\"6\">\r\n        <ion-label class=\"inputLabel\">Select Doctor:</ion-label>\r\n        <ion-list>\r\n          <ion-select mode=\"ios\" placeholder=\"Select Doctor\" (ionChange)=\"selectDoctor($event)\">\r\n            <ion-select-option *ngIf=\"this.doctorData == 0\" value=\"No Rout Found\">No Doctor Found</ion-select-option>\r\n            <ion-select-option *ngFor=\"let item of doctorData\" value=\"{{item.d_id}}\">{{item.name}}</ion-select-option>\r\n          </ion-select>\r\n         </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\" size-md=\"3\" *ngFor=\"let item of medicen\">\r\n    <ion-radio-group allow-empty-selection=\"true\"  (ionChange)=\"getData($event.detail.value)\"  >\r\n      <ion-item style=\"border: none;border-radius: 0px;\" lines=\"none\">\r\n    <ion-label>{{item.p_name}}</ion-label>\r\n    <ion-radio  slot=\"start\" [value]=\"item.p_id\"></ion-radio>\r\n     </ion-item>\r\n       </ion-radio-group>\r\n      </ion-col>\r\n      </ion-row>\r\n  \r\n  \r\n<ion-button (click)=\"adddata()\">Submit</ion-button>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dcr_dcr_module_ts.js.map