class Animal {
    constructor(name,height,width=10){
        this.name = name;
        this.height= height;
        this.width= width;
    }

    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name,breed,height,width) {
        super(name,height,width);
        this.breed = breed;
    }
    bark(){
        console.log(`${this.name} ${this.breed} barks, height:${this.height},weight:${this.width}`);
    }
}
// const myDog = new Dog("Rocky","German Shepherd",78)
// myDog.bark();
const myCat = new Dog("Kitty","Hello Kitty",10)
myCat.bark();