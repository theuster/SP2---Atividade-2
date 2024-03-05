//efeito de esconder formulário de cadastro

$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

      $("#form-cadastrar").SlideToggle("slow");
      $("#section-login").SlideToggle("slow");
      $("#botao-cadastrar").hide();

    });

});