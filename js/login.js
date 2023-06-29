const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");
const form = document.querySelector(".login-form");

// Checking and validating the input.
// If input had more than 2 values, button will be activated.
// Else, button will be disabled
const validateInput = (event) => {
  console.log(event.target.value);

  if (event.target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }
  button.setAttribute("disabled", "");
};

const handleSubmit = (event) => {
  console.log("Play button pressed: " + input.value);
  localStorage.setItem("player", input.value);
  event.preventDefault();
  window.location = "pages/game.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
