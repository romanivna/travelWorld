				/*проверка поля Логин - только латиница*/
document.getElementById('login').addEventListener("keypress",checkValue);
  function checkValue(evt) {
    var charCode = evt.charCode;
	console.log(charCode)
    if (charCode != 0) {
		var a = charCode > 0 && charCode < 65;
		var b = charCode > 90 && charCode < 97;
		var c = charCode < 97 && charCode >122;
		if (a || b || c) {
        evt.preventDefault();
      }
    }
  }


					/*проверка совпадений в пользователях*/
var users = [];
window.onload = function () {
			
	    $.ajax({
	    	accepts:'application/json; charset=utf-8', 
	    	type: 'GET',
	    	url: 'users2.json',
	    	dataType:'json',
	    	success: function (json){
				users = json.users
			},
			error: function (){
				console.log('error json')
			}
		})
}
document.getElementById('sign_in').addEventListener('click', sign)
function sign() {
	var login = $('#login').val();
	var pass = $('#password').val();
	for (let i=0; i<users.length; i++){
		if (login == users[i].login){
			console.log('login ok');
			document.location ='travel.php'
			alert('Вход выполнен успешно')
				if (pass == users[i].password){	
				break; 
				} else {alert('Неверный пароль!')}
		} else if (login == users[i].user_email) {
			console.log('email ok');
			alert('Вход выполнен успешно')
			document.location ='travel.php'
				if (pass == users[i].password){	
				break; 
				} else {}
		} else if(i=(users.length-1)){
			console.log(i)
			alert('Неверный логин и/или пароль!')
			console.log('login false')
		}
	}
	
}