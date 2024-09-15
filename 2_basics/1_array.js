// Array Methods

const myarray=[2,4,6,8,10,12]
console.log(myarray);

/*
myarray.push(14) //add an element in last
console.log(myarray);
myarray.pop() //remove an element from last
console.log(myarray);
myarray.unshift(0)
console.log(myarray); //add element in starting
myarray.shift()
console.log(myarray); //remove first element from starting

console.log(myarray.includes(3)); //search element in array & returns true/false

console.log(myarray.indexOf(5)); //return index no. of element otherwise -1

const newarray=myarray.join() //will join array and convert into string
console.log(newarray);
*/

const new1=myarray.slice(1,3) //take out that part of array from start value to -1 last value
console.log(new1);
console.log(myarray);

const new2=myarray.splice(1,3) //take out that part and also manipulate old array
console.log(new2);
console.log(myarray);
