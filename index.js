// Code your solution here
function findMatching(a, b) {
    return a.filter(possibleMatch => 
        possibleMatch.toLowerCase() === b.toLowerCase()
     )
}

function fuzzyMatch(a, string){
    return a.filter(possibleMatch =>
        possibleMatch.toLowerCase().indexOf(string.toLowerCase())=== 0
        )
}

function matchName(a, name) {
    return a.filter(record => record.name === name)
}