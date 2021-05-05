"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    function printEverything(..._rest) {
        console.log(_rest);
    }
    printEverything(Aufgabe2_3.greeting);
    let previousElement = document.body;
    for (let i = 0; i < 5; i++) {
        let div = document.createElement("div");
        div.style.height = (Math.random() * 100).toString() + "px";
        div.classList.add("rect");
        previousElement.appendChild(div);
        previousElement = div;
    }
    let p = document.createElement("p");
    p.innerText = Aufgabe2_3.greeting;
    previousElement.appendChild(p);
    // Number("1234");
    // parseInt("12342");
    // (1234).toString();
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map