(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ng-documentation/src/lib/core/code-line/code-line.component.html":
/*!***************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/code-line/code-line.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"code-container\">\n  <pre><code #code><ng-content></ng-content></code></pre>\n</div>\n\n<docs-copy-button [element]=\"code\"></docs-copy-button>\n"

/***/ }),

/***/ "../ng-documentation/src/lib/core/code-line/code-line.component.sass":
/*!***************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/code-line/code-line.component.sass ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  margin: 5px 0;\n  position: relative;\n  overflow: hidden;\n  background: whitesmoke;\n  align-items: center;\n}\n\ndocs-copy-button {\n  flex: 0 0 auto;\n  margin: 0 15px 0 15px;\n}\n\n.code-container {\n  flex: 1 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow: auto;\n}\n\npre {\n  flex: 1 1;\n  background: transparent;\n  margin: 0;\n}\n\ncode {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL2NvZGUtbGluZS9jb2RlLWxpbmUuY29tcG9uZW50LnNhc3MiLCJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvY29yZS9jb2RlLWxpbmUvY29kZS1saW5lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNFRjs7QURBQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNHRjs7QUREQTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNJRjs7QURGQTtFQUNFLFNBQUE7QUNLRiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvY29yZS9jb2RlLWxpbmUvY29kZS1saW5lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXFw6aG9zdFxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAgbWFyZ2luOiA1cHggMFxuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgb3ZlcmZsb3c6IGhpZGRlblxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxuZG9jcy1jb3B5LWJ1dHRvblxuICBmbGV4OiAwIDAgYXV0b1xuICBtYXJnaW46IDAgMTVweCAwIDE1cHhcblxuLmNvZGUtY29udGFpbmVyXG4gIGZsZXg6IDEgMVxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuICBvdmVyZmxvdzogYXV0b1xuXG5wcmVcbiAgZmxleDogMSAxXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XG4gIG1hcmdpbjogMFxuXG5jb2RlXG4gIG1hcmdpbjogMFxuXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZG9jcy1jb3B5LWJ1dHRvbiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtYXJnaW46IDAgMTVweCAwIDE1cHg7XG59XG5cbi5jb2RlLWNvbnRhaW5lciB7XG4gIGZsZXg6IDEgMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnByZSB7XG4gIGZsZXg6IDEgMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMDtcbn1cblxuY29kZSB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"

/***/ }),

/***/ "../ng-documentation/src/lib/core/code-line/code-line.component.ts":
/*!*************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/code-line/code-line.component.ts ***!
  \*************************************************************************/
/*! exports provided: CodeLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLineComponent", function() { return CodeLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



/**
 * This component displays a line of code. It provides a "copy" button and basic code styles.
 */
var CodeLineComponent = /** @class */ (function () {
    function CodeLineComponent() {
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCopy"];
        this.copied = false;
    }
    /**
     * @ignore
     */
    CodeLineComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.copiedTimeout);
    };
    /**
     * @ignore
     */
    CodeLineComponent.prototype.copy = function () {
        var _this = this;
        this.copyToClipboard(this.code.nativeElement.innerText);
        this.copied = true;
        clearTimeout(this.copiedTimeout);
        this.copiedTimeout = setTimeout(function () { return _this.copied = false; }, 3000);
    };
    /**
     * @ignore
     */
    CodeLineComponent.prototype.copyToClipboard = function (str) {
        var el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('code'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeLineComponent.prototype, "code", void 0);
    CodeLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-code-line',
            template: __webpack_require__(/*! ./code-line.component.html */ "../ng-documentation/src/lib/core/code-line/code-line.component.html"),
            styles: [__webpack_require__(/*! ./code-line.component.sass */ "../ng-documentation/src/lib/core/code-line/code-line.component.sass")]
        })
    ], CodeLineComponent);
    return CodeLineComponent;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/core/code-sample/code-sample.module.ts":
/*!**************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/code-sample/code-sample.module.ts ***!
  \**************************************************************************/
/*! exports provided: CodeSampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSampleModule", function() { return CodeSampleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-sample.pipe */ "../ng-documentation/src/lib/core/code-sample/code-sample.pipe.ts");




var CodeSampleModule = /** @class */ (function () {
    function CodeSampleModule() {
    }
    CodeSampleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [_code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__["CodeSamplePipe"], _code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__["ComponentDescriptionPipe"]],
            providers: [_code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__["CodeSamplePipe"], _code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__["ComponentDescriptionPipe"]],
            declarations: [_code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__["CodeSamplePipe"], _code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__["ComponentDescriptionPipe"]]
        })
    ], CodeSampleModule);
    return CodeSampleModule;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/core/code-sample/code-sample.pipe.ts":
/*!************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/code-sample/code-sample.pipe.ts ***!
  \************************************************************************/
/*! exports provided: CodeSamplePipe, ComponentDescriptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSamplePipe", function() { return CodeSamplePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDescriptionPipe", function() { return ComponentDescriptionPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _documentation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../documentation.service */ "../ng-documentation/src/lib/core/documentation.service.ts");




var CodeSamplePipe = /** @class */ (function () {
    function CodeSamplePipe(http, changeDetectorRef) {
        var _this = this;
        this.http = http;
        this.changeDetectorRef = changeDetectorRef;
        this.codeSamples = {};
        this.http.get('assets/examples.json')
            .subscribe(function (c) {
            _this.codeSamples = c;
            _this.changeDetectorRef.markForCheck();
        });
    }
    CodeSamplePipe.prototype.transform = function (sampleId) {
        var key = Object.keys(this.codeSamples).find(function (k) { return k.includes(sampleId); });
        return this.codeSamples[key];
    };
    CodeSamplePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'codeSample',
            pure: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], CodeSamplePipe);
    return CodeSamplePipe;
}());

var ComponentDescriptionPipe = /** @class */ (function () {
    function ComponentDescriptionPipe(documentationService, changeDetectorRef) {
        var _this = this;
        this.documentationService = documentationService;
        this.changeDetectorRef = changeDetectorRef;
        this.documentationService.documentation$.subscribe(function () {
            _this.changeDetectorRef.markForCheck();
        });
    }
    ComponentDescriptionPipe.prototype.transform = function (name, type) {
        var comp = this.documentationService.getComponentDocumentation(name, type);
        if (comp) {
            return comp.description;
        }
        else {
            return 'Loading';
        }
    };
    ComponentDescriptionPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'componentDescription',
            pure: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_documentation_service__WEBPACK_IMPORTED_MODULE_3__["DocumentationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], ComponentDescriptionPipe);
    return ComponentDescriptionPipe;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/core/code/code.component.html":
/*!*****************************************************************!*\
  !*** ../ng-documentation/src/lib/core/code/code.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre><code #code><ng-container *ngIf=\"path; else: contentTemplate\">{{ path | codeSample }}</ng-container></code></pre>\n<div class=\"source-actions\">\n  <docs-copy-button [element]=\"code\"></docs-copy-button>\n</div>\n\n<ng-template #contentTemplate><ng-content></ng-content></ng-template>"

/***/ }),

/***/ "../ng-documentation/src/lib/core/code/code.component.sass":
/*!*****************************************************************!*\
  !*** ../ng-documentation/src/lib/core/code/code.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: block;\n  overflow: auto;\n}\n\npre {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: auto;\n  background: #3b3b3b;\n}\n\npre code {\n  margin: 0;\n}\n\n.source-actions {\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL2NvZGUvY29kZS5jb21wb25lbnQuc2FzcyIsInByb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL2NvZGUvY29kZS5jb21wb25lbnQuc2FzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9zdHlsZXMvX3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RGOztBREdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CRUxjO0FES2hCOztBREVFO0VBQ0UsU0FBQTtBQ0FKOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvY29yZS9jb2RlL2NvZGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IC4uLy4uL3N0eWxlcy92YXJpYWJsZXNcblxuXFw6aG9zdFxuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgZGlzcGxheTogYmxvY2tcbiAgb3ZlcmZsb3c6IGF1dG9cblxucHJlXG4gIG1hcmdpbjogMFxuICBwYWRkaW5nOiAwXG4gIGhlaWdodDogMTAwJVxuICBvdmVyZmxvdzogYXV0b1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmctY29kZVxuICBcbiAgY29kZVxuICAgIG1hcmdpbjogMFxuXG4uc291cmNlLWFjdGlvbnNcbiAgcG9zaXRpb246IGFic29sdXRlXG4gIHJpZ2h0OiAwXG4gIHRvcDogMFxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kXG4gIHBhZGRpbmc6IDVweCAxNXB4XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5wcmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMzYjNiM2I7XG59XG5wcmUgY29kZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNvdXJjZS1hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufSIsIiRjb2xvci1vbmU6ICMyOEM4RkZcbiRjb2xvci10d286ICMyOEEyRkZcbiRjb2xvci10aHJlZTogI0ZGNzkzRlxuJGNvbG9yLWZvdXI6ICNGRjREMDBcbiRjb2xvci1maXZlOiAjRUUyMjAwXG4kY29sb3ItbGlnaHQtZ3JleTogbGlnaHRncmV5XG5cbiRjb2xvci1iZy1jb2RlOiAjM2IzYjNiXG4kY29sb3ItdGV4dC1jb2RlOiAjY2RjZGNkXG4iXX0= */"

/***/ }),

/***/ "../ng-documentation/src/lib/core/code/code.component.ts":
/*!***************************************************************!*\
  !*** ../ng-documentation/src/lib/core/code/code.component.ts ***!
  \***************************************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



/**
 * This component displays code from a given file or from the template. It provides a "copy" button and basic code styles.
 */
var CodeComponent = /** @class */ (function () {
    function CodeComponent() {
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCopy"];
        this.copied = false;
    }
    /**
     * @ignore
     */
    CodeComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.copiedTimeout);
    };
    /**
     * @ignore
     */
    CodeComponent.prototype.copy = function () {
        var _this = this;
        this.copyToClipboard(this.code.nativeElement.innerText);
        this.copied = true;
        clearTimeout(this.copiedTimeout);
        this.copiedTimeout = setTimeout(function () { return _this.copied = false; }, 3000);
    };
    /**
     * @ignore
     */
    CodeComponent.prototype.copyToClipboard = function (str) {
        var el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CodeComponent.prototype, "path", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('code'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "code", void 0);
    CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-code',
            template: __webpack_require__(/*! ./code.component.html */ "../ng-documentation/src/lib/core/code/code.component.html"),
            styles: [__webpack_require__(/*! ./code.component.sass */ "../ng-documentation/src/lib/core/code/code.component.sass")]
        })
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/core/component-api/component-api.component.html":
/*!***********************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-api/component-api.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Selector: <code>{{selector$ | async}}</code></h2>\n\n<ng-template [ngIf]=\"hasInputs$ | async\">\n  <h3>Inputs</h3>\n\n  <table>\n    <thead>\n      <tr>\n        <th class=\"name\">Input</th>\n        <th class=\"type\">Type</th>\n        <th class=\"description\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-template ngFor [ngForOf]=\"inputs$ | async\" let-input>\n        <tr>\n          <td><code>{{input.name}}</code></td>\n          <td><code>{{getInputType(input) | async}}</code></td>\n          <td [innerHTML]=\"input.description\"></td>\n        </tr>\n      </ng-template>\n    </tbody>\n  </table>\n</ng-template>\n\n<ng-template [ngIf]=\"hasOutputs$ | async\">\n  <h3>Outputs</h3>\n\n  <table>\n    <thead>\n      <tr>\n        <th class=\"name\">Output</th>\n        <th class=\"type\">Type</th>\n        <th class=\"description\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-template ngFor [ngForOf]=\"outputs$ | async\" let-output>\n        <tr>\n          <td><code>{{output.name}}</code></td>\n          <td><code>{{output.defaultValue}}</code></td>\n          <td [innerHTML]=\"output.description\"></td>\n        </tr>\n      </ng-template>\n    </tbody>\n  </table>\n</ng-template>\n\n<ng-template [ngIf]=\"hasMethods$ | async\">\n  <h3>Methods</h3>\n\n  <table>\n    <thead>\n      <tr>\n        <th class=\"name\">Method</th>\n        <th class=\"description\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-template ngFor [ngForOf]=\"methods$ | async\" let-output>\n        <tr>\n          <td><code>{{output.name}}</code></td>\n          <td [innerHTML]=\"output.description\"></td>\n        </tr>\n      </ng-template>\n    </tbody>\n  </table>\n</ng-template>"

/***/ }),

