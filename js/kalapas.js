 // loader
 jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $('.se-pre-con').fadeOut('slow', function () {
            });
        },1000); // set the time here
    });  
});

 // end of loader

// rotate logo
 window.onload = function(){
TweenLite.to([".logo"], 8, {rotation:360,delay:2});

}
// end 



// scroll
$(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {        // If page is scrolled more than 600px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});
// end
