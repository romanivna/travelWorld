
	
<!DOCTYPE html>
	<html lang="ru-RU">
	<head>
		<title>ПТШ: Турагентства</title>
		<?php include 'templates/style.php';?>
	</head>
	<body>
	<?php include 'templates/header.php';?>
	
<div id="breadcrumps">
	<a href="../index.php">Главная</a>
	<img src="../img/arrow.png"/>
	<a href="healthy.php" style="z-index:26">Полезное</a>
	<img src="../img/arrow.png"/>
	<a href="" style="z-index:26">Турагентства</a>
</div>


<div id="content">
<h1>Мы подобрали для Вас лучшие турагентства по всей столице! Спешите отправиться в путешествие! Горящие путевки актуальны в любое время года!</h1>

<div id='map'>

</div>
	<?php include 'templates/footer.php';?>
</div>
		<?php include 'templates/script.php';?>
<script src="../js/agencies.js"></script>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJmmxI5lXSq1xxeDRU5m75PtpnHtpKAMg">
    </script>
	</body>
	</html>