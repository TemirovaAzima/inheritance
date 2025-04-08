class Animal {
        name: string;
    constructor(name:string){
        this.name = name;
    }

    speak():void{
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal{
    breed : string;
    constructor(name:string,breed?:string) {
        super(name);
        this.breed = breed
    }
    bark():void{
        super.speak()
        console.log(`${this.name} ${this.breed} barks`);
    }
}
const myDog = new Dog('myDog','Lilliy');
myDog.bark();