webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Fattyfier.js
	 *
	 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
	 * @since 16 Apr 2015
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    function Fattyfier(id) {
	        this.element = document.getElementById(id);
	    }

	    Fattyfier.prototype.fat = function () {
	        this.element.style.fontWeight = "bold";
	    }

	    return Fattyfier;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Pinkyfier.js
	 *
	 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
	 * @since 16 Apr 2015
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    function Pinkyfier(id) {
	        this.element = document.getElementById(id);
	    }

	    Pinkyfier.prototype.pink = function () {
	        this.element.style.backgroundColor = "mistyrose";
	        this.element.style.color = "hotpink";
	    }

	    return Pinkyfier;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ }
]);