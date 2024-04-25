let setMethod= new Set();


let setMethod2=new Set(["Lamboghini", "Mercedes-Benz","Bugatti","Audi",5,6,7])

setMethod.add("antor");
setMethod.add("Ashik");
setMethod.add("jihad");
setMethod.add("sheza");

setMethod.delete("antor")

console.log(setMethod2)

console.log(setMethod.size);


// MAP 

let Fmap= new Map();
Fmap.set("Hi",2);
Fmap.set("hello",5);

console.log(Fmap.get("Hi"));


function isDate(mydate){
  return mydate.constructor.toString().indexOf("Date") > -1;
}

console.log(isDate(new Date()));

function isstring(mydate){
    return mydate.constructor.toString().indexOf("String") > -1;
  }
  
  console.log(isstring("antor"));

  xx= Number("");

  console.log( xx);