namespace Aufgabe2_5 {
  let selection: Selection = loadSelection();


  let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("resultDisplay");

  displayPreview(wrapper, selection);


  document.getElementById("tryagain").addEventListener("click", restart);

  function restart(): void {
    localStorage.clear();
    window.location.assign("./");
  }

  //Aufgabe c)
  interface ServerReply {
    error?: string;
    message?: string;
  }

  async function sendAndDisplayResult(): Promise<void> {
    let url: string = "https://gis-communication.herokuapp.com";
    let query: URLSearchParams = new URLSearchParams(<any>convertSelectionInOriginSelection(selection));
    url = url + "?" + query.toString();
    console.log(url);

    let response: Response = await fetch(url);
    let reply: ServerReply = await response.json();

    let span: HTMLSpanElement = document.createElement("span");
    if (reply.error) {
      span.innerText = reply.error;
      span.classList.add("error");
    }
    if (reply.message) {
      span.innerText = reply.message;
    }
    document.getElementById("requestDisplay").appendChild(span);
  }

  sendAndDisplayResult();


  // da meine selection ein verschachteltes komplexes element ist, würde bei der Konvertierung in URLSearchParams nur "head: [object:Object]" ausgegeben werden.
  // darum konvertiere ich es hier so, dass da jeweils der "origin" eingetragen wird.

  interface OriginSelection {
    head: string;
    torso: string;
    leg: string;
  }

  function convertSelectionInOriginSelection(_s: Selection): OriginSelection {
    let os: OriginSelection = { head: "", torso: "", leg: "" };
    if (_s.head) {
      os.head = _s.head.origin;
    }
    if (_s.torso) {
      os.torso = _s.torso.origin;
    }
    if (_s.leg) {
      os.leg = _s.leg.origin;
    }
    return os;
  }
}