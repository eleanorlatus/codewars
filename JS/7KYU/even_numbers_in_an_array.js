function evenNumbers(array, number) {
  const even = array.filter((x) => x % 2 == 0);
  return even.slice(even.length - number);
}

// OR

function evenNumbers(array, number) {
  return array.filter((x) => x % 2 == 0).slice(-number);
}
