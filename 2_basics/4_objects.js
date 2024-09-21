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
 console.log(ob4);
 