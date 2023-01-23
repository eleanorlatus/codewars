function duplicateEncode(word){
    let arr = word.toLowerCase().split("")
    return arr.map((x) => arr.indexOf(x) == arr.lastIndexOf(x) ? "(" : ")").join("")
}
