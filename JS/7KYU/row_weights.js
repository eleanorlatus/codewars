function rowWeights(array){
let team1Weight = 0
let team2Weight = 0

array.forEach((x,i) => i % 2 == 0 ? team1Weight += x : team2Weight += x)

return [team1Weight,team2Weight]

}

// OR

function rowWeights(array){
const team1Weight = array.filter((x,i)=> i % 2 == 0).reduce((a,b) => a + b, 0)
const team2Weight = array.filter((x,i)=> i % 2 != 0).reduce((a,b) => a + b, 0)

return [team1Weight, team2Weight]
}