/***/ "../ng-documentation/src/lib/core/component-api/component-api.component.sass":
/*!***********************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-api/component-api.component.sass ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  border: 1px solid lightgrey;\n  border-radius: 1px;\n  width: 100%;\n}\n\nthead {\n  background: lightgrey;\n}\n\nth {\n  text-align: left;\n}\n\nth, td {\n  padding: 3px 20px 3px 3px;\n}\n\ntr {\n  border-bottom: 1px solid lightgrey;\n}\n\n.name, .type {\n  width: 30%;\n}\n\n.description {\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL2NvbXBvbmVudC1hcGkvY29tcG9uZW50LWFwaS5jb21wb25lbnQuc2FzcyIsInByb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL2NvbXBvbmVudC1hcGkvY29tcG9uZW50LWFwaS5jb21wb25lbnQuc2FzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9zdHlsZXMvX3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREdBO0VBQ0kscUJFSmU7QURJbkI7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURBQTtFQUNJLGtDQUFBO0FDR0o7O0FEREE7RUFDSSxVQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0FDS0oiLCJmaWxlIjoicHJvamVjdHMvbmctZG9jdW1lbnRhdGlvbi9zcmMvbGliL2NvcmUvY29tcG9uZW50LWFwaS9jb21wb25lbnQtYXBpLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcydcblxudGFibGVcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWdyZXlcbiAgICBib3JkZXItcmFkaXVzOiAxcHhcbiAgICB3aWR0aDogMTAwJVxuXG50aGVhZFxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1saWdodC1ncmV5XG5cbnRoXG4gICAgdGV4dC1hbGlnbjogbGVmdFxuXG50aCwgdGRcbiAgICBwYWRkaW5nOiAzcHggMjBweCAzcHggM3B4XG5cbnRyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1saWdodC1ncmV5XG5cbi5uYW1lLCAudHlwZVxuICAgIHdpZHRoOiAzMCVcblxuLmRlc2NyaXB0aW9uXG4gICAgd2lkdGg6IDQwJVxuIiwidGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoZWFkIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xufVxuXG50aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRoLCB0ZCB7XG4gIHBhZGRpbmc6IDNweCAyMHB4IDNweCAzcHg7XG59XG5cbnRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxuLm5hbWUsIC50eXBlIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDQwJTtcbn0iLCIkY29sb3Itb25lOiAjMjhDOEZGXG4kY29sb3ItdHdvOiAjMjhBMkZGXG4kY29sb3ItdGhyZWU6ICNGRjc5M0ZcbiRjb2xvci1mb3VyOiAjRkY0RDAwXG4kY29sb3ItZml2ZTogI0VFMjIwMFxuJGNvbG9yLWxpZ2h0LWdyZXk6IGxpZ2h0Z3JleVxuXG4kY29sb3ItYmctY29kZTogIzNiM2IzYlxuJGNvbG9yLXRleHQtY29kZTogI2NkY2RjZFxuIl19 */"

/***/ }),

/***/ "../ng-documentation/src/lib/core/component-api/component-api.component.ts":
/*!*********************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-api/component-api.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ComponentApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentApiComponent", function() { return ComponentApiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _documentation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../documentation.service */ "../ng-documentation/src/lib/core/documentation.service.ts");




/**
 * Displays the component API: inputs, outputs and methods.
 */
var ComponentApiComponent = /** @class */ (function () {
    function ComponentApiComponent(documentation) {
        this.documentation = documentation;
    }
    /**
     * @ignore
     */
    ComponentApiComponent.prototype.ngOnChanges = function () {
        this.documentation$ = this.documentation.getComponentDocumentation$(this.componentId, this.componentType);
        this.selector$ = this.documentation$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (d) { return d ? d.selector : ''; }));
        this.inputs$ = this.documentation$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (d) { return d ? d.inputsClass || [] : []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(sortByName));
        this.outputs$ = this.documentation$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (d) { return d ? d.outputsClass || [] : []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(sortByName));
        this.methods$ = this.documentation$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (d) { return d ? d.methodsClass || [] : []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(sortByName));
        this.hasOutputs$ = this.outputs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (a) { return a.length > 0; }));
        this.hasInputs$ = this.inputs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (a) { return a.length > 0; }));
        this.hasMethods$ = this.methods$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (a) { return a.length > 0; }));
    };
    /**
     * @ignore
     */
    ComponentApiComponent.prototype.getInputType = function (input) {
        return this.documentation.getInputType({
            componentId: this.componentId,
            componentType: this.componentType,
            input: input
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentApiComponent.prototype, "componentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentApiComponent.prototype, "componentType", void 0);
    ComponentApiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-component-api',
            template: __webpack_require__(/*! ./component-api.component.html */ "../ng-documentation/src/lib/core/component-api/component-api.component.html"),
            styles: [__webpack_require__(/*! ./component-api.component.sass */ "../ng-documentation/src/lib/core/component-api/component-api.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_documentation_service__WEBPACK_IMPORTED_MODULE_3__["DocumentationService"]])
    ], ComponentApiComponent);
    return ComponentApiComponent;
}());

function sortByName(arr) {
    var result = (arr || []).slice(0);
    result.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    return result;
}


/***/ }),

/***/ "../ng-documentation/src/lib/core/component-description/component-description.component.html":
/*!***************************************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-description/component-description.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"componentId | componentDescription: componentType\"></div>"

/***/ }),

/***/ "../ng-documentation/src/lib/core/component-description/component-description.component.sass":
/*!***************************************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-description/component-description.component.sass ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvY29yZS9jb21wb25lbnQtZGVzY3JpcHRpb24vY29tcG9uZW50LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "../ng-documentation/src/lib/core/component-description/component-description.component.ts":
/*!*************************************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-description/component-description.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ComponentDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDescriptionComponent", function() { return ComponentDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ComponentDescriptionComponent = /** @class */ (function () {
    function ComponentDescriptionComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentDescriptionComponent.prototype, "componentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentDescriptionComponent.prototype, "componentType", void 0);
    ComponentDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-component-description',
            template: __webpack_require__(/*! ./component-description.component.html */ "../ng-documentation/src/lib/core/component-description/component-description.component.html"),
            styles: [__webpack_require__(/*! ./component-description.component.sass */ "../ng-documentation/src/lib/core/component-description/component-description.component.sass")]
        })
    ], ComponentDescriptionComponent);
    return ComponentDescriptionComponent;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/core/component-documentation/component-documentation.component.html":
/*!*******************************************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-documentation/component-documentation.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-page [title]=\"componentTitle\" [disableRoutedNavigation]=\"disableRoutedNavigation\">\n  <ng-template docsPageSection=\"Overview\">\n    <docs-component-description\n      [componentId]=\"componentId\"\n      [componentType]=\"componentType\"\n    ></docs-component-description>\n  </ng-template>\n\n  <ng-template docsPageSection=\"Examples\">\n    <ng-template ngFor [ngForOf]=\"examples\" let-example>\n      <docs-component-example [example]=\"example\"></docs-component-example>\n    </ng-template>\n  </ng-template>\n\n  <ng-template docsPageSection=\"API\">\n    <docs-component-api\n      [componentId]=\"componentId\"\n      [componentType]=\"componentType\"\n    ></docs-component-api>\n  </ng-template>\n</docs-page>\n"

/***/ }),

/***/ "../ng-documentation/src/lib/core/component-documentation/component-documentation.component.sass":
/*!*******************************************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-documentation/component-documentation.component.sass ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvY29yZS9jb21wb25lbnQtZG9jdW1lbnRhdGlvbi9jb21wb25lbnQtZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "../ng-documentation/src/lib/core/component-documentation/component-documentation.component.ts":
/*!*****************************************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-documentation/component-documentation.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ComponentDocumentationComponent, AnchorContainerDirective, AnchorDirective, ComponentExampleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDocumentationComponent", function() { return ComponentDocumentationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorContainerDirective", function() { return AnchorContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorDirective", function() { return AnchorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentExampleDirective", function() { return ComponentExampleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


/**
 * Component that displays a component's or a directive's information: an overview, examples and API.
 */
var ComponentDocumentationComponent = /** @class */ (function () {
    function ComponentDocumentationComponent() {
        /**
         * @ignore
         */
        this.disableRoutedNavigation = false;
        this.examples = [];
    }
    /**
     * @ignore
     */
    ComponentDocumentationComponent.prototype.registerExample = function (example) {
        this.examples.push(example);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentDocumentationComponent.prototype, "componentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentDocumentationComponent.prototype, "componentType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentDocumentationComponent.prototype, "componentTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ComponentDocumentationComponent.prototype, "disableRoutedNavigation", void 0);
    ComponentDocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-component-documentation',
            template: __webpack_require__(/*! ./component-documentation.component.html */ "../ng-documentation/src/lib/core/component-documentation/component-documentation.component.html"),
            styles: [__webpack_require__(/*! ./component-documentation.component.sass */ "../ng-documentation/src/lib/core/component-documentation/component-documentation.component.sass")]
        })
    ], ComponentDocumentationComponent);
    return ComponentDocumentationComponent;
}());

var AnchorContainerDirective = /** @class */ (function () {
    function AnchorContainerDirective(elementRef) {
        this.elementRef = elementRef;
        this.anchors = [];
    }
    AnchorContainerDirective.prototype.registerAnchor = function (anchor) {
        this.anchors.push(anchor);
    };
    AnchorContainerDirective.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.currentAnchor === this.docsAnchorContainer) {
            return;
        }
        this.currentAnchor = this.docsAnchorContainer;
        var element = this.elementRef.nativeElement;
        var anchor = this.anchors.find(function (a) { return a.docsAnchor === _this.docsAnchorContainer; });
        if (!anchor) {
            return;
        }
        var anchorElement = anchor.elementRef.nativeElement;
        element.scrollTop = anchorElement.offsetTop - element.offsetTop - 15;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AnchorContainerDirective.prototype, "docsAnchorContainer", void 0);
    AnchorContainerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[docsAnchorContainer]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AnchorContainerDirective);
    return AnchorContainerDirective;
}());

var AnchorDirective = /** @class */ (function () {
    function AnchorDirective(container, elementRef) {
        this.container = container;
        this.elementRef = elementRef;
        this.container.registerAnchor(this);
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AnchorDirective.prototype, "docsAnchor", void 0);
    AnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[docsAnchor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [AnchorContainerDirective,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AnchorDirective);
    return AnchorDirective;
}());

var ComponentExampleDirective = /** @class */ (function () {
    function ComponentExampleDirective(documentation, template) {
        this.documentation = documentation;
        this.template = template;
        this.documentation.registerExample(this);
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentExampleDirective.prototype, "docsComponentExample", void 0);
    ComponentExampleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[docsComponentExample]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ComponentDocumentationComponent,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], ComponentExampleDirective);
    return ComponentExampleDirective;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/core/component-example/component-example.component.html":
/*!*******************************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-example/component-example.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{example.docsComponentExample}}</h3>\n\n<ng-container [ngTemplateOutlet]=\"example.template\"></ng-container>\n"

/***/ }),

/***/ "../ng-documentation/src/lib/core/component-example/component-example.component.sass":
/*!*******************************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-example/component-example.component.sass ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvY29yZS9jb21wb25lbnQtZXhhbXBsZS9jb21wb25lbnQtZXhhbXBsZS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "../ng-documentation/src/lib/core/component-example/component-example.component.ts":
/*!*****************************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-example/component-example.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComponentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentExampleComponent", function() { return ComponentExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component-documentation/component-documentation.component */ "../ng-documentation/src/lib/core/component-documentation/component-documentation.component.ts");



var ComponentExampleComponent = /** @class */ (function () {
    function ComponentExampleComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_2__["ComponentExampleDirective"])
    ], ComponentExampleComponent.prototype, "example", void 0);
    ComponentExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-component-example',
            template: __webpack_require__(/*! ./component-example.component.html */ "../ng-documentation/src/lib/core/component-example/component-example.component.html"),
            styles: [__webpack_require__(/*! ./component-example.component.sass */ "../ng-documentation/src/lib/core/component-example/component-example.component.sass")]
        })
    ], ComponentExampleComponent);
    return ComponentExampleComponent;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/core/copy-button/copy-button.component.html":
/*!*******************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/copy-button/copy-button.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"copy\" (click)=\"copy()\">\n  <ng-container *ngIf=\"!copied\">copy</ng-container>\n  <ng-container *ngIf=\"copied\">copied!</ng-container>\n  <ng-template [ngIf]=\"!copied\">\n    <ng-template iwTooltip [horizontal]=\"true\">Copy this code sample</ng-template>\n  </ng-template>\n</button>\n\n"

/***/ }),

