function dup(s) {
  let input = s.join(" ").split("");
  return input
    .filter((e, i, arr) => e !== arr[i + 1])
    .join("")
    .split(" ");
}
