function findDeletedNumber(arr, mixArr) {
  for (let i = 0; i < arr.length; i++) {
    if (!mixArr.includes(arr[i])) {
      return i + 1;
    }
  }
  return 0;
}

// OR

function findDeletedNumber(arr, mixArr) {
  const arrSum = arr.reduce((a, b) => a + b, 0);
  const mixArrSum = mixArr.reduce((a, b) => a + b, 0);
  return arrSum - mixArrSum;
}

// OR

function findDeletedNumber(arr, mixArr) {
  return arr.find((x) => mixArr.indexOf(x) == -1) || 0;
}
