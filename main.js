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

module.exports = ":host {\n  display: block;\n  margin: 5px 0;\n  position: relative; }\n\ndocs-copy-button {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.code-container {\n  display: flex;\n  flex-direction: row;\n  background: whitesmoke;\n  align-items: center; }\n\npre {\n  flex: 1 1;\n  background: transparent;\n  margin: 0; }\n\ncode {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL2NvZGUtbGluZS9jb2RlLWxpbmUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLFNBQVMsRUFBQTs7QUFFWDtFQUNFLFNBQVMsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvY29yZS9jb2RlLWxpbmUvY29kZS1saW5lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiIDpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG5kb2NzLWNvcHktYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxuXG4uY29kZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbnByZSB7XG4gIGZsZXg6IDEgMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMDsgfVxuXG5jb2RlIHtcbiAgbWFyZ2luOiAwOyB9XG5cbiJdfQ== */"

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

module.exports = "<pre><code #code>{{ path | codeSample }}</code></pre>\n<div class=\"source-actions\">\n  <docs-copy-button [element]=\"code\"></docs-copy-button>\n</div>\n"

/***/ }),

/***/ "../ng-documentation/src/lib/core/code/code.component.sass":
/*!*****************************************************************!*\
  !*** ../ng-documentation/src/lib/core/code/code.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: block;\n  overflow: auto; }\n\npre {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: auto; }\n\npre code {\n    margin: 0; }\n\n.source-actions {\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 5px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL2NvZGUvY29kZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFKaEI7SUFPSSxTQUFTLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvY29yZS9jb2RlL2NvZGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG5wcmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgY29kZSB7XG4gICAgbWFyZ2luOiAwOyB9IH1cblxuLnNvdXJjZS1hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDVweCAxNXB4OyB9XG4iXX0= */"

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

module.exports = "table {\n  border-collapse: collapse;\n  border: 1px solid lightgrey;\n  border-radius: 1px;\n  width: 100%; }\n\nthead {\n  background: lightgrey; }\n\nth {\n  text-align: left; }\n\nth, td {\n  padding: 3px 20px 3px 3px; }\n\ntr {\n  border-bottom: 1px solid lightgrey; }\n\n.name, .type {\n  width: 30%; }\n\n.description {\n  width: 40%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL2NvbXBvbmVudC1hcGkvY29tcG9uZW50LWFwaS5jb21wb25lbnQuc2FzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9zdHlsZXMvX3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQXlCO0VBQ3pCLDJCQ0V3QjtFRER4QixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUVmO0VBQ0kscUJDSHdCLEVBQUE7O0FESzVCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksa0NDWndCLEVBQUE7O0FEYzVCO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksVUFBVSxFQUFBIiwiZmlsZSI6InByb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL2NvbXBvbmVudC1hcGkvY29tcG9uZW50LWFwaS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xuXG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgd2lkdGg6IDEwMCU7IH1cblxudGhlYWQge1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1saWdodC1ncmV5OyB9XG5cbnRoIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbnRoLCB0ZCB7XG4gICAgcGFkZGluZzogM3B4IDIwcHggM3B4IDNweDsgfVxuXG50ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1saWdodC1ncmV5OyB9XG5cbi5uYW1lLCAudHlwZSB7XG4gICAgd2lkdGg6IDMwJTsgfVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiA0MCU7IH1cbiIsIiRjb2xvci1vbmU6ICMyOEM4RkY7XG4kY29sb3ItdHdvOiAjMjhBMkZGO1xuJGNvbG9yLXRocmVlOiAjRkY3OTNGO1xuJGNvbG9yLWZvdXI6ICNGRjREMDA7XG4kY29sb3ItZml2ZTogI0VFMjIwMDtcblxuJGNvbG9yLWxpZ2h0LWdyZXk6IGxpZ2h0Z3JleTtcbiJdfQ== */"

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

