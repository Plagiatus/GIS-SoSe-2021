namespace Aufgabe2_4 {
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

  // let parts: AllParts = {
  //   heads: [
  //     { image: "./img/heads/1.png", origin: "Mars" },
  //     { image: "./img/heads/2.png", origin: "Venus" },
  //     { image: "./img/heads/3.png", origin: "Jupiter" }
  //   ],
  //   torsos: [
  //     { image: "./img/torsos/1.png", origin: "Mars" },
  //     { image: "./img/torsos/2.png", origin: "Venus" },
  //     { image: "./img/torsos/3.png", origin: "Jupiter" }
  //   ],
  //   legs: [
  //     { image: "./img/legs/1.png", origin: "Mars" },
  //     { image: "./img/legs/2.png", origin: "Venus" },
  //     { image: "./img/legs/3.png", origin: "Jupiter" }
  //   ]
  // };

  // Aufgabe 1a
  export let partsJSON: string =
    `
    {
      "heads": [
        {
          "image": "./img/heads/1.png",
          "origin": "Mars"
        },
        {
          "image": "./img/heads/2.png",
          "origin": "Venus"
        },
        {
          "image": "./img/heads/3.png",
          "origin": "Jupiter"
        }
      ],
      "torsos": [
        {
          "image": "./img/torsos/1.png",
          "origin": "Mars"
        },
        {
          "image": "./img/torsos/2.png",
          "origin": "Venus"
        },
        {
          "image": "./img/torsos/3.png",
          "origin": "Jupiter"
        }
      ],
      "legs": [
        {
          "image": "./img/legs/1.png",
          "origin": "Mars"
        },
        {
          "image": "./img/legs/2.png",
          "origin": "Venus"
        },
        {
          "image": "./img/legs/3.png",
          "origin": "Jupiter"
        }
      ]
    }
    `;

}