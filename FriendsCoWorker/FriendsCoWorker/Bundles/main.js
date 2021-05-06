(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Alan\Documentos\Facultad\Tesis\Friend&Co-Worker\Friend-Co-Worker\FriendsCoWorker\Frontend-FriendCoWorker\src\main.ts */"zUnb");


/***/ }),

/***/ "5RfW":
/*!**********************************************!*\
  !*** ./src/app/services/empleado.service.ts ***!
  \**********************************************/
/*! exports provided: EmpleadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadoService", function() { return EmpleadoService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const url = /*'https://localhost:44386/api/cliente/'*/ '';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class EmpleadoService {
    constructor(http) {
        this.http = http;
    }
    onCreateEmpleado(empleado) {
        return this.http.post(url, empleado, httpOptions);
    }
}
EmpleadoService.ɵfac = function EmpleadoService_Factory(t) { return new (t || EmpleadoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
EmpleadoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmpleadoService, factory: EmpleadoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "R8yp":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = "@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Dynalight&family=Seaweed+Script&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  text-decoration: none;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: \"Noto Sans JP\", sans-serif;\r\n}\r\n.contenedor[_ngcontent-%COMP%] {\r\n  padding-left: 0 !important;\r\n  padding-right: 0 !important;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  flex: 1;\r\n  position: fixed;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  \r\n  .contenido[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    height: 100%;\r\n    position: relative;\r\n    float: right;\r\n    background-image: url('banner.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n  .contenido[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .cont-log-reg[_ngcontent-%COMP%] {\r\n    width: 45%;\r\n    height: 100%;\r\n    position: absolute;\r\n  }\r\n\r\n  .contenedor-logo-titulo[_ngcontent-%COMP%] {\r\n    height: 30%;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n    height: 100%;\r\n    background-image: url('logo1.png');\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .titulo[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    height: 100%;\r\n    float: right;\r\n  }\r\n\r\n  .descripcion[_ngcontent-%COMP%] {\r\n    padding-top: 1rem;\r\n    width: 100%;\r\n    height: 40%;\r\n    float: left;\r\n    text-align: center;\r\n    color: #1493cc;\r\n  }\r\n  .descripcion[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 2.3rem;\r\n  }\r\n\r\n  .registro-login[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 25%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-left: 4rem;\r\n    padding-right: 4rem;\r\n    padding-top: 1rem;\r\n  }\r\n  .registro-login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    color: rgb(189, 177, 177);\r\n    font-weight: lighter;\r\n    font-size: small;\r\n  }\r\n\r\n  .formulario[_ngcontent-%COMP%] {\r\n    padding-top: 0px;\r\n    padding-left: 3rem;\r\n    padding-right: 3rem;\r\n  }\r\n\r\n  .link-clip[_ngcontent-%COMP%] {\r\n    bottom: 0;\r\n    right: 0;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .link-clip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #1493cc;\r\n  }\r\n\r\n  .btnIngresar[_ngcontent-%COMP%] {\r\n    padding-bottom: 0.5rem;\r\n    padding-top: 0.5rem;\r\n    background-color: #1493cc !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n  .btnIngresar[_ngcontent-%COMP%]:hover {\r\n    background-color: #17658b !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n\r\n  .btnRegistrar[_ngcontent-%COMP%] {\r\n    padding-bottom: 0.5rem;\r\n    padding-top: 0.5rem;\r\n    background-color: #1493cc !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n  .btnRegistrar[_ngcontent-%COMP%]:hover {\r\n    background-color: #17658b !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n\r\n  .info-adicional[_ngcontent-%COMP%] {\r\n    padding-top: 2rem;\r\n    width: 100%;\r\n    height: 30%;\r\n    text-align: right;\r\n    color: #1493cc;\r\n    font-family: \"Dynalight\", cursive;\r\n    font-size: 3rem;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .contenido[_ngcontent-%COMP%] {\r\n    width: 55%;\r\n    height: 100%;\r\n    position: relative;\r\n    float: right;\r\n    background-image: url('banner.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n\r\n  .cont-log-reg[_ngcontent-%COMP%] {\r\n    width: 45%;\r\n    height: 100%;\r\n    position: absolute;\r\n  }\r\n\r\n  .contenedor-logo-titulo[_ngcontent-%COMP%] {\r\n    height: 30%;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    width: 48%;\r\n    height: 100%;\r\n    background-image: url('logo1.png');\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .titulo[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    height: 100%;\r\n    float: right;\r\n  }\r\n\r\n  .descripcion[_ngcontent-%COMP%] {\r\n    padding-top: 1rem;\r\n    width: 100%;\r\n    height: 40%;\r\n    float: left;\r\n    text-align: center;\r\n    color: #1493cc;\r\n  }\r\n  .descripcion[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .registro-login[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 25%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 1rem;\r\n  }\r\n  .registro-login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    color: rgb(189, 177, 177);\r\n    font-weight: lighter;\r\n  }\r\n\r\n  .formulario[_ngcontent-%COMP%] {\r\n    padding-top: 0px;\r\n    padding-left: 3rem;\r\n    padding-right: 3rem;\r\n  }\r\n\r\n  .link-clip[_ngcontent-%COMP%] {\r\n    bottom: 0;\r\n    right: 0;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .link-clip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #1493cc;\r\n  }\r\n\r\n  .btnIngresar[_ngcontent-%COMP%] {\r\n    padding-bottom: 0.5rem;\r\n    padding-top: 0.5rem;\r\n    background-color: #1493cc !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n  .btnIngresar[_ngcontent-%COMP%]:hover {\r\n    background-color: #17658b !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n\r\n  .btnRegistrar[_ngcontent-%COMP%] {\r\n    padding-bottom: 0.5rem;\r\n    padding-top: 0.5rem;\r\n    background-color: #1493cc !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n  .btnRegistrar[_ngcontent-%COMP%]:hover {\r\n    background-color: #17658b !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n\r\n  .info-adicional[_ngcontent-%COMP%] {\r\n    padding-top: 2rem;\r\n    width: 100%;\r\n    height: 20%;\r\n    text-align: right;\r\n    color: #1493cc;\r\n    font-family: \"Dynalight\", cursive;\r\n    font-size: 2.5rem;\r\n  }\r\n}\r\n\r\n@media (min-width: 575px) and (max-width: 768px) {\r\n  .contenido[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    height: 30%;\r\n    position: relative;\r\n    float: right;\r\n    background-image: url('banner.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: none;\r\n  }\r\n\r\n  .cont-log-reg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n  }\r\n\r\n  .contenedor-logo-titulo[_ngcontent-%COMP%] {\r\n    height: 30%;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    width: 48%;\r\n    height: 10.2rem;\r\n    background-image: url('logo1.png');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    padding-top: 2rem;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .titulo[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    height: 100%;\r\n    float: right;\r\n    display: none;\r\n  }\r\n\r\n  .descripcion[_ngcontent-%COMP%] {\r\n    padding-top: 1rem;\r\n    width: 100%;\r\n    height: 40%;\r\n    float: left;\r\n    text-align: center;\r\n    color: #1493cc;\r\n  }\r\n  .descripcion[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .registro-login[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 30%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    padding-top: 1rem;\r\n  }\r\n  .registro-login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    color: rgb(189, 177, 177);\r\n    font-weight: lighter;\r\n  }\r\n\r\n  .formulario[_ngcontent-%COMP%] {\r\n    padding-top: 0px;\r\n    padding-left: 3rem;\r\n    padding-right: 3rem;\r\n  }\r\n\r\n  .link-clip[_ngcontent-%COMP%] {\r\n    bottom: 0;\r\n    right: 0;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .link-clip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #1493cc;\r\n  }\r\n\r\n  .btnIngresar[_ngcontent-%COMP%] {\r\n    padding-bottom: 0.5rem;\r\n    padding-top: 0.5rem;\r\n    background-color: #1493cc !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n  .btnIngresar[_ngcontent-%COMP%]:hover {\r\n    background-color: #17658b !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n\r\n  .btnRegistrar[_ngcontent-%COMP%] {\r\n    padding-bottom: 0.5rem;\r\n    padding-top: 0.5rem;\r\n    background-color: #1493cc !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n  .btnRegistrar[_ngcontent-%COMP%]:hover {\r\n    background-color: #17658b !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n\r\n  .info-adicional[_ngcontent-%COMP%] {\r\n    padding-top: 2rem;\r\n    width: 100%;\r\n    height: 20%;\r\n    text-align: center;\r\n    color: #1493cc;\r\n    font-family: \"Dynalight\", cursive;\r\n    font-size: 3rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .contenedor[_ngcontent-%COMP%] {\r\n    padding-left: 0 !important;\r\n    padding-right: 0 !important;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n  }\r\n  .contenido[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    height: 30%;\r\n    position: relative;\r\n    float: right;\r\n    background-image: url('banner.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: none;\r\n  }\r\n\r\n  .cont-log-reg[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 20%;\r\n    position: absolute;\r\n  }\r\n\r\n  .contenedor-logo-titulo[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    text-align: center;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 21.2rem;\r\n    margin-bottom: 50px;\r\n    background-image: url('logo1.png');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    padding-top: 2rem;\r\n    display: relative;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .titulo[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n    height: 100%;\r\n    float: right;\r\n    display: none;\r\n  }\r\n\r\n  .descripcion[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-top: 1rem;\r\n    width: 100%;\r\n    height: 70%;\r\n    float: left;\r\n    text-align: center;\r\n    color: #1493cc;\r\n    margin-top: 8.5rem;\r\n  }\r\n  .descripcion[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 1.6rem;\r\n    margin-top: 40px;\r\n  }\r\n\r\n  .registro-login[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n  }\r\n  .registro-login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    color: rgb(189, 177, 177);\r\n    font-weight: lighter;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .formulario[_ngcontent-%COMP%] {\r\n    padding-top: 0px;\r\n    padding-left: 3rem;\r\n    padding-right: 3rem;\r\n  }\r\n\r\n  .link-clip[_ngcontent-%COMP%] {\r\n    height: 50%;\r\n    position: relative;\r\n    bottom: 0;\r\n    right: 0;\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .link-clip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #1493cc;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .btnIngresar[_ngcontent-%COMP%] {\r\n    padding-bottom: 0.5rem;\r\n    padding-top: 0.5rem;\r\n    background-color: #1493cc !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n  .btnIngresar[_ngcontent-%COMP%]:hover {\r\n    background-color: #17658b !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n\r\n  .btnRegistrar[_ngcontent-%COMP%] {\r\n    padding-bottom: 0.5rem;\r\n    padding-top: 0.5rem;\r\n    background-color: #1493cc !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n  .btnRegistrar[_ngcontent-%COMP%]:hover {\r\n    background-color: #17658b !important;\r\n    border: 1px solid #ffffff;\r\n  }\r\n\r\n  .info-adicional[_ngcontent-%COMP%] {\r\n    margin-top: 2rem;\r\n    width: 100%;\r\n    height: 20%;\r\n    text-align: center;\r\n    color: #1493cc;\r\n    font-family: \"Dynalight\", cursive;\r\n    font-size: 2.5rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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bGUiOiJpbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytKUCZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EeW5hbGlnaHQmZmFtaWx5PVNlYXdlZWQrU2NyaXB0JmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbnRlbmVkb3Ige1xyXG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4vKnJlc29sdWNpb24gcGFudGFsbGFzIGdyYW5kZXMqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAvKkNPTlRFTkVET1JFUyBERUwgQ09OVEVOSURPIFkgREVMIExPR0lOIFkgUkVHSVNUUk8qL1xyXG4gIC5jb250ZW5pZG8ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAuY29udGVuaWRvIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250LWxvZy1yZWcge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gIC5jb250ZW5lZG9yLWxvZ28tdGl0dWxvIHtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nbzEucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC50aXR1bG8ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwY2lvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMTQ5M2NjO1xyXG4gIH1cclxuICAuZGVzY3JpcGNpb24gaDMge1xyXG4gICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgfVxyXG5cclxuICAucmVnaXN0cm8tbG9naW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICB9XHJcbiAgLnJlZ2lzdHJvLWxvZ2luIGxhYmVsIHtcclxuICAgIGNvbG9yOiByZ2IoMTg5LCAxNzcsIDE3Nyk7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgfVxyXG5cclxuICAuZm9ybXVsYXJpbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcclxuICB9XHJcblxyXG4gIC5saW5rLWNsaXAge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmxpbmstY2xpcCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTQ5M2NjO1xyXG4gIH1cclxuXHJcbiAgLmJ0bkluZ3Jlc2FyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0OTNjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICB9XHJcbiAgLmJ0bkluZ3Jlc2FyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzY1OGIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAuYnRuUmVnaXN0cmFyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0OTNjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICB9XHJcbiAgLmJ0blJlZ2lzdHJhcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc2NThiICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tYWRpY2lvbmFsIHtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICMxNDkzY2M7XHJcbiAgICBmb250LWZhbWlseTogXCJEeW5hbGlnaHRcIiwgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbn1cclxuLypSRVNPTFVDSU9OIE5PVEVCT09LUyovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmNvbnRlbmlkbyB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udC1sb2ctcmVnIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG5cclxuICAuY29udGVuZWRvci1sb2dvLXRpdHVsbyB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28xLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAudGl0dWxvIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcGNpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzE0OTNjYztcclxuICB9XHJcbiAgLmRlc2NyaXBjaW9uIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Ryby1sb2dpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIH1cclxuICAucmVnaXN0cm8tbG9naW4gbGFiZWwge1xyXG4gICAgY29sb3I6IHJnYigxODksIDE3NywgMTc3KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm11bGFyaW8ge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbiAgfVxyXG5cclxuICAubGluay1jbGlwIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5saW5rLWNsaXAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzE0OTNjYztcclxuICB9XHJcblxyXG4gIC5idG5JbmdyZXNhciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDkzY2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5idG5JbmdyZXNhcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc2NThiICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLmJ0blJlZ2lzdHJhciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDkzY2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5idG5SZWdpc3RyYXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3NjU4YiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5pbmZvLWFkaWNpb25hbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjMTQ5M2NjO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRHluYWxpZ2h0XCIsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qcmVzb2x1Y2lvbiBwYXJhIFRBQkxFVFMqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250ZW5pZG8ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNvbnQtbG9nLXJlZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gIC5jb250ZW5lZG9yLWxvZ28tdGl0dWxvIHtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIGhlaWdodDogMTAuMnJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nbzEucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsbyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwY2lvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMTQ5M2NjO1xyXG4gIH1cclxuICAuZGVzY3JpcGNpb24gaDMge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLnJlZ2lzdHJvLWxvZ2luIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgfVxyXG4gIC5yZWdpc3Ryby1sb2dpbiBsYWJlbCB7XHJcbiAgICBjb2xvcjogcmdiKDE4OSwgMTc3LCAxNzcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9ybXVsYXJpbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcclxuICB9XHJcblxyXG4gIC5saW5rLWNsaXAge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmxpbmstY2xpcCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTQ5M2NjO1xyXG4gIH1cclxuXHJcbiAgLmJ0bkluZ3Jlc2FyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0OTNjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICB9XHJcbiAgLmJ0bkluZ3Jlc2FyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzY1OGIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAuYnRuUmVnaXN0cmFyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0OTNjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICB9XHJcbiAgLmJ0blJlZ2lzdHJhcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc2NThiICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tYWRpY2lvbmFsIHtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMTQ5M2NjO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRHluYWxpZ2h0XCIsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKnJlc29sdWNpb24gcGFyYSBtb3ZpbCovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5jb250ZW5lZG9yIHtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29udGVuaWRvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jb250LWxvZy1yZWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gIC5jb250ZW5lZG9yLWxvZ28tdGl0dWxvIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMS4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nbzEucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgZGlzcGxheTogcmVsYXRpdmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnRpdHVsbyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwY2lvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMTQ5M2NjO1xyXG4gICAgbWFyZ2luLXRvcDogOC41cmVtO1xyXG4gIH1cclxuICAuZGVzY3JpcGNpb24gaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlZ2lzdHJvLWxvZ2luIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07ICovXHJcbiAgfVxyXG4gIC5yZWdpc3Ryby1sb2dpbiBsYWJlbCB7XHJcbiAgICBjb2xvcjogcmdiKDE4OSwgMTc3LCAxNzcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuZm9ybXVsYXJpbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcclxuICB9XHJcblxyXG4gIC5saW5rLWNsaXAge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG5cclxuICAubGluay1jbGlwIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMxNDkzY2M7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcblxyXG4gIC5idG5JbmdyZXNhciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDkzY2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5idG5JbmdyZXNhcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc2NThiICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgLmJ0blJlZ2lzdHJhciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDkzY2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5idG5SZWdpc3RyYXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3NjU4YiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5pbmZvLWFkaWNpb25hbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMTQ5M2NjO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRHluYWxpZ2h0XCIsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */";
class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 35, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], [1, "contenedor"], [1, "cont-log-reg"], [1, "contenedor-logo-titulo"], [1, "logo", "mt-3"], [1, "row"], [1, "descripcion", "col-12"], [1, "link-clip", "col-12"], [1, "registro-login", "col-sm-12"], [1, "col-sm-12", "text-center"], ["action", "", 1, "formulario", "col-12"], [1, "form-group"], ["for", "", 1, "label", "label-default"], ["routerLink", "login", 1, "btnIngresar", "btn", "btn-success", "btn-block"], ["routerLink", "empleado", 1, "btnRegistrar", "btn", "btn-success", "btn-block"], [1, "info-adicional"], [1, "contenido", "container-fluid"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bienvenidos a su espacio de trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00BFYa sos Usuario?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ingresar Ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Si todavia no sos Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Registrarse Ahora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lugar para compartir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [_c0, _c0] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 0, consts: [[1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "fadeIn", "first"], ["src", "../../../assets/images/logo1.png", "id", "icon", "alt", "User Icon"], [1, "form-group"], ["type", "text", "id", "login", "formControlName", "inputUsuario", "placeholder", "Usuario", 1, "fadeIn", "second", "form-control"], [1, "invalid-feedback"], ["type", "password", "id", "password", "placeholder", "Password", "formControlName", "inputPassword", 1, "fadeIn", "third"], ["type", "submit", "id", "btnIngresar", "value", "INGRESAR", 1, "fadeIn", "fourth"], ["id", "formFooter"], [1, "row"], [1, "col"], [1, "underlineHover"], ["routerLink", "/empleado", 1, "underlineHover"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Introduzca un Usuario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Introduzca un Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Olvide mi contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Crear una cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap\");\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  background-color: #56baed;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  \r\n  font-family: \"Noto Sans JP\", sans-serif;\r\n  height: 100vh;\r\n  \r\n  background: #2980b9;  \r\n  background: linear-gradient(\r\n    to right,\r\n    #ffffff,\r\n    #6dd5fa,\r\n    #2980b9\r\n  ); \r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: #92badd;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  padding: 20px;\r\n}\r\n#formContent[_ngcontent-%COMP%] {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\r\n  text-align: center;\r\n}\r\n#formFooter[_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\nh2.inactive[_ngcontent-%COMP%] {\r\n  color: #cccccc;\r\n}\r\nh2.active[_ngcontent-%COMP%] {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\ninput[type=\"button\"][_ngcontent-%COMP%], input[type=\"submit\"][_ngcontent-%COMP%], input[type=\"reset\"][_ngcontent-%COMP%] {\r\n  background-color: #1493cc;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\ninput[type=\"button\"][_ngcontent-%COMP%]:hover, input[type=\"submit\"][_ngcontent-%COMP%]:hover, input[type=\"reset\"][_ngcontent-%COMP%]:hover {\r\n  background-color: #1493cc;\r\n}\r\ninput[type=\"button\"][_ngcontent-%COMP%]:active, input[type=\"submit\"][_ngcontent-%COMP%]:active, input[type=\"reset\"][_ngcontent-%COMP%]:active {\r\n  transform: scale(0.95);\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #1493cc;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:placeholder {\r\n  color: #cccccc;\r\n}\r\ninput[type=\"password\"][_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\ninput[type=\"password\"][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #1493cc;\r\n}\r\ninput[type=\"password\"][_ngcontent-%COMP%]:placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\n\r\n.fadeInDown[_ngcontent-%COMP%] {\r\n  animation-name: fadeInDown;\r\n  animation-duration: 1s;\r\n  animation-fill-mode: both;\r\n}\r\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n.fadeIn[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  animation: fadeIn ease-in 1;\r\n  animation-fill-mode: forwards;\r\n  animation-duration: 1s;\r\n}\r\n.fadeIn.first[_ngcontent-%COMP%] {\r\n  animation-delay: 0.4s;\r\n}\r\n.fadeIn.second[_ngcontent-%COMP%] {\r\n  animation-delay: 0.6s;\r\n}\r\n.fadeIn.third[_ngcontent-%COMP%] {\r\n  animation-delay: 0.8s;\r\n}\r\n.fadeIn.fourth[_ngcontent-%COMP%] {\r\n  animation-delay: 1s;\r\n}\r\n\r\n.underlineHover[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #17658b;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\r\n.underlineHover[_ngcontent-%COMP%]:hover {\r\n  color: #0d0d0d;\r\n}\r\n.underlineHover[_ngcontent-%COMP%]:hover:after {\r\n  width: 100%;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  color: #60a0ff;\r\n}\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n#icon[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n#btnIngresar[_ngcontent-%COMP%]:hover {\r\n  background-color: #17658b;\r\n  color: white;\r\n  font-size: 13px;\r\n}\r\n#btnIngresar[_ngcontent-%COMP%]:disabled {\r\n  background-color: #a19e9c;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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O0FBQ2xDO0VBQ0UsY0FBYztFQUNkLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUEsV0FBVztBQUVYO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0pQJmRpc3BsYXk9c3dhcFwiKTtcclxuLyogQkFTSUMgKi9cclxuXHJcbmh0bWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIC8qIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnMgSlBcIiwgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI0VCNTYwMDsqL1xyXG4gIGJhY2tncm91bmQ6ICMyOTgwYjk7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0LFxyXG4gICAgI2ZmZmZmZixcclxuICAgICM2ZGQ1ZmEsXHJcbiAgICAjMjk4MGI5XHJcbiAgKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCxcclxuICAgICNmZmZmZmYsXHJcbiAgICAjNmRkNWZhLFxyXG4gICAgIzI5ODBiOVxyXG4gICk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbi8qIFNUUlVDVFVSRSAqL1xyXG5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI2Zvcm1Db250ZW50IHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNmb3JtRm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG59XHJcblxyXG4vKiBUQUJTICovXHJcblxyXG5oMi5pbmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbmgyLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcbi8qIEZPUk0gVFlQT0dSQVBIWSovXHJcblxyXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDkzY2M7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsIDE4NiwgMjMzLCAwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwgMTg2LCAyMzMsIDAuNCk7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXIsXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0OTNjYztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImJ1dHRvblwiXTphY3RpdmUsXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06YWN0aXZlLFxyXG5pbnB1dFt0eXBlPVwicmVzZXRcIl06YWN0aXZlIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE0OTNjYztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl06cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxNDkzY2M7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbi8qIEFOSU1BVElPTlMgKi9cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuLmZhZGVJbkRvd24ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XHJcbiAgLW1vei1hbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxufVxyXG5cclxuLmZhZGVJbi5maXJzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4uZmFkZUluLnNlY29uZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcblxyXG4uZmFkZUluLnRoaXJkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZm91cnRoIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzY1OGI7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICM2MGEwZmY7XHJcbn1cclxuXHJcbi8qIE9USEVSUyAqL1xyXG5cclxuKjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2ljb24ge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbiNidG5JbmdyZXNhcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3NjU4YjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4jYnRuSW5ncmVzYXI6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMTllOWM7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/index/index.component */ "R8yp");
/* harmony import */ var _components_empleado_empleado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/empleado/empleado.component */ "fn9Z");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
        _components_empleado_empleado_component__WEBPACK_IMPORTED_MODULE_5__["EmpleadoComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "fn9Z":
/*!***********************************************************!*\
  !*** ./src/app/components/empleado/empleado.component.ts ***!
  \***********************************************************/
/*! exports provided: EmpleadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadoComponent", function() { return EmpleadoComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_Models_empleado_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Models/empleado.model */ "yCs/");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/empleado.service */ "5RfW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function EmpleadoComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Introduzca un Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Debe contener al menos 2 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Introduzca un Apellido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Debe contener al menos 2 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Seleccione el sexo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Introduzca una Fecha de Nacimiento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipodni_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", tipodni_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tipodni_r24.nombre_dni);
} }
function EmpleadoComponent_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Seleccione un tipo de dni ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Introduzca un DNI ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Debe contener al menos 7 caracteres Numericos, sin espacios en blanco ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Introduzca un Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ingresa un formato correcto, ejemplo@ejemplo.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Introduzca un Telefono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ingrese los 10 digitos numericos sin el prefijo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Introduzca un Domicilio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ingresa solo caracters alfanumericos, longitud maxima 50 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Introduzca un Usuario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Debe contener al menos 5 caracteres Alfanumericos, sin espacios en blanco ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Introduzca un password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Debe contener al menos 8 caracteres alfanumericos y una mayuscula, sin espacios en blanco ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Introduzca un password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_span_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Debe contener al menos 8 caracteres alfanumericos y una mayuscula, sin espacios en blanco ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EmpleadoComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpleadoComponent_div_97_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.resetAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r22.message, " ");
} }
function EmpleadoComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpleadoComponent_div_98_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.resetAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r23.message, " ");
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class EmpleadoComponent {
    constructor(fb, router, empleadoService) {
        this.fb = fb;
        this.router = router;
        this.empleadoService = empleadoService;
        //Modelo validacion campos
        this.patterSoloLetras = /^[a-zA-Z ]*$/;
        this.patternUsuario = /^(?=.*[a-zA-Z]{1,})(?=.*[\d]{0,})[a-zA-Z0-9]{5,}$/;
        this.emailpattern = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        this.patternPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,16}$/;
        this.patternSoloNum = /^[0-9]{7,}$/;
        this.patternTelefono = /^[0-9]{10,10}$/;
        this.patternDomicilio = /^[A-Za-z0-9\s]{5,50}$/;
        this.form = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.patterSoloLetras)]],
            apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.patterSoloLetras)]],
            sexo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            idTipoDocumento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            numDni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.patternSoloNum)]],
            fotoPerfil: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            fechaNacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            localidad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            domicilio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.patternDomicilio)]],
            elefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.patternTelefono)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.emailpattern)]],
            idTipoEmpleado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            usuario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.patternUsuario)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.patternPassword), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
            passwordRepeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.patternPassword), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]]
        });
        this.selectedEmpleado = new src_app_Models_empleado_model__WEBPACK_IMPORTED_MODULE_1__["Empleado"]();
        this.message = '';
        this.isCreateFailed = false;
        this.passwordsDistintas = false;
    }
    ngOnInit() {
    }
    regresarclick() {
        this.router.navigate(['/login']);
    }
    //Metodo al enviar el fomulario
    onSubmit(empleado) {
        if (this.form.get('password').value === this.form.get('passwordRepeat').value) {
            this.passwordsDistintas = false;
            //Nos suscribimos al servicio y traemos el metodo del backend
            this.empleadoService.onCreateEmpleado(empleado).subscribe(data => {
                //this.tokenStorage.saveToken(data);
                if (data === 1) {
                    this.message = 'El Dni ingresado ya existe';
                    this.isCreateFailed = true;
                }
                else if (data === 2) {
                    this.message = 'El Email ingresado ya existe';
                    this.isCreateFailed = true;
                }
                else if (data === 3) {
                    this.message = 'El Usuario ingresado ya existe';
                    this.isCreateFailed = true;
                }
                else if (data === 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Enhorabuena', 'Empleado registrado exitosamente', 'success');
                    this.isCreateFailed = false;
                    //this.clientes.push(data);
                    this.router.navigate(['/login']);
                }
            });
        }
        else {
            this.passwordsDistintas = true;
            this.message = "Las constraseñas no coinciden";
        }
    }
}
EmpleadoComponent.ɵfac = function EmpleadoComponent_Factory(t) { return new (t || EmpleadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_empleado_service__WEBPACK_IMPORTED_MODULE_5__["EmpleadoService"])); };
EmpleadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EmpleadoComponent, selectors: [["app-empleado"]], decls: 103, vars: 73, consts: [[1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "fadeIn", "first"], ["src", "../../../assets/images/logo1.png", "id", "icon", "alt", "User Icon"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xs-12", "col-sm-6", "col-md-3", "col-lg-3", "borde"], [1, "form-group"], ["for", "nombre", 1, "form-control"], ["type", "text", "id", "nombre", "formControlName", "nombre", 1, "form-control", "fadeIn", 3, "ngModel", "ngClass", "ngModelChange"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "apellido", 1, "form-control"], ["type", "text", "formControlName", "apellido", 1, "form-control", "fadeIn", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "sexo", 1, "form-control"], ["formControlName", "sexo", 1, "form-control", "fadeIn", 3, "ngModel", "ngClass", "ngModelChange"], ["value", "Masculino"], ["value", "Femenino"], ["for", "fechaNac", 1, "form-control"], ["type", "date", "title", "Fecha de Nacimiento", "formControlName", "fechaNac", 1, "form-control", "fadeIn", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "tipodni", 1, "form-control"], ["formControlName", "tipodni", 1, "form-control", "fadeIn", 3, "ngModel", "ngClass", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "numDni", 1, "form-control"], ["type", "text", "formControlName", "numDni", 1, "form-control", "fadeIn", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "email", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control", "fadeIn", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "telefono", 1, "form-control"], ["type", "text", "formControlName", "telefono", 1, "form-control", "fadeIn", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "domicilio", 1, "form-control"], ["type", "text", "formControlName", "domicilio", 1, "form-control", "fadeIn", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "usuario", 1, "form-control"], ["type", "text", "formControlName", "usuario", 1, "form-control", "fadeIn", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "password", 1, "form-control"], ["type", "password", "formControlName", "password", 1, "form-control", "fadeIn", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "passwordRepeat", 1, "form-control"], ["type", "password", "formControlName", "passwordRepeat", 1, "form-control", "fadeIn", 3, "ngClass"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "col-md-12"], [1, "btn", "btn-primary", "btnRegistrarse", 3, "disabled"], ["id", "btnRegresar", "title", "Regresar", 1, "btn", "btn-primary", 3, "click"], [3, "value"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function EmpleadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EmpleadoComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(ctx.selectedEmpleado); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpleadoComponent_Template_input_ngModelChange_11_listener($event) { return ctx.selectedEmpleado.Nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EmpleadoComponent_span_13_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, EmpleadoComponent_span_14_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpleadoComponent_Template_input_ngModelChange_18_listener($event) { return ctx.selectedEmpleado.Apellido = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, EmpleadoComponent_span_20_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, EmpleadoComponent_span_21_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Sexo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpleadoComponent_Template_select_ngModelChange_25_listener($event) { return ctx.selectedEmpleado.Sexo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Masculino");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Femenino");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, EmpleadoComponent_span_31_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Fecha de Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpleadoComponent_Template_input_ngModelChange_35_listener($event) { return ctx.selectedEmpleado.FechaNacimiento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, EmpleadoComponent_span_37_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Tipo Dni");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpleadoComponent_Template_select_ngModelChange_42_listener($event) { return ctx.selectedEmpleado.IdTipoDocumento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, EmpleadoComponent_option_43_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, EmpleadoComponent_span_45_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Dni");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpleadoComponent_Template_input_ngModelChange_49_listener($event) { return ctx.selectedEmpleado.NumDni = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, EmpleadoComponent_span_51_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, EmpleadoComponent_span_52_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpleadoComponent_Template_input_ngModelChange_56_listener($event) { return ctx.selectedEmpleado.Email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, EmpleadoComponent_span_58_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, EmpleadoComponent_span_59_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpleadoComponent_Template_input_ngModelChange_63_listener($event) { return ctx.selectedEmpleado.Telefono = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, EmpleadoComponent_span_65_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, EmpleadoComponent_span_66_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Domicilio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpleadoComponent_Template_input_ngModelChange_71_listener($event) { return ctx.selectedEmpleado.Domicilio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, EmpleadoComponent_span_73_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, EmpleadoComponent_span_74_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Nombre Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpleadoComponent_Template_input_ngModelChange_79_listener($event) { return ctx.selectedEmpleado.NombreUsuario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, EmpleadoComponent_span_81_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, EmpleadoComponent_span_82_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EmpleadoComponent_Template_input_ngModelChange_86_listener($event) { return ctx.selectedEmpleado.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](88, EmpleadoComponent_span_88_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, EmpleadoComponent_span_89_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Repetir Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, EmpleadoComponent_span_95_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, EmpleadoComponent_span_96_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](97, EmpleadoComponent_div_97_Template, 5, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](98, EmpleadoComponent_div_98_Template, 5, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmpleadoComponent_Template_button_click_102_listener() { return ctx.regresarclick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_6_0 = null;
        let tmp_10_0 = null;
        let tmp_13_0 = null;
        let tmp_16_0 = null;
        let tmp_20_0 = null;
        let tmp_24_0 = null;
        let tmp_28_0 = null;
        let tmp_32_0 = null;
        let tmp_36_0 = null;
        let tmp_40_0 = null;
        let tmp_43_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedEmpleado.Nombre)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](49, _c0, (((tmp_2_0 = ctx.form.get("nombre")) == null ? null : tmp_2_0.touched) || ((tmp_2_0 = ctx.form.get("nombre")) == null ? null : tmp_2_0.dirty)) && !((tmp_2_0 = ctx.form.get("nombre")) == null ? null : tmp_2_0.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("nombre").errors == null ? null : ctx.form.get("nombre").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("nombre").errors == null ? null : ctx.form.get("nombre").errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedEmpleado.Apellido)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](51, _c0, (((tmp_6_0 = ctx.form.get("apellido")) == null ? null : tmp_6_0.touched) || ((tmp_6_0 = ctx.form.get("apellido")) == null ? null : tmp_6_0.dirty)) && !((tmp_6_0 = ctx.form.get("apellido")) == null ? null : tmp_6_0.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("apellido").errors == null ? null : ctx.form.get("apellido").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("apellido").errors == null ? null : ctx.form.get("apellido").errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedEmpleado.Sexo)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](53, _c0, (((tmp_10_0 = ctx.form.get("sexo")) == null ? null : tmp_10_0.touched) || ((tmp_10_0 = ctx.form.get("sexo")) == null ? null : tmp_10_0.dirty)) && !((tmp_10_0 = ctx.form.get("sexo")) == null ? null : tmp_10_0.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("sexo").errors == null ? null : ctx.form.get("sexo").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedEmpleado.FechaNacimiento)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](55, _c0, ((tmp_13_0 = ctx.form.get("fechaNac")) == null ? null : tmp_13_0.touched) && !((tmp_13_0 = ctx.form.get("fechaNac")) == null ? null : tmp_13_0.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("fechaNac").errors == null ? null : ctx.form.get("fechaNac").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedEmpleado.IdTipoDocumento)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](57, _c0, (((tmp_16_0 = ctx.form.get("tipodni")) == null ? null : tmp_16_0.touched) || ((tmp_16_0 = ctx.form.get("tipodni")) == null ? null : tmp_16_0.dirty)) && !((tmp_16_0 = ctx.form.get("tipodni")) == null ? null : tmp_16_0.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tipoDni);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("tipodni").errors == null ? null : ctx.form.get("tipodni").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedEmpleado.NumDni)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](59, _c0, (((tmp_20_0 = ctx.form.get("numDni")) == null ? null : tmp_20_0.touched) || ((tmp_20_0 = ctx.form.get("numDni")) == null ? null : tmp_20_0.dirty)) && !((tmp_20_0 = ctx.form.get("numDni")) == null ? null : tmp_20_0.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("numDni").errors == null ? null : ctx.form.get("numDni").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("numDni").errors == null ? null : ctx.form.get("numDni").errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedEmpleado.Email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](61, _c0, (((tmp_24_0 = ctx.form.get("email")) == null ? null : tmp_24_0.touched) || ((tmp_24_0 = ctx.form.get("email")) == null ? null : tmp_24_0.dirty)) && !((tmp_24_0 = ctx.form.get("email")) == null ? null : tmp_24_0.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("email").errors == null ? null : ctx.form.get("email").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("email").errors == null ? null : ctx.form.get("email").errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedEmpleado.Telefono)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](63, _c0, (((tmp_28_0 = ctx.form.get("telefono")) == null ? null : tmp_28_0.touched) || ((tmp_28_0 = ctx.form.get("telefono")) == null ? null : tmp_28_0.dirty)) && !((tmp_28_0 = ctx.form.get("telefono")) == null ? null : tmp_28_0.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("telefono").errors == null ? null : ctx.form.get("telefono").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("telefono").errors == null ? null : ctx.form.get("telefono").errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedEmpleado.Domicilio)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](65, _c0, (((tmp_32_0 = ctx.form.get("domicilio")) == null ? null : tmp_32_0.touched) || ((tmp_32_0 = ctx.form.get("domicilio")) == null ? null : tmp_32_0.dirty)) && !((tmp_32_0 = ctx.form.get("domicilio")) == null ? null : tmp_32_0.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("domicilio").errors == null ? null : ctx.form.get("domicilio").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("domicilio").errors == null ? null : ctx.form.get("domicilio").errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedEmpleado.NombreUsuario)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](67, _c0, (((tmp_36_0 = ctx.form.get("usuario")) == null ? null : tmp_36_0.touched) || ((tmp_36_0 = ctx.form.get("usuario")) == null ? null : tmp_36_0.dirty)) && !((tmp_36_0 = ctx.form.get("usuario")) == null ? null : tmp_36_0.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("usuario").errors == null ? null : ctx.form.get("usuario").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("usuario").errors == null ? null : ctx.form.get("usuario").errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedEmpleado.Password)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](69, _c0, (((tmp_40_0 = ctx.form.get("password")) == null ? null : tmp_40_0.touched) || ((tmp_40_0 = ctx.form.get("password")) == null ? null : tmp_40_0.dirty)) && !((tmp_40_0 = ctx.form.get("password")) == null ? null : tmp_40_0.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("password").errors == null ? null : ctx.form.get("password").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("password").errors == null ? null : ctx.form.get("password").errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](71, _c0, (((tmp_43_0 = ctx.form.get("passwordRepeat")) == null ? null : tmp_43_0.touched) || ((tmp_43_0 = ctx.form.get("passwordRepeat")) == null ? null : tmp_43_0.dirty)) && !((tmp_43_0 = ctx.form.get("passwordRepeat")) == null ? null : tmp_43_0.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("passwordRepeat").errors == null ? null : ctx.form.get("passwordRepeat").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.get("passwordRepeat").errors == null ? null : ctx.form.get("passwordRepeat").errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCreateFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.passwordsDistintas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');\r\n\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n    background-color: #56baed;\r\n  }\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    \r\n    font-family:  'Noto Sans JP', sans-serif;\r\n    height: 100vh;\r\n\r\n    \r\n    background: #2980b9;  \r\n    background: linear-gradient(\r\n      to right,\r\n      #ffffff,\r\n      #6dd5fa,\r\n      #2980b9\r\n    ); \r\n  }\r\n\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px;\r\n    color: #cccccc;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 10px;\r\n  }\r\n\r\n\r\n#formContent[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: auto;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n\r\n\r\nform[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n  }\r\n\r\n\r\n.fadeInDown[_ngcontent-%COMP%] {\r\n    animation-name: fadeInDown;\r\n    animation-duration: 1s;\r\n    animation-fill-mode: both;\r\n  }\r\n\r\n\r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n\r\n.fadeIn[_ngcontent-%COMP%] {\r\n    opacity:0;\r\n    animation:fadeIn ease-in 1;\r\n    animation-fill-mode:forwards;\r\n    animation-duration:1s;\r\n  }\r\n\r\n\r\n.fadeIn.first[_ngcontent-%COMP%] {\r\n    animation-delay: 0.4s;\r\n  }\r\n\r\n\r\n#icon[_ngcontent-%COMP%] {\r\n    width:20rem;\r\n\r\n  }\r\n\r\n\r\n.btnRegistrarse[_ngcontent-%COMP%]{\r\n    padding-bottom: 0.5rem ;\r\n    padding-top: 0.5rem ;\r\n    background-color:#EB5600 !important;\r\n    border: 1px solid #ffffff;\r\n    float: inherit;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 20px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n\r\n}\r\n\r\n\r\n.btnRegistrarse[_ngcontent-%COMP%]:hover{\r\n  background-color:#b64707!important;\r\n  \r\n}\r\n\r\n\r\n#btnRegresar[_ngcontent-%COMP%]{\r\n  background-image: url('regresar1.png') !important;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  width: 3rem;\r\n  height: 3rem;\r\n  float: inherit;\r\n  background-color:white !important;\r\n  border: 1px solid #ffffff;\r\n  padding-bottom: 0.5rem ;\r\n  \r\n  box-shadow: none;\r\n\r\n}\r\n\r\n\r\n#btnRegresar[_ngcontent-%COMP%]:hover{\r\n  background-color:white !important;\r\n  border: 1px solid #ffffff;\r\n  background-image: url('regresar2.png') !important;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\ninput[type=text][_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  color: #0d0d0d;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  box-shadow: none;\r\n  font-size: 16px;\r\n  border: 0.1px solid #cfc7c7;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n  outline: none !important;\r\n}\r\n\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #EB5600;\r\n}\r\n\r\n\r\ninput[type=email][_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  color: #0d0d0d;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  box-shadow: none;\r\n  font-size: 16px;\r\n  border: 0.1px solid #cfc7c7;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\n\r\ninput[type=email][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #EB5600;\r\n}\r\n\r\n\r\ninput[type=password][_ngcontent-%COMP%] {\r\n  background-color:  white;\r\n  color: #0d0d0d;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  box-shadow: none;\r\n  font-size: 16px;\r\n  border: 0.1px solid #cfc7c7;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\n\r\ninput[type=password][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #EB5600;\r\n}\r\n\r\n\r\ninput[type=date][_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  color: #0d0d0d;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  box-shadow: none;\r\n  font-size: 16px;\r\n  border: 0.1px solid #cfc7c7;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\n\r\nselect[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  border: 0.1px solid #cfc7c7;\r\n}\r\n\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n  text-align: left !important;\r\n  font-size: 0.8rem !important;\r\n  color:rgb(107, 92, 92) !important;\r\n  text-decoration: none !important;\r\n  border:none !important;\r\n  padding-bottom: 0px !important;\r\n  margin-bottom: 0px !important;\r\n}\r\n\r\n\r\n.borde[_ngcontent-%COMP%]{\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxlYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQWlGOzs7QUFHakY7SUFDSSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0Usd0NBQXdDO0lBQ3hDLHdDQUF3QztJQUN4QyxhQUFhOztJQUViLDZCQUE2QjtJQUM3QixtQkFBbUIsRUFBRSw4QkFBOEIsRUFNaEQsK0JBQStCO0lBQ2xDOzs7OztLQUtDLEVBQUUscUVBQXFFO0VBQzFFOzs7QUFFQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjs7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCOzs7QUFFQyxjQUFjOzs7QUFFZDtJQUNDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7O0FBQ0E7SUFFRSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBRVoseUNBQXlDO0lBQ3pDLGtCQUFrQjtFQUNwQjs7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOzs7QUFFQTtJQUVFLDBCQUEwQjtJQUUxQixzQkFBc0I7SUFFdEIseUJBQXlCO0VBQzNCOzs7QUFlQTtJQUNFO01BQ0UsVUFBVTtNQUVWLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsVUFBVTtNQUVWLGVBQWU7SUFDakI7RUFDRjs7O0FBRUEsa0NBQWtDOzs7QUFHbEMsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7O0FBRTFEO0lBQ0UsU0FBUztJQUdULDBCQUEwQjtJQUkxQiw0QkFBNEI7SUFJNUIscUJBQXFCO0VBQ3ZCOzs7QUFFQTtJQUdFLHFCQUFxQjtFQUN2Qjs7O0FBRUE7SUFDRSxXQUFXOztFQUViOzs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFFZiw4Q0FBOEM7SUFFOUMsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUsxQixnQ0FBZ0M7O0FBRXBDOzs7QUFDQTtFQUNFLGtDQUFrQztFQUNsQywrQkFBK0I7QUFDakM7OztBQUNBO0VBQ0UsaURBQXdFO0VBQ3hFLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGdCQUFnQjs7QUFFbEI7OztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixpREFBd0U7RUFDeEUsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDJCQUEyQjtFQUszQixnQ0FBZ0M7RUFFaEMsOEJBQThCO0VBQzlCLHdCQUF3QjtBQUMxQjs7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDJCQUEyQjtFQUszQixnQ0FBZ0M7RUFFaEMsOEJBQThCO0FBQ2hDOzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7OztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMkJBQTJCO0VBSzNCLGdDQUFnQztFQUVoQyw4QkFBOEI7QUFDaEM7OztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwyQkFBMkI7RUFLM0IsZ0NBQWdDO0VBRWhDLDhCQUE4QjtBQUNoQzs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOzs7QUFJQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBQy9COzs7QUFFQTtBQUNBIiwiZmlsZSI6ImVtcGxlYWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrSlAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICAvKiBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7ICovXHJcbiAgICBmb250LWZhbWlseTogICdOb3RvIFNhbnMgSlAnLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNFQjU2MDA7Ki9cclxuICAgIGJhY2tncm91bmQ6ICMyOTgwYjk7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICB0byByaWdodCxcclxuICAgICAgI2ZmZmZmZixcclxuICAgICAgIzZkZDVmYSxcclxuICAgICAgIzI5ODBiOVxyXG4gICAgKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICNmZmZmZmYsXHJcbiAgICAgICM2ZGQ1ZmEsXHJcbiAgICAgICMyOTgwYjlcclxuICAgICk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuXHJcbiAgIC8qIFNUUlVDVFVSRSAqL1xyXG5cclxuICAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAjZm9ybUNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgZm9ybXtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZmFkZUluRG93biB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICB9XHJcblxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuXHJcbiAgLmZhZGVJbiB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG5cclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcblxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICB9XHJcblxyXG4gIC5mYWRlSW4uZmlyc3Qge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcblxyXG4gICNpY29uIHtcclxuICAgIHdpZHRoOjIwcmVtO1xyXG5cclxuICB9XHJcblxyXG4gIC5idG5SZWdpc3RyYXJzZXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFQjU2MDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBmbG9hdDogaW5oZXJpdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBtYXJnaW46IDVweCAyMHB4IDIwcHggMjBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbn1cclxuLmJ0blJlZ2lzdHJhcnNlOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2I2NDcwNyFpbXBvcnRhbnQ7XHJcbiAgLypib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmOyAgKi9cclxufVxyXG4jYnRuUmVncmVzYXJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9yZWdyZXNhcjEucG5nXCIpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGZsb2F0OiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gO1xyXG4gIC8qcGFkZGluZy10b3A6IDAuNXJlbSA7Ki9cclxuICBib3gtc2hhZG93OiBub25lO1xyXG5cclxufVxyXG5cclxuI2J0blJlZ3Jlc2FyOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVncmVzYXIyLnBuZ1wiKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCAjY2ZjN2M3O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUI1NjAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWVtYWlsXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IDAuMXB4IHNvbGlkICNjZmM3Yzc7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZW1haWxdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUI1NjAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIHdoaXRlO1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCAjY2ZjN2M3O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCNTYwMDtcclxufVxyXG5pbnB1dFt0eXBlPWRhdGVdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogMC4xcHggc29saWQgI2NmYzdjNztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuc2VsZWN0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDAuMXB4IHNvbGlkICNjZmM3Yzc7XHJcbn1cclxuXHJcblxyXG5cclxuKjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOnJnYigxMDcsIDkyLCA5MikgIWltcG9ydGFudDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRle1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_empleado_empleado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/empleado/empleado.component */ "fn9Z");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "R8yp");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: 'index', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: 'empleado', component: _components_empleado_empleado_component__WEBPACK_IMPORTED_MODULE_1__["EmpleadoComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '**', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yCs/":
/*!******************************************!*\
  !*** ./src/app/Models/empleado.model.ts ***!
  \******************************************/
/*! exports provided: Empleado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empleado", function() { return Empleado; });
class Empleado {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map