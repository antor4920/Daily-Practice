
// One 
let car={
    Fname:"Mercedes",
    lname:"Benz",
    Fullname: function(){ 
        return this.Fname+ " "+this.lname
    },
}

console.log(car.Fullname());

// two 
console.log(this);

// three 
let fun= function(){
    console.log(this)
}
fun();

// four 
let fun2= function(){
    "use strict"
    console.log(this)
}

fun2();


const Human={
    FName: "Jahidul",
    lname:"hasan"
}

const Human2={
    FullName:function(){
        return this.FName+" "+this.lname;
    }
}

console.log(Human2.FullName.call(Human));