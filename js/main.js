let elForm = document.querySelector(".form-js");
var elFormInput = document.querySelector(".fizzbuzz-input");
var elResult = document.querySelector(".form-result");

const fizzBuzzCheck = function (num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    return "Fizz";
    console.log("Fizz");
  } else if (num % 5 === 0) {
    return "Buzz";
  } else return num;
};

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let inputValue = elFormInput.value;

  if (inputValue <= 0 || isNaN(inputValue)) {
    elResult.innerHTML = null;
    return;
    elResult.textContent = "Just enter the whole number!";
  }

  elResult.textContent = fizzBuzzCheck(inputValue);
});
