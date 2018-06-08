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

  $("#txt").focusin(function(){
    $(this).addClass("myClass");
  });
  $("#txt").focusout(function(){
    if($(this).val().length >= 10 && $(this).val().length <= 20){
      $("#id5").html("<span style = 'color: #2ECC71'>Válido</span>")
    }
    else if ($(this).val().length < 10 ) {
      $("#id5").html("<span style = 'color: #CD6155'>Escribe min 10 caracteres</span>")
    }

  });

  $("#email").focusin(function(){
    $(this).addClass("myClass");
  });
  $("#email").focusout(function(){
    mailno = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (mailno.test($(this).val())) {
      $("#id4").html("<span style = 'color: #2ECC71'>Válido</span>")
    } else {
      $("#id4").html("<span style = 'color: #CD6155'>mail invalido</span>")
    }
  });

$("#btn").click(function(){
  alert("Se ha enviado el formulario.")
});


});
