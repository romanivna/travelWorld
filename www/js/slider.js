  
	  						/*Слайдер для главной страницы*/

  $(document).ready(function (){
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
		})

		
