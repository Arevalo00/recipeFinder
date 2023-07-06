var searchInput = document.getElementById("search").value;
var edamamRequestUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=f18a3a55&app_key=8bb356bbf9943a27d2c2f82ce7546805";
var rewind = "return";
<<<<<<< HEAD
document.getElementById("search-btn").addEventListener("click", function() {

var input = document.getElementById("input")


// localStorage.setItem("server", input.val());



=======
>>>>>>> 54c528a88feab7f3963e9526c83c8b9d01ff1f7b

$(function(){
   search = location.search.slice(8, location.search.length);
   
   const wordsRequestUrl = 'https://wordsapiv1.p.rapidapi.com/words/food/hasTypes';
   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': '1bb9f313ecmsh60acf53117ec160p1c39c0jsn61cd502107e3',
         'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
   };

   // fetch request for words api
   function callWordsApi() {

      fetch(wordsRequestUrl, options)
      .then(function(response){
         return response.json();
      })
      .then(function (data){
         $('#search').autocomplete({
            source: data.hasTypes,
         });
      });
   }
<<<<<<< HEAD
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
   callWordsApi();
=======

   function callEdamamApi(search){
      var edamamRequestUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=' + search + '&app_id=f18a3a55&app_key=8bb356bbf9943a27d2c2f82ce7546805';
>>>>>>> 54c528a88feab7f3963e9526c83c8b9d01ff1f7b

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
   }

   callWordsApi();
   $('search-btn').on('click', callEdamamApi(search));

});