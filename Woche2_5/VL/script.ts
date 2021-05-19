async function dazwischen(): Promise<number> {
  console.log("vor dazwischen");
  await fetch("https://gis-communication.herokuapp.com");
  console.log("dazwischen");
  return 42;
}

async function load(): Promise<void> {
  console.log("vorher");
  let result: number = await dazwischen();
  console.log(result);
  console.log("danach");
}

load();
console.log("ende?");
// let a: number = 0;
// for (let i: number = 0; i < 10000000000; i++) {
//   a += i;
// }
// console.log(a);

async function communicate(_url: RequestInfo): Promise<void> {
  let response: Response = await fetch(_url);
  console.log("Response", response);
  let serverReply: DozentenAntwortVomServer = await response.json();
  console.log(serverReply.gruss);
}

communicate("https://hs-furtwangen.github.io/GIS-SoSe-2021/content/2-chapter/L2.5/testjson.json");

interface DozentenAntwortVomServer {
  gruss: string;
  text: string;
  zweiterText: string;
}