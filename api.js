// json
const person = {
    name: 'Rahim',
    age: 25
}
// json convert
const data = JSON.stringify(person);
const dataParse = JSON.parse(data);
// console.log(dataParse.name);

// api fetch
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

// local storage
// localStorage.setItem('userId', 1245);
const userId = localStorage.getItem('userId')
// console.log(userId);
localStorage.setItem('person', JSON.stringify(person))
const personInfo = localStorage.getItem('person')
const parseInfo = JSON.parse(personInfo)
console.log(parseInfo.age);

const keys = Object.keys(parseInfo)
console.log(keys);

const values = Object.values(parseInfo)
console.log(values);