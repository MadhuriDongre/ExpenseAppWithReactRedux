
function square(x){
    return x*x;
}
console.log('Square:', square(7));

//all arrow functions are anynomous..need to asign it to a variable to refence it.
// const squareArrow =  (x) => {
//     return x * x;
// }

//concise arrow function...can ignore return if only one expression is there
const squareArrow = (x) => x * x;
console.log('Square:', squareArrow(9));

const getFirstName = (name)=> name.split(' ')[0];
console.log(getFirstName('Madhuri Dongre'));

//argument object, this keyword -- no longer bound with arrow functions
const add = function(a,b){
    console.log(arguments);
    return a+b;
}
console.log(add(4,5));
const addArrow = (a, b)=> {
    // console.log(arguments);  --no longer available in arrow function
    return a+b;
};
console.log(addArrow(1,3));


const user ={
    name: "Madhuri Dongre",
    cities:["Bangalore","Pune","Mumbai","Kolkata"],
    printPlaces: function(){
        console.log('Name: ', this.name);
        console.log('Cities: ', this.cities);
        this.cities.forEach(function(city){
            console.log(city);
        });
    },
    printPlacesArrow (){
        const citymap = this.cities.map((city)=>city+'!!');
        console.log('citymap ', citymap);
        this.cities.forEach( (city) => {
            console.log(city);
        });
    }
}

user.printPlaces();
user.printPlacesArrow();

const multiplier = {
    numbers:[10,20,30],
    multiplyBy: 9,
    multiply(){ 
       return this.numbers.map((num)=>this.multiplyBy * num );
    }
};

console.log(multiplier.multiply());