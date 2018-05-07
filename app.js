//assign variables to use as search keywords and the optional years
//develop queryURL with spaces for these variables
//ajax call and check to see if the response is good
//click handler on the submit button
//display correct reponse on screen


function buildURL(){

    var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";

    //build an object to hold all of the parameters
    var parameters = {'api-key': "68e092b4fbfc482fbff2f874be37183a"};

    parameters.q = $("#search-term").val().trim();

    var startYear = $("#start-year").val().trim();

    var endYear = $("#end-year").val().trim();

    //if a start or end year is provided, include it in the parameters object

    if(parseInt(startYear)){
        parameters.begin_date = startYear + "0101";  
    }

    if(parseInt(endYear)){
        parameters.end_date = endYear + "0101";
    }

    console.log(url + $.param(parameters));
    return url + $.param(parameters);


} //buildURL() ending


$(".searchBtn").on("click", function(event){
    event.preventDefault();
    $("#articleRender").empty();
    var queryUrl = buildURL();
    

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);

        var count = $("#articlesReturned").val();

        for(var i = 0; i < count; i++){
            var newArticle = $("<h3>" 
                + response.response.docs[i].headline.main 
                + "</h3>" 
                + "<h5>"
                + response.response.docs[i].snippet 
                + "</h5>"
                + "<p>"
                + response.response.docs[i].web_url 
                + "</p>"
            );

            $("#articleRender").append(newArticle);
        }
        
    })

})
