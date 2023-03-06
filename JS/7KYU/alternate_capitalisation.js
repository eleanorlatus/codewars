function capitalize(s){
    const evenUpper =  s.split("").map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join("")
    const oddUpper =  s.split("").map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join("")
    return [evenUpper, oddUpper]
};