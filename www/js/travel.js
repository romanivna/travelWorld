var categories = [];		
var asia = [];
var europe = [];
var africa = [];
var north_america = [];
var south_america = [];
var australia = [];
var east = [];
var ussr = [];	
var a_l;


		
		window.onload = function () {
			
	    $.ajax({
	    	accepts:'application/json; charset=utf-8', 
	    	type: 'POST',
	    	url: 'travel.json',
	    	dataType:'json',
	    	success: function (json){
	    		img = [];
	    		country = [];
				date = [];
				rate = [];
				full_text = [];
				title = [];
				video = [];
				getDate = [];
				for (let i=0; i<json.travels.length; i++) {
				categories[i] = {};
						img[i] = json.travels[i].img;
						let img_img = img[i];
						country[i] = json.travels[i].country;
						let country_country = country[i];
						title[i] = json.travels[i].title;
						getDate[i] = json.travels[i].date.split('.');
						let newDate = '';
						newDate = "'" + getDate[i][2] + ',' + getDate[i][1] + ',' + getDate[i][0] + "'";
						date[i] = new Date(newDate);
						rate[i] = json.travels[i].rate;
						full_text[i] = json.travels[i].full_text;
						video[i] = json.travels[i].video;
						rate[i] = +rate[i] * 10;
						
						categories = categories.sort(function(a, b){
						var dateA=new Date(a.date), dateB=new Date(b.date)
						return dateB-dateA
						})
						
					categories[i].img = img_img;
					categories[i].country = country_country;
					categories[i].title = title[i];
					categories[i].date = date[i];
					categories[i].rate = rate[i];
					categories[i].full_text = full_text[i];
					categories[i].video = video[i];
					
						if (country_country[0] == 'Азия') {
							asia.push({'img' : img_img, 'country': country_country, 'title' : title[i], 'date' : date[i], 'rate' : rate[i], 'full_text' : full_text[i], 'video' : video[i]})
						}
						if (country_country[0] == 'Европа'){
							europe.push({'img' : img_img, 'country': country_country, 'title' : title[i], 'date' : date[i], 'rate' : rate[i], 'full_text' : full_text[i], 'video' : video[i]})
						}
						if (country_country[0] == 'Африка'){
							africa.push({'img' : img_img, 'country': country_country, 'title' : title[i], 'date' : date[i], 'rate' : rate[i], 'full_text' : full_text[i], 'video' : video[i]})
						}
						if (country_country[0] == 'Северная Америка'){
							north_america.push({'img' : img_img, 'country': country_country, 'title' : title[i], 'date' : date[i], 'rate' : rate[i], 'full_text' : full_text[i], 'video' : video[i]})
						}
						if (country_country[0] == 'Южная Америка'){
							south_america.push({'img' : img_img, 'country': country_country, 'title' : title[i], 'date' : date[i], 'rate' : rate[i], 'full_text' : full_text[i], 'video' : video[i]})
						}
						if (country_country == 'Австралия'){
							australia.push({'img' : img_img, 'country': country_country, 'title' : title[i], 'date' : date[i], 'rate' : rate[i], 'full_text' : full_text[i], 'video' : video[i]})
						}
						if (country_country[0] == 'Ближний Восток'){
							east.push({'img' : img_img, 'country': country_country, 'title' : title[i], 'date' : date[i], 'rate' : rate[i], 'full_text' : full_text[i], 'video' : video[i]})
						}
						if (country_country[0] == 'СНГ'){
							ussr.push({'img' : img_img, 'country': country_country, 'title' : title[i], 'date' : date[i], 'rate' : rate[i], 'full_text' : full_text[i], 'video' : video[i]})
						}
						
				}

						print_category(asia,europe,africa,north_america,south_america,australia,east,ussr)
				
					//$('<categories class="text"></categories>').appendTo('#categories_content').html('<a class="categories_img"><img src="' + categories[i].img[0] + '" alt="' + categories[i].title + '"/></a><a href="#" class="country">' + categories[i].country[0] + '</a><br><a class="title"  onclick="change(' + i + ')" href="#">' + categories[i].title + '</a><p class="date">' + categories[i].date.toLocaleString() + '</p><br><div class="rateit"></div><p class="short_text">' + categories[i].short_text + '</p>');
					
	    		
					main_text = [];
				for (let j=0; j<json.travels.length+1; j++) {
					$('.text').eq(j).attr('id','take'+(j+1));
					main_text.push(j+1)
					j+=9;
				}
	    		//rateit();
				//content_size();
			var row_page=[];
			for (let i=0; i<$('categories.text').length-1; i++){
				var x = (i+5)*$('categories.text').height()+60;
				row_page.push(x);
				i+=4;
			}
			
			//endless_pagination('categories.text',main_text, row_page);
			//pagination();*/
	    	},
	    	error: function(){
	    		console.log('error json')
	    	}
	    })
		}
		
		function print_category(asia,europe,africa,north_america,south_america,australia,east,ussr)
		{ //console.log(asia,europe,africa,north_america,south_america,australia,east,ussr)
			if($('section').length>1){
					for (let n=0; n<3; n++){
						print('asia',asia,n);
						print('europe',europe,n);
						print('africa',africa,n);
						print('north_america',north_america,n);
						print('south_america',south_america,n);
						print('australia',australia,n);
						//print('east',east,n);
						//print('ussr',ussr,n);
					}
			} else if($('section').attr("id") == "asia") {
				
				for (let i=0; i<asia.length; i++){
					print('asia',asia, i)
					}
				pagination()
			} else if($('section').attr("id") == "europe") {
				for (let i=0; i<europe.length; i++){
					print('europe',europe, i)
					}
				pagination()
			} else if($('section').attr("id") == "africa") {
				for (let i=0; i<africa.length; i++){
					print('africa',africa, i)
					}
				pagination()
			} else if($('section').attr("id") == "north_america") {
				for (let i=0; i<north_america.length; i++){
					print('north_america',north_america, i)
					}
				pagination()
			} else if($('section').attr("id") == "south_america") {
				for (let i=0; i<south_america.length; i++){
					print('south_america',south_america, i)
					}
				pagination()
			} else if($('section').attr("id") == "australia") {
				for (let i=0; i<australia.length; i++){
					print('australia',australia, i)
					}
			} else if($('section').attr("id") == "east") {
				for (let i=0; i<east.length; i++){
					print('east',east, i)
					}
				pagination()
			} else if($('section').attr("id") == "ussr") {
				for (let i=0; i<ussr.length; i++){
					print('ussr',ussr, i)
					}
				pagination()
			}
		
		country_find()
			
		};
		
		
		
		