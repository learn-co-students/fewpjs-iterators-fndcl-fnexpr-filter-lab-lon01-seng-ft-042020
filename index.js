
let findMatching = (drivers, string) => {
    return drivers.filter( driver => driver.toLowerCase() === string.toLowerCase())
  }
  
//   function findMatching(source, sought) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase() === sought.toLowerCase()
//     )
//   }
  

// let fuzzyMatch = (drivers, string) => {
//     return drivers.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
// }


function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0)
}


function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}

// function matchName(drivers, string) {
//     return drivers.filter(function(driver) {
//        return driver.name === string
//     })
// }