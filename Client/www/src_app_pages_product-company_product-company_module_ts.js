"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_product-company_product-company_module_ts"],{

/***/ 5406:
/*!*************************************************************************!*\
  !*** ./src/app/pages/product-company/product-company-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCompanyPageRoutingModule": () => (/* binding */ ProductCompanyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _product_company_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-company.page */ 5378);




const routes = [
    {
        path: '',
        component: _product_company_page__WEBPACK_IMPORTED_MODULE_0__.ProductCompanyPage
    }
];
let ProductCompanyPageRoutingModule = class ProductCompanyPageRoutingModule {
};
ProductCompanyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductCompanyPageRoutingModule);



/***/ }),

/***/ 6692:
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-company/product-company.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCompanyPageModule": () => (/* binding */ ProductCompanyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _product_company_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-company-routing.module */ 5406);
/* harmony import */ var _product_company_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-company.page */ 5378);







let ProductCompanyPageModule = class ProductCompanyPageModule {
};
ProductCompanyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product_company_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductCompanyPageRoutingModule
        ],
        declarations: [_product_company_page__WEBPACK_IMPORTED_MODULE_1__.ProductCompanyPage]
    })
], ProductCompanyPageModule);



/***/ }),

/***/ 5378:
/*!***************************************************************!*\
  !*** ./src/app/pages/product-company/product-company.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCompanyPage": () => (/* binding */ ProductCompanyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _product_company_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-company.page.html?ngResource */ 2722);
/* harmony import */ var _product_company_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-company.page.scss?ngResource */ 4411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/apicall/apicall.service */ 4985);
/* harmony import */ var src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/global/global.service */ 6925);







let ProductCompanyPage = class ProductCompanyPage {
    constructor(route, apicall, global) {
        this.route = route;
        this.apicall = apicall;
        this.global = global;
        this.products = [
            { p_id: 1, p_name: 'Introduction', p_img: './../../../assets/prodcuts/2211301669840147.9388.jpg' },
            { p_id: 2, p_name: 'Women Care', p_img: './../../../assets/prodcuts/2211301669840190.1508.jpg' },
            { p_id: 3, p_name: 'Introducing Ori-OVA', p_img: './../../../assets/prodcuts/2211301669840229.5029.jpg' },
            { p_id: 4, p_name: 'Ori-OVA', p_img: './../../../assets/prodcuts/2211301669840418.587.jpg' },
            { p_id: 5, p_name: 'Ori-Q10', p_img: './../../../assets/prodcuts/2211301669840468.289.jpg' },
            { p_id: 6, p_name: 'Ori GEST SR', p_img: './../../../assets/prodcuts/2211301669840527.2154.jpg' },
            { p_id: 7, p_name: 'Ori LARG', p_img: './../../../assets/prodcuts/2211301669840559.7949.jpg' },
            { p_id: 8, p_name: 'Ori-Pill.EVT', p_img: './../../../assets/prodcuts/2211301669840598.4309.jpg' },
            { p_id: 9, p_name: 'ORIWIT', p_img: './../../../assets/prodcuts/2211301669840662.7826.jpg' },
            { p_id: 10, p_name: 'Folear D', p_img: './../../../assets/prodcuts/2211301669840724.3333.jpg' },
            { p_id: 11, p_name: 'Calear D3', p_img: './../../../assets/prodcuts/2211301669840759.068.jpg' },
            { p_id: 12, p_name: 'Folear XT', p_img: './../../../assets/prodcuts/2211301669840799.1335.jpg' },
            { p_id: 13, p_name: 'Folear-9', p_img: './../../../assets/prodcuts/2211301669840837.8985.jpg' },
            { p_id: 14, p_name: 'Orizef', p_img: './../../../assets/prodcuts/2211301669840895.4979.jpg' },
            { p_id: 15, p_name: 'Calear D3 Syrup', p_img: './../../../assets/prodcuts/2211301669840969.8875.jpg' },
            { p_id: 16, p_name: 'Orituss LS', p_img: './../../../assets/prodcuts/2211301669841016.7046.jpg' },
            { p_id: 17, p_name: 'Orituss D', p_img: './../../../assets/prodcuts/2211301669841106.8124.jpg' },
            { p_id: 18, p_name: 'Orinorm', p_img: './../../../assets/prodcuts/2211301669841203.4734.jpg' },
            { p_id: 19, p_name: 'ORIWIT Syrup', p_img: './../../../assets/prodcuts/2211301669841283.4126.jpg' },
            { p_id: 20, p_name: 'Ori RAB-DSR', p_img: './../../../assets/prodcuts/2211301669841362.318.jpg' },
            { p_id: 21, p_name: 'Orimox CV-625', p_img: './../../../assets/prodcuts/2211301669841465.5106.jpg' },
            { p_id: 22, p_name: 'Fine-AP', p_img: './../../../assets/prodcuts/2211301669841519.9246.jpg' },
            { p_id: 23, p_name: 'Fine-APS', p_img: './../../../assets/prodcuts/2211301669841549.5444.jpg' },
            { p_id: 24, p_name: 'Ori-PAN D', p_img: './../../../assets/prodcuts/2211301669841583.1481.jpg' },
            { p_id: 25, p_name: 'ORIWIT', p_img: './../../../assets/prodcuts/2211301669841626.5666.jpg' },
            { p_id: 26, p_name: 'Ori Heal', p_img: './../../../assets/prodcuts/2211301669841671.6204.jpg' },
            { p_id: 27, p_name: 'Thank You', p_img: './../../../assets/prodcuts/2211301669841695.9438.jpg' },
        ];
    }
    ngOnInit() {
        // this.getAllProducts();
    }
    //   public product: any ;
    //  async  getAllProducts(){
    //   await this.apicall.api_getpresentationproduct();
    //   this.global.Allpresentationproduct.subscribe(res=>{
    //       this.product = res;
    //       console.log(this.product);
    //   });
    //    }
    product_pre(company, index) {
        this.route.navigate(['product-presentation'], { state: { companies: this.products, company: company, index: index } });
    }
};
ProductCompanyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_core_services_apicall_apicall_service__WEBPACK_IMPORTED_MODULE_2__.ApicallService },
    { type: src_app_core_services_global_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService }
];
ProductCompanyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-product-company',
        template: _product_company_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_product_company_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductCompanyPage);



