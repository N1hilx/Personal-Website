const sections = document.querySelectorAll('.section');
const section_buttons = document.querySelectorAll('.controls');
const section_button = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    // Button click active class
    for (let i = 0; i < section_button.length; i++) {
        section_button[i].addEventListener('click', function () {
            // Remove 'active-btn' class from all buttons
            section_button.forEach(btn => {
                btn.classList.remove('active-btn');
            });

            // Add 'active-btn' class to the clicked button
            this.classList.add('active-btn');
        });
    }

    // Section active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove 'active' class from all buttons
            section_buttons.forEach((btn) => {
                btn.classList.remove('active');
            });

            // Add 'active' class to the clicked button
            e.target.classList.add('active');

            // Hide other sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}

PageTransitions();