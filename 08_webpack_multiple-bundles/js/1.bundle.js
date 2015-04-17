webpackJsonp([1],{

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	function Fattyfier(id) {
	    this.element = document.getElementById(id);
	}

	Fattyfier.prototype.fat = function () {
	    this.element.style.fontWeight = "bold";
	}

	module.exports = Fattyfier;



/***/ }

});