/***/ "../ng-documentation/src/lib/core/copy-button/copy-button.component.sass":
/*!*******************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/copy-button/copy-button.component.sass ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\nbutton {\n  border: none;\n  box-shadow: none;\n  background: transparent;\n  height: auto;\n  line-height: normal;\n  color: #cdcdcd;\n  outline: none;\n  padding: 0;\n  cursor: pointer;\n}\n\nbutton:hover {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL2NvcHktYnV0dG9uL2NvcHktYnV0dG9uLmNvbXBvbmVudC5zYXNzIiwicHJvamVjdHMvbmctZG9jdW1lbnRhdGlvbi9zcmMvbGliL2NvcmUvY29weS1idXR0b24vY29weS1idXR0b24uY29tcG9uZW50LnNhc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQva2V2aW5tZXJja3gvbmctZG9jdW1lbnRhdGlvbi9wcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvc3R5bGVzL192YXJpYWJsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQztFQUNDLGNBQUE7QUNERjs7QURHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0VIZ0I7RUZJaEIsYUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQUY7O0FERUU7RUFDRSxZQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvbmctZG9jdW1lbnRhdGlvbi9zcmMvbGliL2NvcmUvY29weS1idXR0b24vY29weS1idXR0b24uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IC4uLy4uL3N0eWxlcy92YXJpYWJsZXNcblxuXFw6aG9zdFxuICBkaXNwbGF5OiBibG9ja1xuXG5idXR0b25cbiAgYm9yZGVyOiBub25lXG4gIGJveC1zaGFkb3c6IG5vbmVcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcbiAgaGVpZ2h0OiBhdXRvXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWxcbiAgY29sb3I6ICRjb2xvci10ZXh0LWNvZGVcbiAgb3V0bGluZTogbm9uZVxuICBwYWRkaW5nOiAwXG4gIGN1cnNvcjogcG9pbnRlclxuXG4gICY6aG92ZXJcbiAgICBjb2xvcjogd2hpdGUiLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjY2RjZGNkO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59IiwiJGNvbG9yLW9uZTogIzI4QzhGRlxuJGNvbG9yLXR3bzogIzI4QTJGRlxuJGNvbG9yLXRocmVlOiAjRkY3OTNGXG4kY29sb3ItZm91cjogI0ZGNEQwMFxuJGNvbG9yLWZpdmU6ICNFRTIyMDBcbiRjb2xvci1saWdodC1ncmV5OiBsaWdodGdyZXlcblxuJGNvbG9yLWJnLWNvZGU6ICMzYjNiM2JcbiRjb2xvci10ZXh0LWNvZGU6ICNjZGNkY2RcbiJdfQ== */"

/***/ }),

/***/ "../ng-documentation/src/lib/core/copy-button/copy-button.component.ts":
/*!*****************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/copy-button/copy-button.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CopyButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyButtonComponent", function() { return CopyButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CopyButtonComponent = /** @class */ (function () {
    function CopyButtonComponent() {
        this.copied = false;
    }
    /**
     * @ignore
     */
    CopyButtonComponent.prototype.copy = function () {
        var _this = this;
        this.copyToClipboard(this.element.innerText);
        this.copied = true;
        clearTimeout(this.copiedTimeout);
        this.copiedTimeout = setTimeout(function () { return _this.copied = false; }, 3000);
    };
    /**
     * @ignore
     */
    CopyButtonComponent.prototype.copyToClipboard = function (str) {
        var el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", HTMLElement)
    ], CopyButtonComponent.prototype, "element", void 0);
    CopyButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-copy-button',
            template: __webpack_require__(/*! ./copy-button.component.html */ "../ng-documentation/src/lib/core/copy-button/copy-button.component.html"),
            styles: [__webpack_require__(/*! ./copy-button.component.sass */ "../ng-documentation/src/lib/core/copy-button/copy-button.component.sass")]
        })
    ], CopyButtonComponent);
    return CopyButtonComponent;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/core/core.module.ts":
/*!*******************************************************!*\
  !*** ../ng-documentation/src/lib/core/core.module.ts ***!
  \*******************************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var iwerk_angular_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! iwerk-angular-ui */ "../../node_modules/iwerk-angular-ui/fesm5/iwerk-angular-ui.js");
