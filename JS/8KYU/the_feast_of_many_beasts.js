function feast(beast, dish) {
    const beastFirst = beast.charAt(0)
    const beastLast = beast.charAt(beast.length-1)
    const feastFirst = dish.charAt(0)
    const feastLast = dish.charAt(dish.length-1)
     
    return beastFirst == feastFirst && beastLast == feastLast
}
     
// OR
     
function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
     
// OR
     
function feast(beast, dish) {
    return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
}