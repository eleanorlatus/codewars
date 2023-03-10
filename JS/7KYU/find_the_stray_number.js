function stray(n) {
    return Number(n.filter((x)=> n.indexOf(x) == n.lastIndexOf(x)))
    }