require([ "Fattyfier", "Pinkyfier" ], function (Fattyfier, Pinkyfier) {

    var pinkyfier = new Pinkyfier("text"),
        fattyfier = new Fattyfier("text");

    pinkyfier.pink();

    document.getElementById("fat").onclick = function () {
        fattyfier.fat();
    }
});

