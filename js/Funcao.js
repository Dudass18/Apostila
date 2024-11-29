$("#cabecalho").css({"margin-top": "20px", "color": "#333333"})
             .addClass("selecionado");


$('tbody td').hide();

$('#form').css('background', 'black');

$('.headline').hide();

$('p').text('alô :D');

$("#menu-departamentos li").each (function (index, item) {
    alert(item.text());
});