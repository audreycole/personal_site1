$(document).ready(function() {

    // jQuery methods go here...

	$('#home_').click(function() {
		$('html,body').animate({scrollTop: 0}, 1500);
	});

	$('#about_').click(function() {
		var offset = $("#about").offset().top - 150;
		console.log(offset);
		$('html,body').animate({scrollTop: offset}, 1500);
	});

	$('#contact_').click(function() {
		$('html,body').animate({scrollTop: $("#contact").offset().top}, 1500);
	});

    // init variable for last scroll position
	var lastScrollPosition = 0;

	/*$(window).bind('scroll', function () {

		var offset = $('#header').offset(); 

		console.log(offset); 

		// If you're scrolling down
		if(currentScrollPosition > offset.top + 61) {
			//$('.header clearfix').animate({bottom: "+=100px"});
			$('#header').css({"position":"fixed","top":"0"});
		} 
		else {
			$('#header').css({"position":"static","top":"auto"});
		}
	
	}); */

	$(document).scroll(function () {
        var scroll = $(this).scrollTop();
        //console.log(scroll);
        var topDist = $("#header").position();
        if (scroll > topDist.top) {
            $('#header').css({"position":"fixed","top":"0", "width": "700px", "background-color": "white", "padding-top": "10px"});
        } else {
            $('#header').css({"position":"static","top":"auto", "width": "700px"});
        }
    });


});





