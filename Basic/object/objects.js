let person ={
    firstName : 'john',
    lastName : 'mosh',
    age : 30,
    hobbies:['music', 'movies', 'internet'],

    address: {
        street: 'RH',
        houseNumber: 51,
        city: 'chemnitz' 
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.age);
console.log(person.address);
console.log(person.address.houseNumber);
console.log(person.hobbies[1]);

// add properties
person.email= 'mac@gamil.com';
console.log(person);


let { age, lastName}= person;
console.log(lastName);
let { street }= person.address;// if use age , get error
console.log(lastName);

let { firstName, address:{city}}= person;// if use lastname, get error
console.log(city);