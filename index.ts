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
    bark():void{
        super.speak()
        console.log(`${this.name} barks`);
    }
}
const myDog = new Dog('myDog');
myDog.bark();