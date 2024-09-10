//JavaScript is dynamically typed, meaning that variable types are determined at runtime, not at compile time.
//You don't need to declare a variable's type when you define it, and it can change types throughout the execution of the program

//Premitive

/*

7 Types:-
    String, Number,Boolean, Null, Undefined ,Symbol, BigInt

*/

//Non-premitive (Reference)

/*

Array, Object, Functions

*/

/*
const id=Symbol("123")
const anotherId=Symbol("123")

console.log(id === anotherId);
*/

/*

const heros=["shaktiman","hatim","balveer"]
let myobj={
    name:"madhav",
    age:22
}
console.log(heros,myobj);

*/

//Function Definition
const myFunction=function () {
    console.log("Hello world");
}
myFunction() //Function calling