/* harmony import */ var _code_line_code_line_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-line/code-line.component */ "../ng-documentation/src/lib/core/code-line/code-line.component.ts");
/* harmony import */ var _code_sample_code_sample_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-sample/code-sample.module */ "../ng-documentation/src/lib/core/code-sample/code-sample.module.ts");
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code/code.component */ "../ng-documentation/src/lib/core/code/code.component.ts");
/* harmony import */ var _component_api_component_api_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component-api/component-api.component */ "../ng-documentation/src/lib/core/component-api/component-api.component.ts");
/* harmony import */ var _component_description_component_description_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component-description/component-description.component */ "../ng-documentation/src/lib/core/component-description/component-description.component.ts");
/* harmony import */ var _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component-documentation/component-documentation.component */ "../ng-documentation/src/lib/core/component-documentation/component-documentation.component.ts");
/* harmony import */ var _component_example_component_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component-example/component-example.component */ "../ng-documentation/src/lib/core/component-example/component-example.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs/tabs.component */ "../ng-documentation/src/lib/core/tabs/tabs.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _copy_button_copy_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./copy-button/copy-button.component */ "../ng-documentation/src/lib/core/copy-button/copy-button.component.ts");
/* harmony import */ var _directives_brand_header_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/brand-header.directive */ "../ng-documentation/src/lib/core/directives/brand-header.directive.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page/page.component */ "../ng-documentation/src/lib/core/page/page.component.ts");

















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _code_sample_code_sample_module__WEBPACK_IMPORTED_MODULE_6__["CodeSampleModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                iwerk_angular_ui__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            exports: [
                _code_sample_code_sample_module__WEBPACK_IMPORTED_MODULE_6__["CodeSampleModule"],
                _component_description_component_description_component__WEBPACK_IMPORTED_MODULE_9__["ComponentDescriptionComponent"],
                _component_api_component_api_component__WEBPACK_IMPORTED_MODULE_8__["ComponentApiComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_10__["ComponentDocumentationComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_10__["ComponentExampleDirective"],
                _component_example_component_example_component__WEBPACK_IMPORTED_MODULE_11__["ComponentExampleComponent"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_10__["AnchorContainerDirective"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_10__["AnchorDirective"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_12__["TabsComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_12__["TabDirective"],
                _code_code_component__WEBPACK_IMPORTED_MODULE_7__["CodeComponent"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _code_line_code_line_component__WEBPACK_IMPORTED_MODULE_5__["CodeLineComponent"],
                _directives_brand_header_directive__WEBPACK_IMPORTED_MODULE_15__["BrandHeaderDirective"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_16__["PageComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_16__["PageSectionDirective"]
            ],
            declarations: [
                _component_description_component_description_component__WEBPACK_IMPORTED_MODULE_9__["ComponentDescriptionComponent"],
                _component_api_component_api_component__WEBPACK_IMPORTED_MODULE_8__["ComponentApiComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_10__["ComponentDocumentationComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_10__["ComponentExampleDirective"],
                _component_example_component_example_component__WEBPACK_IMPORTED_MODULE_11__["ComponentExampleComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_10__["AnchorContainerDirective"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_10__["AnchorDirective"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_12__["TabsComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_12__["TabDirective"],
                _code_code_component__WEBPACK_IMPORTED_MODULE_7__["CodeComponent"],
                _code_line_code_line_component__WEBPACK_IMPORTED_MODULE_5__["CodeLineComponent"],
                _copy_button_copy_button_component__WEBPACK_IMPORTED_MODULE_14__["CopyButtonComponent"],
                _directives_brand_header_directive__WEBPACK_IMPORTED_MODULE_15__["BrandHeaderDirective"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_16__["PageComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_16__["PageSectionDirective"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/core/directives/brand-header.directive.ts":
/*!*****************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/directives/brand-header.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: BrandHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandHeaderDirective", function() { return BrandHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _docs_docs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../docs/docs.component */ "../ng-documentation/src/lib/docs/docs.component.ts");



var BrandHeaderDirective = /** @class */ (function () {
    function BrandHeaderDirective(docs, templateRef) {
        this.docs = docs;
        this.templateRef = templateRef;
    }
    BrandHeaderDirective.prototype.ngOnInit = function () {
        this.docs.brandHeaderTemplate = this.templateRef;
    };
    BrandHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[docsBrandHeader]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_docs_docs_component__WEBPACK_IMPORTED_MODULE_2__["DocsComponent"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], BrandHeaderDirective);
    return BrandHeaderDirective;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/core/documentation.service.ts":
/*!*****************************************************************!*\
  !*** ../ng-documentation/src/lib/core/documentation.service.ts ***!
  \*****************************************************************/
/*! exports provided: DocumentationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationService", function() { return DocumentationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _documentation_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../documentation.token */ "../ng-documentation/src/lib/documentation.token.ts");






var DocumentationService = /** @class */ (function () {
    function DocumentationService(http, documentationPath) {
        var _this = this;
        this.http = http;
        this.documentationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.http.get(documentationPath || 'assets/documentation/documentation.json')
            .subscribe(function (c) {
            _this.documentationSubject.next(c);
        });
    }
    Object.defineProperty(DocumentationService.prototype, "documentation", {
        get: function () {
            return this.documentationSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentationService.prototype, "documentation$", {
        get: function () {
            return this.documentationSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DocumentationService.prototype.getComponentDocumentation$ = function (name, type) {
        return this.documentationSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (documentation) {
            if (!documentation) {
                return undefined;
            }
            else {
                return documentation[type].find(function (d) { return d.name === name; });
            }
        }));
    };
    DocumentationService.prototype.getComponentDocumentation = function (name, type) {
        if (!this.documentation) {
            return undefined;
        }
        else {
            var result = this.documentation[type].find(function (d) { return d.name === name; });
            if (result) {
                return result;
            }
            throw new Error('Not found: ' + name);
        }
    };
    DocumentationService.prototype.getInputType = function (options) {
        var _this = this;
        return this.getComponentDocumentation$(options.componentId, options.componentType)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (d) {
            var defaultResult = options.input.type;
            if (!d.accessors) {
                if (!defaultResult) {
                    return _this.getTypeFromDefaultValue(options.input.defaultValue);
                }
                return defaultResult;
            }
            var acc = d.accessors[options.input.name];
            if (acc) {
                return acc.getSignature.returnType;
            }
            else {
                return defaultResult;
            }
        }));
    };
    DocumentationService.prototype.getTypeFromDefaultValue = function (defaultValue) {
        if (defaultValue === 'false' || defaultValue === 'true') {
            return 'boolean';
        }
        throw new Error('Type not found');
    };
    DocumentationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_documentation_token__WEBPACK_IMPORTED_MODULE_5__["DOCUMENTATION_PATH"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Object])
    ], DocumentationService);
    return DocumentationService;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/core/page/page.component.html":
/*!*****************************************************************!*\
  !*** ../ng-documentation/src/lib/core/page/page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" *ngIf=\"!noNavigation\">\n  <h1>{{title}}</h1>\n\n  <ol>\n    <ng-template ngFor [ngForOf]=\"sections$ | async\" let-section>\n      <li\n        [class.active]=\"(activeSection$ | async) === section\"\n        (click)=\"selectSection(section)\"\n      >{{section.title}}</li>\n    </ng-template>\n  </ol>\n</div>\n\n<div class=\"content\"\n  [docsAnchorContainer]=\"(activeSection$ | async).title\"\n  [docsAnchor]=\"firstSectionTitle$ | async\">\n  <ng-template ngFor [ngForOf]=\"sections$ | async\" let-section let-first=\"first\">\n    <h2\n      *ngIf=\"(!first || noNavigation) && section.title\"\n      [docsAnchor]=\"section.title\"\n    >{{section.title}}</h2>\n\n    <ng-container [ngTemplateOutlet]=\"section.template\"></ng-container>\n  </ng-template>\n</div>\n\n"

/***/ }),

/***/ "../ng-documentation/src/lib/core/page/page.component.sass":
/*!*****************************************************************!*\
  !*** ../ng-documentation/src/lib/core/page/page.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-bottom: 1px solid grey;\n  box-shadow: 2px 0px 2px 1px lightgrey;\n  padding: 0 15px;\n}\n\n.content {\n  flex: 1 1;\n  padding: 15px;\n  overflow: auto;\n}\n\nh2 {\n  margin-top: 50px;\n  border-bottom: 1px solid lightgrey;\n}\n\nol {\n  list-style: none;\n  margin: 0 0 0 30px;\n  padding: 0;\n}\n\nli {\n  display: inline-block;\n  margin: 0;\n  padding: 5px 10px;\n  transition: color 0.2s;\n  cursor: pointer;\n}\n\nli:hover {\n  color: #FF793F;\n}\n\nli.active {\n  color: #FF4D00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL3BhZ2UvcGFnZS5jb21wb25lbnQuc2FzcyIsInByb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL3BhZ2UvcGFnZS5jb21wb25lbnQuc2FzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9zdHlsZXMvX3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDREY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNJRjs7QURGRTtFQUNFLGNFckNVO0FEeUNkOztBREZFO0VBQ0UsY0V2Q1M7QUQyQ2IiLCJmaWxlIjoicHJvamVjdHMvbmctZG9jdW1lbnRhdGlvbi9zcmMvbGliL2NvcmUvcGFnZS9wYWdlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcydcblxuXFw6aG9zdFxuICBoZWlnaHQ6IDEwMCVcbiAgb3ZlcmZsb3c6IGhpZGRlblxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cblxuLmhlYWRlclxuICBmbGV4OiAwIDAgYXV0b1xuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleVxuICBib3gtc2hhZG93OiAycHggMHB4IDJweCAxcHggbGlnaHRncmV5XG4gIHBhZGRpbmc6IDAgMTVweFxuXG4uY29udGVudFxuICBmbGV4OiAxIDFcbiAgcGFkZGluZzogMTVweFxuICBvdmVyZmxvdzogYXV0b1xuXG5oMlxuICBtYXJnaW4tdG9wOiA1MHB4XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JleVxuXG5vbFxuICBsaXN0LXN0eWxlOiBub25lXG4gIG1hcmdpbjogMCAwIDAgMzBweFxuICBwYWRkaW5nOiAwXG5cbmxpXG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICBtYXJnaW46IDBcbiAgcGFkZGluZzogNXB4IDEwcHhcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yc1xuICBjdXJzb3I6IHBvaW50ZXJcblxuICAmOmhvdmVyXG4gICAgY29sb3I6ICRjb2xvci10aHJlZVxuXG4gICYuYWN0aXZlXG4gICAgY29sb3I6ICRjb2xvci1mb3VyXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmhlYWRlciB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbiAgYm94LXNoYWRvdzogMnB4IDBweCAycHggMXB4IGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uY29udGVudCB7XG4gIGZsZXg6IDEgMTtcbiAgcGFkZGluZzogMTVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmgyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxub2wge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDAgMCAwIDMwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5saTpob3ZlciB7XG4gIGNvbG9yOiAjRkY3OTNGO1xufVxubGkuYWN0aXZlIHtcbiAgY29sb3I6ICNGRjREMDA7XG59IiwiJGNvbG9yLW9uZTogIzI4QzhGRlxuJGNvbG9yLXR3bzogIzI4QTJGRlxuJGNvbG9yLXRocmVlOiAjRkY3OTNGXG4kY29sb3ItZm91cjogI0ZGNEQwMFxuJGNvbG9yLWZpdmU6ICNFRTIyMDBcbiRjb2xvci1saWdodC1ncmV5OiBsaWdodGdyZXlcblxuJGNvbG9yLWJnLWNvZGU6ICMzYjNiM2JcbiRjb2xvci10ZXh0LWNvZGU6ICNjZGNkY2RcbiJdfQ== */"

/***/ }),

/***/ "../ng-documentation/src/lib/core/page/page.component.ts":
/*!***************************************************************!*\
  !*** ../ng-documentation/src/lib/core/page/page.component.ts ***!
  \***************************************************************/
/*! exports provided: PageComponent, PageSectionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSectionDirective", function() { return PageSectionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





/**
 * This component displays a standard page layout: a top bar with a title and links to sections.
 */
var PageComponent = /** @class */ (function () {
    function PageComponent(route, router) {
        this.route = route;
        this.router = router;
        /**
         * Remove the navigation bar.
         */
        this.noNavigation = false;
        /**
         * Do not use the URL query parameter.
         */
        this.disableRoutedNavigation = false;
        this.sections$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.firstSectionTitle$ = this.sections$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (s) { return s.length > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (s) { return s[0].title; }));
    }
    /**
     * @ignore
     */
    PageComponent.prototype.selectSection = function (section) {
        if (this.disableRoutedNavigation) {
            this.activeSection$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(section);
        }
        else {
            this.router.navigate(['.'], {
                queryParamsHandling: 'merge',
                queryParams: {
                    section: section.title
                },
                relativeTo: this.route,
            });
        }
    };
    /**
     * @ignore
     */
    PageComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.activeSection$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.section; })), this.sections$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var sectionParam = _a[0], sections = _a[1];
            if (_this.disableRoutedNavigation || !sectionParam) {
                return sections[0];
            }
            return sections.find(function (s) { return s.title === sectionParam; });
        }));
    };
    /**
     * @ignore
     */
    PageComponent.prototype.addSection = function (section) {
        this.sections$.next(this.sections$.value.concat([
            section
        ]));
    };
    /**
     * @ignore
     */
    PageComponent.prototype.removeSection = function (section) {
        this.sections$.next(this.sections$.value.filter(function (s) { return s.template !== section.template; }));
    };
    /**
     * @ignore
     */
    PageComponent.prototype.setTitle = function (section) {
        this.sections$.next(this.sections$.value.map(function (s) { return s.template === section.template ? section : s; }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageComponent.prototype, "noNavigation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageComponent.prototype, "disableRoutedNavigation", void 0);
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-page',
            template: __webpack_require__(/*! ./page.component.html */ "../ng-documentation/src/lib/core/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.sass */ "../ng-documentation/src/lib/core/page/page.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageComponent);
    return PageComponent;
}());

var PageSectionDirective = /** @class */ (function () {
    function PageSectionDirective(templateRef, page) {
        this.templateRef = templateRef;
        this.page = page;
    }
    /**
     * @ignore
     */
    PageSectionDirective.prototype.ngOnInit = function () {
        this.page.addSection({
            title: this.docsPageSection,
            template: this.templateRef
        });
    };
    /**
     * @ignore
     */
    PageSectionDirective.prototype.ngOnDestroy = function () {
        this.page.removeSection({
            title: this.docsPageSection,
            template: this.templateRef
        });
    };
    /**
     * @ignore
     */
    PageSectionDirective.prototype.ngOnChanges = function () {
        this.page.setTitle({
            title: this.docsPageSection,
            template: this.templateRef
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageSectionDirective.prototype, "docsPageSection", void 0);
    PageSectionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[docsPageSection]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            PageComponent])
    ], PageSectionDirective);
    return PageSectionDirective;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/core/tabs/tabs.component.html":
/*!*****************************************************************!*\
  !*** ../ng-documentation/src/lib/core/tabs/tabs.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol>\n  <li *ngFor=\"let tab of tabs\"\n    (click)=\"selectedTemplate = tab.template\"\n    [class.active]=\"tab.template === selectedTemplate\"\n  >{{tab.label}}</li>\n</ol>\n\n<div class=\"content\">\n  <ng-container *ngTemplateOutlet=\"selectedTemplate\"></ng-container>\n</div>"

/***/ }),

/***/ "../ng-documentation/src/lib/core/tabs/tabs.component.sass":
/*!*****************************************************************!*\
  !*** ../ng-documentation/src/lib/core/tabs/tabs.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  overflow: hidden;\n  margin-top: 20px;\n  background-color: #3b3b3b;\n}\n\nol {\n  margin: 0;\n  padding: 0;\n  border-bottom: #cdcdcd 2px solid;\n}\n\nli {\n  list-style: none;\n  color: #cdcdcd;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  padding: 0 15px;\n  line-height: 40px;\n  height: 40px;\n  border-bottom: 2px solid transparent;\n  transition: border-bottom 0.2s, color 0.2s;\n  margin-bottom: -2px;\n}\n\nli:hover:not(.active) {\n  border-bottom-color: #FF4D00;\n  color: #FF4D00;\n}\n\nli.active {\n  color: #FF4D00;\n  border-bottom-color: #FF4D00;\n}\n\n.content {\n  flex: 1 1;\n  overflow: auto;\n  background-color: whitesmoke;\n}\n\npre {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL3RhYnMvdGFicy5jb21wb25lbnQuc2FzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9zdHlsZXMvX3ZhcmlhYmxlcy5zYXNzIiwicHJvamVjdHMvbmctZG9jdW1lbnRhdGlvbi9zcmMvbGliL2NvcmUvdGFicy90YWJzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkNEYztBQ0FoQjs7QUZHQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUVBRjs7QUZFQTtFQUNFLGdCQUFBO0VBQ0EsY0NUZ0I7RURVaEIscUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FFQ0Y7O0FGQ0U7RUFDRSw0QkMzQlM7RUQ0QlQsY0M1QlM7QUM2QmI7O0FGQ0U7RUFDRSxjQy9CUztFRGdDVCw0QkNoQ1M7QUNpQ2I7O0FGQ0E7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FFRUY7O0FGQUE7RUFDRSxhQUFBO0FFR0YiLCJmaWxlIjoicHJvamVjdHMvbmctZG9jdW1lbnRhdGlvbi9zcmMvbGliL2NvcmUvdGFicy90YWJzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcydcblxuXFw6aG9zdFxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgaGVpZ2h0OiAzMDBweFxuICBvdmVyZmxvdzogaGlkZGVuXG4gIG1hcmdpbi10b3A6IDIwcHhcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnLWNvZGVcblxub2xcbiAgbWFyZ2luOiAwXG4gIHBhZGRpbmc6IDBcbiAgYm9yZGVyLWJvdHRvbTogJGNvbG9yLXRleHQtY29kZSAycHggc29saWRcblxubGlcbiAgbGlzdC1zdHlsZTogbm9uZVxuICBjb2xvcjogJGNvbG9yLXRleHQtY29kZVxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgY3Vyc29yOiBwb2ludGVyXG4gIHBhZGRpbmc6IDBcbiAgbWFyZ2luOiAwXG4gIHBhZGRpbmc6IDAgMTVweFxuICBsaW5lLWhlaWdodDogNDBweFxuICBoZWlnaHQ6IDQwcHhcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC4ycywgY29sb3IgMC4yc1xuICBtYXJnaW4tYm90dG9tOiAtMnB4XG5cbiAgJjpob3Zlcjpub3QoLmFjdGl2ZSlcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkY29sb3ItZm91clxuICAgIGNvbG9yOiAkY29sb3ItZm91clxuICAgIFxuICAmLmFjdGl2ZVxuICAgIGNvbG9yOiAkY29sb3ItZm91clxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci1mb3VyXG5cbi5jb250ZW50XG4gIGZsZXg6IDEgMVxuICBvdmVyZmxvdzogYXV0b1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlXG5cbnByZVxuICBtYXJnaW4tdG9wOiAwXG4iLCIkY29sb3Itb25lOiAjMjhDOEZGXG4kY29sb3ItdHdvOiAjMjhBMkZGXG4kY29sb3ItdGhyZWU6ICNGRjc5M0ZcbiRjb2xvci1mb3VyOiAjRkY0RDAwXG4kY29sb3ItZml2ZTogI0VFMjIwMFxuJGNvbG9yLWxpZ2h0LWdyZXk6IGxpZ2h0Z3JleVxuXG4kY29sb3ItYmctY29kZTogIzNiM2IzYlxuJGNvbG9yLXRleHQtY29kZTogI2NkY2RjZFxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNiO1xufVxuXG5vbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogI2NkY2RjZCAycHggc29saWQ7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICNjZGNkY2Q7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDAuMnMsIGNvbG9yIDAuMnM7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG59XG5saTpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjRkY0RDAwO1xuICBjb2xvcjogI0ZGNEQwMDtcbn1cbmxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjRkY0RDAwO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjRkY0RDAwO1xufVxuXG4uY29udGVudCB7XG4gIGZsZXg6IDEgMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbnByZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59Il19 */"

/***/ }),

/***/ "../ng-documentation/src/lib/core/tabs/tabs.component.ts":
/*!***************************************************************!*\
  !*** ../ng-documentation/src/lib/core/tabs/tabs.component.ts ***!
  \***************************************************************/
/*! exports provided: TabsComponent, TabDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return TabDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


/**
 * This component displays inner tabs. It provides basic styles and a convenient API to setup tabs.
 */
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = [];
    }
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "../ng-documentation/src/lib/core/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.sass */ "../ng-documentation/src/lib/core/tabs/tabs.component.sass")]
        })
    ], TabsComponent);
    return TabsComponent;
}());

var TabDirective = /** @class */ (function () {
    function TabDirective(tabs, template) {
        this.tabs = tabs;
        this.template = template;
    }
    TabDirective.prototype.ngOnInit = function () {
        this.tabs.tabs.push({
            label: this.docsTab,
            template: this.template
        });
        if (!this.tabs.selectedTemplate) {
            this.tabs.selectedTemplate = this.template;
        }
    };
    TabDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        this.tabs.tabs = this.tabs.tabs.filter(function (t) { return t.template !== _this.template; });
        if (this.tabs.selectedTemplate === this.template && this.tabs.tabs.length > 0) {
            this.tabs.selectedTemplate = this.tabs.tabs[0].template;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TabDirective.prototype, "docsTab", void 0);
    TabDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[docsTab]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TabsComponent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], TabDirective);
    return TabDirective;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/default-welcome/default-welcome.component.html":
