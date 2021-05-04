# Beispiellösungen Aufgabe 2.2

### :information_source: Die hier angegebenen Lösungen sind nur _eine_ von vielen!!!
Programmieren ist ein kreativer Prozess mit mehr als einer Lösung. Wir versuchen selbstverständlich euch die einfachste und am besten verständliche Lösung zu präsentieren, aber das gelingt leider nicht immer. :wink: Diese Lösungen haben auch nicht den Anspruch besonders clever, performant oder kurz zu sein, da hier die Verständlichkeit am wichtigsten ist.

Bei Fragen meldet euch bei Lukas Scheuerle.


## Aufgabe 1

### a)
```ts
function min(..._inputs: number[]): number{
	let min: number = Infinity;
	for(let i: number = 0; i < _inputs.length; i++){
		if(min > _inputs[i]){
			min = _inputs[i];
		}
	}
	return min;
}
```

Alternativ könnte man auch mit dem ersten input statt mit Infinity beginnen:

```ts
function min(..._inputs: number[]): number{
	let min: number = _inputs[0];
	for(let i: number = 1; i < _inputs.length; i++){
		if(min > _inputs[i]){
			min = _inputs[i];
		}
	}
	return min;
}
```

Optimalerweise sollte man noch prüfen, ob die Funktion überhaupt mindestens einen Übergabeparameter übergeben bekommen hat.


### b)

```typescript
function isEven(_input: number): boolean{
	if(_input == 0) return true;
	if(_input == 1) return false;
	let result: boolean = isEven(_input - 2);
	return result;
}

console.log(isEven(50));
console.log(isEven(75));
```

Bei -1 gibt es einen Rekursionsfehler, da es immer in die dritte Option reingeht und so die Zahl immer weiter verringert ohne sich der 0 anzunähern.  
Eine Lösung hierfür ist es, den rekursiven Aufruf je nach Vorzeichen anders zu gestalten.

```ts
function isEven(_input: number): boolean{
	if(_input == 0) return true;
	if(_input == 1) return false;

	let result: boolean;
	if(_input > 0)
		result = isEven(_input - 2);
	if(_input < 0)
		result = isEven(_input + 2);
	return result;
}
```

Oder auch kürzer dank `Math.sign` (gibt das Vorzeichen als -1, 0 oder 1 zurück)

```ts
function isEven(_input: number): boolean{
	if(_input == 0) return true;
	if(_input == 1) return false;

	return isEven(_input + Math.sign(_input) * -2);
}
```

### c)

```ts
// 1
interface Student {
  name: string;
  course: string;
  semester: number;
  matriculation: number;
}

// 2
let student1: Student = { name: "Lukas Scheuerle", course: "MIM", semester: 7, matriculation: 257396 };
let student2: Student = { name: "Max Mustermann", course: "OMB", semester: 2, matriculation: 123456 };
let student3: Student = { name: "Laura Musterfrau", course: "MIB", semester: 2, matriculation: 654321 };

// 3 
let studentArray: Student[] = [student1, student2];
studentArray.push(student3);
studentArray.push({ name: "Andreas Reich", course: "MIM", semester: 4, matriculation: 259123 });

console.log(studentArray[0].name);
console.log(studentArray[1].matriculation);
console.log(studentArray[3].semester);

// 4
function showInfo(_s: Student): void {
  console.log(`Name: ${_s.name}, Kurs: ${_s.course} ${_s.semester}, Matrikelnummer: ${_s.matriculation}`);
}

for (let student of studentArray) {
  showInfo(student);
}
```

Und das alles nochmal aber in Klassenform
```ts
class Student {
  name: string;
  course: string;
  semester: number;
  matriculation: number;

  constructor(_name: string, _course: string, _semester: number, _matriculation: number) {
    this.name = _name;
    this.course = _course;
    this.semester = _semester;
    this.matriculation = _matriculation;
  }

  showInfo(): void {
    console.log(`Name: ${this.name}, Kurs: ${this.course} ${this.semester}, Matrikelnummer: ${this.matriculation}`);
  }
}

let student1: Student = new Student("Lukas Scheuerle", "MIM", 7, 257396);
let student2: Student = new Student("Max Mustermann", "OMB", 2, 123456);
let student3: Student = new Student("Laura Musterfrau", "MIB", 2, 654321);

let studentArray: Student[] = [student1, student2];
studentArray.push(student3);
studentArray.push(new Student("Andreas Reich", "MIM", 4, 259123));

console.log(studentArray[0].name);
console.log(studentArray[1].matriculation);
console.log(studentArray[3].semester);

// dieser Teil der Aufgabe ist weiterhin außerhalb der Klasse, da er innerhalb keinen Sinn macht.
for (let student of studentArray) {
  student.showInfo();
}
```

## Aufgabe 2

### a) 

```ts
function backwards(_arr: number[]): number[] {
	let reversed: number[] = [];
	for(let i: number = _arr.length; i > 0; i--){
		reversed.push(_arr[i - 1]);
	}
	return reversed;
}
```

### b)

