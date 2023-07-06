var edamamRequestUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=f18a3a55&app_key=8bb356bbf9943a27d2c2f82ce7546805";

$(function(){
   var rootEl = $('#root');
   var search;
   
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
            source: data.hasTypes
         });
      });
   }

   function callEdamamApi(){
      var edamamRequestUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=' + search + '&app_id=f18a3a55&app_key=8bb356bbf9943a27d2c2f82ce7546805';

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

   function loadResultsPage(){
      search = $('#search').val();
      console.log('home ' + search);

      $('#header').remove();
      $('#homePage').remove();
      $('#style').remove();

      var resultsPage = $('<nav class="flex justify-center bg-amber-200 pb-10 pt-10" id="resultsPage"></nav>');
      var form = $('<form class="bg-amber-200 rounded px-3.5" id="find"></form>');
      form.append($('<input class="rounded px-3.5 border-slate-600 object-center border-neutral-600" id="search" type="text" name="search" placeholder="Search">'));
      form.append($('<button class="rounded px-3.5 bg-cyan-500 hover:bg-cyan-600" type="submit">Find</button>'));
      resultsPage.append(form);

      rootEl.append(resultsPage);
      rootEl.append($('<div id="results-container"></div>'));

      callEdamamApi();

      $('#find').on('submit', function(event){
         event.preventDefault();

         search = $('#search').val();
         console.log('results ' + search);

         callEdamamApi();
      });
   }

   // callWordsApi();
   $('#homePageFind').on('submit', function(event){
      event.preventDefault();
      loadResultsPage();
   });
});