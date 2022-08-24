// Code your solution here
const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];
function findMatching(drivers, name) {

  return drivers
    .filter(function (driver) {
      return driver.toLowerCase().includes(name.toLowerCase());
    })
}

function fuzzyMatch(drivers, name) {
  return drivers
    .filter(function (driver) {
      return driver.toLowerCase().startsWith(name.toLowerCase());
    })
}

function matchName(drivers, name) {
  return drivers
    .filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    })
}

  
  // function matchName(drivers, name) {
  //   
  //   return source.filter((record) => record.name === name);
  // }