var number = function(busStops){
  let numOn = 0
  let numOff = 0
  for(let i = 0; i < busStops.length; i++){
    numOn += busStops[i][0]
    numOff += busStops[i][1]
  }
return numOn - numOff
}

//OR

const number = busStops => busStops.reduce((n, [on, off]) => n + on - off, 0);
