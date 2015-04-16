/**
 * Pinkyfier.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 16 Apr 2015
 */

class Pinkyfier {

    constructor(id) {
        this.element = document.getElementById(id);
    }

    pink() {
        this.element.style.backgroundColor = "mistyrose";
        this.element.style.color = "hotpink";
    }
}

export default Pinkyfier;
