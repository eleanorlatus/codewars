function swap (string) {
    const vowels = ['a','e','i','o','u']
    return string.split("").map((x) => vowels.includes(x) ? x.toUpperCase() : x).join("")
    }