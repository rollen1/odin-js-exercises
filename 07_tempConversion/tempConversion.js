const convertToCelsius = function(fahrenheit) {

let toCelsius = Math.round(fahrenheit) - 32 * 0.5556;

return toCelsius;

};

const convertToFahrenheit = function(celsius) {
  
  let toFahrenheit = celsius * 1.8 + 32;

  return toFahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
