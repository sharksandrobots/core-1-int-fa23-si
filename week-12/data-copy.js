fetch('https://api.thecatapi.com/v1/images/search?limit=10').then(function (response) {
	// The API call was successful!
	return response.json();
})
.then(function (data) {
	// This is the JSON from our response
    appendData(data);

	console.log(data);

})
.catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'Name: ' + data[i].id + ' pic: ' + data[i].url;
        mainContainer.appendChild(div);
    }
}