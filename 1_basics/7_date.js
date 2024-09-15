
/*
let myDate= new Date()

console.log(typeof myDate); //it's also an object

console.log(myDate); //return mixed date and time
console.log(myDate.toString()); //return day mm date yyyy hh:mm:ss timezone
console.log(myDate.toDateString()); //return day mm date yyyy
console.log(myDate.toISOString()); // something like 'myDate'
console.log(myDate.toJSON()); // same as 'toISOString'
console.log(myDate.toLocaleDateString()); //return mm/dd/yyyy
console.log(myDate.toLocaleString()); //return mm/dd/yyyy, hh:mm:ss abbreviation(AM/PM)
console.log(myDate.toLocaleTimeString()); //return hh:mm:ss abbreviation
*/


/*
let mycreatedDate= new Date(2024,0,12)
console.log(mycreatedDate.toDateString()); //return day mm(here 0, so january) date(given 12, so) and
//yyyy(here 2024, so) 
*/

/*
let myTimeStamp=Date.now()
console.log(myTimeStamp); //return miliseconds from 1 jan 1970 according to date/time standard of JS

let mycreatedDate= new Date(2024,0,12)
console.log(mycreatedDate.getTime())
*/

let newDate=new Date()
console.log(newDate.getDay()); //start from monday
console.log(newDate.getMonth()); //start from 0 as january

console.log(newDate.toLocaleString('default',{weekday:"long"}));
