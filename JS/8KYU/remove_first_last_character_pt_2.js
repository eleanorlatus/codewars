function array(string) {
    const arr = string.split(",")
    const result = arr.slice(1, arr.length-1).join(" ")
    return result.length > 0 ? result : null
}