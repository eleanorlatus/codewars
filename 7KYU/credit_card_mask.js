function maskify(cc) {
return cc.split("").map((x,i)=> i < cc.length-4 ? "#" : x).join("")
}
