namespace Aufgabe2_3_2 {
  function createPartDiv(_part: AlienPart, _index: number): HTMLDivElement {
    // wrapping div
    let div: HTMLDivElement = document.createElement("div");
    div.classList.add("alienpart");

    // image to be displayed
    let img: HTMLImageElement = document.createElement("img");
    img.src = _part.image;
    div.appendChild(img);

    // description
    let span: HTMLSpanElement = document.createElement("span");
    span.innerText = _part.origin;
    div.appendChild(span);

    // button
    let btn: HTMLButtonElement = document.createElement("button");
    btn.innerText = "Select";
    // Möglichkeit 1: innere Funktion
    btn.addEventListener("click", handleSelection);

    // Möglichkeit 2: äußere Funktion 
    btn.addEventListener("click", handleSelection2);
    btn.dataset.index = _index.toString();

    div.appendChild(btn);

    return div;

    // innere Funktion, welche Durch ihre Positionierung innerhalb der createPartDiv Funktion das _part noch kennt. Darum kann man einfach folgendes machen:
    function handleSelection(_e: Event): void {
      console.log("innere Funktion", _part);
    }
  }

  // äußere Funktion, welche nun anderweitig herausfinden muss, welchen Part wir gewählt haben.
  // in diesem Fall habe ich den index im heads Array auf dem Button im dataset hinterlegt.
  // Da der Button das ist, was das Event auslößt, können wir über _e.currentTarget darauf zugreifen.
  function handleSelection2(_e: Event): void {
    let target: HTMLElement = <HTMLElement> _e.currentTarget;
    let index: number = Number(target.dataset.index);

    console.log("äußere Funktion", parts.heads[index]);
  }

  function showPossibilities(_parts: AlienPart[]): void {
    let wrapper: HTMLDivElement = <HTMLDivElement> document.getElementById("selectionWrapper");
    for (let i: number = 0; i < _parts.length; i++) {
      let div: HTMLDivElement = createPartDiv(_parts[i], i);
      wrapper.appendChild(div);
    }
  }

  showPossibilities(parts.heads);

}