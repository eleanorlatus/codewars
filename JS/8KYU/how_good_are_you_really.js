const betterThanAverage = (classPoints, yourPoints) => yourPoints > classPoints.reduce((a,b)=>a+b,0)/classPoints.length
