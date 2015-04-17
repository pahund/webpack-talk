webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
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

	function Pinkyfier(id) {
	    this.element = document.getElementById(id);
	}

	Pinkyfier.prototype.pink = function () {
	    this.element.style.backgroundColor = "mistyrose";
	    this.element.style.color = "hotpink";
	}

	module.exports = Pinkyfier;



/***/ }
]);