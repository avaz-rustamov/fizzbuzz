let elForm = document.querySelector(".form-js");
var elFormInput = elForm.querySelector(".fizzbuzz-input");
var elResult = document.querySelector(".result");

// elForm.addEventListener()


const fizzBuzz = function(number) {
  if (number % 3 === 0 && number % 5 === 0)
    return ("FizzBuzz");
  else if (number % 3 === 0)
    return ("Fizz");
  else if (number % 5 === 0)
    return ("Buzz");
  else return number
}
console.log(fizzBuzz(3));