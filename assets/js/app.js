$(function(){

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
	})

});