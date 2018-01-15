	<!DOCTYPE html>
<html lang="ru-RU">
	<head>
		<title>ПТШ: Обратная связь</title>
		<?php include 'templates/style.php';?>
	</head>
	<body>
	<?php include 'templates/header.php';?>
	<div id="content">
	<div class="sign">
	
	<form id="registration" accept-charset="utf-8" method="get">
			<h1>Форма для обращения к разработчикам сайта</h1>
		<label for="user_name">Имя:<span class="star">*</span></label>
		<input id="user_name" placeholder="Введите Ваше имя" autocomplete="off" required>
		<label for="user_email">E-mail:<span class="star">*</span></label>
		<input type="email" id="user_email" placeholder="example@gmail.com" autocomplete="off" required>
		<label for="user_phone">Номер телефона:</label>
		<input id="user_phone" placeholder="0668887766 "autocomplete="off" >
		<label for="user_comment">Текст обращения:<span class="star">*</span></label>
		<textarea id="user_comment" placeholder="Введите текст Вашего обращения" autocomplete="off" required></textarea>
		<input type="submit" id="user_submit" value="Отправить заявку" class="button">
		<p>Поля, отмеченные звездочкой, обязательны для заполнения!</p>
	</form>
	
	
	</div>
	<div class="contact">
	<h1>Для желающих пообщаться лично:</h1>
	<div class="left_contact">
	<p>г. Киев, ул. Глубочицкая 32а</p>
	<p>Время работы:</p>
	<p>ПН - ПТ с 09:00 до 18:00</p>
	<p>Телефоны: (044)937-99-92; (095)318-18-18</p>
	
	</div>
	<div id='map2'>
	
	</div>
	</div>
	</div>
	<div id="footer">
		<span>&copy; Т. Марченко, 2017</span>
	</div>
		<?php include 'templates/script.php';?>
<script src="../js/contact.js"></script>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJmmxI5lXSq1xxeDRU5m75PtpnHtpKAMg">
    </script>
<script src='../js/search.js'></script>
	</body>
	</html>