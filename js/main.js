let elForm = document.querySelector(".form-js");
var elFormInput = document.querySelector(".fizzbuzz-input");
var elResult = document.querySelector(".form-result");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let inputValue = elFormInput.value;

  if (inputValue % 3 === 0 && inputValue % 5 === 0) {
    elResult.textContent = "FizzBuzz";
    console.log("FizzBuzz");
  } else if (inputValue % 3 === 0) {
    elResult.textContent = "Fizz";
    console.log("Fizz");
  } else if (inputValue % 5 === 0) {
    elResult.textContent = "Buzz";
    console.log("Buzz");
  } else return inputValue;
});
