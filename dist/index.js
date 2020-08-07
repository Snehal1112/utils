/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: isArray, isObject, isDefined, isElement, isBoolean, isString, isNumber, isFunction, isPrimitive, isDate, isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDefined\", function() { return isDefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElement\", function() { return isElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBoolean\", function() { return isBoolean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return isNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPrimitive\", function() { return isPrimitive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDate\", function() { return isDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return isEmpty; });\n/**\n * Returns true if the passed value is a JavaScript array, otherwise false.\n * @param {Mixed} value The value to test\n * @return {Boolean}\n */\nconst isArray = value => toString.apply(value) === '[object Array]';\n/**\n * <p>Returns true if the passed value is empty.</p>\n * <p>The value is deemed to be empty if it is<div class=\"mdetail-params\"><ul>\n * <li>null</li>\n * <li>undefined</li>\n * <li>an empty array</li>\n * <li>a zero length string (Unless the <tt>allowBlank</tt> parameter is <tt>true</tt>)</li>\n * </ul></div>\n * @param {Mixed} value The value to test\n * @param {Boolean} allowBlank (optional) true to allow empty strings (defaults to false)\n * @return {Boolean}\n */\n\n\nconst isEmpty = (v, allowBlank) => v === null || v === undefined || isArray(v) && !v.length || (!allowBlank ? v === '' : false);\n/**\n * Returns true if the passed object is a JavaScript date object, otherwise false.\n * @param {Object} object The object to test\n * @return {Boolean}\n */\n\n\nconst isDate = v => toString.apply(v) === '[object Date]';\n/**\n * Returns true if the passed value is a JavaScript Object, otherwise false.\n * @param {Mixed} value The value to test\n * @return {Boolean}\n */\n\n\nconst isObject = v => !!v && Object.prototype.toString.call(v) === '[object Object]';\n/**\n * Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean.\n * @param {Mixed} value The value to test\n * @return {Boolean}\n */\n\n\nconst isPrimitive = v => isString(v) || isNumber(v) || isBoolean(v);\n/**\n * Returns true if the passed value is a JavaScript Function, otherwise false.\n * @param {Mixed} value The value to test\n * @return {Boolean}\n */\n\n\nconst isFunction = v => toString.apply(v) === '[object Function]';\n/**\n * Returns true if the passed value is a number. Returns false for non-finite numbers.\n * @param {Mixed} value The value to test\n * @return {Boolean}\n */\n\n\nconst isNumber = v => typeof v === 'number' && isFinite(v);\n/**\n * Returns true if the passed value is a string.\n * @param {Mixed} value The value to test\n * @return {Boolean}\n */\n\n\nconst isString = v => typeof v === 'string';\n/**\n * Returns true if the passed value is a boolean.\n * @param {Mixed} value The value to test\n * @return {Boolean}\n */\n\n\nconst isBoolean = v => typeof v === 'boolean';\n/**\n * Returns true if the passed value is an HTMLElement\n * @param {Mixed} value The value to test\n * @return {Boolean}\n */\n\n\nconst isElement = v => v ? !!v.tagName : false;\n/**\n * Returns true if the passed value is not undefined.\n * @param {Mixed} value The value to test\n * @return {Boolean}\n */\n\n\nconst isDefined = v => typeof v !== 'undefined';\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });