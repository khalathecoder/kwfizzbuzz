function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let endValue = document.getElementById("endValue").value;

    let fizzNumber = parseInt(fizzValue);
    let buzzNumber = parseInt(buzzValue);
    let endNumber = parseInt(endValue);

    if (Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber) && Number.isInteger(endNumber)) {
        let numberArray = generateFizzBuzz(fizzNumber, buzzNumber, endNumber);
        displayFizzBuzz(numberArray);
      } else {
        
        Swal.fire({
            icon: 'error',
            title: "Oops!",
            text: 'Please enter valid numbers for the Fizz and Buzz values.'
          });
      }
    }

function generateFizzBuzz(fizz, buzz, end) {
    let resultArray = [];

    for (let number = 1; number <= end; number++) {

      if (number % fizz == 0 && number % buzz == 0) {
        resultArray.push('FizzBuzz');
      } else if (number % buzz == 0) {
        resultArray.push('Buzz');
      } else if (number % fizz == 0) {
        resultArray.push('Fizz');
      } else {
        resultArray.push(number);
      }
    }

    return resultArray;
}

function displayFizzBuzz(numbers) {
    let results = "";

    for (let index = 0; index < numbers.length; index = index + 1) {
      let currentNumber = numbers[index];
  
      if (currentNumber % 2 == 0) {
        results += `<tr><td>${currentNumber}</td></tr>`;
      } else {
        results += `<tr><td>${currentNumber}</td></tr>`;
      }
    }
            
let tableBody = document.getElementById("results");
  tableBody.innerHTML = results;
    
}

    