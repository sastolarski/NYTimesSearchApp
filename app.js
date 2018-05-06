//assign variables to use as search keywords and the optional years
//develop queryURL with spaces for these variables
//ajax call and check to see if the response is good
//click handler on the submit button
//display correct reponse on screen

var searchTerm = $("#searchTerm").val();

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    url += '?' + $.param({
        'api-key': "68e092b4fbfc482fbff2f874be37183a"
    });
    
$.ajax({
  url: url,
  method: 'GET',
}).then(function(response){
    console.log(response);
})