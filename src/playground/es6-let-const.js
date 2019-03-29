//with var --we can redefine and reassign variable
var nameVar ="Madhu";
var nameVar = "Madhuri";
console.log('nameVar', nameVar);

//with let --we can reassign variable but not redefine them again. It will throw error
let nameLet ="Annie";
nameLet ="Anna";
console.log('nameLet',nameLet);

//with const --we cannot reassign or redefine them again. It will throw error
const nameConst ="frank";
// nameConst = "Neha";
console.log('nameConst',nameConst);

//let and const are block scoped..whereas var is function scoped
var name ="Madhuri Dongre";
if(name){
    var firstName = name.split(' ')[0];
    let lastName = name.split(' ')[1];
}

console.log(firstName); 
console.log(lastName); // this will throw error as the lastname is scoped only for if block