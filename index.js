

function findMatching(drivers, name){
  return drivers.filter( driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, str){
  return drivers.filter( driver => driver.match(`^${str}`))
}

function matchName(drivers, name){
  return drivers.filter( driver => driver.name === name)
}
