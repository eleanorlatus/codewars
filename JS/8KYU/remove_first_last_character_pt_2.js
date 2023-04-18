function array(string) {
    const arr = string.split(",")
    const result = arr.slice(1, arr.length-1).join(" ")
    return result.length > 0 ? result : null
}

// OR

function array(string) {
    return string.split(",").slice(1,-1).join(" ") || null
    }