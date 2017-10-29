/**
* @description
* Entry JS file
*/
import '../scss/main.scss'; // @NOTE webpack will strip this out

/**
* @description
* Module imports
*/
import Employees from './modules/employees';

/**
* @description
* Event listener to load all modules as soon the DOM is loaded
*/
document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('.employees-page')) {
		new Employees();
	}
});
