jQuery(document).ready(function($){
    $(".foot-menu ul, .head-menu ul, .s-btn, .p-btn").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	$(".mobile-btn, .close-menu").click(function(e) {
	  e.preventDefault();
	  $(".mobile-menu").animate({width:'toggle'}, 100);
	  $("body").toggleClass('hide');
	});
});