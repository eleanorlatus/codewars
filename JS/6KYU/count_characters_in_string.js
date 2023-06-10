function count(string) {
  const map = {};
  for (let char in string) {
    const l = string[char];
    if (map[l]) {
      map[l]++;
    } else {
      map[l] = 1;
    }
  }
  return map;
}

// OR

function count(string) {
  var map = {};
  string.split("").forEach(function (s) {
    map[s] ? map[s]++ : (map[s] = 1);
  });
  return map;
}
