"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_menu_menu_module_ts"],{

/***/ 8663:
/*!***************************************************!*\
  !*** ./src/app/pages/menu/menu-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageRoutingModule": () => (/* binding */ MenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page */ 7506);




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_0__.MenuPage
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ 252:
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageModule": () => (/* binding */ MenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 8663);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 7506);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 9991);








let MenuPageModule = class MenuPageModule {
};
MenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage]
    })
], MenuPageModule);



/***/ }),

/***/ 7506:
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.page.html?ngResource */ 3950);
/* harmony import */ var _menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss?ngResource */ 3202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let MenuPage = class MenuPage {
    constructor(router, menuCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.dashbord = [
            { img: '../../../assets/dashboard 1.png', name: 'Add/View MR', path: 'add-mr' },
            { img: '../../../assets/doctor 1.png', name: 'Manage Doctor', path: 'manage-doctor' },
            // {img:'../../../assets/doctor-14093.png',name:'Add Doctor',path:'add-doctor' },
            { img: '../../../assets/city-building.png', name: 'Manage Cities', path: 'manage-city' },
            { img: '../../../assets/schedule 1.png', name: 'Aproval MTP (MR wise)', path: 'aproval-mtp' },
            { img: '../../../assets/clipboard 1.png', name: 'See DCR (MR wise)', path: 'aproval-dcr' },
            // {img:'../../../assets/box 1.png',name:'View MR DCR',path:'product-company'},
            // {img:'../../../assets/logout 1.png',name:'Creat MR Login',path:'login'},
        ];
        this.menuCtrl.enable(true);
    }
    ngAfterViewInit() {
        this.menuCtrl.enable(true);
    }
    ngOnInit() {
        this.menuCtrl.enable(true);
    }
    ngOnDestroy() {
        console.log('Destroy');
        this.menuCtrl.enable(false);
    }
    dash(item) {
        console.log(item.path);
        this.router.navigate([item.path]);
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-menu',
        template: _menu_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuPage);



/***/ }),

