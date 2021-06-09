"use strict";
//Diese Zeile bei den Import Statements hinzufügen:
// import { ParsedUrlQuery } from "querystring";
// import * as url from "url";
//Diesen Code innerhalb von einem aktiven Server testen:
let adresse = "http://localhost:8100/default.htm?jahr=2017&monat=february";
//Adresse parsen (umwandeln):
// let q: url.UrlWithParsedQuery = url.parse(adresse, true);
let u = new URL(adresse);
console.log(u);
console.log(u.searchParams.get("jahr"));
/*Die parse Methode gibt ein Objekt zurück, dass die URL Eigenschaften enthält. So können die fest definierten Eigenschaften einer URL ausgelesen werden:*/
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// /*Die query Eigenschaft gibt ein Ojekt zurück, dass alle query-string Parameter als Eigenschaften besitzt. So können beliebig gesendete Attribute ausgelesen werden:*/
// var qdata: ParsedUrlQuery = q.query;
// console.log(qdata.monat);
//# sourceMappingURL=newurl.js.map