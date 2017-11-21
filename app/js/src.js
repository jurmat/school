$(document).ready(function(){
	$( ".icon" ).click(function(){
		$('.icon').toggleClass('active');
		$( ".header__menu" ).toggleClass('header__menu_show');
	});


	$(window).resize(function() {
		if (  $(window).width() > 860 ) {
			$("ul").removeAttr('style');
			$(".icon").removeClass('active');
		}
	});
});