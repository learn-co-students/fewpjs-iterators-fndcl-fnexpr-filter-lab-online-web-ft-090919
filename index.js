// Code your solution here
function findMatching(drivers, toMatch) { 
  return drivers.filter(match => match.toLowerCase() === toMatch.toLowerCase())
} 


function fuzzyMatch(drivers, toMatch) { 
  return drivers.filter(match => match.toLowerCase().indexOf(toMatch.toLowerCase()) === 0)
} 


function matchName(drivers, toMatch) { 
  return drivers.filter(driver => driver.name === toMatch)
} 
