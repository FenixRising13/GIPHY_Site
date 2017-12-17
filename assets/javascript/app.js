// An array storing pre-determined horror icons.
$(document).ready(function () {

    var horrorIcon = ["jason", "chucky", "freddy krueger"];


    // When an "icon" button is clicked, it should run the AJAX call for the API
    $(".icon").on("click", function () {

        newButton = ("hamster");
        // AJAX Call for pulling data from GIPHY
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newButton + "&limit=20&api_key=YVYenRV6DNvcFzei71GxTtitudGD05R5";
        // Console log the QueryURL to insure it's correct ~ thanksJodi
        console.log(queryURL);
        // Console log the response to see the JSON format

        $.ajax({
            url: queryURL,
            method: 'GET'
            // I hereby promise I won't use the response until I have a response
        }).done(function (response) {

            // Console log the response to see the JSON format
            console.log(response);
            // Drill down one level into our response
            var results = response.data;
            // and now we're in an object with multiple parameters
            for (var i = 0; i < results.length; i++) {

                // Creates a div for the image and ratings
                var resultsDiv = $("<div>");

                // Creating a paragraph tag with the result's rating
                var p = $("<p>").text("Rating: " + results[i].rating);

                // Creating and storing the img for HTML
                var resultsImage = $("<img>");

                // Setting the src attribute of the image to a property pulled off the result item
                resultsImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and image tag to the resultsDiv
                resultsDiv.append(p);
                resultsDiv.append(resultsImage);

                // Prepends resultsDiv to HTML page in the "#gifs" div
                $(".dynBtns").prepend(resultsDiv);
            }

        })


    })

    // Function for rendering buttons *Whoa*
    function renderButtons() {
        // Removes existing buttons
        $(".dynBtns").empty();
        // For Loop for parsing horrorIcon array.... I've been avoiding these.
        for (var i = 0; i < horrorIcon.length; i++) {

            var Btn = $("<button>");
            Btn.addClass("icon btn btn-primary");
            Btn.attr("data-name", horrorIcon[i]);
            Btn.text(horrorIcon[i]);
            $(".dynBtns").append(Btn);

            console.log(horrorIcon[i]);

        }
    }
    // Calls function renderButtons()
    renderButtons()

    // Submit will log the value enterered into the form and then renderButtons will create a button for it.
    $("#submit").on("click", function (event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        // This line will grab the text from the input box...if I can figure out what text to grab.
        var icon = $("#horror").val().trim();
        console.log(icon);
        // The Icon from the form is added to the array horrorIcons
        horrorIcon.push(icon);
        // calls renderButtons again!!!
        renderButtons();
    });
})