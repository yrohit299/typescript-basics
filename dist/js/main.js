let name = 'Dave';
let age = 42;
let isMarried = true;
let re = /\w+/;
// Union
let employeeId;
const person1 = {
    name: 'Dave',
    age: 42,
    isMarried: true
};
const status = 'success';
console.log(status);
// Tuple 
let myTuple = ['John', 42, true];
let mixed = ['John', 42, true];
myTuple[1] = 42;
console.log(myTuple);
// type assertion or type casting
const addOrContact = (a, b, c = 'add') => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return `Contact ${a} at ${b}`;
    }
};
const addition = addOrContact(1, 2, 'add');
const contact = addOrContact(1, 2, 'concat');
// The DOM
const img = document.getElementById('img');
const myImg = document.querySelector('#img');
const nextImage = document.querySelector('#img');
img.src;
myImg.src;
nextImage === null || nextImage === void 0 ? void 0 : nextImage.src;
export {};
//# sourceMappingURL=main.js.map