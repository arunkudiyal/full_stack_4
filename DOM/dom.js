// // explore the document
// console.dir(document)

// // Accessing the HTML Element from DOM
// const secondTitle = document.all[13]
// secondTitle.textContent = `New Text Content`

// console.log(document.all[16]);


// IDENTIFIER METHODS - 5 in total -> id, className and tagName

// 1. id
// const btn = document.getElementById('submitBtn')
// console.log(btn)

// const headerTitle = document.getElementById('header-title')
// console.log(headerTitle)

// // Change properties of the accessed elements

// // headerTitle.textContent = 'New Text'
// // headerTitle.innerHTML = `<h3>This is a new HTML code!</h3>`

// // CSS changes using DOM

// // casing in CSS -> border: 1px solid color | border-left: 2px solid color 
// // casing in JS -> camelCasing | borderLeft, borderTop, borderBottom, ...

// headerTitle.style.padding = `2px`
// headerTitle.style.borderBottom = `2px solid black`
// headerTitle.style.fontFamily = `cursive`

// console.log(document.getElementById('text-input'))


// 2. className


// const items = document.getElementsByClassName('list-group-item')
// console.log(items);

// for(let i=0; i < listItems.length; i++) {
//     console.log(listItems[i].textContent)
// }

// // background color of every even valued listItems should be grey
// for(let i=0; i < listItems.length; i++) {
//     if(i % 2 == 0) {
//         listItems[i].style.backgroundColor = 'lightGrey'
//     }
// }


// 3. tagName

// const listItems = document.getElementsByTagName('li')
// for(let i=0; i < listItems.length; i++) {
//     // console.log(listItems[i].textContent)
//     if(i % 2 != 0) {
//         listItems[i].style.backgroundColor = 'lightGrey'
//     }
// }


// 4. querySelector -> id (#) + className (.) + tagName | It only returns the first reference for id, class, tagName

// const submitBtn = document.querySelector('#submitBtn') 
// console.log(submitBtn)

// const listItems = document.querySelector('.list-group-item')
// console.log(listItems);

// const listElements = document.querySelector('li')
// console.log(listElements);


// 4. querySelectorAll -> id (#) + className (.) + tagName | It only returns the first reference for id, class, tagName

// const submitBtn = document.querySelectorAll('#submitBtn') 
// console.log(submitBtn)

// const listItems = document.querySelectorAll('.list-group-item')
// console.log(listItems);
// listItems[2].style.fontFamily = 'cursive'

// const listElements = document.querySelectorAll('li')
// console.log(listElements);



// DOM EVENTS - addEventListner()

// element.addEventListner('eventName', functionName)
// const btn = document.querySelector('#button')
// const textInput = document.querySelector('#text-input')

// WAY - 1
// function onClickHandler() {
//     console.log('Button Clicked!')
// }

// btn.addEventListener('click', onClickHandler)


// WAY - 2
// btn.addEventListener('click', () => { console.log('Button was clicked...') } )

// btn.addEventListener('dblclick', () => {
//     console.log('Double Click Happened!')
// })

// FEW COMMONLY USED EVENTS....

// textInput.addEventListener('focus', () => {
//     console.log('Focused!')
// })

// textInput.addEventListener('blur', () => {
//     console.log('Blurred!')
// })

// textInput.addEventListener('copy', () => {
//     console.log('Copied!!')
// })

// textInput.addEventListener('cut', () => {
//     console.log('Cut!!')
// })

// textInput.addEventListener('paste', () => {
//     console.log('Pasted!!')
// })

// textInput.addEventListener('keyup', () => {
//     console.log('You dropped the key!')
// })

// textInput.addEventListener('keydown', () => {
//     console.log('You pressed the key!')
// })



// EVENT PARAMETER -> A parameter passed to a function which listens to an event

// const submit = document.querySelector('#submitBtn')

// submit.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(submit)
//     submit.setAttribute('class', 'btn btn-dark btn-lg')
//     console.log(e)
// })


// const textBox = document.querySelector('#text-input')

// textBox.addEventListener('keyup', (e) => {
//     console.log(e.target.value)
// })


// FUN ACTIVITY - DOM, Evnets & Event Parameters

// const boxOne = document.getElementById('box-one')

// boxOne.addEventListener('mouseenter', (e) => {
//     boxOne.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`
// })

// boxOne.addEventListener('mouseleave', (e) => {
//     boxOne.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 150)`
// })



// DOM TRAVERSALS - A method to access any element(s) based on their relationship {parent, children, siblings, ...}

// PARENT RELATIONSHIP - parentElement
// const items = document.querySelector('#items')
// items.parentElement.style.backgroundColor = `red`

// // Chaining of Relationships
// items.parentElement.parentElement.style.backgroundColor = `green`


// Children ELements - firstChild , lastChild

// const items = document.querySelector('#items')
// console.log(items.children)

// items.children[1].style.color = 'yellow'

// // firstChild
// console.log(items.firstChild)            // text
// console.log(items.firstElementChild);

// // lastChild
// // console.log(items.lastChild)                // text
// console.log(items.lastElementChild)


// // SIBLINGS - previousSiblings, nextSibling

// // console.log(items.previousSibling)          // text
// console.log(items.previousElementSibling)

// // console.log(items.nextSibling)              // text
// console.log(items.nextElementSibling)