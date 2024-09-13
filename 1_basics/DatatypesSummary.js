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

/*
const myFunction=function () {
    console.log("Hello world");
}
myFunction() //Function calling
*/


// +++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)


//Memory in Stack
let ytname="Dreamcomes"
let anotherytname=ytname

anotherytname="sweetdreams"
console.log(ytname);
console.log(anotherytname);

//Memory in Heap
let user1={
    name:"madhav",
    email:"madhav@google"
}

let user2=user1

user2.email="user@google"

console.log(user1);
console.log(user2);

