
				/*используют все страницы*/
				
document.getElementById("menu_button").addEventListener('click',menu_show); 
	function menu_show(){
				$('#mobile_menu').animate({left:'0'},1000); 
				$('#menu').animate({left:'0'},1000);
				$('#close').animate({left:'85%'},1000);
				$('#share').animate({left:'0'},1000);
				document.body.style.overflow = 'hidden';
				
};

$("#close").click(function (){
		
				$('#mobile_menu').animate({left:'-100%'},1000); 
				$('#menu').animate({left:'-100%'},1000);
				$('#close').animate({left:'-100%'},1000);
				$('#share').animate({left:'-100%'},1000)
				document.body.style.overflow = 'auto';
					
});

$("#close_form").click(function (){
				$('#form').css({"display" : "none"})
				
});

$("#form_a").click(function (){
				$('#form').css({"display" : "block"})
});


Share = {
		facebook: function(purl) {
			url  = 'http://www.facebook.com/sharer.php?s=100';
			url += '&p[url]='       + encodeURIComponent(purl);
			Share.popup(url);
		},
		twitter: function(purl, ptitle) {
			url  = 'http://twitter.com/share?';
			url += 'text='      + encodeURIComponent(ptitle);
			url += '&url='      + encodeURIComponent(purl);
			url += '&counturl=' + encodeURIComponent(purl);
			Share.popup(url);
		},
		linkedin: function(purl) {
			url  = 'https://www.linkedin.com/cws/share?';
			url += 'url='          + encodeURIComponent(purl);
			Share.popup(url)
		},
		google: function(purl) {
			url  = 'https://plus.google.com/share?';
			url += 'url='          + encodeURIComponent(purl);
			Share.popup(url)
		},

		popup: function(url) {
			window.open(url,'','toolbar=0,status=0,width=626,height=436');
		}
	};

					/*прокрутка вверх-вниз*/
$(document).ready(function(){
	$("#nav a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 500);
	});
});


					/*прелоадер*/
$(window).on('load', function () {
    var $preloader = $('<div class="peeek-loading"></div>').prependTo('body').html('<ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>');
     $preloader.fadeOut();
    $preloader.delay(2000).fadeOut('slow');
});

	
					
/*проверка поля номер (форма обратной связи) - только латиница*/
  document.getElementById('user_phone').addEventListener("keypress",checkValue);
  function checkValue(evt) {
    var charCode = evt.charCode;
	
    if (charCode != 0) {
		var a = charCode > 45 && charCode < 58; 
	  if(!a){
		  evt.preventDefault()
	  }
    }
  }
			