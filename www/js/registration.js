					/*проверка совпадения паролей*/
var password = "no";
$("#password2").focusout(function (){
	var pass2=document.getElementById("password2").value;
	var pass1=document.getElementById("password").value;
		if(pass1!=pass2){
	alert("Пароли не совпадают!")
		} else password = "ok";
		console.log(password)
})

					/*регистрация пользователя*/
$('#sign_in').click(function () {
	if (password == "no") { 
	alert("Пароли не совпадают!")
	}
})
