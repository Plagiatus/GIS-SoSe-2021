"use strict";
var Aufgabe2_3_2;
(function (Aufgabe2_3_2) {
    function createPartDiv(_part, _index) {
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
        // Möglichkeit 1: innere Funktion
        btn.addEventListener("click", handleSelection);
        // Möglichkeit 2: äußere Funktion 
        btn.addEventListener("click", handleSelection2);
        btn.dataset.index = _index.toString();
        div.appendChild(btn);
        return div;
        // innere Funktion, welche Durch ihre Positionierung innerhalb der createPartDiv Funktion das _part noch kennt. Darum kann man einfach folgendes machen:
        function handleSelection(_e) {
            console.log("innere Funktion", _part);
        }
    }
    // äußere Funktion, welche nun anderweitig herausfinden muss, welchen Part wir gewählt haben.
    // in diesem Fall habe ich den index im heads Array auf dem Button im dataset hinterlegt.
    // Da der Button das ist, was das Event auslößt, können wir über _e.currentTarget darauf zugreifen.
    function handleSelection2(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        console.log("äußere Funktion", Aufgabe2_3_2.parts.heads[index]);
    }
    function showPossibilities(_parts) {
        let wrapper = document.getElementById("selectionWrapper");
        for (let i = 0; i < _parts.length; i++) {
            let div = createPartDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }
    showPossibilities(Aufgabe2_3_2.parts.heads);
})(Aufgabe2_3_2 || (Aufgabe2_3_2 = {}));
//# sourceMappingURL=script.js.map