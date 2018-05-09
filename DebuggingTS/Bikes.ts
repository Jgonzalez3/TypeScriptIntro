class Bike{
    constructor(
        public price: number,
        public max_speed: string,
        public miles?: number
    ){this.miles = 0}
    get displayinfo(){
        return console.log(`This Bike price ${this.price}, max speed is ${this.max_speed}, total miles is ${this.miles}`);
    } 
    ride = () =>{
        this.miles+=10;
        console.log(`Riding and new miles ${this.miles}`)
        return this;
    }  
    reverse = () =>{
        if(this.miles < 5){
            console.log(`cannot reverse ${this.miles} miles is less than 5`);
            return this;
        }
        this.miles-=5;
        console.log(`Reversing and new miles ${this.miles}`);
        return this;
    }
}
const bike1 = new Bike(100, "15mph");
bike1.ride().reverse().reverse().reverse().displayinfo
