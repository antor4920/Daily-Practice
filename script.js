
// let changeColor= document.getElementById("hero");
//  changeColor.style.backgroundColor="orange"

// function colorChange(){
//     const color= ["Red", "Green", "Blue","Red", "Green", "Blue","Red", "Green", "Blue","Red", "Green", "Blue"]
//     let colores=changeColor.style.backgroundColor=color[Math.random()*10];
//     return colores;
// }

// color.sort(function(){return 8- Math.random()*10})
//      return colores;

const arr1= [4,59,23,75,34]

console.log(arr1.sort(function(a,b){
    return a-b;
 }));

 console.log(arr1.sort(function(a,b){
    return b-a;
 }))

 let mathmax= Math.max.apply(null,arr1);
 let mathmin=Math.min.apply(null,arr1);
console.log(mathmin);
 console.log(mathmax);

