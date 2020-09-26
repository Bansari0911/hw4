(function () {
  const radius = Number(prompt("Enter the circle radius:"));

  const circle = {
    circumference: () => {
      return radius * 2 * 3.14;
    },
    area: () => {
      return radius * radius * 3.14;
    },
  };

  console.log(`It's circumference is: ${circle.circumference()}`);
  console.log(`It's area is: ${circle.area()}`);
})();
