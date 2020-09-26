(function () {
  var num1 = Number(prompt("Please enter number 1"));
  var num2 = Number(prompt("Please enter number 2"));
  var operator = prompt(
    "Please enter a arithmetic operator from the following (+, -, *, /)"
  );

  switch (operator) {
    case "+":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "-":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case "*":
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      break;
    case "/":
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
      break;
    default:
      console.log("No matching operator");
  }
})();
