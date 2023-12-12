// Navigation links
const aboutMeBtn = document.getElementById("about_me");
const skillsBtn = document.getElementById("skills");
const projectsBtn = document.getElementById("projects");
const recommendationBtn = document.getElementById("recommendation");

// Recommendation form elements
const reviewName = document.getElementById("name");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

// Function to show popup on form submission
function showRecommendationThanks() {
    const popup = document.createElement("div");
    popup.classList.add("popup", "active");
    popup.innerHTML = "Thank you for submitting your recommendation!";
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.remove("active");
        document.body.removeChild(popup);
    }, 3000); // Hide popup after 3 seconds
}

// Function to clear the recommendation form
function clearRecommendationForm() {
    reviewName.value = "";
    message.value = "";
}

// Add click event listeners to navigation links
aboutMeBtn.addEventListener("click", function () {
    smoothScroll(document.getElementById("about_section"));
});
skillsBtn.addEventListener("click", function () {
    smoothScroll(document.getElementById("skills_section"));
});
projectsBtn.addEventListener("click", function () {
    smoothScroll(document.getElementById("projects_section"));
});
recommendationBtn.addEventListener("click", function () {
    smoothScroll(document.getElementById("recommendation_section"));
});

// Add submit event listener to the recommendation form
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (!reviewName.value || !message.value) {
        alert("Please fill in both name and message fields.");
        return;
    }

    // Submit the recommendation data (implement your desired method)
    console.log("Recommendation submitted!");

    showRecommendationThanks('Thank You for ');
    clearRecommendationForm();
});

// Define smooth scroll function (if not already implemented)
function smoothScroll(target) {
    const targetPosition = target.offsetTop;
    const scrollDuration = 500;
    const scrollStep = targetPosition / scrollDuration;

    let scrollAmount = 0;
    const scrollInterval = setInterval(() => {
        if (scrollAmount >= targetPosition) {
            clearInterval(scrollInterval);
            return;
        }
        window.scrollBy(0, scrollStep);
        scrollAmount += scrollStep;
    }, 10);
}
