// Code your solution here
function findMatching(drivers, string){
  let resultArray = drivers.filter(driver => {
    return driver.toLowerCase() == string.toLowerCase()
  })
  return resultArray
}

function fuzzyMatch(drivers, string){
  let resultArray = drivers.filter(driver => {
    let regex = new RegExp(`^${string}`, 'i')
    return driver.match(regex) ? true : false
  })

  return resultArray
}

function matchName(drivers, string){
  let resultArray = drivers.filter(driver => {
    return driver.name == string
  })
  return resultArray
}

