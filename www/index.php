<!DOCTYPE html>
<html lang="ru-RU">
	<head>
		<meta charset="UTF-8">
		<title>Путешествия</title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/style_d.css">
		<link rel="stylesheet" href="js/revealator/fm.revealator.jquery.css">
		<link rel="stylesheet" href="js/smslider/css/smslider.css">
		<link rel="icon" href="favicon.png" type="image/x-icon">
		<link href="https://fonts.googleapis.com/css?family=Amatic+SC|Lobster|Neucha" rel="stylesheet"> 
		<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"> 
	</head>
	<body>
		<div id="all">
		</div>
		<div id="header">
			<div id="name">
				<img id="menu_button" src="img/icons/burger.png"/>
				<a href="#"><img id="logo" src="img/icons/logo.png"/></a>
				<a href="pages/results.php"><img id="search" src="img/icons/search.png"/></a>
			</div>
		<div id="mobile_menu"></div>
	
			<div id="share">
				<a onclick="Share.twitter('URL','TITLE')"> <img class='icons' src="img/icons/tw.png" alt="Поделиться в Твиттер"/></a>
				<a onclick="Share.facebook('URL')"><img class='icons' src="img/icons/fb.png" alt="Поделиться в Фейсбук"/></a>
				<a onclick="Share.google('URL')"><img class='icons' src="img/icons/google.png" alt="Поделиться в Гугл плюс"/></a>
				<a onclick="Share.linkedin('URL')"><img class='icons' src="img/icons/link.png" alt="Поделиться в Линкд-Ин"/></a>
			</div>
			
	<div id="menu_block">		
			<a href="#" id="close"> <img class='icons' src="img/icons/close.png" alt="Закрыть"/> </a>
			<div id="menu">
						<ul class="menu_it">
							<li><a href="index.php">Главная</a></li>
							<li id="travel_menu">
								<a href="pages/travel.php">Категории</a>
								<ul id="travel_items">
									<li><a href="pages/categories/asia.php">Азия</a></li>
									<li><a href="pages/categories/europe.php">Европа</a></li>
									<li><a href="pages/categories/north_america.php">Северная Америка</a></li>
									<li><a href="pages/categories/south_america.php">Южная Америка</a></li>
									<li><a href="pages/categories/africa.php">Африка</a></li>
									<li><a href="pages/categories/australia.php">Австралия и Океания</a></li>
									<li><a href="pages/categories/east.php">Ближний Восток</a></li>
									<li><a href="pages/categories/ussr.php">Страны СНГ</a></li>
								</ul>
							</li>
							<li id="blog_menu"><a href="pages/blog.php">Блог</a></li>
							<li id="health_menu">
								<a href="#">Полезное</a>
								<ul id="health_items">
									<li><a href="pages/music.php">Музыка в дорогу</a></li>
									<li><a href="pages/books.php">Книги в дорогу</a></li>
									<li><a href="pages/agencies.php">Турагентства</a></li>
									<li><a href="pages/contact.php">Обратная связь</a></li>
								</ul>
							</li>
							<li id="sign_menu">
								<a href="pages/sign.php">Войти</a>
								<ul id="sign_items">
									<li><a href="pages/registration.php">Регистрация</a></li>
								</ul>
							</li>
						</ul>
			</div>
	</div>
	</div>
				
	<div id='content'>
		<div id='sm_slider' >
			<ul>
				<li class="sm_slide"><a href="pages/music.php"><img src="img/index/music.png" alt="Музыка"/></a></li>
				<li class="sm_slide"><a href="pages/travel.php"><img src="img/index/place.png" alt="Места"/></a></li>
				<li class="sm_slide"><a href="pages/blog.php"><img src="img/index/travel.png" alt="Путешествия"/></a>	</li>
			</ul>
		</div>
	
	<div id='about'>
	 <h1>О проекте</h1>
	 <a class="button" href="pages/travel.php">Отправиться в путешествие!</a>
	 <p>Это библиотека контента для путешественников от млада до стара. Вам понравится в любом случае ;) Особенно, если Вы:</p>
	 <div class="reason_left revealator-slideleft revealator-delay2">
	 <img class="reas_img" src="img/index/bag.png" alt="чемодан"/>
	 <span class="reas_span">собираетесь в путешествие</span>
	 </div>
	 
	 <div class="reason_right revealator-slideright revealator-delay2">
	 <img class="reas_img" src="img/index/cash.png" alt="кошелек"/>
	 <span class="reas_span">хотите путешествовать, но пока нет возможности</span>
	 </div>
	 
	 <div class="reason_left revealator-slideleft revealator-delay2">
	 <img class="reas_img" src="img/index/new.png" alt="парень с биноклем"/>
	 <span class="reas_span">уже побывали по миру, но хотите узнать, изменилось ли что-то за это время</span>
	 </div>
	 
	 <div class="reason_right revealator-slideright revealator-delay2">
	 <img class="reas_img" src="img/index/nirvana.png" alt="нирвана"/>
	 <span class="reas_span">просто отдыхаете от рутины</span>
	 </div>
	 
	 <a class="button" href="pages/travel.php">Поехали!</a>
	 
	</div>
	
	
	
	
	
	</div>
	
	
	<div class="form">
	
	<form id="form" accept-charset="utf-8" method="get">
	<a id="close_form"> <img class='icons' src="img/icons/close.png" alt="Закрыть"/> </a>
		<h1>Форма для обращения к разработчикам сайта</h1>
		<label for="user_name">Имя:<span style="display:inline" class="star">*</span></label>
		<input id="user_name" placeholder="Введите Ваше имя" autocomplete="off" required>
		<label for="user_email">E-mail:<span style="display:inline" class="star">*</span></label>
		<input type="email" id="user_email" placeholder="example@gmail.com" autocomplete="off" required>
		<label for="user_phone">Номер телефона:</label>
		<input id="user_phone" placeholder="0668887766 "autocomplete="off" >
		<label for="user_comment">Текст обращения:<span style="display:inline" class="star">*</span></label>
		<textarea id="user_comment" placeholder="Введите текст Вашего обращения" autocomplete="off" required></textarea>
		<input type="submit" id="user_submit" value="Отправить заявку" class="button">
		<p>Поля, отмеченные звездочкой, обязательны для заполнения!</p>
	</form>
	</div>
	
	<div id="nav">
		<a href="#name" class="up"> < </a>
		<a href="#footer" class="down"> > </a> 
	</div>
	
	<div id="footer">
		<span>&copy; Т. Марченко, 2017</span>
		<a href="#footer" id="form_a">Есть вопросы? Заполните форму обратной связи!</a>
	</div>
	
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="js/script.js"></script>
<script src="js/smslider/jquery.smslider.js"></script>
<script src="js/revealator/fm.revealator.jquery.js"></script>
<script src="js/slider.js"></script>
<script src="js/search.js"></script>
	</body>
	</html>