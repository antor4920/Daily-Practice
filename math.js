let a = 10.343;

console.log(Math.round(a)) //10
console.log(Math.ceil(a));//11
console.log(Math.floor(a));//10
console.log(Math.trunc(a));//10


console.log(Math.random()*5)
let age= 9;
let candidate= (age>20 && age<32) ? "acceptable": "not acceptable";
console.log(candidate);

let name= null;
let  height= 30;  

result= name ?? height;
console.log(result);