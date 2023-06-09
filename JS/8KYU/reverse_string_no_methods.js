const reverseString = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.unshift(str[i]);
  }
  return result.join("");
};
