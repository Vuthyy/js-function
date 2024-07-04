function findMedian(numbers) {
  if (numbers.length === 0) return null;
  numbers.sort((a, b) => a - b);

  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    return (numbers[middle - 1] + numbers[middle]) / 2;
  } else {
    return numbers[middle];
  }
}

console.log(`The median of numbers is ${findMedian([2, 5, 4, 7, 6, 4])}`);