module.exports = "<div class=\"header\">\n  <h1>{{componentTitle}}</h1>\n\n  <ol>\n    <li [class.active]=\"isOverview$ | async\" (click)=\"select('overview')\">Overview</li>\n    <li [class.active]=\"isExamples$ | async\" (click)=\"select('examples')\">Examples</li>\n    <li [class.active]=\"isApi$ | async\" (click)=\"select('api')\">API</li>\n  </ol>\n</div>\n\n<div class=\"content\" [docsAnchorContainer]=\"tab$ | async\">\n  <docs-component-description\n    docsAnchor=\"overview\"\n    [componentId]=\"componentId\"\n    [componentType]=\"componentType\"\n  ></docs-component-description>\n\n  <h2 docsAnchor=\"examples\">Examples</h2>\n  <ng-template ngFor [ngForOf]=\"examples\" let-example>\n    <docs-component-example [example]=\"example\"></docs-component-example>\n  </ng-template>\n\n  <h2 docsAnchor=\"api\">API</h2>\n  \n  <docs-component-api\n    [componentId]=\"componentId\"\n    [componentType]=\"componentType\"\n  ></docs-component-api>\n  \n</div>\n\n"

/***/ }),

/***/ "../ng-documentation/src/lib/core/component-documentation/component-documentation.component.sass":
/*!*******************************************************************************************************!*\
  !*** ../ng-documentation/src/lib/core/component-documentation/component-documentation.component.sass ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; }\n\n.header {\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-bottom: 1px solid grey;\n  box-shadow: 2px 0px 2px 1px lightgrey;\n  padding: 0 15px; }\n\n.content {\n  flex: 1 1;\n  padding: 15px;\n  overflow: auto; }\n\nh2 {\n  margin-top: 50px;\n  border-bottom: 1px solid lightgrey; }\n\nol {\n  list-style: none;\n  margin: 0 0 0 30px;\n  padding: 0; }\n\nli {\n  display: inline-block;\n  margin: 0;\n  padding: 5px 10px;\n  transition: color 0.2s;\n  cursor: pointer; }\n\nli:hover {\n    color: #FF793F; }\n\nli.active {\n    color: #FF4D00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL2NvbXBvbmVudC1kb2N1bWVudGF0aW9uL2NvbXBvbmVudC1kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zYXNzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL2tldmlubWVyY2t4L25nLWRvY3VtZW50YXRpb24vcHJvamVjdHMvbmctZG9jdW1lbnRhdGlvbi9zcmMvbGliL3N0eWxlcy9fdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUM7RUFDQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHFDQUFxQztFQUNyQyxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQ25CMEIsRUFBQTs7QURxQjVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZUFBZSxFQUFBOztBQUxqQjtJQVFJLGNDdENpQixFQUFBOztBRDhCckI7SUFXSSxjQ3hDZ0IsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvY29yZS9jb21wb25lbnQtZG9jdW1lbnRhdGlvbi9jb21wb25lbnQtZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4gOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLmhlYWRlciB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbiAgYm94LXNoYWRvdzogMnB4IDBweCAycHggMXB4IGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMCAxNXB4OyB9XG5cbi5jb250ZW50IHtcbiAgZmxleDogMSAxO1xuICBwYWRkaW5nOiAxNXB4O1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG5cbmgyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1saWdodC1ncmV5OyB9XG5cbm9sIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwIDAgMCAzMHB4O1xuICBwYWRkaW5nOiAwOyB9XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRjb2xvci10aHJlZTsgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBjb2xvcjogJGNvbG9yLWZvdXI7IH0gfVxuIiwiJGNvbG9yLW9uZTogIzI4QzhGRjtcbiRjb2xvci10d286ICMyOEEyRkY7XG4kY29sb3ItdGhyZWU6ICNGRjc5M0Y7XG4kY29sb3ItZm91cjogI0ZGNEQwMDtcbiRjb2xvci1maXZlOiAjRUUyMjAwO1xuXG4kY29sb3ItbGlnaHQtZ3JleTogbGlnaHRncmV5O1xuIl19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





/**
 * Component that displays a component's or a directive's information: an overview, examples and API.
 */
