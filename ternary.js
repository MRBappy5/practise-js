// const money = 150;
// let food;
// if(money > 100){
//     food = 'biriani'
// }
// else{
//     food = 'alur vorta'
// }
// // ternary
// // condition ? true value : false value
// let food = money > 100 ? 'biriani' : 'alur vorta'

const active = false;

// const cssClass = active ? 'active' : 'inactive'
// // function call shortcut alternative
// active ? displayUser() : hideUser()

// // 
// active && displayUser()
// active || displayUser()

// const x = active && 5;
// console.log(x);

// string to number
const x = +'5'
console.log(x);

// number to string
const y = 5 + ''
console.log(y);

// default parameter
function add (num1, num2 = 5){
    return num1 + num2;
}
const result = add(6);
console.log(result);