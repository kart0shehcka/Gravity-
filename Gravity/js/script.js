$(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		navText: ['<img src="/img/icon/arrow_left.svg">', '<img src="/img/icon/arrow_right.svg">'],
		dots: false,
		startPosition: 2,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	$('.work-tabs__item').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
	}).first().addClass('active');

});


