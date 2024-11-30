const user={
    username:"mg",
    price:999,
    welcomeMsg:function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
        
    }
}
user.welcomeMsg()
user.username="gupta"
user.welcomeMsg()
// console.log(this); //here it will give empty object while in browser it works differently
