/* const person = {
    name: 'Andrew',
    age: 27,
    location: {
        city: 'Lisbon',
        temp: 92
    }
};

const{ name: firstName = 'Anonymous', age } = person;

console.log(`${name} is ${age}.`);

const { city, temp:temperature } = person.location;

if(city && temperature){
    console.log(`It's ${temperature} in ${city}.`)
} */

/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name = 'Self-Published'} = book.publisher;
console.log(`${name}`); */

//const address = ['1299 S Juniper Street', 'Lisbon', 'Portugal', '1300'];

//const [street, city = 'Lisbon', state = 'New York', zip] = address;

//console.log(`You are in ${address[1]}, ${address[2]}`);

//console.log(`You are in ${city}, ${state}`);


const item = ['Coffee (hot)', '2€' , '3€', '4€'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);