/*!**********************************************************************************!*\
  !*** ../ng-documentation/src/lib/default-welcome/default-welcome.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Default Welcome Page</h1>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Documentation & Demo</h2>\n<p>This documentation is a combination of automated comment extraction from your code and of component examples.\n</p>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Navigation</h2>\n<p>Use the menu on the left to navigate throught components.</p>\n\n"

/***/ }),

/***/ "../ng-documentation/src/lib/default-welcome/default-welcome.component.sass":
/*!**********************************************************************************!*\
  !*** ../ng-documentation/src/lib/default-welcome/default-welcome.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9kZWZhdWx0LXdlbGNvbWUvZGVmYXVsdC13ZWxjb21lLmNvbXBvbmVudC5zYXNzIiwicHJvamVjdHMvbmctZG9jdW1lbnRhdGlvbi9zcmMvbGliL2RlZmF1bHQtd2VsY29tZS9kZWZhdWx0LXdlbGNvbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9kZWZhdWx0LXdlbGNvbWUvZGVmYXVsdC13ZWxjb21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXFw6aG9zdFxuICBkaXNwbGF5OiBibG9ja1xuICBwYWRkaW5nOiAxNXB4XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "../ng-documentation/src/lib/default-welcome/default-welcome.component.ts":
/*!********************************************************************************!*\
  !*** ../ng-documentation/src/lib/default-welcome/default-welcome.component.ts ***!
  \********************************************************************************/
/*! exports provided: DefaultWelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultWelcomeComponent", function() { return DefaultWelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var DefaultWelcomeComponent = /** @class */ (function () {
    function DefaultWelcomeComponent() {
    }
    DefaultWelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-default-welcome',
            template: __webpack_require__(/*! ./default-welcome.component.html */ "../ng-documentation/src/lib/default-welcome/default-welcome.component.html"),
            styles: [__webpack_require__(/*! ./default-welcome.component.sass */ "../ng-documentation/src/lib/default-welcome/default-welcome.component.sass")]
        })
    ], DefaultWelcomeComponent);
    return DefaultWelcomeComponent;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/docs.module.ts":
/*!**************************************************!*\
  !*** ../ng-documentation/src/lib/docs.module.ts ***!
  \**************************************************/
/*! exports provided: DocsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsModule", function() { return DocsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "../ng-documentation/src/lib/core/core.module.ts");
/* harmony import */ var _default_welcome_default_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default-welcome/default-welcome.component */ "../ng-documentation/src/lib/default-welcome/default-welcome.component.ts");
/* harmony import */ var _docs_docs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./docs/docs.component */ "../ng-documentation/src/lib/docs/docs.component.ts");
/* harmony import */ var _routes_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes.token */ "../ng-documentation/src/lib/routes.token.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "../ng-documentation/src/lib/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");










var DocsModule = /** @class */ (function () {
    function DocsModule() {
    }
    DocsModule_1 = DocsModule;
    DocsModule.configure = function (configuration) {
        var sortedComponents = Object.keys(configuration.componentPages).map(function (path) { return ({
            path: path,
            component: configuration.componentPages[path].component,
            title: configuration.componentPages[path].title
        }); });
        sortedComponents.sort(function (a, b) { return a.title.localeCompare(b.title); });
        return {
            ngModule: DocsModule_1,
            providers: [
                { provide: _routes_token__WEBPACK_IMPORTED_MODULE_7__["COMPONENT_PAGES"], useValue: sortedComponents },
                Object(_angular_router__WEBPACK_IMPORTED_MODULE_3__["provideRoutes"])(sortedComponents.concat([
                    { path: '', component: configuration.welcomePage || _default_welcome_default_welcome_component__WEBPACK_IMPORTED_MODULE_5__["DefaultWelcomeComponent"] }
                ]))
            ]
        };
    };
    var DocsModule_1;
    DocsModule = DocsModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _docs_docs_component__WEBPACK_IMPORTED_MODULE_6__["DocsComponent"],
                _default_welcome_default_welcome_component__WEBPACK_IMPORTED_MODULE_5__["DefaultWelcomeComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([]),
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            exports: [
                _docs_docs_component__WEBPACK_IMPORTED_MODULE_6__["DocsComponent"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], DocsModule);
    return DocsModule;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/docs/docs.component.html":
/*!************************************************************!*\
  !*** ../ng-documentation/src/lib/docs/docs.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\n  <docs-menu>\n    <ng-content></ng-content>\n  </docs-menu>\n</aside>\n\n<main>\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "../ng-documentation/src/lib/docs/docs.component.sass":
/*!************************************************************!*\
  !*** ../ng-documentation/src/lib/docs/docs.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n}\n\naside {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 200px;\n  overflow: auto;\n  background: white;\n  color: black;\n  padding: 15px 0px;\n  border-right: 1px solid grey;\n  box-shadow: 2px 0px 2px 1px lightgray;\n}\n\nmain {\n  position: absolute;\n  top: 0;\n  left: 200px;\n  height: 100%;\n  right: 0;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9kb2NzL2RvY3MuY29tcG9uZW50LnNhc3MiLCJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvZG9jcy9kb2NzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNERjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFQWTtFQVFaLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7QUNGRjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBbEJZO0VBbUJaLFlBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQ0RGIiwiZmlsZSI6InByb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9kb2NzL2RvY3MuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zdHlsZXMvX3ZhcmlhYmxlcydcblxuXFw6aG9zdFxuICBkaXNwbGF5OiBibG9ja1xuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgd2lkdGg6IDEwMHZ3XG4gIGhlaWdodDogMTAwdmhcblxuJHdpZHRoX2FzaWRlOiAyMDBweFxuXG5hc2lkZVxuICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgdG9wOiAwXG4gIGxlZnQ6IDBcbiAgaGVpZ2h0OiAxMDAlXG4gIHdpZHRoOiAkd2lkdGhfYXNpZGVcbiAgb3ZlcmZsb3c6IGF1dG9cbiAgYmFja2dyb3VuZDogd2hpdGVcbiAgY29sb3I6IGJsYWNrXG4gIHBhZGRpbmc6IDE1cHggMHB4XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXlcbiAgYm94LXNoYWRvdzogMnB4IDBweCAycHggMXB4IGxpZ2h0Z3JheVxuXG5tYWluXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICB0b3A6IDBcbiAgbGVmdDogJHdpZHRoX2FzaWRlXG4gIGhlaWdodDogMTAwJVxuICByaWdodDogMFxuICBvdmVyZmxvdzogYXV0byIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5hc2lkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xuICBib3gtc2hhZG93OiAycHggMHB4IDJweCAxcHggbGlnaHRncmF5O1xufVxuXG5tYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDIwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "../ng-documentation/src/lib/docs/docs.component.ts":
/*!**********************************************************!*\
  !*** ../ng-documentation/src/lib/docs/docs.component.ts ***!
  \**********************************************************/
/*! exports provided: DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponent", function() { return DocsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var DocsComponent = /** @class */ (function () {
    function DocsComponent(route) {
        this.route = route;
    }
    Object.defineProperty(DocsComponent.prototype, "search$", {
        get: function () {
            return this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (p) { return p.search || ''; }));
        },
        enumerable: true,
        configurable: true
    });
    DocsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-app',
            template: __webpack_require__(/*! ./docs.component.html */ "../ng-documentation/src/lib/docs/docs.component.html"),
            styles: [__webpack_require__(/*! ./docs.component.sass */ "../ng-documentation/src/lib/docs/docs.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DocsComponent);
    return DocsComponent;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/documentation.token.ts":
/*!**********************************************************!*\
  !*** ../ng-documentation/src/lib/documentation.token.ts ***!
  \**********************************************************/
/*! exports provided: DOCUMENTATION_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENTATION_PATH", function() { return DOCUMENTATION_PATH; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var DOCUMENTATION_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DOCUMENTATION_PATH');


/***/ }),

/***/ "../ng-documentation/src/lib/menu/menu.component.html":
/*!************************************************************!*\
  !*** ../ng-documentation/src/lib/menu/menu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"brand-area\">\n    <ng-container [ngTemplateOutlet]=\"brandHeaderTemplate\"></ng-container>\n  </div>\n    \n  <ul class=\"ng-documentation__menu-links links\">\n    <li><a routerLink=\"/\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">Get started</a></li>\n  </ul>\n  <input type=\"text\"\n    class=\"search\"\n    [class.active]=\"search$ | async\"\n    [class.no-result]=\"(pages$ | async).length === 0\"\n    [ngModel]=\"search$ | async\"\n    (ngModelChange)=\"setSearch($event)\"\n    placeholder=\"Search for a component\"\n    autofocus\n    autocomplete=\"off\"\n  />\n  <div class=\"search-helper\"\n    [class.hidden]=\"!(search$ | async)\"\n    [class.no-result]=\"(pages$ | async).length === 0\">\n    <ng-container *ngIf=\"search$ | async\">\n      {{(pages$ | async).length}} <ng-container *ngIf=\"(pages$ | async).length > 1\">results</ng-container><ng-container *ngIf=\"(pages$ | async).length === 1\">result</ng-container> found\n    </ng-container>\n  </div>\n</div>\n<ul class=\"ng-documentation__menu-links links\">\n  <ng-container *ngIf=\"pages$ | async as pages; else noResults\">\n    <li *ngFor=\"let page of pages\">\n      <a\n        [routerLink]=\"page.path\"\n        routerLinkActive=\"active-link\"\n      >{{page.title}}</a>\n    </li>\n  </ng-container>\n</ul>\n<ul class=\"ng-documentation__menu-links ng-documentation__menu-extra-links\">\n  <ng-content></ng-content>\n</ul>\n\n<ng-template #noResults>\n  No result for this search!\n</ng-template>"

/***/ }),

/***/ "../ng-documentation/src/lib/menu/menu.component.sass":
/*!************************************************************!*\
  !*** ../ng-documentation/src/lib/menu/menu.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand-area {\n  padding: 13.5px 15px;\n}\n\n.search {\n  height: 40px;\n  line-height: 14px;\n  font-size: 14px;\n  padding: 13.5px 15px;\n  width: 100%;\n  border-radius: 0;\n  color: #28A2FF;\n  outline: none;\n  border: none;\n  border-top: lightgrey 1px solid;\n  border-bottom: lightgrey 1px solid;\n}\n\n.search.no-result {\n  border-color: #EE2200;\n  color: #EE2200;\n}\n\n.search-helper {\n  width: 100%;\n  padding: 0 15px;\n  line-height: 20px;\n  height: 20px;\n  background-color: #28A2FF;\n  color: white;\n  font-size: 1rem;\n  transition: opacity 0.2s;\n  opacity: 1;\n}\n\n.search-helper.no-result {\n  background-color: #EE2200;\n}\n\n.search-helper.hidden {\n  opacity: 0;\n}\n\n:host {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  flex-direction: column;\n}\n\n.links {\n  flex: 1 1;\n  overflow: auto;\n}\n\n.extra-links, .header {\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9tZW51L21lbnUuY29tcG9uZW50LnNhc3MiLCJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvbWVudS9tZW51LmNvbXBvbmVudC5zYXNzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2tldmlubWVyY2t4L25nLWRvY3VtZW50YXRpb24vcHJvamVjdHMvbmctZG9jdW1lbnRhdGlvbi9zcmMvbGliL3N0eWxlcy9fdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxvQkFBQTtBQ0hGOztBREtBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0ViVTtFRmNWLGFBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtBQ0ZGOztBRElFO0VBQ0UscUJFakJTO0VGa0JULGNFbEJTO0FEZ0JiOztBRElBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkU1QlU7RUY2QlYsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUNERjs7QURHRTtFQUNFLHlCRWhDUztBRCtCYjs7QURHRTtFQUNFLFVBQUE7QUNESjs7QURHQztFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0FGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvbWVudS9tZW51LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc3R5bGVzL3ZhcmlhYmxlcydcblxuJHNlYXJjaC1jb2xvcjogJGNvbG9yLXR3b1xuXG4uYnJhbmQtYXJlYVxuICBwYWRkaW5nOiAxMy41cHggMTVweFxuXG4uc2VhcmNoXG4gIGhlaWdodDogNDBweFxuICBsaW5lLWhlaWdodDogMTRweFxuICBmb250LXNpemU6IDE0cHhcbiAgcGFkZGluZzogMTMuNXB4IDE1cHhcbiAgd2lkdGg6IDEwMCVcbiAgYm9yZGVyLXJhZGl1czogMFxuICBjb2xvcjogJHNlYXJjaC1jb2xvclxuICBvdXRsaW5lOiBub25lXG4gIGJvcmRlcjogbm9uZVxuICBib3JkZXItdG9wOiAkY29sb3ItbGlnaHQtZ3JleSAxcHggc29saWRcbiAgYm9yZGVyLWJvdHRvbTogJGNvbG9yLWxpZ2h0LWdyZXkgMXB4IHNvbGlkXG5cbiAgJi5uby1yZXN1bHRcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1maXZlXG4gICAgY29sb3I6ICRjb2xvci1maXZlXG5cbi5zZWFyY2gtaGVscGVyXG4gIHdpZHRoOiAxMDAlXG4gIHBhZGRpbmc6IDAgMTVweFxuICBsaW5lLWhlaWdodDogMjBweFxuICBoZWlnaHQ6IDIwcHhcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlYXJjaC1jb2xvclxuICBjb2xvcjogd2hpdGVcbiAgZm9udC1zaXplOiAxcmVtXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yc1xuICBvcGFjaXR5OiAxXG5cbiAgJi5uby1yZXN1bHRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZml2ZVxuXG4gICYuaGlkZGVuXG4gICAgb3BhY2l0eTogMFxuXG5cXDpob3N0XG4gIGRpc3BsYXk6IGZsZXhcbiAgaGVpZ2h0OiAxMDAlXG4gIG92ZXJmbG93OiBoaWRkZW5cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuXG4ubGlua3NcbiAgZmxleDogMSAxXG4gIG92ZXJmbG93OiBhdXRvXG5cbi5leHRyYS1saW5rcywgLmhlYWRlclxuICBmbGV4OiAwIDAgYXV0b1xuIiwiLmJyYW5kLWFyZWEge1xuICBwYWRkaW5nOiAxMy41cHggMTVweDtcbn1cblxuLnNlYXJjaCB7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTMuNXB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogIzI4QTJGRjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiBsaWdodGdyZXkgMXB4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiBsaWdodGdyZXkgMXB4IHNvbGlkO1xufVxuLnNlYXJjaC5uby1yZXN1bHQge1xuICBib3JkZXItY29sb3I6ICNFRTIyMDA7XG4gIGNvbG9yOiAjRUUyMjAwO1xufVxuXG4uc2VhcmNoLWhlbHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOEEyRkY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2VhcmNoLWhlbHBlci5uby1yZXN1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUUyMjAwO1xufVxuLnNlYXJjaC1oZWxwZXIuaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5saW5rcyB7XG4gIGZsZXg6IDEgMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5leHRyYS1saW5rcywgLmhlYWRlciB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufSIsIiRjb2xvci1vbmU6ICMyOEM4RkZcbiRjb2xvci10d286ICMyOEEyRkZcbiRjb2xvci10aHJlZTogI0ZGNzkzRlxuJGNvbG9yLWZvdXI6ICNGRjREMDBcbiRjb2xvci1maXZlOiAjRUUyMjAwXG4kY29sb3ItbGlnaHQtZ3JleTogbGlnaHRncmV5XG5cbiRjb2xvci1iZy1jb2RlOiAjM2IzYjNiXG4kY29sb3ItdGV4dC1jb2RlOiAjY2RjZGNkXG4iXX0= */"

/***/ }),

