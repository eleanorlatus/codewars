function averageLength(arr) {
  const avg = Math.round(arr.reduce((a, b) => a + b.length, 0) / arr.length);
  return arr.map((x) => x[0].repeat(avg));
}
