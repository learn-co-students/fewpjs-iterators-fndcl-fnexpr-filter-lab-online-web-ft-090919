// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter( i => i.toLowerCase() === string.toLowerCase() );
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( i => i.slice(0, string.length) === string );
}

function matchName(drivers, string) {
    return drivers.filter( i => i.name === string );
}
