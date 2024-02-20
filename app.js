const sections = document.querySelectorAll('.section');
const section_buttons = document.querySelectorAll('.controls');
const section_button = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    // button click active class
    for (let i = 0; i < section_button.length; i++) {
        section_button[i].addEventListener('click', function () {
            let current_button = document.querySelectorAll('.active-btn');
            if (current_button.length > 0) {
                current_button[0].classList.remove('active-btn');
            }
            this.classList.add('active-btn');
        })
    }

	//Section active class
	allSections.addEventListener('click', (e) =>{
		const id = e.target.dataset.id;
		if(id){
			//remove selected from the other buttons
			section_buttons.forEach((btn) =>{
				btn.classList.remove('active')
			})
			e.target.classList.add('active')

			//hide other sections
			sections.forEach(section =>{
				section.classList.remove('active')
			})
			
			const element = document.getElementById(id);
			element.classList.add('active');
		}
	})
}

PageTransitions()