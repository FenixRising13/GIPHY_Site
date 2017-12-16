// An array storing pre-determined horror icons.
$(document).ready(function () {

    var horrorIcon = ["Jason", "Chucky", "Freddy Krueger"];
    newButton = "antelope"

    // This is not what I want. This should technically be tied to the buttons generated dynamically, but this
    // was okay for testing.
    $("#submit").on("click", function () {
        // AJAX Call for pulling data from GIPHY
        var queryURL = "https://api.giphy.com/v1/gifs/trending?q=" + newButton + "&limit=20&api_key=YVYenRV6DNvcFzei71GxTtitudGD05R5";

        $.ajax({
            url: queryURL,
            method: 'GET'
            // I hereby promise I won't use the response until I have a response
        }).done(function (response) {

            // Console log the QueryURL to insure it's correct ~thanksJodi
            console.log(queryURL);
            // Console log the response to see the JSON format
            console.log(response);
            // Drill down one level into our response
            var results = response.data;
            // and now we're in an object with multiple parameters
            for (var i = 0; i < results.length; i++) {

                // Creates a div for the image and ratings
                var resultsDiv = $("<div>");

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);

                // Creating and storing the img for HTML
                var resultsImage = $("<img>");

                // Setting the src attribute of the image to a property pulled off the result item
                resultsImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and image tag to the animalDiv
                resultsDiv.append(p);
                resultsDiv.append(resultsImage);

                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $("#dynBtns").prepend(resultsDiv);
            }

        })


    })
    // Function for rendering buttons *Whoa*
    function renderButtons() {
        // Removes existing buttons
        $("#dynButtons").empty();

        for (var i = 0; i < horrorIcon.length; i++) {

            var Icons = horrorIcon[i];
            var Btn = ("<button>");
            $(Btn).addClass("icon");
            $(Btn).attr("data-name", horrorIcon[i]);
            $("#dynBtns").append(Btn);

            console.log(Icons);
        }
    }
    // Calls function renderButtons()
    renderButtons()

})