
$('.owl_1').owlCarousel({
	loop: false,
	margin: 0,
	responsiveClass: true, 
	autoplayHoverPause: true,
	autoplay: false,
	slideSpeed: 400,
	paginationSpeed: 400,
	autoplayTimeout: 3000,
	responsive: {
		0: {
			items: 3,
			nav: true,
			loop: false
		},
		600: {
			items: 3,
			nav: true,
			loop: false
		},
		1000: {
			items: 5,
			nav: true,
			loop: false
		}
	}
})

// $(document).ready(function () {
// 	var li = $(".owl-item button");
// 	$(".owl-item button").click(function () {
// 		li.removeClass('active');
// 	});
// });