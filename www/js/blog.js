								
								/*Блог*/

		var article = [];						
		window.onload = function () {
			
	    $.ajax({
	    	accepts:'application/json; charset=utf-8', 
	    	type: 'GET',
	    	url: 'for_blog.json',
	    	dataType:'json',
	    	success: function (json){
	    		img = [];
	    		country = [];
	    		full_text = [];
				date = [];
				rate = [];
				short_text = [];
				title = [];
				url = [];
				getDate = [];
	    		for (let i=0; i<json.articles.length; i++) {
				article[i] = {};
						img[i] = json.articles[i].img;
						let img_img = img[i];
						country[i] = json.articles[i].country;
						let country_country = country[i];
						title[i] = json.articles[i].title;
						getDate[i] = json.articles[i].date.split('.');
						let newDate = [];
						newDate.push(getDate[i][2],getDate[i][1],getDate[i][0]);
						newDate.join(',');
						date[i] = new Date(newDate);
						rate[i] = json.articles[i].rate;
						short_text[i] = json.articles[i].short_text;
						full_text[i] = json.articles[i].full_text;
						url[i] = json.articles[i].url;
						rate[i] = +rate[i] * 10;
						
					article[i].img = img_img;
					article[i].country = country_country;
					article[i].title = title[i];
					article[i].date = date[i];
					article[i].rate = rate[i];
					article[i].short_text = short_text[i];
					article[i].full_text = full_text[i];
					article[i].url = url[i];
				}
					article = article.sort(function(a, b){
						var dateA=new Date(a.date), dateB=new Date(b.date)
						return dateB-dateA
						})
					
					for (i=0; i<article.length; i++){
					$('<article class="text"></article>').appendTo('#article_content').html('<a class="article_img"><img src="' + article[i].img[0] + '" alt="' + article[i].title + '"/></a><a class="country">' + article[i].country[0] + '</a><br><a class="title"  onclick="change(' + i + ')" href="#">' + article[i].title + '</a><p class="date">' + article[i].date.toLocaleString() + '</p><br><div class="rateit"></div><p class="short_text">' + article[i].short_text + '</p>');
					}
	    		country_find()
					main_text = [];
				for (let j=0; j<json.articles.length+1; j++) {
					$('.text').eq(j).attr('id','take'+(j+1));
					main_text.push(j+1)
					j+=9;
				}
	    		rateit();
				content_size();
			var row_page=[];
			for (let i=0; i<$('article.text').length-1; i++){
				var x = (i+5)*$('article.text').height()+60;
				row_page.push(x);
				i+=4;
			}
			
			endless_pagination('article.text',main_text, row_page);
			//pagination();
	    	},
	    	error: function(){
	    		console.log('error json')
	    	}
	    })
		}
		
								/*открывающиеся статьи*/
		
		function change(i){
			$('#article_content').css('display','none');
			var li = " ";
			for (let s=0; s<article[i].img.length; s++){
				li += '<li class="sm_slide"><img style="height:300px" src="' + article[i].img[s] + " alt=" + article[i].title + '"/></a></li>';
			}
			//let x = $('<div id="sm_slider" ></div>').prependTo('#content').html('<ul>' + li + '</ul>');
			let y = $('<div id="article_plus"></div>').prependTo('#content');
			document.getElementById("article_plus").innerHTML =  article[i].full_text;
			$('<div id="sm_slider"></div>').prependTo('#article_plus').html('<ul>' + li + '</ul>');
			slider();
			 document.getElementById("content").classList.add('article_class');
			document.title = article[i].title;
			var a = $('#article_plus').height() + 80;
			$('#content').height(a)
			
			window.history.pushState({"html":article[i].url,"pageTitle":title},"", article[i].url)

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
		
		
							/*	сортировка по дате */
	$('#date-sort').change(function sorting (){
			$('#article_content').empty();
			console.log('ok')
		if ($(this).val() == 'new-old') {
			article = article.sort(function(a, b){
						var dateA=new Date(a.date), dateB=new Date(b.date)
						return dateB-dateA
						})
					
					for (i=0; i<article.length; i++){
					$('<article class="text"></article>').appendTo('#article_content').html('<a class="article_img"><img src="' + article[i].img[0] + '" alt="' + article[i].title + '"/></a><a href="#" class="country">' + article[i].country[0] + '</a><br><a class="title"  onclick="change(' + i + ')" href="#">' + article[i].title + '</a><p class="date">' + article[i].date.toLocaleString() + '</p><br><div class="rateit"></div><p class="short_text">' + article[i].short_text + '</p>');
					}
			} else {
				article = article.sort(function(a, b){
						var dateA=new Date(a.date), dateB=new Date(b.date)
						return dateA-dateB
						})
					
					for (i=0; i<article.length; i++){
					$('<article class="text"></article>').appendTo('#article_content').html('<a class="article_img"><img src="' + article[i].img[0] + '" alt="' + article[i].title + '"/></a><a href="#" class="country">' + article[i].country[0] + '</a><br><a class="title"  onclick="change(' + i + ')" href="#">' + article[i].title + '</a><p class="date">' + article[i].date.toLocaleString() + '</p><br><div class="rateit"></div><p class="short_text">' + article[i].short_text + '</p>');
					}
			}
	})
	
		/*размер блока с контентом*/
function content_size(){
		if (window.innerWidth>768){
			x = $('.text').height() + 60;
			$('#content').height(Math.ceil(article.length/2)*x);} else {
				x = $('#article_content').height();
				$('#content').height(x)}
}
$(window).resize(content_size);