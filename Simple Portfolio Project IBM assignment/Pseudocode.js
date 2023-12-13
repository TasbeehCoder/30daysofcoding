// Recommendation form elements
const reviewName = document.getElementById("name");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

// Function to clear the recommendation form
function clearRecommendationForm() {
    reviewName.value = "";
    message.value = "";
}

// Function to show popup on form submission
function showRecommendationThanks(messageText) {
    const popup = document.createElement("div");
    popup.classList.add("popup", "active");
    popup.innerHTML = messageText;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.remove("active");
        document.body.removeChild(popup);
    }, 3000); // Hide popup after 3 seconds
}

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (!reviewName.value || !message.value) {
        alert("Please fill in both name and message fields.");
        return;
    }

    clearRecommendationForm();
    showRecommendationThanks('Thank you for submitting your recommendation!');
    console.log("Recommendation submitted!");
});





















//-----------------***********----------------//


/*


// Recommendation form elements
const reviewName = document.getElementById("name");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

// Add submit event listener to the recommendation form
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (!reviewName.value || !message.value) {
        alert("Please fill in both name and message fields.");
        return;
    }

    // Function to show popup on form submission
    function showRecommendationThanks(message) {
        const popup = document.createElement("div");
        popup.classList.add("popup", "active");
        popup.innerHTML = message;
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

    // Submit the recommendation data (implement your desired method)
    console.log("Recommendation submitted!");

    showRecommendationThanks('Thank you for submitting your recommendation!');
    clearRecommendationForm();
});
*/


/*

// Define the function outside the event handler
function showRecommendationThanks(message) {
    const popup = document.createElement("div");
    popup.classList.add("popup", "active");
    popup.innerHTML = message;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.remove("active");
        document.body.removeChild(popup);
    }, 3000); // Hide popup after 3 seconds
}



// Inside the click event handler, call the function with the desired message:
showRecommendationThanks("Thank you for submitting your recommendation!");

// ... validation and data submission logic ...

showRecommendationThanks("Thank you for submitting your recommendation!");
clearRecommendationForm();
*/