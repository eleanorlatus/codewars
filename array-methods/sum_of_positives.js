function positiveSum(arr) {
    return arr.filter((x) => x > 0).reduce((a,b) => a + b, 0)
  }