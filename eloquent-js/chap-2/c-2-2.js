// FizzBuzz

for (let numbers = 0; numbers <= 100; numbers++) {
    let output = "";
    if (numbers % 3 == 0) output += "Fizz";
    if (numbers % 5 == 0) output += "Buzz";
    console.log(output || numbers);
  }