/***/ "../ng-documentation/src/lib/menu/menu.component.ts":
/*!**********************************************************!*\
  !*** ../ng-documentation/src/lib/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _docs_docs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../docs/docs.component */ "../ng-documentation/src/lib/docs/docs.component.ts");
/* harmony import */ var _routes_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes.token */ "../ng-documentation/src/lib/routes.token.ts");







var MenuComponent = /** @class */ (function () {
    function MenuComponent(componentPages, docs, router) {
        this.componentPages = componentPages;
        this.docs = docs;
        this.router = router;
        this.pages$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.componentPages), this.search$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var pages = _a[0], search = _a[1];
            var normalized = (search || '').toLowerCase();
            return pages.filter(function (p) { return p.title.toLowerCase().indexOf(normalized) > -1; });
        }));
    }
    Object.defineProperty(MenuComponent.prototype, "brandHeaderTemplate", {
        get: function () {
            return this.docs.brandHeaderTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuComponent.prototype, "search$", {
        get: function () {
            return this.docs.search$;
        },
        enumerable: true,
        configurable: true
    });
    MenuComponent.prototype.setSearch = function (v) {
        this.router.navigate([], {
            queryParams: {
                search: v
            },
            queryParamsHandling: 'merge'
        });
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "../ng-documentation/src/lib/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.sass */ "../ng-documentation/src/lib/menu/menu.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_routes_token__WEBPACK_IMPORTED_MODULE_6__["COMPONENT_PAGES"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array, _docs_docs_component__WEBPACK_IMPORTED_MODULE_5__["DocsComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../ng-documentation/src/lib/routes.token.ts":
/*!***************************************************!*\
  !*** ../ng-documentation/src/lib/routes.token.ts ***!
  \***************************************************/
/*! exports provided: COMPONENT_PAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_PAGES", function() { return COMPONENT_PAGES; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var COMPONENT_PAGES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('COMPONENT_PAGES');


/***/ }),

/***/ "../ng-documentation/src/public-api.ts":
/*!*********************************************!*\
  !*** ../ng-documentation/src/public-api.ts ***!
  \*********************************************/
/*! exports provided: DocsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_docs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/docs.module */ "../ng-documentation/src/lib/docs.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocsModule", function() { return _lib_docs_module__WEBPACK_IMPORTED_MODULE_0__["DocsModule"]; });

/*
 * Public API Surface of docs
 */



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-app>\n  <ng-template docsBrandHeader>\n    <h3 class=\"brand-area\">NG Documentation</h3>\n  </ng-template>\n  <li><a href=\"https://github.com/kevinmerckx/ng-documentation\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i> Github</a></li>\n</docs-app>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand-area {\n  padding: 0 15px 5px 15px;\n  margin: 0 -15px;\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL2RvY3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyYW5kLWFyZWFcbiAgcGFkZGluZzogMCAxNXB4IDVweCAxNXB4XG4gIG1hcmdpbjogMCAtMTVweFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2siLCIuYnJhbmQtYXJlYSB7XG4gIHBhZGRpbmc6IDAgMTVweCA1cHggMTVweDtcbiAgbWFyZ2luOiAwIC0xNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'docs';
        this.faHandshake = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHandshake"];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var projects_ng_documentation_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/ng-documentation/src/public-api */ "../ng-documentation/src/public-api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _features_code_line_code_line_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/code-line/code-line.module */ "./src/app/features/code-line/code-line.module.ts");
/* harmony import */ var _features_code_line_code_line_code_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/code-line/code-line/code-line.component */ "./src/app/features/code-line/code-line/code-line.component.ts");
/* harmony import */ var _features_code_code_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/code/code.module */ "./src/app/features/code/code.module.ts");
/* harmony import */ var _features_code_code_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/code/code/code.component */ "./src/app/features/code/code/code.component.ts");
/* harmony import */ var _features_component_api_component_api_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/component-api/component-api.module */ "./src/app/features/component-api/component-api.module.ts");
/* harmony import */ var _features_component_api_component_api_component_api_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/component-api/component-api/component-api.component */ "./src/app/features/component-api/component-api/component-api.component.ts");
/* harmony import */ var _features_component_documentation_component_documentation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/component-documentation/component-documentation.module */ "./src/app/features/component-documentation/component-documentation.module.ts");
/* harmony import */ var _features_component_documentation_component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/component-documentation/component-documentation/component-documentation.component */ "./src/app/features/component-documentation/component-documentation/component-documentation.component.ts");
/* harmony import */ var _features_home_home_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/home/home.module */ "./src/app/features/home/home.module.ts");
/* harmony import */ var _features_home_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/home/home/home.component */ "./src/app/features/home/home/home.component.ts");
/* harmony import */ var _features_page_page_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./features/page/page.module */ "./src/app/features/page/page.module.ts");
/* harmony import */ var _features_page_page_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./features/page/page/page.component */ "./src/app/features/page/page/page.component.ts");
/* harmony import */ var _features_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./features/tabs/tabs.module */ "./src/app/features/tabs/tabs.module.ts");
/* harmony import */ var _features_tabs_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./features/tabs/tabs/tabs.component */ "./src/app/features/tabs/tabs/tabs.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _features_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_18__["TabsModule"],
                _features_code_code_module__WEBPACK_IMPORTED_MODULE_8__["CodeModule"],
                _features_code_line_code_line_module__WEBPACK_IMPORTED_MODULE_6__["CodeLineModule"],
                _features_home_home_module__WEBPACK_IMPORTED_MODULE_14__["HomeModule"],
                _features_component_api_component_api_module__WEBPACK_IMPORTED_MODULE_10__["ComponentApiModule"],
                _features_component_documentation_component_documentation_module__WEBPACK_IMPORTED_MODULE_12__["ComponentDocumentationModule"],
                projects_ng_documentation_src_public_api__WEBPACK_IMPORTED_MODULE_4__["DocsModule"],
                _features_page_page_module__WEBPACK_IMPORTED_MODULE_16__["PageModule"],
                projects_ng_documentation_src_public_api__WEBPACK_IMPORTED_MODULE_4__["DocsModule"].configure({
                    welcomePage: _features_home_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                    componentPages: {
                        tabs: {
                            component: _features_tabs_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_19__["TabsComponent"],
                            title: 'Tabs'
                        },
                        code: {
                            component: _features_code_code_code_component__WEBPACK_IMPORTED_MODULE_9__["CodeComponent"],
                            title: 'Code'
                        },
                        codeLine: {
                            component: _features_code_line_code_line_code_line_component__WEBPACK_IMPORTED_MODULE_7__["CodeLineComponent"],
                            title: 'Code Line'
                        },
                        componentApi: {
                            component: _features_component_api_component_api_component_api_component__WEBPACK_IMPORTED_MODULE_11__["ComponentApiComponent"],
                            title: 'Component API'
                        },
                        componentDocumentation: {
                            component: _features_component_documentation_component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_13__["ComponentDocumentationComponent"],
                            title: 'Component Documentation'
                        },
                        page: {
                            component: _features_page_page_page_component__WEBPACK_IMPORTED_MODULE_17__["PageComponent"],
                            title: 'Page'
                        }
                    }
                })
            ],
            providers: [{
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/features/code-line/code-line-example1/code-line-example1.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/code-line/code-line-example1/code-line-example1.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-code-line>console.log('Hello world!');</docs-code-line>"

/***/ }),

/***/ "./src/app/features/code-line/code-line-example1/code-line-example1.component.sass":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/code-line/code-line-example1/code-line-example1.component.sass ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvY29kZS1saW5lL2NvZGUtbGluZS1leGFtcGxlMS9jb2RlLWxpbmUtZXhhbXBsZTEuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/code-line/code-line-example1/code-line-example1.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/code-line/code-line-example1/code-line-example1.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CodeLineExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLineExample1Component", function() { return CodeLineExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CodeLineExample1Component = /** @class */ (function () {
    function CodeLineExample1Component() {
    }
    CodeLineExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code-line-example1',
            template: __webpack_require__(/*! ./code-line-example1.component.html */ "./src/app/features/code-line/code-line-example1/code-line-example1.component.html"),
            styles: [__webpack_require__(/*! ./code-line-example1.component.sass */ "./src/app/features/code-line/code-line-example1/code-line-example1.component.sass")]
        })
    ], CodeLineExample1Component);
    return CodeLineExample1Component;
}());



/***/ }),

/***/ "./src/app/features/code-line/code-line.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/code-line/code-line.module.ts ***!
  \********************************************************/
/*! exports provided: CodeLineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLineModule", function() { return CodeLineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _code_line_example1_code_line_example1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-line-example1/code-line-example1.component */ "./src/app/features/code-line/code-line-example1/code-line-example1.component.ts");
/* harmony import */ var _code_line_code_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-line/code-line.component */ "./src/app/features/code-line/code-line/code-line.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var CodeLineModule = /** @class */ (function () {
    function CodeLineModule() {
    }
    CodeLineModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _code_line_example1_code_line_example1_component__WEBPACK_IMPORTED_MODULE_3__["CodeLineExample1Component"],
                _code_line_code_line_component__WEBPACK_IMPORTED_MODULE_4__["CodeLineComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], CodeLineModule);
    return CodeLineModule;
}());



/***/ }),

/***/ "./src/app/features/code-line/code-line/code-line.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/features/code-line/code-line/code-line.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Code Line'\"\n  [componentId]=\"'CodeLineComponent'\"\n  [componentType]=\"'components'\"\n>\n  <ng-template docsComponentExample=\"Display one line of code\">\n    <app-code-line-example1></app-code-line-example1>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"code-line-example1.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/features/code-line/code-line/code-line.component.sass":
/*!***********************************************************************!*\
  !*** ./src/app/features/code-line/code-line/code-line.component.sass ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvY29kZS1saW5lL2NvZGUtbGluZS9jb2RlLWxpbmUuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/code-line/code-line/code-line.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/code-line/code-line/code-line.component.ts ***!
  \*********************************************************************/
