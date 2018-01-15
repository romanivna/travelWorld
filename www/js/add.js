$('.new_article').click(function(){
	$('#new_art').css("display", "block")
})

$('#add').click(add_article);
var obj = {};


function new_art(new_object){
	console.log(new_object)
			$('#article_content').css('display','none');
			$('#new_art').css('display','none');
			var li = " ";
			for (let s=0; s<obj.inputFile.length; s++){
				obj.url = 'new_article' + (s+1);
				li += '<li class="sm_slide"><img style="height:300px" src="../img/gallery/' + obj.inputFile[s].name + '" alt="' + obj.title + '"/></a></li>';
			}
			
			let y = $('<div id="article_plus"></div>').prependTo('#content');
			document.getElementById("article_plus").innerHTML =  obj.full_text;
			$('<div id="sm_slider"></div>').prependTo('#article_plus').html('<ul>' + li + '</ul>');
			slider();
			 document.getElementById("content").classList.add('article_class');
			document.title = obj.title;
			var a = $('#article_plus').height() + 80;
			$('#content').height(a)
			rateit();
			window.history.pushState({"html":obj.url,"pageTitle":obj.title},"", obj.url)
			

		}
		
		function slider(){
		    $('#sm_slider').smSlider({
			    duration       : 500,
			    autoPlay       : true,
			    delay          : 3000,
			    subMenu        : true,
			    subMenuClass   : 'more-item',
			    animationStart : function(toIndex){},
			    animationComplete : function(toIndex){}
	});
		    var height_slider = $('.sm_slide img').height();
		    $('#sm_slider').outerHeight(height_slider);
		    $('.sm_slide').outerHeight(height_slider);
		    $('.sm_slider-inner').outerHeight(height_slider);
		}
	function fuck_you(i){
	console.log('1')
}
		
function add_article(){
	$('#new_art').css('display','none');
	obj.inputFile = document.getElementById('files_art').files;
	obj.title = $('#title').val();
	obj.short_text = $('#short_text').val();
	obj.full_text = $('#full_text').val();
	obj.date = new Date();
	obj.country = $('#country').val();

	$('<article class="text"></article>').prependTo('#article_content').html('<a class="article_img"><img src="../img/gallery/' + obj.inputFile[0].name + '" alt="' + obj.title + '"/></a><a href="#" class="country">' + obj.country + '</a><br><a class="title"  onclick="new_art(obj)" href="#">' + obj.title + '</a><p class="date">' + obj.date.toLocaleString() + '</p><br><div class="rateit"></div><p class="short_text">' + obj.short_text + '</p>');
	
console.log(obj.inputFile[0].name)



}


$("#close_editor").click(function (){
				document.getElementById('new_art').style = 'display:none'
				
});