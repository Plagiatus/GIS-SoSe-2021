namespace Aufgabe2_3_2 {
  // Aufgabe 2 a)
  export interface AlienPart {
    image: string;
    origin: string;
  }

  export interface AllParts {
    heads: AlienPart[];
    torsos: AlienPart[];
    legs: AlienPart[];
  }

  // Aufgabe 2 b)
  export interface Selection {
    head: AlienPart;
    torso: AlienPart;
    leg: AlienPart;
  }

  // Aufgabe 2 c)
  export let parts: AllParts = {
    heads: [
      { image: "./img/heads/1.png", origin: "Mars" },
      { image: "./img/heads/2.png", origin: "Venus" },
      { image: "./img/heads/3.png", origin: "Jupiter" }
    ],
    torsos: [
      { image: "./img/torsos/1.png", origin: "Mars" },
      { image: "./img/torsos/2.png", origin: "Venus" },
      { image: "./img/torsos/3.png", origin: "Jupiter" }
    ],
    legs: [
      { image: "./img/legs/1.png", origin: "Mars" },
      { image: "./img/legs/2.png", origin: "Venus" },
      { image: "./img/legs/3.png", origin: "Jupiter" }
    ]
  };
}