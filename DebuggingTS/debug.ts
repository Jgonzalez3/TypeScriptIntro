// 1.) setting types:
let myString: any;
myString = "Bee stinger"
myString = 9;
console.log(myString);

// 2.) setting types for function parameters: use any to declare any variable rather than type specific
function sayHello(name:any){
    return `Hello, ${name}!`;
}
console.log(sayHello("Kermit"));
console.log(sayHello(9));

//3.) OPtional Parameters: USE ? to make parameter optional
function fullNAme(firstName: string, lastName: string, middleName?: string){
    let fullNAme = `${firstName} ${middleName} ${lastName}`;
    return fullNAme;
}
console.log(fullNAme("Mary", "Moore", "Tyler"));
console.log(fullNAme("Jimbo", "Jones"));

//4.) Interfaces and functions parameters: 
interface Student{
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
}
console.log(graduate(christine));
console.log(graduate(jay));

//5.) Classes and function parameters
class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string){
            this.fullName = `${firstName} ${lastName}`;
        }
        debug(){
            console.log("Console.log() is my friend.")
        }
    }

const Javier = new Ninja("Javier", "Gonzalez");
const turing = new Ninja("Alan","Turing")
function study(programmer: Ninja){
    return `Ready to whiteboard an algorithim, ${programmer.fullName}?`
}
console.log(study(turing));

// 6.) Arrow functions:
var increment = x => x+1;
console.log(increment(3));
var square = x => (x*x);
console.log(square(4));
var multiply = (x,y) => x*y;
console.log(multiply(3,2));

var math = (x,y)=> { 
let sum = x + y;
let product = x * y;
let difference = Math.abs(x-y);
return [sum, product, difference];
}
console.log(math(2,2));

// 7.) Arrow functions and this:
class Elephant{
    constructor(public age: number){}
    birthday = x => this.age++
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
}, 2000);