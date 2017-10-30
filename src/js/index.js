/**
* @description
* Entry JS file
*/
import '../scss/main.scss'; // @NOTE webpack will strip this out

/**
* @description
* Module imports
*/
import FilterHandler from './modules/filterHandler';

/**
* @description
* Event listener to load all modules as soon the DOM is loaded
*/
document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('.filter')) {
		new FilterHandler();
	}
});
