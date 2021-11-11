// const xhr = new XMLHttpRequest()

// const data = null

// const url = 'https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1'

// xhr.withCredentials = true

// xhr.open('GET', url)

// // Set the request headers
// xhr.setRequestHeader("x-rapidapi-host", "movie-database-imdb-alternative.p.rapidapi.com")

// xhr.setRequestHeader("x-rapidapi-key", "55aa9f9cbbmsh1c401325784bdd7p18f48ajsnb3d062671273")

// xhr.onreadystatechange = () => {
//     if(xhr.status === 200 && xhr.readyState === 4) {
//         console.log(xhr.responseText)
//     }
// }

// xhr.send(data)


const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1");
xhr.setRequestHeader("x-rapidapi-host", "movie-database-imdb-alternative.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "55aa9f9cbbmsh1c401325784bdd7p18f48ajsnb3d062671273");

xhr.send(data);