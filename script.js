var search = document.getElementById("search-input");
var edamamRequestUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=f18a3a55&app_key=8bb356bbf9943a27d2c2f82ce7546805";
var rewind = "return";

var input = document.getElementById("input")


// localStorage.setItem("server", input.val());

const url = 'https://wordsapiv1.p.rapidapi.com/words/food/hasTypes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1bb9f313ecmsh60acf53117ec160p1c39c0jsn61cd502107e3',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};


$(function(){
   search = location.search.slice(8, location.search.length);

   // fetch request for words api
   function callWordsApi() {

      fetch(url, options)
      .then(function(response){
         return response.json();
      })
      .then(function (data){
         $('#search').autocomplete({
            source: data.hasTypes,
         });
      });
   }

   callWordsApi();

});