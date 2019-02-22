$('#hamburguer').on("click", function() {
    $('#hamburguer').toggleClass('open');

    if ($('#mobile-menu').hasClass('hide')) {
        $('#mobile-menu').slideDown(500);
    } else {
        $('#mobile-menu').slideUp(500);
    }

    $('#mobile-menu').toggleClass('hide');
})
