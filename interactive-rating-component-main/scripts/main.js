const ratingButtons = document.querySelectorAll(".rating-item");
const submitButton = document.querySelector(".submit-btn");
let selectedRating = 0;

ratingButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedRating = event.target.dataset.rating;

    document.getElementById("selected-rating").textContent = selectedRating;
    setSelection(selectedRating);
  });
});

const setSelection = (rating) => {
  ratingButtons.forEach((button) => {
    button.classList.remove("selected");
  });
  const selectedButton = document.querySelector(
    `.rating-item[data-rating="${rating}"]`,
  );
  if (selectedButton) {
    selectedButton.classList.add("selected");
  }
};

submitButton.addEventListener("click", () => {
  if (selectedRating > 0) {
    document.getElementById("rating-card").classList.add("hidden");
    document.getElementById("thank-you-card").classList.remove("hidden");
  }
});

const spaceKeyHandler = (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    event.target.click();
  }
};

ratingButtons.forEach((button) => {
  button.addEventListener("keydown", spaceKeyHandler);
});
