document.getElementsByTagName('Body')[0].addEventListener('keypress', function(){
	document.getElementById('keys').innerText = String.fromCharCode(event.keyCode);
});