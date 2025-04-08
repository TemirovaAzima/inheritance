class Animal {
        name: string;
        height: number;
        weight: number;
    constructor(name:string,height:number,type:string ,weight:number ) {
        this.name = name;
        this.height = height;
        this.weight = weight
        if(weight !== undefined){
            this.weight = weight;
        }else {
            if(type === 'cat'){
                this.weight = 4
            }else if(type === 'dog'){
                this.weight = 18
            }else{
                this.weight = 5
            }
        }
    }

    speak():void{
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal{
    breed : string;
    constructor(name:string,breed?:string,height?:number,weight?:number) {
        super(name,height,'cat',weight);
        this.breed = breed
    }
    bark():void{
        super.speak()
        console.log(`${this.name} ${this.breed} barks height:${this.height} width: ${this.weight}`);
    }
}
const myDog = new Dog('myDog','Lilliy',12);
myDog.bark();