	
						/*Категории*/
		window.onload = function () {
		    $.ajax({
		    	accepts:'application/json; charset=utf-8', 
		    	type: 'GET',
		    	url: 'travel.json',
		    	dataType:'json',
		    	success: function (json){
		    		img = [];
		    		var country = [];
		    		for (let i=0; i<json.travels.length; i++) {
		    			if (json.travels[i].img!==undefined){
		    				for (let j=0; j<json.travels[i].img.length; j++){
		    					img[j] = json.travels[i].img[j]
		    				}
		    			};
		    				for (let k=0; k<json.travels[i].country.length; k++){
		    					country[k] = json.travels[i].country[k]
		    				};
		    			let title = json.travels[i].title;
		    			let date = json.travels[i].date;
		    			let rate = json.travels[i].rate;
		    			let describe = json.travels[i].describe;
		    			let video = json.travels[i].video;
		    			
		    			if (json.travels[i].img==undefined){
		    				//video
		    				$('<div class="content_main traveling video"></div>').appendTo('#left_content').html('<iframe src="' + video + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe><a class="title" href="#">' + title + '</a><p class="date">' + date + '</p><div class="rate">' + rate + '</div><p class="describe">' + describe + '</p>');
		    			} else {
		    				//img
		    				$('<div class="content_main traveling photo"></div>').appendTo('#left_content').html('<a href="" class="a_img"><img src="' + img[0] + '" alt="' + title + '"/></a><a href="#" class="country">' + country[0] + '</a><br><a class="title" href="#">' + title + '</a><p class="date">' + date + '</p><div class="rate">' + rate + '</div><p class="describe">' + describe + '</p>');
		    			}
		    			
			
		    		}
		    	},
		    	error: function(){
		    		console.log('error json')
		    	}
		    })
			}