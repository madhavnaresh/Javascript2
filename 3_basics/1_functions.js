
/*
function myName(){
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("V");
}

myName //for refence purpose
myName() // function calling


function addtwonum(num1, num2){
    console.log(num1+num2);
}

addtwonum(4,6)

function addnum(num1,num2){
    return num1+num2
}

const result=addnum(3,7)
console.log(result);
*/


function loggedIn(username){
    return `${username} just logged in`
}
console.log(loggedIn("MG"));

// extended version of code given above
function logged(user){ //use when a chance that user will not enter a value
    if(!user){
        console.log("Please give an username");
        return
    }
    else{
        return `${user} logged in`
    }
}
console.log(logged("ab"));
