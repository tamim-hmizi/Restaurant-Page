"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./YuseiMagic-Regular.ttf */ "./src/YuseiMagic-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Yusei Magic';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-image: url('https://web.archive.org/web/20230323212405im_/https://eckben.github.io/bearysBreakfastBar/img/643.png');\r\n    font-family: 'Yusei Magic';\r\n}\r\n\r\nnav {\r\n    padding-top: 10px;\r\n    background-color: #ffde73;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    list-style: none;\r\n}\r\n\r\nli {\r\n    border: 1px solid black;\r\n    border-bottom: none;\r\n    padding-block: 20px;\r\n    text-align: center;\r\n    width: 98px;\r\n    border-radius: 5px;\r\n    position: relative;\r\n}\r\n\r\nli:hover,\r\nli.active {\r\n    background-color: rgb(236, 164, 59);\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n    display: none;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: -40px;\r\n    left: -2%;\r\n}\r\n\r\nli:hover img,\r\nli.active img {\r\n    display: block;\r\n}\r\n\r\n.flex-div {\r\n    padding: 20px;\r\n    background-color: #ffde73;\r\n    margin-block: 20px;\r\n    margin-inline: auto;\r\n    border: none;\r\n    border-radius: 20px;\r\n    max-width: 810px;\r\n}\r\n.blocks-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    align-items: center;\r\n}\r\n.outer-block {\r\n    padding: 20px;\r\n    clip-path: polygon(\r\n        0 21%,\r\n        11% 0,\r\n        89% 0,\r\n        100% 21%,\r\n        100% 79%,\r\n        89% 100%,\r\n        11% 100%,\r\n        0 79%\r\n    );\r\n    background-color: #c16a08;\r\n}\r\n\r\n.inner-block {\r\n    background-color: #ffc60b;\r\n    padding: 20px;\r\n    clip-path: polygon(\r\n        0 20%,\r\n        10% 0,\r\n        90% 0,\r\n        100% 20%,\r\n        100% 80%,\r\n        90% 100%,\r\n        10% 100%,\r\n        0 80%\r\n    );\r\n    max-width: 550px;\r\n    min-width: 450px;\r\n}\r\n.text-center {\r\n    text-align: center;\r\n}\r\n.bee-nest,\r\n.comb-nest {\r\n    position: relative;\r\n}\r\n.bee1,\r\n.bee2,\r\n.comb {\r\n    display: block;\r\n    width: 50px;\r\n    height: 50px;\r\n    position: absolute;\r\n}\r\n.bee1 {\r\n    top: 15%;\r\n    left: 2%;\r\n}\r\n.bee2 {\r\n    top: 15%;\r\n    left: 87%;\r\n    transform: rotate(100deg);\r\n}\r\n.comb {\r\n    top: 1%;\r\n    left: 44%;\r\n}\r\n.img-container {\r\n    position: relative;\r\n}\r\n.product-image,\r\n.product-image-contact {\r\n    display: block;\r\n    width: 250px;\r\n    height: 250px;\r\n    position: absolute;\r\n    left: 40%;\r\n    top: 35%;\r\n    border: 5px solid #c16a08;\r\n    border-radius: 30px;\r\n}\r\n.inner-block-img {\r\n    padding: 30px;\r\n    height: 400px;\r\n}\r\n.product-image-contact {\r\n    left: 22%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,4CAAkC;AACtC;AACA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,8HAA8H;IAC9H,0BAA0B;AAC9B;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;;IAEI,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,SAAS;AACb;;AAEA;;IAEI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,aAAa;IACb;;;;;;;;;KASC;IACD,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb;;;;;;;;;KASC;IACD,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,kBAAkB;AACtB;AACA;;;IAGI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,QAAQ;IACR,QAAQ;AACZ;AACA;IACI,QAAQ;IACR,SAAS;IACT,yBAAyB;AAC7B;AACA;IACI,OAAO;IACP,SAAS;AACb;AACA;IACI,kBAAkB;AACtB;AACA;;IAEI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,aAAa;AACjB;AACA;IACI,SAAS;AACb","sourcesContent":["@font-face {\r\n    font-family: 'Yusei Magic';\r\n    src: url(./YuseiMagic-Regular.ttf);\r\n}\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-image: url('https://web.archive.org/web/20230323212405im_/https://eckben.github.io/bearysBreakfastBar/img/643.png');\r\n    font-family: 'Yusei Magic';\r\n}\r\n\r\nnav {\r\n    padding-top: 10px;\r\n    background-color: #ffde73;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    list-style: none;\r\n}\r\n\r\nli {\r\n    border: 1px solid black;\r\n    border-bottom: none;\r\n    padding-block: 20px;\r\n    text-align: center;\r\n    width: 98px;\r\n    border-radius: 5px;\r\n    position: relative;\r\n}\r\n\r\nli:hover,\r\nli.active {\r\n    background-color: rgb(236, 164, 59);\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n    display: none;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: -40px;\r\n    left: -2%;\r\n}\r\n\r\nli:hover img,\r\nli.active img {\r\n    display: block;\r\n}\r\n\r\n.flex-div {\r\n    padding: 20px;\r\n    background-color: #ffde73;\r\n    margin-block: 20px;\r\n    margin-inline: auto;\r\n    border: none;\r\n    border-radius: 20px;\r\n    max-width: 810px;\r\n}\r\n.blocks-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    align-items: center;\r\n}\r\n.outer-block {\r\n    padding: 20px;\r\n    clip-path: polygon(\r\n        0 21%,\r\n        11% 0,\r\n        89% 0,\r\n        100% 21%,\r\n        100% 79%,\r\n        89% 100%,\r\n        11% 100%,\r\n        0 79%\r\n    );\r\n    background-color: #c16a08;\r\n}\r\n\r\n.inner-block {\r\n    background-color: #ffc60b;\r\n    padding: 20px;\r\n    clip-path: polygon(\r\n        0 20%,\r\n        10% 0,\r\n        90% 0,\r\n        100% 20%,\r\n        100% 80%,\r\n        90% 100%,\r\n        10% 100%,\r\n        0 80%\r\n    );\r\n    max-width: 550px;\r\n    min-width: 450px;\r\n}\r\n.text-center {\r\n    text-align: center;\r\n}\r\n.bee-nest,\r\n.comb-nest {\r\n    position: relative;\r\n}\r\n.bee1,\r\n.bee2,\r\n.comb {\r\n    display: block;\r\n    width: 50px;\r\n    height: 50px;\r\n    position: absolute;\r\n}\r\n.bee1 {\r\n    top: 15%;\r\n    left: 2%;\r\n}\r\n.bee2 {\r\n    top: 15%;\r\n    left: 87%;\r\n    transform: rotate(100deg);\r\n}\r\n.comb {\r\n    top: 1%;\r\n    left: 44%;\r\n}\r\n.img-container {\r\n    position: relative;\r\n}\r\n.product-image,\r\n.product-image-contact {\r\n    display: block;\r\n    width: 250px;\r\n    height: 250px;\r\n    position: absolute;\r\n    left: 40%;\r\n    top: 35%;\r\n    border: 5px solid #c16a08;\r\n    border-radius: 30px;\r\n}\r\n.inner-block-img {\r\n    padding: 30px;\r\n    height: 400px;\r\n}\r\n.product-image-contact {\r\n    left: 22%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _bee_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bee.png */ "./src/bee.png");
/* harmony import */ var _bear_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bear.jpeg */ "./src/bear.jpeg");




