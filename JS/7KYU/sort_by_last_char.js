function last(x) {
  return x
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

// OR

function last(x) {
  return x.split(" ").sort((a, b) => a.slice(-1) > b.slice(-1));
}
