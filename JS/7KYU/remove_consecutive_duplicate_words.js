function removeConsecutiveDuplicates(string) {
  return string
    .split(" ")
    .filter((x, i, arr) => arr[i - 1] !== x)
    .join(" ");
}
