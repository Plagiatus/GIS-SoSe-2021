"use strict";
var Aufgabe2_3_1;
(function (Aufgabe2_3_1) {
    // Button Eventlisteners
    document.getElementById("add").addEventListener("click", createRectangle);
    document.getElementById("reset").addEventListener("click", reset);
    // creating one Rectangle Div and adding it to the page
    function createRectangle() {
        let div = document.createElement("div");
        div.classList.add("rect");
        div.style.top = getRandom(0, 500) + "px";
        div.style.left = getRandom(0, 500) + "px";
        div.style.width = getRandom(20, 200) + "px";
        div.style.height = getRandom(20, 200) + "px";
        div.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        document.getElementById("putRectsHere").appendChild(div);
    }
    function reset() {
        // remove old rectangles
        let oldRects = document.querySelectorAll("div.rect");
        for (let oldRect of oldRects) {
            oldRect.remove();
        }
        // run what was initially run by the website
        createInitialRectangles();
    }
    // first page load
    function createInitialRectangles() {
        for (let i = 0; i < 5; i++) {
            createRectangle();
        }
    }
    createInitialRectangles();
    function getRandom(_min, _max) {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }
})(Aufgabe2_3_1 || (Aufgabe2_3_1 = {}));
//# sourceMappingURL=script.js.map