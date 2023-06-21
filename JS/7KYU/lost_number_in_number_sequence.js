function findDeletedNumber(arr, mixArr) {
  for (let i = 0; i < arr.length; i++) {
    if (!mixArr.includes(arr[i])) {
      return i + 1;
    }
  }
  return 0;
}
