				/*размер фото*/
$('.user_photo img').height($('.user_photo img').width());

				/*личная информация*/
window.onload = function () {
			
	    $.ajax({
	    	accepts:'application/json; charset=utf-8', 
	    	type: 'GET',
	    	url: 'users2.json',
	    	dataType:'json',
	    	success: function (json){
					var us = json.users.length-1;
					$('#profile_login').val(json.users[us].login);
					$('#profile_name').val(json.users[us].user_name);
					$('#profile_email').val(json.users[us].user_email);
					$('#user_country').val(json.users[us].user_country);
					$('#hobby').val(json.users[us].user_interest);
				
			},
			error: function (){console.log('error json')}
		})
}

$('.edit').click(edit);

function edit() {
	$('.edit').css("display", "none");
	$('.save').css("display", "block");
	$('#photo').css("display", "block");
	$('input').removeAttr("disabled");
	$('textarea').removeAttr("disabled");
	$('#save').removeAttr("disabled");
}


$('.save').click(save);
$('input[type=file]').change(function () {
		img = document.getElementById("photo").files[0].name;
		console.log(img)
		$('.user_photo img').attr("src",'../img/gallery/' + img);
	});
function save() {
	$('.edit').css("display", "block");
	$('.save').css("display", "none");
	$('#photo').css("display", "none");
	$('input').attr("disabled", "disabled");
	$('textarea').attr("disabled", "disabled");
	$('#save').removeAttr("disabled");
	$('.user_photo img').attr("src",$('#photo').val());
	
}


$('input').attr("disabled", "disabled");
$('textarea').attr("disabled", "disabled");
$('#save').removeAttr("disabled");