/*! exports provided: CodeLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLineComponent", function() { return CodeLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CodeLineComponent = /** @class */ (function () {
    function CodeLineComponent() {
    }
    CodeLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code-line',
            template: __webpack_require__(/*! ./code-line.component.html */ "./src/app/features/code-line/code-line/code-line.component.html"),
            styles: [__webpack_require__(/*! ./code-line.component.sass */ "./src/app/features/code-line/code-line/code-line.component.sass")]
        })
    ], CodeLineComponent);
    return CodeLineComponent;
}());



/***/ }),

/***/ "./src/app/features/code/code-example1/code-example1.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/features/code/code-example1/code-example1.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-code path=\"code-example1.component.html\"></docs-code>"

/***/ }),

/***/ "./src/app/features/code/code-example1/code-example1.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/features/code/code-example1/code-example1.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvY29kZS9jb2RlLWV4YW1wbGUxL2NvZGUtZXhhbXBsZTEuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/code/code-example1/code-example1.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/code/code-example1/code-example1.component.ts ***!
  \************************************************************************/
/*! exports provided: CodeExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeExample1Component", function() { return CodeExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CodeExample1Component = /** @class */ (function () {
    function CodeExample1Component() {
    }
    CodeExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code-example1',
            template: __webpack_require__(/*! ./code-example1.component.html */ "./src/app/features/code/code-example1/code-example1.component.html"),
            styles: [__webpack_require__(/*! ./code-example1.component.sass */ "./src/app/features/code/code-example1/code-example1.component.sass")]
        })
    ], CodeExample1Component);
    return CodeExample1Component;
}());



/***/ }),

/***/ "./src/app/features/code/code-example2/code-example2.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/features/code/code-example2/code-example2.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-code>Some code here</docs-code>"

/***/ }),

/***/ "./src/app/features/code/code-example2/code-example2.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/features/code/code-example2/code-example2.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvY29kZS9jb2RlLWV4YW1wbGUyL2NvZGUtZXhhbXBsZTIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/code/code-example2/code-example2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/code/code-example2/code-example2.component.ts ***!
  \************************************************************************/
/*! exports provided: CodeExample2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeExample2Component", function() { return CodeExample2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CodeExample2Component = /** @class */ (function () {
    function CodeExample2Component() {
    }
    CodeExample2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code-example2',
            template: __webpack_require__(/*! ./code-example2.component.html */ "./src/app/features/code/code-example2/code-example2.component.html"),
            styles: [__webpack_require__(/*! ./code-example2.component.sass */ "./src/app/features/code/code-example2/code-example2.component.sass")]
        })
    ], CodeExample2Component);
    return CodeExample2Component;
}());



/***/ }),

/***/ "./src/app/features/code/code.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/code/code.module.ts ***!
  \**********************************************/
/*! exports provided: CodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeModule", function() { return CodeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code/code.component */ "./src/app/features/code/code/code.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _code_example1_code_example1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-example1/code-example1.component */ "./src/app/features/code/code-example1/code-example1.component.ts");
/* harmony import */ var _code_example2_code_example2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-example2/code-example2.component */ "./src/app/features/code/code-example2/code-example2.component.ts");







var CodeModule = /** @class */ (function () {
    function CodeModule() {
    }
    CodeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_code_code_component__WEBPACK_IMPORTED_MODULE_3__["CodeComponent"], _code_example1_code_example1_component__WEBPACK_IMPORTED_MODULE_5__["CodeExample1Component"], _code_example2_code_example2_component__WEBPACK_IMPORTED_MODULE_6__["CodeExample2Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], CodeModule);
    return CodeModule;
}());



/***/ }),

/***/ "./src/app/features/code/code/code.component.html":
/*!********************************************************!*\
  !*** ./src/app/features/code/code/code.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Code'\"\n  [componentId]=\"'CodeComponent'\"\n  [componentType]=\"'components'\"\n>\n  <ng-template docsComponentExample=\"Display Code from a file\">\n    <app-code-example1></app-code-example1>\n  </ng-template>\n\n  <ng-template docsComponentExample=\"Display Code from the template\">\n    <app-code-example2></app-code-example2>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"code-example2.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/features/code/code/code.component.sass":
/*!********************************************************!*\
  !*** ./src/app/features/code/code/code.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvY29kZS9jb2RlL2NvZGUuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/code/code/code.component.ts":
/*!******************************************************!*\
  !*** ./src/app/features/code/code/code.component.ts ***!
  \******************************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var CodeComponent = /** @class */ (function () {
    function CodeComponent() {
    }
    CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code',
            template: __webpack_require__(/*! ./code.component.html */ "./src/app/features/code/code/code.component.html"),
            styles: [__webpack_require__(/*! ./code.component.sass */ "./src/app/features/code/code/code.component.sass")]
        })
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "./src/app/features/component-api/component-api-example1/component-api-example1.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/component-api/component-api-example1/component-api-example1.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-api\n  [componentId]=\"'ProfileComponent'\"\n  [componentType]=\"'components'\"\n></docs-component-api>\n"

/***/ }),

/***/ "./src/app/features/component-api/component-api-example1/component-api-example1.component.sass":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/component-api/component-api-example1/component-api-example1.component.sass ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50LWFwaS9jb21wb25lbnQtYXBpLWV4YW1wbGUxL2NvbXBvbmVudC1hcGktZXhhbXBsZTEuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/component-api/component-api-example1/component-api-example1.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/component-api/component-api-example1/component-api-example1.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ComponentApiExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentApiExample1Component", function() { return ComponentApiExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ng_documentation_src_lib_core_documentation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/ng-documentation/src/lib/core/documentation.service */ "../ng-documentation/src/lib/core/documentation.service.ts");
/* harmony import */ var projects_ng_documentation_src_lib_documentation_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ng-documentation/src/lib/documentation.token */ "../ng-documentation/src/lib/documentation.token.ts");




var ComponentApiExample1Component = /** @class */ (function () {
    function ComponentApiExample1Component() {
    }
    ComponentApiExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-component-api-example1',
            template: __webpack_require__(/*! ./component-api-example1.component.html */ "./src/app/features/component-api/component-api-example1/component-api-example1.component.html"),
            providers: [
                projects_ng_documentation_src_lib_core_documentation_service__WEBPACK_IMPORTED_MODULE_2__["DocumentationService"],
                {
                    provide: projects_ng_documentation_src_lib_documentation_token__WEBPACK_IMPORTED_MODULE_3__["DOCUMENTATION_PATH"],
                    useValue: 'assets/internal-documentation/documentation.json'
                }
            ],
            styles: [__webpack_require__(/*! ./component-api-example1.component.sass */ "./src/app/features/component-api/component-api-example1/component-api-example1.component.sass")]
        })
    ], ComponentApiExample1Component);
    return ComponentApiExample1Component;
}());



/***/ }),

/***/ "./src/app/features/component-api/component-api.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/component-api/component-api.module.ts ***!
  \****************************************************************/
/*! exports provided: ComponentApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentApiModule", function() { return ComponentApiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _component_api_example1_component_api_example1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-api-example1/component-api-example1.component */ "./src/app/features/component-api/component-api-example1/component-api-example1.component.ts");
/* harmony import */ var _component_api_component_api_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-api/component-api.component */ "./src/app/features/component-api/component-api/component-api.component.ts");






var ComponentApiModule = /** @class */ (function () {
    function ComponentApiModule() {
    }
    ComponentApiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_component_api_component_api_component__WEBPACK_IMPORTED_MODULE_5__["ComponentApiComponent"], _component_api_example1_component_api_example1_component__WEBPACK_IMPORTED_MODULE_4__["ComponentApiExample1Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ]
        })
    ], ComponentApiModule);
    return ComponentApiModule;
}());



/***/ }),

/***/ "./src/app/features/component-api/component-api/component-api.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/features/component-api/component-api/component-api.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Component API'\"\n  [componentId]=\"'ComponentApiComponent'\"\n  [componentType]=\"'components'\"\n>\n  <ng-template docsComponentExample=\"Display a component's API\">\n    <docs-tabs>\n      <app-component-api-example1 *docsTab=\"'Example'\"></app-component-api-example1>\n      <docs-code *docsTab=\"'HTML'\" path=\"component-api-example1.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/features/component-api/component-api/component-api.component.sass":
/*!***********************************************************************************!*\
  !*** ./src/app/features/component-api/component-api/component-api.component.sass ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50LWFwaS9jb21wb25lbnQtYXBpL2NvbXBvbmVudC1hcGkuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/component-api/component-api/component-api.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/component-api/component-api/component-api.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ComponentApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentApiComponent", function() { return ComponentApiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ComponentApiComponent = /** @class */ (function () {
    function ComponentApiComponent() {
    }
    ComponentApiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-component-api',
            template: __webpack_require__(/*! ./component-api.component.html */ "./src/app/features/component-api/component-api/component-api.component.html"),
            styles: [__webpack_require__(/*! ./component-api.component.sass */ "./src/app/features/component-api/component-api/component-api.component.sass")]
        })
    ], ComponentApiComponent);
    return ComponentApiComponent;
}());



/***/ }),

/***/ "./src/app/features/component-documentation/component-documentation-example1/component-documentation-example1.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/features/component-documentation/component-documentation-example1/component-documentation-example1.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Profile'\"\n  [componentId]=\"'ProfileComponent'\"\n  [componentType]=\"'components'\"\n  [disableRoutedNavigation]=\"true\"\n>\n  <ng-template docsComponentExample=\"Basic Usage\">\n    <app-profile [profileId]=\"'a76Hhjh6'\" [category]=\"'Admin'\"></app-profile>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/features/component-documentation/component-documentation-example1/component-documentation-example1.component.sass":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/features/component-documentation/component-documentation-example1/component-documentation-example1.component.sass ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50LWRvY3VtZW50YXRpb24vY29tcG9uZW50LWRvY3VtZW50YXRpb24tZXhhbXBsZTEvY29tcG9uZW50LWRvY3VtZW50YXRpb24tZXhhbXBsZTEuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/component-documentation/component-documentation-example1/component-documentation-example1.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/features/component-documentation/component-documentation-example1/component-documentation-example1.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ComponentDocumentationExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDocumentationExample1Component", function() { return ComponentDocumentationExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ng_documentation_src_lib_core_documentation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/ng-documentation/src/lib/core/documentation.service */ "../ng-documentation/src/lib/core/documentation.service.ts");
/* harmony import */ var projects_ng_documentation_src_lib_documentation_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ng-documentation/src/lib/documentation.token */ "../ng-documentation/src/lib/documentation.token.ts");




var ComponentDocumentationExample1Component = /** @class */ (function () {
    function ComponentDocumentationExample1Component() {
    }
    ComponentDocumentationExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-component-documentation-example1',
            template: __webpack_require__(/*! ./component-documentation-example1.component.html */ "./src/app/features/component-documentation/component-documentation-example1/component-documentation-example1.component.html"),
            providers: [
                projects_ng_documentation_src_lib_core_documentation_service__WEBPACK_IMPORTED_MODULE_2__["DocumentationService"],
                {
                    provide: projects_ng_documentation_src_lib_documentation_token__WEBPACK_IMPORTED_MODULE_3__["DOCUMENTATION_PATH"],
                    useValue: 'assets/internal-documentation/documentation.json'
                }
            ],
            styles: [__webpack_require__(/*! ./component-documentation-example1.component.sass */ "./src/app/features/component-documentation/component-documentation-example1/component-documentation-example1.component.sass")]
        })
    ], ComponentDocumentationExample1Component);
    return ComponentDocumentationExample1Component;
}());



/***/ }),

/***/ "./src/app/features/component-documentation/component-documentation.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/features/component-documentation/component-documentation.module.ts ***!
  \************************************************************************************/
/*! exports provided: ComponentDocumentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDocumentationModule", function() { return ComponentDocumentationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-documentation/component-documentation.component */ "./src/app/features/component-documentation/component-documentation/component-documentation.component.ts");
/* harmony import */ var _component_documentation_example1_component_documentation_example1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-documentation-example1/component-documentation-example1.component */ "./src/app/features/component-documentation/component-documentation-example1/component-documentation-example1.component.ts");






var ComponentDocumentationModule = /** @class */ (function () {
    function ComponentDocumentationModule() {
    }
    ComponentDocumentationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_4__["ComponentDocumentationComponent"], _component_documentation_example1_component_documentation_example1_component__WEBPACK_IMPORTED_MODULE_5__["ComponentDocumentationExample1Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ]
        })
    ], ComponentDocumentationModule);
    return ComponentDocumentationModule;
}());



/***/ }),

