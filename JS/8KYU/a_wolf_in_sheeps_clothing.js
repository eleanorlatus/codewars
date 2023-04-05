function warnTheSheep(queue) {
const arr = queue.reverse()

if(arr[0] == 'wolf'){
  return "Pls go away and stop eating my sheep"
}
else{
  return `Oi! Sheep number ${arr.indexOf("wolf")}! You are about to be eaten by a wolf!`
}
}

// OR

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}
