$(document).ready(function() { 	
	$('.top-slider-wrapper .slider').bxSlider({
		mode: 'fade',
	});
	$('.partners-slider').bxSlider({
		pager: false,
		slideWidth: 200,
		slideHeight: 100,
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 1
	});
	
	$('.isotope-portfolio').isotope({
		itemSelector: '.portfolio-item',
	});
	$('.isotope-portfolio-filter').on( 'click', '.isotope-portfolio-filter-item', function() {
	  var filterValue = $(this).attr('data-filter');
	  $('.isotope-portfolio-filter-item').removeClass('active');
	  $(this).addClass('active');
	  $('.isotope-portfolio').isotope({ filter: filterValue });
	});
	
	$('.nav-wrapper').scrollToFixed();
	
	var setActiveSection = function(id) {
		var activeElement = $('a.nav-link[href='+id+']');
		if ($(activeElement).length == 0)
			activeElement = $('a.nav-link[href=#'+id+']');
			
		if ($(activeElement).length > 0)
		{
			$('a.nav-link').parents('li').removeClass("active");
			$(activeElement).parents('li').addClass("active");
		}
	};
	
	$('a.scroll-section-link').click(function(event) {
		event.preventDefault();

		var sectionId = $(this).attr('href');
		var scrollTo = 0;
		if ($(sectionId).length > 0)
		{
			scrollTo = $(sectionId).offset().top;
		}
		else
			sectionId = '';

		$('html, body').animate({
			scrollTop: scrollTo
		}, 1000, function() {
			location.href = sectionId;
		});
	});
	
	var updateCurrentSection = function ()
	{
		var currentPosition = $(this).scrollTop() + $('nav').outerHeight(); 
		
		var closestAnchor;
		$('.anchor').each(function() { 
			if ($(this).offset().top <= currentPosition)
				closestAnchor = $(this).attr('id');
		});
		
		setActiveSection(closestAnchor);
	}
	
	$(window).scroll(updateCurrentSection);
	updateCurrentSection();
	
});