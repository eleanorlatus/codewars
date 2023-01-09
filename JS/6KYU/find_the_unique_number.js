function findUniq(arr) {
return Number(arr.filter((x) => arr.indexOf(x)==arr.lastIndexOf(x)))
}
