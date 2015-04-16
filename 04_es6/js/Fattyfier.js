/**
 * Fattyfier.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Apr 2015
 */

export class Fattyfier {

    constructor(id) {
        this.element = document.getElementById(id);
    }

    fat() {
        this.element.style.fontWeight = "bold";
    }
}

