$(document).ready(function() {

    // jQuery methods go here...

	$('#home_1').click(function() {
		console.log("clicked home!");
		$('html,body').animate({scrollTop: 0}, 1500);
		
	});

	$('#home_2').click(function() {
		console.log("clicked home!");
		$('html,body').animate({scrollTop: 0}, 1500);
		
	});

	$('#about_').click(function() {
		$('html,body').animate({scrollTop: $("#about").offset().top}, 1500);
		console.log("clicked about!");
	});

	$('#contact_').click(function() {
		$('html,body').animate({scrollTop: $("#contact").offset().top}, 1500);
		console.log("clicked contact!");
	});

	var clouds = $('.clouds');     
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		
		clouds.each(function() {
			var $this = $(this);
			var scrollspeed = parseInt($this.data('scroll-speed')), offset = -scrollTop / scrollspeed;
			$this.css('transform', 'translateY(' + offset + 'px');

		});
	});


	/*$(document).scroll(function () {

        var scroll = $(this).scrollTop();
        
        var topDist = $("#header").position();
        if (scroll > topDist.top) {
            $('#header').css({"position":"fixed","top":"auto", "left": "30%"});
        } else {
            $('#header').css({"position":"static","top":"auto"});
        }
    });*/

});