var ComponentDocumentationComponent = /** @class */ (function () {
    function ComponentDocumentationComponent(router, route) {
        this.router = router;
        this.route = route;
        /**
         * @ignore
         */
        this.disableRoutedNavigation = false;
        this.examples = [];
    }
    /**
     * @ignore
     */
    ComponentDocumentationComponent.prototype.ngOnChanges = function () {
        this.tab$ = this.disableRoutedNavigation ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('overview') : this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.tab || 'overview'; }));
        this.updateIsObservables();
    };
    /**
     * @ignore
     */
    ComponentDocumentationComponent.prototype.registerExample = function (example) {
        this.examples.push(example);
    };
    /**
     * @ignore
     */
    ComponentDocumentationComponent.prototype.select = function (tab) {
        if (this.disableRoutedNavigation) {
            this.tab$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(tab);
            this.updateIsObservables();
        }
        else {
            this.router.navigate(['.'], {
                queryParamsHandling: 'merge',
                queryParams: {
                    tab: tab
                },
                relativeTo: this.route,
            });
        }
    };
    /**
     * @ignore
     */
    ComponentDocumentationComponent.prototype.updateIsObservables = function () {
        this.isOverview$ = this.tab$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (v) { return v === 'overview'; }));
        this.isExamples$ = this.tab$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (v) { return v === 'examples'; }));
        this.isApi$ = this.tab$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (v) { return v === 'api'; }));
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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
        var anchor = (this.anchors.find(function (a) { return a.docsAnchor === _this.docsAnchorContainer; }).elementRef.nativeElement);
        element.scrollTop = anchor.offsetTop - element.offsetTop - 15;
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

module.exports = ":host {\n  display: block; }\n\nbutton {\n  border: none;\n  box-shadow: none;\n  background: transparent;\n  height: auto;\n  line-height: normal;\n  color: grey;\n  outline: none;\n  padding: 0; }\n\nbutton:hover {\n    color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL2NvcHktYnV0dG9uL2NvcHktYnV0dG9uLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVLEVBQUE7O0FBUlo7SUFXSSxZQUFZLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvbmctZG9jdW1lbnRhdGlvbi9zcmMvbGliL2NvcmUvY29weS1idXR0b24vY29weS1idXR0b24uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiBncmV5O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjazsgfSB9XG4iXX0= */"

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
                _directives_brand_header_directive__WEBPACK_IMPORTED_MODULE_15__["BrandHeaderDirective"]
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
                _directives_brand_header_directive__WEBPACK_IMPORTED_MODULE_15__["BrandHeaderDirective"]
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
        return this.getComponentDocumentation$(options.componentId, options.componentType)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (d) {
            var defaultResult = options.input.type;
            if (!d.accessors) {
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

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  overflow: hidden;\n  border: lightgrey 1px solid; }\n\nol {\n  margin: 0;\n  padding: 0; }\n\nli {\n  list-style: none;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0;\n  margin: 0; }\n\n.content {\n  flex: 1 1;\n  overflow: auto; }\n\n:host {\n  margin-top: 20px; }\n\n:host .content {\n    background-color: whitesmoke; }\n\n:host pre {\n    margin-top: 0; }\n\n:host li {\n    padding: 0 15px;\n    line-height: 40px;\n    height: 40px;\n    border-bottom: 2px solid transparent;\n    transition: border-bottom 0.2s; }\n\n:host li:hover:not(.active) {\n      border-bottom-color: lightgrey; }\n\n:host li.active {\n      color: #FF4D00;\n      border-bottom-color: #FF4D00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9jb3JlL3RhYnMvdGFicy5jb21wb25lbnQuc2FzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9zdHlsZXMvX3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDJCQUFtQyxFQUFBOztBQUVyQztFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBRVo7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUVYO0VBQ0UsU0FBUztFQUNULGNBQWMsRUFBQTs7QUFHZjtFQUNDLGdCQUFnQixFQUFBOztBQURqQjtJQUlHLDRCQUE0QixFQUFBOztBQUovQjtJQU1HLGFBQWEsRUFBQTs7QUFOaEI7SUFRRyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsOEJBQThCLEVBQUE7O0FBWmpDO01BZUssOEJDbENzQixFQUFBOztBRG1CM0I7TUFrQkssY0N4Q2M7TUR5Q2QsNEJDekNjLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvbmctZG9jdW1lbnRhdGlvbi9zcmMvbGliL2NvcmUvdGFicy90YWJzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbiA6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogJGNvbG9yLWxpZ2h0LWdyZXkgMXB4IHNvbGlkOyB9XG5cbm9sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDsgfVxuXG4uY29udGVudCB7XG4gIGZsZXg6IDEgMTtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLy8gaW1wbGVtZW50ZWQgdG8gZGlzcGxheSBjb2RlXG4gOmhvc3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIC5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyB9XG4gIHByZSB7XG4gICAgbWFyZ2luLXRvcDogMDsgfVxuICBsaSB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjJzO1xuXG4gICAgJjpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7IH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZm91cjtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci1mb3VyOyB9IH0gfVxuIiwiJGNvbG9yLW9uZTogIzI4QzhGRjtcbiRjb2xvci10d286ICMyOEEyRkY7XG4kY29sb3ItdGhyZWU6ICNGRjc5M0Y7XG4kY29sb3ItZm91cjogI0ZGNEQwMDtcbiRjb2xvci1maXZlOiAjRUUyMjAwO1xuXG4kY29sb3ItbGlnaHQtZ3JleTogbGlnaHRncmV5O1xuIl19 */"

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

module.exports = "<h1>Default Welcome Page</h1>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Documentation & Demo</h2>\n<p>This documentation is a combination of automated comment extraction from your code and of component examples.\n</p>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Navigation</h2>\n<p>Use the menu on the left to navigate throught components.</p>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Backed by Interfacewerk</h2>\n<p><a>Interfacewerk</a> is a digital innovation consultancy focussing on Software Design and User Experience.</p>\n"

/***/ }),

