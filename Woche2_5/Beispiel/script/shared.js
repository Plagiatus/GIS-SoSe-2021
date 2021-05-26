"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    // Einige der Funktionen brauche ich sowohl im script.ts als auch im results.ts, 
    // also habe ich sie hierher ausgelagert da ich so keinen Code duplizieren muss.
    function displayPreview(_parent, _selection) {
        if (_selection.head) {
            _parent.appendChild(createImage(_selection.head.image));
        }
        else {
            _parent.appendChild(createImage("./img/none.png"));
        }
        if (_selection.torso) {
            _parent.appendChild(createImage(_selection.torso.image));
        }
        else {
            _parent.appendChild(createImage("./img/none.png"));
        }
        if (_selection.leg) {
            _parent.appendChild(createImage(_selection.leg.image));
        }
        else {
            _parent.appendChild(createImage("./img/none.png"));
        }
    }
    Aufgabe2_5.displayPreview = displayPreview;
    function createImage(_src) {
        let img = document.createElement("img");
        img.src = _src;
        return img;
    }
    function loadSelection() {
        let storedSelection = localStorage.getItem("selection");
        if (storedSelection) {
            return JSON.parse(storedSelection);
        }
        return {};
    }
    Aufgabe2_5.loadSelection = loadSelection;
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=shared.js.map