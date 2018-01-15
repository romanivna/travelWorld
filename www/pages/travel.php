<html lang="ru-RU">
	<head>
		<title>Путешествия - категории</title>
		<?php include 'templates/style.php';?>
	</head>
	<body>
	<?php include 'templates/header.php';?>
			
<div id="breadcrumps">
	<a href="../index.php">Главная</a>
	<img src="../img/arrow.png"/>
	<a href="travel.php" style="z-index:26">Категории</a>
</div>

	
<div id='content'>

	<div id="left-content">
<section id="asia">

		<div class="title_main">
			<a href="categories/asia.php">АЗИЯ: Путешествия по странам Азии</a>
		</div>
			<hr>
		
</section>
<section id="europe">
		<div class="title_main">
			<a href="categories/europe.php">ЕВРОПА: Путешествия по странам Европы</a>
		</div>
			<hr>
		
</section>
<section id="north_america">
		<div class="title_main">
			<a href="categories/north_america.php">США И КАРИБЫ: Путешествия по странам Северной Америки</a>
		</div>
		<hr>
		
</section>
<section id="south_america">
		<div class="title_main">
			<a href="categories/south_america.php">ЮЖНАЯ АМЕРИКА: Путешествие по странам Южной Америки</a>
		</div>
			<hr>
		
</section>
<section id="ussr">
		<div class="title_main">
			<a href="categories/ussr.php">РОССИЯ и СНГ: Путешествия по странам бывшего СССР</a>
		</div>
			<hr>
		
</section>

<section id="africa">
		<div class="title_main">
			<a href="categories/africa.php">АФРИКА: Путешествия по странам Африки</a>
		</div>
			<hr>
		
</section>
<section id="australia">
		<div class="title_main">
			<a href="categories/australia.php">Австралия, Новая Зеландия и ОКЕАНИЯ</a>
		</div>
			<hr>
		
</section>
<section id="east">
		<div class="title_main">
			<a href="categories/east.php">БЛИЖНИЙ ВОСТОК</a>
		</div>
			<hr>
		
</section>

<section id="gallery">
	<div class="title_main">
				<a href="gallery.php">Галлерея фото</a>
	</div>
			<hr>
			
	<div>
		<img src="../img/gallery/австралия-мин.jpg" alt="галлерея фото"/>
		<img src="../img/gallery/индия-мин.jpg" alt="галлерея фото"/>
		<img src="../img/gallery/шотландия-мин.jpg" alt="галлерея фото"/>
		<img src="../img/gallery/америка-мин.jpg" alt="галлерея фото"/>
	</div>
</section>

<div id="menu_details">
<p>Поиск по категориям:</p>
	<ul id="details">
		<li><a href="#">Азия</a></li>
		<li><a href="#">Европа</a></li>
		<li><a href="#">Северная Америка</a></li>
		<li><a href="#">Южная Америка</a></li>
		<li><a href="#">Африка</a></li>
		<li><a href="#">Австралия и Океания</a></li>
		<li><a href="#">Ближний Восток</a></li>
		<li><a href="#">Страны СССР</a></li>
	</ul>
	<hr>
	<p>Показать только все: </p>
	<input type="checkbox" name="filter-type" class="filter-type vid" value="video" autocomplete="off"/> видео 
	<input type="checkbox" name="filter-type" class="filter-type phot" value="photo" autocomplete="off" /> фото
	<br>
	<input type="radio" name="filter-category" class="filter-category" value="filter" autocomplete="off" /> только в этой категории
	<hr>
	
</div>


</div>

<?php include 'templates/footer.php';?>
<?php include 'templates/script.php';?>
<script src="../js/print.js"></script>
<script src="../js/travel.js"></script>
<script src="../js/lightbox.js"></script>
<script src="../js/country.js"></script>
	</body>
	</html>