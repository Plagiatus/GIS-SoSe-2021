"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    /////////
    // Aufgabe 2.4
    /////////
    //Aufgabe 1 a)
    let parts;
    function loadJSON() {
        parts = JSON.parse(Aufgabe2_4.partsJSON);
    }
    loadJSON();
    // Aufgabe 1 b)
    let selection = {};
    // load what we already have in the local storage, IF there is someting
    let storedSelection = localStorage.getItem("selection");
    if (storedSelection) {
        selection = JSON.parse(storedSelection);
    }
    // Aufgabe 1 c) 
    // ich nutze hier den Titel der Seite für die Auswahl. Es gibt aber auch ganz viele andere Möglichkeiten wie z.B.
    // auslesen der URL, einfügen eines spezifischen kleinen Codeabschnittes in eine eigene Datei, etc.
    let currentParts = [];
    let currentPart = "";
    switch (document.title) {
        case "Alien Generator - Head":
            currentPart = "head";
            currentParts = parts.heads;
            break;
        case "Alien Generator - Torso":
            currentPart = "torso";
            currentParts = parts.torsos;
            break;
        case "Alien Generator - Legs":
            currentPart = "leg";
            currentParts = parts.legs;
            break;
        default:
            break;
    }
    showPossibilities(currentParts);
    function createPartDiv(_part) {
        // wrapping div
        let div = document.createElement("div");
        div.classList.add("alienpart");
        // image to be displayed
        let img = document.createElement("img");
        img.src = _part.image;
        div.appendChild(img);
        // description
        let span = document.createElement("span");
        span.innerText = _part.origin;
        div.appendChild(span);
        // button
        let btn = document.createElement("button");
        btn.innerText = "Select";
        btn.addEventListener("click", handleSelection);
        div.appendChild(btn);
        return div;
        function handleSelection(_e) {
            // console.log("innere Funktion", _part);
            // Aufgabe 1 b) / c)
            switch (currentPart) {
                case "head":
                    selection.head = _part;
                    break;
                case "torso":
                    selection.torso = _part;
                    break;
                case "leg":
                    selection.leg = _part;
                    break;
            }
            localStorage.setItem("selection", JSON.stringify(selection));
            // forward to the next page.
            switch (currentPart) {
                case "head":
                    window.location.assign("./torso.html");
                    break;
                case "torso":
                    window.location.assign("./legs.html");
                    break;
                case "leg":
                    window.location.assign("./result.html");
                    break;
            }
        }
    }
    function showPossibilities(_parts) {
        let wrapper = document.getElementById("selectionWrapper");
        for (let i = 0; i < _parts.length; i++) {
            let div = createPartDiv(_parts[i]);
            wrapper.appendChild(div);
        }
    }
    // Aufgabe 2
    let selectionPreview = document.getElementById("alreadySelected");
    if (selection.head) {
        selectionPreview.appendChild(createImage(selection.head.image));
    }
    else {
        selectionPreview.appendChild(createImage("./img/none.png"));
    }
    if (selection.torso) {
        selectionPreview.appendChild(createImage(selection.torso.image));
    }
    else {
        selectionPreview.appendChild(createImage("./img/none.png"));
    }
    if (selection.leg) {
        selectionPreview.appendChild(createImage(selection.leg.image));
    }
    else {
        selectionPreview.appendChild(createImage("./img/none.png"));
    }
    function createImage(_src) {
        let img = document.createElement("img");
        img.src = _src;
        return img;
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map