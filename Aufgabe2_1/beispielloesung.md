# Beispiellösungen Aufgabe 2.1

### :information_source: Die hier angegebenen Lösungen sind nur _eine_ von vielen!!!
Programmieren ist ein kreativer Prozess mit mehr als einer Lösung. Wir versuchen selbstverständlich euch die einfachste und am besten verständliche Lösung zu präsentieren, aber das gelingt leider nicht immer. :wink: Diese Lösungen haben auch nicht den anspruch besonders clever, performant oder kurz zu sein, da hier die Verständlichkeit am wichtigsten ist.

Bei Fragen meldet euch bei Lukas Scheuerle.


## Aufgabe 1

### a)
Variablennamen können nicht mit Zahlen beginnen oder nur aus Zahlen bestehen. Leerzeichen können nicht genutzt werden. Einige Sonderzeichen (die von der Sprache reservierten, z.B. der Punkt) können nicht genutzt werden. Namen dürfen nicht sprach-reservierte Wörter (wie let, var, function, etc) sein.

### c)

```typescript
function main(): void {
    let x: string = "Alles";
    console.log(x);             //Alles
    func2();                    //Gute
    console.log(x);             //Alles
    func1();                    //Klar
    console.log(x);             //Alles
    func3();                    //Logo
}

main();

function func1(): void {
    console.log("Klar?");
}

function func2(): void {
    console.log("Gute!");
}

function func3(): void {
    console.log("Logo!");
}
```


## Aufgabe 4

### b) 

Variablen haben eine Sichtbarkeit die bestimmt, was alles auf sie zugreifen kann und was nicht. Alles und jeder kann auf globale Variablen zugreifen, die Sichtbarkeit ist also das gesammte Programm. Lokale Variablen dagegen sind nur in dem Block sichtbar, in dem sie deklariert worden sind. Lokale Variablen haben eine höhere Priorität als globale, d.h. wenn eine lokale und eine globale Variable den selben Namen tragen, so wird der Code die lokale Variable nutzen.  
Übergabeparameter sind lokale Variablen, welche zusätzlich die Funktion haben, Werte an eine Funktion zu übergeben.

Funktionen sind Aktivitäten welche Funktionalität haben. Sie können Eingaben (Übergabeparameter) verarbeiten und außerdem Werte zurückgeben. In letzterer Hinsicht können sie wie eine Variable genutzt werden.


## Aufgabe 5

### a)
```ts
function multiply(_a: number, _b: number): number {
	let result: number = a * b;
	return result;
}
```

### b)
```ts
function max(_a: number, _b: number): number {
	if(_a > _b)
		return _a;
	else
		return _b;
}
```

### c)
```ts
let num: number = 1;
let total: number = 0;
while (num <= 100){
	total += num;
	num = num + 1;		// ist das gleiche wie num++ oder num += 1
}
```

### d)
```ts
for(let i: number = 0; i < 10; i++){
	let zufall: number = Math.random() * 100;						//einfache Lösung
	let zufall: number = Math.floor( Math.random() * 100 );			//Lösung mit abgerundeten Zahlen
	console.log(zufall);
}
```

### e) 
```ts
function factorial(_n: number): number {
	let total: number = 1;
	if(_n < 1){
		return 1;

	//da mit return die funktion beendet wird, bräuchten wir hier kein else
	} else {
		//wir fangen bei 1 an, da wir sonst mit 0 multiplizieren würden
		for(let i: number = 1; i <= _n; i++){
			total = total * i;
		}
	}
	return total;
}
```

### f)

```typescript
for (let i: number = 1900; i < 2021; i++) {
	let istSchaltjahr: boolean = false;
	if (i % 4 == 0) {
		if (i % 100 == 0) {
			if (i % 400 == 0){
				istSchaltjahr = true;
			}
		} else {
			istSchaltjahr = true;
		}
	}
	if(istSchaltjahr){
		console.log(i);
	}
}
```
kürzer, aber unübersichtlicher:
```typescript
for (let i: number = 1900; i < 2021; i++) {
    if (i % 4 == 0 && (!(i % 100 == 0)) || i % 400 == 0) {
        console.log(i);
    }
}
```

## Aufgabe 6

### a)
über eine for Schleife
```typescript
let output: string = "";
for(let i: number = 0; i < 8; i++){
	output += "#";
	console.log(output);
}
```

über eine while Schleife und die Länge des strings
```typescript
let output: string = "";
while(output.length < 8){
	output += "#";
	console.log(output);
}
```

