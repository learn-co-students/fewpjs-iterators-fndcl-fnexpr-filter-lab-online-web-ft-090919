const findMatching = (drivers, name) => {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

const fuzzyMatch = (drivers, str) => {
  return drivers.filter(driver => {
    return driver.toLowerCase().indexOf(str.toLowerCase()) === 0;
  });
}

const matchName = (drivers, name) => {
  return drivers.filter(driver => driver["name"] === name);
}
