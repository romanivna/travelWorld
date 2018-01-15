							/*Карта для контактов*/
	  window.onload = function contactUs() {
		  var a = 'bottom: -280px';
		  console.log(a);
		  document.getElementById('footer').style = a;
		  console.log()
	var LatLng = {lat: 50.461552109615, lng: 30.493354853243};

  var map = new google.maps.Map(document.getElementById('map2'), {
    zoom: 16,
    center: LatLng
  });

  var marker = new google.maps.Marker({
    position: LatLng,
    map: map,
    title: 'ул. Глубочицкая 32а'
  });
};


