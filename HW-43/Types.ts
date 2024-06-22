let isCompleted: boolean = false;
let number: number = 88;
let message: string = "TypeScript — it's fun!";
let Score: string;
let EvenNumbers: number[] = [2, 4, 6, 8, 10];

EvenNumbers.push(12);


EvenNumbers.forEach(num => console.log(num));

let employee: [string, string, number] = ["Ivan", "Ivanov", 12345];


employee[1] = "Доу";


employee.push(30);

employee.forEach(item => console.log(item));

function printGreeting(name: string) {
    console.log(`Welcome, ${name}!`);
}

printGreeting("Aleksey");
let data: any;
data = 42;
data = "Hello";
data = true;


let numOrString: number | string;
numOrString = 10;
numOrString = "ten";
