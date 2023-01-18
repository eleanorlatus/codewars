// before:

function addFive(num) {
  var total = num + 5
  return num
}

// after:
function addFive(num) {
  var total = num + 5
  return total
}

// refactored:

function addFive(num) {
  return num + 5
}