const contact = () => {
    const bee1 = new Image()
    bee1.src = _bee_png__WEBPACK_IMPORTED_MODULE_1__
    const bee2 = new Image()
    bee2.src = _bee_png__WEBPACK_IMPORTED_MODULE_1__
    const MamaBear = new Image()
    MamaBear.src = _bear_jpeg__WEBPACK_IMPORTED_MODULE_2__
    const element = document.createElement('div')
    element.classList.add('blocks-container')
    element.innerHTML = `<div class='outer-block'><div class='inner-block bee-nest'><img src='${bee1.src}' class='bee1' alt='bee image'/><h1 class='text-center'>Contact Us</h1><img src='${bee2.src}' class='bee2' alt='bee image'/></div></div><div class='outer-block'><div class='inner-block img-container inner-block-img'><h3>Mama Bear</h3><p>Chef<br/>
    555-555-5554<br/>
    totallyRealEmail@notFake.com<br/></p><img src='${MamaBear.src}' alt='Beary Tea Image' class='product-image-contact'/></div></div>`
    return element
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _bee_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bee.png */ "./src/bee.png");
/* harmony import */ var _honeycomb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./honeycomb.png */ "./src/honeycomb.png");




const home = () => {
    const bee1 = new Image()
    bee1.src = _bee_png__WEBPACK_IMPORTED_MODULE_1__
    const bee2 = new Image()
    bee2.src = _bee_png__WEBPACK_IMPORTED_MODULE_1__
    const comb = new Image()
    comb.src = _honeycomb_png__WEBPACK_IMPORTED_MODULE_2__
    const element = document.createElement('div')
    element.classList.add('blocks-container')
    element.innerHTML = `<div class='outer-block'><div class='inner-block bee-nest'><img src='${bee1.src}' class='bee1' alt='bee image'/><h1 class='text-center'>Beary's Breakfast Bar</h1><img src='${bee2.src}' class='bee2' alt='bee image'/></div></div><div class='outer-block comb-nest'><img src='${comb.src}' class='comb' alt='honeycomb image'/><div class='inner-block'><p class='text-center' style='padding-top:20px'>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p><h3>Goldilocks</h3></div></div><div class='outer-block'><div class='inner-block'><h2>Hours</h2><p class='text-center'>Sunday: 8am - 8pm<br/>Monday: 6am - 6pm<br/>Tuesday: 6am - 6pm<br/>Wednesday: 6am - 6pm<br/>Thursday: 6am - 10pm<br/>Friday: 6am - 10pm<br/>Saturday: 8am - 10pm</p></div></div><div class='outer-block'><div class='inner-block'><h2>Location</h2><p class='text-center'>123 Forest Drive, Forestville, Maine</p></div></div>`

    return element
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dripping_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dripping.png */ "./src/dripping.png");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");






