// Code your solution here
function findMatching (drivers, str) {
    let filteredDrivers = drivers.filter(driver => {
        return driver.toLowerCase() === str.toLowerCase()
    })
    return filteredDrivers

}

function fuzzyMatch(drivers, str) {
    let filteredDrivers = drivers.filter(driver => {
        return driver.slice(0, 2).toLowerCase() === str.toLowerCase()
    })
    return filteredDrivers
}

function matchName(drivers, str) {
    let filteredDrivers = drivers.filter(driver => {
        return driver.name.toLowerCase() === str.toLowerCase()
    })
    return filteredDrivers
}