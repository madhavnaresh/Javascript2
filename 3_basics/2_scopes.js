
/*
//var c=300
let a=100
if(true){
    let a=10
    const b=20
    var c=30
    console.log("inner ",a);
    
}
console.log(a);
// console.log(b);
// console.log(c);
*/


/*
function one(){
    const username="mg"
    function two(){
        const website="yt"
        console.log(username);
    }
    //console.log(website);
    two()
    
}
one()
*/

console.log(addone(5));
function addone(num){
    return num+1
}

const addtwo=function(num){
    return num+2
}
console.log(addtwo(5))