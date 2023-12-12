document.addEventListener('DOMContentLoaded', function () {
    // About Me Section
    const aboutMeLink = document.querySelector('.nav_list a[href="#aboutMe"]');
    const aboutMeSection = document.querySelector('.about_section');

    aboutMeLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection(aboutMeSection);
    });

    // Skills Section
    const skillsLink = document.querySelector('.nav_list a[href="#skills"]');
    const skillsSection = document.querySelector('.skills_section');

    skillsLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection(skillsSection);
    });

    // Projects Section
    const projectsLink = document.querySelector('.nav_list a[href="#projects"]');
    const projectsSection = document.querySelector('.projects_section');

    projectsLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection(projectsSection);
    });

    // Recommendation Section
    const recommendationLink = document.querySelector('.nav_list a[href="#recommendation"]');
    const recommendationSection = document.querySelector('.recommendation_section');

    recommendationLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection(recommendationSection);
    });

    // Scroll to a section smoothly
    function scrollToSection(section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Recommendation Form
    const recommendationForm = document.querySelector('.form_recommendation');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();

        // Assuming you have validation logic in the validateForm function
        if (validateForm()) {
            // Perform actions when the form is valid
            alert('Recommendation submitted successfully!');
            recommendationForm.reset(); // Optional: Reset the form
        } else {
            // Handle invalid form case, e.g., display an error message
            alert('Please fill in all required fields.');
        }
    });

    // Optional: Validation function to check if the form is valid
    function validateForm() {
        // Implement your validation logic here
        // Return true if the form is valid, false otherwise
        // Example: Check if required fields are filled
        const requiredFields = document.querySelectorAll('.required');
        for (const field of requiredFields) {
            if (field.value.trim() === '') {
                return false;
            }
        }
        return true;
    }
});
