function stringTransformer(str) {
  const flippedCase = str
    .split("")
    .map((x) => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
    .join("");
  return flippedCase.split(" ").reverse().join(" ");
}

// OR

function stringTransformer(str) {
  return str
    .split("")
    .map((x) => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
}