/***/ "./src/app/features/component-documentation/component-documentation/component-documentation.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/component-documentation/component-documentation/component-documentation.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Component Documentation'\"\n  [componentId]=\"'ComponentDocumentationComponent'\"\n  [componentType]=\"'components'\"\n>\n  <ng-template docsComponentExample=\"Display Component Documentation\">\n    <docs-tabs>\n      <app-component-documentation-example1 *docsTab=\"'Example'\"></app-component-documentation-example1>\n      <docs-code *docsTab=\"'HTML'\" path=\"component-documentation-example1.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/features/component-documentation/component-documentation/component-documentation.component.sass":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/component-documentation/component-documentation/component-documentation.component.sass ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvY29tcG9uZW50LWRvY3VtZW50YXRpb24vY29tcG9uZW50LWRvY3VtZW50YXRpb24vY29tcG9uZW50LWRvY3VtZW50YXRpb24uY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/component-documentation/component-documentation/component-documentation.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/component-documentation/component-documentation/component-documentation.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ComponentDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDocumentationComponent", function() { return ComponentDocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ComponentDocumentationComponent = /** @class */ (function () {
    function ComponentDocumentationComponent() {
    }
    ComponentDocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-component-documentation',
            template: __webpack_require__(/*! ./component-documentation.component.html */ "./src/app/features/component-documentation/component-documentation/component-documentation.component.html"),
            styles: [__webpack_require__(/*! ./component-documentation.component.sass */ "./src/app/features/component-documentation/component-documentation/component-documentation.component.sass")]
        })
    ], ComponentDocumentationComponent);
    return ComponentDocumentationComponent;
}());



/***/ }),

/***/ "./src/app/features/home/home.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/features/home/home/home.component.html":
/*!********************************************************!*\
  !*** ./src/app/features/home/home/home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-page [noNavigation]=\"true\">\n  <ng-template docsPageSection>\n    <p>This library aims at solving the following problem: easily generate a comprehensive documentation for libraries.\n    </p>\n\n    <ul>\n      <li>Get the API documentation directly from the code.</li>\n      <li>Create and show examples: the code that is shown is the actual code that is running => less copy/paste.</li>\n    </ul>\n\n    <p>This web page has been built with this library!</p>\n  </ng-template>\n\n  <ng-template docsPageSection=\"Get Started\">\n    <ol>\n      <li>\n        Install\n        <docs-code-line>npm install --save-dev ng-documentation</docs-code-line>\n      </li>\n\n      <li>Create a documentation application with the Angular CLI</li>\n\n      <li>\n        Setup helper tools\n        <p>\n          Add the following to the scripts section of your package.json.\n        </p>\n\n        <docs-code-line>\n          \"postinstall\": \"cp -R node_modules/ng-documentation/scripts .\",\n          <br />\n          \"build:docs\": \"./scripts/generate-doc.sh PATH_TO_THE_ASSETS_FOLDER PATH_TO_THE_TSCONFIG_JSON_FILE\n          NAME_OF_ANGULAR_PROJECT && ng build NAME_OF_ANGULAR_PROJECT\",\n          <br />\n          \"watch:docs\": \"./scripts/watch-docs.sh PATH_TO_THE_ASSETS_FOLDER/documentation PATH_TO_THE_TSCONFIG_JSON_FILE\n          NAME_OF_ANGULAR_PROJECT\"\n        </docs-code-line>\n      </li>\n\n\n      <li>Add the styles to your Angular project styles property in the angular.json.\n        <docs-code-line>\n          styles: [ \"node_modules/ng-documentation/ng-documentation.css\" ]\n        </docs-code-line>\n      </li>\n\n      <li>When you want to live serve the documentation app, you must generate the documentation files:\n        <docs-code-line>npm run watch:docs</docs-code-line>\n      </li>\n\n      <li>When you want to build the documentation app, you must generate the documentation files:\n        <docs-code-line>npm run build:docs</docs-code-line>\n      </li>\n\n      <li>\n        Configure the documentation\n        <docs-tabs>\n          <docs-code *docsTab=\"'app.module.ts'\" path=\"app.module.ts\"></docs-code>\n          <docs-code *docsTab=\"'app.component.html'\" path=\"app.component.html\"></docs-code>\n        </docs-tabs>\n      </li>\n    </ol>\n  </ng-template>\n</docs-page>"

/***/ }),

/***/ "./src/app/features/home/home/home.component.sass":
/*!********************************************************!*\
  !*** ./src/app/features/home/home/home.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/home/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/features/home/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/features/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/features/home/home/home.component.sass")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/features/page/page-example1/page-example1.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/features/page/page-example1/page-example1.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-page [title]=\"'Some Title'\" [disableRoutedNavigation]=\"true\">\n  <ng-template [docsPageSection]=\"'Section #1'\">\n    <p>Here is the first section.</p>\n  </ng-template>\n  <ng-template [docsPageSection]=\"'Section #2'\">\n    <p>Here is the second section.</p>\n  </ng-template>\n  <ng-template [docsPageSection]=\"'Section #3'\">\n    <p>Here is the third section.</p>\n  </ng-template>\n</docs-page>"

/***/ }),

/***/ "./src/app/features/page/page-example1/page-example1.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/features/page/page-example1/page-example1.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvcGFnZS9wYWdlLWV4YW1wbGUxL3BhZ2UtZXhhbXBsZTEuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/page/page-example1/page-example1.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/page/page-example1/page-example1.component.ts ***!
  \************************************************************************/
/*! exports provided: PageExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageExample1Component", function() { return PageExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PageExample1Component = /** @class */ (function () {
    function PageExample1Component() {
    }
    PageExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-example1',
            template: __webpack_require__(/*! ./page-example1.component.html */ "./src/app/features/page/page-example1/page-example1.component.html"),
            styles: [__webpack_require__(/*! ./page-example1.component.sass */ "./src/app/features/page/page-example1/page-example1.component.sass")]
        })
    ], PageExample1Component);
    return PageExample1Component;
}());



/***/ }),

/***/ "./src/app/features/page/page-example2/page-example2.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/features/page/page-example2/page-example2.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-page [title]=\"'Some Title'\" [disableRoutedNavigation]=\"true\" [noNavigation]=\"true\">\n  <ng-template [docsPageSection]=\"'Section #1'\">\n    <p>Here is the first section.</p>\n  </ng-template>\n  <ng-template [docsPageSection]=\"'Section #2'\">\n    <p>Here is the second section.</p>\n  </ng-template>\n  <ng-template [docsPageSection]=\"'Section #3'\">\n    <p>Here is the third section.</p>\n  </ng-template>\n</docs-page>"

/***/ }),

/***/ "./src/app/features/page/page-example2/page-example2.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/features/page/page-example2/page-example2.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvcGFnZS9wYWdlLWV4YW1wbGUyL3BhZ2UtZXhhbXBsZTIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/page/page-example2/page-example2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/page/page-example2/page-example2.component.ts ***!
  \************************************************************************/
/*! exports provided: PageExample2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageExample2Component", function() { return PageExample2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PageExample2Component = /** @class */ (function () {
    function PageExample2Component() {
    }
    PageExample2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-example2',
            template: __webpack_require__(/*! ./page-example2.component.html */ "./src/app/features/page/page-example2/page-example2.component.html"),
            styles: [__webpack_require__(/*! ./page-example2.component.sass */ "./src/app/features/page/page-example2/page-example2.component.sass")]
        })
    ], PageExample2Component);
    return PageExample2Component;
}());



/***/ }),

/***/ "./src/app/features/page/page.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/page/page.module.ts ***!
  \**********************************************/
/*! exports provided: PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/page.component */ "./src/app/features/page/page/page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _page_example1_page_example1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-example1/page-example1.component */ "./src/app/features/page/page-example1/page-example1.component.ts");
/* harmony import */ var _page_example2_page_example2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-example2/page-example2.component */ "./src/app/features/page/page-example2/page-example2.component.ts");







var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"], _page_example1_page_example1_component__WEBPACK_IMPORTED_MODULE_5__["PageExample1Component"], _page_example2_page_example2_component__WEBPACK_IMPORTED_MODULE_6__["PageExample2Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], PageModule);
    return PageModule;
}());



/***/ }),

/***/ "./src/app/features/page/page/page.component.html":
/*!********************************************************!*\
  !*** ./src/app/features/page/page/page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Documentation Page'\"\n  [componentId]=\"'PageComponent'\"\n  [componentType]=\"'components'\"\n>\n  <ng-template docsComponentExample=\"Render a standard page\">\n    <docs-tabs>\n      <app-page-example1 *docsTab=\"'Example'\"></app-page-example1>\n      <docs-code *docsTab=\"'HTML'\" path=\"page-example1.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n  <ng-template docsComponentExample=\"No navigation bar\">\n    <docs-tabs>\n      <app-page-example2 *docsTab=\"'Example'\"></app-page-example2>\n      <docs-code *docsTab=\"'HTML'\" path=\"page-example2.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/features/page/page/page.component.sass":
/*!********************************************************!*\
  !*** ./src/app/features/page/page/page.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvcGFnZS9wYWdlL3BhZ2UuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/page/page/page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/features/page/page/page.component.ts ***!
  \******************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/features/page/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.sass */ "./src/app/features/page/page/page.component.sass")]
        })
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/features/tabs/tabs-example1/tabs-example1.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/features/tabs/tabs-example1/tabs-example1.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-tabs>\n  <docs-code *docsTab=\"'HTML'\" path=\"tabs-example1.component.html\"></docs-code>\n  <docs-code *docsTab=\"'TS'\" path=\"tabs-example1.component.ts\"></docs-code>\n</docs-tabs>"

/***/ }),

/***/ "./src/app/features/tabs/tabs-example1/tabs-example1.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/features/tabs/tabs-example1/tabs-example1.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvdGFicy90YWJzLWV4YW1wbGUxL3RhYnMtZXhhbXBsZTEuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/tabs/tabs-example1/tabs-example1.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/tabs/tabs-example1/tabs-example1.component.ts ***!
  \************************************************************************/
/*! exports provided: TabsExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsExample1Component", function() { return TabsExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TabsExample1Component = /** @class */ (function () {
    function TabsExample1Component() {
    }
    TabsExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs-example1',
            template: __webpack_require__(/*! ./tabs-example1.component.html */ "./src/app/features/tabs/tabs-example1/tabs-example1.component.html"),
            styles: [__webpack_require__(/*! ./tabs-example1.component.sass */ "./src/app/features/tabs/tabs-example1/tabs-example1.component.sass")]
        })
    ], TabsExample1Component);
    return TabsExample1Component;
}());



/***/ }),

/***/ "./src/app/features/tabs/tabs.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/tabs/tabs.module.ts ***!
  \**********************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/features/tabs/tabs/tabs.component.ts");
/* harmony import */ var _tabs_example1_tabs_example1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-example1/tabs-example1.component */ "./src/app/features/tabs/tabs-example1/tabs-example1.component.ts");






var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"],
                _tabs_example1_tabs_example1_component__WEBPACK_IMPORTED_MODULE_5__["TabsExample1Component"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ }),

/***/ "./src/app/features/tabs/tabs/tabs.component.html":
/*!********************************************************!*\
  !*** ./src/app/features/tabs/tabs/tabs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Tabs'\"\n  [componentId]=\"'TabsComponent'\"\n  [componentType]=\"'components'\"\n>\n  <ng-template docsComponentExample=\"Tabs to display code\">\n    <app-tabs-example1></app-tabs-example1>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/features/tabs/tabs/tabs.component.sass":
/*!********************************************************!*\
  !*** ./src/app/features/tabs/tabs/tabs.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvdGFicy90YWJzL3RhYnMuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/tabs/tabs/tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/features/tabs/tabs/tabs.component.ts ***!
  \******************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/features/tabs/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.sass */ "./src/app/features/tabs/tabs/tabs.component.sass")]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/shared/profile/profile.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/profile/profile.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<strong>Profile #{{profileId}}</strong> (category: {{category}})"

/***/ }),

/***/ "./src/app/shared/profile/profile.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


/**
 * Profile component that displays basic information of a profile.
 */
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        /**
         * Inform when the profile is deleted.
         */
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * Copies the profile.
     */
    ProfileComponent.prototype.copy = function () {
        // tslint:disable-next-line:no-empty
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProfileComponent.prototype, "profileId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProfileComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileComponent.prototype, "deleted", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/shared/profile/profile.component.html")
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ng_documentation_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ng-documentation/src/public-api */ "../ng-documentation/src/public-api.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/shared/profile/profile.component.ts");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                projects_ng_documentation_src_public_api__WEBPACK_IMPORTED_MODULE_3__["DocsModule"]
            ],
            exports: [
                projects_ng_documentation_src_public_api__WEBPACK_IMPORTED_MODULE_3__["DocsModule"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/kevinmerckx/ng-documentation/projects/docs/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map