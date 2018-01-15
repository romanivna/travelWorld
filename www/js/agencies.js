
						/*Карта для турагентств*/
window.onload = function() {
	    $.ajax({
	    	type: 'GET',
	    	url: 'map.json',
	    	dataType:'json',
	    	success: function (json){ 
	    		var KyivLatlng = new google.maps.LatLng(50.4546600, 30.5238000)
	    		var options = {
	    			zoom: 14,
	    			center: KyivLatlng,
	    			mapTypeId: google.maps.MapTypeId.ROADMAP
	    		}
	    		var map = new google.maps.Map(document.getElementById('map'), options);
    			var agency = [];
	    		for (let i=0; i<json.results.length; i++){
	    			agency[i] = new Object();
	    			agency[i].lat = json.results[i].geometry.location.lat;
	    			agency[i].long = json.results[i].geometry.location.lng;
	    			 agency[i].name = json.results[i].name;
	    			 agency[i].icon = json.results[i].icon;
	    			 agency[i].address = json.results[i].formatted_address;
	    			agency[i].coords = {lat: agency[i].lat, lng: agency[i].long};
	    		    let marker = new google.maps.Marker({
	    		          position: agency[i].coords,
	    		          map: map,
	    		          title: agency[i].name
	    		        });
	    		    let contentString = '<div id="info"><img class="icon_map" src="' + agency[i].icon + '"/><h2>' + agency[i].name + '</h2><p>' + agency[i].address + '</p></div>';
		    		let infowindow = new google.maps.InfoWindow({
		    			content: contentString
		    		});
		    		google.maps.event.addListener(marker, 'click', function() {
		    			infowindow.open(map,marker);
		    		});
	    		}
	    },
	    	error: function (){
	    		console.log('Error');
	    	}
	    })
	      
	  };
	  
	