/***/ "../ng-documentation/src/lib/default-welcome/default-welcome.component.sass":
/*!**********************************************************************************!*\
  !*** ../ng-documentation/src/lib/default-welcome/default-welcome.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9kZWZhdWx0LXdlbGNvbWUvZGVmYXVsdC13ZWxjb21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsY0FBYztFQUNkLGFBQWEsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvZGVmYXVsdC13ZWxjb21lL2RlZmF1bHQtd2VsY29tZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiA6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4OyB9XG4iXX0= */"

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

module.exports = "docs-app {\n  display: block;\n  position: relative;\n  width: 100vw;\n  height: 100vh; }\n  docs-app a.brand-header {\n    width: calc(100% - 30px);\n    display: block;\n    margin: 0 15px; }\n  docs-app a.brand-header, docs-app a.brand-header:hover, docs-app a.brand-header:focus {\n      text-decoration: none; }\n  docs-app aside {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 200px;\n    overflow: auto;\n    background: white;\n    color: black;\n    padding: 15px 0px;\n    border-right: 1px solid grey;\n    box-shadow: 2px 0px 2px 1px lightgray; }\n  docs-app main {\n    position: absolute;\n    top: 0;\n    left: 200px;\n    height: 100%;\n    right: 0;\n    overflow: auto; }\n  docs-app ul {\n    padding: 0;\n    margin: 0; }\n  docs-app ul li {\n      list-style: none;\n      width: 100%;\n      padding: 0; }\n  docs-app ul li a {\n        display: inline-block;\n        width: 100%;\n        line-height: 20px;\n        text-decoration: none;\n        padding: 10px 15px;\n        color: black;\n        font-size: 1.6rem;\n        transition: all 0.2s; }\n  docs-app ul li a:hover {\n          color: #FF793F;\n          background: whitesmoke; }\n  docs-app ul li a.active-link {\n          color: #FF4D00;\n          background: whitesmoke; }\n  docs-app .extra-links li:first-child {\n    margin-top: 30px;\n    border-top: 1px solid lightgrey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9kb2NzL2RvY3MuY29tcG9uZW50LnNhc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQva2V2aW5tZXJja3gvbmctZG9jdW1lbnRhdGlvbi9wcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvc3R5bGVzL192YXJpYWJsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWEsRUFBQTtFQUpmO0lBU0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxjQUFjLEVBQUE7RUFYbEI7TUFhTSxxQkFBcUIsRUFBQTtFQWIzQjtJQWdCSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osWUFkaUI7SUFlakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixxQ0FBcUMsRUFBQTtFQTFCekM7SUE2Qkksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQXpCaUI7SUEwQmpCLFlBQVk7SUFDWixRQUFRO0lBQ1IsY0FBYyxFQUFBO0VBbENsQjtJQXFDSSxVQUFVO0lBQ1YsU0FBUyxFQUFBO0VBdENiO01BeUNNLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsVUFBVSxFQUFBO0VBM0NoQjtRQThDUSxxQkFBcUI7UUFDckIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsb0JBQW9CLEVBQUE7RUFyRDVCO1VBd0RVLGNDeERXO1VEeURYLHNCQUFzQixFQUFBO0VBekRoQztVQTREVSxjQzNEVTtVRDREVixzQkFBc0IsRUFBQTtFQTdEaEM7SUFnRUksZ0JBQWdCO0lBQ2hCLCtCQzdEd0IsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvZG9jcy9kb2NzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc3R5bGVzL192YXJpYWJsZXMnO1xuXG5kb2NzLWFwcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICAkd2lkdGhfYXNpZGU6IDIwMHB4O1xuXG4gIGEuYnJhbmQtaGVhZGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgJiwgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH0gfVxuXG4gIGFzaWRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAkd2lkdGhfYXNpZGU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm94LXNoYWRvdzogMnB4IDBweCAycHggMXB4IGxpZ2h0Z3JheTsgfVxuXG4gIG1haW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogJHdpZHRoX2FzaWRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuXG4gIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcblxuICAgIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkY29sb3ItdGhyZWU7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTsgfVxuXG4gICAgICAgICYuYWN0aXZlLWxpbmsge1xuICAgICAgICAgIGNvbG9yOiAkY29sb3ItZm91cjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlOyB9IH0gfSB9XG5cbiAgLmV4dHJhLWxpbmtzIGxpOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JleTsgfSB9XG4iLCIkY29sb3Itb25lOiAjMjhDOEZGO1xuJGNvbG9yLXR3bzogIzI4QTJGRjtcbiRjb2xvci10aHJlZTogI0ZGNzkzRjtcbiRjb2xvci1mb3VyOiAjRkY0RDAwO1xuJGNvbG9yLWZpdmU6ICNFRTIyMDA7XG5cbiRjb2xvci1saWdodC1ncmV5OiBsaWdodGdyZXk7XG4iXX0= */"

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
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
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

