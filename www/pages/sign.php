<!DOCTYPE html>
<html lang="ru-RU">
	<head>
		<title>ПТШ: Войти</title>
		<?php include 'templates/style.php';?>
	</head>
	<body>
		<?php include 'templates/header.php';?>
	<div id="content">
	<div class="sign">
	
	<form id="sign" accept-charset="utf-8" method="get">

		<h1>Войти</h1>
		<label for="login">Емейл или логин:</label>
		<input  type="text" id="login" placeholder="login" autocomplete="off" required>
		<label for="password">Пароль:</label>
		<input type="password" id="password" autocomplete="off" required>
		
		<input type="submit" id="sign_in" value="Войти" class="button">
		<p>Еще не зарегистрированы? <a href="registration.php">Регистрация</a></p>
	</form>
	</div>
	
	
	
	
	<?php include 'templates/footer.php';?>
	</div>
		<?php include 'templates/script.php';?>
<script src="../js/sign.js"></script>
<script src="../js/login_validate.js"></script>
	</body>
	</html>