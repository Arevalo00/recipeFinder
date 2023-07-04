var searchInput = document.getElementById("search").value;
var edamamRequestUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=f18a3a55&app_key=8bb356bbf9943a27d2c2f82ce7546805";
var rewind = "return";
document.getElementById("search-btn").addEventListener("click", function() {

var input = document.getElementById("input")


// localStorage.setItem("server", input.val());

// const url = 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1bb9f313ecmsh60acf53117ec160p1c39c0jsn61cd502107e3',
// 		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
// 	}
// };

// fetch request for edamam api

fetch(edamamRequestUrl)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log("API Response:", data); // Display the raw response for debugging purposes

  var resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = "";

  if (data.hits && data.hits.length > 0) {
    data.hits.forEach(function(hit) {
      var recipeElement = document.createElement("div");
      recipeElement.classList.add("recipe");

      var labelElement = document.createElement("h3");
      labelElement.textContent = hit.recipe.label;

      var urlElement = document.createElement("a");
      urlElement.href = hit.recipe.url;
      urlElement.textContent = "View Recipe";

      var imageElement = document.createElement("img");
      imageElement.src = hit.recipe.image;

      recipeElement.appendChild(labelElement);
      recipeElement.appendChild(urlElement);
      recipeElement.appendChild(imageElement);
      resultsContainer.appendChild(recipeElement);
    });
  } else {
    resultsContainer.textContent = "No recipes found.";
  }
})
.catch(function(error) {
  console.error("Error:", error);
});
});


// fetch request for words api
// function droplist() {

 
// 	fetch(url, options)
// .then(function(response){
//    return response.text();
// })
// .then(function (data){
//    // console.log(data);
// });

// }

// call for words api

// if (input !== "hungry")
// //input.addEventListner ("inputevent", droplist()) ;

// $(function(){
//    function handleSearch(event){
//       // event.preventDefault();
   
//       var search = $('#input').val();
//       location = './results.html'
   
//       console.log(search);
   
//       // $('input[name="search"]').val('');
//    }

//    $('#find').on('submit', handleSearch);
//    $('#something').on('click', function(){
//       console.log(location.search);
//       console.log(search)
//    });

// });