module.exports = "<div class=\"header\">\n  <div class=\"brand-area\">\n    <ng-container [ngTemplateOutlet]=\"brandHeaderTemplate\"></ng-container>\n  </div>\n    \n  <ul class=\"links\">\n    <li><a routerLink=\"/\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">Get started</a></li>\n  </ul>\n  <input type=\"text\"\n    class=\"search\"\n    [class.active]=\"search$ | async\"\n    [class.no-result]=\"(pages$ | async).length === 0\"\n    [ngModel]=\"search$ | async\"\n    (ngModelChange)=\"setSearch($event)\"\n    placeholder=\"Search for a component\"\n    autofocus\n    autocomplete=\"off\"\n  />\n  <div class=\"search-helper\"\n    [class.hidden]=\"!(search$ | async)\"\n    [class.no-result]=\"(pages$ | async).length === 0\">\n    <ng-container *ngIf=\"search$ | async\">\n      {{(pages$ | async).length}} <ng-container *ngIf=\"(pages$ | async).length > 1\">results</ng-container><ng-container *ngIf=\"(pages$ | async).length === 1\">result</ng-container> found\n    </ng-container>\n  </div>\n</div>\n<ul class=\"links\">\n  <ng-container *ngIf=\"pages$ | async as pages; else noResults\">\n    <li *ngFor=\"let page of pages\">\n      <a\n        [routerLink]=\"page.path\"\n        routerLinkActive=\"active-link\"\n      >{{page.title}}</a>\n    </li>\n  </ng-container>\n</ul>\n<ul class=\"extra-links\">\n  <ng-content></ng-content>\n</ul>\n\n<ng-template #noResults>\n  No result for this search!\n</ng-template>"

