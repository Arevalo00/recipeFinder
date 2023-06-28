var requestUrl = "https://api.edamam.com/api/recipes/v2"
var parameters = {
    app_key: "8bb356bbf9943a27d2c2f82ce7546805",
    app_id:"f18a3a55"
}

fetch(requestUrl)
.then(function(response){
    return response.json();
})
.then(function (data){
    console.log(data);
});