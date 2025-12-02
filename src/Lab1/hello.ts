console.log("Hello, World!");

const myName:string = "TypeScript";

console.log(`My name is ${myName}.`);

const age:number = 25;

console.log(`I am ${age} years old.`);

const isStudent:boolean = true;

if (isStudent) {
    console.log("I am a student.");
} else {
    console.log("I am not a student.");
}

// let numbers:number[] = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//     console.log(`Number: ${num}`);
// });

let numbers: Array<number> = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

// biến any/unknown

let value: any;
value = 42;
value = "Hello";
value = true;
value = { key: "value" };
value = [1, 2, 3];

// Function
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));

function sum() : number {
    return 5 + 10;
}

console.log(`Sum: ${sum()}`);

// Union Types
function displayId(id: number | string): void {
    console.log(`ID: ${id}`);
}

displayId(101);
displayId("202A");

// Type Aliases

type Point = {
    x: number;
    y: number;
};

function printPoint(point: Point): void {
    console.log(`Point coordinates: (${point.x}, ${point.y})`);
}

printPoint({ x: 10, y: 20 });