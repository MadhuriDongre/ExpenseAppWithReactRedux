class Person{
    constructor(name = 'Anonymous',age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi, I am ${this.name}!!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their Majaor is ${ this.major}`;
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting+=` I am visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

let me = new Person('Madhuri Dongre',26);
console.log(me);

let other = new Person();
console.log(other);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(other.getDescription());

let studentData = new Student('Madhu', 28, 'ECE');
console.log(studentData);
console.log(studentData.hasMajor());
console.log(studentData.getDescription());

let student1= new Student();
console.log(student1);
console.log(student1.hasMajor());
console.log(student1.getDescription());

let traveller1 = new Traveller('Neha',30,"Delhi");
let traveller2 = new Traveller();
console.log(traveller1.getGreeting());
console.log(traveller2.getGreeting());