/***/ 3202:
/*!******************************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-row {\n  justify-content: center;\n  margin-top: 30px;\n}\nion-row ion-col ion-card {\n  width: 85%;\n  text-align: center;\n  --background: var(--ion-color-secondary);\n  box-shadow: inset 2px 2px 6px 2px rgba(40, 40, 177, 0.19);\n  color: white;\n  border-radius: 17px;\n}\nion-row ion-col img {\n  height: 90px;\n  padding: 8px;\n}\nion-row ion-col p {\n  margin-top: 2px;\n  font-size: 14px;\n}\n.list {\n  width: auto;\n  background: white;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  margin: 10px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n}\n.page-titles {\n  margin-top: 0.125rem;\n}\n.d-flex {\n  display: flex !important;\n}\n.text {\n  text-decoration: none;\n  box-sizing: border-box;\n  font-weight: 600;\n  font-family: \"poppins\", sans-serif;\n}\n.plot {\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n  text-decoration: none;\n}\n.page {\n  color: #828690;\n  text-decoration: none;\n  text-align: -webkit-match-parent;\n  font-size: 1.1875rem;\n}\n.primary {\n  background-color: rgb(234, 237, 248);\n  color: #3b4cb8;\n  border-radius: 0.75rem !important;\n  padding: 0.625rem 1rem;\n  font-size: 0.813rem;\n  border-color: rgb(214, 221, 242);\n}\n.radius {\n  border-radius: 0.75rem !important;\n  border-color: #3b4cb8;\n  background-color: #3b4cb8;\n}\n@media (min-width: 1px) and (max-width: 768px) {\n  .top {\n    margin-top: 35px;\n  }\n}\n@media (min-width: 769px) {\n  .top {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWVkaWNhbCUyMFJlcHJlc2VudGF0aXZlJTIwYXBwXFxhbWluLW1lZGljYWwtcmVwcmVzZW50YXRpdmVcXHNyY1xcYXBwXFxwYWdlc1xcbWVudVxcbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDVTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EseURBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDZDtBRENVO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDZDtBRENVO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNDZDtBRE1BO0VBRUUsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUNKRjtBRE1BO0VBQ0Usb0JBQUE7QUNIRjtBREtBO0VBQ0Usd0JBQUE7QUNGRjtBRElBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUNERjtBREdBO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDQUY7QURFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNDRjtBRENBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNFRjtBREFBO0VBQ0UsaUNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDR0Y7QUREQTtFQUNFO0lBQ0ksZ0JBQUE7RUNJSjtBQUNGO0FERkE7RUFDRTtJQUNJLGdCQUFBO0VDSUo7QUFDRiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3d7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBpb24tY29se1xyXG4gICAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDZweCAycHggcmdiKDQwIDQwIDE3NyAvIDE5JSk7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBoZWFkZXJcclxuLmxpc3R7XHJcbiAgXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbiAgbWFyZ2luOjEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGFnZS10aXRsZXMge1xyXG4gIG1hcmdpbi10b3A6IDAuMTI1cmVtO1xyXG59XHJcbi5kLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxufVxyXG4udGV4dHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBsb3R7XHJcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1tYXRjaC1wYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAxLjE4NzVyZW07ICAgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5wYWdle1xyXG4gIGNvbG9yOiAjODI4NjkwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcclxuICBmb250LXNpemU6IDEuMTg3NXJlbTtcclxufVxyXG4ucHJpbWFyeXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0IDIzNyAyNDgpO1xyXG4gIGNvbG9yOiAjM2I0Y2I4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44MTNyZW07XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjE0IDIyMSAyNDIpO1xyXG59XHJcbi5yYWRpdXN7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzNiNGNiODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I0Y2I4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjFweCkgYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAudG9we1xyXG4gICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgIChtaW4td2lkdGg6NzY5cHgpIHtcclxuICAudG9we1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxufSIsImlvbi1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCB7XG4gIHdpZHRoOiA4NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA2cHggMnB4IHJnYmEoNDAsIDQwLCAxNzcsIDAuMTkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG59XG5pb24tcm93IGlvbi1jb2wgaW1nIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5pb24tcm93IGlvbi1jb2wgcCB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGlzdCB7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwicG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ucGFnZS10aXRsZXMge1xuICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cblxuLnRleHQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBsb3Qge1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcbiAgZm9udC1zaXplOiAxLjE4NzVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnBhZ2Uge1xuICBjb2xvcjogIzgyODY5MDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcbiAgZm9udC1zaXplOiAxLjE4NzVyZW07XG59XG5cbi5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjM3LCAyNDgpO1xuICBjb2xvcjogIzNiNGNiODtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtO1xuICBmb250LXNpemU6IDAuODEzcmVtO1xuICBib3JkZXItY29sb3I6IHJnYigyMTQsIDIyMSwgMjQyKTtcbn1cblxuLnJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjM2I0Y2I4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I0Y2I4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRvcCB7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC50b3Age1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 3950:
/*!******************************************************!*\
  !*** ./src/app/pages/menu/menu.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" class=\"py-3 px-2 shade\">\n   \n    <ion-item lines=\"none\" class=\"search_container ms-auto\">  \n      <ion-input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filter_data\"></ion-input>\n      <ion-icon class=\"search_icon\" slot=\"end\" name=\"search\"></ion-icon>\n    </ion-item>\n\n     \n    <ion-buttons slot=\"end\">\n      <ion-menu-toggle>\n        <ion-icon name=\"menu-outline\"></ion-icon>\n      </ion-menu-toggle>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-row>\n    <ion-col size=\"6\" size-lg=\"2.5\"  *ngFor=\"let item of dashbord | filter : filter_data;\">\n      <ion-card (click)=\"dash(item)\">\n        <img src=\"{{item.img}}\" alt=\"\">\n        <p>{{item.name}}</p>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menu_menu_module_ts.js.map