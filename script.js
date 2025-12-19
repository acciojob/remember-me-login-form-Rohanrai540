//your JS code here. If required.
const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Check saved credentials on load
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
}

// Handle form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
    }
});

// Existing user login
existingBtn.addEventListener("click", function () {
    const savedUser = localStorage.getItem("username");
    alert(`Logged in as ${savedUser}`);
});
