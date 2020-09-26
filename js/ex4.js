(function () {
  let word = prompt("Enter a word!");
  const allWords = [];

  while (word !== "stop") {
    allWords.push(word);
    word = prompt("Enter another word");
  }

  if (!!allWords.length) {
    console.log("You entered the following word:");
    allWords.forEach((ele) => console.log(ele));
  } else {
    console.log("No words to display, Stop was the first word entered.");
  }
})();