/***/ }),

/***/ 4411:
/*!****************************************************************************!*\
  !*** ./src/app/pages/product-company/product-company.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "p {\n  font-weight: 800;\n  color: #ffffff;\n  text-align: center;\n  font-size: 30px;\n  margin: 8px;\n}\n\n.refresh_button_set {\n  width: 30px;\n  height: 30px;\n  float: right;\n  background: #0D65D9;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 5px;\n  margin-right: 10px;\n}\n\n.refrsh_img {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  margin: auto;\n}\n\nh6 {\n  float: right;\n  padding-top: 22px;\n  margin-right: -26px;\n  font-weight: bolder;\n  font-size: 9px;\n  color: #0D65D9;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-title {\n  font-size: 20px;\n  color: #0D65D9;\n}\n\n.company_title {\n  background: #0D65D9;\n  height: 80px;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY29tcGFueS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNZWRpY2FsJTIwUmVwcmVzZW50YXRpdmUlMjBhcHBcXE1lZGljYWxSZXByZXNlbnRhdGl2ZVxcc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LWNvbXBhbnlcXHByb2R1Y3QtY29tcGFueS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREdBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNESiIsImZpbGUiOiJwcm9kdWN0LWNvbXBhbnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuLnJlZnJlc2hfYnV0dG9uX3NldCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQ6ICMwRDY1RDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbn1cclxuXHJcbi5yZWZyc2hfaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaDYge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDIycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0yNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgY29sb3I6ICMwRDY1RDk7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzBENjVEOTtcclxuXHJcbn1cclxuXHJcbi5jb21wYW55X3RpdGxlIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjMEQ2NUQ5O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59IiwicCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5yZWZyZXNoX2J1dHRvbl9zZXQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICMwRDY1RDk7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yZWZyc2hfaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5oNiB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogLTI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzBENjVEOTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMEQ2NUQ5O1xufVxuXG4uY29tcGFueV90aXRsZSB7XG4gIGJhY2tncm91bmQ6ICMwRDY1RDk7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 2722:
/*!****************************************************************************!*\
  !*** ./src/app/pages/product-company/product-company.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" default-href=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n  <!-- <ion-list class=\"refresh_button_set\">\r\n      <img class=\"refrsh_img\" src=\"../../../assets/refresh-icon.png\" alt=\"\">\r\n      <ion-icon color=\"light\" name=\"apps\"></ion-icon>\r\n     </ion-list>\r\n       <h6>Menu</h6>    -->\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-back-button mode=\"md\" default-href=\"/\"></ion-back-button>\r\n    </ion-buttons> -->\r\n    <ion-title>\r\n      Products  \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- header End -->\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col *ngFor=\"let company of products; let i=index;\" (click)=\"product_pre(company,i)\"size-md=\"4\" size=\"12\">\r\n          <div class=\"company_title\" >\r\n            <p>{{this.company.p_name}}</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-company_product-company_module_ts.js.map