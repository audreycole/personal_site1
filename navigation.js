$(document).ready(function() {

    // jQuery methods go here...

	$('#home_').click(function() {
		$('html,body').animate({scrollTop: 0}, 1500);
	});

	$('#about_').click(function() {
		$('html,body').animate({scrollTop: $("#about").offset().top}, 1500);
	});

	$('#contact_').click(function() {
		$('html,body').animate({scrollTop: $("#contact").offset().top}, 1500);
	});


	$(document).scroll(function () {
        var scroll = $(this).scrollTop();
        //console.log(scroll);
        var topDist = $("#header").position();
        if (scroll > topDist.top) {
            $('#header').css({"position":"fixed","top":"auto", "left": "30%"});
        } else {
            $('#header').css({"position":"static","top":"auto"});
        }
    });


});





