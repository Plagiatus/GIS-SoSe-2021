namespace Aufgabe2_3 {
  function printEverything(..._rest: string[]): void {
    console.log(_rest);
  }

  printEverything(greeting);

  let previousElement: HTMLElement = document.body;
  for (let i: number = 0; i < 5; i++) {
    let div: HTMLDivElement = document.createElement("div");
    div.style.height = (Math.random() * 100).toString() + "px";
    div.classList.add("rect");
    previousElement.appendChild(div);
    previousElement = div;
  }

  let p: HTMLParagraphElement = document.createElement("p");
  p.innerText = greeting;
  previousElement.appendChild(p);

  // Number("1234");
  // parseInt("12342");
  // (1234).toString();
}