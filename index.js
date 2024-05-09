// Code your solution here
const findMatching = (drivers,name) => {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}
