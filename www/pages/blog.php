<!DOCTYPE html>
<html lang="ru-RU">
	<head>
		<title>ПТШ: Блог</title>
		<?php include 'templates/style.php';?>
	</head>
	<body>

	<?php include 'templates/header.php';?>
	<div id="breadcrumps">
	<a href="../index.php">Главная</a>
	<img src="../img/arrow.png"/>
	<a href="blog.php" style="z-index:26">Блог</a>
</div>
<span id='sort'>
<a class='new_article'>Добавить запись </a>
<select id='date-sort'>
	<option value='new-old' selected>Сначала новые</option>
	<option value='old-new' >Сначала старые</option>
</select>
</span>

<div id="content">
<?php include 'templates/add.php';?>
	<div id='article_content'>
	</div>
	
	</div>
	

	<?php include 'templates/footer.php';?>

		<?php include 'templates/script.php';?>
<script src="../js/rate.js"></script>
<script src="../js/print.js"></script>
<script src="../js/blog.js"></script>
<script src="../js/smslider/jquery.smslider.js"></script>
<script src="../js/pagination.js"></script>
<script src="../js/add.js"></script>
<script src="../js/country.js"></script>
<script src="../js/lightbox.js"></script>
	</body>
	</html>