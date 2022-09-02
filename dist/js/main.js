


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';

	gsap.registerPlugin(ScrollTrigger);


$(document).ready(function ($) {
	$body = $('body');

	if (devStatus) {
		pageWidget(['index']);
		pageWidget(['catalog']);
		pageWidget(['single-product']);
		pageWidget(['single-service']);
		pageWidget(['service']);
		pageWidget(['payment']);
		pageWidget(['about']);
		pageWidget(['contacts']);
		pageWidget(['policy']);
		pageWidget(['404']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	if(windowWidth > mediaPoint1) {
		allDefautAnim();
	}

	if($('#map')[0]) {
		map();
	}

	allPopup();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		// var vh2 = document.documentElement.clientHeight * 0.01;

		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: transparent'].join(';');
var message = 'Developed by KotoFeelGood';
console.info('%c%s', styles, message);




function map() {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
						center: [60.144095, 29.930985],
						zoom: 16,
						scroll: false,
				}, {
						searchControlProvider: 'yandex#search'
				}),
	
				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
						balloonContent: 'ул. Петровская, 53 Санкт-Петербург, Россия'
				}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/global/contacts_map.svg',
						iconImageSize: [51, 64],
						iconImageOffset: [-5, -38]
				});
	
		myMap.geoObjects
				.add(myPlacemark)
	});
}





const tehnicSlider = new Swiper('.tehnic_slider', {
	centeredSlides: true,
	centeredSlidesBounds: true,
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    640: {
      slidesPerView: 3.8,
      spaceBetween: 50
    }
	},
	navigation: {
		prevEl: '.prev',
		nextEl: '.next'
	},
	pagination: {
		el: '.tehnic_slide_pag'
	}
});



const reviewsSlider = new Swiper('.reviews_slider', {
	// centeredSlides: true,
	// centeredSlidesBounds: true,
	speed: 500,
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    640: {
      slidesPerView: 1.95,
      spaceBetween: 30
    }
	},
	navigation: {
		prevEl: '.reviewsPrev',
		nextEl: '.reviewsNext'
	},
	pagination: {
		el: '.rev_slide_pag'
	}
});

const otherSlider = Array.from(document.querySelectorAll('.other_slider')).map((item, i) => new Swiper(item, {
	speed: 500,
	// slidesOffsetAfter: 122,
	// slidesOffsetBefore: 122,
	navigation: {
		nextEl: '.otherNext',
		prevEl: '.otherPrev'
	},
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
			freeMode: false,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
			freeMode: false,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 30
    }
	},
	pagination: {
		el: '.other_pag',
		dynamicBullets: true,
	}
}))


const productsSlider = new Swiper('.products_slider', {
	spaceBetween: 50,
	pagination: {
		el: '.product_slider_pug'
	}
})


const showMore = document.querySelector('.aboutGallery_btn');
function showWork() {

	const workLenght = document.querySelectorAll('.aboutGallery_item').length;

	let workItems = 6; 

	showMore.addEventListener('click', (e) => {
		e.preventDefault();
		workItems+=3;

		const workList = Array.from(document.querySelector('.aboutGallery_list').children);
		const visibleWork = workList.slice(0, workItems)


		visibleWork.forEach(el => el.classList.add('is-visible'))
		if(visibleWork.length === workLenght) {
			showMore.classList.add('hidden')
		}
	})
}

if(showMore) {
	showWork();
}


function accordion(title, content) {
	// hide all content	
	let accordionTitle = $(title),
		accordionContent = $(content);
	$(accordionContent).hide();
	
	$(accordionTitle).on('click', function () {
		let $this = $(this);
		$this.parent().toggleClass('active_mod').siblings().removeClass('active_mod');
		$(accordionContent).slideUp();

		if (!$this.next().is(":visible")) {
			$this.next().slideDown();
		}
	});
};

accordion('.faq_item_head', '.faq_item_content');



var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});


$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if( scrolled > 107 ) {
			$('.header').addClass('fixed');
	}   
	if( scrolled <= 107 ) {     
			$('.header').removeClass('fixed');
	}
});

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function close(closes) {
	$(closes).toggleClass('active');
		setTimeout(function() {
			$(closes).removeClass('active')
		}, 3000)
}


$('.popup_form_btn').click(() => {
	succes('.succes')
	$('.popup_form').removeClass('active')
})

function allPopup() {
	// Popup form variable :
	const btnTrigger = document.querySelectorAll('.trigger_form')
	const popupForms = document.querySelector('.popup_form')
	const closePopups = document.querySelectorAll('.close_popups')
	const btnForm = document.querySelector('.popup_form_btn')

	const inputBnt = document.querySelectorAll('input[type="submit"]')

	// END



	// Burger variable :
	const triggerBurger = document.querySelector('.header_burger_trigger');
	const burgerPopup = document.querySelector('.popup_burger')
	const closeBurger = document.querySelectorAll('.closer_burger')

	//

	const bodyBlock = document.querySelector('body');

	triggerBurger.addEventListener('click', () => {
		burgerPopup.classList.add('active')
		bodyBlock.classList.add('active')
	})

	Array.from(closeBurger).map((item) => {
		item.addEventListener('click', () => {
			burgerPopup.classList.remove('active')
			bodyBlock.classList.remove('active')
		})
	})

	
	
	Array.from(btnTrigger).map((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault()
			popupForms.classList.add('active')
			bodyBlock.classList.add('active')
		})
	})

	Array.from(closePopups).map((item) => {
		item.addEventListener('click', (e) => {
			popupForms.classList.remove('active')
			bodyBlock.classList.remove('active')
		})
	})

	btnForm.addEventListener('click', () => {
		popupForms.classList.remove('active')
		bodyBlock.classList.remove('active')
		setTimeout(() => {

			succes('.succes')
		}, 300)
	})

	Array.from(inputBnt).map((item) => {
		item.addEventListener('click', () => {
			setTimeout(() => {
				close('.close')
			}, 300)
		})
	})
}


// gsap.registerPlugin(ScrollTrigger);

function paralax(bottom = false, start = '-=60% top', end = 'bottom') {
	const paralaxWrapper = Array.from(document.querySelectorAll('.paralaxSection')).map(function(el) {
		const arr = Array.from(el.querySelectorAll('.paralaxEl')).map(function (item) {
			const tl = gsap.timeline();
			ScrollTrigger.create({
				animation: tl,
				trigger: el,
				start: start,
				end: end,
				scrub: 2,
				ease: 'none',
				// markers: true,
			})
			tl.to(item, {
				y: (target) => ((bottom ? el.offsetHeight : false) || -el.offsetHeight) * (item.dataset.ratio || 0.2),
			});
		})
	});
}

function allDefautAnim(bottom = false, start = '-=30% center', end = 'bottom') {
	const paralaxWrapper = Array.from(document.querySelectorAll('.sec_anim')).map(function(el) {
		const arr = Array.from(el.querySelectorAll('.el_anim')).map(function (item, index) {
			const tl = gsap.timeline();
			ScrollTrigger.create({
				animation: tl,
				trigger: el,
				start: start,
				end: end,
				ease: 'none',
				// markers: true,
			})
			tl.fromTo(item, {
				y: 100, 
				duration: .4,
				autoAlpha: 0,
			}, {
				y: 0,
				autoAlpha: 1,
				delay: 0.1 + (0.1 * index),
			});
		});
	});

	paralax();
}





































