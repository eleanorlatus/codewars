function mostLikely(prob1,prob2){
  const p1 = prob1.split(':');
  const p2 = prob2.split(':');
  return p1[0]/p1[1] > p2[0]/p2[1];
}

// OR

const divide = (a, b) => a / b;
const mostLikely = (p1, p2) => divide(...p1.split(':')) > divide(...p2.split(':'));