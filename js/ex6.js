(function () {
  const randomNum = Math.floor(Math.random() * 100);
  let tries = 1;
  let userNum = Number(prompt("Please guess a number between 1 and 100"));

  while (userNum !== randomNum) {
    if (userNum < randomNum) {
      alert("Too low, guess again");
      userNum = Number(prompt("Please guess a number between 1 and 100"));
    } else {
      alert("Too high, guess again");
      userNum = Number(prompt("Please guess a number between 1 and 100"));
    }
    tries++;
  }

  console.log(
    `Correct it took you ${tries} attempts to guess the correct number.`
  );
})();
