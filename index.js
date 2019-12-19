// Code your solution here
function findMatching (drivers, outcome) {
  return drivers.filter(possibleFit =>
    possibleFit.toLowerCase() === outcome.toLowerCase()
  )
}

function fuzzyMatch (drivers, searchTerm) {
  return drivers.filter(possibleFit =>
    possibleFit.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0
  )
}

function matchName (drivers, searchTerm) {
  return drivers.filter(record => record.name === searchTerm )
}


