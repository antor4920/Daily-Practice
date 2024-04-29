// --------One--------
const compute={
    company1:"Apple",
    company2:"samsung",
    Company3:"Asus"
}
// --------Two--------
const mobile= {};
mobile.name= "samsung";
mobile.model="A34"
// --------Three--------
const person= new Object();
person.name="Antor";
person.age=26;
person.location="Dhaka";

const x= compute;

console.log(x.company1, mobile.name , person.location);

// ------Object Properties----

const properties_access={
    subject: "javascript",
    topic:"properties access",
    date: new Date(),
}

console.log(properties_access.date.toUTCString());
console.log(properties_access["subject"], properties_access["topic"])
let X= "topic";
console.log(properties_access[X])

// ---------Nested Objects------------

const nested_object={
    subject: "javascript",
    topics: {
        first: "functions",
        second:"class",
        third:"object"
    },
    today_topic:"Today's topic is nested Object"
}

console.log(nested_object.today_topic,"from" + " "+nested_object.topics.third);

const display_object= Object.values(nested_object);
console.log(properties_access);
const display_object2= JSON.stringify(nested_object);
console.log(display_object2)

