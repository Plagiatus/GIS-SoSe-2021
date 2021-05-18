namespace Aufgabe2_4 {

  /////////
  // Aufgabe 2.4
  /////////

  //Aufgabe 1 a)
  let parts: AllParts;

  function loadJSON(): void {
    parts = JSON.parse(partsJSON);
  }
  loadJSON();

  // Aufgabe 1 b)
  let selection: Selection = {};
  // load what we already have in the local storage, IF there is someting
  let storedSelection: string = localStorage.getItem("selection");
  if (storedSelection) {
    selection = JSON.parse(storedSelection);
  }

  // Aufgabe 1 c) 
  // ich nutze hier den Titel der Seite für die Auswahl. Es gibt aber auch ganz viele andere Möglichkeiten wie z.B.
  // auslesen der URL, einfügen eines spezifischen kleinen Codeabschnittes in eine eigene Datei, etc.

  let currentParts: AlienPart[] = [];
  let currentPart: string = "";

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

  showPossibilities(currentParts);



  function createPartDiv(_part: AlienPart): HTMLDivElement {
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
    btn.addEventListener("click", handleSelection);

    div.appendChild(btn);

    return div;
    function handleSelection(_e: Event): void {
      // console.log("innere Funktion", _part);
      // Aufgabe 1 b) / c)
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


  function showPossibilities(_parts: AlienPart[]): void {
    let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("selectionWrapper");
    for (let i: number = 0; i < _parts.length; i++) {
      let div: HTMLDivElement = createPartDiv(_parts[i]);
      wrapper.appendChild(div);
    }
  }


  // Aufgabe 2

  let selectionPreview: HTMLElement = <HTMLElement>document.getElementById("alreadySelected");

  if (selection.head) {
    selectionPreview.appendChild(createImage(selection.head.image));
  } else {
    selectionPreview.appendChild(createImage("./img/none.png"));
  }
  if (selection.torso) {
    selectionPreview.appendChild(createImage(selection.torso.image));
  } else {
    selectionPreview.appendChild(createImage("./img/none.png"));
  }
  if (selection.leg) {
    selectionPreview.appendChild(createImage(selection.leg.image));
  } else {
    selectionPreview.appendChild(createImage("./img/none.png"));
  }

  function createImage(_src: string): HTMLImageElement {
    let img: HTMLImageElement = document.createElement("img");
    img.src = _src;
    return img;
  }
}