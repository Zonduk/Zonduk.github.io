document.addEventListener('DOMContentLoaded', function() {

const showSlider = new Swiper('.aboutme__carousel', {
	//loop: true,
	speed: 1800,
	centeredSlides: true,
	direction: 'vertical',
	
	simulateTouch: true,
	grabCursor: true,
	
	navigation: {
		nextEl: '.aboutme-navigation__next',
		prevEl: '.aboutme-navigation__prev'
	}
});


const Slider = new Swiper('.aboutme-carousel__item', {
	slideToClickedSlide: true,
	nested: true,
	effect: 'flip',
	flipEffect: {
		slideShadows: true,
		limitRotation: true
	},


});

})

