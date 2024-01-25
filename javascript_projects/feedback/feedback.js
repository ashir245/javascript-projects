// Getting Elements From The DOM
const panel = document.querySelector("#panel");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");

// Default Rating
let selectedRating = "Satisfied";

// Attaching Event Listeners
ratingsContainer.addEventListener("click", (e) => {
  // Check if the clicked element is a rating
  if (e.target.parentNode.classList.contains("rating")) {
    // Helper function to remove "active" class from all ratings
    removeActive();

    // Add "active" class to the clicked rating's parent container
    e.target.parentNode.classList.add("active");

    // Update selectedRating with the text of the next sibling (rating label)
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  // Update the panel's HTML with a thank-you message and the selected rating
  panel.innerHTML = `
    <p class="heart">💖</p>
    <strong>Thank You! </strong>
    <br>
    <strong>Feedback: ${selectedRating} </strong>
  `;
});

// Helper Function to Remove "active" Class from All Ratings
function removeActive() {
  const ratings = document.querySelectorAll(".rating");
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
