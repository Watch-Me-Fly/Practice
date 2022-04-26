/*
  hiding submenus
*/
$('ul li ul').hide();
// equivalent to $('ul li ul').css('display', 'none');

/*
  to know which menu was clicked
*/
$('.menulink').click(function () {
	var thisMenu = $(this).next('ul'); // allows me to get the child ul
	/* 
		- is() method return T/F
		- :visible filter => if item is showing or not
	*/
	$('ul li ul').not(thisMenu).hide(); // to hide inactive ones
	thisMenu.toggle();
	// replaces :
	// if (thisMenu.is(':visible')) {
	// 	thisMenu.hide();
	// } else {
	// 	thisMenu.show();
	// }
});
