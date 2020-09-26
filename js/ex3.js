(function () {
  const arr = [3, 11, 7, 2, 9, 10];
  let sum = 0;
  let max = 0;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log(`Sum of all the values = ${sum}`);
  console.log(`The maximum value = ${max}`);
  console.log(`The minimum value = ${min}`);
})();
