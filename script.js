
var search = document.getElementById("search-input")
var requestUrl = ""
var rewind = "return"
var input = document.getElementById("saveServer");

localStorage.setItem("server", input.val());


function getResults ("search-input"== true){
    console.log ("search-input")
}




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

var requestUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=f18a3a55&app_key=8bb356bbf9943a27d2c2f82ce7546805"
fetch(requestUrl)
.then(function(response){
    return response.json();
})
.then(function (data){
    console.log(data);
});
