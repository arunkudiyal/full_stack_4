const xhr = new XMLHttpRequest()

const data = null

const btn = document.querySelector('#serach-btn')
btn.addEventListener('click', () => {
    const serach = document.querySelector('#search').value

    let url = `https://api.themoviedb.org/3/search/movie?api_key=473ce42b7b92f1fcd1bb5f06b4217fdb&query=`

    url = `${url}${serach}`

    // AJAX Request
    xhr.open('GET', url)

    // Set the request headers
    // xhr.setRequestHeader("x-rapidapi-host", "movie-database-imdb-alternative.p.rapidapi.com")

    // xhr.setRequestHeader("x-rapidapi-key", "55aa9f9cbbmsh1c401325784bdd7p18f48ajsnb3d062671273")

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)

            console.log(response)

            let output = ''

            for(let i=0; i < response.results.length; i++) {
                if(response.results[i].title != undefined) {
                    output += `<b><u>${response.results[i].title}</u></b> <br /> <br /> ${response.results[i].overview} <br /> <br /> <hr />`
                }
            }

            const container = document.querySelector('#movie-details')

            container.innerHTML = output
        }
    }

    xhr.send(data)
})