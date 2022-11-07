function toCamelCase(str){
return str.split(/-|_/).map((x,i) => i!= 0 ? x.charAt(0).toUpperCase() + x.slice(1) : x).join("")
}
