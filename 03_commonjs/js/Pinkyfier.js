/**
 * Pinkyfier.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Apr 2015
 */

function Pinkyfier(id) {
    this.element = document.getElementById(id);
}

Pinkyfier.prototype.pink = function () {
    this.element.style.backgroundColor = "mistyrose";
    this.element.style.color = "hotpink";
}

module.exports = Pinkyfier;

