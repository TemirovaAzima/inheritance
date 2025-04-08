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