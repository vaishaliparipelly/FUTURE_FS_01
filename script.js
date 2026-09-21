console.log("Welcome to Vaishali's Portfolio!");

const projectButton = document.querySelector('#home a');

projectButton.addEventListener('click', function () {
    console.log("Projects section opened");
});
// Contact form validation

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        event.preventDefault();
        alert("Please fill in all the fields.");
        return;
    }

});