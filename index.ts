class Animal {
        name: string;
        height: number;
        width: number;
    constructor(name:string,height:number,width:number = 10) {
        this.name = name;
        this.height = height;
        this.width = width
    }

    speak():void{
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal{
    breed : string;
    constructor(name:string,breed?:string,height?:number,width?:number) {
        super(name,height,width);
        this.breed = breed
    }
    bark():void{
        super.speak()
        console.log(`${this.name} ${this.breed} barks height:${this.height} width: ${this.width}`);
    }
}
const myDog = new Dog('myDog','Lilliy',12,22);
myDog.bark();