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

    console.log(url)
    console.log(url + $.param(parameters));



} //buildURL() ending

buildURL();

$(".searchBtn").on("click", function(event){
    event.preventDefault();
    console.log("hello")

    

    $.ajax({
        url: buildURL(),
        method: "GET"
    }).then(function(response){
        console.log(response.docs[0].headline);

    })

})
