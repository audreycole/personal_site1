$(document).ready(function() {

    // jQuery methods go here...

	$('#home_').click(function() {
		$('html,body').animate({scrollTop: -11}, 1500);
	});

	var prevAboutOffset = 0;
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
            $('#header').css({"position":"fixed","top":"0", "width": "700px", "background-color": "white", "padding-top": "10px"});
        } else {
            $('#header').css({"position":"static","top":"auto", "width": "700px"});
        }
    });


});





