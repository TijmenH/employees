/**
* @description
* Retrieves a JSON list of employees and renders the list in HTML
*
*/
export default class Employees {
	constructor() {
		this.listContentEl = document.querySelector('.list__content');
		this.buildEmployeeList();
	}

	/**
	* @TODO refactor
	*/
	buildEmployeeList() {
		// @NOTE TEMPORARY JSON
		const employees = [
	    {
	      "name": "Omar Ras",
	      "role": "Scrum Master",
	      "bio": "My name is Omar and I’m an Agile Project Manager and Scrum Master that lives and breathes Agile. In addition, I’m experienced in E-commerce and like to be as much all-round as possible. I enjoy helping teams to achieve their goals and have fun doing so. In the past, I worked with the founders of Open Web and I am enjoying working with them again. When I’m not working, I enjoy spending quality time with my family and friends.",
	      "skills": ["scrum"],
	      "profileImage": "https://en.openweb.nl/binaries/teaser/content/gallery/ow/employees/omar.jpg"
	    },
	    {
	      "name": "Ebrahim Aharpour",
	      "role": "Java Developer",
	      "bio": "My name is Ebrahim and I’m an experienced Java developer with a thrust for learning and a passion for latest technology. I’m a firm believer of open source and have a long history of contributing to the open source community. I believe in the virtue of knowledge sharing and strive to create an atmosphere where people are passionate about technology and share their ideas, visions and aspiration.",
	      "skills": ["java"],
	      "profileImage": "https://en.openweb.nl/binaries/teaser/content/gallery/ow/employees/ebrahim.jpg"
	    },
		]

		const listToRender = employees.map((employee) => this.buildEmployeeListItem(employee)).join('');

		this.listContentEl.innerHTML = listToRender;
	}

	/**
	* @description
	* Builds a single employee list item with the provided details
	*
	* @param {object} employee - An object with the employee's info
	*
	* @return {HTML} - Single list item
	*/
	buildEmployeeListItem(employee) {
		return `
			<div class="list-item">
				<div class="list-item__profile-wrapper">
					<img src="${employee.profileImage}" />
				</div>
				<div class="list-item__details-wrapper">
					<h3 class="list-item__name">${employee.name}</h3>
					<p class="list-item__role">${employee.role}</p>
					<p class="list-item__description">${employee.bio}</p>
				</div>
				<div class="list-item__tag-cloud">
					<span class="list-item__tag">Hippo</span>
					<span class="list-item__tag">Java</span>
				</div>
			</div>
		`;
	}
}
