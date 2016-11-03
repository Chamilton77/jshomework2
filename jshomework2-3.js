document.getElementsByTagName('Body')[0].addEventListener('keypress', function(){
	document.getElementById('keys').innerText = String.fromCharCode(event.keyCode);
})
//This takes the body and adds an event listener to it that takes in key presses
// and puts them through Charcode to type out the character on the screen.