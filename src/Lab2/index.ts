console.log("Lab 2 - Object Types and Arrays");
const person1:object = {
    name: "Alice",
    age: 30,
    city: "New York"
};

const person2:object = {
    name: "Bob",
    age: 25,
    city: "Los Angeles"
};

const person3:object = {};

const people: Array<object> = [person1, person2, person3]

const check = people.forEach(element => {
    if(element == null){
        console.log(`${(element as any).name} does not have a city specified.`);
    }
    else {
        return true;
    }
    
});
console.log(check);