```ts
function join(_a: number[], _b: number[]): number[] {
	let joined: number[] = [];
	for(let i: number = 0; i < _a.length; i++) {
		joined.push(_a[i]);
	}
	for(let i: number = 0; i < _b.length; i++) {
		joined.push(_b[i]);
	}
	return joined;
}
```

Bonus
```ts
function join(..._arrays: number[][]): number[] {
	let joined: number[] = [];
	for(let i: number = 0; i < _arrays.length; i++) {
		for(let k: number = 0; k < _arrays[i].length; k++) {
			joined.push(_arrays[i][k]);
		}
	}
	return joined;
}
```

### c)

```ts
function split(_array: number[], _i1: number, _i2: number): number[] {
	let splitUp: number[] = [];
	for(let i: number = _i1; i <= _i2; i++){
		splitUp.push(_array[i]);
	}
}
```

Bonus: Man sollte prüfen, ob die indizes überhaupt innerhalb des Arrays liegen (z.b. Index 10 bei einem Array mit 4 Elementen, negative Werte, usw). Außerdem sollte man prüfen, ob i1 und i2 auch in der richtigen Reihenfolge übergeben wurden. Letzteres kann man selbst anpassen, ersteres kann man auf viele verschiedene Arten dem Nutzer mitteilen, in diesem Fall werfen wir eine Exception.

```ts
function split(_array: number[], _i1: number, _i2: number): number[] {
	// indizes kleiner als 0?
	if(_i1 < 0 || _i2 < 0) {
		throw new Error("Index negative");
	}
	// indizes größer als die Arraylänge
	if(_i1 > _array.length || _i2 > _array.length){
		throw new Error("Index out of bounds");
	}

	//prüfe ob i1 > i2, falls das der fall ist, vertausche sie
	if(_i1 > _i2){
		let temp: number = _i1;
		_i1 = _i2;
		_i2 = temp;
	}

	let splitUp: number[] = [];
	for(let i: number = _i1; i <= _i2; i++){
		splitUp.push(_array[i]);
	}
	return splitUp;
}
```

Alternativ kann man natürlich auch eine Anpassung der Werte auf die maximalen Werte vornehmen.

```ts
function split(_array: number[], _i1: number, _i2: number): number[] {
	// indizes kleiner als 0?
	if(_i1 < 0){
		_i1 = 0;
	}
	if(_i2 < 0) {
		_i2 = 0;
	}
	// indizes größer oder gleich wie die Arraylänge => zu groß
	if(_i1 >= _array.length){
		_i1 = _array.length - 1;
	}
	if(_i2 >= _array.length){
		_i2 = _array.length - 1;
	}

	//prüfe ob i1 > i2, falls das der fall ist, vertausche sie
	if(_i1 > _i2){
		let temp: number = _i1;
		_i1 = _i2;
		_i2 = temp;
	}

	let splitUp: number[] = [];
	for(let i: number = _i1; i <= _i2; i++){
		splitUp.push(_array[i]);
	}
	return splitUp;
}
```

Eine weitere Lösung wäre es, statt die indizes zu ändern, die forschleife anzupassen:

```ts
function split(_array: number[], _i1: number, _i2: number): number[] {
	//prüfe ob i1 > i2, falls das der fall ist, vertausche sie
	if(_i1 > _i2){
		let temp: number = _i1;
		_i1 = _i2;
		_i2 = temp;
	}

	let splitUp: number[] = [];
	for(let i: number = _i1 < 0 ? 0 : _i1 ; i <= _i2 && i < _array.length; i++){
		splitUp.push(_array[i]);
	}
	return splitUp;
}
```

## Aufgabe 3

### b) 

```ts
interface Rectangle {
	width: number;
	height: number;
	xPos: number;
	yPos: number;
	color: string;
}
```

### c)

Ich habe mir für die Übersichtlichkeit erlaubt, eine Methode zu schreiben und verwenden, welche zufällige Zahlen innerhalb eines übergebenenen Bereiches zurück gibt.

```ts
function getRandom(_min: number, _max: number): number {
	return Math.floor( Math.random() * (_max - _min) + _min );
}

function createRect(): Rectangle {
	let x: number = getRandom(0, 200);
	let y: number = getRandom(0, 200);
	let w: number = getRandom(50, 200);
	let h: number = getRandom(50, 200);

	let r: number = getRandom(0, 255);
	let g: number = getRandom(0, 255);
	let b: number = getRandom(0, 255);

	return {
		width: w,
		height: h,
		xPos: x,
		yPos: y,
		color: `rgb(${r}, ${g}, ${b})`
	};
}
```

### d)

```ts
function drawRect(_r: Rectangle): void {
	context.fillStyle = _r.color;
	// variante 1
	context.fillRect(_r.xPos, _r.yPos, _r.width, _r.height);
	// variante 2
	context.beginPath();
	context.rect(_r.xPos, _r.yPos, _r.width, _r.height);
	context.fill();
}
```

### e)

```ts
let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

let rects: Rectangle[] = [];
for(let i: number = 0; i < 5; i++) {
	rects.push(createRect());
}

for(let rect of rects){
	drawRect(rect);
}
```

