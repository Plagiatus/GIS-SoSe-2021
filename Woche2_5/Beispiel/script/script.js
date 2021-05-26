"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    let selection = Aufgabe2_5.loadSelection();
    let parts;
    let currentParts = [];
    let currentPart = "";
    load();
    async function load() {
        await loadJSON();
        selectCurrentCategory();
        showPossibilities(currentParts);
        let selectionPreview = document.getElementById("alreadySelected");
        Aufgabe2_5.displayPreview(selectionPreview, selection);
    }
    async function loadJSON() {
        let response = await fetch("./script/data.json");
        parts = await response.json();
    }
    function selectCurrentCategory() {
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
    }
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
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map