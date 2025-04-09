// function getFirstElement(array:number[]){
//     return array[0]
// }
//
// const numbers = [1,2,3];
// const firstNum =getFirstElement(numbers);
//
// const strings = ['hehe','hjv'];
// const firstString =getFirstElement(strings);
// function getFirstELement(array:any[]){
//     return array[0]
// }
//
// const numbers = [1,2,3];
// const firstNum =getFirstELement(numbers);
//
// const strings = ['hehe','hjv'];
// const firstString = getFirstELement(strings);
// function getFirstELement(array:(number|string)[]){
//     return array[0]
// }
//
// const numbers = [1,2,3];
// const firstNum =getFirstELement(numbers);
//
// const strings = ['hehe','hjv'];
// const firstString = getFirstELement(strings);
// has some type of data inside of the function where u want that data to be changing its type based on what u pass in
// or based on what u return that is the perfect case for a generic
function getFirstELement<ElementType>(array:ElementType[]){
    return array[0]
}

const numbers = [1,2,3];
const firstNum =getFirstELement<number>(numbers);

const strings = ['hehe','hjv'];
const firstString = getFirstELement(strings);