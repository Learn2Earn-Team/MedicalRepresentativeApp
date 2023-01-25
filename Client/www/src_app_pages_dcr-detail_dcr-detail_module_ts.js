"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dcr-detail_dcr-detail_module_ts"],{

/***/ 3374:
/*!***************************************************************!*\
  !*** ./src/app/pages/dcr-detail/dcr-detail-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DcrDetailPageRoutingModule": () => (/* binding */ DcrDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dcr_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dcr-detail.page */ 1366);




const routes = [
    {
        path: '',
        component: _dcr_detail_page__WEBPACK_IMPORTED_MODULE_0__.DcrDetailPage
    }
];
let DcrDetailPageRoutingModule = class DcrDetailPageRoutingModule {
};
DcrDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DcrDetailPageRoutingModule);



/***/ }),

/***/ 557:
/*!*******************************************************!*\
  !*** ./src/app/pages/dcr-detail/dcr-detail.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DcrDetailPageModule": () => (/* binding */ DcrDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dcr_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dcr-detail-routing.module */ 3374);
/* harmony import */ var _dcr_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dcr-detail.page */ 1366);







let DcrDetailPageModule = class DcrDetailPageModule {
};
DcrDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dcr_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DcrDetailPageRoutingModule
        ],
        declarations: [_dcr_detail_page__WEBPACK_IMPORTED_MODULE_1__.DcrDetailPage]
    })
], DcrDetailPageModule);



/***/ }),

/***/ 1366:
/*!*****************************************************!*\
  !*** ./src/app/pages/dcr-detail/dcr-detail.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DcrDetailPage": () => (/* binding */ DcrDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dcr_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dcr-detail.page.html?ngResource */ 4921);
/* harmony import */ var _dcr_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dcr-detail.page.scss?ngResource */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/apicall/apicall.service */ 4985);
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/global.service */ 6925);







let DcrDetailPage = class DcrDetailPage {
    constructor(apicall, global, router) {
        this.apicall = apicall;
        this.global = global;
        this.router = router;
        this.isModalOpen = false;
        this.data = [{ name: "product" }, { name: "product" }, { name: "product" }, { name: "product" }, { name: "product" }, { name: "product" }, { name: "product" }, { name: "product" }, { name: "product" }, { name: "product" }, { name: "product" }, { name: "product" }];
        this.productsdata = [];
        this.Checkboxvaluee = "visited";
        this.misscomment = { comment: '' };
        this.datadcr = { dcrdata: { mr_id: '', mtp_id: '', c_id: '', d_id: '', comment: '', dcr_status: '' }, product: [] };
    }
    setOpen(isOpen) {
        this.isModalOpen = isOpen;
    }
    ngOnInit() {
        this.global.MrLoginData.subscribe(res => {
            this.datadcr.dcrdata.mr_id = res.user.mr_id;
            console.log(this.datadcr.dcrdata.mr_id);
        });
        this.global.Doctordetailbymtpid.subscribe(res => {
            this.doctordata = res[0];
            console.log(this.doctordata);
            this.datadcr.dcrdata.c_id = this.doctordata.c_id;
            this.datadcr.dcrdata.d_id = this.doctordata.d_id;
            this.datadcr.dcrdata.mtp_id = this.doctordata.mtp_id;
        });
        this.global.Seeproducts.subscribe(res => {
            this.productsdata = res;
            console.log(this.productsdata);
        });
        this.global.Getcomments.subscribe(res => {
            this.comments = res;
            console.log(this.comments);
        });
    }
    guatityInput($event, data, i) {
        console.log(data.p_id);
        const x = data.p_id;
        console.log($event.target.value);
        const y = $event.target.value;
        if (this.datadcr.product.length === 0) {
            this.datadcr.product.push({ p_id: x, quantity: y });
        }
        else {
            const found = this.datadcr.product.find(item => item.p_id === data.p_id);
            if (found) {
                this.datadcr.product[i].quantity = y;
            }
            else {
                this.datadcr.product.push({ p_id: x, quantity: y });
            }
        }
        console.log(this.datadcr.product);
    }
    submitdcr(isOpen) {
        if (this.Checkboxvaluee == "missed visit") {
            this.datadcr.dcrdata.dcr_status = this.Checkboxvaluee;
            this.datadcr.dcrdata.comment = this.misscomment.comment;
            console.log(this.datadcr.dcrdata.dcr_status);
            console.log(this.datadcr);
            this.apicall.api_createdcr(this.datadcr);
            this.setOpen(isOpen);
        }
        else {
            this.datadcr.dcrdata.dcr_status = this.Checkboxvaluee;
            console.log(this.datadcr.dcrdata.dcr_status);
            console.log(this.datadcr);
            this.apicall.api_createdcr(this.datadcr);
        }
        // this.apicall.api_createdcr(this.datadcr);
    }
    check($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log($event.detail.checked);
            console.log($event.detail.value);
            if ($event.detail.checked == true) {
                this.Checkboxvaluee = "missed visit";
                if (this.Checkboxvaluee = "missed visit") {
                    for (let i = 0; i < this.productsdata.length; i++) {
                        this.datadcr.product.push({ p_id: this.productsdata[i].p_id, quantity: 0 });
                    }
                }
                this.datadcr.dcrdata.dcr_status = this.Checkboxvaluee;
                console.log(this.datadcr.dcrdata.dcr_status);
                console.log(this.datadcr.dcrdata);
                console.log(this.datadcr.product);
                console.log(this.datadcr);
            }
            else {
                this.Checkboxvaluee = "visited";
                if (this.Checkboxvaluee == "visited") {
                    for (let i = 0; i < this.productsdata.length; i++) {
                        this.datadcr.product.pop();
                    }
                    console.log(this.datadcr);
                }
                this.datadcr.dcrdata.dcr_status = this.Checkboxvaluee;
                console.log(this.datadcr.dcrdata.dcr_status);
                console.log(this.datadcr.dcrdata);
            }
        });
    }
    onWillDismiss($event) {
        console.log($event.target.value);
    }
    goTopresentation() {
        this.router.navigate(['dcr-presentation']);
    }
};
DcrDetailPage.ctorParameters = () => [
    { type: src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
DcrDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-dcr-detail',
        template: _dcr_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dcr_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DcrDetailPage);



/***/ }),

