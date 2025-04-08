class Animal {
        name: string;
    constructor(name:string){
        this.name = name;
    }

    speak():void{
        console.log(`${this.name} makes a sound`);
    }
}
const dog = new Animal('dog');
dog.speak();

class Dog extends Animal{
    bark():void{
        console.log(`${this.name} barks`);
    }
}
const myDog = new Dog('myDog');
myDog.speak();
myDog.bark();