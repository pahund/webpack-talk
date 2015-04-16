/**
 * main.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Apr 2015
 */

var pinkyfier = new Pinkyfier("text"),
    fattyfier = new Fattyfier("text");

pinkyfier.pink();

document.getElementById("fat").onclick = function () {
    fattyfier.fat();
}



