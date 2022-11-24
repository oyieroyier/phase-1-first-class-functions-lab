// Code your solution in this file!

// 'madere' is an array I have used to test the codes:
let madere = ["Njoro", "Otis", "Kama", "Onyi", "Musyoks", "Karanja"];

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
// console.log(returnFirstTwoDrivers(madere));

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
// console.log(returnLastTwoDrivers(madere));

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return multiplier * fare;
  };
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare);
};
// console.log(createFareMultiplier(2)(300))

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare);
};
// console.log(createFareMultiplier(3)(300));

function selectDifferentDrivers(drivers, choice) {
	return choice(drivers)
}
// console.log(returnFirstTwoDrivers(madere));