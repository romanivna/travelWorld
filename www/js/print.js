
		function print(id, name, num){
			//console.log(id)
					if (name[num].video == undefined) {
						print_photo(id, name, num);
					} else print_video(id, name, num);
					}
	
		
		function print_video(id, name, num){
			$('<div class="content_main video ' + id + '" id="v' + num + '"></div>').appendTo('#'+id).html('<iframe src="' + name[num].video + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe><a class="category_a"  href="categories/'+id+'.php#v'+num+'">' + name[num].title + '</a><span>' + name[num].date.toLocaleString() + '</span><p>' + name[num].full_text + '</p><hr>');
		}
		
		

		
		function print_photo(id, name, num){
			//console.log(name)
			let a = [];
			let b = [];
			a[0] = '<a class="example-image-link major" href="' + name[num].img[0] + '" data-title="' + name[num].title + '" data-lightbox="image' + num + '"><img class="example-image trav" src="' + name[num].img[0] + '" alt="' + name[num].title + '"/></a>'
			for (i = 1; i<10; i++){
			
			b.push('<a class="example-image-link trav" href="' + name[num].img[i] + '" data-title="' + name[num].title + '" data-lightbox="image' + num + '"><img class="example-image trav" src="' + name[num].img[i] + '" alt="' + name[num].title + '"/></a>');
			}
			$('<div class="content_main photo ' + id + '" id="p'+num+'"></div>').appendTo('#'+id).html(a[0] + '<a class="country">' + name[num].country[0] + '</a><br><a class="category_a">' + name[num].title + '</a><span>' + name[num].date.toLocaleString() + '</span><div class="small_images">' + b + '</div><p>' + name[num].full_text + '</p><hr>');
		
			
			
		}