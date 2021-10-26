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


// const listItems = document.getElementsByClassName('list-group-item')

// for(let i=0; i < listItems.length; i++) {
//     console.log(listItems[i].textContent)
// }

// background color of every even valued listItems should be grey
// for(let i=0; i < listItems.length; i++) {
//     if(i % 2 == 0) {
//         listItems[i].style.backgroundColor = 'lightGrey'
//     }
// }