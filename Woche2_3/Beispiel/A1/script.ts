namespace Aufgabe2_3_1 {
  // Button Eventlisteners
  document.getElementById("add").addEventListener("click", createRectangle);
  document.getElementById("reset").addEventListener("click", reset);

  // creating one Rectangle Div and adding it to the page
  function createRectangle(): void {
    let div: HTMLDivElement = document.createElement("div");
    div.classList.add("rect");
    div.style.top = getRandom(0, 500) + "px";
    div.style.left = getRandom(0, 500) + "px";
    div.style.width = getRandom(20, 200) + "px";
    div.style.height = getRandom(20, 200) + "px";

    div.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

    document.getElementById("putRectsHere").appendChild(div);
  }

  function reset(): void {
    // remove old rectangles
    let oldRects: NodeListOf<Element> = document.querySelectorAll("div.rect");
    for (let oldRect of oldRects) {
      oldRect.remove();
    }

    // run what was initially run by the website
    createInitialRectangles();
  }

  // first page load
  function createInitialRectangles(): void {
    for (let i: number = 0; i < 5; i++) {
      createRectangle();
    }
  }
  createInitialRectangles();


  function getRandom(_min: number, _max: number): number {
    return Math.floor(Math.random() * (_max - _min) + _min);
  }
}