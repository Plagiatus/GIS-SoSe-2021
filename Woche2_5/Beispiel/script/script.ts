namespace Aufgabe2_5 {

  let selection: Selection = loadSelection();
  let parts: AllParts;
  let currentParts: AlienPart[] = [];
  let currentPart: string = "";

  load();
  async function load(): Promise<void> {
    await loadJSON();
    
    selectCurrentCategory();

    showPossibilities(currentParts);

    let selectionPreview: HTMLElement = <HTMLElement>document.getElementById("alreadySelected");
    displayPreview(selectionPreview, selection);

  }

  async function loadJSON(): Promise<void> {
    let response: Response = await fetch("./script/data.json");
    parts = await response.json();
  }


  function selectCurrentCategory(): void {

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
  }



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


  
}