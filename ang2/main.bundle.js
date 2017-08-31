webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #673ab7;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\n\r\n#footerInput{\r\n  position: relative;\r\n  margin-top: 50%;\r\n  width: 50%;\r\n  height: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<input id=\"footerInput\" placeholder=\"Hei hei\" (blur)=\"onBlurTest()\" (click)=\"onClickTest()\" (focus)=\"onFocusTest()\" />\n "

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 69;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__(79);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hei Hei !';
        this.title = "Title from ctor";
        this.JustAFunc();
    }
    AppComponent.prototype.JustAFunc = function () {
        this.title = "Title from a func 1";
        console.log('JustAFunc console');
    };
    AppComponent.prototype.onBlurTest = function () {
        console.log('onBlurTest');
        console.log(this.timeEvent);
        clearInterval(this.timeEvent);
    };
    AppComponent.prototype.onClickTest = function () {
        console.log('func onClickTest');
    };
    AppComponent.prototype.onFocusTest = function () {
        console.log("func onFocusTest");
        this.scollPageDown(this);
    };
    AppComponent.prototype.scollPageDown = function (targert) {
        this.timeEvent = setTimeout(function () {
            console.log("scoll");
            console.log(this.timeEvent);
            this.footerInput.scrollIntoView();
            targert.scollPageDown(targert);
        }, 500);
        // this.timeEvent = setInterval(() => {
        //   console.log("timeInterval");
        //   console.log(this.timeEvent);
        //   this.footerInput.scrollIntoView();
        //   targert.scollPageDown(targert);
        // }, 500);
        // this.timeEvent = setInterval(function () {
        //   this.footerInput.scrollIntoView();
        //   targert.scollPageDown(targert);
        // }, 500);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(135),
        styles: [__webpack_require__(133)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.prod.js.map

/***/ })

},[160]);
//# sourceMappingURL=main.bundle.js.map