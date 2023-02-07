// Uncomment the below lines to play around with the prompt function
/*
let temperature = prompt("Enter your temperature");
console.log(`You entered ${temperature}`);

// We have some formula here, but there's no real description as to what it does
let convertedTemperature = (temperature - 32) * 5 / 9;
console.log(`The converted temperature is ${convertedTemperature}`);
*/

// California: 62
let temperatureFahrenheitInCalifornia = 62;
let convertedTemperature = fahrenheitToCelsius(temperatureFahrenheitInCalifornia);
console.log(temperatureFahrenheitInCalifornia + "°F is " + convertedTemperature + "°C");

let temperatureCelsiusInEdmonton = 4;

// let not needed when re-assigning a variable!
convertedTemperature = celsiusToFahrenheit(4);
console.log(temperatureCelsiusInEdmonton + "°C is " + convertedTemperature + "°F");

/*
    input(s): temperatureFahrenheit 
    output(s): temperatureCelsius
 */
function fahrenheitToCelsius(temperatureFahrenheit) {
    // Take fahrenheit input, convert it to celsius
    let temperatureCelsius = (temperatureFahrenheit - 32) * 5 / 9;

    // return converted temperature
    return temperatureCelsius;
}

/*
    input(s): temperatureCelsius 
    output(s): temperatureFahrenheit
 */
function celsiusToFahrenheit(temperatureCelsius) {
    let temperatureFahrenheit = (temperatureCelsius * (9/5) + 32);

    return temperatureFahrenheit;
}