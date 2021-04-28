"use strict";
var Aufgabe2_2;
(function (Aufgabe2_2) {
    let arr2 = [];
    console.log(arr2);
    let obj = { a: 1, d: 2 };
    let p1 = {
        vorname: "Lukas",
        alter: 26,
        name: "Scheuerle"
    };
    let p2 = erschaffePerson("Lukas", "Scheuerle", 26);
    console.log(p1.alter);
    function erschaffePerson(_name, _vorname, _alter) {
        let p = { name: _name, vorname: _vorname, alter: _alter };
        return p;
    }
    let personenArray = [];
    personenArray.push(p1);
    personenArray.push(p2);
    personenArray.push({ name: "Otto", alter: 20, vorname: "Otto" });
    // class Person {
    //   name: string;
    //   vorname: string;
    //   alter: number;
    //   constructor(_name: string, _vorname: string, _alter: number) {
    //     this.name = _name;
    //     this.vorname = _vorname;
    //     this.alter = _alter;
    //   }
    //   zeigeInfos(): void {
    //     console.log(this.name, this.vorname, this.alter);
    //   }
    //   macheÄlter(): void {
    //     this.alter++;
    //   }
    // }
    // let p3: Person = new Person("Scheuerle", "Lukas", 26);
    // console.log(p3.alter);
    // p3.macheÄlter();
    // p3.zeigeInfos();
})(Aufgabe2_2 || (Aufgabe2_2 = {}));
//# sourceMappingURL=script.js.map