const body = document.querySelector('body')
const content = document.createElement('div')
content.setAttribute('id', 'content')
body.appendChild(content)

const navbar = document.createElement('nav')
navbar.innerHTML = '<ul><li>Home</li><li>Menu</li><li>Contact</li></ul>'
content.appendChild(navbar)

const div = document.createElement('div')
div.classList.add('flex-div')
div.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])())
content.appendChild(div)
const selectHome = document.querySelector('li')
selectHome.classList.add('active')

const li = document.querySelectorAll('li')
li.forEach((item) => {
    const image = new Image()
    image.src = _dripping_png__WEBPACK_IMPORTED_MODULE_1__
    item.appendChild(image)
    item.addEventListener('click', () => {
        li.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove('active')
            }
            if (item.innerText === 'Home') {
                div.removeChild(div.lastChild)
                div.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])())
            }
            if (item.innerText === 'Contact') {
                div.removeChild(div.lastChild)
                div.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])())
            }
            if (item.innerText === 'Menu') {
                div.removeChild(div.lastChild)
                div.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])())
            }
        })
        item.classList.toggle('active')
    })
})


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _bee_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bee.png */ "./src/bee.png");
/* harmony import */ var _honeycomb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./honeycomb.png */ "./src/honeycomb.png");
/* harmony import */ var _BearyTea_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BearyTea.jpeg */ "./src/BearyTea.jpeg");
/* harmony import */ var _ToastandJam_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToastandJam.jpg */ "./src/ToastandJam.jpg");
/* harmony import */ var _BagelandLox_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BagelandLox.jpeg */ "./src/BagelandLox.jpeg");







const menu = () => {
    const bee1 = new Image()
    bee1.src = _bee_png__WEBPACK_IMPORTED_MODULE_1__
    const bee2 = new Image()
    bee2.src = _bee_png__WEBPACK_IMPORTED_MODULE_1__
    const comb = new Image()
    comb.src = _honeycomb_png__WEBPACK_IMPORTED_MODULE_2__
    const beary = new Image()
    beary.src = _BearyTea_jpeg__WEBPACK_IMPORTED_MODULE_3__
    const toast = new Image()
    toast.src=_ToastandJam_jpg__WEBPACK_IMPORTED_MODULE_4__
    const bagel = new Image()
    bagel.src=_BagelandLox_jpeg__WEBPACK_IMPORTED_MODULE_5__
    const element = document.createElement('div')
    element.classList.add('blocks-container')
    element.innerHTML = `<div class='outer-block'><div class='inner-block bee-nest'><img src='${bee1.src}' class='bee1' alt='bee image'/><h1 class='text-center'>Menu</h1><img src='${bee2.src}' class='bee2' alt='bee image'/></div></div><div class='outer-block comb-nest'><img src='${comb.src}' class='comb' alt='honeycomb image'/><div class='inner-block text-center'><h2>Beverages</h2></div></div><div class='outer-block'><div class='inner-block img-container inner-block-img'><h3>Beary Tea</h3><p class='text-center'>A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.</p><h4>$3</h4><img src='${beary.src}' alt='Beary Tea Image' class='product-image'/></div></div><div class='outer-block comb-nest'><img src='${comb.src}' class='comb' alt='honeycomb image'/><div class='inner-block text-center'><h2>Sides</h2></div></div><div class='outer-block'><div class='inner-block img-container inner-block-img'><h3>Toast and Jam</h3><p class='text-center'>A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.</p><h4>$1</h4><img src='${toast.src}' alt='Beary Tea Image' class='product-image'/></div></div><div class='outer-block comb-nest'><img src='${comb.src}' class='comb' alt='honeycomb image'/><div class='inner-block text-center'><h2>Main Dishes</h2></div></div><div class='outer-block'><div class='inner-block img-container inner-block-img'><h3>Bagel and Lox</h3><p class='text-center'>Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.</p><h4>$8</h4><img src='${bagel.src}' alt='Beary Tea Image' class='product-image'/></div></div>`
    return element
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/BagelandLox.jpeg":
/*!******************************!*\
  !*** ./src/BagelandLox.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e25f56eca80d2de7fb92.jpeg";

/***/ }),

