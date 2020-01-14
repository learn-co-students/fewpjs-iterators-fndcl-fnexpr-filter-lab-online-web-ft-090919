function findMatching(array, string) {
    return array.filter( n => n.toLowerCase() === string.toLowerCase() )
}

function fuzzyMatch(arr, str) {
    return arr.filter( n => n.charAt(1) === str.charAt(1) )
}

function matchName(arr, str) {
    return arr.filter( n => n.name === str )
}