/***/ 3825:
/*!******************************************************************!*\
  !*** ./src/app/pages/dcr-detail/dcr-detail.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: white;\n}\n\nion-title {\n  font-size: 20px;\n  color: #0D65D9;\n}\n\n.c1 {\n  margin: 0%;\n  width: 99%;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: none;\n  margin-top: 30px;\n  border-radius: 0;\n  height: 90%;\n}\n\n.c2 {\n  width: 30%;\n  height: 100%;\n  margin: 0;\n  display: inline-block;\n  box-shadow: none;\n  border: 0.5px solid #cdcdcd;\n  border-radius: 0;\n}\n\n.c3 {\n  width: 70%;\n  height: 100%;\n  margin: 0;\n  display: inline-block;\n  box-shadow: none;\n  border: 0.5px solid #cdcdcd;\n  border-radius: 0;\n  overflow-y: scroll;\n}\n\n.c5 {\n  padding: 20px;\n  width: 100%;\n  height: 80px;\n  max-width: 350px;\n  --background: #fff;\n  text-align: center;\n  margin-bottom: 0;\n  padding: 0;\n}\n\n.c5 ion-item {\n  text-align: center;\n  --background: #fff;\n  color: #0D65D9;\n  margin: 10px;\n}\n\n.c5 ion-item ion-label, .c5 ion-item p {\n  font-size: 16px;\n}\n\n.c5 ion-item ion-input {\n  text-align: center;\n  border-radius: 4px;\n  height: 30px;\n  max-width: 100px;\n  border: 1px solid #0D65D9;\n}\n\n.c6 {\n  width: 100%;\n  height: 91%;\n  margin: 0;\n  box-shadow: none;\n  overflow-y: scroll;\n}\n\n.c7 {\n  width: 100%;\n  min-width: 300px;\n  box-shadow: none;\n  margin: 0;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n.t1 {\n  font-size: 20px;\n  color: #202020;\n}\n\n.time {\n  font-size: 10px;\n  font-weight: 600;\n  color: #0D65D9;\n}\n\n.time ion-icon {\n  margin-right: 5px;\n  margin-top: 2px;\n  float: left;\n}\n\n.btn {\n  margin: 0;\n  color: #fff;\n  padding: 0;\n}\n\n.btn ion-icon {\n  height: 20px;\n  width: 20px;\n}\n\n.btn1 {\n  margin-top: 20px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.btm {\n  border-bottom: 1px solid #0D65D9;\n}\n\nion-checkbox {\n  --size: 32px;\n  --background-checked: #6815ec;\n}\n\nion-checkbox::part(container) {\n  border-radius: 6px;\n  border: 2px solid #6815ec;\n}\n\n.tt1 {\n  display: inline-block;\n  margin: 0;\n  font-size: 16px;\n  font-weight: bold;\n  color: #0D65D9;\n}\n\n.tt2 {\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 14px;\n  color: #393939;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRjci1kZXRhaWwucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWVkaWNhbCUyMFJlcHJlc2VudGF0aXZlJTIwYXBwXFxNZWRpY2FsUmVwcmVzZW50YXRpdmVcXHNyY1xcYXBwXFxwYWdlc1xcZGNyLWRldGFpbFxcZGNyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVJO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURJSTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNEUjs7QURLSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDRlI7O0FES0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRlI7O0FES0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNGUjs7QURJUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0ZaOztBRElZO0VBQ0ksZUFBQTtBQ0ZoQjs7QURLWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0hoQjs7QURVSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNQUjs7QURVSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1BSOztBRFdJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNSUjs7QURZSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNUUjs7QURVUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNSWjs7QURhSTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ1ZSOztBRFlRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNWWjs7QURjSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1hSOztBRGNJO0VBQ0ksZ0NBQUE7QUNYUjs7QURjSTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtBQ1hSOztBRGNNO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ1hSOztBRGNNO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1hSOztBRGFNO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNWUiIsImZpbGUiOiJkY3ItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwRDY1RDk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmMxe1xyXG4gICAgICAgIG1hcmdpbjogMCU7XHJcbiAgICAgICAgd2lkdGg6IDk5JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jMntcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkICNjZGNkY2Q7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAuYzN7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogLjVweCBzb2xpZCAjY2RjZGNkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgfVxyXG5cclxuICAgIC5jNXtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAgICAgICBpb24tbGFiZWwsIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pbnB1dHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMEQ2NUQ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLmM2e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogOTElO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIH1cclxuXHJcbiAgICAuYzd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC50aW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMEQ2NUQ5O1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5idG57XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuMXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG17XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwRDY1RDk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNoZWNrYm94IHtcclxuICAgICAgICAtLXNpemU6IDMycHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM2ODE1ZWM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlvbi1jaGVja2JveDo6cGFydChjb250YWluZXIpIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzY4MTVlYztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnR0MXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzBENjVEOTtcclxuICAgICAgfVxyXG4gICAgICAudHQyICB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzM5MzkzOTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB9IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMEQ2NUQ5O1xufVxuXG4uYzEge1xuICBtYXJnaW46IDAlO1xuICB3aWR0aDogOTklO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IDkwJTtcbn1cblxuLmMyIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjY2RjZGNkO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYzMge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNjZGNkY2Q7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmM1IHtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uYzUgaW9uLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwRDY1RDk7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jNSBpb24taXRlbSBpb24tbGFiZWwsIC5jNSBpb24taXRlbSBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmM1IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwRDY1RDk7XG59XG5cbi5jNiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkxJTtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5jNyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnQxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzIwMjAyMDtcbn1cblxuLnRpbWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMEQ2NUQ5O1xufVxuLnRpbWUgaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDA7XG59XG4uYnRuIGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmJ0bjEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5idG0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBENjVEOTtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgLS1zaXplOiAzMnB4O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzY4MTVlYztcbn1cblxuaW9uLWNoZWNrYm94OjpwYXJ0KGNvbnRhaW5lcikge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2ODE1ZWM7XG59XG5cbi50dDEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwRDY1RDk7XG59XG5cbi50dDIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzkzOTM5O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufSJdfQ== */";

