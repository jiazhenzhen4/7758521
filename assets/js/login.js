$(function() {
    $('#goToRegi').click(function() {
        $('.register').show();
        $('.login').hide();
    });
    $('#goToLogin').click(function() {
        $('.login').show();
        $('.register').hide();
    });
})