class OldSyntax {
    constructor(){
        this.name='Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `Hi, My name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log('oldSyntax',oldSyntax,getGreeting());
//------

class NewSyntax{
    NAME ="JEN"
    getGreeting=()=>{
        return `Hi, My name is ${this.NAME}`;
    }
}
const newSyntax = new NewSyntax();
const getnewGreeting = newSyntax.getGreeting;
console.log('newSyntax',newSyntax, getnewGreeting());