// buttons will need to show on html
// input field should add a new button
// When button clicked it should show the detail
window.onload=function(){


var gif = {

	topics: ["Ballet", "Modern Dance", "Belly Dance", "Swing", "Tango", "Salsa", "Tap Dance", "Break Dance" ],

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

		// grab 10 gif
		// button drives the function
		// when certain topic is pressed call certain api gif
		// connect to API

	}
	



	// addlistener to button
		// shows topic gif





} //end of object

gif.generate();
// when I clikc on a button that has the class dancing buttons it will run my function
$(document).on( "click",".dancingButtons", function() {
// console.log($(this).attr("class"));
gif.callAPI($(this).text());

	});

// this.innerHTML for javescript





























} // end of window onload
