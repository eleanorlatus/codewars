function absentVowel(x) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.map((l) => x.includes(l)).indexOf(false);
}

// OR

const absentVowel = (string) =>
  [..."aeiou"].findIndex((letter) => !string.includes(letter));