### b)
```typescript
for(let i: number = 1; i <= 100; i++) {
	if(i % 3 == 0){
		console.log("Fizz");
	} else if (i % 5 == 0){
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
```

### c)

Es gibt hier viele viele Lösungen

1. die vielleicht offensichtlichste
```typescript
for(let i: number = 1; i <= 100; i++) {

	if (i % 3 == 0 && i % 5 == 0){
		console.log("FizzBuzz");
	else if (i % 3 == 0){
		console.log("Fizz");
	} else if (i % 5 == 0){
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
```

2. die offensichtliche aber mit zentralisierten Werten:
```typescript
let fizz: number = 3;
let buzz: number = 5;

for(let i: number = 1; i <= 100; i++) {

	if (i % fizz == 0 && i % buzz == 0){
		console.log("FizzBuzz");
	else if (i % fizz == 0){
		console.log("Fizz");
	} else if (i % buzz == 0){
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
```

3. nochmal offensichtlich, aber mit zentralisierter Abfrage:
```typescript
for(let i: number = 1; i <= 100; i++) {

	let isFizz: boolean = i % 3 == 0;
	let isBuzz: boolean = i % 5 == 0;

	if (fizz && buzz){
		console.log("FizzBuzz");
	else if (fizz){
		console.log("Fizz");
	} else if (buzz){
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
```


4. die mit dem string

```typescript
for(let i: number = 1; i <= 100; i++) {

	let result: string = "";
	if (i % 3 == 0){
		result += "Fizz";
	}
	if (i % 5 == 0){
		result += "Buzz";
	}
	if (result == ""){
		result += i.toString();	
	}
	console.log(result);
}
```

4. die mit der Mathe (geht davon aus, dass es eine Funktion ggT() gibt, welche den größten gemeinsamen Teiler zurück gibt, sowie eine Funktion kgV(), welche das kleinste gemeinsame Vielfache zurück gibt). Haben viele gemacht, aber mit festgeschriebenen Zahlen statt der ggT/kgV Funktion.

```typescript
let fizz: number = 3;
let buzz: number = 5;

let teiler: number = ggT(fizz, buzz);	// bei 3 und 5 => 1
if(teiler == 1)
	teiler = kgV(fizz, buzz);	// bei 3 und 5 => 15

for(let i: number = 1; i <= 100; i++){

	if (i % teiler == 0){
		console.log("FizzBuzz");
	else if (i % fizz == 0){
		console.log("Fizz");
	} else if (i % buzz == 0){
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
```

[Mehr Infos zu FizzBuzz von Tom Scott (auf Englisch)](https://www.youtube.com/watch?v=QPZ0pIK_wsc)

### d)

> **Hinweis**: `x = bool ? value1 : value2` ist eine Kurzschreibweise für
> ```ts
> if (bool) {
> 	x = value1;
> } else {
> 	x = value2;
> }
> ``` 

```ts
function chess8(){
	let chessboard: string = "";
	let rowStartsWithHashtag: boolean = false;
	let rows: number = 8;
	let cols: number = 8;

	for (let i: number = 0; i < rows; i++) {		// zeilen
		let nextCharIsHashtag : boolean = rowStartsWithHashtag;

		for(let j: number = 0; j < cols; j++){		// spalten
			chessboard += nextCharIsHashtag ? "#" : " ";
			nextCharIsHashtag = !nextCharIsHashtag;	// revert boolean
		}

		rowStartsWithHashtag = !rowStartsWithHashtag; 
		chessboard+="\n";
	}
	return chessboard;
}
```

### e)

```ts
function chess(_rows: number, _cols: number){
	let chessboard: string = "";
	let rowStartsWithHashtag: boolean = false;

	for (let i: number = 0; i < _rows; i++) {
		let nextCharIsHashtag: boolean = rowStartsWithHashtag;

		for(let j: number = 0; j < _cols; j++){
			chessboard += nextCharIsHashtag ? "#" : " ";
			nextCharIsHashtag = !nextCharIsHashtag;
		}

		rowStartsWithHashtag = !rowStartsWithHashtag;
		chessboard+="\n";
	}
	return chessboard;
}
```


### :information_source: Die hier angegebenen Lösungen sind nur _eine_ von vielen!!!
Programmieren ist ein kreativer Prozess mit mehr als einer Lösung. Wir versuchen selbstverständlich euch die einfachste und am besten verständliche Lösung zu präsentieren, aber das gelingt leider nicht immer. :wink: Diese Lösungen haben auch nicht den anspruch besonders clever, performant oder kurz zu sein, da hier die Verständlichkeit am wichtigsten ist.