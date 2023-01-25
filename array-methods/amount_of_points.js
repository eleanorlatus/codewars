function points(games) {
    return games.reduce((sum, [x,_,y])=> sum + (x > y ? 3 : x==y), 0)
  }