$(document).ready(function(){
  $("#name").focusin(function(){
    $(this).addClass("myClass");
  });
  $("#name").focusout(function(){
    if($(this).val().length > 2 && $(this).val().length <= 25){
      $("#id1").html("<span style = 'color: #2ECC71'>Válido</span>")
    }
    else if ($(this).val().length <= 1) {
      $("#id1").html("<span style = 'color: #CD6155'>Nombre muy corto</span>")
    }
  });

  $("#age").focusin(function(){
    $(this).addClass("myClass");
  });
  $("#age").focusout(function(){
    if($(this).val().length == 2){
      $("#id2").html("<span style = 'color: #2ECC71'>Válido</span>")
    }
    else if ($(this).val().length !== 2) {
      $("#id2").html("<span style = 'color: red'>Edad incorrecta</span>")
    }
  });

  $("#phone").focusin(function(){
    $(this).addClass("myClass");
  });
  $("#phone").focusout(function(){
    if($(this).val().length == 10){
      $("#id3").html("<span style = 'color: #2ECC71'>Válido</span>")
    }
    else if ($(this).val().length !== 11) {
      $("#id3").html("<span style = 'color: #CD6155'>Número invalido</span>")
    }
  });


});
