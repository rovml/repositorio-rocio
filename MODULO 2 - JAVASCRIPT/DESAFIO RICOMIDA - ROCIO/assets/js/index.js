$(document).ready(function() {
    $("#ingredientes").dblclick(function() {
      $(this).css("color", "red");
    });
  });

  $(document).ready(function() {
    $("#preparacion").dblclick(function() {
      $(this).css("color", "red");
    });
  });

  $(document).ready(function() {
    $("#enviar").click(function() {
      alert("El correo fue enviado correctamente...");
    });
  });

  $(document).ready(function() {
    $(".card-1").click(function() {
     $(".card-1").toggle()
    });
  });
  $(document).ready(function() {
    $(".card-2").click(function() {
     $(".card-2").toggle()
    });
  });

  $(document).ready(function() {
    $(".card-3").click(function() {
     $(".card-3").toggle()
    });
  });