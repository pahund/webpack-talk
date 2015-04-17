class Fattyfier {

    constructor(id) {
        this.element = document.getElementById(id);
    }

    fat() {
        this.element.style.fontWeight = "bold";
    }
}

export default Fattyfier;
