
function dispaly(some){
    console.log(some);
}

function calculate(num1){
   let result=365*num1;
   return dispaly(result);

}

calculate(25);

// --------Call Back Function-------

function mydisplay(some){
    console.log(some);
}
function calculateAge(Month,mycallback){
     let Year= Month/12;
     mycallback(Year);
}
calculateAge(20,mydisplay);




const myNumber= [2,65,8,94,2,4,6,5,-43,-34,-6,-3];

console.log(posNumber(myNumber,(x) => x>=0));

function posNumber(number,callback){
   const arr1=[];
   for (let x of number){
    if (callback(x)){
        arr1.push(x);
       
    }

   }
   return arr1;
   }
  

