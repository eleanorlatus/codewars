function convertPalindromes(n) {
return n.map((x) => x.toString().split("").reverse().join("") == x ? 1: 0)
};

// OR

function convertPalindromes(n) {
  return n.map(x => String(x) == String(x).split("").reverse().join("") ? 1 : 0)
};
