$(function(){

	/* Filter */
	let filter = $("[data-filter]");

	filter.on("click", function(event){

		event.preventDefault()
		let cat = $(this).data('filter');

		$("[data-cat]").each(function() {
			let workCat = $(this).data('cat');
			if (cat === "all") {
				$(this).removeClass('hide');
				return;
			} 
			(workCat !== cat) ?
				$(this).addClass('hide') :
				$(this).removeClass('hide');
		});
	});

	/* Modal */
	let modalCall = $("[data-modal]"),
		modalClose = $("[data-close]");
	modalCall.on("click", function(event){

		event.preventDefault();
		let $self = $(this),
			modalId = $self.data('modal');

		$(modalId).addClass("show");
		$("body").addClass("no-scroll");

		setTimeout(function(){

			$(modalId).find(".modal__dialog").css({
				transform: "rotateX(0)"
			});

		}, 200);
		

	});

	modalClose.on("click", function(event){

		event.preventDefault();
		let $self = $(this),
			modalParent = $self.parents('.modal');

		modalParent.find(".modal__dialog").css({
			transform: "rotateX(90deg)"
		});

		setTimeout(function(){
		
			$(modalParent).removeClass("show");
			$("body").removeClass("no-scroll");

		}, 200);

	});

	$(".modal").on("click", function(){
		
		let self = $(this);
		self.find(".modal__dialog").css({
			transform: "rotateX(90deg)"
		});

		setTimeout(function(){
			self.removeClass("show");
			$("body").removeClass("no-scroll");
		}, 200);

	});

	$(".modal__dialog").on("click", function(event){
		event.stopPropagation();
	});

	/* Slider (slick.js)*/
	$('#worksSlider').slick({
	  	infinite: true,
	  	slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: false,
		adaptiveHeight: true
	});

});