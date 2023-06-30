var search = document.getElementById("search-input");
var edamamRequestUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=f18a3a55&app_key=8bb356bbf9943a27d2c2f82ce7546805";
var rewind = "return";
// var input = document.getElementById("saveServer");

// localStorage.setItem("server", input.val());

const url = 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1bb9f313ecmsh60acf53117ec160p1c39c0jsn61cd502107e3',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

// fetch request for edamam api
// fetch(edamamRequestUrl)
// .then(function(response){
//    return response.json();
// })
// .then(function (data){
//    // console.log(data);
// });

// fetch request for words api
// fetch(url, options)
// .then(function(response){
//    return response.text();
// })
// .then(function (data){
//    // console.log(data);
// });

function handleSearch(event){
   // event.preventDefault();

   var search = $('input[name="search"]').val();

   console.log(search);

   // $('input[name="search"]').val('');
}

$('#find').on('submit', handleSearch);

$('#something').on('click', function(){
   console.log(search);
});