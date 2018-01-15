<!DOCTYPE html>
<html lang="ru-RU">
	<head>
		<title>ПТШ: Регистрация</title>
		<?php include 'templates/style.php';?>
	</head>
	<body>
	<?php include 'templates/header.php';?>
		
	<div class="sign">
	
	<form id="registration" action='user_profile.php' method="post">

		<h1>Зарегистрироваться</h1>
		<fieldset>
		<legend>Основная информация</legend>
		<label for="login">Логин:<span class="star">*</span></label>
			<input type="text" id="login" name="login" placeholder="login" autocomplete="off" required>
			
		<label for="password">Пароль:<span class="star">*</span></label>
			<input type="password" id="password" name="password" autocomplete="off" required>
			
		<label for="password2">Повторите пароль:<span class="star">*</span></label>
			<input type="password" id="password2" autocomplete="off" required>
			
		<label for="user_name">Имя:<span class="star">*</span></label>
			<input  type="text" name="user_name" placeholder="Введите Ваше имя" autocomplete="off" required>
			
		<label for="user_email">E-mail:<span class="star">*</span></label>
			<input type="email" name="user_email" placeholder="example@gmail.com" autocomplete="off" required>
			
		</fieldset>
		
		<p>Поля, отмеченные звездочкой, обязательны для заполнения!</p>
		
		<fieldset>
		<legend>Дополнительная информация</legend>
		<label for='user_country'>Выберите Вашу страну:</label>
		<select name="user_country">
			<option>не выбрано</option>
			<option>Украина</option>
			<option>Россия</option>
			<option>Беларусь</option>
		</select>
		<label for="user_interest">Ваши интересы:</label>
		<textarea id="user_interest" name="user_interest"></textarea>
		</fieldset>
		
		<input type="submit" id="sign_in" value="ЗАРЕГИСТРИРОВАТЬСЯ" class="button">
		
	</form>
	</div>
	
	<?php include 'templates/footer.php';?>
		<?php include 'templates/script.php';?>
<script src="../js/registration.js"></script>
<script src="../js/login_validate.js"></script>
	</body>
	</html>