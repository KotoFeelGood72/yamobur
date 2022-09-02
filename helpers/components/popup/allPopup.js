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




$(document).ready(function() {

	let popup = $('.popup');
	$('.header_delivery').click(function() {
		$('.address_popup').each(function() {
				$(this).toggleClass('active');
				console.log('Good', this);
				$(this).each(function() {
					$('.close_btn').click(function() {
						$(this).closest('.popup').removeClass('active');
						console.log(this)
					})
					$('.popup_bg').click(function() {
						$(this).closest('.popup').removeClass('active');
						console.log(this)
					})
				})
		})
	})
	/////////////
	$('.header_burger').click(function() {
			$(popup).removeClass('active')
		$('.burger_popup').each(function() {
				$(this).toggleClass('active');
				console.log('Good', this);
				$(this).each(function() {
					$('.close').click(function() {
						$(this).closest('.popup').removeClass('active');
						console.log(this)
					})
					$('.popup_bg').click(function() {
						$(this).closest('.popup').removeClass('active');
						console.log(this)
					})
				})
		})
	})

	$('.lisence_type--list li:first').trigger('click');
	$('.action_btn, .popup_sub--btn').click(function() {
		$(popup).removeClass('active');
		succes('.succes');
	})
	/////////////
	$('.trigger_details').click(function() {
		$('.products_detailsContentWrapper ').each(function() {
				$(this).toggleClass('active');
				$(this).each(function() {
					$('.productsDetails_bg').click(function() {
						$(this).closest('.products_detailsContentWrapper').removeClass('active');
					})
				})
		})
	})

})