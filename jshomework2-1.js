document.getElementById('button1').addEventListener('click', function() {
	document.getElementById('words').innerHTML = "I am right!";
});
//This gets the element by ID and then adds an event to it so when the button is clicked the text in the H1 tag is changed.
document.getElementById("button2").addEventListener('click', function(){
	document.getElementById("words").innerHTML = "No I am right!";
});
//This does the same thing but changed the h1 to different text.