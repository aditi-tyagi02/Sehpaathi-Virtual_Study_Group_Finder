document.addEventListener("DOMContentLoaded", () => {
    const profileForm = document.getElementById("profile-form");
    profileForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // Handle form submission and profile creation here
    });

    const joinButtons = document.querySelectorAll(".join-button");
    joinButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Handle joining a study group here
        });
    });
});
