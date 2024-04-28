
class Car{
 constructor(name,age){
    this.name=name;
    this.age=age;
 }

 speed(speeeed){
    console.log(`${this.name} speed is ${speeeed}`)
 }

}

const mycar= new Car("Mercedes",2015);
const mycar2= new Car("BMW",2017);

mycar.speed(300);
mycar2.speed(500);

