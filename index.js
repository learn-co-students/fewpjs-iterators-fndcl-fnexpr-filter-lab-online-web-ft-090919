// Code your solution here


function findMatching(drivers, string){
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string){
  return  drivers.filter(x => x.toLowerCase().startsWith(string.toLowerCase()))
} 

function matchName(drivers, string){
    return drivers.filter(x => x.name === string)
}