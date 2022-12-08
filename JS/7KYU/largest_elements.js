function largest(n,xs){
    let sorted = xs.sort((a,b)=>a-b)
    return sorted.slice(sorted.length-n)
 }