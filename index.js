class Animal {
    constructor(name,height,type,weight) {
        this.name = name;
        this.height = height;
        this.type = type;
        if (weight !== undefined) {
            this.weight = weight;
        } else {
            if (type === "cat") {
                this.weight = 4;
            } else if (type === "dog") {
                this.weight = 19;
            } else {
                this.weight = 6;
            }
        }
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name,height,breed,weight) {
        super(name,height,"dog",weight);
        this.breed = breed;
    }
    bark(){
        console.log(`${this.name} ${this.height} barks, height:${this.breed},weight:${this.weight}`);
    }
}
// const myDog = new Dog("Rocky","German Shepherd",78)
// myDog.bark();
// const myCat = new Dog("Kitty","Hello Kitty",10)
// myCat.bark();
const dog1 = new Dog("Max",55,"Beagle");
dog1.bark();