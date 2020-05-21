jQuery(document).ready(function($){
    var $allPanels    = $('.pages-list ul ul');
    var $clickTarget  = $('.pages-list > ul > li > a');

    $allPanels.hide();

    $clickTarget.click(function(e) {
        e.preventDefault();

        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $allPanels.slideUp();
            return false;
        } else {
            $allPanels.slideUp();
            $clickTarget.parent().removeClass('active');
            $(this).parent().addClass('active');
            $(this).siblings('ul').slideDown();
            return false;
        }
    });

    $('li.is-current > a').click();

});