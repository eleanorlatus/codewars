const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
let milesLeftInTank=mpg*fuelLeft
if (milesLeftInTank/distanceToPump>=1){
  return true
  }
  else{
    return false
  }
};
