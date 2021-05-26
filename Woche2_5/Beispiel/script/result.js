"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    let selection = Aufgabe2_5.loadSelection();
    let wrapper = document.getElementById("resultDisplay");
    Aufgabe2_5.displayPreview(wrapper, selection);
    document.getElementById("tryagain").addEventListener("click", restart);
    function restart() {
        localStorage.clear();
        window.location.assign("./");
    }
    async function sendAndDisplayResult() {
        let url = "https://gis-communication.herokuapp.com";
        let query = new URLSearchParams(convertSelectionInOriginSelection(selection));
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let reply = await response.json();
        let span = document.createElement("span");
        if (reply.error) {
            span.innerText = reply.error;
            span.classList.add("error");
        }
        if (reply.message) {
            span.innerText = reply.message;
        }
        document.getElementById("requestDisplay").appendChild(span);
    }
    sendAndDisplayResult();
    function convertSelectionInOriginSelection(_s) {
        let os = { head: "", torso: "", leg: "" };
        if (_s.head) {
            os.head = _s.head.origin;
        }
        if (_s.torso) {
            os.torso = _s.torso.origin;
        }
        if (_s.leg) {
            os.leg = _s.leg.origin;
        }
        return os;
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=result.js.map