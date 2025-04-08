class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name,breed) {
        super(name);
        this.breed = breed;
    }
    bark(){
        console.log(`${this.name} ${this.breed} barks`)
    }
}
const myDog = new Dog("Rocky","German Shepherd")
// myDog.speak();
myDog.bark();