class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

const dog = new Animal('dog');
dog.speak();

class Dog extends Animal{
    bark(){
        console.log(`${this.name} barks`)
    }
}
const myDog = new Dog("Rex")
myDog.speak();
myDog.bark();