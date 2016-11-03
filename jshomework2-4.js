function checkpass(){
	var password = document.getElementById('pwd').value;
	var usrname = document.getElementById('usename').value;

	if(password === "12345678" && hasNumbers(usrname)){
		document.getElementById('popup').innerText = "everything is correct";
	}else{
		document.getElementById('popup').innerText = "There is an error";
	}
}
//this function takes the valuse in the passwork section and username section
//and compares them if the passwork matches and the username has one number in it.
document.getElementById('subbtn').addEventListener('click', checkpass);
//This adds the event to the submit button that when it is clicked it runs the 
//above function.


function hasNumbers(string){
	var regex = /\d/g;
	return regex.test(string);
}
//This is the function that takes a string and checks if there is a number in it 
// using regex.