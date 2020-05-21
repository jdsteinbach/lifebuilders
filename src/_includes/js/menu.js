jQuery(document).ready(function($){
    var toggle = $('.menu-toggle'),
        menu = $('.menu','');
    $(toggle).click(function(e){
        e.preventDefault();
        //$(menu).toggleClass('active');
        $(menu).slideToggle(250);
    });
    $('.main-navigation > li > a').click(function(e){
        e.preventDefault();
        $(this).siblings('ul').slideToggle(250);
    });
});