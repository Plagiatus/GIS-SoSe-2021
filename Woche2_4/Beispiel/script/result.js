"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let selection = {};
    let storedSelection = localStorage.getItem("selection");
    if (storedSelection) {
        selection = JSON.parse(storedSelection);
    }
    let wrapper = document.getElementById("resultDisplay");
    if (selection.head) {
        wrapper.appendChild(createImage(selection.head.image));
    }
    else {
        wrapper.appendChild(createImage("./img/none.png"));
    }
    if (selection.torso) {
        wrapper.appendChild(createImage(selection.torso.image));
    }
    else {
        wrapper.appendChild(createImage("./img/none.png"));
    }
    if (selection.leg) {
        wrapper.appendChild(createImage(selection.leg.image));
    }
    else {
        wrapper.appendChild(createImage("./img/none.png"));
    }
    function createImage(_src) {
        let img = document.createElement("img");
        img.src = _src;
        return img;
    }
    document.getElementById("tryagain").addEventListener("click", restart);
    function restart() {
        localStorage.clear();
        window.location.assign("./");
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=result.js.map