/***/ }),

/***/ "../ng-documentation/src/lib/menu/menu.component.sass":
/*!************************************************************!*\
  !*** ../ng-documentation/src/lib/menu/menu.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand-area {\n  padding: 13.5px 15px; }\n\n.search {\n  height: 40px;\n  line-height: 14px;\n  font-size: 14px;\n  padding: 13.5px 15px;\n  width: 100%;\n  border-radius: 0;\n  color: #28A2FF;\n  outline: none;\n  border: none;\n  border-top: lightgrey 1px solid;\n  border-bottom: lightgrey 1px solid; }\n\n.search.no-result {\n    border-color: #EE2200;\n    color: #EE2200; }\n\n.search-helper {\n  width: 100%;\n  padding: 0 15px;\n  line-height: 20px;\n  height: 20px;\n  background-color: #28A2FF;\n  color: white;\n  font-size: 1rem;\n  transition: opacity 0.2s;\n  opacity: 1; }\n\n.search-helper.no-result {\n    background-color: #EE2200; }\n\n.search-helper.hidden {\n    opacity: 0; }\n\n:host {\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  flex-direction: column; }\n\n.links {\n  flex: 1 1;\n  overflow: auto; }\n\n.extra-links, .header {\n  flex: 0 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL25nLWRvY3VtZW50YXRpb24vc3JjL2xpYi9tZW51L21lbnUuY29tcG9uZW50LnNhc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQva2V2aW5tZXJja3gvbmctZG9jdW1lbnRhdGlvbi9wcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvc3R5bGVzL192YXJpYWJsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNDYmlCO0VEY2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osK0JBQXVDO0VBQ3ZDLGtDQUEwQyxFQUFBOztBQVg1QztJQWNJLHFCQ2pCZ0I7SURrQmhCLGNDbEJnQixFQUFBOztBRG9CcEI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJDNUJpQjtFRDZCakIsWUFBWTtFQUNaLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsVUFBVSxFQUFBOztBQVRaO0lBWUkseUJDaENnQixFQUFBOztBRG9CcEI7SUFlSSxVQUFVLEVBQUE7O0FBRWI7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxTQUFTO0VBQ1QsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZy1kb2N1bWVudGF0aW9uL3NyYy9saWIvbWVudS9tZW51LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbiRzZWFyY2gtY29sb3I6ICRjb2xvci10d287XG5cbi5icmFuZC1hcmVhIHtcbiAgcGFkZGluZzogMTMuNXB4IDE1cHg7IH1cblxuLnNlYXJjaCB7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTMuNXB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogJHNlYXJjaC1jb2xvcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAkY29sb3ItbGlnaHQtZ3JleSAxcHggc29saWQ7XG4gIGJvcmRlci1ib3R0b206ICRjb2xvci1saWdodC1ncmV5IDFweCBzb2xpZDtcblxuICAmLm5vLXJlc3VsdCB7XG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItZml2ZTtcbiAgICBjb2xvcjogJGNvbG9yLWZpdmU7IH0gfVxuXG4uc2VhcmNoLWhlbHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWFyY2gtY29sb3I7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIG9wYWNpdHk6IDE7XG5cbiAgJi5uby1yZXN1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1maXZlOyB9XG5cbiAgJi5oaWRkZW4ge1xuICAgIG9wYWNpdHk6IDA7IH0gfVxuXG4gOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLmxpbmtzIHtcbiAgZmxleDogMSAxO1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG4uZXh0cmEtbGlua3MsIC5oZWFkZXIge1xuICBmbGV4OiAwIDAgYXV0bzsgfVxuIiwiJGNvbG9yLW9uZTogIzI4QzhGRjtcbiRjb2xvci10d286ICMyOEEyRkY7XG4kY29sb3ItdGhyZWU6ICNGRjc5M0Y7XG4kY29sb3ItZm91cjogI0ZGNEQwMDtcbiRjb2xvci1maXZlOiAjRUUyMjAwO1xuXG4kY29sb3ItbGlnaHQtZ3JleTogbGlnaHRncmV5O1xuIl19 */"

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

