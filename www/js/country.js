

		function country_find(){
			two()
			var a = document.querySelectorAll('a.country');
			for (var o=0; o<a.length; o++){
				var g = a[o].text;
				$(a[o]).attr('onclick', 'ink("' + g + '")')
			
			}
			
		}
		
			function ink(g){
				console.log(g)
				$('#content').empty();
			if(g == "Азия") {
				for (let i=0; i<asia.length; i++){
					print('content',asia, i)
					}
					
			} else if(g == "Европа") {
				for (let i=0; i<europe.length; i++){
					print('content',europe, i)
					}
			} else if(g == "Африка") {
				for (let i=0; i<africa.length; i++){
					print('content',africa, i)
					}
			} else if(g == "Северная Америка") {
				for (let i=0; i<north_america.length; i++){
					print('content',north_america, i)
					}
			} else if(g == "Южная Америка") {
				for (let i=0; i<south_america.length; i++){
					print('content',south_america, i)
					}
			} else if(g == "Австралия") {
				for (let i=0; i<australia.length; i++){
					print('content',australia, i)
					}
			} else if(g == "Ближний восток") {
				for (let i=0; i<east.length; i++){
					print('content',east, i)
					}
			} else if(g == "СНГ") {
				for (let i=0; i<ussr.length; i++){
					print('content',ussr, i)
					}
			}
			}
		

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


		
		function one () {
			
	    $.ajax({
	    	accepts:'application/json; charset=utf-8', 
	    	type: 'POST',
	    	url: 'travel3.json',
	    	dataType:'json',
	    	success: function (json){
	    		
					full_json(json)
				},
	    	error: function(){
	    		console.log('error json')
	    	}
	    })
		}
				
				
				
				
				
				var article = [];						
		function two() {
			one()
	    $.ajax({
	    	accepts:'application/json; charset=utf-8', 
	    	type: 'GET',
	    	url: 'for_blog2.json',
	    	dataType:'json',
	    	success: function (json){
	    		full_json(json)
				sort(asia);
				sort(europe);
				sort(africa);
				sort(north_america);
				sort(south_america);
				sort(australia);
				sort(east);
				sort(ussr);
				function sort(array){
					for (i=0; i<array.length; i++){
						array = array.sort(function(a, b){
						var dateA=new Date(a.date), dateB=new Date(b.date)
						return dateB-dateA
						})
					}	
					
				}
	    	},
	    	error: function(){
	    		console.log('error json')
	    	}
	    })
		}
		
		

function full_json (json) {
				img = [];
	    		country = [];
				date = [];
				rate = [];
				full_text = [];
				title = [];
				video = [];
				getDate = [];
				for (let i=0; i<json.travels.length; i++) {
						img[i] = json.travels[i].img;
						let img_img = img[i];
						country[i] = json.travels[i].country;
						let country_country = country[i];
						title[i] = json.travels[i].title;
						getDate[i] = json.travels[i].date.split('.');
						let newDate = [];
						newDate.push(getDate[i][2],getDate[i][1],getDate[i][0]);
						newDate.join('-');
						date[i] = new Date(newDate);
						rate[i] = json.travels[i].rate;
						full_text[i] = json.travels[i].full_text;
						video[i] = json.travels[i].video;
						rate[i] = +rate[i] * 10;
						
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
}
