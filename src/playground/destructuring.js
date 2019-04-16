console.log('Object destructuring');

const person ={
    name: 'Madhuri',
    age: 27,
    location:{
        city: 'Bangalore',
        temp: 93
    }
};

// const name =person.name;
// const age = person.age;

const { name:firstName = 'Madhu', age } = person;
const { temp: temperature , city} = person.location;

if(city && temperature ){
    console.log(`temp is ${temperature} in ${city}`);
}
console.log(`${firstName} is ${age}`);


const book={
    name:"The Guest Book",
    author:"Sarah Blake",
    publisher:{
        name:"Swallow",
    }
};

const { name: publisherName ="Unknown"}= book.publisher;
console.log(publisherName);

console.log('Array destructuring');

const address=['1299 S Juniper Street','Bangalore','India','560045'];

console.log(`You are in ${ad}`, );

//spread operator for Objects
const user ={
    name:"Madhu",
    age:27,
    location:{
        city:"Bangalore",
        state:"Karnataka"
    }
}

console.log({...user, country:'India',age:28});