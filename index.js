function findMatching(drivers, name) {
  return drivers.filter(driver => {
    return driver === name;
  });
}

let d = ["doug", "emily", "doug", "milo"];
let s = "doug";
console.log(findMatching(d, s));
