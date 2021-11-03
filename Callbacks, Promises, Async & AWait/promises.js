// Promises solution for the problem statemnet

const posts = [
    {title: 'Post One', body: 'Post One Body'},
    {title: 'Post Two', body: 'Post Two Body'},
    {title: 'Post Three', body: 'Post Three Body'}
]

// Functions

// getPosts - 3 secs
function getPosts() {
    setTimeout( () => {
        let output = ''
        for(let i=0; i < posts.length; i++) {
            output += `<li>${posts[i].body}</li>`
            document.querySelector('#container').innerHTML = output
        }
        console.log('getPosts() FINISHED!!')
    }, 3000 )
}

// createPost() - 4 secs
function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post)

            const error = true

            if(error) {
                reject('Error: Something went wrong!!')
            } else {
                resolve()
            }
        }, 4000 )
    })
}

// CALL THE FUNCTIONS
// Hamdle a promise -> .then() & .catch()
createPost({title: 'Post Four', body: 'Post Four Body'})
    .then(getPosts)
    .catch(err => console.log(err))