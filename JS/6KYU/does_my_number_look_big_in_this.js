function narcissistic(value) {
return value.toString()
            .split("")
            .map((x, i, arr) => Math.pow(x, arr.length))
            .reduce((a,b) => a + b, 0)
            == value
}
