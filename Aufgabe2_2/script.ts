namespace Aufgabe2_2 {
  let arr2: number[] = [];
  console.log(arr2);

  // Das ist doof!
  // let person1name: string = "Scheuerle";
  // let person1vorname: string = "Lukas";
  // let person1alter: number = 26;

  // Das ist besser!
  interface Person {
    name: string;
    vorname: string;
    alter: number;
  }


  // let obj = { a: 1, d: 2 };
  let p1: Person = {
    vorname: "Lukas",
    alter: 26,
    name: "Scheuerle"
  };
  let p2: Person = erschaffePerson("Lukas", "Scheuerle", 26);

  console.log(p1.alter);

  function erschaffePerson(_name: string, _vorname: string, _alter: number): Person {
    let p: Person = { name: _name, vorname: _vorname, alter: _alter };
    return p;
  }
  let personenArray: Person[] = [];
  personenArray.push(p1);
  personenArray.push(p2);
  personenArray.push({name: "Otto", alter: 20, vorname: "Otto"});

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
}