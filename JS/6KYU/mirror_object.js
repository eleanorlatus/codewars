const mirror = obj => {
    let mirror = {}
for(let key in obj){
  mirror[key] = key.split("").reverse().join("")
}
return mirror
};
