$(document).ready(function(){
	$( "#select" ).niceSelect({
	
	});
	var i =8
$('.plus').click(function(){
    i++
  $('.res').html(i)
});
$('.min').click(function(){
    i--
  $('.res').html(i)
  if(i<0){
  i=8
  $('.res').html(i)
  }
});
});