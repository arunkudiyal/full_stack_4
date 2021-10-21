// JavaScript is a progg lang, embed logic in your website / apps

// ANYTHING & EVERYTHING IN JS ARE OBJECTS

// Display Outputs in JS
// console.log('Hello World...')
// console.error('Error: Something went wrong!')
// console.warn('Warning: This is just a warning!')

// alert('Hey... this is a alert message!')


// DATA TYPES - PDT, Non-Primitive DT (3)

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

// console.log(2 + 2)

// console.log('2' + '2')

// // Internal Typecasting
// const test = 2 + '2'
// console.log(test)
// console.log(typeof test)

// console.log(100 + true)
// console.log(100 + false)

// console.log(100 + true + 'Hello')
// console.log(true + 'Hi');

// // *------* 

// console.log(100/0)

// console.log('a' - 10)

// // PROBLEM STATEMENT - Who came first - EGG or HEN


// // SOLUTION -->

// const values = ['🥚', '🐓']
// console.log(values)
// console.log(values.sort())



// Non - Primitive Data Types - 3 Types


// 1. Array - [ ]


// Array using Array Constructor - new Array(length), new Array(elements seperated by ,)
// const numbers = new Array(5, 10, 15, 20)
// console.log(numbers)

// const names = new Array('Priya', 'Maqsood', 'Sravan', 'Arun', 'Jyothi')
// console.log(names)

// const complex = new Array(101, 'Arun', true, null, undefined)
// console.log(complex)

// // ES6 Way of creating Arrays - [ ]
// const courses = ['Data Science', 'Full Stack Development', 'Digital Marketing', 'AWS', [10, 20, 30, 40], [true, null, undefined]]
// console.log(courses)

// // Access the data from the Array ( arrayName[index] )
// console.log(courses[4][2])
// console.log(courses[5][0])


// 2. Objects - { } - Always come in key-value pair


// const user = {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     age: 23,
//     // You can include Arrays inside the Objects
//     hobbies: ['Magic', 'Getting in trouble', 'Wandering'],
//     // You can also include Objects within Objects
//     address: {
//         street: '4th Avenue',
//         city: 'London',
//         country: 'United Kingdom'
//     }
// }
// console.log(user)

// // Access the Objects ( . )
// console.log(`The country for ${user.firstName} ${user.lastName} is ${user.address.country}`)

// console.log(`The fav hobby of ${user.firstName} ${user.lastName} is ${user.hobbies[0]}`);



// 3. Array of Objects - [ {}, {}, {} ]


// const employees = [
//     {
//         emp_id: 101,
//         designation: 'SDE',
//         company: 'Microsoft',
//         yearsOfExp: 3,
//         skills: ['C', 'C++', 'Java'],
//         location: {
//             officeLocation: 'Mumbai',
//             pin: '123456'
//         }
//     },
//     {
//         emp_id: 102,
//         designation: 'Tester',
//         company: 'Apple',
//         yearsOfExp: 2,
//         skills: ['JUnit', 'Kafka'],
//         location: {
//             officeLocation: 'Hyderbad',
//             pin: '223344'
//         }
//     },
//     {
//         emp_id: 103,
//         designation: 'Product Manager',
//         company: 'Google',
//         yearsOfExp: 5,
//         skills: ['JavaScript', 'Python', 'C#'],
//         location: {
//             officeLocation: 'Bangalore',
//             pin: '2233445'
//         }
//     }
// ]

// console.log(employees)

// // ACCESS THE DATA

// console.log(`The ID of all the employees are ${employees[0].emp_id} ${employees[1].emp_id} ${employees[2].emp_id}`);

// console.log(`The office location of all the employees are ${employees[0].location.officeLocation}, ${employees[1].location.officeLocation}, ${employees[2].location.officeLocation}`);

// console.log(`One of the skills of all the employees are ${employees[0].skills[0]}, ${employees[1].skills[0]}, ${employees[2].skills[0]}`)


// CONDITIONAL STATEMENTS - if, else, else if

// const age = 21

// if(age < 18) {
//     console.log('Sorry... you are NOT eligible to Vote!')
// } else {
//     console.log('Congratulations...! You CAN vote')
// }

// SHORT-HAND of conditionals
// condition ? true : false
// age < 18 ? console.log('Sorry... you are NOT eligible to Vote!') : console.log('Congratulations...! You CAN vote')

// year  --> 1950-1980 Gen - 1 | 1981 - 1990 Gen - 2 | 1991 - 2000 Gen - 3 | 2001 - present Gen - 4
// const year = 2021

// if(year >= 1950 && year <= 1980) {
//     console.log('Gen - I')
// } else if(year >= 1981 && year <= 1990) {
//     console.log('Gen - II')
// } else if(year >= 1991 && year <= 2000) {
//     console.log('Gen - III')
// } else {
//     console.log('Gen - IV')
// }


// JSON - JavaScript Object Notation
// console.log(employees)

// // convert AOO to JSON - stringify()
// const jsonData = JSON.stringify(employees)
// console.log(jsonData);

// // convert JSON data into AOO - parse()
// console.log(JSON.parse(jsonData))



// LOOPS - Basic Loops(for, while) | Higher Order Array Methods

// for(;;)

// for(;;) {
//     console.log('Hello...')
// }

// for(initionalization; condition; inc/dec)
// for(let i=1; i <= 5; i+=1) {
//     console.log('Hello....')
// }

// // Print the table of 2
// for(let i=2; i <= 20; i+=2) {
//     console.log(`2 x ${i/2} = ${i}`)
// }

// // while

// // initialisation - outside
// let i = 1
// // condition in the while
// while(i <= 5) {
//     console.log(i)
//     // inc/dec - inside the while loop
//     i+=1
// }

// // Print the table of 5 using while()
// let num = 5
// while(num <= 50) {
//     console.log(`5 x ${num/5} = ${num}`);
//     num+=5
// }


// Array of Objects
// const todos = [
//     {
//         id: 1,
//         task: 'Meeting with the team',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         task: 'Take out the Trash',
//         isCompleted: false
//     },
//     {
//         id: 3,
//         task: 'take my dog out for a walk',
//         isCompleted: true
//     },
//     {
//         id: 4,
//         task: 'Go out for shopping',
//         isCompleted: false
//     }
// ]

// // for(let i=0; i < todos.length; i+=1) {
// //     if(todos[i].isCompleted == true) {
// //         console.log(todos[i].task)
// //     }
// // }

// // using higher order array methods - for-of
// // for(let iteratingValue of arrayName)
// for(let todo of todos) {
//     todo.isCompleted == false ? console.log(todo.task) : ''
// }