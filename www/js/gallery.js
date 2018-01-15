var gallery_array = [];
(function(){
for (i=1; i<18; i++){
	if (i==1) {k=''} else {k=i};
$('<a class="example-image-link" href="../img/gallery/австралия' + k + '.jpg" data-title="Австралия" data-lightbox="image">Австралия ' + k  + '</a>').appendTo('#content').html('<img class="example-image" src="../img/gallery/австралия' + k + '-мин.jpg" alt="австралия"/>');
}

for (i=1; i<12; i++){
	if (i==1) {k=''} else {k=i};
$('<a class="example-image-link" href="../img/gallery/америка' + k + '.jpg" data-title="Америка" data-lightbox="image">Америка ' + k  + '</a>').appendTo('#content').html('<img class="example-image" src="../img/gallery/америка' + k + '-мин.jpg" alt="америка"/>');
}

$('<a class="example-image-link" href="../img/gallery/аргентина.jpg" data-title="Аргентина" data-lightbox="image">Аргентина</a>').appendTo('#content').html('<img class="example-image" src="../img/gallery/аргентина-мин.jpg" alt="аргентина"/>');

for (i=1; i<17; i++){
	if (i==1) {k=''} else {k=i};
$('<a class="example-image-link" href="../img/gallery/африка' + k + '.jpg" data-title="Африка" data-lightbox="image">Африка ' + k  + '</a>').appendTo('#content').html('<img class="example-image" src="../img/gallery/африка' + k + '-мин.jpg" alt="африка"/>');
}

for (i=1; i<15; i++){
	if (i==1) {k=''} else {k=i};
$('<a class="example-image-link" href="../img/gallery/индия' + k + '.jpg" data-title="Индия" data-lightbox="image">Индия ' + k  + '</a>').appendTo('#content').html('<img class="example-image" src="../img/gallery/индия' + k + '-мин.jpg" alt="индия"/>');
}

for (i=1; i<14; i++){
	if (i==1) {k=''} else {k=i};
$('<a class="example-image-link" href="../img/gallery/марокко' + k + '.jpg" data-title="Марокко" data-lightbox="image">Марокко ' + k  + '</a>').appendTo('#content').html('<img class="example-image" src="../img/gallery/марокко' + k + '-мин.jpg" alt="марокко"/>');
}

for (i=1; i<11; i++){
	if (i==1) {k=''} else {k=i};
$('<a class="example-image-link" href="../img/gallery/тунис' + k + '.jpg" data-title="Тунис" data-lightbox="image">Тунис ' + k  + '</a>').appendTo('#content').html('<img class="example-image" src="../img/gallery/Тунис' + k + '-мин.jpg" alt="тунис"/>');
}

for (i=1; i<11; i++){
	if (i==1) {k=''} else {k=i};
$('<a class="example-image-link" href="../img/gallery/шотландия' + k + '.jpg" data-title="Шотландия" data-lightbox="image">Шотландия ' + k  + '</a>').appendTo('#content').html('<img class="example-image" src="../img/gallery/шотландия' + k + '-мин.jpg" alt="Шотландия"/>');
}
l = $('.example-image-link').length;
for (i=0; i<l; i++) {
	$('a.example-image-link').eq(i).attr('id','take'+(i+1));
	gallery_array.push(i+1)
	i+=9;
}

})();

//console.log(d,e, "/" , h,i )
function for_pages() {
var j = Math.floor($('#content').width()/220) // сколько картинок в 1 ряду
var a = 10%j; //остаток картинок в неполном ряду
var x = 0; // сколько рядов еще занимает блок
var y;
var z=Math.ceil(10 / j); // номер ряда
row_page = []; // массив номеров рядов
row_page[0] = (z*$('.example-image-link').height())-100*j-30;
for (var i=0; i<$('.example-image-link').length/10-1; i++){
	x = (10 -(j - a))/j //2.6
	y = (10 -(j - a))%j //2
	a = y;
	z+=Math.floor(x)+1;
	row_page[i+1]=z*$('.example-image-link').height()-30;
}
console.log(row_page)
	endless_pagination('.example-image-link',gallery_array,row_page);
		if (j>5){none()};
};
for_pages();
$(window).resize(for_pages);

function none() {
	$('.right_wrap').css({"display":"none"});
	$('.example-image-link').css({"display":"inline-block"});
	
}

/*
var page_num = 1000;
function endless_pagination(hideblocks, array_content_length,row_page) {
	//console.log($(hideblocks).height())
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
		console.log(win,row_page[0])
	
	
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
		
	if (win > scroll) {
		page_num += 1000;
		endless_page(page_num);
	}
	
	
	});
	
}

function endless_page(page_num,hideblocks){
	console.log(page_num)
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
	}*/