class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    bark(){
        super.speak()
        console.log(`${this.name} barks`)
    }
}
const myDog = new Dog("Rex")
// myDog.speak();
myDog.bark();