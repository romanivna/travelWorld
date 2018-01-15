						/*появление блока с фильтрацией*/
	$('#filter').click(filter_block)
	function filter_block (){
		$('#menu_details').css("display","block");
		$('#menu_details').animate({top:'0'},500); 
	}

				/*поиск нужной категории*/
	function find(val) {
			if (val=='asia'){
				for (let i=0; i<asia.length; i++) {
					print('left-content', asia, i)
				}
			}
			if (val=='europe'){
			for (let i=0; i<categories.length; i++) {
				print('left-content', europe, i)
			
			}
		}
		if (val=='north_america'){
			for (let i=0; i<north_america.length; i++) {
				print('left-content', north_america, i)
			
			}
		}
		if (val=='south_america'){
			for (let i=0; i<south_america.length; i++) {
				print('left-content', south_america, i)
			
			}
		}
		if (val=='africa'){
			for (let i=0; i<africa.length; i++) {
				print('left-content', africa, i)
			
			}
		}
		if (val=='australia'){
			for (let i=0; i<australia.length; i++) {
				print('left-content', australia, i)
			
			}
		}
		if (val=='east'){
			for (let i=0; i<east.length; i++) {
				print('left-content', east, i)
			
			}
		}
		if (val=='ussr'){
			for (let i=0; i<ussr.length; i++) {
				print('left-content', ussr, i)
			
			}
		}
		
		
	}
		/*фильтр*/
function filter(){
	for (var i=0; i<8; i++){
		if (i==0){
		$('#left-content').empty();}
 if ($('.filter_country').eq(i).prop("checked")) {
	// console.log($('.filter_country').eq(i).val())
	 //$('#left-content').empty();
	 find($('.filter_country').eq(i).val())
 }

}
	
	var videos = []
	
	videos = document.querySelectorAll('div.video')
	var photoes = []
	photoes = document.querySelectorAll('div.photo')
	console.log(videos)
	
	
	if ($('.vid').prop('checked')==true){
		console.log('1')
		for (let i=0; i<videos.length; i++){
			$(videos[i]).css({"display":"block"})
		}
	}else {
		for (let i=0; i<videos.length; i++){
			$(videos[i]).css({"display":"none"})
		}
 }
	if ($('.phot').prop('checked')==true){
		for (let i=0; i<photoes.length; i++){
			$(photoes[i]).css({"display":"block"})
		}
	}
	 else {
		for (let i=0; i<photoes.length; i++){
			$(photoes[i]).css({"display":"none"})
		}
}
	if ($('.phot').prop('checked')==false && ($('.vid').prop('checked')==false)){
		for (let i=0; i<photoes.length; i++){
			$(photoes[i]).css({"display":"block"})
		}
		for (let i=0; i<videos.length; i++){
			$(videos[i]).css({"display":"block"})
		}
	}
	
}	


		/*снять/поставить на сортировке тип радио*/
var a=0;
$('.filter-category').click(function (){
	a++;
	if (a%2==0) {$(this).prop('checked', false)}
	})
	
$('.filter-type').click(filter);
for (var i=0; i<8; i++){
$('.filter_country').eq(i).click(filter)
}




