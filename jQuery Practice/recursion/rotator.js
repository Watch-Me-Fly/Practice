(function () {
	"use strict";

	/*		project rotator project		*/


	/*
		1. start
		2. counter = 1
		3. content rotator function
		4. fade in paragraph
			** is it the last paragraph ? 
				y == wait 7 sec ==> fade out paragraph counter ==> 0
				n == wait 7 sec ==> fade out paragraph counter ==>p++

		- CSS is set to display : none;
		- nth-child starts counting from 1, so counter should start at 1
	*/

	// DOM elements 
	let counter = 1;

	function contentRotator() {
		$('#container p:nth-child(' + counter + ')')
			.fadeIn(2000, function () {
				if ($(this).is('#container p:last-child')) {

					// wait 7s
					setTimeout(() => {

						// fade the p out
						nthChild.fadeOut(500, () => {

							// set the counter back to 1
							counter = 1;

							// run function agian
							contentRotator();
						});
					}, 3000);

				} else {

					// wait 7s
					setTimeout(() => {

						// fade the p out
						$('#container p:nth-child(' + counter + ')')
							.fadeOut(500, () => {

								// increment the counter
								counter++;

								// run function agian
								contentRotator();
							});
					}, 3000);
				}
			});
	}

	contentRotator();

}());
