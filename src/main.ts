let name: string = 'Dave'
let age: number = 42
let isMarried: boolean = true
let re: RegExp = /\w+/

// Union
let employeeId: string | number

// Interface
interface Person {
    name: string,
    age: number,
    isMarried: boolean,
}
const person1: Person = {
    name: 'Dave',
    age: 42,
    isMarried: true
}

// Type
type status = 'success' | 'error' | 'pending'
const status: status = 'success'
console.log(status);


// Tuple 
let myTuple: [string, number, boolean] = ['John', 42, true]
let mixed = ['John', 42, true]

myTuple[1] = 42;
console.log(myTuple)

// type assertion or type casting

const addOrContact = (a: number, b: number, c :'add' | 'concat' = 'add') => {
    if(c === 'add') {
        return a + b
    } else {
        return `Contact ${a} at ${b}`
    }
}

const addition = addOrContact(1, 2, 'add')
const contact: string = addOrContact(1, 2, 'concat') as string

// The DOM
const img = document.getElementById('img') as HTMLImageElement;
const myImg = document.querySelector('#img') as HTMLImageElement
const nextImage = <HTMLImageElement>document.querySelector('#img');

img.src
myImg.src
nextImage?.src