module.exports = "<docs-app>\n  <ng-template docsBrandHeader>\n    <h3 class=\"brand-area\">NG Documentation</h3>\n  </ng-template>\n  <li><a href=\"https://github.com/interfacewerk/iwerk-angular-ui\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i> Github</a></li>\n  <li><a href=\"https://interfacewerk.de/jobs\"><fa-icon [icon]=\"faHandshake\"></fa-icon> We are hiring!</a></li>\n  <li><a href=\"https://interfacewerk.de\">interfacewerk.de</a></li>\n</docs-app>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand-area {\n  padding: 0 15px 5px 15px;\n  margin: 0 -15px;\n  border-bottom: 1px solid black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL2RvY3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLDhCQUE4QixFQUFBIiwiZmlsZSI6InByb2plY3RzL2RvY3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJhbmQtYXJlYSB7XG4gIHBhZGRpbmc6IDAgMTVweCA1cHggMTVweDtcbiAgbWFyZ2luOiAwIC0xNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7IH1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var projects_ng_documentation_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ng-documentation/src/public-api */ "../ng-documentation/src/public-api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _features_code_line_code_line_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/code-line/code-line.module */ "./src/app/features/code-line/code-line.module.ts");
/* harmony import */ var _features_code_line_code_line_code_line_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/code-line/code-line/code-line.component */ "./src/app/features/code-line/code-line/code-line.component.ts");
/* harmony import */ var _features_code_code_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/code/code.module */ "./src/app/features/code/code.module.ts");
/* harmony import */ var _features_code_code_code_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/code/code/code.component */ "./src/app/features/code/code/code.component.ts");
/* harmony import */ var _features_component_api_component_api_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/component-api/component-api.module */ "./src/app/features/component-api/component-api.module.ts");
/* harmony import */ var _features_component_api_component_api_component_api_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/component-api/component-api/component-api.component */ "./src/app/features/component-api/component-api/component-api.component.ts");
/* harmony import */ var _features_home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/home/home.module */ "./src/app/features/home/home.module.ts");
/* harmony import */ var _features_home_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/home/home/home.component */ "./src/app/features/home/home/home.component.ts");
/* harmony import */ var _features_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/tabs/tabs.module */ "./src/app/features/tabs/tabs.module.ts");
/* harmony import */ var _features_tabs_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/tabs/tabs/tabs.component */ "./src/app/features/tabs/tabs/tabs.component.ts");
/* harmony import */ var _features_component_documentation_component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/component-documentation/component-documentation/component-documentation.component */ "./src/app/features/component-documentation/component-documentation/component-documentation.component.ts");
/* harmony import */ var _features_component_documentation_component_documentation_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./features/component-documentation/component-documentation.module */ "./src/app/features/component-documentation/component-documentation.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _features_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_13__["TabsModule"],
                _features_code_code_module__WEBPACK_IMPORTED_MODULE_7__["CodeModule"],
                _features_code_line_code_line_module__WEBPACK_IMPORTED_MODULE_5__["CodeLineModule"],
                _features_home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"],
                _features_component_api_component_api_module__WEBPACK_IMPORTED_MODULE_9__["ComponentApiModule"],
                _features_component_documentation_component_documentation_module__WEBPACK_IMPORTED_MODULE_16__["ComponentDocumentationModule"],
                projects_ng_documentation_src_public_api__WEBPACK_IMPORTED_MODULE_3__["DocsModule"],
                projects_ng_documentation_src_public_api__WEBPACK_IMPORTED_MODULE_3__["DocsModule"].configure({
                    welcomePage: _features_home_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    componentPages: {
                        tabs: {
                            component: _features_tabs_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_14__["TabsComponent"],
                            title: 'Tabs'
                        },
                        code: {
                            component: _features_code_code_code_component__WEBPACK_IMPORTED_MODULE_8__["CodeComponent"],
                            title: 'Code'
                        },
                        codeLine: {
                            component: _features_code_line_code_line_code_line_component__WEBPACK_IMPORTED_MODULE_6__["CodeLineComponent"],
                            title: 'Code Line'
                        },
                        componentApi: {
                            component: _features_component_api_component_api_component_api_component__WEBPACK_IMPORTED_MODULE_10__["ComponentApiComponent"],
                            title: 'Component API'
                        },
                        componentDocumentation: {
                            component: _features_component_documentation_component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_15__["ComponentDocumentationComponent"],
                            title: 'Component Documentation'
                        }
                    }
                })
            ],
            providers: [{
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_17__["HashLocationStrategy"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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






var CodeModule = /** @class */ (function () {
    function CodeModule() {
    }
    CodeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_code_code_component__WEBPACK_IMPORTED_MODULE_3__["CodeComponent"], _code_example1_code_example1_component__WEBPACK_IMPORTED_MODULE_5__["CodeExample1Component"]],
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

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Code'\"\n  [componentId]=\"'CodeComponent'\"\n  [componentType]=\"'components'\"\n>\n  <ng-template docsComponentExample=\"Display Code\">\n    <app-code-example1></app-code-example1>\n  </ng-template>\n</docs-component-documentation>\n"

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

module.exports = "<h1>Angular Library Documentation</h1>\n\n<p>This library aims at solving the following problem: easily generate a comprehensive documentation for libraries.</p>\n\n<ul>\n  <li>Get the API documentation directly from the code.</li>\n  <li>Create and show examples: the code that is shown is the actual code that is running => less copy/paste.</li>\n</ul>\n\n<p>This web page has been built with this library!</p>\n\n<h2>Get Started</h2>\n\n<ol>\n  <li>\n    Install\n    <docs-code-line>npm install --save-dev ng-documentation</docs-code-line>\n  </li>\n\n  <li>Create a documentation application with the Angular CLI</li>\n\n  <li>\n    Setup helper tools\n    <p>\n      Add the following to the scripts section of your package.json.\n    </p>\n    \n    <docs-code-line>\n      \"postinstall\": \"cp -R node_modules/ng-documentation/scripts .\",\n      <br/>\n      \"build:docs\": \"./scripts/generate-doc.sh PATH_TO_THE_ASSETS_FOLDER PATH_TO_THE_TSCONFIG_JSON_FILE NAME_OF_ANGULAR_PROJECT && ng build NAME_OF_ANGULAR_PROJECT\",\n      <br/>\n      \"watch:docs\": \"./scripts/watch-docs.sh PATH_TO_THE_ASSETS_FOLDER/documentation PATH_TO_THE_TSCONFIG_JSON_FILE NAME_OF_ANGULAR_PROJECT\"\n    </docs-code-line>\n  </li>\n\n  \n  <li>Add the styles to your Angular project styles property in the angular.json.\n    <docs-code-line>\n      styles: [ \"node_modules/ng-documentation/ng-docs.css\" ]\n    </docs-code-line>\n  </li>\n  \n  <li>When you want to live serve the documentation app, you must generate the documentation files:\n    <docs-code-line>npm run watch:docs</docs-code-line>\n  </li>\n  \n  <li>When you want to build the documentation app, you must generate the documentation files:\n    <docs-code-line>npm run build:docs</docs-code-line>\n  </li>\n  \n  <li>\n    Configure the documentation\n    <docs-tabs>\n      <docs-code *docsTab=\"'app.module.ts'\" path=\"app.module.ts\"></docs-code>\n      <docs-code *docsTab=\"'app.component.html'\" path=\"app.component.html\"></docs-code>\n    </docs-tabs>\n  </li>\n</ol>\n\n\n\n"

/***/ }),

/***/ "./src/app/features/home/home/home.component.sass":
/*!********************************************************!*\
  !*** ./src/app/features/home/home/home.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 0 15px;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1kb2N1bWVudGF0aW9uL3Byb2plY3RzL2RvY3Mvc3JjL2FwcC9mZWF0dXJlcy9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLGVBQWU7RUFDZixjQUFjLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZG9jcy9zcmMvYXBwL2ZlYXR1cmVzL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiIDpob3N0IHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBkaXNwbGF5OiBibG9jazsgfVxuIl19 */"

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