### Bonus
Alles nochmal, aber als Klasse.

```ts
let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

class Rectangle {
	width: number;
	height: number;
	xPos: number;
	yPos: number;
	color: string;

	constructor() {
		this.xPos: number = getRandom(0, 200);
		this.yPos: number = getRandom(0, 200);
		this.width: number = getRandom(50, 200);
		this.height: number = getRandom(50, 200);

		let r: number = getRandom(0, 255);
		let g: number = getRandom(0, 255);
		let b: number = getRandom(0, 255);
		this.color = `rgb(${r}, ${g}, ${b})`;
	}

	function draw(): void {
		context.fillStyle = this.color;
		// variante 1
		context.fillRect(this.xPos, this.yPos, this.width, this.height);
		// variante 2
		context.beginPath();
		context.rect(this.xPos, this.yPos, this.width, this.height);
		context.fill();
	}
}

let rects: Rectangle[] = [];
for(let i: number = 0; i < 5; i++) {
	rects.push(new Rectangle());
}

for(let rect of rects){
	rect.draw();
}
```

### f)

```ts
let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

class Rectangle {
	width: number;
	height: number;
	xPos: number;
	yPos: number;
	xDirection: number;
	yDirection: number;
	color: string;

	constructor() {
		this.xPos = getRandom(0, 200);
		this.yPos = getRandom(0, 200);
		this.width = getRandom(50, 200);
		this.height = getRandom(50, 200);

		this.xDirection = getRandom(-10, 10);
		this.yDirection = getRandom(-10, 10);

		let r: number = getRandom(0, 255);
		let g: number = getRandom(0, 255);
		let b: number = getRandom(0, 255);
		this.color = `rgb(${r}, ${g}, ${b})`;
	}

	moveAndDraw(): void {
		this.xPos += this.xDirection / 20;
		this.yPos += this.yDirection / 20;
		context.fillStyle = this.color;
		context.fillRect(this.xPos, this.yPos, this.width, this.height);
	}
}

let rects: Rectangle[] = [];
for(let i: number = 0; i < 5; i++) {
	rects.push(new Rectangle());
}

updateRectangles();

function updateRectangles(): void{
	context.clearRect(0, 0, canvas.width, canvas.height);
	for(let rect of rects){
		rect.moveAndDraw();
	}

	setTimeout(updateRectangles, 50);
}
```

Alternativ kann man statt `setTimeout` auch `setInterval` verwenden.

```ts

function updateRectangles(): void{
	context.clearRect(0, 0, canvas.width, canvas.height);
	for(let rect of rects){
		rect.moveAndDraw();
	}
}

setInterval(updateRectangles, 50);
```

Auch eine gute Lösung, aber aufwändiger weil man dann mehr Zeit mit Zeitmanagement verbringen muss, wäre `requestAnimationFrame` zu nutzen.

### g)

```ts
let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

class DrawableObject {
	xPos: number;
	yPos: number;
	xDirection: number;
	yDirection: number;
	color: string;

	constructor() {
		this.xPos = getRandom(0, 200);
		this.yPos = getRandom(0, 200);

		this.xDirection = getRandom(-10, 10);
		this.yDirection = getRandom(-10, 10);

		let r: number = getRandom(0, 255);
		let g: number = getRandom(0, 255);
		let b: number = getRandom(0, 255);
		this.color = `rgb(${r}, ${g}, ${b})`;
	}

	moveAndDraw(): void {
		this.xPos += this.xDirection / 20;
		this.yPos += this.yDirection / 20;
		context.fillStyle = this.color;
	}
}

class Rectangle extends DrawableObject{
	width: number;
	height: number;

	constructor() {
		super();
		this.width = getRandom(50, 200);
		this.height = getRandom(50, 200);
	}

	moveAndDraw(): void {
		super.moveAndDraw();
		context.fillRect(this.xPos, this.yPos, this.width, this.height);
	}
}

class Circle extends DrawableObject {
	radius: number;

	constructor() {
		super();
		this.radius = getRandom(50, 100);
	}

	moveAndDraw(): void {
		super.moveAndDraw();
		context.beginPath();
		context.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2);
		context.fill();
	}
}

let objects: DrawableObject[] = [];
for(let i: number = 0; i < 5; i++) {
	objects.push(new Rectangle());
	objects.push(new Circle());
}

updateCanvas();

function updateCanvas(): void{
	context.clearRect(0, 0, canvas.width, canvas.height);
	for(let obj of objects){
		obj.moveAndDraw();
	}
	setTimeout(updateCanvas, 50);
}
```

### :information_source: Die hier angegebenen Lösungen sind nur _eine_ von vielen!!!
Programmieren ist ein kreativer Prozess mit mehr als einer Lösung. Wir versuchen selbstverständlich euch die einfachste und am besten verständliche Lösung zu präsentieren, aber das gelingt leider nicht immer. :wink: Diese Lösungen haben auch nicht den Anspruch besonders clever, performant oder kurz zu sein, da hier die Verständlichkeit am wichtigsten ist.