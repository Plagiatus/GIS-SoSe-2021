namespace Aufgabe2_5 {
  // Einige der Funktionen brauche ich sowohl im script.ts als auch im results.ts, 
  // also habe ich sie hierher ausgelagert da ich so keinen Code duplizieren muss.

  export interface AlienPart {
    image: string;
    origin: string;
  }

  export interface AllParts {
    heads: AlienPart[];
    torsos: AlienPart[];
    legs: AlienPart[];
  }

  export interface Selection {
    head?: AlienPart;
    torso?: AlienPart;
    leg?: AlienPart;
  }

  export function displayPreview(_parent: HTMLElement, _selection: Selection): void {

    if (_selection.head) {
      _parent.appendChild(createImage(_selection.head.image));
    } else {
      _parent.appendChild(createImage("./img/none.png"));
    }
    if (_selection.torso) {
      _parent.appendChild(createImage(_selection.torso.image));
    } else {
      _parent.appendChild(createImage("./img/none.png"));
    }
    if (_selection.leg) {
      _parent.appendChild(createImage(_selection.leg.image));
    } else {
      _parent.appendChild(createImage("./img/none.png"));
    }
  }

  function createImage(_src: string): HTMLImageElement {
    let img: HTMLImageElement = document.createElement("img");
    img.src = _src;
    return img;
  }

  export function loadSelection(): Selection {
    let storedSelection: string = localStorage.getItem("selection");
    if (storedSelection) {
      return JSON.parse(storedSelection);
    }
    return {};
  }

}