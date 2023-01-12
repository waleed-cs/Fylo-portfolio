const Form = document.querySelector("form");

const input = document.querySelector("#emailInput");
const errorMessage = document.querySelector(".error");
const RegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  Validate();
});

const Validate = () => {
  if (input.value.match(RegExp)) {
    errorMessage.style.display = "none";
    console.log(true);
  } else {
    errorMessage.style.display = "block";
    console.log(false);
  }
};
