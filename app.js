// array destructuring
const numbers = [54, 92, 3, 4];
// const x =numbers[0];
// const y = numbers[1];
// const [x, y] = [54, 92];
const [x, y] = numbers;
// console.log(x, y);

function boxify(num1){
    return [num1, num1 + 5];
}
const [box1, box2] = boxify(8);
// console.log(box1, box2);

// object destructuring
const person = {id: 1, name: 'Rahim', age: 23};
const {name, age} = person;
// console.log(name, age);

// create object shortcut
const one = 23;
const two = 24;
const obj = {one, two};
// console.log(obj);

// new array using three dots
// numbers.push(77); array te element add korte
const newNumbers = [...numbers, 98];
console.log(newNumbers);

