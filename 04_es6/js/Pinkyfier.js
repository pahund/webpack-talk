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

