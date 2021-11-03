// Callback solution for the problem statemnet

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
function createPost(post, callback) {
    setTimeout( () => {
        posts.push(post)
        console.log('createPosts() FINISHED!!')

        // At the end, call the callback
        callback()
    }, 4000 )
}

// CALL THE FUNCTIONS
createPost( {title: 'Post Four', body: 'Post Four Body'}, getPosts )