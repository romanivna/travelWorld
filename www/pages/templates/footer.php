	<div class="form">
	
	<form id="form" accept-charset="utf-8" method="get">
	<a id="close_form"> <img class='icons' src="../img/icons/close.png" alt="Закрыть"/> </a>
		<h1>Форма для обращения к разработчикам сайта</h1>
		<label for="user_name">Имя:<span style="display:inline" class="star">*</span></label>
		<input  type="text" id="user_name" placeholder="Введите Ваше имя" autocomplete="off" required>
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
		<span class="copy">&copy; Т. Марченко, 2017</span>
		<span id="share_desk">
				<a onclick="Share.twitter('URL','TITLE')"> <img class='icons' src="../img/icons/tw.png" alt="Поделиться в Твиттер"/></a>
				<a onclick="Share.facebook('URL')"><img class='icons' src="../img/icons/fb.png" alt="Поделиться в Фейсбук"/></a>
				<a onclick="Share.google('URL')"><img class='icons' src="../img/icons/google.png" alt="Поделиться в Гугл плюс"/></a>
				<a onclick="Share.linkedin('URL')"><img class='icons' src="../img/icons/link.png" alt="Поделиться в Линкд-Ин"/></a>
			</span>
		<span class="form_back" ><a href="#footer" id="form_a">Есть вопросы? Заполните форму обратной связи!</a></span>
	</div>