const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

const modal = document.getElementById("message-modal");
const closeModal = document.getElementById("close-modal");



yesButton.addEventListener("mouseover", () => {
    // Get the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get the button dimensions
    const buttonWidth = yesButton.offsetWidth;
    const buttonHeight = yesButton.offsetHeight;

    // Generate random coordinates within the screen boundaries
    const randomX = Math.random() * (viewportWidth - buttonWidth);
    const randomY = Math.random() * (viewportHeight - buttonHeight);

    // Move the button to the new position
    yesButton.style.position = "absolute";
    yesButton.style.left = `${randomX}px`;
    yesButton.style.top = `${randomY}px`;
});

yesButton.addEventListener("click", () => {
    alert("Haha, not so easy! Try the 'No' button.");
});

// Show the modal when "No" button is clicked
noButton.addEventListener("click", () => {
    modal.classList.remove("hidden"); // Make the modal visible
});

// Close the modal when the "OK" button is clicked
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden"); // Hide the modal
});