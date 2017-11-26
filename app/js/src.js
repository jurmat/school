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
$('[data-trigger]').click(function(){
    var collection =  $(this).data('collection');
    var triger = $(this).data('trigger');
    $('.tab').removeClass('tab-active');
    $(this).addClass('tab-active');
    $('[data-collection="'+collection+'"]').removeClass('active') 
    $('[data-collection="'+collection+'"][data-target="'+triger+'"]').addClass('active')
  });
  $(function() {
    $("#cal").datepicker($.datepicker.regional["ru"]);
    
  });

  $('form').submit(function(e){
    e.preventDefault();
  
    console.log($(this).serialize());
  })
  
  
  function previewFile() {
    var preview = document.querySelector('.ava_foto img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }
  $('#file').change(()=>{
    previewFile()
  })
  $('#form-profil').validate({
    rules:{
      name:{
        required: true,
        minlength: 2
        
      },
      lastname:{
        required: true,
        minlength: 2
      },
      Email:{
        required: true,
        email:"/^.+@.+[.].{2,}$/i;"
      },
      phone:{
        required: true,
        minlength: 2
      },
      date:{
        required: true,
        minlength: 2
      },
      skype:{
        required: true,
        
      }
    },
    messages:{
      name:{
        required:'Внимание! Заполните поле!',
        minlength: "Не менее 2-х символов"
      },
      lastname:{
        required:'Внимание! Заполните поле!',
        minlength: "Не менее 2-х символов"
      },
      Email: {
        required: "Внимание! Заполните поле",
        email: "Необходим формат адреса email" 
      },
      date: {
        required: "Внимание! Заполните поле",
        minlength: " " 
      },
      skype: {
        required: "*обязательно для заполнения",
        minlength: " " 
      },
      phone: {
        required: "Внимание! Заполните поле",
        minlength: " " 
      },
    },
    
  })
  
  
  
  
  
  
  
  
  
  d=new Date()
  time_zone=d.getTimezoneOffset()
  console.log(time_zone);
});