// Code your solution here

function findMatching(drivers, name) {
    let driver = drivers.filter(d => {
        return d == name
    })
    return driver
}