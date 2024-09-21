//singleton
// Object.create

//object literals

const mySym=Symbol("key1")

const jsUser={
    Name:"Madhav",
    Age:21,
    [mySym]:"myKey",
    Mail:"mg123@gmail.com",
    isLoggedin: false,
    lastLoginDays:["monday","tuesday"]
}

// console.log(jsUser.Mail);
// console.log(jsUser["Mail"]); //object takes these keys as string
// console.log(jsUser[mySym]);  //only way to fetch Symbols

/*
jsUser.Mail="madhav@gmail.com"
console.log(jsUser);
Object.freeze(jsUser) //after using this functions object's keys and values can't be changed
// trying
jsUser.Mail="mg45@gmail.com"
console.log(jsUser);
*/

jsUser.greet=function() {
    console.log("Hello jii");
}

//console.log(jsUser.greet); //give 'function(anonymous)'
console.log(jsUser.greet());

jsUser.greet2=function(){
    console.log(`hey ${this.Name}, your age is ${this.Age}`);
}
console.log(jsUser.greet2());
