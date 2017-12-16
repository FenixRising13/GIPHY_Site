// An array storing pre-determined horror icons.
var horrorIcon = ["Jason", "Chucky", "Freddy Krueger"];
var newButton;

// Function for rendering buttons *Whoa*
function renderButtons() {

}


// AJAX Call for populating the page
var QueryURL = "https://api.giphy.com/v1/gifs/trending?limit=20&api_key=YVYenRV6DNvcFzei71GxTtitudGD05R5";


$.ajax({
    url: QueryURL,
    method: 'GET'
}).done(function (response) {
    console.log(response);
});