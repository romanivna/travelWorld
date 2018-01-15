<!DOCTYPE html>
<html lang="ru-RU">
	<head>
		<title>Результаты поиска</title>
		<?php include 'templates/style.php';?>
	</head>
	<body>

	<?php include 'templates/header.php';?>
	<div id="breadcrumps">
	<a href="../index.php">Главная</a>
	<img src="../img/arrow.png"/>
	<a href="" style="z-index:26">Результаты поиска</a>
</div>

<div id="content">
<div id="search_block">
	<input type="text" name="search" id="search-field" placeholder="Введите искомое и нажмите Enter" autocomplete='off'>
	<input type="checkbox" name="search-row" id="search-row" autocomplete='off'> искать в описании
	<a class='button' id='search_button'>Искать</a>
</div>			

	<div id='results_content'>
	</div>
	
	</div>
	<?php include 'templates/footer.php';?>

		<?php include 'templates/script.php';?>
<script src="../js/rate.js"></script>
<script src="../js/search.js"></script>
<script>
	
	var search = new Search();
	$(document).ready(function(){
		$('#search-field').on('keypress', function(e){
			if(e.keyCode == 13){
				var val = $(this).val();
				if(val != ''){
					search.go(val, function(item){
							console.log(item)
							
							if(item.video!=undefined) {
								$('<div class="content_main video"></div>').appendTo('#results_content').html('<iframe src="' + item.video + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe><a class="category_a">' + item.title + '</a><span>' + item.date.toLocaleString() + '</span><p>' + item.full_text + '</p><hr>');
							} else {
							
				let a = [];
				let b = []
			a[0] = '<a class="example-image-link major" href="' + item.img[0] + '" data-title="' + item.title + '" data-lightbox="image"><img class="example-image trav" src="' + item.img[0] + '" alt="' + item.title + '"/></a>'
			for (i = 1; i<item.img.length; i++){
			
			b.push('<a class="example-image-link trav" href="' + item.img[i] + '" data-title="' + item.title + '" data-lightbox="image' + i + '"><img class="example-image trav" src="' + item.img[i] + '" alt="' + item.title + '"/></a>');
			}
			
			$('<div class="content_main photo"></div>').appendTo('#results_content').html(a[0] + '<a class="country" href="">' + item.country[0] + '</a><br><a class="category_a" href="">' + item.title + '</a><span>' + item.date.toLocaleString() + '</span><div class="small_images">' + b + '</div><div>' + item.full_text + '</div><hr>');
			
			
							}
})
						
			}
				}
			})
			
			//$('#search_button').click()
			
		});
		$('#search-row').on('change', function(){
			search.row = search.row == 'title' ? 'full_text' : 'title';
		});
//	});


</script>
	</body>
	</html>