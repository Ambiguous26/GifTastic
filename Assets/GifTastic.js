// buttons will need to show on html
// input field should add a new button
// When button clicked it should show the detail
window.onload=function(){


var gif = {

	topics: ["Ballet", "Modern Dance", "Belly Dance", "Swing", "Tango", "Salsa", "Tap Dance", "Break Dance",],

	addTopic: $("#danceType"),
	submitTopic: $("#addDance"),

	// we are going to loop through the length of the array
	generate: function(){
		// alert("inside generate");
		for (var i = 0; i < gif.topics.length; i++) {
			console.log(gif.topics[i]);
		// creating button elements
		var newButton = $("<button>");
		newButton.attr("class", "dancingButtons");
		// buttons show text of topics in array
		newButton.text(gif.topics[i]);
		// append it to id dancingButtons div
		$("#dancingButtons").append(newButton);


		}

	},




	callAPI : function(topic){
		console.log(topic);
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=UU5huhYahRdBkvW5UC962H3BjrpInWwG&limit=10";
		// console.log(queryURL);
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
				var results = response.data;
				console.log(response);
				console.log(results[1].images.fixed_height_still.url);
				$("#dance").empty();
				
				for (var i = 0; i < response.data.length; i++) {
					var newDiv = $("<div>");
					newDiv.attr("class","gifWrapper");
					// newDiv.append("<img src='" + response.data[i].images.fixed_height.url + "'>");
					var newImg = $("<img>");
					newImg.attr("src", response.data[i].images.fixed_height_still.url);
					newImg.attr("class", "gifImage");
					newImg.attr("stillURL", response.data[i].images.fixed_height_still.url);
					newImg.attr("state", "still");
					newImg.attr("animateURL", response.data[i].images.fixed_height.url);
					newDiv.append(newImg);
					newDiv.append("<p>Rating: " + response.data[i].rating + "</p>");	
					$("#dance").append(newDiv);
					}	
			});
		// grab 10 gif
		// button drives the function
		// when certain topic is pressed call certain api gif
		// connect to API

	},
	toggleState: function(img) {
		if ($(img).attr("state") === "still") {
			console.log("image is still");
			$(img).attr("src", $(img).attr("animateURL"));
			$(img).attr("state", "animate");
		}
		else if ($(img).attr("state") === "animate") {
			console.log("image is animated");
			$(img).attr("src", $(img).attr("stillURL"));
			$(img).attr("state", "still");

		}
		
	}
	// 	clearGifDisplay: Function() {
	// 	generator.$gifSection.empty();
	// },



	// addlistener to button
		// shows topic gif





} //end of object

gif.generate();
// when I clikc on a button that has the class dancing buttons it will run my function
$(document).on( "click",".dancingButtons", function() {
// console.log($(this).attr("class"));
gif.callAPI($(this).text());

	});

$(document).on("click", ".gifImage", function() {
	gif.toggleState(this);
});

// this.innerHTML for javescript


gif.submitTopic.on("click", function(e){
	e.preventDefault();
	gif.topics.push(gif.addTopic.val());
	console.log("ass");
	$("#dancingButtons").empty();
	gif.generate();


})

























} // end of window onload
