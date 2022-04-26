$('ul li ul').hide();

$('.menulink').click(function () {
	var thisMenu = $(this).next('ul');

	$('ul li ul').not(thisMenu).hide();

	thisMenu.toggle();
});
