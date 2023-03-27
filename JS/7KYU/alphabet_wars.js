function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    if(result > 0) return "Right side wins!"
    if(result < 0) return "Left side wins!"
    else return "Let's fight again!"
}
