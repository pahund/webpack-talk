(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Fattyfier(id) {
    this.element = document.getElementById(id);
}

Fattyfier.prototype.fat = function () {
    this.element.style.fontWeight = "bold";
}

module.exports = Fattyfier;


},{}],2:[function(require,module,exports){
function Pinkyfier(id) {
    this.element = document.getElementById(id);
}

Pinkyfier.prototype.pink = function () {
    this.element.style.backgroundColor = "mistyrose";
    this.element.style.color = "hotpink";
}

module.exports = Pinkyfier;


},{}],3:[function(require,module,exports){
var Pinkyfier = require("./Pinkyfier"),
    Fattyfier = require("./Fattyfier"),

    pinkyfier = new Pinkyfier("text"),
    fattyfier = new Fattyfier("text");

pinkyfier.pink();

document.getElementById("fat").onclick = function () {
    fattyfier.fat();
}

},{"./Fattyfier":1,"./Pinkyfier":2}]},{},[3]);