/***/ }),

/***/ 4921:
/*!******************************************************************!*\
  !*** ./src/app/pages/dcr-detail/dcr-detail.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n        \n  <!-- <ion-list class=\"refresh_button_set\">\n      <img class=\"refrsh_img\" src=\"../../../assets/refresh-icon.png\" alt=\"\">\n     </ion-list>\n       <h6>Sync</h6>   -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" default-href=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n    DCR Details \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content mode=\"ios\">\n\n\n  <ion-card class=\"c1\">\n\n    <ion-card class=\"c2\">\n\n      <ion-card-header>\n        <ion-card-title class=\"t1\">\n      <ion-button class=\"btn\" expand=\"full\" (click)=\"setOpen(true)\">Missed Visit</ion-button>\n        </ion-card-title><br><br>\n        <ion-card-title class=\"t1\">\n        Previous Comments\n            </ion-card-title>\n\n\n      </ion-card-header>\n\n\n\n  <ion-modal [isOpen]=\"isModalOpen\" (willDismiss)=\"onWillDismiss($event)\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Comment</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"setOpen(false)\">Close</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content style=\"text-align: center;\" class=\"ion-padding\">\n        <ion-item lines=\"none\">\n          <ion-label style=\"font-size: 20px;\">Missed Visit</ion-label>\n          <ion-checkbox slot=\"end\" value={{this.Checkboxvaluee}} (ionChange)=\"check($event, data)\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-textarea placeholder=\"Type comment\" [autoGrow]=\"true\" [(ngModel)]=\"misscomment.comment\">\n          </ion-textarea>\n          </ion-item>\n\n          <ion-button class=\"btn1\" (click)=\"submitdcr(false)\">Submit</ion-button>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n\n\n\n      <ion-card class=\"c6\">\n        <ion-card class=\"c4\" *ngFor=\"let item of comments\">\n          <ion-card-header class=\"cardheader\">\n                <p class=\"time\"><ion-icon name=\"time\"></ion-icon>{{item.date}}</p> <p>{{item.dcr_status}}</p>\n          </ion-card-header>\n          <ion-card-content>\n            {{item.comment}}\n          </ion-card-content>\n  \n        </ion-card>\n  \n  \n      </ion-card>\n    \n\n    </ion-card>\n\n\n\n\n    <ion-card class=\"c3\">\n\n      <ion-card class=\"c7\">\n\n        <ion-card-header>\n          <ion-card-title class=\"t1\">Doctor Details</ion-card-title>\n        </ion-card-header>\n\n\n        <ion-row>\n          <ion-col size-md=\"6\" size=\"12\">\n            <ion-item lines=\"none\">\n              <ion-label><h2 class=\"tt1\">Doctor:</h2> <h3 class=\"tt2\">{{this.doctordata.name}}</h3></ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size-md=\"6\" size=\"12\">\n            <ion-item lines=\"none\">\n              <ion-label><h2 class=\"tt1\">Hospital:</h2> <h3 class=\"tt2\">{{this.doctordata.hospital}}</h3></ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size-md=\"6\" size=\"12\">\n            <ion-item lines=\"none\">\n              <ion-label><h2 class=\"tt1\">City:</h2> <h3 class=\"tt2\">{{this.doctordata.city}}</h3></ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size-md=\"6\" size=\"12\">\n            <ion-item lines=\"none\">\n              <ion-label><h2 class=\"tt1\">Route:</h2> <h3 class=\"tt2\">{{this.doctordata.rout}}</h3></ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n        <!-- <ion-item lines=\"none\">\n          <ion-label>Doctor:</ion-label>\n          {{this.doctordata.name}}\n        </ion-item>\n\n        <ion-item lines=\"none\">\n          <ion-label>Hospital:</ion-label>\n          {{this.doctordata.hospital}}\n        </ion-item>\n\n        <ion-item lines=\"none\">\n          <ion-label>City:</ion-label>\n          {{this.doctordata.city}}\n        </ion-item>\n\n        \n        <ion-item lines=\"none\">\n          <ion-label>Route:</ion-label>\n          {{this.doctordata.rout}}\n        </ion-item> -->\n        \n      </ion-card>\n\n\n\n      <ion-card-header>\n        <ion-card-title class=\"t1\">Products</ion-card-title>\n      </ion-card-header>\n\n   <ion-row>\n\n    <ion-col size=\"5.7\" size-md=\"5.7\"  *ngFor=\"let d of productsdata; let i=index\">\n      <ion-card class=\"c5\">\n\n        <ion-item lines=\"none\">\n          <div (click)=\"goTopresentation()\">{{d.p_name}}</div>\n          <ion-label (click)=\"goTopresentation()\"></ion-label>\n          <ion-input type=\"number\" slot=\"end\" (ionChange)=\"guatityInput($event, d, i)\"></ion-input>\n        </ion-item>\n\n      </ion-card>\n     </ion-col>\n  \n\n   </ion-row>\n\n\n\n    <ion-card class=\"c7\" style=\"text-align: center;\">\n\n\n\n      <ion-card-header>\n        <ion-card-title class=\"t1\" style=\"text-align: left;\">Comment</ion-card-title>\n      </ion-card-header>\n\n      <ion-item>\n        <ion-textarea class=\"btm\" placeholder=\"Type comment\" [autoGrow]=\"true\" [(ngModel)]=\"datadcr.dcrdata.comment\">\n        </ion-textarea>\n        </ion-item>\n\n        <ion-button class=\"btn1\"  [disabled]=\"this.datadcr.dcrdata.comment==''\" (click)=\"submitdcr(false)\">Submit</ion-button>\n\n    </ion-card>\n\n\n  </ion-card>\n\n</ion-card>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dcr-detail_dcr-detail_module_ts.js.map