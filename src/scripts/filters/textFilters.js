/* You could also export multiple functions (or classes) from one file. */

function UpperFilter() {
	'use strict';

	return function(input) {
		return input.toUpperCase();
	};
}

function LowerFilter() {
	'use strict';

	return function(input) {
		return input.toLowerCase();
	};
}

export {UpperFilter, LowerFilter};