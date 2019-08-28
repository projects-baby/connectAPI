const app = document.getElementById('root')

const logo = document.createElement('img')

logo.src = 'logo.png'


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
    console.log(movie.title)
})
} else {
    console.log('error')
}

// send request
request.send()