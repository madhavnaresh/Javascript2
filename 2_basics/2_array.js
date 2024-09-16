

const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
/*
marvel_heros.push(dc_heros)

console.log(marvel_heros); //directly add elements of array in other array
//so to access element of pushed array , we need to call 2-d array like given below:-
console.log(marvel_heros[3][1]); //return 2nd element from pushed array
*/

/*
const allhero=marvel_heros.concat(dc_heros) //create a new array of all elements
console.log(allhero);
*/

/*
const allnewhero=[...marvel_heros,...dc_heros] //same as concat method but it is called SPREAD Method
console.log(allnewhero);
*/


let score1=100
let scroe2=200
let score3=300

console.log(Array.of(score1,scroe2,score3)); //creates an array of given elements
