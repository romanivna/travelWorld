function pagination(){
	$('#content').prepend('<div class="wrap"><ul class="page_list"></ul></div>');
	$('#content').append('<div class="wrap two"><ul class="page_list"></ul></div>');
	
	for (let i=10; i<$('.content_main').length; i++){
		$('.content_main').eq(i).css({"display":"none"});
	}
	var pages = Math.ceil($('.content_main').length/10);
	console.log(pages)
	for (let j=0; j<pages; j++){
		let x = " ";
		x += "<li class='pages'><a style='cursor: pointer' onclick='page(" + j + ")'>" + (j+1) + "</a></li>";
		$('.page_list').append(x);
		$('.pages').eq(0).addClass('this_page')
	}

}

function page(num) {
	$('.pages').removeClass('this_page');
	$('.pages').eq(num+3).addClass('this_page');
	$('.pages').eq(num).addClass('this_page');
	push_url(num);
	num *= 10;
	a = num+10;
	b = num-10;
	for (let i=a; i<$('.content_main').length; i++){
	$('.content_main').eq(i).css({"display":"none"});
	}
	for (let i=0; i<num; i++){
	$('.content_main').eq(i).css({"display":"none"});
	}
	for (let i=num; i<a; i++){
	$('.content_main').eq(i).css({"display":"block"});
	}
}

function push_url(num,title){
			window.history.pushState({"html":"","pageTitle":""},"", "/page-" + num);
			history.pushState("html", "", "categories/page-" + num);
}


/*
var page_num = 1000;
function endless_pagination() {
	$('body').prepend('<div class="right_wrap"><ul class="page_list_right"></ul></div>');
	for (let i=10; i<$('article.text').length; i++){
		$('article.text').eq(i).css({"display":"none"});
	}
	var pages = Math.ceil($('article.text').length/10);
	for (let j=0; j<pages-1; j++){
		let x = " ";
		x += "<li class='pages_right'><a href='#take" + main_text[j] + "' onclick='page_up_down(" + (j+1) + ")' style='cursor: pointer'>" + (j+1) + "</a></li>";
		$('.page_list_right').append(x);
	}
	$(window).scroll(function (){
		
	var scroll = document.documentElement.scrollHeight - 800;
	var win = $(window).scrollTop();
	var a = ($('.text').height() + 60) * 5;
	if (win < a) {
		$('.pages_right').removeClass('this_right_page');
		$('.pages_right').eq(0).addClass('this_right_page');
		}
	for (let i=1; i<$('.pages_right').length; i++) {
		var exp_1 = win > a*i;
		var exp_2 = win < a*(i+1);
	 if (exp_1 && exp_2 ) {
			$('.pages_right').removeClass('this_right_page');
			$('.pages_right').eq(i).addClass('this_right_page');
	}
	}
	
	if (win > scroll) {
		page_num += 1000;
		endless_page(page_num);
	}
	
	
	});
	
}

function endless_page(page_num){
	console.log(page_num)
	var num = page_num/200;
	a = num+10;
	b = num+20;
	for (let i=num; i<a; i++){
	$('.text').eq(i).css({"display":"block"});
	}
}


function page_up_down(m) {
		var elementClick = $('.pages_right a').eq(m-1).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 500);
	}*/
	
	
	
	function endless_pagination(hideblocks, array_content_length, row_page) {
	
	$('body').prepend('<div class="right_wrap"><ul class="page_list_right"></ul></div>');
	
	for (let i=10; i<$(hideblocks).length; i++){
		$(hideblocks).eq(i).css({"display":"none"});
	
	}
	var pages = Math.ceil($(hideblocks).length/10);
	for (let j=0; j<pages; j++){
		let x = " ";
		x += "<li class='pages_right'><a href='#take" + array_content_length[j] + "' onclick='page_up_down(" + (j+1) + ")' style='cursor: pointer'>" + (j+1) + "</a></li>";
		$('.page_list_right').append(x);
	}
	$(window).scroll(function (){
	var scroll = document.documentElement.scrollHeight - 714;
	var win = $(window).scrollTop();
	//	console.log(win,row_page[0])
	
	
	if (win < row_page[0]) {
		//console.log($(window).scrollTop())
		$('.pages_right').removeClass('this_right_page');
		$('.pages_right').eq(0).addClass('this_right_page');
		endless_page(i*1000, hideblocks)
		endless_page((i+1)*1000, hideblocks)
		} else {endless_page(1000, hideblocks)}
		for (let i=1; i<$('.pages_right').length; i++) {
		//let a = $(hideblocks).height() * row_page[b];
		//console.log(a)
		var exp_1 = win > row_page[i-1];
		var exp_2 = win < row_page[i];
		
		if (exp_1 && exp_2 ) {
	
		//console.log(a*i, win, a*(i+1))
			endless_page((i+1)*1000, hideblocks)
		 console.log(i)
			$('.pages_right').removeClass('this_right_page');
			$('.pages_right').eq(i).addClass('this_right_page');
	}
	}
	/*	
	if (win > scroll) {
		page_num += 1000;
		endless_page(page_num);
	}*/
	
	
	});
	
}

function endless_page(page_num,hideblocks){
	//console.log(page_num)
	var num = page_num/100;
	a = num+10;
	b = num+20;
	for (let i=num; i<a; i++){
	$(hideblocks).eq(i).css({"display":"inline-block"});
	}
}

function page_up_down(m) {
	
		//console.log($('#take61').scrollTop())
		var elementClick = $('.pages_right a').eq(m-1).attr("href");
		//if (m==1) {destination = $(elementClick).offset().top} else {
		destination = $(elementClick).offset().top;
		//}
		$("body,html").animate({scrollTop: destination }, 500);
		console.log(destination)
	}