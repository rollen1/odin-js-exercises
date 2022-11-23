const convertToCelsius = function(fahrenheit) {

  let toCelsius = (fahrenheit - 32) * 5 / 9;
  let celsiusFixed = parseFloat(toCelsius.toFixed(1));

  return celsiusFixed;

};

const convertToFahrenheit = function(celsius) {
  
  let toFahrenheit = celsius * 1.8 + 32;
  let fahrenheitFixed = parseFloat(toFahrenheit.toFixed(1));

  return fahrenheitFixed;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
