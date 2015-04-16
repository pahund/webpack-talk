/**
 * main.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Apr 2015
 */

var Pinkyfier = require("./Pinkyfier"),
    pinkyfier = new Pinkyfier("text");

pinkyfier.pink();

document.getElementById("fat").onclick = function () {
    require(["./Fattyfier"], function (Fattyfier) {
        var fattyfier = new Fattyfier("text");
        fattyfier.fat();
    });
}
