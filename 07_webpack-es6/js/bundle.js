/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

	/**
	 * main.js
	 *
	 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
	 * @since 16 Apr 2015
	 */

	var _Pinkyfier = __webpack_require__(1);

	var _Pinkyfier2 = _interopRequireWildcard(_Pinkyfier);

	var _Fattyfier = __webpack_require__(2);

	var _Fattyfier2 = _interopRequireWildcard(_Fattyfier);

	var pinkyfier = new _Pinkyfier2["default"]("text"),
	    fattyfier = new _Fattyfier2["default"]("text");

	pinkyfier.pink();

	document.getElementById("fat").onclick = function () {
	    fattyfier.fat();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Pinkyfier.js
	 *
	 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
	 * @since 16 Apr 2015
	 */

	var Pinkyfier = (function () {
	    function Pinkyfier(id) {
	        _classCallCheck(this, Pinkyfier);

	        this.element = document.getElementById(id);
	    }

	    _createClass(Pinkyfier, [{
	        key: "pink",
	        value: function pink() {
	            this.element.style.backgroundColor = "mistyrose";
	            this.element.style.color = "hotpink";
	        }
	    }]);

	    return Pinkyfier;
	})();

	exports["default"] = Pinkyfier;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Fattyfier.js
	 *
	 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
	 * @since 16 Apr 2015
	 */

	var Fattyfier = (function () {
	    function Fattyfier(id) {
	        _classCallCheck(this, Fattyfier);

	        this.element = document.getElementById(id);
	    }

	    _createClass(Fattyfier, [{
	        key: "fat",
	        value: function fat() {
	            this.element.style.fontWeight = "bold";
	        }
	    }]);

	    return Fattyfier;
	})();

	exports["default"] = Fattyfier;
	module.exports = exports["default"];

/***/ }
/******/ ]);