function solve(arr) {
  return arr.map((x) => [...new Set(x)]).reduce((a, b) => a * b.length, 1);
}
