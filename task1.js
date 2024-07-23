function convertTemperature() {
    const temperature = document.getElementById('temperature').value;
    const conversionType = document.getElementById('conversionType').value;
    let result = 0;

    if (conversionType === 'toCelsius') {
        result = (temperature - 32) * 5 / 9;
        document.getElementById('result').innerText = `${temperature}°F is ${result.toFixed(2)}°C`;
        updateThermometer(result, 'celsius');
    } else {
        result = (temperature * 9 / 5) + 32;
        document.getElementById('result').innerText = `${temperature}°C is ${result.toFixed(2)}°F`;
        updateThermometer(result, 'fahrenheit');
    }
}

function updateThermometer(value, scale) {
    const maxTemperature = scale === 'celsius' ? 100 : 212; // Maximum value for Celsius or Fahrenheit
    const height = Math.min((value / maxTemperature) * 100, 100); // Ensure the height doesn't exceed 100%

    document.getElementById('mercury').style.height = height + '%';
}
