function disemvowel(str) {
  const vowels = "aeiou"
  return str.split("").filter((x) => !vowels.includes(x.toLowerCase())).join("")
}

// OR

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
