// JavaScript is a progg lang, embed logic in your website / apps

// ANYTHING & EVERYTHING IN JS ARE OBJECTS

// Display Outputs in JS
// console.log('Hello World...')
// console.error('Error: Something went wrong!')
// console.warn('Warning: This is just a warning!')

// alert('Hey... this is a alert message!')


// DATA TYPES

// Variable Declaration
// variableName = constantValue

// x = 10
// y = 'Innomatics Research Labs'
// console.log(x)
// console.log(y)

// Data Types - number, string, boolean, null, undefined, symbol

// Reserach Work - symbol data type

// a = 10.9999999
// b = 'Any string value'
// c = true
// variable = undefined
// variable2 = null

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof variable2)       // object - An error from JS 

// console.log(typeof variable)


// ES6 Semantics - var, let and const
// var -> Global Scope
// let -> Local Scope / Block-Level Scope
// const -> Cannot change the value | Reassign the value / You cannot declare until it's not initialised [const varName = constant] | Local Scope

// for(var i = 0; i < 3; i++) {
//     console.log(i)
// }

// console.log(i)

// let name = 'John Doe'
// console.log(name)

// name = 'Some Other Name'
// console.log(name)

// const age = 21
// age = 30     // Cannot change the value

// const age
// age = 20

// var age
// age = 20

// console.log(age)


// STRINGS & STRING METHODS

// const str = 'This is a String'
// const str2 = 'Tiger, Lion, Elephant, Zebra, Deer'

// // Length of the string
// console.log('The length of the string is : ' + str.length)

// // Change the cases of the string
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// // Access char index
// console.log(str.charAt(4))


// // SUB_STRING - substr, substring
// console.log(str.substr(8))      // starting point of the substring
// console.log(str.substring(3, 11))   // start(inc) end(exc)

// // Split --> Returns an Array
// console.log(str.split(' '))
// console.log(str2.split(', '))


// // CONCATINATION IN JS
// console.log('This is the string value value :: ' + str + '  :: END')
// console.log(`This is a string :: ${str2} :: END`)



// FUN STUFF

console.log(2 + 2)

console.log('2' + '2')

// Internal Typecasting
const test = 2 + '2'
console.log(test)
console.log(typeof test)

console.log(100 + true)
console.log(100 + false)

console.log(100 + true + 'Hello')

// *------* 

console.log(100/0)

console.log('a' - 10)

// PROBLEM STATEMENT - Who came first - EGG or HEN


// SOLUTION -->

const values = ['🥚', '🐓']
console.log(values)
console.log(values.sort())