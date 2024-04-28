// Primitive 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 32132456431654132465n;



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagra", "doga"];

let myObj = {
    name: 'kapil',
    age: 24
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber)



// ++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Kapil"

let anotherName = myName;

let userOne = {
    email: 'user@gmail.com',
    upi: 'user@ybl'
}

let userTwo = userOne;

userTwo.email = "kapil@google.com"

console.log(userOne.email)
console.log(userTwo.email)