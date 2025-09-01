// Generics Syntax
const echo = <T>(arg: T) => arg

function echoFn<T>(arg: T){
    return arg
}

let z = 'Hello Typscript'
console.log(echo('Hello World')) //string 
console.log(echoFn(2+3)) // number
console.log(echo(typeof z === 'boolean'))

//////////////////////////////////////////

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if(Array.isArray(arg) && !arg.length){
        return { arg, is: false }
    }
    if(isObj(arg) && !Object.entries(arg as keyof T).length){
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Dave'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({})) // modified
console.log(isTrue({ name: 'Dave' }))
console.log(isTrue([])) // modified
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

//////////////////////////////////////////////////////////////////

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T ) =>{
    return user
}

console.log(processUser({ id: 1, name: 'John' }))
// console.log(processUser({ name: 'Dave'})) ---> this will give an error as id is mandatory

//////////////////////////////////////////////////////////////////

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

const getUser = <T extends HasID, K extends keyof T>(user: T[], key: K): T[K][] => {
    return user.map(user => user[key])
}

console.log(getUser(usersArray, "email"))

//////////////////////////////////////////////////////////////////

/*
1. What are generics in TypeScript and why are they useful?

Answer:
Generics allow us to write reusable and type-safe code without losing type information. They act like variables for types. For example:

function identity<T>(value: T): T {
  return value
}

const num = identity(10)       // type: number
const str = identity("Hello")  // type: string

*/

/*
2. Write a generic function firstElement that returns the first element of an array.
*/
const firstElement = <T>(arr: T[]): T | undefined => {
    return arr[0]
}

/*
3. How do you restrict generics using constraints?
*/
function getLength<T extends { length: number }>(item: T): number {
  return item.length
}

getLength("hello") // ✅ 5
getLength([1, 2, 3]) // ✅ 3
//getLength(123) // ❌ number does not have length

/*
4. What will be the return type of this function?
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
Ans: The return type is the type of the property value corresponding to the given key.
`const user = { id: 1, name: "Rohit" }

const id = getProperty(user, "id")   // number
const name = getProperty(user, "name") // string`
*/

/**
 * 5. Create a generic mergeObjects function that merges two objects and infers the resulting type.
 
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 }
}

const merged = mergeObjects({ name: "Rohit" }, { age: 30 })
// type: { name: string } & { age: number }

 */

/***
 * 6. What does keyof do in generics? Give an example.
 * Ans: keyof creates a union type of all keys of an object.
 * type User = { id: number; name: string }
    type UserKeys = keyof User  // "id" | "name"
In generics, it ensures only valid keys can be used
 */

/**
 * 7. How can we make sure both parameters have same type using typescript
 * 
 */

const sameParams = <T>(a: T, b: T): [T, T] => {
 return [a, b]
}
sameParams(1,2)
sameParams("a", "b")
// sameParams('a', 2) ---> will not work