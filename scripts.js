const app = document.getElementById('root')

const logo = document.createElement('img')

logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

// create request varabile and assign XMLHttpRequest object to it
var request = new XMLHttpRequest()

// open a new connectiong, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
// begin accessing JSON data below
var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
    // log each movie title

    // this creates a div with a card
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    
    // creates an h1 element for title
    const h1 = document.createElement('h1')
    h1.textContent = movie.title

    // creates a paragraph for movie description 
    const p = document.createElement('p')
    movie.description = movie.description.substring(0, 300)
    p.textContent = '${movie.description}...'


    // append cards to container
    container.appendChild(card)


    card.appendChild(h1)
    card.appendChild(p)

})

} else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = 'Gah, its not working!'
    app.appendChild(errorMessage)
}

// send request
request.send()