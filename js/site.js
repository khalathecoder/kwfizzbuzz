function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    let fizzNumber = parseInt(fizzValue);
    let buzzNumber = parseInt(buzzValue);

    if (Number.isInteger(fizzNumber) == true && Number.isInteger(buzzNumber)) {
        let numberArray = generateFizzBuzz(fizzNumber, buzzNumber);
        displayFizzBuzz(numberArray);
      } else {
        //else, display an error and stop the js
        Swal.fire({
            icon: 'error',
            title: "Oops!",
            text: 'Please enter valid numbers for the Fizz and Buzz values.'
          });
      }
    }

function generateFizzBuzz(fizz, buzz) {
    let basketOfNumbers = [];

    for (let number = fizz; number <= buzz; number++) {
        basketOfNumbers.push(number);
    }

    return basketOfNumbers;
}

function displayFizzBuzz(numbers) {
    let results = "";

    for (let index = 0; index < numbers.length; index = index + 1) {
        let currentNumber = numbers[index];
    
        if (currentNumber % 3 == 0) {
            results += `<tr><td>Fizz</td></tr>`;
        } else {
          results += `<tr><td>${currentNumber}</td></tr>`;
        }
      }     
            
let tableBody = document.getElementById("results");
  tableBody.innerHTML = results;
    
}

    