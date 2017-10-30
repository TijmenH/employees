/**
* @description
* Handles filtering on multiple tags in a list
*
*/
export default class filterHandler {
	constructor() {
		this.allFilterEls = document.querySelectorAll('.list-item__tag');
		this.filterContentEl = document.querySelector('.filter__content');
		this.allOptionEls = {};
		this.filters = [];

		this.initOptions();
	}

	/**
	* @description
	* Retrieves all unique filters from the rendered data and renders them all as
	* options in a filter block
	*/
	initOptions() {
		this.filters = this.getUniqueFilterValues();
		const filterOptionEls = this.buildOptions();
		this.renderFilterList(filterOptionEls);
		// Update the list of filter option elements
		this.allOptionEls = document.querySelectorAll('.filter__option');

		// Done adding dynamic elements; Add event listeners
		this.addEventListeners();
	}

	/**
	* @description
	* Adds event listeners to specific elements
	*/
	addEventListeners() {
		// Add click event to all option elements
		this.allOptionEls.forEach((option) => {
			option.addEventListener('click', (e) => {
				this.onFilterClick(e.target)
			});
		})
	}

	/**
	* @description
	*	Returns an unique array of filter based on all list item's tags
	*
	* @return {array} - unique tags
	*/
	getUniqueFilterValues() {
		// Grab each filter's innerHTML
		const tags = Object.keys(this.allFilterEls).map((key) => this.allFilterEls[key].innerHTML);
		// Filter out duplicates
		return tags.filter((value, index, arr) => arr.indexOf(value) === index);
	}

	/**
	* @description
	* Converts all filters to option elements
	*
	* @return {string} - all option elements in one string
	*/
	buildOptions() {
		return this.filters.map((filter) => {
			return `<span class="filter__option" data-filter="${filter}">${filter}</span>`;
		}).join('');
	}

	/**
	* @description
	* Places the supplied options in the filter content
	*
	* @param {string}
	*/
	renderFilterList(options) {
		this.filterContentEl.innerHTML = options;
	}

	/**
	* @description
	* callback when clicking an option
	*
	* @param {object} target - event target
	*/
	onFilterClick(target) {
		console.log(target);
	}
}
