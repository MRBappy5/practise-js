const products = [
    {id: 1, name: 'laptop', price: 100},
    {id: 2, name: 'mobile', price: 200},
    {id: 3, name: 'watch', price: 20},
    {id: 4, name: 'tablet', price: 80}
];

// map
const names = products.map(product => product.name);
const prices = products.map(pd => pd.price);
console.log(prices);

// forEach
products.forEach(product => console.log(product.name));

// filter
const cheaper = products.filter(pd => pd.price < 100);
console.log(cheaper);

// remove an item with filter
const remaining = products.filter(pd => pd.id !=3);
console.log(remaining);

// find
const hasWatch = products.find(pd => pd.name === 'watch');
console.log(hasWatch);
