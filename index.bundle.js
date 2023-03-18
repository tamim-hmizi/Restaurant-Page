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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'Yusei Magic';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    background-image: url('https://eckben.github.io/bearysBreakfastBar/img/643.png');\r\n    font-family: 'Yusei Magic';\r\n  }\r\n  \r\n  nav {\r\n    padding-top: 10px;\r\n    background-color: #ffde73;\r\n  }\r\n  \r\n  ul {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    list-style: none;\r\n  }\r\n  \r\n  li {\r\n    border: 1px solid black;\r\n    border-bottom: none;\r\n    padding-block: 20px;\r\n    text-align: center;\r\n    width: 98px;\r\n    border-radius: 5px;\r\n    position: relative;\r\n  }\r\n  \r\n  li:hover,\r\n  li.active {\r\n    background-color: rgb(236, 164, 59);\r\n    cursor: pointer;\r\n  }\r\n  \r\n  img {\r\n    display: none;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: -40px;\r\n    left: -2%;\r\n  }\r\n  \r\n  li:hover img,\r\n  li.active img {\r\n    display: block;\r\n  }\r\n\r\n  .flex-div{\r\n    padding: 20px;\r\n    background-color: #ffde73;\r\n    margin-block: 20px;\r\n    margin-inline: auto;\r\n    border: none;\r\n    border-radius: 20px;\r\n    max-width: 810px;\r\n  }\r\n  .blocks-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    align-items: center;\r\n  }\r\n  .outer-block{\r\n    padding: 20px;\r\n    clip-path: polygon( 0 21%, 11% 0, 89% 0, 100% 21%, 100% 79%, 89% 100%, 11% 100%, 0 79%);\r\n    background-color: #c16a08;\r\n}\r\n\r\n  .inner-block {\r\n    background-color: #FFC60B;\r\n    padding: 20px;\r\n    clip-path: polygon( 0 20%, 10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0 80%);\r\n    max-width: 550px;\r\n    min-width: 450px;\r\n}\r\n.text-center{\r\n  text-align: center;\r\n}\r\n.bee-nest,.comb-nest{\r\n  position: relative;\r\n}\r\n.bee1,.bee2,.comb{\r\n  display: block;\r\n  width: 50px;\r\n  height: 50px;\r\n  position: absolute;\r\n}\r\n.bee1{\r\n  top: 15%;\r\n  left: 2%;\r\n}\r\n.bee2{\r\n  top: 15%;\r\n  left: 87%;\r\n  transform: rotate(100deg);\r\n}\r\n.comb{\r\n  top: 1%;\r\n  left: 44%;\r\n}\r\n.img-container{\r\n  position: relative;\r\n}\r\n.product-image,.product-image-contact{\r\n  display: block;\r\n  width: 250px;\r\n  height: 250px;\r\n  position: absolute;\r\n  left: 40%;\r\n  top: 35%;\r\n  border: 5px solid #c16a08;\r\n  border-radius: 30px;\r\n}\r\n.inner-block-img{\r\n  padding: 30px;\r\n  height: 400px;\r\n}\r\n.product-image-contact{\r\n  left: 22%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,4CAAkC;AACpC;AACA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;EACxB;;EAEA;IACE,gFAAgF;IAChF,0BAA0B;EAC5B;;EAEA;IACE,iBAAiB;IACjB,yBAAyB;EAC3B;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,gBAAgB;EAClB;;EAEA;IACE,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;;IAEE,mCAAmC;IACnC,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,SAAS;EACX;;EAEA;;IAEE,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,uFAAuF;IACvF,yBAAyB;AAC7B;;EAEE;IACE,yBAAyB;IACzB,aAAa;IACb,uFAAuF;IACvF,gBAAgB;IAChB,gBAAgB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,QAAQ;EACR,QAAQ;AACV;AACA;EACE,QAAQ;EACR,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,OAAO;EACP,SAAS;AACX;AACA;EACE,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,yBAAyB;EACzB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,aAAa;AACf;AACA;EACE,SAAS;AACX","sourcesContent":["@font-face {\r\n  font-family: 'Yusei Magic';\r\n  src: url(./YuseiMagic-Regular.ttf);\r\n}\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    background-image: url('https://eckben.github.io/bearysBreakfastBar/img/643.png');\r\n    font-family: 'Yusei Magic';\r\n  }\r\n  \r\n  nav {\r\n    padding-top: 10px;\r\n    background-color: #ffde73;\r\n  }\r\n  \r\n  ul {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    list-style: none;\r\n  }\r\n  \r\n  li {\r\n    border: 1px solid black;\r\n    border-bottom: none;\r\n    padding-block: 20px;\r\n    text-align: center;\r\n    width: 98px;\r\n    border-radius: 5px;\r\n    position: relative;\r\n  }\r\n  \r\n  li:hover,\r\n  li.active {\r\n    background-color: rgb(236, 164, 59);\r\n    cursor: pointer;\r\n  }\r\n  \r\n  img {\r\n    display: none;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: -40px;\r\n    left: -2%;\r\n  }\r\n  \r\n  li:hover img,\r\n  li.active img {\r\n    display: block;\r\n  }\r\n\r\n  .flex-div{\r\n    padding: 20px;\r\n    background-color: #ffde73;\r\n    margin-block: 20px;\r\n    margin-inline: auto;\r\n    border: none;\r\n    border-radius: 20px;\r\n    max-width: 810px;\r\n  }\r\n  .blocks-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    align-items: center;\r\n  }\r\n  .outer-block{\r\n    padding: 20px;\r\n    clip-path: polygon( 0 21%, 11% 0, 89% 0, 100% 21%, 100% 79%, 89% 100%, 11% 100%, 0 79%);\r\n    background-color: #c16a08;\r\n}\r\n\r\n  .inner-block {\r\n    background-color: #FFC60B;\r\n    padding: 20px;\r\n    clip-path: polygon( 0 20%, 10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0 80%);\r\n    max-width: 550px;\r\n    min-width: 450px;\r\n}\r\n.text-center{\r\n  text-align: center;\r\n}\r\n.bee-nest,.comb-nest{\r\n  position: relative;\r\n}\r\n.bee1,.bee2,.comb{\r\n  display: block;\r\n  width: 50px;\r\n  height: 50px;\r\n  position: absolute;\r\n}\r\n.bee1{\r\n  top: 15%;\r\n  left: 2%;\r\n}\r\n.bee2{\r\n  top: 15%;\r\n  left: 87%;\r\n  transform: rotate(100deg);\r\n}\r\n.comb{\r\n  top: 1%;\r\n  left: 44%;\r\n}\r\n.img-container{\r\n  position: relative;\r\n}\r\n.product-image,.product-image-contact{\r\n  display: block;\r\n  width: 250px;\r\n  height: 250px;\r\n  position: absolute;\r\n  left: 40%;\r\n  top: 35%;\r\n  border: 5px solid #c16a08;\r\n  border-radius: 30px;\r\n}\r\n.inner-block-img{\r\n  padding: 30px;\r\n  height: 400px;\r\n}\r\n.product-image-contact{\r\n  left: 22%;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2SEFBMkM7QUFDdkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esc0RBQXNELGlDQUFpQywyREFBMkQsS0FBSyxPQUFPLGtCQUFrQixtQkFBbUIsK0JBQStCLE9BQU8sa0JBQWtCLHlGQUF5RixtQ0FBbUMsT0FBTyxpQkFBaUIsMEJBQTBCLGtDQUFrQyxPQUFPLGdCQUFnQixzQkFBc0IsZ0NBQWdDLDRCQUE0QixrQkFBa0IseUJBQXlCLE9BQU8sZ0JBQWdCLGdDQUFnQyw0QkFBNEIsNEJBQTRCLDJCQUEyQixvQkFBb0IsMkJBQTJCLDJCQUEyQixPQUFPLHNDQUFzQyw0Q0FBNEMsd0JBQXdCLE9BQU8saUJBQWlCLHNCQUFzQiwyQkFBMkIsbUJBQW1CLHNCQUFzQixrQkFBa0IsT0FBTyw4Q0FBOEMsdUJBQXVCLE9BQU8sb0JBQW9CLHNCQUFzQixrQ0FBa0MsMkJBQTJCLDRCQUE0QixxQkFBcUIsNEJBQTRCLHlCQUF5QixPQUFPLHdCQUF3QixzQkFBc0IsK0JBQStCLGtCQUFrQiw0QkFBNEIsT0FBTyxtQkFBbUIsc0JBQXNCLGdHQUFnRyxrQ0FBa0MsS0FBSyx3QkFBd0Isa0NBQWtDLHNCQUFzQixnR0FBZ0cseUJBQXlCLHlCQUF5QixLQUFLLGlCQUFpQix5QkFBeUIsS0FBSyx5QkFBeUIseUJBQXlCLEtBQUssc0JBQXNCLHFCQUFxQixrQkFBa0IsbUJBQW1CLHlCQUF5QixLQUFLLFVBQVUsZUFBZSxlQUFlLEtBQUssVUFBVSxlQUFlLGdCQUFnQixnQ0FBZ0MsS0FBSyxVQUFVLGNBQWMsZ0JBQWdCLEtBQUssbUJBQW1CLHlCQUF5QixLQUFLLDBDQUEwQyxxQkFBcUIsbUJBQW1CLG9CQUFvQix5QkFBeUIsZ0JBQWdCLGVBQWUsZ0NBQWdDLDBCQUEwQixLQUFLLHFCQUFxQixvQkFBb0Isb0JBQW9CLEtBQUssMkJBQTJCLGdCQUFnQixLQUFLLFdBQVcsZ0ZBQWdGLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLHFDQUFxQyxpQ0FBaUMseUNBQXlDLEtBQUssT0FBTyxrQkFBa0IsbUJBQW1CLCtCQUErQixPQUFPLGtCQUFrQix5RkFBeUYsbUNBQW1DLE9BQU8saUJBQWlCLDBCQUEwQixrQ0FBa0MsT0FBTyxnQkFBZ0Isc0JBQXNCLGdDQUFnQyw0QkFBNEIsa0JBQWtCLHlCQUF5QixPQUFPLGdCQUFnQixnQ0FBZ0MsNEJBQTRCLDRCQUE0QiwyQkFBMkIsb0JBQW9CLDJCQUEyQiwyQkFBMkIsT0FBTyxzQ0FBc0MsNENBQTRDLHdCQUF3QixPQUFPLGlCQUFpQixzQkFBc0IsMkJBQTJCLG1CQUFtQixzQkFBc0Isa0JBQWtCLE9BQU8sOENBQThDLHVCQUF1QixPQUFPLG9CQUFvQixzQkFBc0Isa0NBQWtDLDJCQUEyQiw0QkFBNEIscUJBQXFCLDRCQUE0Qix5QkFBeUIsT0FBTyx3QkFBd0Isc0JBQXNCLCtCQUErQixrQkFBa0IsNEJBQTRCLE9BQU8sbUJBQW1CLHNCQUFzQixnR0FBZ0csa0NBQWtDLEtBQUssd0JBQXdCLGtDQUFrQyxzQkFBc0IsZ0dBQWdHLHlCQUF5Qix5QkFBeUIsS0FBSyxpQkFBaUIseUJBQXlCLEtBQUsseUJBQXlCLHlCQUF5QixLQUFLLHNCQUFzQixxQkFBcUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsS0FBSyxVQUFVLGVBQWUsZUFBZSxLQUFLLFVBQVUsZUFBZSxnQkFBZ0IsZ0NBQWdDLEtBQUssVUFBVSxjQUFjLGdCQUFnQixLQUFLLG1CQUFtQix5QkFBeUIsS0FBSywwQ0FBMEMscUJBQXFCLG1CQUFtQixvQkFBb0IseUJBQXlCLGdCQUFnQixlQUFlLGdDQUFnQywwQkFBMEIsS0FBSyxxQkFBcUIsb0JBQW9CLG9CQUFvQixLQUFLLDJCQUEyQixnQkFBZ0IsS0FBSyx1QkFBdUI7QUFDLzBNO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvQjtBQUNPO0FBQ0c7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQ0FBRztBQUNsQjtBQUNBLGVBQWUscUNBQUc7QUFDbEI7QUFDQSxtQkFBbUIsdUNBQUk7QUFDdkI7QUFDQTtBQUNBLGdHQUFnRyxTQUFTLG1GQUFtRixTQUFTO0FBQ3JNO0FBQ0EscURBQXFELGFBQWE7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJGO0FBQ087QUFDWTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxlQUFlLHFDQUFHO0FBQ2xCO0FBQ0EsZUFBZSxxQ0FBRztBQUNsQjtBQUNBLGVBQWUsMkNBQVM7QUFDeEI7QUFDQTtBQUNBLGdHQUFnRyxTQUFTLDhGQUE4RixTQUFTLDJGQUEyRixTQUFTO0FBQ3BUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkM7QUFDaUI7QUFDWjtBQUNNO0FBQ047QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9EQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBSTtBQUNwQztBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ21CO0FBQ087QUFDWTtBQUNEO0FBQ0s7QUFDQztBQUM1QztBQUNBO0FBQ0E7QUFDQSxlQUFlLHFDQUFHO0FBQ2xCO0FBQ0EsZUFBZSxxQ0FBRztBQUNsQjtBQUNBLGVBQWUsMkNBQVM7QUFDeEI7QUFDQSxnQkFBZ0IsMkNBQVE7QUFDeEI7QUFDQSxjQUFjLDZDQUFXO0FBQ3pCO0FBQ0EsY0FBYyw4Q0FBVztBQUN6QjtBQUNBO0FBQ0EsZ0dBQWdHLFNBQVMsNkVBQTZFLFNBQVMsMkZBQTJGLFNBQVMsZ1pBQWdaLFVBQVUsMEdBQTBHLFNBQVMsa1ZBQWtWLFVBQVUsMEdBQTBHLFNBQVMsd1dBQXdXLFVBQVU7QUFDam5EO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vWXVzZWlNYWdpYy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdZdXNlaSBNYWdpYyc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZWNrYmVuLmdpdGh1Yi5pby9iZWFyeXNCcmVha2Zhc3RCYXIvaW1nLzY0My5wbmcnKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdZdXNlaSBNYWdpYyc7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIG5hdiB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZTczO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGxpIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDk4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBsaTpob3ZlcixcXHJcXG4gIGxpLmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE2NCwgNTkpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGltZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYm90dG9tOiAtNDBweDtcXHJcXG4gICAgbGVmdDogLTIlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBsaTpob3ZlciBpbWcsXFxyXFxuICBsaS5hY3RpdmUgaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmxleC1kaXZ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRlNzM7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMjBweDtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDgxMHB4O1xcclxcbiAgfVxcclxcbiAgLmJsb2Nrcy1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5vdXRlci1ibG9ja3tcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKCAwIDIxJSwgMTElIDAsIDg5JSAwLCAxMDAlIDIxJSwgMTAwJSA3OSUsIDg5JSAxMDAlLCAxMSUgMTAwJSwgMCA3OSUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzE2YTA4O1xcclxcbn1cXHJcXG5cXHJcXG4gIC5pbm5lci1ibG9jayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkM2MEI7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbiggMCAyMCUsIDEwJSAwLCA5MCUgMCwgMTAwJSAyMCUsIDEwMCUgODAlLCA5MCUgMTAwJSwgMTAlIDEwMCUsIDAgODAlKTtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgbWluLXdpZHRoOiA0NTBweDtcXHJcXG59XFxyXFxuLnRleHQtY2VudGVye1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uYmVlLW5lc3QsLmNvbWItbmVzdHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmJlZTEsLmJlZTIsLmNvbWJ7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uYmVlMXtcXHJcXG4gIHRvcDogMTUlO1xcclxcbiAgbGVmdDogMiU7XFxyXFxufVxcclxcbi5iZWUye1xcclxcbiAgdG9wOiAxNSU7XFxyXFxuICBsZWZ0OiA4NyU7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDBkZWcpO1xcclxcbn1cXHJcXG4uY29tYntcXHJcXG4gIHRvcDogMSU7XFxyXFxuICBsZWZ0OiA0NCU7XFxyXFxufVxcclxcbi5pbWctY29udGFpbmVye1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ucHJvZHVjdC1pbWFnZSwucHJvZHVjdC1pbWFnZS1jb250YWN0e1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNDAlO1xcclxcbiAgdG9wOiAzNSU7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjYzE2YTA4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuLmlubmVyLWJsb2NrLWltZ3tcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbn1cXHJcXG4ucHJvZHVjdC1pbWFnZS1jb250YWN0e1xcclxcbiAgbGVmdDogMjIlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLDRDQUFrQztBQUNwQztBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnRkFBZ0Y7SUFDaEYsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7O0lBRUUsbUNBQW1DO0lBQ25DLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsU0FBUztFQUNYOztFQUVBOztJQUVFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVGQUF1RjtJQUN2Rix5QkFBeUI7QUFDN0I7O0VBRUU7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVGQUF1RjtJQUN2RixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsUUFBUTtBQUNWO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsT0FBTztFQUNQLFNBQVM7QUFDWDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmO0FBQ0E7RUFDRSxTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1l1c2VpIE1hZ2ljJztcXHJcXG4gIHNyYzogdXJsKC4vWXVzZWlNYWdpYy1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZWNrYmVuLmdpdGh1Yi5pby9iZWFyeXNCcmVha2Zhc3RCYXIvaW1nLzY0My5wbmcnKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdZdXNlaSBNYWdpYyc7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIG5hdiB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZTczO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGxpIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDk4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBsaTpob3ZlcixcXHJcXG4gIGxpLmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE2NCwgNTkpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGltZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYm90dG9tOiAtNDBweDtcXHJcXG4gICAgbGVmdDogLTIlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBsaTpob3ZlciBpbWcsXFxyXFxuICBsaS5hY3RpdmUgaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmxleC1kaXZ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRlNzM7XFxyXFxuICAgIG1hcmdpbi1ibG9jazogMjBweDtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDgxMHB4O1xcclxcbiAgfVxcclxcbiAgLmJsb2Nrcy1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5vdXRlci1ibG9ja3tcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKCAwIDIxJSwgMTElIDAsIDg5JSAwLCAxMDAlIDIxJSwgMTAwJSA3OSUsIDg5JSAxMDAlLCAxMSUgMTAwJSwgMCA3OSUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzE2YTA4O1xcclxcbn1cXHJcXG5cXHJcXG4gIC5pbm5lci1ibG9jayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkM2MEI7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbiggMCAyMCUsIDEwJSAwLCA5MCUgMCwgMTAwJSAyMCUsIDEwMCUgODAlLCA5MCUgMTAwJSwgMTAlIDEwMCUsIDAgODAlKTtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgbWluLXdpZHRoOiA0NTBweDtcXHJcXG59XFxyXFxuLnRleHQtY2VudGVye1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uYmVlLW5lc3QsLmNvbWItbmVzdHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmJlZTEsLmJlZTIsLmNvbWJ7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uYmVlMXtcXHJcXG4gIHRvcDogMTUlO1xcclxcbiAgbGVmdDogMiU7XFxyXFxufVxcclxcbi5iZWUye1xcclxcbiAgdG9wOiAxNSU7XFxyXFxuICBsZWZ0OiA4NyU7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDBkZWcpO1xcclxcbn1cXHJcXG4uY29tYntcXHJcXG4gIHRvcDogMSU7XFxyXFxuICBsZWZ0OiA0NCU7XFxyXFxufVxcclxcbi5pbWctY29udGFpbmVye1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ucHJvZHVjdC1pbWFnZSwucHJvZHVjdC1pbWFnZS1jb250YWN0e1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogNDAlO1xcclxcbiAgdG9wOiAzNSU7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjYzE2YTA4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuLmlubmVyLWJsb2NrLWltZ3tcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbn1cXHJcXG4ucHJvZHVjdC1pbWFnZS1jb250YWN0e1xcclxcbiAgbGVmdDogMjIlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IGJlZSBmcm9tICcuL2JlZS5wbmcnXHJcbmltcG9ydCBiZWFyIGZyb20gJy4vYmVhci5qcGVnJ1xyXG5cclxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJlZTEgPSBuZXcgSW1hZ2UoKVxyXG4gICAgYmVlMS5zcmMgPSBiZWVcclxuICAgIGNvbnN0IGJlZTIgPSBuZXcgSW1hZ2UoKVxyXG4gICAgYmVlMi5zcmMgPSBiZWVcclxuICAgIGNvbnN0IE1hbWFCZWFyID0gbmV3IEltYWdlKClcclxuICAgIE1hbWFCZWFyLnNyYyA9IGJlYXJcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibG9ja3MtY29udGFpbmVyJylcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J291dGVyLWJsb2NrJz48ZGl2IGNsYXNzPSdpbm5lci1ibG9jayBiZWUtbmVzdCc+PGltZyBzcmM9JyR7YmVlMS5zcmN9JyBjbGFzcz0nYmVlMScgYWx0PSdiZWUgaW1hZ2UnLz48aDEgY2xhc3M9J3RleHQtY2VudGVyJz5Db250YWN0IFVzPC9oMT48aW1nIHNyYz0nJHtiZWUyLnNyY30nIGNsYXNzPSdiZWUyJyBhbHQ9J2JlZSBpbWFnZScvPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9J291dGVyLWJsb2NrJz48ZGl2IGNsYXNzPSdpbm5lci1ibG9jayBpbWctY29udGFpbmVyIGlubmVyLWJsb2NrLWltZyc+PGgzPk1hbWEgQmVhcjwvaDM+PHA+Q2hlZjxici8+XHJcbiAgICA1NTUtNTU1LTU1NTQ8YnIvPlxyXG4gICAgdG90YWxseVJlYWxFbWFpbEBub3RGYWtlLmNvbTxici8+PC9wPjxpbWcgc3JjPScke01hbWFCZWFyLnNyY30nIGFsdD0nQmVhcnkgVGVhIEltYWdlJyBjbGFzcz0ncHJvZHVjdC1pbWFnZS1jb250YWN0Jy8+PC9kaXY+PC9kaXY+YFxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFxyXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgYmVlIGZyb20gJy4vYmVlLnBuZydcclxuaW1wb3J0IGhvbmV5Y29tYiBmcm9tICcuL2hvbmV5Y29tYi5wbmcnXHJcblxyXG5jb25zdCBob21lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYmVlMSA9IG5ldyBJbWFnZSgpXHJcbiAgICBiZWUxLnNyYyA9IGJlZVxyXG4gICAgY29uc3QgYmVlMiA9IG5ldyBJbWFnZSgpXHJcbiAgICBiZWUyLnNyYyA9IGJlZVxyXG4gICAgY29uc3QgY29tYiA9IG5ldyBJbWFnZSgpXHJcbiAgICBjb21iLnNyYyA9IGhvbmV5Y29tYlxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2Nrcy1jb250YWluZXInKVxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nb3V0ZXItYmxvY2snPjxkaXYgY2xhc3M9J2lubmVyLWJsb2NrIGJlZS1uZXN0Jz48aW1nIHNyYz0nJHtiZWUxLnNyY30nIGNsYXNzPSdiZWUxJyBhbHQ9J2JlZSBpbWFnZScvPjxoMSBjbGFzcz0ndGV4dC1jZW50ZXInPkJlYXJ5J3MgQnJlYWtmYXN0IEJhcjwvaDE+PGltZyBzcmM9JyR7YmVlMi5zcmN9JyBjbGFzcz0nYmVlMicgYWx0PSdiZWUgaW1hZ2UnLz48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSdvdXRlci1ibG9jayBjb21iLW5lc3QnPjxpbWcgc3JjPScke2NvbWIuc3JjfScgY2xhc3M9J2NvbWInIGFsdD0naG9uZXljb21iIGltYWdlJy8+PGRpdiBjbGFzcz0naW5uZXItYmxvY2snPjxwIGNsYXNzPSd0ZXh0LWNlbnRlcicgc3R5bGU9J3BhZGRpbmctdG9wOjIwcHgnPkJlYXJ5J3MgaGFzIHRoZSBiZXN0IHBvcnJpZGdlISBUaGUgYXRtb3NwaGVyZSBhbmQgY3VzdG9tZXIgc2VydmljZSBtYWtlIHlvdSBmZWVsIGxpa2UgeW91IGFyZSBzaXR0aW5nIGluIHRoZSBtaWRkbGUgb2YgdGhlIHdvb2RzLCBlYXRpbmcgbGlrZSBhIGJlYXIhIFRoaXMgaXMgZXhhY3RseSB0aGUga2luZCBvZiBwbGFjZSB0aGF0IEkgbGlrZSB0byByZXR1cm4gdG8gYWdhaW4gYW5kIGFnYWluLjwvcD48aDM+R29sZGlsb2NrczwvaDM+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0nb3V0ZXItYmxvY2snPjxkaXYgY2xhc3M9J2lubmVyLWJsb2NrJz48aDI+SG91cnM8L2gyPjxwIGNsYXNzPSd0ZXh0LWNlbnRlcic+U3VuZGF5OiA4YW0gLSA4cG08YnIvPk1vbmRheTogNmFtIC0gNnBtPGJyLz5UdWVzZGF5OiA2YW0gLSA2cG08YnIvPldlZG5lc2RheTogNmFtIC0gNnBtPGJyLz5UaHVyc2RheTogNmFtIC0gMTBwbTxici8+RnJpZGF5OiA2YW0gLSAxMHBtPGJyLz5TYXR1cmRheTogOGFtIC0gMTBwbTwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSdvdXRlci1ibG9jayc+PGRpdiBjbGFzcz0naW5uZXItYmxvY2snPjxoMj5Mb2NhdGlvbjwvaDI+PHAgY2xhc3M9J3RleHQtY2VudGVyJz4xMjMgRm9yZXN0IERyaXZlLCBGb3Jlc3R2aWxsZSwgTWFpbmU8L3A+PC9kaXY+PC9kaXY+YFxyXG5cclxuICAgIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVcclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IGRyaXBwaW5nIGZyb20gJy4vZHJpcHBpbmcucG5nJ1xyXG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnXHJcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCdcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51J1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKVxyXG5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpXHJcblxyXG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxyXG5uYXZiYXIuaW5uZXJIVE1MID0gJzx1bD48bGk+SG9tZTwvbGk+PGxpPk1lbnU8L2xpPjxsaT5Db250YWN0PC9saT48L3VsPidcclxuY29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIpXHJcblxyXG5jb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5kaXYuY2xhc3NMaXN0LmFkZCgnZmxleC1kaXYnKVxyXG5kaXYuYXBwZW5kQ2hpbGQoaG9tZSgpKVxyXG5jb250ZW50LmFwcGVuZENoaWxkKGRpdilcclxuY29uc3Qgc2VsZWN0SG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpJylcclxuc2VsZWN0SG9tZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxuY29uc3QgbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpXHJcbmxpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKClcclxuICAgIGltYWdlLnNyYyA9IGRyaXBwaW5nXHJcbiAgICBpdGVtLmFwcGVuZENoaWxkKGltYWdlKVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsaS5mb3JFYWNoKChvdGhlckl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKG90aGVySXRlbSAhPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0uaW5uZXJUZXh0ID09PSAnSG9tZScpIHtcclxuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYubGFzdENoaWxkKVxyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGhvbWUoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5pbm5lclRleHQgPT09ICdDb250YWN0Jykge1xyXG4gICAgICAgICAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5sYXN0Q2hpbGQpXHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFjdCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlubmVyVGV4dCA9PT0gJ01lbnUnKSB7XHJcbiAgICAgICAgICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2Lmxhc3RDaGlsZClcclxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChtZW51KCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgIH0pXHJcbn0pXHJcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCBiZWUgZnJvbSAnLi9iZWUucG5nJ1xyXG5pbXBvcnQgaG9uZXljb21iIGZyb20gJy4vaG9uZXljb21iLnBuZydcclxuaW1wb3J0IEJlYXJ5VGVhIGZyb20gJy4vQmVhcnlUZWEuanBlZydcclxuaW1wb3J0IFRvYXN0YW5kSmFtIGZyb20gJy4vVG9hc3RhbmRKYW0uanBnJ1xyXG5pbXBvcnQgQmFnZWxhbmRMb3ggZnJvbSAnLi9CYWdlbGFuZExveC5qcGVnJ1xyXG5cclxuY29uc3QgbWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJlZTEgPSBuZXcgSW1hZ2UoKVxyXG4gICAgYmVlMS5zcmMgPSBiZWVcclxuICAgIGNvbnN0IGJlZTIgPSBuZXcgSW1hZ2UoKVxyXG4gICAgYmVlMi5zcmMgPSBiZWVcclxuICAgIGNvbnN0IGNvbWIgPSBuZXcgSW1hZ2UoKVxyXG4gICAgY29tYi5zcmMgPSBob25leWNvbWJcclxuICAgIGNvbnN0IGJlYXJ5ID0gbmV3IEltYWdlKClcclxuICAgIGJlYXJ5LnNyYyA9IEJlYXJ5VGVhXHJcbiAgICBjb25zdCB0b2FzdCA9IG5ldyBJbWFnZSgpXHJcbiAgICB0b2FzdC5zcmM9VG9hc3RhbmRKYW1cclxuICAgIGNvbnN0IGJhZ2VsID0gbmV3IEltYWdlKClcclxuICAgIGJhZ2VsLnNyYz1CYWdlbGFuZExveFxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2Nrcy1jb250YWluZXInKVxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nb3V0ZXItYmxvY2snPjxkaXYgY2xhc3M9J2lubmVyLWJsb2NrIGJlZS1uZXN0Jz48aW1nIHNyYz0nJHtiZWUxLnNyY30nIGNsYXNzPSdiZWUxJyBhbHQ9J2JlZSBpbWFnZScvPjxoMSBjbGFzcz0ndGV4dC1jZW50ZXInPk1lbnU8L2gxPjxpbWcgc3JjPScke2JlZTIuc3JjfScgY2xhc3M9J2JlZTInIGFsdD0nYmVlIGltYWdlJy8+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0nb3V0ZXItYmxvY2sgY29tYi1uZXN0Jz48aW1nIHNyYz0nJHtjb21iLnNyY30nIGNsYXNzPSdjb21iJyBhbHQ9J2hvbmV5Y29tYiBpbWFnZScvPjxkaXYgY2xhc3M9J2lubmVyLWJsb2NrIHRleHQtY2VudGVyJz48aDI+QmV2ZXJhZ2VzPC9oMj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSdvdXRlci1ibG9jayc+PGRpdiBjbGFzcz0naW5uZXItYmxvY2sgaW1nLWNvbnRhaW5lciBpbm5lci1ibG9jay1pbWcnPjxoMz5CZWFyeSBUZWE8L2gzPjxwIGNsYXNzPSd0ZXh0LWNlbnRlcic+QSBjb21mb3J0aW5nLCBhbG1vc3QgZmlsbGluZywgdGVhIHRoYXQgaXMgaW5mdXNlZCB3aXRoIHRoZSBmbGF2b3JzIG9mIHNldmVyYWwga2luZHMgb2YgYmVycmllcy4gQmVzdCBzZXJ2ZWQgY29sZCwgYnV0IGNhbiBiZSBzZXJ2ZWQgaG90IG9uIHJlcXVlc3QuPC9wPjxoND4kMzwvaDQ+PGltZyBzcmM9JyR7YmVhcnkuc3JjfScgYWx0PSdCZWFyeSBUZWEgSW1hZ2UnIGNsYXNzPSdwcm9kdWN0LWltYWdlJy8+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0nb3V0ZXItYmxvY2sgY29tYi1uZXN0Jz48aW1nIHNyYz0nJHtjb21iLnNyY30nIGNsYXNzPSdjb21iJyBhbHQ9J2hvbmV5Y29tYiBpbWFnZScvPjxkaXYgY2xhc3M9J2lubmVyLWJsb2NrIHRleHQtY2VudGVyJz48aDI+U2lkZXM8L2gyPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9J291dGVyLWJsb2NrJz48ZGl2IGNsYXNzPSdpbm5lci1ibG9jayBpbWctY29udGFpbmVyIGlubmVyLWJsb2NrLWltZyc+PGgzPlRvYXN0IGFuZCBKYW08L2gzPjxwIGNsYXNzPSd0ZXh0LWNlbnRlcic+QSBzbGljZSBvZiB0b2FzdCwgeW91ciBjaG9pY2Ugb2YgYnJlYWQsIGFuZCBvdXIgaG9tZW1hZGUgYmxhY2tiZXJyeSBvciByYXNwYmVycnkgamFtLjwvcD48aDQ+JDE8L2g0PjxpbWcgc3JjPScke3RvYXN0LnNyY30nIGFsdD0nQmVhcnkgVGVhIEltYWdlJyBjbGFzcz0ncHJvZHVjdC1pbWFnZScvPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9J291dGVyLWJsb2NrIGNvbWItbmVzdCc+PGltZyBzcmM9JyR7Y29tYi5zcmN9JyBjbGFzcz0nY29tYicgYWx0PSdob25leWNvbWIgaW1hZ2UnLz48ZGl2IGNsYXNzPSdpbm5lci1ibG9jayB0ZXh0LWNlbnRlcic+PGgyPk1haW4gRGlzaGVzPC9oMj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPSdvdXRlci1ibG9jayc+PGRpdiBjbGFzcz0naW5uZXItYmxvY2sgaW1nLWNvbnRhaW5lciBpbm5lci1ibG9jay1pbWcnPjxoMz5CYWdlbCBhbmQgTG94PC9oMz48cCBjbGFzcz0ndGV4dC1jZW50ZXInPk91ciBob3VzZSBzcGVjaWFsdHksIHlvdSBjYW4ndCBnbyB3cm9uZyB3aXRoIGEgaGVhcnR5IGJhZ2VsIHRvcHBlZCB3aXRoIHN1c3RhaW5hYmx5IGhhcnZlc3RlZCBzYWxtb24uPC9wPjxoND4kODwvaDQ+PGltZyBzcmM9JyR7YmFnZWwuc3JjfScgYWx0PSdCZWFyeSBUZWEgSW1hZ2UnIGNsYXNzPSdwcm9kdWN0LWltYWdlJy8+PC9kaXY+PC9kaXY+YFxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=