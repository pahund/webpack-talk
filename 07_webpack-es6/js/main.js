import Pinkyfier from "./Pinkyfier";
import Fattyfier from "./Fattyfier";

let pinkyfier = new Pinkyfier("text"),
    fattyfier = new Fattyfier("text");

pinkyfier.pink();

document.getElementById("fat").onclick = function () {
    fattyfier.fat();
}
