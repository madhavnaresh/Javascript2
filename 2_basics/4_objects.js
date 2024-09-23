//SINGLETON

const tinderUser={}
 tinderUser.id="1a2b"
 tinderUser.name="Ravi"
 tinderUser.age=23
 tinderUser.isLoggedIn=false

 //console.log(tinderUser);
 
 const regUser={
    name:{
        fullname:{
            firstname:"Madhav",
            midname:"",
            lastname:"Gupta"
        }
    }
 }

 //console.log(regUser.name.fullname.lastname);
 
 const ob1={1:"a", 2:"b"}
 const ob2={3:"c",4:"d"}

 const ob3={ob1,ob2} // adds object in object
 //console.log(ob3);

 // object=Object.assign(target,source)
 const ob4=Object.assign({},ob1,ob2) //all values will be assigned in the curly braces coz that is target
 //console.log(ob4);

 const ob5={...ob1,...ob2} //same as assign method
 //console.log(ob5);
 
 const users=[
    {
        id:231,
        mail:"2@mail.com"
    },
    {
        id:232,
        mail:"4@mail.com"
    },
    {
        id:233,
        mail:"6@mail.com"
    },
 ]
 //accessing from users
 console.log(users[1].mail);

 //using tinderUser object

 console.log(Object.keys(tinderUser)); //accessing key from an object in form of array
 console.log(Object.values(tinderUser)); //accessing key/value from an object in form of array
 console.log(Object.entries(tinderUser)); //give all entries in form of array in array
 

//APIs:- a short intro
 //in JS it's in form of Json[JavaScript Object Notation], and Json is also an object but without name
//  it looks like 
//this

/*
{
    "id":"2314",
    "name":"callis",
    "age":"25"
}
*/

//and this

[
    {},
    {},
    {}
]