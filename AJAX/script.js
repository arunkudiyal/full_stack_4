// AJAX -> Way for integrating an API into JS project

// Step 1 - Make a request to the API (data-source)
// Step 2 - Record the response, and put into the DOM


// STEP - 1 - How to make a request to an API - XMLHttpRequest()

// i. Create an object of XHR
const xhr = new XMLHttpRequest()
const url = 'https://api.github.com/users'

// ii. Open the portal of communation between JS application & API
xhr.open('GET', url)

// iii. Handle the data coming from the server to the client

// onreadystatechange specifies the functionality about what is to be done with the data coming from the server to the client
xhr.onreadystatechange = () => {

    // iv. Check for readystate and status
    if(xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)

        for(let i=0; i < 30; i++) {
            // Put this response from the console to the HTML using DOM
            const image = document.createElement('img')
            image.setAttribute('src', response[i].avatar_url)
            console.log(image)

            const username = document.createElement('h3')
            username.textContent = `LOGIN - ${response[i].login}`

            const rule = document.createElement('hr')

            const container = document.querySelector('#data')
            container.appendChild(image)
            container.appendChild(username)
            container.appendChild(rule)
        }
    } 
}

// v. Send the request
xhr.send()