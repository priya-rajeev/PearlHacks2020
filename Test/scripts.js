
// Replace ./data.json with your JSON feed
fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here

        // var data1 = JSON.parse(this.response)

        const app = document.getElementById('root')

        const logo = document.createElement('img')
        logo.src = 'logo.png'

        const container = document.createElement('div')
        container.setAttribute('class', 'container')

        app.appendChild(logo)
        app.appendChild(container)


        data.forEach(movie => {
            // Create a div with a card class
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            // Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1')
            h1.textContent = movie.title

            // Create a p and set the text content to the film's description
            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 300) // Limit to 300 chars
            p.textContent = `${movie.description}...` // End with an ellipses

            // Append the cards to the container element
            container.appendChild(card)

            // Each card will contain an h1 and a p
            card.appendChild(h1)
            card.appendChild(p)
        })
    })
    .catch(err => {
        // Do something for an error here
        throw new SQLException()
    })


// // Create a request variable and assign a new XMLHttpRequest object to it.   //old
// var request = new XMLHttpRequest()
//
// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
//
// request.onload = function() {
//     // Begin accessing JSON data here
// }
//
// // Send request
// request.send()



