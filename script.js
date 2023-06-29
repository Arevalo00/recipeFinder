
var search = document.getElementById("search-input")
var requestUrl = ""
var rewind = "return"
var input = document.getElementById("saveServer");


localStorage.setItem("server", input.val());


function getResults (){
   console.log ("search-input")
}



//adds event listener for API fetch request
function getResults(){
 search.addEventListner("click",function() {
    if (search ==="") {
        fetch(requestUrl)
        .then(function(response){
           return response.json();
            })
           .then(function (data){
               console.log(data);
           
       });

   }
});
}

var requestUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=f18a3a55&app_key=8bb356bbf9943a27d2c2f82ce7546805"
fetch(requestUrl)
.then(function(response){
   return response.json();
})
.then(function (data){
   console.log(data);
});

//adds return to index.html for find

   find.addEventListner('click', gohome()) {
function gohome(){

}
   
   }
   
   
   
   
    const url = 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1bb9f313ecmsh60acf53117ec160p1c39c0jsn61cd502107e3',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

// try {
// 	const response =  fetch(url, options);
// 	const result =  response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
fetch(url, options)
.then(function(response){
   return response.text();
})
.then(function (data){
   console.log(data);

})