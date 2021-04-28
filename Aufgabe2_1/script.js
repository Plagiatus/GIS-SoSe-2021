"use strict";
var Aufgabe2_1;
(function (Aufgabe2_1) {
    let arr = [10, 42, 1337, 392, 1234, 0];
    // for (let i: number = 0; i < arr.length; i++) {
    //   console.log(arr[i]);
    // }
    for (let element of arr) {
        console.log(element);
    }
    console.log(arr[1]);
    function multiply(_a, _b) {
        let result = _a * _b;
        return result;
        // return _a * _b;
    }
    let mult = multiply(4, 5);
    console.log(mult);
    console.log(multiply(2, 6));
})(Aufgabe2_1 || (Aufgabe2_1 = {}));
//# sourceMappingURL=script.js.map