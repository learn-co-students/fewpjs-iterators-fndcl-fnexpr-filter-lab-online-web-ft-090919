// Code your solution here


// const drivers = []


// const findMtaching = (arr, query) => {
//     return arr.filter(n => n.toLowerCase().indexOf(query.toLowerCase()) !== -1)
// }

const findMatching = (arr, query) => {
    return arr.filter(n => n.toLowerCase() === query.toLowerCase())
}


const fuzzyMatch = (arr, query) => {
    return arr.filter(n => n[0] === query[0] &&
        n.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

const matchName = (arr, query) => {
    return arr.filter(n => n.name === query )
}
// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

// /**
//  * Filter array items based on search criteria (query)
//  */
// const filterItems = (arr, query) => {
//   return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== 1)
// }

// console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']