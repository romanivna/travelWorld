
		<?php include 'regist.php';?>
	
	<!DOCTYPE html>
<html lang="ru-RU">
	<head>
		<title>ПТШ: Профиль</title>
		<?php include 'templates/style.php';?>
	</head>
	<body>
	<?php include 'templates/header.php';?>
	<div id="content" class="profile">
	<div class="user_photo">
		<img src="" alt="фото профиля"/>
	</div>
	<div class="user_info">

	<form enctype="multipart/form-data" method="post" id="user_prof_form">
		<p><input type="file" id="photo" multiple accept="image/*,image/jpeg"></p>
		<p><strong>Логин: </strong> <input name="pro" id="profile_login" class="edit_it"/></p>
		<p><strong>Имя: </strong> <input id="profile_name" class="edit_it"/></p>
		<p><strong>E-mail: </strong> <input id="profile_email" class="edit_it"/></p>
		<p><strong>Страна: </strong> <input id="user_country" class="edit_it"/></p>
		<p><strong>Интересы: </strong> <input id="hobby" class="edit_it"/></p>
		<p><strong>Посещенные страны: </strong> <textarea id="profile_travel" class="edit_it"></textarea></p>
		<p><a class="save button">Сохранить изменения</a></p>
		<p><a class="edit button">Редактировать</a></p>
	</form> 
	</div>
	</div>
	<?php include 'templates/footer.php';?>

		<?php include 'templates/script.php';?>
<script src="../js/profile.js"></script>
	</body>
	</html>