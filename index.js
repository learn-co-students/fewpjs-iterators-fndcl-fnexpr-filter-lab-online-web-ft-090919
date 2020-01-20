function findMatching(list, searchTerm) {
  let result = list.filter(match =>
  // convert searchTerm and match to lower case
  match.toLowerCase() === searchTerm.toLowerCase()
  )
  return result
}

function fuzzyMatch(list, searchTerm) {
  return list.filter(match => 
  // convert match and searchTerm to lowercase 
  // still trying to wrap my head around .indexOf
  match.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0)
}

function matchName(list, searchTerm) {
  return list.filter(match => match.name === searchTerm)
}