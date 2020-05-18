//preloader
$(document).ready(function() {
	setTimeout(function() { 
		$(".preloader-wrap").addClass("complete")
	}, 1500);
})

$(function() {
	let header = $("#header");
	let introH = $("#intro").innerHeight();
	let scrollOffset = $(window).scrollTop();

	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if( scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	// Smooth scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let $this = $(this);
		let blockId = $(this).data('scroll');
		let blockOffset = $(blockId).offset().top - 100;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 1000);	
	});
});

// Scroll back to top
$(window).scroll(function() {
	var height = $(window).scrollTop();
	if (height > 100) {
		$('#back-to-top').fadeIn();
	} else {
		$('#back-to-top').fadeOut();
	}
});

$(document).ready(function() {
	$("#back-to-top").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
});

// burger menu
$(document).on("click", "#menu-toggle", function() {
	$("#nav, .header, .header__inner").toggleClass("open");
});
