function alphabetPosition(text) {
    let arr = text.toLowerCase().split("")
     return arr.map((x)=> (x.charCodeAt(x)-96)).filter((x)=> x>0 && x<27).join(" ")
   }