
// The Ruls of writting the date 

const d= new Date();
console.log(d);

// date string 
const dateOfvisa= new Date("2023-12-01"); //here month is counting normally 1-12;
console.log(dateOfvisa);

const datewithString= new Date("December 8, 1997 07:30:00");
console.log(datewithString);

// date with number like Year, monthe, day ,min, sec, misec 

const datewithNUmber= new Date(97,11,8, 7, 30, 40);//here month is counting  0-11;
console.log(datewithNUmber);

// date with milliseconds 

const miliseconds= new Date(1713950101635);
console.log(miliseconds.toUTCString());

// toDateString()
// toUTCString()
// toISOString()



