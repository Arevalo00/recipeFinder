// var searchInput = document.getElementById("search").value;
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

   function loadHomePage(){
      $('#resultsPage').remove();
      $('#results-container').remove();

      var header = $('<h1 class="bg-amber-200 flex justify-center pb-20 pt-20 text-gray-500 text-6xl font-semibold" id="header">Recipe Finder</h1>');
      var homePage = $('<div class="bg-amber-200 object-center flex justify-center" id="homePage"></div>');
      var form = $('<form class="bg-amber-200 rounded px-3.5" id="find"></form>');
      form.append($('<input class="rounded px-3.5 border-slate-600 object-center border-neutral-600" id="search" type="text" name="search" placeholder="Search">'));
      form.append($('<button class=" rounded px-3.5 bg-cyan-500 hover:bg-cyan-600" type="submit">Find</button>'));
      homePage.append(form);

      rootEl.append(header);
      rootEl.append(homePage);
      rootEl.append($('<div class="bg-amber-200 pb-20 pt-10" id="style"></div>'));

      $('#homePageFind').on('submit', function(event){
         event.preventDefault();
   
         loadResultsPage();
      });
   }

   function loadResultsPage(){
      search = $('#search').val();
      console.log('home ' + search);

      $('#header').remove();
      $('#homePage').remove();
      $('#style').remove();

      var resultsPage = $('<nav class="flex justify-center bg-amber-200 pb-10 pt-10" id="resultsPage"></nav>');
      var backBtn = $('<a class="rounded px-3.5 bg-cyan-500 hover:bg-cyan-600 mr-6" id="backBtn">Go Back</a>');
      var form = $('<form class="bg-amber-200 rounded px-3.5" id="find"></form>');
      form.append($('<input class="rounded px-3.5 border-slate-600 object-center border-neutral-600" id="search" type="text" name="search" placeholder="Search">'));
      form.append($('<button class="rounded px-3.5 bg-cyan-500 hover:bg-cyan-600" type="submit">Find</button>'));
      resultsPage.append(backBtn);
      resultsPage.append(form);

      rootEl.append(resultsPage);
      rootEl.append($('<div id="results-container"></div>'));

      callEdamamApi();

      $('#backBtn').on('click', loadHomePage);
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