function findMatching(arr, str) {
    return arr.filter( n => n.toLowerCase() === str.toLowerCase() )
}

function fuzzyMatch(arr, str) {
    return arr.filter( n => n.charAt(1) === str.charAt(1) )
}

function matchName(arr, str) {
    return arr.filter( n => n.name === str )
}

