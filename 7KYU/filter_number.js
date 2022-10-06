var filterString = function(value) {
return +value.split("").filter((x)=> !isNaN(x)).join("")
}
