
					/*проверка поля Логин - только латиница*/
document.getElementById('login').addEventListener("keypress",checkValue);
  function checkValue(evt) {
    var charCode = evt.charCode;
	
    if (charCode != 0) {
		var d = charCode > 64 && charCode < 91; 
		var e = charCode > 96 && charCode <123;
		var a = d || e;
	  if(!a){
		  evt.preventDefault()
	  }
    }
  }
						
  