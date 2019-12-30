// Code your solution here

function findMatching(drivers, match) {
    let driverMatches = drivers.filter(driver => { return driver.toLowerCase() == match.toLowerCase() });
    return driverMatches;
}

function fuzzyMatch(drivers, match) {
    let driverMatches = drivers.filter(driver => { return driver.slice(0,match.length) == match });
    return driverMatches;
}

function matchName(drivers, match) {
    let driverMatches = drivers.filter(driver => {
        return driver.name == match;
    })
    return driverMatches;
}