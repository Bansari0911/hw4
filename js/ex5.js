(function () {
  const word = prompt("Enter a word");

  function numberOfVowels() {
    let result = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    const split = word.split("");
    for (let i = 0; i < split.length; i++) {
      if (vowels.indexOf(split[i]) > -1) {
        result = result + 1;
      }
    }
    return result;
  }

  function isPelindrome() {
    const split = word.split("");
    if (split.length % 2 === 0) return false;
    for (let i = 0; i < split.length / 2; i++) {
      if (split[i] !== split[split.length - i - 1]) {
        return false;
      }
    }
    return true;
  }

  console.log(
    `${word} contains ${numberOfVowels()} vowels and is ${
      isPelindrome() ? "a" : "not"
    } Pelindrome`
  );
})();
