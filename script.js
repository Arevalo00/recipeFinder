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