/***/ "./src/BearyTea.jpeg":
/*!***************************!*\
  !*** ./src/BearyTea.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db061cffb02cf5adae84.jpeg";

/***/ }),

/***/ "./src/ToastandJam.jpg":
/*!*****************************!*\
  !*** ./src/ToastandJam.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "237a207a1bbee9db5d3b.jpg";

/***/ }),

/***/ "./src/YuseiMagic-Regular.ttf":
/*!************************************!*\
  !*** ./src/YuseiMagic-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05831bb365f82d743c95.ttf";

/***/ }),

/***/ "./src/bear.jpeg":
/*!***********************!*\
  !*** ./src/bear.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fee12648597d022beaf3.jpeg";

/***/ }),

/***/ "./src/bee.png":
/*!*********************!*\
  !*** ./src/bee.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35e3d2f7f8866fa92c3d.png";

/***/ }),

/***/ "./src/dripping.png":
/*!**************************!*\
  !*** ./src/dripping.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8ff550e9e7c6e821764.png";

/***/ }),

/***/ "./src/honeycomb.png":
/*!***************************!*\
  !*** ./src/honeycomb.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37021ac45a35d5ed8735.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGdDQUFnQyxvREFBTztBQUN2QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQUk7QUFDcEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NtQjtBQUNPO0FBQ1k7QUFDRDtBQUNLO0FBQ0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQ0FBRztBQUNsQjtBQUNBLGVBQWUscUNBQUc7QUFDbEI7QUFDQSxlQUFlLDJDQUFTO0FBQ3hCO0FBQ0EsZ0JBQWdCLDJDQUFRO0FBQ3hCO0FBQ0EsY0FBYyw2Q0FBVztBQUN6QjtBQUNBLGNBQWMsOENBQVc7QUFDekI7QUFDQTtBQUNBLGdHQUFnRyxTQUFTLDZFQUE2RSxTQUFTLDJGQUEyRixTQUFTLGdaQUFnWixVQUFVLDBHQUEwRyxTQUFTLGtWQUFrVixVQUFVLDBHQUEwRyxTQUFTLHdXQUF3VyxVQUFVO0FBQ2puRDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1l1c2VpTWFnaWMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdZdXNlaSBNYWdpYyc7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMjMwMzIzMjEyNDA1aW1fL2h0dHBzOi8vZWNrYmVuLmdpdGh1Yi5pby9iZWFyeXNCcmVha2Zhc3RCYXIvaW1nLzY0My5wbmcnKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdZdXNlaSBNYWdpYyc7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZTczO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDk4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlcixcXHJcXG5saS5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAxNjQsIDU5KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJvdHRvbTogLTQwcHg7XFxyXFxuICAgIGxlZnQ6IC0yJTtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIgaW1nLFxcclxcbmxpLmFjdGl2ZSBpbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtZGl2IHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGU3MztcXHJcXG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4O1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIG1heC13aWR0aDogODEwcHg7XFxyXFxufVxcclxcbi5ibG9ja3MtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ub3V0ZXItYmxvY2sge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxyXFxuICAgICAgICAwIDIxJSxcXHJcXG4gICAgICAgIDExJSAwLFxcclxcbiAgICAgICAgODklIDAsXFxyXFxuICAgICAgICAxMDAlIDIxJSxcXHJcXG4gICAgICAgIDEwMCUgNzklLFxcclxcbiAgICAgICAgODklIDEwMCUsXFxyXFxuICAgICAgICAxMSUgMTAwJSxcXHJcXG4gICAgICAgIDAgNzklXFxyXFxuICAgICk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMTZhMDg7XFxyXFxufVxcclxcblxcclxcbi5pbm5lci1ibG9jayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM2MGI7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgICAgIDAgMjAlLFxcclxcbiAgICAgICAgMTAlIDAsXFxyXFxuICAgICAgICA5MCUgMCxcXHJcXG4gICAgICAgIDEwMCUgMjAlLFxcclxcbiAgICAgICAgMTAwJSA4MCUsXFxyXFxuICAgICAgICA5MCUgMTAwJSxcXHJcXG4gICAgICAgIDEwJSAxMDAlLFxcclxcbiAgICAgICAgMCA4MCVcXHJcXG4gICAgKTtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgbWluLXdpZHRoOiA0NTBweDtcXHJcXG59XFxyXFxuLnRleHQtY2VudGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uYmVlLW5lc3QsXFxyXFxuLmNvbWItbmVzdCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmJlZTEsXFxyXFxuLmJlZTIsXFxyXFxuLmNvbWIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uYmVlMSB7XFxyXFxuICAgIHRvcDogMTUlO1xcclxcbiAgICBsZWZ0OiAyJTtcXHJcXG59XFxyXFxuLmJlZTIge1xcclxcbiAgICB0b3A6IDE1JTtcXHJcXG4gICAgbGVmdDogODclO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDBkZWcpO1xcclxcbn1cXHJcXG4uY29tYiB7XFxyXFxuICAgIHRvcDogMSU7XFxyXFxuICAgIGxlZnQ6IDQ0JTtcXHJcXG59XFxyXFxuLmltZy1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5wcm9kdWN0LWltYWdlLFxcclxcbi5wcm9kdWN0LWltYWdlLWNvbnRhY3Qge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDQwJTtcXHJcXG4gICAgdG9wOiAzNSU7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNjMTZhMDg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxufVxcclxcbi5pbm5lci1ibG9jay1pbWcge1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbn1cXHJcXG4ucHJvZHVjdC1pbWFnZS1jb250YWN0IHtcXHJcXG4gICAgbGVmdDogMjIlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLDRDQUFrQztBQUN0QztBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4SEFBOEg7SUFDOUgsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksbUNBQW1DO0lBQ25DLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiOzs7Ozs7Ozs7S0FTQztJQUNELHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2I7Ozs7Ozs7OztLQVNDO0lBQ0QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7OztJQUdJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksUUFBUTtJQUNSLFFBQVE7QUFDWjtBQUNBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLE9BQU87SUFDUCxTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnWXVzZWkgTWFnaWMnO1xcclxcbiAgICBzcmM6IHVybCguL1l1c2VpTWFnaWMtUmVndWxhci50dGYpO1xcclxcbn1cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAyMzAzMjMyMTI0MDVpbV8vaHR0cHM6Ly9lY2tiZW4uZ2l0aHViLmlvL2JlYXJ5c0JyZWFrZmFzdEJhci9pbWcvNjQzLnBuZycpO1xcclxcbiAgICBmb250LWZhbWlseTogJ1l1c2VpIE1hZ2ljJztcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRlNzM7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogOThweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyLFxcclxcbmxpLmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE2NCwgNTkpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYm90dG9tOiAtNDBweDtcXHJcXG4gICAgbGVmdDogLTIlO1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciBpbWcsXFxyXFxubGkuYWN0aXZlIGltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1kaXYge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZTczO1xcclxcbiAgICBtYXJnaW4tYmxvY2s6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MTBweDtcXHJcXG59XFxyXFxuLmJsb2Nrcy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5vdXRlci1ibG9jayB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgICAgIDAgMjElLFxcclxcbiAgICAgICAgMTElIDAsXFxyXFxuICAgICAgICA4OSUgMCxcXHJcXG4gICAgICAgIDEwMCUgMjElLFxcclxcbiAgICAgICAgMTAwJSA3OSUsXFxyXFxuICAgICAgICA4OSUgMTAwJSxcXHJcXG4gICAgICAgIDExJSAxMDAlLFxcclxcbiAgICAgICAgMCA3OSVcXHJcXG4gICAgKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxNmEwODtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyLWJsb2NrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzYwYjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcclxcbiAgICAgICAgMCAyMCUsXFxyXFxuICAgICAgICAxMCUgMCxcXHJcXG4gICAgICAgIDkwJSAwLFxcclxcbiAgICAgICAgMTAwJSAyMCUsXFxyXFxuICAgICAgICAxMDAlIDgwJSxcXHJcXG4gICAgICAgIDkwJSAxMDAlLFxcclxcbiAgICAgICAgMTAlIDEwMCUsXFxyXFxuICAgICAgICAwIDgwJVxcclxcbiAgICApO1xcclxcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQ1MHB4O1xcclxcbn1cXHJcXG4udGV4dC1jZW50ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5iZWUtbmVzdCxcXHJcXG4uY29tYi1uZXN0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uYmVlMSxcXHJcXG4uYmVlMixcXHJcXG4uY29tYiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5iZWUxIHtcXHJcXG4gICAgdG9wOiAxNSU7XFxyXFxuICAgIGxlZnQ6IDIlO1xcclxcbn1cXHJcXG4uYmVlMiB7XFxyXFxuICAgIHRvcDogMTUlO1xcclxcbiAgICBsZWZ0OiA4NyU7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwMGRlZyk7XFxyXFxufVxcclxcbi5jb21iIHtcXHJcXG4gICAgdG9wOiAxJTtcXHJcXG4gICAgbGVmdDogNDQlO1xcclxcbn1cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLnByb2R1Y3QtaW1hZ2UsXFxyXFxuLnByb2R1Y3QtaW1hZ2UtY29udGFjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNDAlO1xcclxcbiAgICB0b3A6IDM1JTtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2MxNmEwODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuLmlubmVyLWJsb2NrLWltZyB7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxufVxcclxcbi5wcm9kdWN0LWltYWdlLWNvbnRhY3Qge1xcclxcbiAgICBsZWZ0OiAyMiU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgYmVlIGZyb20gJy4vYmVlLnBuZydcclxuaW1wb3J0IGJlYXIgZnJvbSAnLi9iZWFyLmpwZWcnXHJcblxyXG5jb25zdCBjb250YWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYmVlMSA9IG5ldyBJbWFnZSgpXHJcbiAgICBiZWUxLnNyYyA9IGJlZVxyXG4gICAgY29uc3QgYmVlMiA9IG5ldyBJbWFnZSgpXHJcbiAgICBiZWUyLnNyYyA9IGJlZVxyXG4gICAgY29uc3QgTWFtYUJlYXIgPSBuZXcgSW1hZ2UoKVxyXG4gICAgTWFtYUJlYXIuc3JjID0gYmVhclxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2Nrcy1jb250YWluZXInKVxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nb3V0ZXItYmxvY2snPjxkaXYgY2xhc3M9J2lubmVyLWJsb2NrIGJlZS1uZXN0Jz48aW1nIHNyYz0nJHtiZWUxLnNyY30nIGNsYXNzPSdiZWUxJyBhbHQ9J2JlZSBpbWFnZScvPjxoMSBjbGFzcz0ndGV4dC1jZW50ZXInPkNvbnRhY3QgVXM8L2gxPjxpbWcgc3JjPScke2JlZTIuc3JjfScgY2xhc3M9J2JlZTInIGFsdD0nYmVlIGltYWdlJy8+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0nb3V0ZXItYmxvY2snPjxkaXYgY2xhc3M9J2lubmVyLWJsb2NrIGltZy1jb250YWluZXIgaW5uZXItYmxvY2staW1nJz48aDM+TWFtYSBCZWFyPC9oMz48cD5DaGVmPGJyLz5cclxuICAgIDU1NS01NTUtNTU1NDxici8+XHJcbiAgICB0b3RhbGx5UmVhbEVtYWlsQG5vdEZha2UuY29tPGJyLz48L3A+PGltZyBzcmM9JyR7TWFtYUJlYXIuc3JjfScgYWx0PSdCZWFyeSBUZWEgSW1hZ2UnIGNsYXNzPSdwcm9kdWN0LWltYWdlLWNvbnRhY3QnLz48L2Rpdj48L2Rpdj5gXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0XHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCBiZWUgZnJvbSAnLi9iZWUucG5nJ1xyXG5pbXBvcnQgaG9uZXljb21iIGZyb20gJy4vaG9uZXljb21iLnBuZydcclxuXHJcbmNvbnN0IGhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBiZWUxID0gbmV3IEltYWdlKClcclxuICAgIGJlZTEuc3JjID0gYmVlXHJcbiAgICBjb25zdCBiZWUyID0gbmV3IEltYWdlKClcclxuICAgIGJlZTIuc3JjID0gYmVlXHJcbiAgICBjb25zdCBjb21iID0gbmV3IEltYWdlKClcclxuICAgIGNvbWIuc3JjID0gaG9uZXljb21iXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2tzLWNvbnRhaW5lcicpXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSdvdXRlci1ibG9jayc+PGRpdiBjbGFzcz0naW5uZXItYmxvY2sgYmVlLW5lc3QnPjxpbWcgc3JjPScke2JlZTEuc3JjfScgY2xhc3M9J2JlZTEnIGFsdD0nYmVlIGltYWdlJy8+PGgxIGNsYXNzPSd0ZXh0LWNlbnRlcic+QmVhcnkncyBCcmVha2Zhc3QgQmFyPC9oMT48aW1nIHNyYz0nJHtiZWUyLnNyY30nIGNsYXNzPSdiZWUyJyBhbHQ9J2JlZSBpbWFnZScvPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9J291dGVyLWJsb2NrIGNvbWItbmVzdCc+PGltZyBzcmM9JyR7Y29tYi5zcmN9JyBjbGFzcz0nY29tYicgYWx0PSdob25leWNvbWIgaW1hZ2UnLz48ZGl2IGNsYXNzPSdpbm5lci1ibG9jayc+PHAgY2xhc3M9J3RleHQtY2VudGVyJyBzdHlsZT0ncGFkZGluZy10b3A6MjBweCc+QmVhcnkncyBoYXMgdGhlIGJlc3QgcG9ycmlkZ2UhIFRoZSBhdG1vc3BoZXJlIGFuZCBjdXN0b21lciBzZXJ2aWNlIG1ha2UgeW91IGZlZWwgbGlrZSB5b3UgYXJlIHNpdHRpbmcgaW4gdGhlIG1pZGRsZSBvZiB0aGUgd29vZHMsIGVhdGluZyBsaWtlIGEgYmVhciEgVGhpcyBpcyBleGFjdGx5IHRoZSBraW5kIG9mIHBsYWNlIHRoYXQgSSBsaWtlIHRvIHJldHVybiB0byBhZ2FpbiBhbmQgYWdhaW4uPC9wPjxoMz5Hb2xkaWxvY2tzPC9oMz48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSdvdXRlci1ibG9jayc+PGRpdiBjbGFzcz0naW5uZXItYmxvY2snPjxoMj5Ib3VyczwvaDI+PHAgY2xhc3M9J3RleHQtY2VudGVyJz5TdW5kYXk6IDhhbSAtIDhwbTxici8+TW9uZGF5OiA2YW0gLSA2cG08YnIvPlR1ZXNkYXk6IDZhbSAtIDZwbTxici8+V2VkbmVzZGF5OiA2YW0gLSA2cG08YnIvPlRodXJzZGF5OiA2YW0gLSAxMHBtPGJyLz5GcmlkYXk6IDZhbSAtIDEwcG08YnIvPlNhdHVyZGF5OiA4YW0gLSAxMHBtPC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9J291dGVyLWJsb2NrJz48ZGl2IGNsYXNzPSdpbm5lci1ibG9jayc+PGgyPkxvY2F0aW9uPC9oMj48cCBjbGFzcz0ndGV4dC1jZW50ZXInPjEyMyBGb3Jlc3QgRHJpdmUsIEZvcmVzdHZpbGxlLCBNYWluZTwvcD48L2Rpdj48L2Rpdj5gXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVxyXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgZHJpcHBpbmcgZnJvbSAnLi9kcmlwcGluZy5wbmcnXHJcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSdcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0J1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnXHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpXHJcbmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudClcclxuXHJcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXHJcbm5hdmJhci5pbm5lckhUTUwgPSAnPHVsPjxsaT5Ib21lPC9saT48bGk+TWVudTwvbGk+PGxpPkNvbnRhY3Q8L2xpPjwvdWw+J1xyXG5jb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcilcclxuXHJcbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmRpdi5jbGFzc0xpc3QuYWRkKCdmbGV4LWRpdicpXHJcbmRpdi5hcHBlbmRDaGlsZChob21lKCkpXHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG5jb25zdCBzZWxlY3RIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGknKVxyXG5zZWxlY3RIb21lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblxyXG5jb25zdCBsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylcclxubGkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxyXG4gICAgaW1hZ2Uuc3JjID0gZHJpcHBpbmdcclxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaW1hZ2UpXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxpLmZvckVhY2goKG90aGVySXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3RoZXJJdGVtICE9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBvdGhlckl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5pbm5lclRleHQgPT09ICdIb21lJykge1xyXG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5sYXN0Q2hpbGQpXHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaG9tZSgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlubmVyVGV4dCA9PT0gJ0NvbnRhY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2Lmxhc3RDaGlsZClcclxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWN0KCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0uaW5uZXJUZXh0ID09PSAnTWVudScpIHtcclxuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYubGFzdENoaWxkKVxyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKG1lbnUoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgfSlcclxufSlcclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IGJlZSBmcm9tICcuL2JlZS5wbmcnXHJcbmltcG9ydCBob25leWNvbWIgZnJvbSAnLi9ob25leWNvbWIucG5nJ1xyXG5pbXBvcnQgQmVhcnlUZWEgZnJvbSAnLi9CZWFyeVRlYS5qcGVnJ1xyXG5pbXBvcnQgVG9hc3RhbmRKYW0gZnJvbSAnLi9Ub2FzdGFuZEphbS5qcGcnXHJcbmltcG9ydCBCYWdlbGFuZExveCBmcm9tICcuL0JhZ2VsYW5kTG94LmpwZWcnXHJcblxyXG5jb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYmVlMSA9IG5ldyBJbWFnZSgpXHJcbiAgICBiZWUxLnNyYyA9IGJlZVxyXG4gICAgY29uc3QgYmVlMiA9IG5ldyBJbWFnZSgpXHJcbiAgICBiZWUyLnNyYyA9IGJlZVxyXG4gICAgY29uc3QgY29tYiA9IG5ldyBJbWFnZSgpXHJcbiAgICBjb21iLnNyYyA9IGhvbmV5Y29tYlxyXG4gICAgY29uc3QgYmVhcnkgPSBuZXcgSW1hZ2UoKVxyXG4gICAgYmVhcnkuc3JjID0gQmVhcnlUZWFcclxuICAgIGNvbnN0IHRvYXN0ID0gbmV3IEltYWdlKClcclxuICAgIHRvYXN0LnNyYz1Ub2FzdGFuZEphbVxyXG4gICAgY29uc3QgYmFnZWwgPSBuZXcgSW1hZ2UoKVxyXG4gICAgYmFnZWwuc3JjPUJhZ2VsYW5kTG94XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvY2tzLWNvbnRhaW5lcicpXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSdvdXRlci1ibG9jayc+PGRpdiBjbGFzcz0naW5uZXItYmxvY2sgYmVlLW5lc3QnPjxpbWcgc3JjPScke2JlZTEuc3JjfScgY2xhc3M9J2JlZTEnIGFsdD0nYmVlIGltYWdlJy8+PGgxIGNsYXNzPSd0ZXh0LWNlbnRlcic+TWVudTwvaDE+PGltZyBzcmM9JyR7YmVlMi5zcmN9JyBjbGFzcz0nYmVlMicgYWx0PSdiZWUgaW1hZ2UnLz48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSdvdXRlci1ibG9jayBjb21iLW5lc3QnPjxpbWcgc3JjPScke2NvbWIuc3JjfScgY2xhc3M9J2NvbWInIGFsdD0naG9uZXljb21iIGltYWdlJy8+PGRpdiBjbGFzcz0naW5uZXItYmxvY2sgdGV4dC1jZW50ZXInPjxoMj5CZXZlcmFnZXM8L2gyPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9J291dGVyLWJsb2NrJz48ZGl2IGNsYXNzPSdpbm5lci1ibG9jayBpbWctY29udGFpbmVyIGlubmVyLWJsb2NrLWltZyc+PGgzPkJlYXJ5IFRlYTwvaDM+PHAgY2xhc3M9J3RleHQtY2VudGVyJz5BIGNvbWZvcnRpbmcsIGFsbW9zdCBmaWxsaW5nLCB0ZWEgdGhhdCBpcyBpbmZ1c2VkIHdpdGggdGhlIGZsYXZvcnMgb2Ygc2V2ZXJhbCBraW5kcyBvZiBiZXJyaWVzLiBCZXN0IHNlcnZlZCBjb2xkLCBidXQgY2FuIGJlIHNlcnZlZCBob3Qgb24gcmVxdWVzdC48L3A+PGg0PiQzPC9oND48aW1nIHNyYz0nJHtiZWFyeS5zcmN9JyBhbHQ9J0JlYXJ5IFRlYSBJbWFnZScgY2xhc3M9J3Byb2R1Y3QtaW1hZ2UnLz48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSdvdXRlci1ibG9jayBjb21iLW5lc3QnPjxpbWcgc3JjPScke2NvbWIuc3JjfScgY2xhc3M9J2NvbWInIGFsdD0naG9uZXljb21iIGltYWdlJy8+PGRpdiBjbGFzcz0naW5uZXItYmxvY2sgdGV4dC1jZW50ZXInPjxoMj5TaWRlczwvaDI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0nb3V0ZXItYmxvY2snPjxkaXYgY2xhc3M9J2lubmVyLWJsb2NrIGltZy1jb250YWluZXIgaW5uZXItYmxvY2staW1nJz48aDM+VG9hc3QgYW5kIEphbTwvaDM+PHAgY2xhc3M9J3RleHQtY2VudGVyJz5BIHNsaWNlIG9mIHRvYXN0LCB5b3VyIGNob2ljZSBvZiBicmVhZCwgYW5kIG91ciBob21lbWFkZSBibGFja2JlcnJ5IG9yIHJhc3BiZXJyeSBqYW0uPC9wPjxoND4kMTwvaDQ+PGltZyBzcmM9JyR7dG9hc3Quc3JjfScgYWx0PSdCZWFyeSBUZWEgSW1hZ2UnIGNsYXNzPSdwcm9kdWN0LWltYWdlJy8+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0nb3V0ZXItYmxvY2sgY29tYi1uZXN0Jz48aW1nIHNyYz0nJHtjb21iLnNyY30nIGNsYXNzPSdjb21iJyBhbHQ9J2hvbmV5Y29tYiBpbWFnZScvPjxkaXYgY2xhc3M9J2lubmVyLWJsb2NrIHRleHQtY2VudGVyJz48aDI+TWFpbiBEaXNoZXM8L2gyPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9J291dGVyLWJsb2NrJz48ZGl2IGNsYXNzPSdpbm5lci1ibG9jayBpbWctY29udGFpbmVyIGlubmVyLWJsb2NrLWltZyc+PGgzPkJhZ2VsIGFuZCBMb3g8L2gzPjxwIGNsYXNzPSd0ZXh0LWNlbnRlcic+T3VyIGhvdXNlIHNwZWNpYWx0eSwgeW91IGNhbid0IGdvIHdyb25nIHdpdGggYSBoZWFydHkgYmFnZWwgdG9wcGVkIHdpdGggc3VzdGFpbmFibHkgaGFydmVzdGVkIHNhbG1vbi48L3A+PGg0PiQ4PC9oND48aW1nIHNyYz0nJHtiYWdlbC5zcmN9JyBhbHQ9J0JlYXJ5IFRlYSBJbWFnZScgY2xhc3M9J3Byb2R1Y3QtaW1hZ2UnLz48L2Rpdj48L2Rpdj5gXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==