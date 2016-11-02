function checkpass(){
	var password = document.getElementById('pwd').value;
	var usrname = document.getElementById('usename').value;

	if(password === "12345678" && hasNumbers(usrname)){
		document.getElementById('popup').innerText = "everything is correct";
	}else{
		document.getElementById('popup').innerText = "There is an error";
	}
}

document.getElementById('subbtn').addEventListener('click', checkpass);



function hasNumbers(string){
	var regex = /\d/g;
	return regex.test(string);
}
