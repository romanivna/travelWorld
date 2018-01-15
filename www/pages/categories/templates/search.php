<div id="search_block">
	<input type="text" name="search" id="search-field" placeholder="Введите слово или фразу для поиска">
	<input type="checkbox" name="search-row" id="search-row"> искать в описании
</div>			

<script type="text/javascript">
	var search = new Search();
	$(document).ready(function(){
		$('#search-field').on('keypress', function(e){
			if(e.keyCode == 13){
				var val = $(this).val();
				if(val != ''){
					search.go(val, function(item){

						// this place for drawing serach results on display;
						console.log(item);
						
					});
				}
			}
		});

		$('#search-row').on('change', function(){
			search.row = search.row == 'title' ? 'full_text' : 'title';
		});
	});
	
</script>