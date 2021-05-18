namespace Aufgabe2_4 {
  let selection: Selection = {};
  let storedSelection: string = localStorage.getItem("selection");
  if (storedSelection) {
    selection = JSON.parse(storedSelection);
  }

  let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("resultDisplay");

  if (selection.head) {
    wrapper.appendChild(createImage(selection.head.image));
  } else {
    wrapper.appendChild(createImage("./img/none.png"));
  }
  if (selection.torso) {
    wrapper.appendChild(createImage(selection.torso.image));
  } else {
    wrapper.appendChild(createImage("./img/none.png"));
  }
  if (selection.leg) {
    wrapper.appendChild(createImage(selection.leg.image));
  } else {
    wrapper.appendChild(createImage("./img/none.png"));
  }

  function createImage(_src: string): HTMLImageElement {
    let img: HTMLImageElement = document.createElement("img");
    img.src = _src;
    return img;
  }

  document.getElementById("tryagain").addEventListener("click", restart);

  function restart(): void {
    localStorage.clear();
    window.location.assign("./");
  }
}